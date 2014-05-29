(ns thi.ng.geom.mesh.io
  (:require
   [thi.ng.geom.core :as g]
   [thi.ng.geom.core.utils :as gu]
   [thi.ng.geom.core.vector :as v :refer [vec3]]
   [thi.ng.geom.gmesh :as gm]
   [thi.ng.geom.triangle :as t]
   [thi.ng.common.data.byteutils :as b])
       
  (:import
   [java.io OutputStream InputStream]))

(def ^:dynamic *precision* 5)

(defn write-stl
  "Writes the given mesh as binary STL to output stream. Mesh is
  automatically tessellated into triangles."
  [^OutputStream stream {:keys [fnormals faces]}]
  (let [faces (mapcat gu/tessellate-with-first faces)]
    (.write stream       (byte-array 80)                                  )
    (b/write-int32-le stream (count faces))
    (doseq [[a b c :as f] faces]
      (b/write-vec3-le stream (or (get fnormals f) (gu/ortho-normal f)))
      (b/write-vec3-le stream a)
      (b/write-vec3-le stream b)
      (b/write-vec3-le stream c)
      (b/write-int16-le stream 0))
    stream))

(defn read-stl
  "Returns binary STL inputstream as mesh."
  [^InputStream stream]
  (.read stream       (byte-array 80)                       )
  (loop [mesh (gm/gmesh), i (b/read-int32-le stream)]
    (if (pos? i)
      (let [_ (b/read-vec3-le stream)
            a (vec3 (b/read-vec3-le stream))
            b (vec3 (b/read-vec3-le stream))
            c (vec3 (b/read-vec3-le stream))
            _ (b/read-int16-le stream)]
        (recur (gm/add-face mesh [a b c]) (dec i)))
      mesh)))

(defn write-ply
  "Writes the given mesh as binary PLY to output stream. For
  compatibility with external tools mesh should already have been
  tessellated before calling this fn."
  [^OutputStream stream {:keys [vertices vnormals faces]}]
  (let [vertices (keys vertices)
        vindex (zipmap vertices (range))
        fhead       (byte-array 1)                      
        write-props (fn [props]
                      (doseq [p props]
                        (b/write-str-bytes
                         stream (str "property float32 " p "\n"))))
        write-vindex (fn [face]
                       (doseq [v face]
                         (b/write-int32-le stream (get vindex v))))]
    (doto stream
      (b/write-str-bytes "ply\n")
      (b/write-str-bytes "format binary_little_endian 1.0\n")
      (b/write-str-bytes (str "element vertex " (count vertices) "\n")))
    (write-props ['x 'y 'z])
    (when (seq vnormals) (write-props ['nx 'ny 'nz]))
    (doto stream
      (b/write-str-bytes (str "element face " (count faces) "\n"))
      (b/write-str-bytes "property list uint8 uint32 vertex_indices\n")
      (b/write-str-bytes "end_header\n"))
    (doseq [v vertices]
      (b/write-vec3-le stream v)
      (when (seq vnormals)
        (b/write-vec3-le stream (get vnormals v))))
    (doseq [f faces]
      (      aset-byte             fhead 0 (byte (count f)))
      (.write stream fhead)
      (write-vindex f))
    stream))

(defn write-obj
  [^OutputStream stream {:keys [vertices vnormals faces]}]
  (let [vertices (keys vertices)
        has-vnormals? (not (nil? (seq vnormals)))
        fmt-fn (fn [prefix]
                       (let [ff (str "%1." *precision* "f ")
                             ff (str prefix " " ff ff ff "\n")]
                         #(format ff (double %1) (double %2) (double %3)))
                             
                                    
                                                                    
                                                                    
                                                                      )
        fmt-vertex (fmt-fn "v")
        fmt-vnormal (fmt-fn "vn")
        fmt-fvert (if has-vnormals? #(str % "//" %2 " ") #(str % " "))
        fmt-face (if has-vnormals?
                   (fn [verts normals]
                     (apply str (concat "f " (map fmt-fvert verts normals)) "\n"))
                   (fn [verts]
                     (apply str (concat "f " (map fmt-fvert verts)) "\n")))
        vindex (zipmap vertices (range))
        nindex (zipmap (vals vnormals) (range))]
    (doseq [[x y z] vertices]
      (b/write-str-bytes
       stream (fmt-vertex x y z)))
    (doseq [[x y z] (vals vnormals)]
      (b/write-str-bytes stream (fmt-vnormal x y z)))
    (b/write-str-bytes stream "g\n")
    (doseq [fverts faces]
      (b/write-str-bytes
       stream
       (if has-vnormals?
         (fmt-face
          (map #(inc (get vindex %)) fverts)
          (map #(inc (get nindex (get vnormals %))) fverts))
         (fmt-face (map #(inc (get vindex %)) fverts)))))
    stream))

(defn write-off
  [^OutputStream stream {:keys [vertices faces]}]
  (let [vertices (keys vertices)
        fmt-vertex
              (let [ff (str "%1." *precision* "f ")
                    ff (str ff ff ff "\n")]
                #(format ff (double %1) (double %2) (double %3)))
                                                               
                                                               
                                                                 
        vindex (zipmap vertices (range))]
    (b/write-str-bytes stream "OFF\n")
    (b/write-str-bytes stream (str (count vertices) " " (count faces) " 0\n"))
    (doseq [[x y z] vertices]
      (b/write-str-bytes
       stream (fmt-vertex x y z)))
    (doseq [fverts faces]
      (b/write-str-bytes
       stream
       (->> (concat [(count fverts)] " "
                    (map #(str (vindex %) " ") fverts)
                    "\n")
            (apply str))))))

;;;;;;;;;;;; This file autogenerated from src/cljx/thi/ng/geom/mesh/io.cljx
