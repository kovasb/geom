(ns thi.ng.geom.mesh.ops
  (:require
   [thi.ng.common.math.core :as m]
   [thi.ng.geom.core :as g]
   [thi.ng.geom.core.utils :as gu]
   [thi.ng.geom.core.intersect :as isec]
   [thi.ng.geom.core.vector :as v :refer [vec2 vec3]]
   [thi.ng.geom.aabb :as a]
   [thi.ng.geom.sphere :as s]
   [thi.ng.geom.line :as l]
   [thi.ng.geom.gmesh :as gm]
   [thi.ng.geom.spatialtree :as st]
   [thi.ng.geom.types.utils :as tu]
   [clojure.set :as set]))

(defn find-in-tree
  "Queries an octree with a spherical region around `p` and with radius `eps`.
  Returns the first point found (if any)."
  [tree p eps]
  (let [eps2 (* eps eps)]
    (->> tree
         (st/select-with
          #(isec/intersect-aabb-sphere? (:p %) (g/+ (:p %) (:size %)) p eps)
          #(<= (g/dist-squared p %) eps2))
         (persistent!)
         (first))))

(defn unique-point-tree
  [points eps]
  (let [eps2 (/ eps 2.0)
        [tree dupes]
        (reduce
         (fn [[t dupes :as state] p]
           (if (find-in-tree t p eps2)
             [t (conj! dupes p)]
             [(g/add-point t p) dupes]))
         [(st/octree (tu/bounding-box points)) (transient [])]
         points)]
    [tree (persistent! dupes)]))

(defn collapse-edges
  [m eps]
  (let [eps* (* eps eps)]
    (reduce
     (fn [m e] (if (get-in m [:edges e]) (gm/merge-vertices* m (first e) (second e)) m))
     m
     (filter
      (fn [e] (let [[a b] (seq e)] (< (g/dist-squared a b) eps)))
      (keys (:edges m))))))

(defn canonicalize-vertices
  [{:keys [vertices faces]} eps]
  (let [[octree dupes] (unique-point-tree (keys vertices) eps)
        eps2 (/ eps 2.0)
        lookup #(find-in-tree octree % eps2)]
    [(reduce (fn [m f] (g/add-face m (mapv lookup f))) (gm/gmesh) faces)
     dupes]))

(defn make-watertight
  [{:keys [vertices edges] :as m} eps]
  (let [split-face (fn [v e [fa fb fc :as f]]
                     (cond
                      (= e #{fa fb}) [f [fa v fc] [v fb fc]]
                      (= e #{fb fc}) [f [fa fb v] [v fc fa]]
                      :default [f [fc v fb] [v fa fb]]))
        update-face (fn [m [f f1 f2]]
                      (-> (g/remove-face m f)
                          (g/add-face f1)
                          (g/add-face f2)))]
    (reduce
     (fn [m v]
       (let [vedges (into #{} (map (fn [n] #{v n}) (g/vertex-neighbors m v)))
             coeff #(gu/closest-point-coeff v % %2)
             v-on-edge? (fn [a b]
                          (let [t (coeff a b)
                                p (if (m/in-range? 0.01 0.99 t) (g/mix a b t))]
                            (if (and p (< (g/dist-squared v p) eps)) p)))]
         (loop [edges (set/difference (into #{} (keys (:edges m))) vedges)]
           (if-let [e (first edges)]
             (let [[a b] (seq e) p (v-on-edge? a b)]
               (if p
                 (reduce update-face m (map #(split-face v e %) (get-in m [:edges e])))
                 (recur (rest edges))))
             m))))
     m (keys vertices))))

;;;;;;;;;;;; This file autogenerated from src/cljx/thi/ng/geom/mesh/ops.cljx
