// Compiled by ClojureScript 0.0-2202
goog.provide('thi.ng.geom.webgl.arrays');
goog.require('cljs.core');
/**
* Creates a native Int8Array of the given size or from `coll`.
*/
thi.ng.geom.webgl.arrays.int8 = (function int8(size_or_coll){return (new Int8Array(((typeof size_or_coll === 'number')?size_or_coll:cljs.core.clj__GT_js.call(null,size_or_coll))));
});
/**
* Creates a native Uint8Array of the given size or from `coll`.
*/
thi.ng.geom.webgl.arrays.uint8 = (function uint8(size_or_coll){return (new Uint8Array(((typeof size_or_coll === 'number')?size_or_coll:cljs.core.clj__GT_js.call(null,size_or_coll))));
});
/**
* Creates a native Uint8ClampedArray of the given size or from `coll`.
*/
thi.ng.geom.webgl.arrays.uint8_clamped = (function uint8_clamped(size_or_coll){return (new Uint8ClampedArray(((typeof size_or_coll === 'number')?size_or_coll:cljs.core.clj__GT_js.call(null,size_or_coll))));
});
/**
* Creates a native Int16Array of the given size or from `coll`.
*/
thi.ng.geom.webgl.arrays.int16 = (function int16(size_or_coll){return (new Int16Array(((typeof size_or_coll === 'number')?size_or_coll:cljs.core.clj__GT_js.call(null,size_or_coll))));
});
/**
* Creates a native Uint16Array of the given size or from `coll`.
*/
thi.ng.geom.webgl.arrays.uint16 = (function uint16(size_or_coll){return (new Uint16Array(((typeof size_or_coll === 'number')?size_or_coll:cljs.core.clj__GT_js.call(null,size_or_coll))));
});
/**
* Creates a native Int32Array of the given size or from `coll`.
*/
thi.ng.geom.webgl.arrays.int32 = (function int32(size_or_coll){return (new Int32Array(((typeof size_or_coll === 'number')?size_or_coll:cljs.core.clj__GT_js.call(null,size_or_coll))));
});
/**
* Creates a native Uint32Array of the given size or from `coll`.
*/
thi.ng.geom.webgl.arrays.uint32 = (function uint32(size_or_coll){return (new Uint32Array(((typeof size_or_coll === 'number')?size_or_coll:cljs.core.clj__GT_js.call(null,size_or_coll))));
});
/**
* Creates a native Float32Array of the given size or from `coll`.
*/
thi.ng.geom.webgl.arrays.float32 = (function float32(size_or_coll){return (new Float32Array(((typeof size_or_coll === 'number')?size_or_coll:cljs.core.clj__GT_js.call(null,size_or_coll))));
});
/**
* Creates a native Float64Array of the given size or from `coll`.
*/
thi.ng.geom.webgl.arrays.float64 = (function float64(size_or_coll){return (new Float64Array(((typeof size_or_coll === 'number')?size_or_coll:cljs.core.clj__GT_js.call(null,size_or_coll))));
});
thi.ng.geom.webgl.arrays.typed_array_QMARK_ = (function typed_array_QMARK_(x){var t = cljs.core.type.call(null,x);return (cljs.core._EQ_.call(null,t,Int8Array)) || (cljs.core._EQ_.call(null,t,Uint8Array)) || (cljs.core._EQ_.call(null,t,Uint8ClampedArray)) || (cljs.core._EQ_.call(null,t,Int16Array)) || (cljs.core._EQ_.call(null,t,Uint16Array)) || (cljs.core._EQ_.call(null,t,Int32Array)) || (cljs.core._EQ_.call(null,t,Uint32Array)) || (cljs.core._EQ_.call(null,t,Float32Array)) || (cljs.core._EQ_.call(null,t,Float64Array));
});
