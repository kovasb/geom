(ns thi.ng.geom.webgl.example03
  (:require-macros
   [thi.ng.macromath.core :as mm])
  (:require
   [thi.ng.geom.webgl.core :as gl]
   [thi.ng.geom.webgl.arrays :as arrays]
   [thi.ng.geom.webgl.animator :as anim]
   [thi.ng.geom.webgl.buffers :as buf]
   [thi.ng.geom.webgl.shaders :as sh]
   [thi.ng.geom.webgl.utils :as glu]
   [thi.ng.geom.core :as g]
   [thi.ng.geom.core.vector :as v :refer [vec2 vec3]]
   [thi.ng.geom.core.matrix :as mat :refer [M44]]
   [thi.ng.geom.types]
   [thi.ng.common.math.core :as m :refer [PI HALF_PI TWO_PI]]
   [thi.ng.geom.webgl.shaders.shadow :as shadow]
   [thi.ng.geom.webgl.shaders.overlay :as overlay]
   [thi.ng.geom.aabb :as a]
   [thi.ng.geom.basicmesh :refer [basic-mesh]]
   [thi.ng.morphogen.core :as mg]))

(defn init-stats
  []
  (let [stats (js/Stats.)
        sdom  (.call (aget stats "getDomElement") stats)]
    (.appendChild (.-body js/document) sdom)
    (.setAttribute sdom "class" "stats")
    stats))

(defn update-stats
 [stats]
 (.call (aget stats "update") stats))

(defn mg-hex-sphere
  []
  (let [hex           (mg/apply-recursively (mg/reflect :dir :e) 5 [1] 1)
        reflected-hex (mg/reflect :dir :n :out [{} hex])
        inject        #(-> hex
                           (assoc-in (mg/child-path [1 1 0]) %)
                           (assoc-in (mg/child-path [1 1 1 1 0]) %))
        seed-clone    (mg/reflect
                       :dir :s :out [{} (inject reflected-hex)])
        tree          (mg/reflect
                       :dir :s :out [(inject seed-clone) (inject reflected-hex)])]
    (-> (mg/seed (mg/sphere-lattice-seg 6 0.25 0.0955 0.2))
        (mg/walk tree)
        (mg/union-mesh (basic-mesh))
        (g/transform (-> M44 (g/rotate-x (- HALF_PI)) (g/scale 0.5))))))

(defn ^:export demo
  []
  (enable-console-print!)
  (let [gl           (gl/gl-context "main")
        light-shader (sh/make-shader-from-spec gl shadow/light-pass-spec)
        cam-shader   (sh/make-shader-from-spec gl shadow/cam-pass-spec)
        mesh         (mg-hex-sphere)
        room         (-> (a/aabb 5)
                         (g/center (vec3 0 2.4 0))
                         (g/as-mesh)
                         (g/flip))
        mesh         (g/into mesh room)
        model        (-> mesh
                         (gl/as-webgl-buffer-spec {:tessellate true :fnormals true})
                         (buf/make-attribute-buffers-in-spec gl gl/static-draw))
        ov-quad      (overlay/overlay-spec-from-rect gl)
        view-rect    (gl/get-viewport-rect gl)
        cam-proj     (gl/perspective 45 view-rect 0.1 100.0)
        light-proj   (gl/perspective 45 1 0.01 100)
        light-fbo    (shadow/init-light-fbo gl 512)
        stats        (init-stats)]

    (anim/animate
     (fn [[t frame]]
       (let [y          (m/map-interval (Math/sin (* t 0.5)) -1 1 0 3)
             cam-view   (-> (vec3 0 y 2)
                            (g/rotate-y (* t 0.4))
                            (mat/look-at (vec3 0 0 0) (vec3 0 1 0)))
             model-tx   (-> M44 (g/translate 0 0 0) (g/rotate-x (* 0 0.15)))
             cone-angle (m/map-interval (Math/cos (* t 0.3)) -1 1 30 90)
             lr         (* (m/map-interval (Math/cos (* t 0.7)) -1 1 -0.85 0.85) PI)
             light-view (mat/look-at (g/rotate-y (vec3 0 2.4 2.4) lr) (vec3 0 0 0) (vec3 0 1 0))
             light-rot  (mat/matrix44->matrix33-rot light-view)]

         (shadow/draw-light-pass
          gl light-fbo
          #(buf/draw-arrays
            gl (assoc model
                 :shader  light-shader
                 :attribs (select-keys (:attribs model) [:position])
                 :uniforms {:model model-tx
                            :view  light-view
                            :proj  light-proj})))
         (gl/set-viewport gl view-rect)
         (gl/clear-color-buffer gl 0.08 0.1 0.12 1.0)
         (shadow/draw-cam-pass
          gl (:tex light-fbo)
          (fn [uniforms]
            (buf/draw-arrays
             gl (assoc model
                  :shader   cam-shader
                  :uniforms (assoc uniforms
                              :model     model-tx
                              :view      cam-view
                              :proj      cam-proj
                              :lightView light-view
                              :lightProj light-proj
                              :lightRot  light-rot
                              :coneAngle cone-angle)))))

         (gl/disable gl gl/depth-test)
         (gl/disable gl gl/cull-face)
         (overlay/draw-overlay2d
          gl (assoc ov-quad
               :viewport view-rect
               :pos [(m/map-interval (Math/sin t) -1 1 0 512) 352]
               :width 128
               :height 128))

         (update-stats stats)
         ;; keep animating...
         true)))))
