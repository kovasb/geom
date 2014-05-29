(ns thi.ng.geom.core.vector
  (:require
   [thi.ng.geom.core :as g]
   [thi.ng.common.data.core :as d]
   [thi.ng.common.error :as err]
   [thi.ng.common.math.core :as m :refer [*eps* PI TWO_PI INF- INF+]]
                                       
                                        )
        
  (:require-macros
   [thi.ng.macromath.core :as mm]))

(declare vec2 swizzle2 swizzle2-assoc)
(declare vec3 swizzle3 swizzle3-assoc)
(declare vec2-op-1 vec2-op-2 vec2-op-2* vec2-op-3)
(declare vec3-op-1 vec3-op-2 vec3-op-3)

     
               
               
        
                          
                       
               
                  
               
                    
                 
            
                                      
                                     
                                        
                 
                                            
                                    
                                               
                                    
                                                     

(deftype Vec2
                             
         [x y]
                          
            
                                
            
                                  

                                   
           
                                         
                        
          
                                          

                      
             
                                
             
                                  
              
               
                            
                                        
                                                  
                                          

                            
                         
          
             
             
             
          
             
               
             

                              
                                    
            
             
             
             
                  
                                           
              
                                                                       
            
                                         
             
              
                    
                      
                      
                             

                          
              
                 
               
                                                        
              
                            
                  

                                        
                          
                             
                       
                          
                             
            
             
           
                        
           
                        
           
                          
           
             
          
               
           
                       
          
             
          
                                                         
          
                                            
            
            
                             
                                                          
                                                           
                                                
                             
                                                   
                                                      
             
            
                             
                                                        
                                                         
                                                
                             
                                                    
                                                       

;; http://docs.oracle.com/javase/7/docs/g/java/util/List.html#hashCode()
               
          
             
                                       
                                      
                                         

;; http://clojure.org/data_structures#hash
                          
             
          
                           
               
                                         
                                        
                                          
            

                
                
            
                             
                                           
                       
                                      
                
                           
                                                 

                       
                      
                  
                             
                           
               
                               
                               
                   
                       

                   
                  
            
                                                        
                  
                  
                             
                           
               
                               
                               
                   
                       

            
               
          
                 
                      
                                  
                              
                       
                              
                          
       ICloneable
       (-clone
        [_] (Vec2. x y))

       ILookup
       (-lookup
        [_ k] (swizzle2 _ k nil))
       (-lookup
        [_ k nf] (swizzle2 _ k nf))

       IFn
       (-invoke
        [_ k] (swizzle2 _ k nil))
       (-invoke
        [_ k nf] (swizzle2 _ k nf))

       ICounted
       (-count
        [_] 2)

       IAssociative
       (-contains-key?
        [_ k] (not (nil? (#{0 1 :x :y} k))))
       (-assoc
        [_ k v] (swizzle2-assoc _ k v))

       IVector
       (-assoc-n
        [_ k v]
        (case (int k)
          0 (Vec2. v y)
          1 (Vec2. x v)
          (err/key-error! k)))

       ISequential
       ISeq
       (-first
        [_] x)
       (-rest
        [_] (cons y nil))

       INext
       (-next
        [_] (cons y nil))

       ISeqable
       (-seq
        [_] _)

       IReversible
       (-rseq
        [_] (Vec2. y x))

       IIndexed
       (-nth
        [_ k] (case (int k) 0 x, 1 y, (err/key-error! k)))
       (-nth
        [_ k nf] (case (int k) 0 x, 1 y, nf))

       ICollection
       (-conj
        [_ z] (vec3 x y z))

       IStack
       (-peek
        [_] y)
       (-pop
        [_] [x])

       IComparable
       (-compare
        [_ o]
        (if (instance? Vec2 o)
          (let [c (compare x (.-x ^Vec2 o))]
            (if (== 0 c)
              (compare y (.-y ^Vec2 o))
              c))
          (let [c (count o)]
            (if (== 2 c) (compare o _) (- 2 c)))))

       IHash
       (-hash
        [_] (hash-combine (hash x) (hash y)))

       IEquiv
       (-equiv
        [_ o]
        (if (instance? Vec2 o)
          (and (== x (.-x ^Vec2 o)) (== y (.-y ^Vec2 o)))
          (and (sequential? o) (= 2 (count o))
               (= x (nth o 0)) (= y (nth o 1)))))

       IReduce
       (-reduce
        [coll f]
        (let [acc (f x y)] (if (reduced? acc) @acc acc)))
       (-reduce
        [coll f start]
        (let [acc (f start x)]
          (if (reduced? acc)
            @acc
            (let [acc (f acc y)]
              (if (reduced? acc)
                @acc
                acc)))))

       Object
       (toString
        [_] (str "[" x " " y "]"))
g/PScale
(scale
 [_ a] (vec2-op-1 * _ a 1.0))
(scale
 [_ a b] (vec2-op-2 * _ a b 1.0 1.0))
(scale
 [_ a b c] (vec2-op-3 * _ a b c 1.0))

g/PTranslate
(translate
 [_ a] (vec2-op-1 + _ a 0.0))
(translate
 [_ a b] (vec2-op-2 + _ a b 0.0 0.0))
(translate
 [_ a b c] (vec2-op-3 + _ a b c 0.0))

g/PRotate
(rotate
 [_ theta]
 (let [s (Math/sin theta) c (Math/cos theta)]
   (Vec2. (mm/msub x c y s) (mm/madd x s y c))))
g/PRotate3D
(rotate-x
 [_ theta] (g/rotate-x (vec3 _) theta))
(rotate-y
 [_ theta] (g/rotate-y (vec3 _) theta))
(rotate-z
 [_ theta] (vec3 (g/rotate _ theta)))
(rotate-around-axis
 [_ axis theta] (g/rotate-around-axis (vec3 _) axis theta))

g/PTransform
(transform
 [_ m] (g/transform-vector m _))
g/PMathOps
(abs [_] (Vec2. (m/abs x) (m/abs y)))
(+ [_] _)
(+ [_ a] (vec2-op-1 + _ a 0.0))
(+ [_ a b] (vec2-op-2 + _ a b 0.0 0.0))
(+ [_ a b c] (vec2-op-3 + _ a b c 0.0))

(- [_] (Vec2. (- x) (- y)))
(- [_ a] (vec2-op-1 - _ a 0.0))
(- [_ a b] (vec2-op-2 - _ a b 0.0 0.0))
(- [_ a b c] (vec2-op-3 - _ a b c 0.0))

(* [_] _)
(* [_ a] (vec2-op-1 * _ a 1.0))
(* [_ a b] (vec2-op-2 * _ a b 1.0 1.0))
(* [_ a b c] (vec2-op-3 * _ a b c 1.0))

(div [_] (Vec2. (/ x) (/ y)))
(div [_ a] (vec2-op-1 / _ a 0.0))
(div [_ a b] (vec2-op-2 / _ a b 0.0 0.0))
(div [_ a b c] (vec2-op-3 / _ a b c 0.0))

(madd [_ a b] (vec2-op-2* * + _ a b 1.0 0.0))
(addm [_ a b] (vec2-op-2* + * _ a b 0.0 1.0))
(msub [_ a b] (vec2-op-2* * - _ a b 1.0 0.0))
(subm [_ a b] (vec2-op-2* - * _ a b 0.0 1.0))
g/PDotProduct
(dot
 [_ [ax ay]] (mm/madd x ax y ay))
g/PCrossProduct
(cross
 [_ [ax ay]] (mm/msub x ay y ax))
g/PLimit
(limit
 [_ len]
 (if (> (g/mag-squared _) (* len len))
   (g/normalize _ len)
   _))
g/PMinMax
(min
 [_ [ax ay]]
 (Vec2. (min x ax) (min y ay)))
(min
 [_ [ax ay] [bx by]]
 (Vec2. (min (min x ax) bx) (min (min y ay) by)))
(max
 [_ [ax ay]]
 (Vec2. (max x ax) (max y ay)))
(max
 [_ [ax ay] [bx by]]
 (Vec2. (max (max x ax) bx) (max (max y ay) by)))
g/PMagnitude
(mag
 [_]
 (Math/sqrt (mm/madd x x y y)))
(mag-squared
 [_] (mm/madd x x y y))
g/PNormalize
(normalize
 [_]
 (let [l (Math/sqrt (mm/madd x x y y))]
   (if (pos? l)
     (Vec2. (/ x l) (/ y l))
     _)))
(normalize
 [_ len]
 (let [l (Math/sqrt (mm/madd x x y y))]
   (if (pos? l)
     (let [l (/ len l)] (Vec2. (* x l) (* y l)))
     _)))
(normalized?
 [_] (m/delta= 1.0 (g/mag-squared _)))
g/PNormal
(normal [_] (Vec2. (- y) x))
g/PDistance
(dist
 [_ a]
 (let [[dx dy] (if (instance? Vec2 a)
                 [(- x (.-x ^Vec2 a)) (- y (.-y ^Vec2 a))]
                 [(- x (nth a 0)) (- y (nth a 1))])]
   (Math/sqrt (mm/madd dx dx dy dy))))
(dist-squared
 [_ a]
 (let [[dx dy] (if (instance? Vec2 a)
                 [(- x (.-x ^Vec2 a)) (- y (.-y ^Vec2 a))]
                 [(- x (nth a 0)) (- y (nth a 1))])]
   (mm/madd dx dx dy dy)))
g/PReflect
(reflect
 [_ [rx ry :as r]]
  (let [d (* (g/dot _ r) 2.0)]
    (Vec2. (mm/msub rx d x) (mm/msub ry d y))))
g/PInvert
(invert
 [_] (Vec2. (- x) (- y)))
g/PInterpolate
(mix
 [_ [ax ay]]
 (Vec2. (mm/submadd ax x 0.5 x) (mm/submadd ay y 0.5 y)))
(mix
 [_ [ax ay] t]
 (Vec2. (mm/submadd ax x t x) (mm/submadd ay y t y)))
(mix
 [_ [ax ay] [bx by] [cx cy] u v]
 (let [ux (mm/submadd ax x u x)
       uy (mm/submadd ay y u y)]
   (Vec2.
    (mm/submadd (mm/submadd cx bx u bx) ux v ux)
    (mm/submadd (mm/submadd cy by u by) uy v uy))))
g/PHeading
(heading
 [_]
 (let [t (Math/atan2 y x)]
   (if (neg? t) (+ t TWO_PI) t)))
(heading-xy
  [_] (g/heading _))
(angle-between
 [_ a]
 (let [t (- (g/heading-xy a) (g/heading-xy _))]
   (if (neg? t) (+ t TWO_PI) t)))
(slope-xy [_] (/ y x))
g/PPolar
(as-polar
 [_] (Vec2. (g/mag _) (g/heading-xy _)))
(as-cartesian
 [_] (Vec2. (* x (Math/cos y)) (* x (Math/sin y))))
)
                               
                                                                                                     
                                                                                        

(deftype Vec3
                                       
         [x y z]
                          
            
                                
            
                                  

                                   
           
                                         
                        
          
                                          

                      
             
                                
             
                                  
              
               
                            
                                        
                                                  
                                          

                              
                                    
            
             
             
             
                  
                                                
              
                                                                            
            
                                         
             
              
                    
                        
                        
                        
                             

                          
              
                 
               
                                                          
              
                            
           
             

                                        
                          
                             
                       
                          
                             
            
             
           
                                 
           
                                 
           
                       
           
             
          
                       
           
                         
          
             
          
                                                              
          
                                                 
            
            
                             
                                                          
                                                          
                                                           
                                                
                             
                                                   
                                                   
                                                      
             
            
                             
                                                        
                                                        
                                                         
                                                
                             
                                                    
                                                    
                                                       
               
          
             
                                       
                                      
                                       
                                      
                                         

                          
             
          
                           
               
                                         
                                        
                                         
                                        
                                          
            

                
                
            
                             
                                           
                       
                                               
                           
                                          
                    
                
                           
                                                 

                       
                      
                  
                             
                           
               
                               
                               
                   
                                   
                                   
                       
                             

                   
                  
            
                         
                           
               
                               
                               
                   
                       
                  
                  
                             
                           
               
                               
                               
                   
                                   
                                   
                       
                             

            
               
          
                 
                      
                                  
                              
                       
                              
                       
                              
                          
       ICloneable
       (-clone
        [_] (Vec3. x y z))

       ILookup
       (-lookup
        [_ k] (swizzle3 _ k nil))
       (-lookup
        [_ k nf] (swizzle3 _ k nf))

       IFn
       (-invoke
        [_ k] (swizzle3 _ k nil))
       (-invoke
        [_ k nf] (swizzle3 _ k nf))

       ICounted
       (-count
        [_] 3)

       IAssociative
       (-contains-key?
        [_ k] (not (nil? (#{0 1 2 :x :y :z} k))))
       (-assoc
        [_ k v] (swizzle3-assoc _ k v))

       IVector
       (-assoc-n
        [_ k v]
        (case (int k)
          0 (Vec3. v y z)
          1 (Vec3. x v z)
          2 (Vec3. x y v)
          (err/key-error! k)))

       ISequential
       ISeq
       (-first
        [_] x)
       (-rest
        [_] (cons y (cons z nil)))

       INext
       (-next
        [_] (cons y (cons z nil)))

       ISeqable
       (-seq
        [_] _)

       IReversible
       (-rseq
        [_] (Vec3. z y x))

       IIndexed
       (-nth
        [_ k] (case (int k) 0 x, 1 y, 2 z, (err/key-error! k)))
       (-nth
        [_ k nf] (case (int k) 0 x, 1 y, 2 z, nf))

       ICollection
       (-conj
        [_ w] [x y z w])

       IStack
       (-peek
        [_] z)
       (-pop
        [_] (Vec2. x y))

       IComparable
       (-compare
        [_ o]
        (if (instance? Vec3 o)
          (let [c (compare x (.-x ^Vec3 o))]
            (if (== 0 c)
              (let [c (compare y (.-y ^Vec3 o))]
                (if (== 0 c)
                  (compare z (.-z ^Vec3 o))
                  c))
              c))
          (let [c (count o)]
            (if (== 3 c) (compare o _) (- 3 c)))))

       IHash
       (-hash
        [_] (-> (hash x)
                (hash-combine (hash y))
                (hash-combine (hash z))))

       IEquiv
       (-equiv
        [_ o]
        (if (instance? Vec3 o)
          (and (== x (.-x ^Vec3 o)) (== y (.-y ^Vec3 o)) (== z (.-z ^Vec3 o)))
          (and (sequential? o) (= 3 (count o))
               (= x (nth o 0)) (= y (nth o 1)) (= z (nth o 2)))))

       IReduce
       (-reduce
        [coll f]
        (let [acc (f x y)]
          (if (reduced? acc)
            @acc
            (let [acc (f acc z)]
              (if (reduced? acc)
                @acc
                acc)))))
       (-reduce
        [coll f start]
        (let [acc (f start x)]
          (if (reduced? acc)
            @acc
            (let [acc (f acc y)]
              (if (reduced? acc)
                @acc
                (let [acc (f acc z)]
                  (if (reduced? acc)
                    @acc
                    acc)))))))

       Object
       (toString
        [_] (str "[" x " " y " " z "]"))
g/PScale
(scale
 [_ a] (vec3-op-1 * _ a 1.0))
(scale
 [_ a b] (vec3-op-2 * * _ a b 1.0 1.0))
(scale
 [_ a b c] (vec3-op-3 * _ a b c 1.0))

g/PTranslate
(translate
 [_ a] (vec3-op-1 + _ a 0.0))
(translate
 [_ a b] (vec3-op-2 + + _ a b 0.0 0.0))
(translate
 [_ a b c] (vec3-op-3 + _ a b c 0.0))

g/PRotate
(rotate [_ theta] (g/rotate-z _ theta))

g/PRotate3D
(rotate-x
 [_ theta]
 (let [s (Math/sin theta) c (Math/cos theta)]
   (Vec3. x (mm/msub y c z s) (mm/madd y s z c))))
(rotate-y
 [_ theta]
 (let [s (Math/sin theta) c (Math/cos theta)]
   (Vec3. (mm/madd x c z s) y (mm/msub z c x s))))
(rotate-z
 [_ theta]
 (let [s (Math/sin theta) c (Math/cos theta)]
   (Vec3. (mm/msub x c y s) (mm/madd x s y c) z)))
(rotate-around-axis
 [_ [ax ay az] theta]
 (let [ux (* ax x), uy (* ax y), uz (* ax z)
       vx (* ay x), vy (* ay y), vz (* ay z)
       wx (* az x), wy (* az y), wz (* az z)
       ax2 (* ax ax), ay2 (* ay ay), az2 (* az az)
       s (Math/sin theta), c (Math/cos theta)
       uvw (mm/add ux vy wz)]
   (Vec3.
    (mm/madd uvw ax
             (mm/msub (+ ay2 az2) x (+ vy wz) ax) c
             (mm/subm vz wy s))

    (mm/madd uvw ay
             (mm/msub (+ ax2 az2) y (+ ux wz) ay) c
             (mm/subm wx uz s))

    (mm/madd uvw az
             (mm/msub (+ ax2 ay2) z (+ ux vy) az) c
             (mm/subm uy vx s)))))

g/PTransform
(transform
 [_ m] (g/transform-vector m _))
g/PMathOps
(abs [_] (Vec3. (m/abs x) (m/abs y) (m/abs z)))
(+ [_] _)
(+ [_ a] (vec3-op-1 + _ a 0.0))
(+ [_ a b] (vec3-op-2 + + _ a b 0.0 0.0))
(+ [_ a b c] (vec3-op-3 + _ a b c 0.0))

(- [_] (Vec3. (- x) (- y) (- z)))
(- [_ a] (vec3-op-1 - _ a 0.0))
(- [_ a b] (vec3-op-2 - - _ a b 0.0 0.0))
(- [_ a b c] (vec3-op-3 - _ a b c 0.0))

(* [_] _)
(* [_ a] (vec3-op-1 * _ a 1.0))
(* [_ a b] (vec3-op-2 * * _ a b 1.0 1.0))
(* [_ a b c] (vec3-op-3 * _ a b c 1.0))

(div [_] (Vec3. (/ x) (/ y) (/ z)))
(div [_ a] (vec3-op-1 / _ a 0.0))
(div [_ a b] (vec3-op-2 / / _ a b 0.0 0.0))
(div [_ a b c] (vec3-op-3 / _ a b c 0.0))

(madd [_ a b] (vec3-op-2 * + _ a b 1.0 0.0))
(addm [_ a b] (vec3-op-2 + * _ a b 0.0 1.0))
(msub [_ a b] (vec3-op-2 * - _ a b 1.0 0.0))
(subm [_ a b] (vec3-op-2 - * _ a b 0.0 1.0))

g/PDotProduct
(dot
 [_ [ax ay az]]
 (mm/madd x ax y ay z az))

g/PCrossProduct
(cross
 [_ [ax ay az]]
 (Vec3.
  (mm/msub y az ay z)
  (mm/msub z ax az x)
  (mm/msub x ay ax y)))

g/PLimit
(limit
 [_ len]
 (if (> (g/mag-squared _) (* len len))
   (g/normalize _ len)
   _))

g/PMinMax
(min
 [_ [ax ay az]]
 (Vec3. (min x ax) (min y ay) (min z az)))
(min
 [_ [ax ay az] [bx by bz]]
 (Vec3.
  (min (min x ax) bx)
  (min (min y ay) by)
  (min (min z az) bz)))
(max
 [_ [ax ay az]]
 (Vec3. (max x ax) (max y ay) (max z az)))
(max
 [_ [ax ay az] [bx by bz]]
 (Vec3.
  (max (max x ax) bx)
  (max (max y ay) by)
  (max (max z az) bz)))
g/PMagnitude
(mag
 [_]
 (Math/sqrt (mm/madd x x y y z z)))
(mag-squared
 [_] (mm/madd x x y y z z))
g/PNormalize
(normalize
 [_]
 (let [l (Math/sqrt (mm/madd x x y y z z))]
   (if (pos? l)
     (Vec3. (/ x l) (/ y l) (/ z l))
     _)))
(normalize
 [_ len]
 (let [l (Math/sqrt (mm/madd x x y y z z))]
   (if (pos? l)
     (let [l (/ len l)]
       (Vec3. (* x l) (* y l) (* z l)))
     _)))
(normalized?
 [_] (m/delta= 1.0 (g/mag-squared _)))
g/PDistance
(dist
 [_ a] (Math/sqrt (g/dist-squared _ a)))
(dist-squared
 [_ a]
 (let [[dx dy dz] (if (instance? Vec3 a)
                    [(- x (.-x ^Vec3 a))
                     (- y (.-y ^Vec3 a))
                     (- z (.-z ^Vec3 a))]
                    [(- x (nth a 0))
                     (- y (nth a 1))
                     (- z (nth a 2 0.0))])]
   (mm/madd dx dx dy dy dz dz)))
g/PReflect
(reflect
 [_ [rx ry rz :as r]]
  (let [d (* (g/dot _ r) 2.0)]
    (Vec3. (mm/msub rx d x) (mm/msub ry d y) (mm/msub rz d z))))
g/PInvert
(invert
 [_] (Vec3. (- x) (- y) (- z)))
g/PInterpolate
(mix
 [_ [ax ay az]]
 (Vec3.
  (mm/submadd ax x 0.5 x)
  (mm/submadd ay y 0.5 y)
  (mm/submadd az z 0.5 z)))
(mix
 [_ [ax ay az] t]
 (Vec3.
  (mm/submadd ax x t x)
  (mm/submadd ay y t y)
  (mm/submadd az z t z)))
(mix
 [_ [ax ay az] [bx by bz] [cx cy cz] u v]
 (let [ux (mm/submadd ax x u x)
       uy (mm/submadd ay y u y)
       uz (mm/submadd az z u z)]
   (Vec3.
    (mm/submadd (mm/submadd cx bx u bx) ux v ux)
    (mm/submadd (mm/submadd cy by u by) uy v uy)
    (mm/submadd (mm/submadd cz bz u bz) uz v uz))))
g/PHeading
(heading [_] (g/heading-xy _))
(heading-xy
 [_]
 (let [t (Math/atan2 y x)]
   (if (neg? t) (+ t TWO_PI) t)))
(heading-xz
 [_]
 (let [t (Math/atan2 z x)]
   (if (neg? t) (+ t TWO_PI) t)))
(heading-yz
 [_]
 (let [t (Math/atan2 z y)]
   (if (neg? t) (+ t TWO_PI) t)))
(angle-between
 [_ a] (Math/acos (g/dot _ a)))
(slope-xy [_] (/ y x))
(slope-xz [_] (/ x x))
(slope-yz [_] (/ z y))
;; http://mathworld.wolfram.com/SphericalCoordinates.html
g/PPolar
(as-polar
 [_]
  (let [r (g/mag _)
        theta (Math/atan2 y x)
        phi (Math/acos (/ z r))]
    (Vec3. r (if (neg? theta) (+ TWO_PI theta) theta) phi)))
(as-cartesian [_]
  (let [rsphi (* (Math/sin z) x)]
    (Vec3.
     (* (Math/cos y) rsphi)
     (* (Math/sin y) rsphi)
     (* (Math/cos z) x))))
)
                                                                                        

(defn vec2-op-seq
  [op ^Vec2 acc xs]
  (loop [ax (.-x acc), ay (.-y acc), xs xs]
    (if xs
      (let [v ^Vec2 (first xs)]
        (recur (double (op ax (.-x v))) (double (op ay (.-y v))) (next xs)))
      (Vec2. ax ay))))

(defn vec2-op-seq2
  [op op2 ^Vec2 acc as b]
  (loop [ax (.-x acc), ay (.-y acc), as as]
    (if as
      (let [v ^Vec2 (first as)]
        (recur (double (op ax (.-x v))) (double (op ay (.-y v))) (next as)))
      (let [[bx by] (if (number? b) [b b] b)]
        (Vec2. (op2 ax bx) (op2 ay by))))))

(defn vec2-op-1
  [op ^Vec2 _ a d]
  (if (instance? Vec2 a)
    (Vec2.
     (op (.-x _) (.-x ^Vec2 a))
     (op (.-y _) (.-y ^Vec2 a)))
    (if (number? a)
      (Vec2. (op (.-x _) a) (op (.-y _) a))
      (if (instance? Vec2 (first a))
        (vec2-op-seq op _ a)
        (Vec2.
         (op (.-x _) (nth a 0 d))
         (op (.-y _) (nth a 1 d)))))))

(defn vec2-op-2
  [op ^Vec2 _ a b d1 d2]
  (if (instance? Vec2 a)
    (if (instance? Vec2 b)
      (Vec2. ;; v v
       (op (op (.-x _) (.-x ^Vec2 a)) (.-x ^Vec2 b))
       (op (op (.-y _) (.-y ^Vec2 a)) (.-y ^Vec2 b)))
      (if (number? b)
        (Vec2. ;; v n
         (op (op (.-x _) (.-x ^Vec2 a)) b)
         (op (op (.-y _) (.-y ^Vec2 a)) b))
        (Vec2. ;; v ?
         (op (op (.-x _) (.-x ^Vec2 a)) (nth b 0 d2))
         (op (op (.-y _) (.-y ^Vec2 a)) (nth b 1 d2)))))
    (let [an? (number? a) bn? (number? b)]
      (if (and an? bn?)
        (Vec2. ;; n n
         (op (.-x _) a)
         (op (.-y _) b))
        (let [[ax ay] (if an? [a a] a)
              [bx by] (if bn? [b b] b)]
          (Vec2. ;; ? ?
           (op (op (.-x _) (or ax d1)) (or bx d2))
           (op (op (.-y _) (or ay d1)) (or by d2))))))))

(defn vec2-op-2*
  "Similar to vec2-op-2 but takes 2 fn args and handles case with
  a & b being both numbers differently."
  [op op2 ^Vec2 _ a b d1 d2]
  (if (instance? Vec2 a)
    (if (instance? Vec2 b)
      (Vec2. ;; v v
       (op2 (op (.-x _) (.-x ^Vec2 a)) (.-x ^Vec2 b))
       (op2 (op (.-y _) (.-y ^Vec2 a)) (.-y ^Vec2 b)))
      (if (number? b)
        (Vec2. ;; v n
         (op2 (op (.-x _) (.-x ^Vec2 a)) b)
         (op2 (op (.-y _) (.-y ^Vec2 a)) b))
        (Vec2. ;; v ?
         (op2 (op (.-x _) (.-x ^Vec2 a)) (nth b 0 d2))
         (op2 (op (.-y _) (.-y ^Vec2 a)) (nth b 1 d2)))))
    (if (and (sequential? a) (instance? Vec2 (first a)))
      (vec2-op-seq2 op op2 _ a b)
      (let [an? (number? a) bn? (number? b)]
        (if (and an? bn?)
          (Vec2.               ;; n n
           (op2 (op (.-x _) a) b) ;; difference to vec2-op-2
           (op2 (op (.-y _) a) b))
          (let [[ax ay] (if an? [a a] a)
                [bx by] (if bn? [b b] b)]
            (Vec2. ;; ? ?
             (op2 (op (.-x _) (or ax d1)) (or bx d2))
             (op2 (op (.-y _) (or ay d1)) (or by d2)))))))))

(defn vec2-op-3
  [op ^Vec2 _ a b c d]
  (if (instance? Vec2 a)
    (if (instance? Vec2 b)
      (if (instance? Vec2 c)
        (Vec2. ;; v v v
         (op (op (op (.-x _) (.-x ^Vec2 a)) (.-x ^Vec2 b)) (.-x ^Vec2 c))
         (op (op (op (.-y _) (.-y ^Vec2 a)) (.-y ^Vec2 b)) (.-y ^Vec2 c)))
        (if (number? c)
          (Vec2. ;; v v n
           (op (op (op (.-x _) (.-x ^Vec2 a)) (.-x ^Vec2 b)) c)
           (op (op (op (.-y _) (.-y ^Vec2 a)) (.-y ^Vec2 b)) c))
          (Vec2. ;; v v ?
           (op (op (op (.-x _) (.-x ^Vec2 a)) (.-x ^Vec2 b)) (nth c 0 d))
           (op (op (op (.-y _) (.-y ^Vec2 a)) (.-y ^Vec2 b)) (nth c 1 d)))))
      (let [[bx by] (if (number? b) [b b] b)
            [cx cy] (if (number? c) [c c] c)]
        (Vec2. ;; v ? ?
         (op (op (op (.-x _) (.-x ^Vec2 a)) (or bx d)) (or cx d))
         (op (op (op (.-y _) (.-y ^Vec2 a)) (or by d)) (or cy d)))))
    (let [[ax ay] (if (number? a) [a a] a)
          [bx by] (if (number? b) [b b] b)
          [cx cy] (if (number? c) [c c] c)]
      (Vec2. ;; ? ? ?
       (op (op (op (.-x _) (or ax d)) (or bx d)) (or cx d))
       (op (op (op (.-y _) (or ay d)) (or by d)) (or cy d))))))
(defn vec3-op-seq
  [op ^Vec3 acc xs]
  (loop [ax (.-x acc), ay (.-y acc), az (.-z acc), xs xs]
    (if xs
      (let [v ^Vec3 (first xs)]
        (recur (double (op ax (.-x v))) (double (op ay (.-y v))) (double (op az (.-z v))) (next xs)))
      (Vec3. ax ay az))))

(defn vec3-op-seq2
  [op op2 ^Vec3 acc as b]
  (loop [ax (.-x acc), ay (.-y acc), az (.-z acc), as as]
    (if as
      (let [v ^Vec3 (first as)]
        (recur (double (op ax (.-x v))) (double (op ay (.-y v))) (double (op az (.-z v))) (next as)))
      (let [[bx by bz] (if (number? b) [b b b] b)]
        (Vec3. (op2 ax bx) (op2 ay by) (op2 az bz))))))

(defn vec3-op-1
  [op ^Vec3 _ a d]
  (if (instance? Vec3 a)
    (Vec3.
     (op (.-x _) (.-x ^Vec3 a))
     (op (.-y _) (.-y ^Vec3 a))
     (op (.-z _) (.-z ^Vec3 a)))
    (if (number? a)
      (Vec3. (op (.-x _) a) (op (.-y _) a) (op (.-z _) a))
      (if (instance? Vec3 (first a))
        (vec3-op-seq op _ a)
        (Vec3.
         (op (.-x _) (nth a 0 d))
         (op (.-y _) (nth a 1 d))
         (op (.-z _) (nth a 2 d)))))))

(defn vec3-op-2
  [op op2 ^Vec3 _ a b d1 d2]
  (if (instance? Vec3 a)
    (if (instance? Vec3 b)
      (Vec3. ;; v v
       (op2 (op (.-x _) (.-x ^Vec3 a)) (.-x ^Vec3 b))
       (op2 (op (.-y _) (.-y ^Vec3 a)) (.-y ^Vec3 b))
       (op2 (op (.-z _) (.-z ^Vec3 a)) (.-z ^Vec3 b)))
      (if (number? b)
        (Vec3. ;; v n
         (op2 (op (.-x _) (.-x ^Vec3 a)) b)
         (op2 (op (.-y _) (.-y ^Vec3 a)) b)
         (op2 (op (.-z _) (.-z ^Vec3 a)) b))
        (Vec3. ;; v ?
         (op2 (op (.-x _) (.-x ^Vec3 a)) (nth b 0 d2))
         (op2 (op (.-y _) (.-y ^Vec3 a)) (nth b 1 d2))
         (op2 (op (.-z _) (.-z ^Vec3 a)) (nth b 2 d2)))))
    (if (and (sequential? a) (instance? Vec3 (first a)))
      (vec3-op-seq2 op op2 _ a b)
      (let [[ax ay az] (if (number? a) [a a a] a)
            [bx by bz] (if (number? b) [b b b] b)]
        (Vec3. ;; ? ? ?
         (op2 (op (.-x _) (or ax d1)) (or bx d2))
         (op2 (op (.-y _) (or ay d1)) (or by d2))
         (op2 (op (.-z _) (or az d1)) (or bz d2)))))))

(defn vec3-op-3
  [op ^Vec3 _ a b c d]
  (if (instance? Vec3 a)
    (if (instance? Vec3 b)
      (if (instance? Vec3 c)
        (Vec3. ;; v v v
         (op (op (op (.-x _) (.-x ^Vec3 a)) (.-x ^Vec3 b)) (.-x ^Vec3 c))
         (op (op (op (.-y _) (.-y ^Vec3 a)) (.-y ^Vec3 b)) (.-y ^Vec3 c))
         (op (op (op (.-z _) (.-z ^Vec3 a)) (.-z ^Vec3 b)) (.-z ^Vec3 c)))
        (if (number? c)
          (Vec3. ;; v v n
           (op (op (op (.-x _) (.-x ^Vec3 a)) (.-x ^Vec3 b)) c)
           (op (op (op (.-y _) (.-y ^Vec3 a)) (.-y ^Vec3 b)) c)
           (op (op (op (.-z _) (.-z ^Vec3 a)) (.-z ^Vec3 b)) c))
          (Vec3. ;; v v ?
           (op (op (op (.-x _) (.-x ^Vec3 a)) (.-x ^Vec3 b)) (nth c 0 d))
           (op (op (op (.-y _) (.-y ^Vec3 a)) (.-y ^Vec3 b)) (nth c 1 d))
           (op (op (op (.-z _) (.-z ^Vec3 a)) (.-z ^Vec3 b)) (nth c 2 d)))))
      (let [[bx by bz] (if (number? b) [b b b] b)
            [cx cy cz] (if (number? c) [c c c] c)]
        (Vec3. ;; v ? ?
         (op (op (op (.-x _) (.-x ^Vec3 a)) (or bx d)) (or cx d))
         (op (op (op (.-y _) (.-y ^Vec3 a)) (or by d)) (or cy d))
         (op (op (op (.-z _) (.-z ^Vec3 a)) (or bz d)) (or cz d)))))
    (let [an? (number? a) bn? (number? b) cn? (number? c)]
      (if (and an? bn? cn?)
        (Vec3. ;; n n n
         (op (.-x _) a)
         (op (.-y _) b)
         (op (.-z _) c))
        (let [[ax ay az] (if (number? a) [a a a] a)
              [bx by bz] (if (number? b) [b b b] b)
              [cx cy cz] (if (number? c) [c c c] c)]
          (Vec3. ;; ? ? ?
           (op (op (op (.-x _) (or ax d)) (or bx d)) (or cx d))
           (op (op (op (.-y _) (or ay d)) (or by d)) (or cy d))
           (op (op (op (.-z _) (or az d)) (or bz d)) (or cz d))))))))

(def ^:const V2 (Vec2. 0.0 0.0))
(def ^:const V3 (Vec3. 0.0 0.0 0.0))

(def ^:const V2X (Vec2. 1.0 0.0))
(def ^:const V2Y (Vec2. 0.0 1.0))

(def ^:const V3X (Vec3. 1.0 0.0 0.0))
(def ^:const V3Y (Vec3. 0.0 1.0 0.0))
(def ^:const V3Z (Vec3. 0.0 0.0 1.0))

(def ^:const V2INF- (Vec2. INF- INF-))
(def ^:const V2INF+ (Vec2. INF+ INF+))

(def ^:const V3INF- (Vec3. INF- INF- INF-))
(def ^:const V3INF+ (Vec3. INF+ INF+ INF+))

(defn vec2
  ([] V2)
  ([x] (cond
        (instance? Vec2 x) x
        (sequential? x) (Vec2. (nth x 0 0.0) (nth x 1 0.0))
        (number? x) (Vec2. x x)
        (map? x) (Vec2. (get x :x 0.0) (get x :y 0.0))
        :default (err/type-error! "Vec2" x)))
  ([x y] (Vec2. x y)))

(defn vec3
  ([] V3)
  ([x] (cond
        (instance? Vec3 x) x
        (sequential? x) (Vec3. (nth x 0 0.0) (nth x 1 0.0) (nth x 2 0.0))
        (number? x) (Vec3. x x x)
        (map? x) (Vec3. (get x :x 0.0) (get x :y 0.0) (get x :z 0.0))
        :default (err/type-error! "Vec3" x)))
  ([x y] (Vec3. x y 0.0))
  ([x y z] (Vec3. x y z)))

(defn vec2? [x] (instance? Vec2 x))
(defn vec3? [x] (instance? Vec3 x))
(defn randvec2
  ([] (g/normalize (vec2 (m/randnorm) (m/randnorm))))
  ([n] (g/normalize (vec2 (m/randnorm) (m/randnorm)) n)))

(defn randvec3
  ([] (g/normalize (vec3 (m/randnorm) (m/randnorm) (m/randnorm))))
  ([n] (g/normalize (vec3 (m/randnorm) (m/randnorm) (m/randnorm)) n)))

(defn lookup2
  [^Vec2 _ k nf]
  (case k
    \x (.-x _)
    \y (.-y _)
    (or nf (err/key-error! k))))

(defn lookup3
  [^Vec3 _ k nf]
  (case k
    \x (.-x _)
    \y (.-y _)
    \z (.-z _)
    (or nf (err/key-error! k))))

(defn swizzle-assoc*
  [_ ctor keymap k v]
  (let [n (name k)
        c (count n)]
    (if (and (<= c (count keymap)) (== c (count v) (count (into #{} n))))
      (loop [acc (vec _), i 0, n n]
        (if n
          (recur (assoc acc (keymap (first n)) (v i)) (inc i) (next n))
          (ctor acc)))
      (err/key-error! k))))

(defn swizzle2
  [^Vec2 _ k default]
  (if (number? k)
    (case (int k)
      0 (.-x _)
      1 (.-y _)
      (or default (err/key-error! k)))
    (case k
      :x (.-x _)
      :y (.-y _)
      (let [n (name k) c (count n)]
        (case c
          2 (Vec2.
             (lookup2 _ (nth n 0) default)
             (lookup2 _ (nth n 1) default))
          3 (Vec3.
             (lookup2 _ (nth n 0) default)
             (lookup2 _ (nth n 1) default)
             (lookup2 _ (nth n 2) default))
          (or default (err/key-error! k)))))))

(defn swizzle2-assoc
  [^Vec2 _ k v]
  (case k
    0 (Vec2. v (.-y _))
    1 (Vec2. (.-x _) v)
    :x (Vec2. v (.-y _))
    :y (Vec2. (.-x _) v)
    :xy (Vec2. (v 0) (v 1))
    :yx (Vec2. (v 1) (v 0))
    (err/key-error! k)))

(defn swizzle3
  [^Vec3 _ k default]
  (if (number? k)
    (case (int k)
      0 (.-x _)
      1 (.-y _)
      2 (.-z _)
      (or default (err/key-error! k)))
    (case k
      :x (.-x _)
      :y (.-y _)
      :z (.-z _)
      (let [n (name k) c (count n)]
        (case c
          2 (Vec2.
             (lookup3 _ (nth n 0) default)
             (lookup3 _ (nth n 1) default))
          3 (Vec3.
             (lookup3 _ (nth n 0) default)
             (lookup3 _ (nth n 1) default)
             (lookup3 _ (nth n 2) default))
          (or default (err/key-error! k)))))))

(defn swizzle3-assoc
  [^Vec3 _ k v]
  (case k
    :x (Vec3. v (.-y _) (.-z _))
    :y (Vec3. (.-x _) v (.-z _))
    :z (Vec3. (.-x _) (.-y _) v)
    0 (Vec3. v (.-y _) (.-z _))
    1 (Vec3. (.-x _) v (.-z _))
    2 (Vec3. (.-x _) (.-y _) v)
    (swizzle-assoc* _ vec3 {\x 0 \y 1 \z 2} k v)))

;;;;;;;;;;;; This file autogenerated from src/cljx/thi/ng/geom/core/vector.cljx
