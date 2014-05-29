(ns thi.ng.geom.webgl.shaders.basic)

(defn make-color-shader-spec
  [& {attr? :attrib is3d? :3d :or {attr? false, is3d? true}}]
  (let [spec {:vs (str "void main() { "
                       (if attr?
                         "vCol = color; " "")
                       "gl_Position = proj * "
                       (if is3d?
                         "view * model * vec4(position, 1.0)"
                         "model * vec4(position, 0.0, 1.0)")
                       "; }")
              :fs (str "void main() { gl_FragColor = "
                       (if attr? "vCol" "color")
                       "; }")
              :uniforms {:proj  :mat4
                         :model :mat4}
              :attribs  {:position (if is3d? :vec3 :vec2)}}
        spec (if attr?
               (-> spec
                   (assoc-in [:attribs :color] :vec4)
                   (assoc :varying {:vCol :vec4}))
               (assoc-in spec [:uniforms :color] :vec4))
        spec (if is3d?
               (assoc-in spec [:uniforms :view] :mat4)
               spec)]
    spec))
