// Compiled by ClojureScript 0.0-2202
goog.provide('thi.ng.geom.webgl.shaders.phong');
goog.require('cljs.core');
thi.ng.geom.webgl.shaders.phong.shader_spec = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"vs","vs",1013908015),"\nvoid main(){\n    vec4 worldPos = model * vec4(position, 1.0);\n    vec4 eyePos = view * worldPos;\n    vEyePos = eyePos.xyz;\n    vNormal = (normalMat * vec4(normal, 0.0)).xyz;\n    vLightPos = (view * vec4(lightPos, 1.0)).xyz;\n    vCol = normal * 0.5 + 0.5;\n    gl_Position = proj * eyePos;\n}",new cljs.core.Keyword(null,"fs","fs",1013907519),"\nvec3 ambientColor = vec3(0.1, 0.1, 0.1);\nvec3 specularColor = vec3(1.0, 1.0, 1.0);\nvec3 diffuseColor = vCol;\n\nfloat phong(vec3 L, vec3 E, vec3 N) {\n  vec3 R = reflect(-L, N);\n  return dot(R, E);\n}\n\nfloat blinnPhong(vec3 L, vec3 E, vec3 N) {\n  vec3 halfVec = normalize(L + E);\n  return dot(halfVec, N);\n}\n\nvoid main() {\n  vec3 L = normalize(vLightPos - vEyePos);\n  vec3 E = normalize(-vEyePos);\n  vec3 N = normalize(vNormal);\n\n  float NdotL = max(0.0, (dot(N, L) + wrap) / (1.0 + wrap));\n  vec3 color = ambientColor + NdotL * diffuseColor;\n\n  float specular = 0.0;\n  if (useBlinnPhong)\n    specular = blinnPhong(L, E, N);\n  else\n    specular = phong(L, E, N);\n\n  color += max(pow(specular, shininess), 0.0) * specularColor;\n\n  gl_FragColor = vec4(color, 1.0);\n}",new cljs.core.Keyword(null,"uniforms","uniforms",709120177),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"view","view",1017523735),new cljs.core.Keyword(null,"mat4","mat4",1017248326),new cljs.core.Keyword(null,"proj","proj",1017353935),new cljs.core.Keyword(null,"mat4","mat4",1017248326),new cljs.core.Keyword(null,"model","model",1117974171),new cljs.core.Keyword(null,"mat4","mat4",1017248326),new cljs.core.Keyword(null,"normalMat","normalMat",1250485867),new cljs.core.Keyword(null,"mat4","mat4",1017248326),new cljs.core.Keyword(null,"shininess","shininess",2126879672),new cljs.core.Keyword(null,"float","float",1111430606),new cljs.core.Keyword(null,"lightPos","lightPos",2005850320),new cljs.core.Keyword(null,"vec3","vec3",1017519761),new cljs.core.Keyword(null,"useBlinnPhong","useBlinnPhong",4559010218),new cljs.core.Keyword(null,"bool","bool",1016933980),new cljs.core.Keyword(null,"wrap","wrap",1017562044),new cljs.core.Keyword(null,"float","float",1111430606)], null),new cljs.core.Keyword(null,"attribs","attribs",4634025563),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",1761709211),new cljs.core.Keyword(null,"vec3","vec3",1017519761),new cljs.core.Keyword(null,"normal","normal",4269125721),new cljs.core.Keyword(null,"vec3","vec3",1017519761)], null),new cljs.core.Keyword(null,"varying","varying",1251174370),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vNormal","vNormal",704244847),new cljs.core.Keyword(null,"vec3","vec3",1017519761),new cljs.core.Keyword(null,"vEyePos","vEyePos",4750370283),new cljs.core.Keyword(null,"vec3","vec3",1017519761),new cljs.core.Keyword(null,"vLightPos","vLightPos",3539232614),new cljs.core.Keyword(null,"vec3","vec3",1017519761),new cljs.core.Keyword(null,"vCol","vCol",1017487516),new cljs.core.Keyword(null,"vec3","vec3",1017519761)], null)], null);