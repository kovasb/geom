(ns thi.ng.geom.mesh.csg
        
                  
                                  
  (:require
   [thi.ng.geom.core :as g]
   [thi.ng.geom.core.vector :as v :refer [vec3 V3X V3Y]]
   [thi.ng.geom.gmesh :as gm]
   [thi.ng.geom.plane :as p]
   [thi.ng.geom.types.utils :as tu]
   [thi.ng.common.data.core :as d]
   [thi.ng.common.math.core :as m :refer [PI TWO_PI *eps*]]
         [thi.ng.macromath.core :as mm]))

(declare csg-polygon)

(deftype CSGPolygon [plane vertices shared ^:unsynchronized-mutable bsphere]
  g/PBoundingSphere
  (bounding-sphere
    [_] (if bsphere
          bsphere
          (do
            (set! bsphere (tu/bounding-sphere vertices))
            bsphere)))
  g/PFlip
  (flip [_]
    (CSGPolygon. (g/flip plane) (reverse vertices) shared bsphere)))

(defn compute-split-types
  [n w vertices]
  (let [ieps (- *eps*)]
    (loop [ptype 0, types [], vertices vertices]
      (if vertices
        (let [t (- (g/dot n (first vertices)) w)
              pt (if (< t ieps) 2 (if (> t *eps*) 1 0))]
          (recur (bit-or ptype pt) (conj types pt) (next vertices)))
        [ptype types]))))

(defn split-poly*
  [n w vertices types]
  (let [nv (count vertices)]
    (loop [f [], b [], i 0]
      (if (< i nv)
        (let [j (rem (inc i) nv)
              vi (nth vertices i)
              ti (types i)
              f (if (== ti 2) f (conj f vi))
              b (if (== ti 1) b (conj b vi))]
          (if (== 3 (bit-or ti (types j)))
            (let [vj (nth vertices j)
                  v (g/mix vi vj (/ (- w (g/dot n vi)) (g/dot n (g/- vj vi))))]
              (recur (conj f v) (conj b v) (inc i)))
            (recur f b (inc i))))
        [f b]))))

(defn split-poly
  "Takes a plane and splits the given polygon with it. Returns a 4-element vector
    of classified sub-shapes: [coplanar-front coplanar-back front back]."
  [{:keys [n w]} ^CSGPolygon poly state]
  (let [s (g/bounding-sphere poly)
        r (+ (:r s) *eps*)
        d (- (g/dot n (:p s)) w)]
    (cond
     (> d r) (assoc state 2 (conj (state 2) poly))
     (< d (- r)) (assoc state 3 (conj (state 3) poly))
     :default
     (let [[ptype types] (compute-split-types n w (.-vertices poly))]
       (case ptype
         ;; co-planar
         0 (if (pos? (g/dot n (:n (.-plane poly))))
             (assoc state 0 (conj (state 0) poly))
             (assoc state 1 (conj (state 1) poly)))
         ;; front
         1 (assoc state 2 (conj (state 2) poly))
         ;; back
         2 (assoc state 3 (conj (state 3) poly))
         ;; both sides -> split
         3 (let [[f b] (split-poly* n w (.-vertices poly) types)]
             [(state 0) (state 1)
              (if (>= (count f) 3) (conj (state 2) (csg-polygon f (.-shared poly))) f)
              (if (>= (count b) 3) (conj (state 3) (csg-polygon b (.-shared poly))) b)]))))))

(defn clip-polygons
  "Uses a CSG node's plane to recursively clip the given seq of polygons.
  Returns a flat seq of polygons classified as in-front of the plane
  or the original seq if no clipping plane is available."
  [{:keys [plane front back] :as node} ps]
  (if (not plane)
    ps
    (let [[cp-front cp-back new-front new-back]
          (reduce
           (fn [state poly] (split-poly plane poly state))
           [[] [] [] []] ps)
          new-front (concat new-front cp-front)
          new-front (if front (clip-polygons front new-front) new-front)
          new-back (if back (clip-polygons back (concat new-back cp-back)) [])]
      (concat new-front new-back))))

