(ns thi.ng.geom.core.quaternion
  (:require
   [thi.ng.geom.core :as g]
   [thi.ng.geom.core.vector :as v :refer [V3X V3Y V3Z]]
   [thi.ng.geom.core.matrix :as mat]
   [thi.ng.common.error :as err]
   [thi.ng.common.math.core :as m :refer [*eps* PI TWO_PI]]
         [thi.ng.macromath.core :as mm])
        
                  
                                  
       
  (:import
   [thi.ng.geom.core.vector Vec3]
   [thi.ng.geom.core.matrix Matrix44]))

(declare swizzle4 swizzle4-assoc)

(deftype Quat4
         [^double x ^double y ^double z ^double w]
                  
      clojure.lang.ILookup
      (valAt
       [_ k] (swizzle4 _ k nil))
      (valAt
       [_ k nf] (swizzle4 _ k nf))

      java.util.concurrent.Callable
      (call
       [_] (.invoke ^clojure.lang.IFn _))
      java.lang.Runnable
      (run
        [_] (.invoke ^clojure.lang.IFn _))

      clojure.lang.IFn
      (invoke
       [_ k] (swizzle4 _ k nil))
      (invoke
       [_ k nf] (swizzle4 _ k nf))
      (applyTo
       [_ args]
       (condp = (count args)
         1 (swizzle4 _ (first args) nil)
         2 (swizzle4 _ (first args) (second args))
         (err/arity-error! (count args))))

      clojure.lang.Associative
      clojure.lang.IPersistentVector
      (count
       [_] 4)
      (length
       [_] 4)
      (containsKey
       [_ k] (not (nil? (#{0 1 2 3 :x :y :z :w} k))))
      (assoc
          [_ k v] (swizzle4-assoc _ k v))
      (assocN
       [_ k v]
       (case (int k)
         0 (Quat4. v y z w)
         1 (Quat4. x v z w)
         2 (Quat4. x y v w)
         3 (Quat4. x y z v)
         (err/key-error! k)))

      java.util.Collection
      (isEmpty
       [_] false)
      (iterator
       [_] (.iterator ^java.util.Collection (list x y z w)))
      (toArray
       [_] (double-array 4 [x y z w]))
      (size
       [_] 4)

      clojure.lang.IPersistentCollection
      clojure.lang.Indexed
      clojure.lang.Sequential
      clojure.lang.ISeq
      clojure.lang.Seqable
      (first
       [_] x)
      (next
       [_] (cons y (cons z (cons w nil))))
      (more
       [_] (cons y (cons z (cons w nil))))
      (cons
       [_ v] [x y z w v])
      (peek
       [_] w)
      (pop
       [_] (thi.ng.geom.core.vector.Vec3. x y z))
      (rseq
       [_] (Quat4. w z y x))
      (seq
       [_] _)
      (nth
       [_ k] (case (int k) 0 x, 1 y, 2 z, 3 w, (err/key-error! k)))
      (nth
       [_ k nf] (case (int k) 0 x, 1 y, 2 z, 3 w, nf))
      (equiv
       [_ o]
       (if (instance? Quat4 o)
         (and (clojure.lang.Numbers/equiv x (.-x ^Quat4 o))
              (clojure.lang.Numbers/equiv y (.-y ^Quat4 o))
              (clojure.lang.Numbers/equiv z (.-z ^Quat4 o))
              (clojure.lang.Numbers/equiv w (.-w ^Quat4 o)))
         (and (instance? java.util.Collection o)
              (= 4 (count o))
              (clojure.lang.Util/equiv x (nth o 0))
              (clojure.lang.Util/equiv y (nth o 1))
              (clojure.lang.Util/equiv z (nth o 2))
              (clojure.lang.Util/equiv w (nth o 3)))))
      (equals
       [_ o]
       (if (instance? Quat4 o)
         (and (clojure.lang.Util/equals x (.-x ^Quat4 o))
              (clojure.lang.Util/equals y (.-y ^Quat4 o))
              (clojure.lang.Util/equals z (.-z ^Quat4 o))
              (clojure.lang.Util/equals w (.-w ^Quat4 o)))
         (and (instance? java.util.Collection o)
              (= 4 (count o))
              (clojure.lang.Util/equals x (nth o 0))
              (clojure.lang.Util/equals y (nth o 1))
              (clojure.lang.Util/equals z (nth o 2))
              (clojure.lang.Util/equals w (nth o 3)))))

      Comparable
      (compareTo
       [_ o]
       (if (instance? Quat4 o)
         (let [c (compare x (.-x ^Quat4 o))]
           (if (== 0 c)
             (let [c (compare y (.-y ^Quat4 o))]
               (if (== 0 c)
                 (let [c (compare z (.-z ^Quat4 o))]
                   (if (== 0 c)
                     (compare w (.-w ^Quat4 o))
                     c))
                 c))
             c))
         (let [c (count o)]
           (if (= 4 c) (compare o _) (- 4 c)))))
      (hashCode
       [_]
       (-> 31
           (unchecked-add-int (hash x))
           (unchecked-multiply-int 31)
           (unchecked-add-int (hash y))
           (unchecked-multiply-int 31)
           (unchecked-add-int (hash z))
           (unchecked-multiply-int 31)
           (unchecked-add-int (hash w))))

      clojure.lang.IHashEq
      (hasheq
       [_]
       (mix-collection-hash
        (-> 31
            (unchecked-add-int (hash x))
            (unchecked-multiply-int 31)
            (unchecked-add-int (hash y))
            (unchecked-multiply-int 31)
            (unchecked-add-int (hash z))
            (unchecked-multiply-int 31)
            (unchecked-add-int (hash w)))
        4))

Object
(toString
 [_] (str "[" x " " y " " z " " w "]"))
      (clone [_] (Quat4. x y z w))
                 
              
                             

              
               
                                 
               
                                   

          
               
                                 
               
                                   

               
              
              

                   
                      
                                                      
              
                                       

              
                
               
                     
                            
                            
                            
                            
                              

                  
           
              
              
             
                                           

            
             
                                           

               
            
              

                  
             
                             

               
            
                                                                    
            
                                                       

                  
             
                          

             
             
              
            
                                                  

                  
                
             
                               
                                             
                        
                                                 
                            
                                                     
                                
                                                
                         
                     
                 
                            
                                                 

            
             
                        
                                       
                                         

             
              
             
                               
                                                          
                                                           
                                              
                                              
                                                 
g/PScale
(scale
 [_ s]
 (Quat4. (* x s) (* y s) (* z s) (* w s)))
g/PRotate3D
(rotate-x
 [_ theta]
 (let [t (/ theta 2.0)
       s (Math/sin t) c (Math/cos t)]
   (Quat4.
    (mm/madd x c w s)
    (mm/madd y c z s)
    (mm/msub z c y s)
    (mm/msub w c x s))))
(rotate-y
 [_ theta]
 (let [t (/ theta 2.0)
       s (Math/sin t) c (Math/cos t)]
   (Quat4.
    (mm/msub x c z s)
    (mm/madd y c w s)
    (mm/madd z c x s)
    (mm/msub w c y s))))
(rotate-z
 [_ theta]
 (let [t (/ theta 2.0)
       s (Math/sin t) c (Math/cos t)]
   (Quat4.
    (mm/madd x c y s)
    (mm/msub y c x s)
    (mm/madd z c w s)
    (mm/msub w c z s))))
g/PMathOps
(+
 [_ q]
 (let [q ^Quat4 q]
   (Quat4.
    (+ x (.-x q))
    (+ y (.-y q))
    (+ z (.-z q))
    (+ w (.-w q)))))
(-
 [_ q]
 (let [q ^Quat4 q]
   (Quat4.
    (- x (.-x q))
    (- y (.-y q))
    (- z (.-z q))
    (- w (.-w q)))))
(*
 [_ q]
 (let [q ^Quat4 q
       qx (.-x q) qy (.-y q) qz (.-z q) qw (.-w q)]
   (Quat4.
    (mm/maddsub x qw w qx y qz z qy)
    (mm/maddsub y qw w qy z qx x qz)
    (mm/maddsub z qw w qz x qy y qx)
    (mm/msub w qw x qx y qy z qz))))
(*
 [_ q r]
 (let [q ^Quat4 q r ^Quat4 r
       qx (.-x q) qy (.-y q) qz (.-z q) qw (.-w q)
       rx (.-x r) ry (.-y r) rz (.-z r) rw (.-w r)
       x' (mm/maddsub x qw w qx y qz z qy)
       y' (mm/maddsub y qw w qy z qx x qz)
       z' (mm/maddsub z qw w qz x qy y qx)
       w' (mm/msub w qw x qx y qy z qz)]
   (Quat4.
    (mm/maddsub x' rw w' rx y' rz z' ry)
    (mm/maddsub y' rw w' ry z' rx x' rz)
    (mm/maddsub z' rw w' rz x' ry y' rx)
    (mm/msub w' rw x' rx y' ry z' rz))))
g/PDotProduct
(dot
 [_ q]
 (let [q ^Quat4 q]
   (mm/madd x (.-x q) y (.-y q) z (.-z q) w (.-w q))))
g/PMagnitude
(mag
 [_] (Math/sqrt (mm/madd x x y y z z w w)))
(mag-squared
 [_] (mm/madd x x y y z z w w))
g/PNormalize
(normalize [_]
  (let [m (Math/sqrt (mm/madd x x y y z z w w))]
    (if (> m *eps*)
      (Quat4. (/ x m) (/ y m) (/ z m) (/ w m))
      _)))
g/PConjugate
(conjugate [_]
  (Quat4. (- x) (- y) (- z) w))
g/PInvert
(invert [_]
  (let [d (g/mag-squared _)
        d (if (zero? d) 0.0 (/ d))
        id (- d)]
    (Quat4. (* x id) (* y id) (* z id) (* w d))))
g/PInterpolate
(mix [_ q] (g/mix _ q 0.5))
(mix [_ q t]
  (let [d (g/dot _ q)]
    (if (< (m/abs d) 1.0)
      (let [theta (Math/acos d)
            stheta (Math/sqrt (mm/madd d d -1.0))
            [a b] (if (< (m/abs stheta) 0.001)
                    [0.5 0.5]
                    [(/ (Math/sin (mm/subm 1.0 t theta)) stheta)
                     (/ (Math/sin (* t theta)) stheta)])
            q ^Quat4 q]
        (Quat4.
         (mm/madd x a (.-x q) b)
         (mm/madd y a (.-y q) b)
         (mm/madd z a (.-z q) b)
         (mm/madd w a (.-w q) b)))
      _)))
g/PMatrixConvert
(as-matrix
 [_] (g/as-matrix _ nil))
(as-matrix
 [_ opts]
 (let [[tx ty tz] (:translate opts)
       x2 (+ x x)
       y2 (+ y y)
       z2 (+ z z)
       xx (* x x2)
       xy (* x y2)
       xz (* x z2)
       yy (* y y2)
       yz (* y z2)
       zz (* z z2)
       wx (* w x2)
       wy (* w y2)
       wz (* w z2)]
   (thi.ng.geom.core.matrix.Matrix44.
    (- 1.0 (+ yy zz)) (+ xy wz) (- xz wy) 0.0
    (- xy wz) (- 1.0 (+ xx zz)) (+ yz wx) 0.0
    (+ xz wy) (- yz wx) (- 1.0 (+ xx yy)) 0.0
    (or tx 0.0) (or ty 0.0) (or tz 0.0) 1.0)))
g/PVectorTransform
(transform-vector
 [_ [vx vy vz :as v]]
 (let [ix (mm/maddsub w vx y vz z vy)
       iy (mm/maddsub w vy z vx x vz)
       iz (mm/maddsub w vz x vy y vx)
       nx (- x) ny (- y) nz (- z)
       iw (mm/msub nx vx y vy z vz)]
   (thi.ng.geom.core.vector.Vec3.
    (mm/maddsub ix w iw nx iy nz iz ny)
    (mm/maddsub iy w iw ny iz nx ix nz)
    (mm/maddsub iz w iw nz ix ny iy nx))))
)
      (defmethod print-method Quat4 [o ^java.io.Writer w] (.write w (.toString o)))

(defn quat
  ([] (Quat4. 0.0 0.0 0.0 1.0))
  ([[x y z] w] (Quat4. x y z w))
  ([[x y z w]] (Quat4. x y z w))
  ([x y z w] (Quat4. x y z w)))

(defn quat-from-axis-angle
  [axis theta]
  (let [theta (/ theta 2.0)]
    (quat (g/normalize (v/vec3 axis) (Math/sin theta)) (Math/cos theta))))

(defn quat-from-euler
  [order & [alpha beta gamma]]
  (let [[a b c] (case order
                  :xyz [V3X V3Y V3Z]
                  :yxz [V3Y V3X V3Z]
                  :xzy [V3X V3Z V3Y]
                  :zxy [V3Z V3X V3Y]
                  :yzx [V3Y V3Z V3X]
                  :zyx [V3Z V3Y V3X]
                  (err/illegal-arg! order))]
    (g/* (quat-from-axis-angle a alpha)
         (quat-from-axis-angle b beta)
         (quat-from-axis-angle c gamma))))

;; Allan and Mark Watt's "Advanced Animation and Rendering Techniques"
;; (ACM Press 1992)
;; http://www.euclideanspace.com/maths/geometry/rotations/conversions/matrixToQuaternion/

(defn quat-from-matrix
  [^Matrix44 m]
  (let [trace (mm/add (.-m00 m) (.-m11 m) (.-m22 m))]
    (if (pos? trace)
      (let [s (/ 0.5 (Math/sqrt (inc trace)))]
        (Quat4.
         (mm/subm (.-m12 m) (.-m21 m) s)
         (mm/subm (.-m20 m) (.-m02 m) s)
         (mm/subm (.-m01 m) (.-m10 m) s)
         (/ 0.25 s)))
      (g/normalize
       (if (and (> (.-m00 m) (.-m11 m)) (> (.-m00 m) (.-m22 m)))
         (let [s (* 2.0 (Math/sqrt (inc (mm/sub (.-m00 m) (.-m11 m) (.-m22 m)))))
               s' (/ s)]
           (Quat4.
            (* 0.25 s)
            (mm/addm (.-m10 m) (.-m01 m) s')
            (mm/addm (.-m20 m) (.-m02 m) s')
            (mm/subm (.-m12 m) (.-m21 m) s')))
         (if (> (.-m11 m) (.-m22 m))
           (let [s (* 2.0 (Math/sqrt (inc (mm/sub (.-m11 m) (.-m00 m) (.-m22 m)))))
                 s' (/ s)]
             (Quat4.
              (mm/addm (.-m10 m) (.-m01 m) s')
              (* 0.25 s)
              (mm/addm (.-m21 m) (.-m12 m) s')
              (mm/subm (.-m20 m) (.-m02 m) s')))
           (let [s (* 2.0 (Math/sqrt (inc (mm/sub (.-m22 m) (.-m00 m) (.-m11 m)))))
                 s' (/ s)]
             (Quat4.
              (mm/addm (.-m20 m) (.-m02 m) s')
              (mm/addm (.-m21 m) (.-m12 m) s')
              (* 0.25 s)
              (mm/subm (.-m10 m) (.-m01 m) s')))))))))

(defn alignment-quat
  [a b]
  (let [d (g/dot a b)]
    (cond
     (< d -0.999999) (let [c (g/cross V3X a)
                           c (if (< (g/mag c) 1e-6) (g/cross V3Y a) c)]
                       (quat-from-axis-angle c PI))
     (> d 0.999999) (quat)
     :default (g/normalize (quat (g/cross a b) (inc d))))))

(defn lookup4
  [^Quat4 _ k nf]
  (case k
    \x (.-x _)
    \y (.-y _)
    \z (.-z _)
    \w (.-w _)
    (or nf (err/key-error! k))))

(defn swizzle4
  [^Quat4 _ k default]
  (if (number? k)
    (case (int k)
      0 (.-x _)
      1 (.-y _)
      2 (.-z _)
      3 (.-w _)
      (or default (err/key-error! k)))
    (case k
      :x (.-x _)
      :y (.-y _)
      :z (.-z _)
      :w (.-w _)
      (let [n (name k) c (count n)]
        (case c
          2 (thi.ng.geom.core.vector.Vec2.
             (lookup4 _ (nth n 0) default)
             (lookup4 _ (nth n 1) default))
          3 (thi.ng.geom.core.vector.Vec3.
             (lookup4 _ (nth n 0) default)
             (lookup4 _ (nth n 1) default)
             (lookup4 _ (nth n 2) default))
          4 (Quat4.
             (lookup4 _ (nth n 0) default)
             (lookup4 _ (nth n 1) default)
             (lookup4 _ (nth n 2) default)
             (lookup4 _ (nth n 3) default))
          (or default (err/key-error! k)))))))

(defn swizzle4-assoc
  [^Quat4 _ k v]
  (if (number? k)
    (case (int k)
      0 (Quat4. v (.-y _) (.-z _) (.-w _))
      1 (Quat4. (.-x _) v (.-z _) (.-w _))
      2 (Quat4. (.-x _) (.-y _) v (.-w _))
      3 (Quat4. (.-x _) (.-y _) (.-z _) v)
      (err/key-error! k))
    (case k
      :x (Quat4. v (.-y _) (.-z _) (.-w _))
      :y (Quat4. (.-x _) v (.-z _) (.-w _))
      :z (Quat4. (.-x _) (.-y _) v (.-w _))
      :w (Quat4. (.-x _) (.-y _) (.-z _) v)
      (v/swizzle-assoc* _ quat {\x 0 \y 1 \z 2 \w 3} k v))))

;;;;;;;;;;;; This file autogenerated from src/cljx/thi/ng/geom/core/quaternion.cljx
