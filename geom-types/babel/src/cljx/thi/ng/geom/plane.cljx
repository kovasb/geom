(ns thi.ng.geom.plane
  #+cljs (:require-macros [thi.ng.macromath.core :as mm])
  (:require
   [thi.ng.geom.core :as g]
   [thi.ng.geom.core.utils :as gu]
   [thi.ng.geom.core.intersect :as isec]
   [thi.ng.geom.core.vector :as v :refer [vec3]]
   [thi.ng.geom.core.quaternion :as q]
   [thi.ng.geom.gmesh :as gm]
   [thi.ng.geom.types :as types]
   [thi.ng.geom.types.utils :as tu]
   [thi.ng.common.error :as err]
   [thi.ng.common.math.core :as m :refer [*eps* INF+]]
   #+clj [thi.ng.macromath.core :as mm]))

(defn plane
  [n w] (thi.ng.geom.types.Plane. (g/normalize (vec3 n)) w))

(defn plane-with-point
  [p n]
  (let [n (g/normalize (vec3 n))]
    (thi.ng.geom.types.Plane. n (g/dot n p))))

(defn plane-from-points
  ([[a b c]] (plane-from-points a b c))
  ([a b c]
     (let [n (gu/ortho-normal a b c)]
       (thi.ng.geom.types.Plane. n (g/dot n a)))))




(extend-type thi.ng.geom.types.Plane
g/PArea
(area [_] INF+)
g/PBounds
(bounds
 [_]
 (let [s (vec3 (g/width _) (g/height _) (g/depth _))]
   (thi.ng.geom.types.AABB. (g/madd s -0.5 (g/centroid _)) s)))
(width
 [_] (if (m/delta= (g/abs (:n _)) v/V3X *eps*) 0.0 INF+))
(height
 [_] (if (m/delta= (g/abs (:n _)) v/V3Y *eps*) 0.0 INF+))
(depth
 [_] (if (m/delta= (g/abs (:n _)) v/V3Z *eps*) 0.0 INF+))
g/PBoundingSphere
(bounding-sphere
  [_] (thi.ng.geom.types.Sphere. (g/centroid _) INF+))
g/PCenter
(center
  ([_] (thi.ng.geom.types.Plane. (:n _) 0))
  ([_ o] (plane-with-point o (:n _))))
(centroid
  ([_] (g/* (:n _) (:w _))))
g/PClassify
(classify-point
  [_ p]
  (-> (:n _) (g/dot p) (- (:w _)) (m/signum *eps*)))
g/PDistance
(dist
 [_ p] (->> p (g/dot (:n _)) (+ (- (:w _)))))
(dist-squared
 [_ p] (let [d (g/dist _ p)] (* d d)))
g/PFlip
(flip
  [_] (thi.ng.geom.types.Plane. (g/- (:n _)) (- (:w _))))
g/PIntersect
(intersect-line
 ([_ l]
    (let [[p q] (if (map? l) (:points l) l)]
      (isec/intersect-ray-plane? p (g/- q p) (:n _) (:w _))))
 ([_ p q]
    (isec/intersect-ray-plane? p (g/- q p) (:n _) (:w _))))
(intersect-ray
 ([_ ray]
    (let [[p dir] (if (map? ray) [(:p ray) (:dir ray)] ray)]
      (isec/intersect-ray-plane? p dir (:n _) (:w _))))
 ([_ p dir]
    (isec/intersect-ray-plane? p dir (:n _) (:w _))))
(intersect-shape
 [_ s]
 (cond
  (instance? thi.ng.geom.types.Plane s)
  (isec/intersect-plane-plane? (:n _) (:w _) (:n s) (:w s))
  :default (err/illegal-arg! s)))
g/PMeshConvert
(as-mesh
 ([_] (g/as-mesh _ {}))
 ([_ {:keys [p width height size mesh] :or {size 1.0}}]
    (let [w (* (or width size) 0.5)
          h (* (or height size) 0.5)
          flip? (m/delta= -1.0 (g/dot (:n _) v/V3Z))
          p (g/closest-point _ (or p (vec3)))
          q (if flip?
              (q/quat 0 0 0 1)
              (q/alignment-quat v/V3Z (:n _)))
          [a b c d] (map #(g/+ p (g/transform-vector q %))
                         [(vec3 (- w) (- h) 0) (vec3 (- w) h 0)
                          (vec3 w h 0) (vec3 w (- h) 0)])]
      (gm/add-face
       (or mesh (gm/gmesh))
       (if flip? [a b c d] [d c b a])))))
g/PProximity
(closest-point
  [_ p]
  (->> p
       (g/dot (:n _))
       (+ (- (:w _)))
       (g/normalize (:n _))
       (g/- p)))
g/PScale
(scale
 ([_ s] (plane-with-point (g/* (g/centroid _) s) (:n _)))
 ([_ a b] (plane-with-point (g/* (g/centroid _) a b) (:n _)))
 ([_ a b c] (plane-with-point (g/* (g/centroid _) a b c) (:n _))))
(scale-size
 ([_ s] _))
g/PTranslate
(translate
 [_ t] (plane-with-point (g/+ (g/centroid _) t) (:n _)))
g/PTransform
(transform
 [_ m] (plane-with-point
        (g/transform-vector m (g/centroid _))
        (g/transform-vector m (:n _))))
g/PVolume
(volume [_] 0.0)
)
