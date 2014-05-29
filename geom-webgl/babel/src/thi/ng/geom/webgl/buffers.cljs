(ns thi.ng.geom.webgl.buffers
  (:require
   [thi.ng.geom.webgl.core :as gl]
   [thi.ng.geom.webgl.arrays :as arrays]
   [thi.ng.geom.webgl.shaders :as sh]
   [thi.ng.geom.webgl.utils :refer [loop-kv]]
   [thi.ng.common.error :as err]))

(declare check-fbo)

(defn make-attribute-buffer
  [^WebGLRenderingContext gl target draw-type data]
  (let [buffer (.createBuffer gl)]
    (.bindBuffer gl target buffer)
    (.bufferData gl target data draw-type)
    buffer))

(defn make-attribute-buffers
  [^WebGLRenderingContext gl mode specs]
  (reduce-kv
   (fn [specs id {:keys [data target]}]
     (assoc-in
      specs [id :buffer]
      (make-attribute-buffer gl (or target gl/array-buffer) mode data)))
   specs specs))

(defn make-attribute-buffers-in-spec
 [model-spec ^WebGLRenderingContext gl mode]
 (update-in
   model-spec [:attribs]
   #(make-attribute-buffers gl mode %)))

(defn draw-arrays
  [^WebGLRenderingContext gl {:keys [shader attribs uniforms mode num-vertices]}]
  (.useProgram gl (:program shader))
  (loop-kv #(sh/set-uniform shader % %2) uniforms)
  (loop-kv #(sh/set-attribute gl shader % %2) attribs)
  (.drawArrays gl mode 0 num-vertices)
  (loop-kv (fn [id _] (sh/disable-attribute gl shader id)) attribs)
  gl)

(defrecord FBO [^WebGLRenderingContext gl id]
  gl/PBind
  (bind [_] (.bindFramebuffer gl gl/framebuffer id) _)
  (unbind [_] (.bindFramebuffer gl gl/framebuffer nil) _)

  gl/PRelease
  (release [_] (.deleteFramebuffer gl id) _)

  gl/PFramebuffer
  (set-fbo-color-texture
    [_ {:keys [target id]}]
    (.framebufferTexture2D gl gl/framebuffer gl/color-attachment0 target id 0)
    (check-fbo gl)
    _)
  (set-fbo-depth-buffer
    [_ {:keys [id]}]
    (.framebufferRenderbuffer gl gl/framebuffer gl/depth-attachment gl/renderbuffer id)
    (check-fbo gl)
    _))

(defn- check-fbo
  [^WebGLRenderingContext gl]
  (condp = (.checkFramebufferStatus gl gl/framebuffer)
    gl/framebuffer-unsupported
    (err/throw! "FBO unsupported")
    gl/framebuffer-incomplete-attachment
    (err/throw! "FBO incomplete attachment")
    gl/framebuffer-incomplete-dimensions
    (err/throw! "FBO incomplete dimensions")
    gl/framebuffer-incomplete-missing-attachment
    (err/throw! "FBO incomplete missing attachment")
    gl))

(defn make-fbo
  [^WebGLRenderingContext gl]
  (FBO. gl (.createFramebuffer gl)))

(defrecord RenderBuffer [^WebGLRenderingContext gl id format width height]
  gl/PBind
  (bind [_] (.bindRenderbuffer gl gl/renderbuffer id) _)
  (unbind [_] (.bindRenderbuffer gl gl/renderbuffer nil) _)

  gl/PRelease
  (release [_] (.deleteRenderbuffer gl id) _)

  gl/PConfigure
  (configure [_ {:keys [format width height]}]
    (gl/bind _)
    (.renderbufferStorage gl gl/renderbuffer format width height)
    (gl/unbind _)
    (RenderBuffer. gl id format width height)))

(defn make-render-buffer
  [^WebGLRenderingContext gl & [opts]]
  (let [buf (RenderBuffer. gl (.createRenderbuffer gl) nil nil nil)]
    (if opts (gl/configure buf opts) buf)))

(defn make-depth-buffer
  [^WebGLRenderingContext gl width height]
  (make-render-buffer gl {:format gl/depth-component16 :width width :height height}))

(defrecord Texture2D [^WebGLRenderingContext gl id channels type target width height]
  gl/PBind
  (bind
    [_ unit]
    (.activeTexture gl (+ gl/texture0 unit))
    (.bindTexture gl target id)
    _)
  (unbind
    [_ unit]
    (.activeTexture gl (+ gl/texture0 unit))
    (.bindTexture gl target -1)
    _)

  gl/PRelease
  (release [_] (.deleteTexture gl id) _)

  gl/PConfigure
  (configure
    [_ {:keys [width height filter wrap]}]
    (.texImage2D gl target 0 channels width height 0 channels type nil)
    (when filter (gl/set-texture-filter _ filter))
    (when wrap (gl/set-texture-wrap _ wrap))
    (Texture2D. gl id channels type target width height))

  gl/PTexture
  (set-texture-filter
    [_ type]
    (.texParameteri gl target gl/texture-min-filter type)
    (.texParameteri gl target gl/texture-mag-filter type)
    _)
  (set-texture-wrap
    [_ type]
    (.texParameteri gl target gl/texture-wrap-s type)
    (.texParameteri gl target gl/texture-wrap-t type)
    _))

(defn make-texture2d
  [gl {:keys [channels type target width height] :as opts}]
  (let [tex (Texture2D.
             gl (.createTexture gl)
             (or channels gl/rgb)
             (or type gl/unsigned-byte)
             (or target gl/texture-2d)
             nil nil)]
    (if (and width height)
      (do (gl/bind tex 0) (gl/configure tex opts))
      tex)))
