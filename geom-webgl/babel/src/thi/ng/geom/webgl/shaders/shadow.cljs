(ns thi.ng.geom.webgl.shaders.shadow
  (:require
   [thi.ng.geom.webgl.core :as gl]
   [thi.ng.geom.webgl.buffers :as buf]
   [thi.ng.geom.webgl.shaders :as sh]))

(def light-pass-spec
  {:vs "
  void main() {
    vWorldPos = model * vec4(position, 1.0);
    gl_Position = proj * view * vWorldPos;
  }"
   :fs "
  void main() {
    vec3 lightPos = (view * vWorldPos).xyz;
    float depth = clamp(length(lightPos)/10.0, 0.0, 1.0);
    gl_FragColor = vec4(vec3(depth), 1.0);
  }"
   :uniforms {:view :mat4
              :proj :mat4
              :model :mat4}
   :attribs {:position :vec3}
   :varying {:vWorldPos :vec4}})

(def cam-pass-spec
  {:vs "
  void main(){
    vNormal = normal;
    vWorldPos = model * vec4(position, 1.0);
    gl_Position = proj * view * vWorldPos;
  }"
   :fs "
  float attenuation(vec3 dir) {
    float dist = length(dir);
    float radiance = 1.0/(1.0+pow(dist/10.0, 2.0));
    return clamp(radiance*10.0, 0.0, 1.0);
  }
  
  float influence(vec3 normal, float coneAngle) {
    float minConeAngle = (360.0-coneAngle-10.0) * RAD;
    float maxConeAngle = (360.0-coneAngle) * RAD;
    return smoothstep(minConeAngle, maxConeAngle, acos(normal.z));
  }
  
  float lambert(vec3 surfaceNormal, vec3 lightDirNormal) {
    return max(0.0, dot(surfaceNormal, lightDirNormal));
  }
  
  vec3 skyLight(vec3 normal) {
    return vec3(smoothstep(0.0, PI, PI-acos(normal.y)))*0.4;
  }
  
  vec3 gamma(vec3 color) {
    return pow(color, vec3(2.2));
  }
  
  float texture2DCompare(sampler2D depths, vec2 uv, float compare) {
    float depth = texture2D(depths, uv).r;
    return step(compare, depth);
  }
  
  float texture2DShadowLerp(sampler2D depths, vec2 size, vec2 uv, float compare) {
    vec2 texelSize = vec2(1.0)/size;
    vec2 f = fract(uv * size + 0.5);
    vec2 centroidUV = floor(uv * size + 0.5) / size;
  
    float lb = texture2DCompare(depths, centroidUV + texelSize * vec2(0.0, 0.0), compare);
    float lt = texture2DCompare(depths, centroidUV + texelSize * vec2(0.0, 1.0), compare);
    float rb = texture2DCompare(depths, centroidUV + texelSize * vec2(1.0, 0.0), compare);
    float rt = texture2DCompare(depths, centroidUV + texelSize * vec2(1.0, 1.0), compare);
    return mix(mix(lb, lt, f.y), mix(rb, rt, f.y), f.x);
  }
  
  void main() {
    vec3 worldNormal = normalize(vNormal);
  
    vec3 camPos = (view * vWorldPos).xyz;
    vec3 lightPos = (lightView * vWorldPos).xyz;
    vec3 lightPosNormal = normalize(lightPos);
    vec3 lightSurfaceNormal = lightRot * worldNormal;
  
    vec4 lightDevice = lightProj * vec4(lightPos, 1.0);
    vec2 lightDeviceNormal = lightDevice.xy/lightDevice.w;
    vec2 lightUV = lightDeviceNormal*0.5+0.5;
  
    // shadow calculation
    float bias = 1e-4;
    float lightDepth2 = clamp(length(lightPos)/10.0, 0.0, 1.0)-bias;
    float illuminated = texture2DShadowLerp(lightDepthTex, lightDepthSize, lightUV, lightDepth2);
  
    vec3 excident = (
                     0.4 + skyLight(worldNormal) +
                     lambert(lightSurfaceNormal, -lightPosNormal) *
                     influence(lightPosNormal, coneAngle) *
                     attenuation(lightPos) *
                     illuminated
                     );
  
    excident *=  worldNormal * 0.5 + 0.5; // TODO remove, debug only
  
    gl_FragColor = vec4(gamma(excident), 1.0);
  }"
   :uniforms {:view :mat4
              :proj :mat4
              :model :mat4
              :lightView :mat4
              :lightProj :mat4
              :lightRot :mat3
              :lightDepthTex :sampler2D
              :lightDepthSize :vec2
              :coneAngle :float}
   :attribs  {:position :vec3
              :normal :vec3}
   :varying  {:vNormal :vec3
              :vWorldPos :vec4}})

(defn init-light-fbo
  [^WebGLRenderingContext gl size]
  (let [float-ext (.call (aget gl "getFloatExtension") gl
                         (clj->js {:require ["renderable"]
                                   :prefer ["filterable" "half"]}))
        tex (buf/make-texture2d
             gl {:type   (.-type float-ext)
                 :width  size
                 :height size
                 :filter gl/linear
                 :wrap   gl/clamp-to-edge})]
    {:tex tex
     :fbo (-> (buf/make-fbo gl)
              (gl/bind)
              (gl/set-fbo-color-texture tex)
              (gl/set-fbo-depth-buffer (buf/make-depth-buffer gl size size))
              (gl/unbind))}))

(defn draw-light-pass
  [^WebGLRenderingContext gl {:keys [fbo tex]} draw]
  (gl/bind fbo)
  (doto gl
    (gl/set-viewport 0 0 (:width tex) (:height tex))
    (gl/clear-color-buffer 1 1 1 1)
    (gl/clear-depth-buffer 1)
    (gl/enable gl/depth-test)
    (gl/cull-faces gl/front))
  (draw)
  (gl/unbind fbo))

(defn draw-cam-pass
  [^WebGLRenderingContext gl tex draw]
  (doto gl
    (gl/clear-depth-buffer 1)
    (gl/enable gl/depth-test)
    (gl/cull-faces gl/back))
  (gl/bind tex 0)
  (draw {:lightDepthTex 0
         :lightDepthSize [(:width tex) (:height tex)]}))
