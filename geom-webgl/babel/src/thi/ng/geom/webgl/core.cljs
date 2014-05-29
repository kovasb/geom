(ns thi.ng.geom.webgl.core
  (:refer-clojure :exclude [byte float int short keep repeat replace])
  (:require
    [thi.ng.geom.webgl.arrays :as arrays]
    [thi.ng.geom.webgl.utils :as glu]
    [thi.ng.geom.core :as g]
    [thi.ng.geom.core.utils :as gu]
    [thi.ng.geom.core.vector :as v :refer [vec2 vec3 V3Z]]
    [thi.ng.geom.core.matrix :as mat]
    [thi.ng.geom.types]
    [thi.ng.geom.gmesh :as gm]
    [thi.ng.geom.rect :as r]
    [thi.ng.common.error :as err]))

  (declare into-buffer-vec3)
  (def ^:const active-attributes 0x8b89)
  (def ^:const active-texture 0x84e0)
  (def ^:const active-uniforms 0x8b86)
  (def ^:const aliased-line-width-range 0x846e)
  (def ^:const aliased-point-size-range 0x846d)
  (def ^:const alpha 0x1906)
  (def ^:const alpha-bits 0xd55)
  (def ^:const always 0x207)
  (def ^:const array-buffer 0x8892)
  (def ^:const array-buffer-binding 0x8894)
  (def ^:const attached-shaders 0x8b85)
  (def ^:const back 0x405)
  (def ^:const blend 0xbe2)
  (def ^:const blend-color 0x8005)
  (def ^:const blend-dst-alpha 0x80ca)
  (def ^:const blend-dst-rgb 0x80c8)
  (def ^:const blend-equation 0x8009)
  (def ^:const blend-equation-alpha 0x883d)
  (def ^:const blend-equation-rgb 0x8009)
  (def ^:const blend-src-alpha 0x80cb)
  (def ^:const blend-src-rgb 0x80c9)
  (def ^:const blue-bits 0xd54)
  (def ^:const bool 0x8b56)
  (def ^:const bool-vec2 0x8b57)
  (def ^:const bool-vec3 0x8b58)
  (def ^:const bool-vec4 0x8b59)
  (def ^:const browser-default-webgl 0x9244)
  (def ^:const buffer-size 0x8764)
  (def ^:const buffer-usage 0x8765)
  (def ^:const byte 0x1400)
  (def ^:const ccw 0x901)
  (def ^:const clamp-to-edge 0x812f)
  (def ^:const color-attachment0 0x8ce0)
  (def ^:const color-buffer-bit 0x4000)
  (def ^:const color-clear-value 0xc22)
  (def ^:const color-writemask 0xc23)
  (def ^:const compile-status 0x8b81)
  (def ^:const compressed-texture-formats 0x86a3)
  (def ^:const constant-alpha 0x8003)
  (def ^:const constant-color 0x8001)
  (def ^:const context-lost-webgl 0x9242)
  (def ^:const cull-face 0xb44)
  (def ^:const cull-face-mode 0xb45)
  (def ^:const current-program 0x8b8d)
  (def ^:const current-vertex-attrib 0x8626)
  (def ^:const cw 0x900)
  (def ^:const decr 0x1e03)
  (def ^:const decr-wrap 0x8508)
  (def ^:const delete-status 0x8b80)
  (def ^:const depth-attachment 0x8d00)
  (def ^:const depth-bits 0xd56)
  (def ^:const depth-buffer-bit 0x100)
  (def ^:const depth-clear-value 0xb73)
  (def ^:const depth-component 0x1902)
  (def ^:const depth-component16 0x81a5)
  (def ^:const depth-func 0xb74)
  (def ^:const depth-range 0xb70)
  (def ^:const depth-stencil 0x84f9)
  (def ^:const depth-stencil-attachment 0x821a)
  (def ^:const depth-test 0xb71)
  (def ^:const depth-writemask 0xb72)
  (def ^:const dither 0xbd0)
  (def ^:const dont-care 0x1100)
  (def ^:const drawing-buffer-height 0x1e0)
  (def ^:const drawing-buffer-width 0x280)
  (def ^:const dst-alpha 0x304)
  (def ^:const dst-color 0x306)
  (def ^:const dynamic-draw 0x88e8)
  (def ^:const element-array-buffer 0x8893)
  (def ^:const element-array-buffer-binding 0x8895)
  (def ^:const equal 0x202)
  (def ^:const fastest 0x1101)
  (def ^:const float 0x1406)
  (def ^:const float-mat2 0x8b5a)
  (def ^:const float-mat3 0x8b5b)
  (def ^:const float-mat4 0x8b5c)
  (def ^:const float-vec2 0x8b50)
  (def ^:const float-vec3 0x8b51)
  (def ^:const float-vec4 0x8b52)
  (def ^:const fragment-shader 0x8b30)
  (def ^:const framebuffer 0x8d40)
  (def ^:const framebuffer-attachment-object-name 0x8cd1)
  (def ^:const framebuffer-attachment-object-type 0x8cd0)
  (def ^:const framebuffer-attachment-texture-cube-map-face 0x8cd3)
  (def ^:const framebuffer-attachment-texture-level 0x8cd2)
  (def ^:const framebuffer-binding 0x8ca6)
  (def ^:const framebuffer-complete 0x8cd5)
  (def ^:const framebuffer-incomplete-attachment 0x8cd6)
  (def ^:const framebuffer-incomplete-dimensions 0x8cd9)
  (def ^:const framebuffer-incomplete-missing-attachment 0x8cd7)
  (def ^:const framebuffer-unsupported 0x8cdd)
  (def ^:const front 0x404)
  (def ^:const front-and-back 0x408)
  (def ^:const front-face 0xb46)
  (def ^:const func-add 0x8006)
  (def ^:const func-reverse-subtract 0x800b)
  (def ^:const func-subtract 0x800a)
  (def ^:const generate-mipmap-hint 0x8192)
  (def ^:const gequal 0x206)
  (def ^:const greater 0x204)
  (def ^:const green-bits 0xd53)
  (def ^:const high-float 0x8df2)
  (def ^:const high-int 0x8df5)
  (def ^:const incr 0x1e02)
  (def ^:const incr-wrap 0x8507)
  (def ^:const int 0x1404)
  (def ^:const int-vec2 0x8b53)
  (def ^:const int-vec3 0x8b54)
  (def ^:const int-vec4 0x8b55)
  (def ^:const invalid-enum 0x500)
  (def ^:const invalid-framebuffer-operation 0x506)
  (def ^:const invalid-operation 0x502)
  (def ^:const invalid-value 0x501)
  (def ^:const invert 0x150a)
  (def ^:const keep 0x1e00)
  (def ^:const lequal 0x203)
  (def ^:const less 0x201)
  (def ^:const line-loop 0x2)
  (def ^:const line-strip 0x3)
  (def ^:const line-width 0xb21)
  (def ^:const linear 0x2601)
  (def ^:const linear-mipmap-linear 0x2703)
  (def ^:const linear-mipmap-nearest 0x2701)
  (def ^:const lines 0x1)
  (def ^:const link-status 0x8b82)
  (def ^:const low-float 0x8df0)
  (def ^:const low-int 0x8df3)
  (def ^:const luminance 0x1909)
  (def ^:const luminance-alpha 0x190a)
  (def ^:const max-combined-texture-image-units 0x8b4d)
  (def ^:const max-cube-map-texture-size 0x851c)
  (def ^:const max-fragment-uniform-vectors 0x8dfd)
  (def ^:const max-renderbuffer-size 0x84e8)
  (def ^:const max-texture-image-units 0x8872)
  (def ^:const max-texture-size 0xd33)
  (def ^:const max-varying-vectors 0x8dfc)
  (def ^:const max-vertex-attribs 0x8869)
  (def ^:const max-vertex-texture-image-units 0x8b4c)
  (def ^:const max-vertex-uniform-vectors 0x8dfb)
  (def ^:const max-viewport-dims 0xd3a)
  (def ^:const medium-float 0x8df1)
  (def ^:const medium-int 0x8df4)
  (def ^:const mirrored-repeat 0x8370)
  (def ^:const nearest 0x2600)
  (def ^:const nearest-mipmap-linear 0x2702)
  (def ^:const nearest-mipmap-nearest 0x2700)
  (def ^:const never 0x200)
  (def ^:const nicest 0x1102)
  (def ^:const no-error 0x0)
  (def ^:const none 0x0)
  (def ^:const notequal 0x205)
  (def ^:const one 0x1)
  (def ^:const one-minus-constant-alpha 0x8004)
  (def ^:const one-minus-constant-color 0x8002)
  (def ^:const one-minus-dst-alpha 0x305)
  (def ^:const one-minus-dst-color 0x307)
  (def ^:const one-minus-src-alpha 0x303)
  (def ^:const one-minus-src-color 0x301)
  (def ^:const out-of-memory 0x505)
  (def ^:const pack-alignment 0xd05)
  (def ^:const points 0x0)
  (def ^:const polygon-offset-factor 0x8038)
  (def ^:const polygon-offset-fill 0x8037)
  (def ^:const polygon-offset-units 0x2a00)
  (def ^:const red-bits 0xd52)
  (def ^:const renderbuffer 0x8d41)
  (def ^:const renderbuffer-alpha-size 0x8d53)
  (def ^:const renderbuffer-binding 0x8ca7)
  (def ^:const renderbuffer-blue-size 0x8d52)
  (def ^:const renderbuffer-depth-size 0x8d54)
  (def ^:const renderbuffer-green-size 0x8d51)
  (def ^:const renderbuffer-height 0x8d43)
  (def ^:const renderbuffer-internal-format 0x8d44)
  (def ^:const renderbuffer-red-size 0x8d50)
  (def ^:const renderbuffer-stencil-size 0x8d55)
  (def ^:const renderbuffer-width 0x8d42)
  (def ^:const renderer 0x1f01)
  (def ^:const repeat 0x2901)
  (def ^:const replace 0x1e01)
  (def ^:const rgb 0x1907)
  (def ^:const rgb5-a1 0x8057)
  (def ^:const rgb565 0x8d62)
  (def ^:const rgba 0x1908)
  (def ^:const rgba4 0x8056)
  (def ^:const sample-alpha-to-coverage 0x809e)
  (def ^:const sample-buffers 0x80a8)
  (def ^:const sample-coverage 0x80a0)
  (def ^:const sample-coverage-invert 0x80ab)
  (def ^:const sample-coverage-value 0x80aa)
  (def ^:const sampler-2d 0x8b5e)
  (def ^:const sampler-cube 0x8b60)
  (def ^:const samples 0x80a9)
  (def ^:const scissor-box 0xc10)
  (def ^:const scissor-test 0xc11)
  (def ^:const shader-type 0x8b4f)
  (def ^:const shading-language-version 0x8b8c)
  (def ^:const short 0x1402)
  (def ^:const src-alpha 0x302)
  (def ^:const src-alpha-saturate 0x308)
  (def ^:const src-color 0x300)
  (def ^:const static-draw 0x88e4)
  (def ^:const stencil-attachment 0x8d20)
  (def ^:const stencil-back-fail 0x8801)
  (def ^:const stencil-back-func 0x8800)
  (def ^:const stencil-back-pass-depth-fail 0x8802)
  (def ^:const stencil-back-pass-depth-pass 0x8803)
  (def ^:const stencil-back-ref 0x8ca3)
  (def ^:const stencil-back-value-mask 0x8ca4)
  (def ^:const stencil-back-writemask 0x8ca5)
  (def ^:const stencil-bits 0xd57)
  (def ^:const stencil-buffer-bit 0x400)
  (def ^:const stencil-clear-value 0xb91)
  (def ^:const stencil-fail 0xb94)
  (def ^:const stencil-func 0xb92)
  (def ^:const stencil-index 0x1901)
  (def ^:const stencil-index8 0x8d48)
  (def ^:const stencil-pass-depth-fail 0xb95)
  (def ^:const stencil-pass-depth-pass 0xb96)
  (def ^:const stencil-ref 0xb97)
  (def ^:const stencil-test 0xb90)
  (def ^:const stencil-value-mask 0xb93)
  (def ^:const stencil-writemask 0xb98)
  (def ^:const stream-draw 0x88e0)
  (def ^:const subpixel-bits 0xd50)
  (def ^:const texture 0x1702)
  (def ^:const texture-2d 0xde1)
  (def ^:const texture-binding-2d 0x8069)
  (def ^:const texture-binding-cube-map 0x8514)
  (def ^:const texture-cube-map 0x8513)
  (def ^:const texture-cube-map-negative-x 0x8516)
  (def ^:const texture-cube-map-negative-y 0x8518)
  (def ^:const texture-cube-map-negative-z 0x851a)
  (def ^:const texture-cube-map-positive-x 0x8515)
  (def ^:const texture-cube-map-positive-y 0x8517)
  (def ^:const texture-cube-map-positive-z 0x8519)
  (def ^:const texture-mag-filter 0x2800)
  (def ^:const texture-min-filter 0x2801)
  (def ^:const texture-wrap-s 0x2802)
  (def ^:const texture-wrap-t 0x2803)
  (def ^:const texture0 0x84c0)
  (def ^:const texture1 0x84c1)
  (def ^:const texture10 0x84ca)
  (def ^:const texture11 0x84cb)
  (def ^:const texture12 0x84cc)
  (def ^:const texture13 0x84cd)
  (def ^:const texture14 0x84ce)
  (def ^:const texture15 0x84cf)
  (def ^:const texture16 0x84d0)
  (def ^:const texture17 0x84d1)
  (def ^:const texture18 0x84d2)
  (def ^:const texture19 0x84d3)
  (def ^:const texture2 0x84c2)
  (def ^:const texture20 0x84d4)
  (def ^:const texture21 0x84d5)
  (def ^:const texture22 0x84d6)
  (def ^:const texture23 0x84d7)
  (def ^:const texture24 0x84d8)
  (def ^:const texture25 0x84d9)
  (def ^:const texture26 0x84da)
  (def ^:const texture27 0x84db)
  (def ^:const texture28 0x84dc)
  (def ^:const texture29 0x84dd)
  (def ^:const texture3 0x84c3)
  (def ^:const texture30 0x84de)
  (def ^:const texture31 0x84df)
  (def ^:const texture4 0x84c4)
  (def ^:const texture5 0x84c5)
  (def ^:const texture6 0x84c6)
  (def ^:const texture7 0x84c7)
  (def ^:const texture8 0x84c8)
  (def ^:const texture9 0x84c9)
  (def ^:const triangle-fan 0x6)
  (def ^:const triangle-strip 0x5)
  (def ^:const triangles 0x4)
  (def ^:const unpack-alignment 0xcf5)
  (def ^:const unpack-colorspace-conversion-webgl 0x9243)
  (def ^:const unpack-flip-y-webgl 0x9240)
  (def ^:const unpack-premultiply-alpha-webgl 0x9241)
  (def ^:const unsigned-byte 0x1401)
  (def ^:const unsigned-int 0x1405)
  (def ^:const unsigned-short 0x1403)
  (def ^:const unsigned-short-4-4-4-4 0x8033)
  (def ^:const unsigned-short-5-5-5-1 0x8034)
  (def ^:const unsigned-short-5-6-5 0x8363)
  (def ^:const validate-status 0x8b83)
  (def ^:const vendor 0x1f00)
  (def ^:const version 0x1f02)
  (def ^:const vertex-attrib-array-buffer-binding 0x889f)
  (def ^:const vertex-attrib-array-enabled 0x8622)
  (def ^:const vertex-attrib-array-normalized 0x886a)
  (def ^:const vertex-attrib-array-pointer 0x8645)
  (def ^:const vertex-attrib-array-size 0x8623)
  (def ^:const vertex-attrib-array-stride 0x8624)
  (def ^:const vertex-attrib-array-type 0x8625)
  (def ^:const vertex-shader 0x8b31)
  (def ^:const viewport 0xba2)
  (def ^:const zero 0x0)

  (defprotocol PWebGLConvert
    (as-webgl-buffer-spec [_ opts]))
  
  (defprotocol PIntoBuffer
    (into-buffer [_ buf idx stride]))
  
  (defprotocol PRelease
    (release [_]))
  
  (defprotocol PBind
    (bind [_] [_ opts])
    (unbind [_]))
  
  (defprotocol PConfigure
    (configure [_ opts]))
  
  (defprotocol PTexture
    (set-texture-filter [_ type])
    (set-texture-wrap [_ type]))
  
  (defprotocol PFramebuffer
    (set-fbo-color-texture [_ tex])
    (set-fbo-depth-buffer [_ depth-buffer]))

  (defn- fill-buffer-vec3
    [buf idx [x y z] num stride]
    (loop [idx 0, num num]
      (when (pos? num)
        (doto buf
          (aset idx       x)
          (aset (+ idx 1) y)
          (aset (+ idx 2) z))
        (recur (+ idx stride) (dec num))))
    buf)
  
  (defn- fill-buffer
    [buf idx coll n stride]
    (let [nc  (count coll)]
      (loop [i idx, n n]
        (when (pos? n)
          (loop [j i, k 0]
            (when (< k nc)
              (aset buf j (nth coll k))
              (recur (inc j) (inc k))))
          (recur (+ i stride) (dec n))))
      buf))
  
  (defn- fill-vertex-buffer
    [buf faces stride]
    (loop [i 0, faces faces]
      (if faces
        (recur (into-buffer (first faces) buf i stride) (next faces))
        buf)))
  
  (defn- face-normals
    [m]
    (let [fnorms (g/face-normals m)
          faces (g/faces m)
          buf (arrays/float32 (* (count faces) 3 3))]
      (loop [idx 0, faces faces]
        (if faces
          (let [n (fnorms (first faces))
                nx (.-x ^thi.ng.geom.core.vector.Vec3 n)
                ny (.-y ^thi.ng.geom.core.vector.Vec3 n)
                nz (.-z ^thi.ng.geom.core.vector.Vec3 n)]
            (doto buf
              (aset idx       nx)
              (aset (+ idx 1) ny)
              (aset (+ idx 2) nz)
              (aset (+ idx 3) nx)
              (aset (+ idx 4) ny)
              (aset (+ idx 5) nz)
              (aset (+ idx 6) nx)
              (aset (+ idx 7) ny)
              (aset (+ idx 8) nz))
            (recur (+ idx 9) (next faces)))
          buf))))
  
  (defn- vertex-normals
    [m]
    (let [vnorms (g/vertex-normals m)
          faces (g/faces m)
          buf (arrays/float32 (* (count faces) 3 3))]
      (loop [i 0, faces faces]
        (if faces
          (let [f (first faces)]
            (recur (->> i
                        (into-buffer-vec3 (vnorms (f 0)) buf 3)
                        (into-buffer-vec3 (vnorms (f 1)) buf 3)
                        (into-buffer-vec3 (vnorms (f 2)) buf 3))
                   (next faces)))
          buf))))

  (defn into-buffer-vec2
    [^thi.ng.geom.core.vector.Vec2 v buf idx stride]
    (aset buf idx       (.-x v))
    (aset buf (+ idx 1) (.-y v))
    (+ idx stride))
  
  (defn into-buffer-vec3
    [^thi.ng.geom.core.vector.Vec3 v buf idx stride]
    (aset buf idx       (.-x v))
    (aset buf (+ idx 1) (.-y v))
    (aset buf (+ idx 2) (.-z v))
    (+ idx stride))
  
  (extend-type thi.ng.geom.core.vector.Vec2
    PIntoBuffer
    (into-buffer [_ buf idx stride]
      (aset buf idx       (.-x ^thi.ng.geom.core.vector.Vec2 _))
      (aset buf (+ idx 1) (.-y ^thi.ng.geom.core.vector.Vec2 _))
      (+ idx stride)))
  
  (extend-type thi.ng.geom.core.vector.Vec3
    PIntoBuffer
    (into-buffer [_ buf idx stride]
      (aset buf idx       (.-x ^thi.ng.geom.core.vector.Vec3 _))
      (aset buf (+ idx 1) (.-y ^thi.ng.geom.core.vector.Vec3 _))
      (aset buf (+ idx 2) (.-z ^thi.ng.geom.core.vector.Vec3 _))
      (+ idx stride)))
  (extend-type cljs.core.PersistentVector
    PIntoBuffer
    (into-buffer [_ buf idx stride]
      (let [t (type (nth _ 0))
            into* (case t
                   thi.ng.geom.core.vector.Vec2 into-buffer-vec2
                   thi.ng.geom.core.vector.Vec3 into-buffer-vec3
                   into-buffer)]
        (loop [idx idx, xs _]
          (if xs
            (recur (into* (first xs) buf idx stride) (next xs))
            idx)))))
  (extend-type thi.ng.geom.types.Polygon2
    PWebGLConvert
    (as-webgl-buffer-spec
      [_ {:keys [normals stride uv color] :or {stride 3, normals true}}]
      (let [faces          (g/tessellate _)
            num-faces      (count faces)
            num-verts      (* num-faces 3)
            spec           {:attribs {:position {:data (fill-vertex-buffer
                                                        (arrays/float32 (* num-verts stride))
                                                        faces stride)
                                                 :size stride}}
                            :mode         triangles
                            :num-vertices num-verts
                            :num-faces    num-faces}
            spec           (if normals
                             (assoc-in
                              spec [:attribs :normal]
                              {:data (fill-buffer-vec3
                                      (arrays/float32 (* num-verts 3))
                                      0 V3Z num-verts 3)
                               :size 3})
                             spec)
            spec           (if color
                             (let [c-stride (count color)]
                               (assoc-in
                                spec [:attribs :color]
                                {:data (fill-buffer
                                        (arrays/float32 (* num-verts c-stride))
                                        0 color num-verts c-stride)
                                 :size c-stride}))
                             spec)]
        spec)))
  (extend-type thi.ng.geom.types.BasicMesh
    PWebGLConvert
    (as-webgl-buffer-spec
      [_ {:keys [fnormals tessellate stride color] :or {stride 3, fnormals true}}]
      (let [m         (if tessellate (g/tessellate _) _)
            faces     (g/faces m)
            num-faces (count faces)
            num-verts (* num-faces 3)
            spec      {:attribs {:position {:data (fill-vertex-buffer
                                                   (arrays/float32 (* num-verts stride))
                                                   faces stride)
                                            :size stride}}
                       :mode         triangles
                       :num-vertices num-verts
                       :num-faces    num-faces}
            spec      (if fnormals
                        (assoc-in spec [:attribs :normal] {:data (face-normals m) :size 3})
                        spec)
            spec      (if color
                        (let [c-stride (count color)]
                          (assoc-in
                           spec [:attribs :color]
                           {:data (fill-buffer
                                   (arrays/float32 (* num-verts c-stride))
                                   0 color num-verts c-stride)
                            :size c-stride}))
                        spec)]
        spec)))
  (extend-type thi.ng.geom.types.GMesh
    PWebGLConvert
    (as-webgl-buffer-spec
      [_ {:keys [vnormals fnormals tessellate stride color] :or {stride 3, fnormals true}}]
      (let [m         (if tessellate (g/tessellate _) _)
            faces     (g/faces m)
            num-faces (count faces)
            num-verts (* num-faces 3)
            normals   (cond
                       vnormals (vertex-normals m)
                       fnormals (face-normals m)
                       :default nil)
            spec      {:attribs {:position {:data (fill-vertex-buffer
                                                   (arrays/float32 (* num-verts stride))
                                                   faces stride)
                                            :size stride}}
                       :mode         triangles
                       :num-vertices num-verts
                       :num-faces    num-faces}
            spec      (if normals
                        (assoc-in spec [:attribs :normal] {:data normals :size 3})
                        spec)
            spec      (if color
                        (let [c-stride (count color)]
                          (assoc-in
                           spec [:attribs :color]
                           {:data (fill-buffer
                                   (arrays/float32 (* num-verts c-stride))
                                   0 color num-verts c-stride)
                            :size c-stride}))
                        spec)]
        spec)))

  (def context-default-attribs
    {:alpha true
     :antialias true
     :depth true
     :fail-if-major-performance-caveat false
     :prefer-low-power-to-high-performance false
     :premultiplied-alpha true
     :preserve-drawing-buffer false
     :stencil false})
  (defn gl-context
    ([canvas] (gl-context canvas {}))
    ([canvas attribs]
       (let [canvas (if (string? canvas) (.getElementById js/document canvas) canvas)
             attribs (clj->js (merge context-default-attribs attribs))
             ctx (loop [[id & more] ["webgl" "experimental-webgl" "webkit-3d" "moz-webgl"]]
                   (when id
                     (try
                       (let [ctx (.getContext canvas id attribs)]
                         (set! (.-onselectstart canvas) (constantly false))
                         (if ctx ctx (recur more)))
                       (catch js/Error e (recur more)))))]
         (or ctx (err/unsupported! "WebGL not available")))))
  (defn clear-color-buffer
    [^WebGLRenderingContext gl r g b a]
    (.clearColor gl r g b a)
    (.clear gl color-buffer-bit))
  
  (defn clear-depth-buffer
    [^WebGLRenderingContext gl d]
    (.clearDepth gl d)
    (.clear gl depth-buffer-bit))
  
  (defn disable
    [^WebGLRenderingContext gl flag]
    (.disable gl flag) gl)
  
  (defn enable
    [^WebGLRenderingContext gl flag]
    (.enable gl flag) gl)
  
  (defn cull-faces
    [^WebGLRenderingContext gl side]
    (.enable gl cull-face)
    (.cullFace gl side)
    gl)
  
  (defn set-viewport
    ([^WebGLRenderingContext gl {[x y] :p [w h] :size}]
       (.viewport gl x y w h) gl)
    ([^WebGLRenderingContext gl x y w h]
       (.viewport gl x y w h) gl))
  
  (defn get-viewport-rect
    [^WebGLRenderingContext gl]
    (let [b (.getParameter gl viewport)]
      (r/rect (aget b 0) (aget b 1) (aget b 2) (aget b 3))))
  
  (defn perspective
    [fovy aspect near far]
    (let [aspect (cond
                  (number? aspect) aspect
                  (map? aspect) (let [{[w h] :size} aspect] (/ w h))
                  :default (/ (nth aspect 0) (nth aspect 1)))]
      (mat/perspective fovy aspect near far)))
  
  (defn ortho
    ([] (mat/ortho -1 -1 1 1 -1 1))
    ([view-rect]
     (let [a (reduce / (:size view-rect))]
       (mat/ortho (- a) 1 a -1 -1 1))))

  (def ^:private float-ext-ids
    ["OES_texture_float"
     "OES_texture_half_float"
     "OES_texture_float_linear"
     "OES_texture_half_float_linear"
     "WEBGL_color_buffer_float"
     "EXT_color_buffer_half_float"])
  
  (defn get-extension
    [^WEBGL_color_buffer_float gl ext]
    (.getExtension gl ext))
  
  (defn get-float-extension
    [^WebGLRenderingContext gl spec]
    (let [[s-tex h-tex s-lin h-lin s-fbo h-fbo :as ext] (map #(.getExtension gl %) float-ext-ids)]
      (->> [{:texture s-tex :filterable s-lin :renderable s-fbo
             :type float
             :precision :single :single true}
            {:texture h-tex :filterable h-lin :renderable h-fbo
             :type (when h-tex (.-HALF_FLOAT_OES h-tex))
             :precision :half :half true}]
           (reduce
            (fn [acc c]
              (if (and (:texture c) (every? c (:require spec)))
                (conj acc c) acc))
            [])
           (map
            (fn [c]
              (assoc c :score
                     (apply + (map (fn [pref score] (if (c pref) score 0))
                                   (:prefer spec) [0x80 0x40 0x20 0x10 0x8 0x4 0x2 0x1])))))
           (sort-by :score)
           (last))))
  
  (defn get-supported-extensions
   [^WebGLRenderingContext gl]
   (.getSupportedExtensions gl))
