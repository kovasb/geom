(ns thi.ng.geom.webgl.shaders.phong
  (:require
    [thi.ng.geom.core :as g]
    [thi.ng.geom.webgl.core :as gl]
    [thi.ng.geom.webgl.buffers :as buf]))

(def shader-spec
  {:vs "
  void main(){
      vec4 worldPos = model * vec4(position, 1.0);
      vec4 eyePos = view * worldPos;
      vEyePos = eyePos.xyz;
      vNormal = (normalMat * vec4(normal, 0.0)).xyz;
      vLightPos = (view * vec4(lightPos, 1.0)).xyz;
      vCol = normal * 0.5 + 0.5;
      gl_Position = proj * eyePos;
  }"
   :fs "
  vec3 ambientColor = vec3(0.1, 0.1, 0.1);
  vec3 specularColor = vec3(1.0, 1.0, 1.0);
  vec3 diffuseColor = vCol;
  
  float phong(vec3 L, vec3 E, vec3 N) {
    vec3 R = reflect(-L, N);
    return dot(R, E);
  }
  
  float blinnPhong(vec3 L, vec3 E, vec3 N) {
    vec3 halfVec = normalize(L + E);
    return dot(halfVec, N);
  }
  
  void main() {
    vec3 L = normalize(vLightPos - vEyePos);
    vec3 E = normalize(-vEyePos);
    vec3 N = normalize(vNormal);
  
    float NdotL = max(0.0, (dot(N, L) + wrap) / (1.0 + wrap));
    vec3 color = ambientColor + NdotL * diffuseColor;
  
    float specular = 0.0;
    if (useBlinnPhong)
      specular = blinnPhong(L, E, N);
    else
      specular = phong(L, E, N);
  
    color += max(pow(specular, shininess), 0.0) * specularColor;
  
    gl_FragColor = vec4(color, 1.0);
  }"
   :uniforms {:view          :mat4
              :proj          :mat4
              :model         :mat4
              :normalMat     :mat4
              :shininess     :float
              :lightPos      :vec3
              :useBlinnPhong :bool
              :wrap          :float}
   :attribs {:position       :vec3
             :normal         :vec3}
   :varying {:vNormal        :vec3
             :vEyePos        :vec3
             :vLightPos      :vec3
             :vCol           :vec3}})

(defn draw-phong
  [^WebGLRenderingContext gl spec]
  (buf/draw-arrays
   gl (update-in
       spec [:uniforms]
       #(assoc % :normalMat (-> (:model %) (g/invert) (g/transpose))))))
