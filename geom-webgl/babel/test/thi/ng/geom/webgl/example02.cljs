(ns thi.ng.geom.webgl.example02
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
   [thi.ng.geom.webgl.shaders.phong :as phong]
   [thi.ng.geom.circle :as c]
   [thi.ng.geom.polygon :as poly]
   [thi.ng.geom.basicmesh :refer [basic-mesh]]))

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

(defn ^:export demo
  []
  (enable-console-print!)
  (let [gl         (gl/gl-context "main")
        view-rect  (gl/get-viewport-rect gl)
        teeth      20
        model      (-> (poly/cog 0.5 teeth [0.9 1 1 0.9])
                       (g/extrude {:mesh (basic-mesh) :depth 0.1 :scale 0.9})
                       (gl/as-webgl-buffer-spec {:tessellate true :fnormals true})
                       (buf/make-attribute-buffers-in-spec gl gl/static-draw)
                       (assoc :shader (sh/make-shader-from-spec gl phong/shader-spec))
                       (update-in [:uniforms] merge
                                  {:proj (gl/perspective 45 view-rect 0.1 100.0)
                                   :lightPos (vec3 0 0.5 1)
                                   :shininess 64
                                   :useBlinnPhong true
                                   :wrap 0}))
        stats      (init-stats)]
    (anim/animate
     (fn [[t frame]]
       (let [model (assoc-in
                    model [:uniforms :view]
                    (mat/look-at (vec3 0 0 2) (vec3) (vec3 0 1 0)))
             rot   (g/rotate-y M44 (* t 0.5))
             tx1   (g/* rot (-> M44
                                (g/translate -0.46 0 0)
                                (g/rotate-y 0.3)
                                (g/rotate-z t)))
             tx2   (g/* rot (-> M44
                                (g/translate 0.46 0 0)
                                (g/rotate-y -0.3)
                                (g/rotate-z (- (+ t (/ HALF_PI teeth))))))]

         (gl/set-viewport gl view-rect)
         (gl/clear-color-buffer gl 1 0.98 0.95 1.0)
         (gl/clear-depth-buffer gl 1)
         (gl/enable gl gl/depth-test)  
         (phong/draw-phong gl (assoc-in model [:uniforms :model] tx1))
         (phong/draw-phong gl (assoc-in model [:uniforms :model] tx2))

         (update-stats stats)
         true)))))