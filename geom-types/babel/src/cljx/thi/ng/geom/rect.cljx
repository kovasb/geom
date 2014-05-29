(ns thi.ng.geom.rect
  (:require
   [thi.ng.geom.core :as g]
   [thi.ng.geom.core.utils :as gu]
   [thi.ng.geom.core.intersect :as isec]
   [thi.ng.geom.core.vector :as v :refer [vec2 vec3]]
   [thi.ng.geom.aabb :as a]
   [thi.ng.geom.gmesh :as gm]
   [thi.ng.geom.types :as types]
   [thi.ng.geom.types.utils :as tu]
   [thi.ng.common.data.core :as d]
   [thi.ng.common.error :as err]
   [thi.ng.common.math.core :as m :refer [*eps*]]
   #+clj [thi.ng.macromath.core :as mm])
  #+cljs (:require-macros [thi.ng.macromath.core :as mm])
  #+clj
  (:import
   [thi.ng.geom.types Circle2 Polygon2 Rect2]))

(defn rect
  ([] (thi.ng.geom.types.Rect2. (vec2) (vec2 1.0)))
  ([w] (thi.ng.geom.types.Rect2. (vec2) (vec2 w)))
  ([p q]
     (if (sequential? p)
       (if (sequential? q)
         (let [p (vec2 p) q (vec2 q)
               [p q] [(g/min p q) (g/max p q)]]
           (thi.ng.geom.types.Rect2. p (g/- q p)))
         (thi.ng.geom.types.Rect2. (vec2 p) (vec2 q)))
       (thi.ng.geom.types.Rect2. (vec2) (vec2 p q))))
  ([x y w]
     (if (number? x)
       (thi.ng.geom.types.Rect2. (vec2 x y) (vec2 w))
       (thi.ng.geom.types.Rect2. (vec2 x) (vec2 y w))))
  ([x y w h] (thi.ng.geom.types.Rect2. (vec2 x y) (vec2 w h))))

(defn union
  [{p :p [w h] :size} {q :p [qw qh] :size}]
  (let [[x1 y1 :as p*] (g/min p q)
        x2 (max (+ (p 0) w) (+ (q 0) qw))
        y2 (max (+ (p 1) h) (+ (q 1) qh))
        w (- x2 x1)
        h (- y2 y1)]
    (thi.ng.geom.types.Rect2. p* (vec2 w h))))

(defn map-uv
  [{:keys [p size]} [qx qy]]
  (vec2 (mm/subdiv qx (p 0) (size 0)) (mm/subdiv qy (p 1) (size 1))))

(defn unmap-uv
  [{:keys[p size]} [qx qy]]
  (vec2 (mm/madd qx (size 0) (p 0)) (mm/madd qy (size 1) (p 1))))

(defn left [r] ((:p r) 0))
(defn right [r] (+ ((:p r) 0) ((:size r) 0)))
(defn bottom [r] ((:p r) 1))
(defn bottom-left [r] (:p r))
(defn top [r] (+ ((:p r) 1) ((:size r) 1)))
(defn top-right [r] (g/+ (:p r) (:size r)))

(extend-type thi.ng.geom.types.Rect2
g/PArea
(area [_] (reduce * (:size _)))
g/PBoundary
(contains-point?
 [{[px py] :p [w h] :size} [x y]]
 (and (m/in-range? 0.0 w (- x px)) (m/in-range? 0.0 h (- y py))))
g/PBounds
(bounds[_] _)
(width  [_] ((:size _) 0))
(height [_] ((:size _) 1))
(depth  [_] 0)
g/PBoundingCircle
(bounding-circle
 [_]
 (let [c (g/centroid _)]
   (tu/bounding-circle c (g/dist c (:p _)))))
g/PCenter
(center
 ([{s :size}]
    (thi.ng.geom.types.Rect2. (g/* s -0.5) s))
 ([{s :size} o]
    (thi.ng.geom.types.Rect2. (g/madd s -0.5 o) s)))
(centroid
 [_] (g/madd (:size _) 0.5 (:p _)))
g/PCircumference
(circumference [_] (* 2.0 (reduce + (:size _))))
g/PClassify
(classify-point
 [_ q] (->> (g/edges _)
            (map #(m/signum (apply gu/closest-point-coeff q %) *eps*))
            (reduce min)))
g/PExtrude
(extrude
 [_ {:keys [depth scale offset] :or {depth 1.0 scale 1.0} :as opts}]
 (if (and (== scale 1.0) (nil? offset))
   (g/as-mesh
    (thi.ng.geom.types.AABB. (vec3 (:p _)) (conj (:size _) depth)) (:mesh opts))
   (g/extrude (g/as-polygon _) opts)))
(extrude-shell
 [_ opts] (g/extrude-shell (g/as-polygon _) opts))
g/PVertexAccess
(vertices
 [_]
 (let [a (:p _)
       c (g/+ a (:size _))]
   [a (vec2 (c 0) (a 1)) c (vec2 (a 0) (c 1))]))
g/PEdgeAccess
(edges
 [_] (let [a (:p _)
           c (g/+ a (:size _))
           b (vec2 (c 0) (a 1))
           d (vec2 (a 0) (c 1))]
       [[a b] [b c] [c d] [d a]]))
g/PGraph
(vertex-neighbors
 [_ v] (d/neighbors (vec2 v) (g/vertices _)))
(vertex-valence
 [_ v] (if ((set (g/vertices _)) (vec2 v)) 2 0))
g/PIntersect
(intersect-line
 [_ l])
(intersect-ray
 [_ r])
(intersect-shape
 [_ s]
 (cond
  (instance? thi.ng.geom.types.Rect2 s) (isec/intersect-rect-rect? _ s)
  (instance? thi.ng.geom.types.Circle2 s) (isec/intersect-aabb-sphere? _ s)
  :default (err/type-error! "Rect2" s)))
g/PMeshConvert
(as-mesh
 ([_] (g/as-mesh _ {}))
 ([_ opts]
    (g/add-face
     (or (:mesh opts) (gm/gmesh))
     (mapv vec3 (g/vertices _)))))
g/PPolygonConvert
(as-polygon
 [_] (thi.ng.geom.types.Polygon2. (g/vertices _)))
g/PProximity
(closest-point
 [_ p] (gu/closest-point-on-segments p (g/edges _)))
g/PSample
(point-at
 [_ t] (gu/point-at t (conj (g/vertices _) (:p _))))
(random-point
 [_] (g/point-at _ (m/random)))
(random-point-inside
 [_] (g/+ (:p _) (m/random ((:size _) 0)) (m/random ((:size _) 1))))
(sample-uniform
 [_ udist include-last?]
 (gu/sample-uniform udist include-last? (conj (g/vertices _) (:p _))))
g/PSubdivide
(subdivide
 ([_] (g/subdivide _ {}))
 ([_ {:keys [num cols rows] :or {num 2}}]
    (let [dx (/ 1.0 (or cols num))
          dy (/ 1.0 (or rows num))
          rx (range 0.0 1.0 dx)
          ry (range 0.0 1.0 dy)
          s (g/* (:size _) dx dy)]
      (for [y ry x rx
            :let [[px py] (unmap-uv _ [x y])
                  px (m/roundto px *eps*)
                  py (m/roundto py *eps*)]]
        (thi.ng.geom.types.Rect2. (vec2 px py) s)))))
g/PTessellate
(tessellate
 ([_]
    (let [[a b c d] (g/vertices _)]
      [(thi.ng.geom.types.Triangle2. a b c) (thi.ng.geom.types.Triangle2. a c d)]))
 ([_ opts]
    (mapcat g/tessellate (g/subdivide _ opts))))
g/PRotate
(rotate
 [_ m] (g/rotate (g/as-polygon _) m))

g/PScale
(scale
 ([_ s]
    (thi.ng.geom.types.Rect2.
     (g/* (:p _) s) (g/* (:size _) s)))
 ([_ a b]
    (thi.ng.geom.types.Rect2.
     (g/* (:p _) a b) (g/* (:size _) a b))))
(scale-size
 [_ s]
 (let [s' (g/* (:size _) s)]
   (thi.ng.geom.types.Rect2.
    (g/madd s' -0.5 (g/centroid _)) s')))

g/PTranslate
(translate
 [_ t] (thi.ng.geom.types.Rect2. (g/+ (:p _) t) (:size _)))

g/PTransform
(transform
 [_ m] (g/transform (g/as-polygon _) m))
g/PVolume
(volume [_] 0.0)
)
