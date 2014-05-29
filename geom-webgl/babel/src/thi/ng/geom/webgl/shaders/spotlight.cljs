(ns thi.ng.geom.webgl.shaders.spotlight)

(def shader-spec
  {:vs "
void main(){
  vNormal = normal;
  vWorldPos = model * vec4(position, 1.0);
  gl_Position = proj * view * vWorldPos;
}"
   :fs "
float attenuation(vec3 dir){
  float dist = length(dir);
  float radiance = 1.0/(1.0+pow(dist/10.0, 2.0));
  return clamp(radiance*10.0, 0.0, 1.0);
}

float influence(vec3 normal, float coneAngle){
  float minConeAngle = (360.0-coneAngle-10.0) * RAD;
  float maxConeAngle = (360.0-coneAngle) * RAD;
  return smoothstep(minConeAngle, maxConeAngle, acos(normal.z));
}

float lambert(vec3 surfaceNormal, vec3 lightDirNormal){
  return max(0.0, dot(surfaceNormal, lightDirNormal));
}

vec3 skyLight(vec3 normal){
  return vec3(smoothstep(0.0, PI, PI-acos(normal.y)))*0.4;
}

vec3 gamma(vec3 color){
  return pow(color, vec3(2.2));
}

void main(){
  vec3 worldNormal = normalize(vNormal);

  vec3 camPos = (view * vWorldPos).xyz;
  vec3 lightPos = (lightView * vWorldPos).xyz;
  vec3 lightPosNormal = normalize(lightPos);
  vec3 lightSurfaceNormal = lightRot * worldNormal;

  vec3 excident = (
                   skyLight(worldNormal) +
                   lambert(lightSurfaceNormal, -lightPosNormal) *
                   influence(lightPosNormal, coneAngle) *
                   attenuation(lightPos)
                   );
  gl_FragColor = vec4(gamma(excident), 1.0);
}"
   :uniforms {:view :mat4
              :proj :mat4
              :model :mat4
              :lightView :mat4
              :lightRot :mat3
              :coneAngle :float}
   :attribs {:position :vec3
             :normal :vec3}
   :varying {:vNormal :vec3
             :vWorldPos :vec4}})
