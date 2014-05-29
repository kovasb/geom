(ns thi.ng.geom.types.utils
  (:require
   [thi.ng.geom.core :as g]
   [thi.ng.geom.core.utils :as gu]
   [thi.ng.geom.core.vector :as v :refer [vec2 vec3]]
   [thi.ng.geom.types]
   [clojure.core.reducers :as r]))

(defn bounding-rect
  [points]
  (let [[p size] (gu/bounding-rect points)]
    (if p (thi.ng.geom.types.Rect2. p size))))

(defn bounding-box
  [points]
  (let [[p size] (gu/bounding-box points)]
    (if p (thi.ng.geom.types.AABB. p size))))

(defn bounding-circle
  ([points]
     (bounding-circle (gu/centroid points) points))
  ([c r-or-points]
     (let [[c r] (gu/radial-bounds vec2 c r-or-points)]
       (thi.ng.geom.types.Circle2. c r))))

(defn bounding-sphere
  ([points]
     (bounding-sphere (gu/centroid points) points))
  ([c r-or-points]
     (let [[c r] (gu/radial-bounds vec3 c r-or-points)]
       (thi.ng.geom.types.Sphere. c r))))

(defn into-mesh
  [mesh add-face mesh-or-faces]
  (reduce
   add-face mesh
   (if (satisfies? g/PFaceAccess mesh-or-faces)
     (g/faces mesh-or-faces)
     mesh-or-faces)))

(defn map-mesh
  "Applies f to all faces of given mesh and adds resulting faces to
    new mesh. Thus f should return a seq of faces. Returns new mesh."
  [f mesh] (g/into (g/empty mesh) (mapcat f (g/faces mesh))))

(defn transform-mesh
  [mesh add-face tx]
  (let [verts' (->> (g/vertices mesh)
                    (r/map (fn [v] [v (g/transform-vector tx v)]))
                    (into {}))]
    (reduce
     (fn [mesh f] (add-face mesh (replace verts' f)))
     (g/empty mesh) (g/faces mesh))))