(ns thi.ng.geom.core.test.protocols
  #+cljs
  (:require-macros
   [cemerick.cljs.test :refer (is deftest with-test run-tests testing)])
  (:require
   [thi.ng.geom.core :as g]
   [thi.ng.geom.core.matrix]
   [thi.ng.geom.core.quaternion]
   [thi.ng.geom.core.vector]
   #+clj [clojure.test :refer :all]
   #+cljs [cemerick.cljs.test :as t])
  #+clj
  (:import
   [thi.ng.geom.core.matrix Matrix32 Matrix44]
   [thi.ng.geom.core.quaternion Quat4]
   [thi.ng.geom.core.vector Vec2 Vec3]))

(def proto-ids
  {:conj      g/PConjugate
   :cross     g/PCrossProduct
   :det       g/PDeterminant
   :dist      g/PDistance
   :dot       g/PDotProduct
   :head      g/PHeading
   :inv       g/PInvert
   :limit     g/PLimit
   :mag       g/PMagnitude
   :mat       g/PMatrixConvert
   :math      g/PMathOps
   :mimax     g/PMinMax
   :mix       g/PInterpolate
   :norm      g/PNormalize
   :polar     g/PPolar
   :refl      g/PReflect
   :rotate    g/PRotate
   :rot3d     g/PRotate3D
   :scale     g/PScale
   :shear     g/PShear
   :translate g/PTranslate
   :tx        g/PTransform
   :vtx       g/PVectorTransform})

(def vec-common
  #{:cross :dist :dot :head :inv :limit :mag :math :mix
    :norm :polar :refl :rotate :scale :translate :tx})

(def mat-common
  #{:math :det :inv :rotate :scale :tx :vtx})

#+clj
(defn satisfies-all?
  [type & protos]
  (testing
      (.getName type)
    (doseq [p protos]
      (is (true? (extends? (proto-ids p) type))
          (str (get-in proto-ids [p :on-interface]))))))

#+clj
(deftest proto-implementation-check
  (dorun
   (map
    (fn [[t protos]] (apply satisfies-all? t protos))
    {
     thi.ng.geom.core.matrix.Matrix32
     (conj mat-common :shear)

     thi.ng.geom.core.matrix.Matrix44
     mat-common

     thi.ng.geom.core.quaternion.Quat4
     #{:conj :dot :inv :mag :mat :math :mix :norm :scale :vtx}

     thi.ng.geom.core.vector.Vec2
     vec-common

     thi.ng.geom.core.vector.Vec3
     (conj vec-common :rot3d)
    })))
