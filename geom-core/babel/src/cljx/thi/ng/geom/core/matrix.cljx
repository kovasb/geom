(ns thi.ng.geom.core.matrix
  (:require
   [thi.ng.geom.core :as g]
   [thi.ng.geom.core.utils :as gu]
   [thi.ng.geom.core.vector :as v :refer [V3]]
   [thi.ng.common.math.core :as m :refer [*eps* PI TWO_PI]]
   [thi.ng.common.error :as err]
   #+clj [thi.ng.macromath.core :as mm]
   #+clj [thi.ng.geom.core.macros :as gmc])
  #+cljs
  (:require-macros
   [thi.ng.macromath.core :as mm]
   [thi.ng.geom.core.macros :as gmc])
  #+clj
  (:import
   [thi.ng.geom.core.vector Vec2 Vec3]))

#+clj
(defn- hash-coll*
  [coll]
  (reduce
   #(-> % (unchecked-multiply-int 31) (unchecked-add-int (hash %2)))
   1 coll))

#+clj
(defn- hash-matrix
  [coll]
  (mix-collection-hash (hash-coll* coll) (count coll)))

#+cljs
(defn- hash-matrix
  [coll]
  (loop [res (hash (first coll)) s (next coll)]
    (if (nil? s)
      res
      (recur (hash-combine res (hash (first s))) (next s)))))

(deftype Matrix32
  #+clj  [^double m00 ^double m01 ^double m02
          ^double m10 ^double m11 ^double m12]
  #+cljs [m00 m01 m02 m10 m11 m12]
#+clj java.util.Collection
#+clj clojure.lang.IPersistentCollection
#+clj clojure.lang.IPersistentVector
#+clj clojure.lang.ISeq
#+clj clojure.lang.Seqable
#+clj clojure.lang.Sequential
#+clj clojure.lang.IHashEq
#+cljs ISequential
#+clj (empty [_] (err/unsupported!))

#+cljs ICounted
(#+clj count #+cljs -count [_] 6)

#+cljs ISeqable
(#+clj seq   #+cljs -seq   [_] _)

#+cljs ISeq
(#+clj more  #+cljs -rest  [_] (next _))
(#+clj first #+cljs -first [_] m00)
#+cljs INext
(#+clj next  #+cljs -next  [_] (seq [m01 m02 m10 m11 m12]))

#+cljs ICollection
(#+clj cons  #+cljs -conj  [_ x] [m00 m01 m02 m10 m11 m12 x])

#+cljs IIndexed
(#+clj nth   #+cljs -nth [_ k]
       (if (m/in-range? 0 5 k)
         (case (int k)
           0 m00 1 m01 2 m02 3 m10 4 m11 5 m12)
         (err/illegal-arg! k)))
(#+clj nth   #+cljs -nth [_ k nf]
       (if (m/in-range? 0 15 k)
         (case (int k)
           0 m00 1 m01 2 m02 3 m10 4 m11 5 m12)
         nf))

#+cljs IEquiv
(#+clj equiv  #+cljs -equiv [_ o]
       (if (and (sequential? o) (= 6 (count o)))
         (every? #(= (% 0) (% 1)) (map vector _ o))
         false))

#+cljs IHash
(#+clj hasheq #+cljs -hash  [_] (hash-matrix _))

#+clj (hashCode [_] (hash-coll* _))
#+clj (equals
       [_ o]
       (if (and (sequential? o) (= 6 (count o)))
         (every? #(clojure.lang.Util/equals (% 0) (% 1)) (map vector _ o))
         false))
#+clj (isEmpty
       [_] false)
#+clj (iterator
       [_] (.iterator ^java.util.Collection
                      (list m00 m01 m02 m10 m11 m12)))
#+clj (toArray
       [_] (object-array _))
#+clj (size [_] 6)
#+clj (length [_] 6)

Object
(toString
 [_] (apply str (concat "[" (interpose \space _) "]")))
g/PMathOps
(*
 [_ m]
 (let [m ^Matrix32 m]
   (Matrix32.
    (mm/madd m00 (.-m00 m) m01 (.-m10 m))
    (mm/madd m00 (.-m01 m) m01 (.-m11 m))
    (mm/madd m00 (.-m02 m) m01 (.-m12 m) m02)
    (mm/madd m10 (.-m00 m) m11 (.-m10 m))
    (mm/madd m10 (.-m01 m) m11 (.-m11 m))
    (mm/madd m10 (.-m02 m) m11 (.-m12 m) m12))))
g/PDeterminant
(determinant
 [_] (mm/msub m00 m11 m01 m10))
g/PInvert
(invert
 [_]
 (let [d (g/determinant _)]
   (when-not (zero? d)
     (Matrix32.
      (/ m11 d) (- (/ m01 d)) (/ (mm/msub m01 m12 m11 m02) d)
      (- (/ m10 d)) (/ m00 d) (/ (mm/msub m10 m02 m00 m12) d)))))
g/PRotate
(rotate
 [_ theta]
 (let [s (Math/sin theta), c (Math/cos theta)]
   (g/* _ (Matrix32. c (- s) 0.0, s c 0.0))))

g/PScale
(scale
 [_ s]
 (g/* _ (Matrix32.
           (if (number? s) s (s 0)) 0.0 0.0
           0.0 (if (number? s) s (s 1)) 0.0)))
(scale
 [_ sx sy]
 (if (number? sx)
   (if (number? sy)
     (g/* _ (Matrix32. sx 0.0 0.0, 0.0 sy 0.0))
     (g/* _ (Matrix32. (* sx (sy 0)) 0.0 0.0, 0.0 (* sx (sy 1)) 0.0)))
   (if (number? sy)
     (g/* _ (Matrix32. (* sy (sx 0)) 0.0 0.0, 0.0 (* sy (sx 1)) 0.0))
     (g/* _ (Matrix32. (* (sx 0) (sy 0)) 0.0 0.0, 0.0 (* (sx 1) (sy 1)) 0.0)))))

g/PShear
(shear
 [_ s]
 (g/* _ (Matrix32.
           1.0 (if (number? s) s (s 0)) 0.0,
           (if (number? s) s (s 1)) 1.0 0.0)))
(shear
 [_ sx sy]
 (g/* _ (Matrix32. 1.0 sx 0.0, sy 1.0 0.0)))

g/PTranslate
(translate
 [_ t]
 (g/* _ (Matrix32.
           1.0 0.0 (if (number? t) t (t 0))
           0.0 1.0 (if (number? t) t (t 1)))))
(translate
 [_ tx ty]
 (if (number? tx)
   (if (number? ty)
     (g/* _ (Matrix32. 1.0 0.0 tx, 0.0 1.0 ty))
     (g/* _ (Matrix32. 1.0 0.0 (* tx (ty 0)), 0.0 1.0 (* tx (ty 1)))))
   (if (number? ty)
     (g/* _ (Matrix32. 1.0 0.0 (* ty (tx 0)), 0.0 1.0 (* ty (tx 1))))
     (g/* _ (Matrix32. 1.0 0.0 (* (tx 0) (ty 0)), 0.0 1.0 (* (tx 1) (ty 1)))))))

g/PTransform
(transform
 [_ matrix] (g/* _ matrix))
g/PVectorTransform
(transform-vector
 [_ [x y :as v]]
 (thi.ng.geom.core.vector.Vec2.
  (mm/madd x m00 y m01 m02)
  (mm/madd x m10 y m11 m12)))
)

(deftype Matrix44
  #+clj  [^double m00 ^double m01 ^double m02 ^double m03
          ^double m10 ^double m11 ^double m12 ^double m13
          ^double m20 ^double m21 ^double m22 ^double m23
          ^double m30 ^double m31 ^double m32 ^double m33]
  #+cljs [m00 m01 m02 m03
          m10 m11 m12 m13
          m20 m21 m22 m23
          m30 m31 m32 m33]
#+clj java.util.Collection
#+clj clojure.lang.IPersistentCollection
#+clj clojure.lang.IPersistentVector
#+clj clojure.lang.ISeq
#+clj clojure.lang.Seqable
#+clj clojure.lang.Sequential
#+clj clojure.lang.IHashEq
#+cljs ISequential
#+clj (empty [_] (err/unsupported!))

#+cljs ICounted
(#+clj count #+cljs -count [_] 16)

#+cljs ISeqable
(#+clj seq   #+cljs -seq   [_] _)

#+cljs ISeq
(#+clj more  #+cljs -rest  [_] (next _))
(#+clj first #+cljs -first [_] m00)
#+cljs INext
(#+clj next  #+cljs -next
       [_] (seq [m01 m02 m03
                 m10 m11 m12 m13
                 m20 m21 m22 m23
                 m30 m31 m32 m33]))

#+cljs ICollection
(#+clj cons  #+cljs -conj
       [_ x]
       [m00 m01 m02 m03
        m10 m11 m12 m13
        m20 m21 m22 m23
        m30 m31 m32 m33 x])

#+cljs IIndexed
(#+clj nth   #+cljs -nth [_ k]
       (if (m/in-range? 0 15 k)
         (case (int k)
           0 m00  1 m01  2 m02  3 m03
           4 m10  5 m11  6 m12  7 m13
           8 m20  9 m21  10 m22 11 m23
           12 m30 13 m31 14 m32 15 m33)
         (err/illegal-arg! k)))
(#+clj nth   #+cljs -nth [_ k nf]
       (if (m/in-range? 0 15 k)
         (case (int k)
           0 m00  1 m01  2 m02  3 m03
           4 m10  5 m11  6 m12  7 m13
           8 m20  9 m21  10 m22 11 m23
           12 m30 13 m31 14 m32 15 m33)
         nf))

#+cljs IEquiv
(#+clj equiv  #+cljs -equiv [_ o]
       (if (and (sequential? o) (= 16 (count o)))
         (every? #(= (% 0) (% 1)) (map vector _ o))
         false))

#+cljs IHash
(#+clj hasheq #+cljs -hash  [_] (hash-matrix _))

#+clj (hashCode [_] (hash-coll* _))
#+clj (equals
       [_ o]
       (if (and (sequential? o) (= 16 (count o)))
         (every? #(clojure.lang.Util/equals (% 0) (% 1)) (map vector _ o))
         false))

#+clj (isEmpty
       [_] false)
#+clj (iterator
       [_] (.iterator ^java.util.Collection
                      (list m00 m01 m02 m03
                            m10 m11 m12 m13
                            m20 m21 m22 m23
                            m30 m31 m32 m33)))
#+clj (toArray
       [_] (object-array _))
#+clj (size [_] 16)
#+clj (length [_] 16)

Object
(toString
 [_]
 (apply str (concat "[" (interpose \space _) "]")))
g/PMathOps
(*
 [_ m]
 (let [^Matrix44 m m]
   (Matrix44.
    (mm/madd m00 (.-m00 m) m10 (.-m01 m) m20 (.-m02 m) m30 (.-m03 m))
    (mm/madd m01 (.-m00 m) m11 (.-m01 m) m21 (.-m02 m) m31 (.-m03 m))
    (mm/madd m02 (.-m00 m) m12 (.-m01 m) m22 (.-m02 m) m32 (.-m03 m))
    (mm/madd m03 (.-m00 m) m13 (.-m01 m) m23 (.-m02 m) m33 (.-m03 m))

    (mm/madd m00 (.-m10 m) m10 (.-m11 m) m20 (.-m12 m) m30 (.-m13 m))
    (mm/madd m01 (.-m10 m) m11 (.-m11 m) m21 (.-m12 m) m31 (.-m13 m))
    (mm/madd m02 (.-m10 m) m12 (.-m11 m) m22 (.-m12 m) m32 (.-m13 m))
    (mm/madd m03 (.-m10 m) m13 (.-m11 m) m23 (.-m12 m) m33 (.-m13 m))

    (mm/madd m00 (.-m20 m) m10 (.-m21 m) m20 (.-m22 m) m30 (.-m23 m))
    (mm/madd m01 (.-m20 m) m11 (.-m21 m) m21 (.-m22 m) m31 (.-m23 m))
    (mm/madd m02 (.-m20 m) m12 (.-m21 m) m22 (.-m22 m) m32 (.-m23 m))
    (mm/madd m03 (.-m20 m) m13 (.-m21 m) m23 (.-m22 m) m33 (.-m23 m))

    (mm/madd m00 (.-m30 m) m10 (.-m31 m) m20 (.-m32 m) m30 (.-m33 m))
    (mm/madd m01 (.-m30 m) m11 (.-m31 m) m21 (.-m32 m) m31 (.-m33 m))
    (mm/madd m02 (.-m30 m) m12 (.-m31 m) m22 (.-m32 m) m32 (.-m33 m))
    (mm/madd m03 (.-m30 m) m13 (.-m31 m) m23 (.-m32 m) m33 (.-m33 m)))))
g/PDeterminant
(determinant
 [_]
 (let [b00 (mm/msub m00 m11 m01 m10)
       b01 (mm/msub m00 m12 m02 m10)
       b02 (mm/msub m00 m13 m03 m10)
       b03 (mm/msub m01 m12 m02 m11)
       b04 (mm/msub m01 m13 m03 m11)
       b05 (mm/msub m02 m13 m03 m12)
       b06 (mm/msub m20 m31 m21 m30)
       b07 (mm/msub m20 m32 m22 m30)
       b08 (mm/msub m20 m33 m23 m30)
       b09 (mm/msub m21 m32 m22 m31)
       b10 (mm/msub m21 m33 m23 m31)
       b11 (mm/msub m22 m33 m23 m32)]
   (+ (mm/msub b00 b11 b01 b10 b04 b07)
      (mm/madd b02 b09 b03 b08 b05 b06))))
g/PInvert
(invert
 [_]
 (let [n00 (mm/msub m00 m11 m01 m10)
       n01 (mm/msub m00 m12 m02 m10)
       n02 (mm/msub m00 m13 m03 m10)
       n03 (mm/msub m01 m12 m02 m11)
       n04 (mm/msub m01 m13 m03 m11)
       n05 (mm/msub m02 m13 m03 m12)
       n06 (mm/msub m20 m31 m21 m30)
       n07 (mm/msub m20 m32 m22 m30)
       n08 (mm/msub m20 m33 m23 m30)
       n09 (mm/msub m21 m32 m22 m31)
       n10 (mm/msub m21 m33 m23 m31)
       n11 (mm/msub m22 m33 m23 m32)
       d (+ (mm/msub n00 n11 n01 n10 n04 n07)
            (mm/madd n02 n09 n03 n08 n05 n06))]
   (when-not (zero? d)
     (let [invd (/ 1.0 d)]
       (Matrix44.
        (gmc/inv-item m11 n11 m12 n10 m13 n09 invd)
        (gmc/inv-item m02 n10 m03 n09 (- m01) n11 invd)
        (gmc/inv-item m31 n05 m32 n04 m33 n03 invd)
        (gmc/inv-item m22 n04 m23 n03 (- m21) n05 invd)
        (gmc/inv-item m12 n08 m13 n07 (- m10) n11 invd)
        (gmc/inv-item m00 n11 m02 n08 m03 n07 invd)
        (gmc/inv-item m32 n02 m33 n01 (- m30) n05 invd)
        (gmc/inv-item m20 n05 m22 n02 m23 n01 invd)
        (gmc/inv-item m10 n10 m11 n08 m13 n06 invd)
        (gmc/inv-item m01 n08 m03 n06 (- m00) n10 invd)
        (gmc/inv-item m30 n04 m31 n02 m33 n00 invd)
        (gmc/inv-item m21 n02 m23 n00 (- m20) n04 invd)
        (gmc/inv-item m11 n07 m12 n06 (- m10) n09 invd)
        (gmc/inv-item m00 n09 m01 n07 m02 n06 invd)
        (gmc/inv-item m31 n01 m32 n00 (- m30) n03 invd)
        (gmc/inv-item m20 n03 m21 n01 m22 n00 invd))))))
g/PTranspose
(transpose
 [_]
 (Matrix44.
  m00 m10 m20 m30
  m01 m11 m21 m31
  m02 m12 m22 m32
  m03 m13 m23 m33))
g/PScale
(scale
 [_ s]
 (let [[x y z] (if (number? s) [s s s] s)]
   (g/scale _ x y z)))
(scale
 [_ x y z]
 (Matrix44.
  (* m00 x) (* m01 x) (* m02 x) (* m03 x)
  (* m10 y) (* m11 y) (* m12 y) (* m13 y)
  (* m20 z) (* m21 z) (* m22 z) (* m23 z)
  m30 m31 m32 m33))

g/PRotate
(rotate
 [_ theta] (g/rotate-z _ theta))

g/PRotate3D
(rotate-x
 [_ theta]
 (let [s (Math/sin theta), c (Math/cos theta)]
   (Matrix44.
    m00 m01 m02 m03
    (mm/madd m10 c m20 s) (mm/madd m11 c m21 s) (mm/madd m12 c m22 s) (mm/madd m13 c m23 s)
    (mm/msub m20 c m10 s) (mm/msub m21 c m11 s) (mm/msub m22 c m12 s) (mm/msub m23 c m13 s)
    m30 m31 m32 m33)))

(rotate-y
 [_ theta]
 (let [s (Math/sin theta), c (Math/cos theta)]
   (Matrix44.
    (mm/msub m00 c m20 s) (mm/msub m01 c m21 s) (mm/msub m02 c m22 s) (mm/msub m03 c m23 s)
    m10 m11 m12 m13
    (mm/madd m00 s m20 c) (mm/madd m01 s m21 c) (mm/madd m02 s m22 c) (mm/madd m03 s m23 c)
    m30 m31 m32 m33)))

(rotate-z
 [_ theta]
 (let [s (Math/sin theta), c (Math/cos theta)]
   (Matrix44.
    (mm/madd m00 c m10 s) (mm/madd m01 c m11 s) (mm/madd m02 c m12 s) (mm/madd m03 c m13 s)
    (mm/msub m10 c m00 s) (mm/msub m11 c m01 s) (mm/msub m12 c m02 s) (mm/msub m13 c m03 s)
    m20 m21 m22 m23
    m30 m31 m32 m33)))

(rotate-around-axis
 [_ [x y z] theta]
 (let [s (Math/sin theta), c (Math/cos theta)
       sx (* s x)  sy (* s y) sz (* s z)
       t (- 1.0 c) tx (* t x) ty (* t y)
       b00 (mm/madd tx x c)  b01 (mm/madd tx y sz) b02 (mm/msub tx z sy)
       b10 (mm/msub ty x sz) b11 (mm/madd ty y c)  b12 (mm/madd ty z sx)
       b20 (mm/madd tx z sy) b21 (mm/msub ty z sx) b22 (mm/madd (* t z) z c)]
   (Matrix44.
    (mm/madd m00 b00 m10 b01 m20 b02)
    (mm/madd m01 b00 m11 b01 m21 b02)
    (mm/madd m02 b00 m12 b01 m22 b02)
    (mm/madd m03 b00 m13 b01 m23 b02)
    (mm/madd m00 b10 m10 b11 m20 b12)
    (mm/madd m01 b10 m11 b11 m21 b12)
    (mm/madd m02 b10 m12 b11 m22 b12)
    (mm/madd m03 b10 m13 b11 m23 b12)
    (mm/madd m00 b20 m10 b21 m20 b22)
    (mm/madd m01 b20 m11 b21 m21 b22)
    (mm/madd m02 b20 m12 b21 m22 b22)
    (mm/madd m03 b20 m13 b21 m23 b22)
    m30 m31 m32 m33)))

g/PTranslate
(translate
 [_ t]
 (let [[x y z] (if (number? t) [t t t] t)]
   (g/translate _ x y z)))
(translate
 [_ x y z]
 (Matrix44.
  m00 m01 m02 m03
  m10 m11 m12 m13
  m20 m21 m22 m23
  (mm/madd m00 x m10 y m20 z m30)
  (mm/madd m01 x m11 y m21 z m31)
  (mm/madd m02 x m12 y m22 z m32)
  (mm/madd m03 x m13 y m23 z m33)))

g/PTransform
(transform
 [_ matrix] (g/* _ matrix))
g/PVectorTransform
(transform-vector
 [_ [x y z w]]
 (if w
   [(mm/madd x m00 y m10 z m20 w m30)
    (mm/madd x m01 y m11 z m21 w m31)
    (mm/madd x m02 y m12 z m22 w m32)
    (mm/madd x m03 y m13 z m23 w m33)]
   (thi.ng.geom.core.vector.Vec3.
    (mm/madd x m00 y m10 z m20 m30)
    (mm/madd x m01 y m11 z m21 m31)
    (mm/madd x m02 y m12 z m22 m32))))
)

#+clj (defmethod print-method Matrix32 [^Matrix32 o ^java.io.Writer w] (.write w (.toString o)))
#+clj (defmethod print-method Matrix44 [^Matrix44 o ^java.io.Writer w] (.write w (.toString o)))

(def ^:const M32
  (Matrix32.
   1.0 0.0 0.0
   0.0 1.0 0.0))

(def ^:const M44
  (Matrix44.
   1.0 0.0 0.0 0.0
   0.0 1.0 0.0 0.0
   0.0 0.0 1.0 0.0
   0.0 0.0 0.0 1.0))

(defn matrix32
  ([] M32)
  ([[m00 m01 m02 m10 m11 m12]]
     (Matrix32. m00 m01 m02 m10 m11 m12))
  ([m00 m01 m02 m10 m11 m12]
     (Matrix32. m00 m01 m02 m10 m11 m12)))

(defn matrix44
  ([] M44)
  ([[m00 m01 m02 m03 m10 m11 m12 m13 m20 m21 m22 m23 m30 m31 m32 m33]]
     (Matrix44. m00 m01 m02 m03 m10 m11 m12 m13 m20 m21 m22 m23 m30 m31 m32 m33))
  ([m00 m01 m02 m03 m10 m11 m12 m13 m20 m21 m22 m23 m30 m31 m32 m33]
     (Matrix44. m00 m01 m02 m03 m10 m11 m12 m13 m20 m21 m22 m23 m30 m31 m32 m33)))

;; FIXME create proper deftype for M33
(defn matrix44->matrix33
 [[m00 m01 m02 _ m10 m11 m12 _ m20 m21 m22]]
 [m00 m01 m02 m10 m11 m12 m20 m21 m22])

(defn matrix44->matrix33-rot
 [[m00 m01 m02 _ m10 m11 m12 _ m20 m21 m22]]
 (let [b01 (mm/msub m22 m11 m12 m21)
       b11 (mm/msub m12 m20 m22 m10)
       b21 (mm/msub m21 m10 m11 m20)
       invd (/ (mm/madd m00 b01 m01 b11 m02 b21))]
   [(* b01 invd)
    (* b11 invd)
    (* b21 invd)
    (* (mm/msub m02 m21 m22 m01) invd)
    (* (mm/msub m22 m00 m02 m20) invd)
    (* (mm/msub m01 m20 m21 m00) invd)
    (* (mm/msub m12 m01 m02 m11) invd)
    (* (mm/msub m02 m10 m12 m00) invd)
    (* (mm/msub m11 m00 m01 m10) invd)]))

(defn frustum
  "Sets up a viewing frustum, shaped like a truncated pyramid with the
  camera where the tip of the pyramid would be.
  This emulates the OpenGL function glFrustum()."
  [l t r b n f]
  (let [dx (/ (- r l))
        dy (/ (- t b))
        dz (/ (- n f))
        n2 (* 2.0 n)]
    (Matrix44.
     (* n2 dx) 0.0 0.0 0.0
     0.0 (* n2 dy) 0.0 0.0
     (mm/addm l r dx) (mm/addm t b dy) (mm/addm n f dz) -1.0
     0.0 0.0 (mm/mul n2 f dz) 0.0)))

(defn frustum-bounds
  [fovy aspect near]
  (let [top (* near (Math/tan (* 0.5 (m/radians fovy))))
        right (* top aspect)]
    {:left (- right)
     :right right
     :top top
     :bottom (- top)}))

(defn ortho
  "Returns an orthographic projection matrix, in which objects are the same size no
  matter how far away or nearby they are.
  This emulates the OpenGL function glOrtho()."
  [l t r b n f]
  (let[dx (/ (- l r))
       dy (/ (- b t))
       dz (/ (- n f))]
    (Matrix44.
     (* -2.0 dx) 0.0 0.0 0.0
     0.0 (* -2.0 dy) 0.0 0.0
     0.0 0.0 (* 2.0 dz) 0.0
     (mm/addm l r dx) (mm/addm t b dy) (mm/addm n f dz) 1.0)))

(defn perspective
  "Returns a perspective transform matrix, which makes far away objects appear
  smaller than nearby objects. The `aspect` argument should be the width
  divided by the height of your viewport and `fov` is the vertical angle
  of the field of view in degrees."
  [fovy aspect near far]
  (let [f (/ (Math/tan (* 0.5 (m/radians fovy))))
        nf (/ (- near far))]
    (Matrix44.
     (/ f aspect) 0.0 0.0 0.0
     0.0 f 0.0 0.0
     0.0 0.0 (mm/addm near far nf) -1.0
     0.0 0.0 (mm/mul 2.0 near far nf) 0.0)))

(defn perspective-frustum
  [fov aspect near far]
  (let [{:keys [left right top bottom]} (frustum-bounds fov aspect near)]
    (frustum left top right bottom near far)))

(defn look-at
  "Returns a matrix that puts the camera at the eye position looking
  toward the target point with the given up direction."
  [eye target up]
  (let [dir (g/- eye target)]
    (if (m/delta= V3 dir)
      M44
      (let [[zx zy zz :as z] (g/normalize dir)
            [xx xy xz :as x] (gu/ortho-normal up z)
            [yx yy yz :as y] (gu/ortho-normal z x)]
        (Matrix44.
         xx yx zx 0.0
         xy yy zy 0.0
         xz yz zz 0.0
         (- (g/dot x eye)) (- (g/dot y eye)) (- (g/dot z eye)) 1.0)))))

;; FIXME add arity for pre-computed vpm matrix
(defn unproject
  "Takes a vec3 in screenspace, view matrix, projection matrix and
  view rect. Returns vector in model space or nil."
  [v vmat pmat {:keys [p width height]}]
  (let [x (mm/msub (- (v 0) (p 0)) (/ 2.0 width) 1.0)
        y (mm/msub (- (v 1) (p 1)) (/ 2.0 height) 1.0)
        z (mm/msub (v 2) 2.0 1.0)
        vpm (g/* pmat vmat)]
    (if (g/invert vpm)
      (let [v' (g/transform-vector vpm [x y z 1.0])]
        (if-not (zero? (v' 3))
          (g/div (v/vec3 v') (v' 3)))))))