(defn all-polygons
  "Returns a lazy seq of all polygons of the given CSG node and its children."
  [{:keys [front back] :as node}]
  (concat
   (:polygons node)
   (if front (all-polygons front))
   (if back (all-polygons back))))

(defn invert
  [{:keys [front back plane] :as node}]
  (assoc node
    :polygons (mapv g/flip (:polygons node))
    :plane (if plane (g/flip plane))
    :front (if back (invert back))
    :back (if front (invert front))))

(defn clip
  "Clips the polygons of the first node with the ones from the second.
  Returns the updated node."
  [{:keys [front back] :as a} b]
  (assoc a
    :polygons (clip-polygons b (:polygons a))
    :front (if front (clip front b))
    :back (if back (clip back b))))

(defn csg-polygon
  "Creates a CSG polygon map from the given vertices and
  computes a plane definition using the first 3 vertices."
  ([vertices] (csg-polygon vertices nil))
  ([vertices shared]
     (CSGPolygon. (p/plane-from-points vertices) (vec vertices) shared nil)))

(defn csg-node
  "Creates a new or refines a CSG tree node and recursively
  adds the given polygons to it."
  ([polygons] (csg-node nil polygons))
  ([{:keys [polygons plane front back] :as node} ps]
     (if (seq ps)
       (let [plane (or plane (.-plane ^CSGPolygon (first ps)))
             [cp-front cp-back new-front new-back]
             (reduce
              (fn [state poly] (split-poly plane poly state))
              [[] [] [] []] ps)]
         (assoc node
           :plane plane
           :polygons (concat polygons cp-front cp-back)
           :front (if (seq new-front) (csg-node front new-front) front)
           :back (if (seq new-back) (csg-node back new-back) back)))
       node)))

(defn union
  [a b]
  (let [a (csg-node a)
        b (csg-node b)
        a (clip a b)
        b (-> b (clip a) invert (clip a) invert)]
    (-> a (csg-node (all-polygons b)) all-polygons)))

(defn subtract
  [a b]
  (let [b (csg-node b)
        a (-> a csg-node invert (clip b))
        b (-> b (clip a) invert (clip a) invert)]
    (-> a (csg-node (all-polygons b)) invert all-polygons)))

(defn intersect
  [a b]
  (let [a (-> a csg-node invert)
        b (-> b csg-node (clip a) invert)
        a (clip a b)
        b (clip b a)]
    (-> a (csg-node (all-polygons b)) invert all-polygons)))

(defn mesh->csg
  "Converts a regular Mesh3 into a seq of CSG polygons.
  First calls `compute-face-normals` on mesh if not already present."
  [m]
  (map (fn [f] (csg-polygon f nil)) (g/faces m)))

(defn csg->mesh
  [polygons]
  (->> polygons
       (map (fn [poly] (.-vertices ^CSGPolygon poly)))
       (g/into (gm/gmesh))))
  
(defn csg-cone
  ([s e radius res] (csg-cone s e radius radius res))
  ([s e r-south r-north res]
     (let [dir (g/- e s)
           az (g/normalize dir)
           ax (-> (if (> (m/abs (az 1)) 0.5) V3X V3Y)
                  (g/cross az)
                  (g/normalize))
           ay (-> ax (g/cross az) g/normalize)
           f (fn [stack i r]
               (let [theta (* m/TWO_PI i)
                     out   (g/madd ax (Math/cos theta) (g/* ay (Math/sin theta)))
                     pos   (g/+ s (g/* dir stack) (g/* out r))]
                 pos))
           res (/ 1.0 res)]
       (mapcat
        (fn [i]
          (let [t0 (* i res) t1 (* (inc i) res)]
            [(csg-polygon [s (f 0 t0 r-south) (f 0 t1 r-south)])
             (csg-polygon [(f 0 t1 r-south) (f 0 t0 r-south) (f 1 t0 r-north) (f 1 t1 r-north)])
             (csg-polygon [e (f 1 t1 r-north) (f 1 t0 r-north)])]))
        (range res)))))

;;;;;;;;;;;; This file autogenerated from src/cljx/thi/ng/geom/mesh/csg.cljx
