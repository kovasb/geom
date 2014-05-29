(ns thi.ng.geom.aabb
  (:require
   [thi.ng.geom.core :as g]
   [thi.ng.geom.core.utils :as gu]
   [thi.ng.geom.core.intersect :as isec]
   [thi.ng.geom.core.vector :as v :refer [vec3]]
   [thi.ng.geom.cuboid :as cu]
   [thi.ng.geom.gmesh :as gm]
   [thi.ng.geom.types]
   [thi.ng.geom.types.utils :as tu]
   [thi.ng.common.data.core :as d]
   [thi.ng.common.error :as err]
   [thi.ng.common.math.core :as m :refer [*eps*]]
   #+clj [thi.ng.macromath.core :as mm])
  #+cljs (:require-macros [thi.ng.macromath.core :as mm])
  #+clj
  (:import
   [thi.ng.geom.types AABB Cuboid Sphere]))

(defn aabb
  ([] (thi.ng.geom.types.AABB. (vec3 0.0) (vec3 1.0)))
  ([size] (thi.ng.geom.types.AABB. (vec3 0.0) (vec3 size)))
  ([o size] (thi.ng.geom.types.AABB. (vec3 o) (vec3 size)))
  ([sx sy sz] (thi.ng.geom.types.AABB. (vec3 0.0) (vec3 sx sy sz))))

(defn aabb-from-minmax
  [p q]
  (let [a (g/min p q)]
    (thi.ng.geom.types.AABB. a (g/- (g/max p q) a))))




(extend-type thi.ng.geom.types.AABB
g/PArea
(area [{[w h d] :size}] (* 2.0 (mm/madd w h d h w d)))
g/PBounds
(bounds [_] _)
(width [_] ((:size _) 0))
(height [_] ((:size _) 1))
(depth [_] ((:size _) 2))
g/PBoundingSphere
(bounding-sphere
 [{p :p size :size}]
 (let [ext (g/* size 0.5)]
   (tu/bounding-sphere (g/+ p ext) (g/mag ext))))
g/PBoundary
(contains-point?
 [{p :p size :size} [qx qy qz]]
 (let [[x1 y1 z1] p
       [x2 y2 z2] (g/+ p size)]
   (and (m/in-range? x1 x2 qx)
        (m/in-range? y1 y2 qy)
        (m/in-range? z1 z2 qz))))
g/PCenter
(center
 ([{p :p size :size}]
    (thi.ng.geom.types.AABB. (g/- p (g/* size 0.5)) size))
 ([{size :size} q]
    (thi.ng.geom.types.AABB. (g/- q (g/* size 0.5)) size)))
(centroid
 [_] (g/madd (:size _) 0.5 (:p _)))
g/PClassify
(classify-point
 [{p :p size :size} [x y z :as q]]
 (let [[x1 y1 z1] p
       [x2 y2 z2] (g/+ p size)
       on-plane? (fn [[minp maxp p min1 max1 min2 max2 c1 c2]]
                   (and (or (m/delta= minp p *eps*)
                            (m/delta= maxp p *eps*))
                        (m/in-range? min1 max1 c1)
                        (m/in-range? min2 max2 c2)))]
   (if (some on-plane?
             [[x1 x2 x y1 y2 z1 z2 y z]
              [y1 y2 y x1 x2 z1 z2 x z]
              [z1 z2 z x1 x2 y1 y2 x y]])
     0
     (if (and (m/in-range? x1 x2 x)
              (m/in-range? y1 y2 y)
              (m/in-range? z1 z2 z))
       1 -1))))
g/PVertexAccess
(vertices
 [{a :p size :size}]
 (let [[x1 y1 z1] a
       [x2 y2 z2 :as g] (g/+ a size)
       b (vec3 x1 y1 z2) c (vec3 x2 y1 z2)
       d (vec3 x2 y1 z1) e (vec3 x1 y2 z1)
       f (vec3 x1 y2 z2) h (vec3 x2 y2 z1)]
   [a b c d e f g h]))
g/PEdgeAccess
(edges
 [_]
 (let [[a b c d e f g h] (g/vertices _)]
   [[a b] [b c] [c d] [d a] ;; bottom
    [e f] [f g] [g h] [h e] ;; top
    [a e] [b f]             ;; left
    [c g] [d h]             ;; right
    ]))
g/PFaceAccess
(faces
 [_]
 (let [[a b c d e f g h] (g/vertices _)]
   [[c d h g]
    [a b f e]
    [e f g h]
    [a d c b]
    [b c g f]
    [a e h d]]))
g/PIntersect
(intersect-shape
 [_ s]
 (cond
  (instance? thi.ng.geom.types.AABB s)
    (isec/intersect-aabb-aabb? _ s)
  (instance? thi.ng.geom.types.Sphere s)
    (isec/intersect-aabb-sphere? _ s)
  :default (err/type-error! "AABB" s)))
g/PMeshConvert
(as-mesh
 ([_] (g/as-mesh _ {}))
 ([_ {:keys [mesh flags] :or {flags "nsewfb"}}]
    (let [[a b c d e f g h] (g/vertices _)
          [tp bt rt lf fr bk] (d/demunge-flags-seq flags "nsewfb")]
      (->> [(if fr [b c g f])
            (if bk [a e h d])
            (if lf [a b f e])
            (if rt [c d h g])
            (if tp [e f g h])
            (if bt [a d c b])]
           (filter identity)
           (g/into (or mesh (gm/gmesh)))))))
g/PProximity
(closest-point [_ p] nil)
g/PSample
(random-point-inside
 [{p :p size :size}]
 (let [[x1 y1 z1] p
       [x2 y2 z2] (g/+ p size)]
   (vec3 (m/random x1 x2) (m/random y1 y2) (m/random z1 z2))))
(random-point
 [{p :p size :size}]
 (let [[x1 y1 z1] p
       [x2 y2 z2] (g/+ p size)
       id (int (m/random 6))]
   (cond
    (< id 2) (vec3 (if (zero? id) x1 x2) (m/random y1 y2) (m/random z1 z2))
    (< id 4) (vec3 (m/random x1 x2) (if (= 2 id) y1 y2) (m/random z1 z2))
    :default (vec3 (m/random x1 x2) (m/random y1 y2) (if (= 4 id) z1 z2)))))
g/PSubdivide
(subdivide
 ([_] (g/subdivide _ {}))
 ([{p :p size :size} {:keys [num cols rows slices] :or {num 1}}]
    (let [sx (or cols num)
          sy (or rows num)
          sz (or slices num)
          s (g/div size sx sy sz)]
      (for [z (butlast (m/norm-range sz))
            y (butlast (m/norm-range sy))
            x (butlast (m/norm-range sx))]
        (thi.ng.geom.types.AABB. (g/madd (vec3 x y z) size p) s)))))
g/PTessellate
(tessellate
 ([_] (g/tessellate _ {}))
 ([_ {f :fn :or {f gu/tessellate-3} :as opts}]
    (->> (if (some #{:num :cols :rows :slices} (keys opts))
           (g/subdivide _ opts)
           [_])
         (mapcat g/faces)
         (mapcat f))))
g/PRotate
(rotate
 [_ theta] (g/rotate-z (cu/cuboid (:p _) (:size _)) theta))

g/PRotate3D
(rotate-x
 [_ theta] (g/rotate-x (cu/cuboid (:p _) (:size _)) theta))
(rotate-y
 [_ theta] (g/rotate-y (cu/cuboid (:p _) (:size _)) theta))
(rotate-z
 [_ theta] (g/rotate-z (cu/cuboid (:p _) (:size _)) theta))
(rotate-around-axis
 [_ axis theta] (g/rotate-around-axis (cu/cuboid (:p _) (:size _)) axis theta))

g/PScale
(scale
 [_ s] (thi.ng.geom.types.AABB. (g/* (:p _) s) (g/* (:size _) s)))
(scale
 [_ sx sy] (thi.ng.geom.types.AABB. (g/* (:p _) sx sy) (g/* (:size _) sx sy)))
(scale
 [_ sx sy sz] (thi.ng.geom.types.AABB. (g/* (:p _) sx sy sz) (g/* (:size _) sx sy sz)))
(scale-size
 [_ s]
 (let [s' (g/* (:size _) s)]
   (thi.ng.geom.types.AABB. (g/madd (g/- s' (:size _)) -0.5 (:p _)) s')))

g/PTranslate
(translate
 [_ t] (thi.ng.geom.types.AABB. (g/+ (:p _) t) (:size _)))

g/PTransform
(transform
 [_ m] (g/transform (cu/cuboid (:p _) (:size _)) m))
g/PVolume
(volume [{[w h d] :size}] (mm/mul w h d))
)
