(ns thi.ng.geom.spatialtree
  (:require
   [thi.ng.geom.core :as g]
   [thi.ng.geom.core.utils :as gu]
   [thi.ng.geom.core.vector :as v :refer [vec2 vec3]]
   [thi.ng.geom.aabb :as a]
   [thi.ng.geom.rect :as r]
   [thi.ng.geom.types]
   [thi.ng.geom.types.utils :as tu]
   [thi.ng.common.math.core :refer [*eps* delta=]])
  #+clj (:import [thi.ng.geom.types AABB Rect2]))

(defn path-for-point
  "Returns depth-first seq of nodes for given point."
  [root p]
  (loop [node root, path (list root)]
    (let [c (g/child-for-point node p)]
      (if c (recur c (conj path c)) path))))

(defn add-point*
  "Adds point to tree, recursively creates all required intermediate nodes.
  Returns root."
  [root p]
  (loop [node root]
    (if (g/get-children node)
      (recur (g/make-child-for-point node p false))
      (let [point (g/get-point node)]
        (if point
          (if-not (delta= point p *eps*)
            (do
              (g/split-node node)
              (g/make-child-for-point node p true)
              (add-point* node point)
              root)
            root)
          (do (g/set-point node p) root))))))

(defn delete-point*
  "Removes point from tree (if found) and prunes any resulting empty nodes.
  Returns given node (root)."
  [root p]
  (let [[node & path] (path-for-point root p)]
    (when (delta= p (g/get-point node) *eps*)
      (g/set-point node nil)
      (loop [path path]
        (if path
          (let [[node & parents] path]
            (g/set-child node (g/child-index-for-point node p) nil)
            (when (every? nil? (g/get-children node))
              (g/set-children node nil)
              (recur parents))))))
    root))

(defn select-with
  "Produces a vector of points in the tree within a given region.
  Uses two predicate fns to logically define the query region:

  `isec?`  : single-arg fn to check if the bounds of a tree node
             intersect the query region
  `inside?`: single-arg fn to check if a point lies within the region."
  ([isec? inside? q]
     (select-with isec? inside? q (transient [])))
  ([isec? inside? q acc]
     (if (isec? (g/bounds q))
       (let [children (g/get-children q)]
         (if children
           (reduce
            (fn [acc c] (if c (select-with isec? inside? c acc) acc))
            acc children)
           (let [p (g/get-point q)]
             (if (and p (inside? p)) (conj! acc p) acc))))
       acc)))

(defn select-with-shape
  [s q]
  (persistent! (select-with #(g/intersect-shape s %) #(g/contains-point? s %) q)))

(defn- lazy-select-with*
  [isec? inside? queue]
  (lazy-seq
   (let [[q & r] queue]
     (if (and q (isec? (g/bounds q)))
       (let [cs (filter identity (g/get-children q))
             p (g/get-point q)]
         (if (seq cs)
           (lazy-select-with* isec? inside? (concat cs r))
           (if (and p (inside? p))
             (cons p (lazy-select-with* isec? inside? r))
             (when (seq r) (lazy-select-with* isec? inside? r)))))
       (when (seq r) (lazy-select-with* isec? inside? r))))))

(defn lazy-select-with
  "Same as `select-with`, only produces a lazy sequence of points."
  [isec? inside? q]
  (lazy-select-with* isec? inside? [q]))

(defn lazy-select-with-shape
  [s q] (lazy-select-with* #(g/intersect-shape s %) #(g/contains-point? s %) [q]))

(deftype MutableQuadtreeNode
    #+clj [^double x ^double y ^double w ^double h
           ^:unsynchronized-mutable children
           ^:unsynchronized-mutable point
           ^:unsynchronized-mutable bounds]
    #+cljs [x y w h
            ^:mutable children
            ^:mutable point
            ^:mutable bounds]

    g/PSpatialTree
    (add-point [_ p] (add-point* _ p))
    (child-index-for-point [_ [px py]]
      (if (< px (+ x w))
        (if (< py (+ y h)) 0 2)
        (if (< py (+ y h)) 1 3)))
    (child-for-point
      [_ p] (if children (children (g/child-index-for-point _ p))))
    (delete-point [_ p] (delete-point* _ p))
    (make-child-for-point [_ p add?]
      (let [idx (g/child-index-for-point _ p)]
        (if (children idx)
          (children idx)
          (let [cx (if (pos? (bit-and idx 1)) (+ x w) x)
                cy (if (pos? (bit-and idx 2)) (+ y h) y)
                c (MutableQuadtreeNode.
                   cx cy (* 0.5 w) (* 0.5 h) nil (if add? p) nil)]
            (g/set-child _ idx c)
            c))))
    (split-node [_]
      (set! children [nil nil nil nil])
      (set! point nil)
      _)
    (get-children [_] children)
    (get-point [_] point)
    (set-child [_ i c] (set! children (assoc children i c)) _)
    (set-children [_ c] (set! children c) _)
    (set-point [_ p] (set! point p) _)

    g/PBounds
    (bounds [_]
      (if bounds
        bounds
        (set! bounds
              (thi.ng.geom.types.Rect2.
               (vec2 x y) (vec2 (* w 2.0) (* h 2.0))))))

    Object
    (toString [_] (str "#thi.ng.geom.spatialtree.MutableQuadtreeNode"
                       "{:bounds " (pr-str (g/bounds _))
                       " :children " (pr-str children)
                       " :p " (pr-str point) "}")))

(deftype MutableOctreeNode
    #+clj [^double x ^double y ^double z ^double w ^double h ^double d
           ^:unsynchronized-mutable children
           ^:unsynchronized-mutable point
           ^:unsynchronized-mutable bounds]
    #+cljs [x y z w h d
            ^:mutable children
            ^:mutable point
            ^:mutable bounds]

    g/PSpatialTree
    (add-point [_ p] (add-point* _ p))
    (child-index-for-point [_ [px py pz]]
      (+ (if (< pz (+ z d)) 0 4)
         (if (< px (+ x w))
           (if (< py (+ y h)) 0 2)
           (if (< py (+ y h)) 1 3))))
    (child-for-point
      [_ p] (if children (children (g/child-index-for-point _ p))))
    (delete-point [_ p] (delete-point* _ p))
    (make-child-for-point [_ p add?]
      (let [idx (g/child-index-for-point _ p)]
        (if (children idx)
          (children idx)
          (let [cx (if (pos? (bit-and idx 1)) (+ x w) x)
                cy (if (pos? (bit-and idx 2)) (+ y h) y)
                cz (if (pos? (bit-and idx 4)) (+ z d) z)
                c (MutableOctreeNode.
                   cx cy cz (* 0.5 w) (* 0.5 h) (* 0.5 d) nil (if add? p) nil)]
            (g/set-child _ idx c)
            c))))
    (split-node [_]
      (set! children [nil nil nil nil nil nil nil nil])
      (set! point nil)
      _)
    (get-children [_] children)
    (get-point [_] point)
    (set-child [_ i c] (set! children (assoc children i c)) _)
    (set-children [_ c] (set! children c) _)
    (set-point [_ p] (set! point p) _)

    g/PBounds
    (bounds [_]
      (if bounds
        bounds
        (set! bounds
              (thi.ng.geom.types.AABB.
               (vec3 x y z) (vec3 (* w 2.0) (* h 2.0) (* d 2.0))))))

    Object
    (toString [_] (str "#thi.ng.geom.spatialtree.MutableOctreeNode"
                       "{:bounds " (pr-str (g/bounds _))
                       " :children " (pr-str children)
                       " :p " (pr-str point) "}")))

#+clj (require 'clojure.pprint)
#+clj (defmethod print-method MutableQuadtreeNode [o ^java.io.Writer w] (.write w (.toString o)))
#+clj (defmethod print-method MutableOctreeNode [o ^java.io.Writer w] (.write w (.toString o)))

(defn quadtree
  "Create a new quadtree root node with the given XY position & dimensions."
  ([{[x y] :p [w h] :size}]
     (quadtree x y w h))
  ([[x y] size]
     (let [[w h] (if (number? size) [size size] size)]
       (quadtree x y w h)))
  ([x y size]
     (quadtree x y size size))
  ([x y w h]
     (MutableQuadtreeNode. x y (* 0.5 w) (* 0.5 h) nil nil nil)))

(defn octree
  "Create a new octree root node with the given XYZ position & dimensions."
  ([{[x y z] :p [w h d] :size}]
     (octree x y z w h d))
  ([[x y z] size]
     (let [[w h d] (if (number? size) [size size size] size)]
       (octree x y z w h d)))
  ([x y z size]
     (octree x y z size size size))
  ([x y z w h d]
     (MutableOctreeNode. x y z (* 0.5 w) (* 0.5 h) (* 0.5 d) nil nil nil)))
