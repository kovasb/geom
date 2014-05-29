// Compiled by ClojureScript 0.0-2202
goog.provide('thi.ng.geom.core.quaternion');
goog.require('cljs.core');
goog.require('thi.ng.common.math.core');
goog.require('thi.ng.geom.core.vector');
goog.require('thi.ng.geom.core.matrix');
goog.require('thi.ng.geom.core');
goog.require('thi.ng.geom.core.vector');
goog.require('thi.ng.geom.core.vector');
goog.require('thi.ng.common.math.core');
goog.require('thi.ng.common.error');
goog.require('thi.ng.geom.core');
goog.require('thi.ng.common.math.core');
goog.require('thi.ng.geom.core.matrix');
goog.require('thi.ng.common.error');

/**
* @constructor
*/
thi.ng.geom.core.quaternion.Quat4 = (function (x,y,z,w){
this.x = x;
this.y = y;
this.z = z;
this.w = w;
this.cljs$lang$protocol_mask$partition0$ = 165700571;
this.cljs$lang$protocol_mask$partition1$ = 10240;
})
thi.ng.geom.core.quaternion.Quat4.cljs$lang$type = true;
thi.ng.geom.core.quaternion.Quat4.cljs$lang$ctorStr = "thi.ng.geom.core.quaternion/Quat4";
thi.ng.geom.core.quaternion.Quat4.cljs$lang$ctorPrWriter = (function (this__5520__auto__,writer__5521__auto__,opt__5522__auto__){return cljs.core._write.call(null,writer__5521__auto__,"thi.ng.geom.core.quaternion/Quat4");
});
thi.ng.geom.core.quaternion.Quat4.prototype.thi$ng$geom$core$PVectorTransform$ = true;
thi.ng.geom.core.quaternion.Quat4.prototype.thi$ng$geom$core$PVectorTransform$transform_vector$arity$2 = (function (_,p__11202){var self__ = this;
var vec__11203 = p__11202;var vx = cljs.core.nth.call(null,vec__11203,0,null);var vy = cljs.core.nth.call(null,vec__11203,1,null);var vz = cljs.core.nth.call(null,vec__11203,2,null);var v = vec__11203;var ___$1 = this;var ix = (((self__.w * vx) + (self__.y * vz)) - (self__.z * vy));var iy = (((self__.w * vy) + (self__.z * vx)) - (self__.x * vz));var iz = (((self__.w * vz) + (self__.x * vy)) - (self__.y * vx));var nx = (- self__.x);var ny = (- self__.y);var nz = (- self__.z);var iw = (((nx * vx) - (self__.y * vy)) - (self__.z * vz));return (new thi.ng.geom.core.vector.Vec3(((((ix * self__.w) + (iw * nx)) + (iy * nz)) - (iz * ny)),((((iy * self__.w) + (iw * ny)) + (iz * nx)) - (ix * nz)),((((iz * self__.w) + (iw * nz)) + (ix * ny)) - (iy * nx))));
});
thi.ng.geom.core.quaternion.Quat4.prototype.toString = (function (){var self__ = this;
var _ = this;return [cljs.core.str("["),cljs.core.str(self__.x),cljs.core.str(" "),cljs.core.str(self__.y),cljs.core.str(" "),cljs.core.str(self__.z),cljs.core.str(" "),cljs.core.str(self__.w),cljs.core.str("]")].join('');
});
thi.ng.geom.core.quaternion.Quat4.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (_,k){var self__ = this;
var ___$1 = this;return thi.ng.geom.core.quaternion.swizzle4.call(null,___$1,k,null);
});
thi.ng.geom.core.quaternion.Quat4.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,k,nf){var self__ = this;
var ___$1 = this;return thi.ng.geom.core.quaternion.swizzle4.call(null,___$1,k,nf);
});
thi.ng.geom.core.quaternion.Quat4.prototype.thi$ng$geom$core$PDotProduct$ = true;
thi.ng.geom.core.quaternion.Quat4.prototype.thi$ng$geom$core$PDotProduct$dot$arity$2 = (function (_,q){var self__ = this;
var ___$1 = this;var q__$1 = q;return ((((self__.x * q__$1.x) + (self__.y * q__$1.y)) + (self__.z * q__$1.z)) + (self__.w * q__$1.w));
});
thi.ng.geom.core.quaternion.Quat4.prototype.thi$ng$geom$core$PNormalize$ = true;
thi.ng.geom.core.quaternion.Quat4.prototype.thi$ng$geom$core$PNormalize$normalize$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var m = Math.sqrt.call(null,((((self__.x * self__.x) + (self__.y * self__.y)) + (self__.z * self__.z)) + (self__.w * self__.w)));if((m > thi.ng.common.math.core._STAR_eps_STAR_))
{return (new thi.ng.geom.core.quaternion.Quat4((self__.x / m),(self__.y / m),(self__.z / m),(self__.w / m)));
} else
{return ___$1;
}
});
thi.ng.geom.core.quaternion.Quat4.prototype.thi$ng$geom$core$PRotate3D$ = true;
thi.ng.geom.core.quaternion.Quat4.prototype.thi$ng$geom$core$PRotate3D$rotate_x$arity$2 = (function (_,theta){var self__ = this;
var ___$1 = this;var t = (theta / 2.0);var s = Math.sin.call(null,t);var c = Math.cos.call(null,t);return (new thi.ng.geom.core.quaternion.Quat4(((self__.x * c) + (self__.w * s)),((self__.y * c) + (self__.z * s)),((self__.z * c) - (self__.y * s)),((self__.w * c) - (self__.x * s))));
});
thi.ng.geom.core.quaternion.Quat4.prototype.thi$ng$geom$core$PRotate3D$rotate_y$arity$2 = (function (_,theta){var self__ = this;
var ___$1 = this;var t = (theta / 2.0);var s = Math.sin.call(null,t);var c = Math.cos.call(null,t);return (new thi.ng.geom.core.quaternion.Quat4(((self__.x * c) - (self__.z * s)),((self__.y * c) + (self__.w * s)),((self__.z * c) + (self__.x * s)),((self__.w * c) - (self__.y * s))));
});
thi.ng.geom.core.quaternion.Quat4.prototype.thi$ng$geom$core$PRotate3D$rotate_z$arity$2 = (function (_,theta){var self__ = this;
var ___$1 = this;var t = (theta / 2.0);var s = Math.sin.call(null,t);var c = Math.cos.call(null,t);return (new thi.ng.geom.core.quaternion.Quat4(((self__.x * c) + (self__.y * s)),((self__.y * c) - (self__.x * s)),((self__.z * c) + (self__.w * s)),((self__.w * c) - (self__.z * s))));
});
thi.ng.geom.core.quaternion.Quat4.prototype.thi$ng$geom$core$PConjugate$ = true;
thi.ng.geom.core.quaternion.Quat4.prototype.thi$ng$geom$core$PConjugate$conjugate$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new thi.ng.geom.core.quaternion.Quat4((- self__.x),(- self__.y),(- self__.z),self__.w));
});
thi.ng.geom.core.quaternion.Quat4.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (_,k){var self__ = this;
var ___$1 = this;var G__11204 = (k | 0);if(cljs.core._EQ_.call(null,3,G__11204))
{return self__.w;
} else
{if(cljs.core._EQ_.call(null,2,G__11204))
{return self__.z;
} else
{if(cljs.core._EQ_.call(null,1,G__11204))
{return self__.y;
} else
{if(cljs.core._EQ_.call(null,0,G__11204))
{return self__.x;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return thi.ng.common.error.key_error_BANG_.call(null,k);
} else
{return null;
}
}
}
}
}
});
thi.ng.geom.core.quaternion.Quat4.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (_,k,nf){var self__ = this;
var ___$1 = this;var G__11205 = (k | 0);if(cljs.core._EQ_.call(null,3,G__11205))
{return self__.w;
} else
{if(cljs.core._EQ_.call(null,2,G__11205))
{return self__.z;
} else
{if(cljs.core._EQ_.call(null,1,G__11205))
{return self__.y;
} else
{if(cljs.core._EQ_.call(null,0,G__11205))
{return self__.x;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return nf;
} else
{return null;
}
}
}
}
}
});
thi.ng.geom.core.quaternion.Quat4.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (_,k,v){var self__ = this;
var ___$1 = this;var G__11206 = (k | 0);if(cljs.core._EQ_.call(null,3,G__11206))
{return (new thi.ng.geom.core.quaternion.Quat4(self__.x,self__.y,self__.z,v));
} else
{if(cljs.core._EQ_.call(null,2,G__11206))
{return (new thi.ng.geom.core.quaternion.Quat4(self__.x,self__.y,v,self__.w));
} else
{if(cljs.core._EQ_.call(null,1,G__11206))
{return (new thi.ng.geom.core.quaternion.Quat4(self__.x,v,self__.z,self__.w));
} else
{if(cljs.core._EQ_.call(null,0,G__11206))
{return (new thi.ng.geom.core.quaternion.Quat4(v,self__.y,self__.z,self__.w));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return thi.ng.common.error.key_error_BANG_.call(null,k);
} else
{return null;
}
}
}
}
}
});
thi.ng.geom.core.quaternion.Quat4.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new thi.ng.geom.core.quaternion.Quat4(self__.x,self__.y,self__.z,self__.w));
});
thi.ng.geom.core.quaternion.Quat4.prototype.cljs$core$INext$_next$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.cons.call(null,self__.y,cljs.core.cons.call(null,self__.z,cljs.core.cons.call(null,self__.w,null)));
});
thi.ng.geom.core.quaternion.Quat4.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return 4;
});
thi.ng.geom.core.quaternion.Quat4.prototype.cljs$core$IStack$_peek$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.w;
});
thi.ng.geom.core.quaternion.Quat4.prototype.cljs$core$IStack$_pop$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new thi.ng.geom.core.vector.Vec3(self__.x,self__.y,self__.z));
});
thi.ng.geom.core.quaternion.Quat4.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new thi.ng.geom.core.quaternion.Quat4(self__.w,self__.z,self__.y,self__.x));
});
thi.ng.geom.core.quaternion.Quat4.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.hash_combine.call(null,cljs.core.hash_combine.call(null,cljs.core.hash.call(null,self__.x),cljs.core.hash.call(null,self__.y)),cljs.core.hash.call(null,self__.z));
});
thi.ng.geom.core.quaternion.Quat4.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,o){var self__ = this;
var ___$1 = this;if((o instanceof thi.ng.geom.core.quaternion.Quat4))
{return ((self__.x === o.x)) && ((self__.y === o.y)) && ((self__.z === o.z)) && ((self__.w === o.w));
} else
{return (cljs.core.sequential_QMARK_.call(null,o)) && (cljs.core._EQ_.call(null,4,cljs.core.count.call(null,o))) && (cljs.core._EQ_.call(null,self__.x,cljs.core.nth.call(null,o,0))) && (cljs.core._EQ_.call(null,self__.y,cljs.core.nth.call(null,o,1))) && (cljs.core._EQ_.call(null,self__.z,cljs.core.nth.call(null,o,2))) && (cljs.core._EQ_.call(null,self__.w,cljs.core.nth.call(null,o,3)));
}
});
thi.ng.geom.core.quaternion.Quat4.prototype.thi$ng$geom$core$PInvert$ = true;
thi.ng.geom.core.quaternion.Quat4.prototype.thi$ng$geom$core$PInvert$invert$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var d = thi.ng.geom.core.mag_squared.call(null,___$1);var d__$1 = (((d === 0))?0.0:(1 / d));var id = (- d__$1);return (new thi.ng.geom.core.quaternion.Quat4((self__.x * id),(self__.y * id),(self__.z * id),(self__.w * d__$1)));
});
thi.ng.geom.core.quaternion.Quat4.prototype.thi$ng$geom$core$PMathOps$ = true;
thi.ng.geom.core.quaternion.Quat4.prototype.thi$ng$geom$core$PMathOps$_PLUS_$arity$2 = (function (_,q){var self__ = this;
var ___$1 = this;var q__$1 = q;return (new thi.ng.geom.core.quaternion.Quat4((self__.x + q__$1.x),(self__.y + q__$1.y),(self__.z + q__$1.z),(self__.w + q__$1.w)));
});
thi.ng.geom.core.quaternion.Quat4.prototype.thi$ng$geom$core$PMathOps$_$arity$2 = (function (_,q){var self__ = this;
var ___$1 = this;var q__$1 = q;return (new thi.ng.geom.core.quaternion.Quat4((self__.x - q__$1.x),(self__.y - q__$1.y),(self__.z - q__$1.z),(self__.w - q__$1.w)));
});
thi.ng.geom.core.quaternion.Quat4.prototype.thi$ng$geom$core$PMathOps$_STAR_$arity$2 = (function (_,q){var self__ = this;
var ___$1 = this;var q__$1 = q;var qx = q__$1.x;var qy = q__$1.y;var qz = q__$1.z;var qw = q__$1.w;return (new thi.ng.geom.core.quaternion.Quat4(((((self__.x * qw) + (self__.w * qx)) + (self__.y * qz)) - (self__.z * qy)),((((self__.y * qw) + (self__.w * qy)) + (self__.z * qx)) - (self__.x * qz)),((((self__.z * qw) + (self__.w * qz)) + (self__.x * qy)) - (self__.y * qx)),((((self__.w * qw) - (self__.x * qx)) - (self__.y * qy)) - (self__.z * qz))));
});
thi.ng.geom.core.quaternion.Quat4.prototype.thi$ng$geom$core$PMathOps$_STAR_$arity$3 = (function (_,q,r){var self__ = this;
var ___$1 = this;var q__$1 = q;var r__$1 = r;var qx = q__$1.x;var qy = q__$1.y;var qz = q__$1.z;var qw = q__$1.w;var rx = r__$1.x;var ry = r__$1.y;var rz = r__$1.z;var rw = r__$1.w;var x_SINGLEQUOTE_ = ((((self__.x * qw) + (self__.w * qx)) + (self__.y * qz)) - (self__.z * qy));var y_SINGLEQUOTE_ = ((((self__.y * qw) + (self__.w * qy)) + (self__.z * qx)) - (self__.x * qz));var z_SINGLEQUOTE_ = ((((self__.z * qw) + (self__.w * qz)) + (self__.x * qy)) - (self__.y * qx));var w_SINGLEQUOTE_ = ((((self__.w * qw) - (self__.x * qx)) - (self__.y * qy)) - (self__.z * qz));return (new thi.ng.geom.core.quaternion.Quat4(((((x_SINGLEQUOTE_ * rw) + (w_SINGLEQUOTE_ * rx)) + (y_SINGLEQUOTE_ * rz)) - (z_SINGLEQUOTE_ * ry)),((((y_SINGLEQUOTE_ * rw) + (w_SINGLEQUOTE_ * ry)) + (z_SINGLEQUOTE_ * rx)) - (x_SINGLEQUOTE_ * rz)),((((z_SINGLEQUOTE_ * rw) + (w_SINGLEQUOTE_ * rz)) + (x_SINGLEQUOTE_ * ry)) - (y_SINGLEQUOTE_ * rx)),((((w_SINGLEQUOTE_ * rw) - (x_SINGLEQUOTE_ * rx)) - (y_SINGLEQUOTE_ * ry)) - (z_SINGLEQUOTE_ * rz))));
});
thi.ng.geom.core.quaternion.Quat4.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.x;
});
thi.ng.geom.core.quaternion.Quat4.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.cons.call(null,self__.y,cljs.core.cons.call(null,self__.z,cljs.core.cons.call(null,self__.w,null)));
});
thi.ng.geom.core.quaternion.Quat4.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){var self__ = this;
var ___$1 = this;return !((new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [0,null,new cljs.core.Keyword(null,"y","y",1013904363),null,1,null,new cljs.core.Keyword(null,"w","w",1013904361),null,new cljs.core.Keyword(null,"z","z",1013904364),null,3,null,2,null,new cljs.core.Keyword(null,"x","x",1013904362),null], null), null).call(null,k) == null));
});
thi.ng.geom.core.quaternion.Quat4.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (_,k,v){var self__ = this;
var ___$1 = this;return thi.ng.geom.core.quaternion.swizzle4_assoc.call(null,___$1,k,v);
});
thi.ng.geom.core.quaternion.Quat4.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return ___$1;
});
thi.ng.geom.core.quaternion.Quat4.prototype.thi$ng$geom$core$PScale$ = true;
thi.ng.geom.core.quaternion.Quat4.prototype.thi$ng$geom$core$PScale$scale$arity$2 = (function (_,s){var self__ = this;
var ___$1 = this;return (new thi.ng.geom.core.quaternion.Quat4((self__.x * s),(self__.y * s),(self__.z * s),(self__.w * s)));
});
thi.ng.geom.core.quaternion.Quat4.prototype.thi$ng$geom$core$PMatrixConvert$ = true;
thi.ng.geom.core.quaternion.Quat4.prototype.thi$ng$geom$core$PMatrixConvert$as_matrix$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return thi.ng.geom.core.as_matrix.call(null,___$1,null);
});
thi.ng.geom.core.quaternion.Quat4.prototype.thi$ng$geom$core$PMatrixConvert$as_matrix$arity$2 = (function (_,opts){var self__ = this;
var ___$1 = this;var vec__11208 = new cljs.core.Keyword(null,"translate","translate",2066736320).cljs$core$IFn$_invoke$arity$1(opts);var tx = cljs.core.nth.call(null,vec__11208,0,null);var ty = cljs.core.nth.call(null,vec__11208,1,null);var tz = cljs.core.nth.call(null,vec__11208,2,null);var x2 = (self__.x + self__.x);var y2 = (self__.y + self__.y);var z2 = (self__.z + self__.z);var xx = (self__.x * x2);var xy = (self__.x * y2);var xz = (self__.x * z2);var yy = (self__.y * y2);var yz = (self__.y * z2);var zz = (self__.z * z2);var wx = (self__.w * x2);var wy = (self__.w * y2);var wz = (self__.w * z2);return (new thi.ng.geom.core.matrix.Matrix44((1.0 - (yy + zz)),(xy + wz),(xz - wy),0.0,(xy - wz),(1.0 - (xx + zz)),(yz + wx),0.0,(xz + wy),(yz - wx),(1.0 - (xx + yy)),0.0,(function (){var or__4953__auto__ = tx;if(cljs.core.truth_(or__4953__auto__))
{return or__4953__auto__;
} else
{return 0.0;
}
})(),(function (){var or__4953__auto__ = ty;if(cljs.core.truth_(or__4953__auto__))
{return or__4953__auto__;
} else
{return 0.0;
}
})(),(function (){var or__4953__auto__ = tz;if(cljs.core.truth_(or__4953__auto__))
{return or__4953__auto__;
} else
{return 0.0;
}
})(),1.0));
});
thi.ng.geom.core.quaternion.Quat4.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,v){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.x,self__.y,self__.z,self__.w,v], null);
});
thi.ng.geom.core.quaternion.Quat4.prototype.call = (function() {
var G__11209 = null;
var G__11209__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var _ = self____$1;return thi.ng.geom.core.quaternion.swizzle4.call(null,_,k,null);
});
var G__11209__3 = (function (self__,k,nf){var self__ = this;
var self____$1 = this;var _ = self____$1;return thi.ng.geom.core.quaternion.swizzle4.call(null,_,k,nf);
});
G__11209 = function(self__,k,nf){
switch(arguments.length){
case 2:
return G__11209__2.call(this,self__,k);
case 3:
return G__11209__3.call(this,self__,k,nf);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__11209;
})()
;
thi.ng.geom.core.quaternion.Quat4.prototype.apply = (function (self__,args11201){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args11201)));
});
thi.ng.geom.core.quaternion.Quat4.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var _ = this;return thi.ng.geom.core.quaternion.swizzle4.call(null,_,k,null);
});
thi.ng.geom.core.quaternion.Quat4.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,nf){var self__ = this;
var _ = this;return thi.ng.geom.core.quaternion.swizzle4.call(null,_,k,nf);
});
thi.ng.geom.core.quaternion.Quat4.prototype.cljs$core$IComparable$_compare$arity$2 = (function (_,o){var self__ = this;
var ___$1 = this;if((o instanceof thi.ng.geom.core.quaternion.Quat4))
{var c = cljs.core.compare.call(null,self__.x,o.x);if((0 === c))
{var c__$1 = cljs.core.compare.call(null,self__.y,o.y);if((0 === c__$1))
{var c__$2 = cljs.core.compare.call(null,self__.z,o.z);if((0 === c__$2))
{return cljs.core.compare.call(null,self__.w,o.w);
} else
{return c__$2;
}
} else
{return c__$1;
}
} else
{return c;
}
} else
{var c = cljs.core.count.call(null,o);if(cljs.core._EQ_.call(null,4,c))
{return cljs.core.compare.call(null,o,___$1);
} else
{return (4 - c);
}
}
});
thi.ng.geom.core.quaternion.Quat4.prototype.thi$ng$geom$core$PMagnitude$ = true;
thi.ng.geom.core.quaternion.Quat4.prototype.thi$ng$geom$core$PMagnitude$mag$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return Math.sqrt.call(null,((((self__.x * self__.x) + (self__.y * self__.y)) + (self__.z * self__.z)) + (self__.w * self__.w)));
});
thi.ng.geom.core.quaternion.Quat4.prototype.thi$ng$geom$core$PMagnitude$mag_squared$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return ((((self__.x * self__.x) + (self__.y * self__.y)) + (self__.z * self__.z)) + (self__.w * self__.w));
});
thi.ng.geom.core.quaternion.Quat4.prototype.thi$ng$geom$core$PInterpolate$ = true;
thi.ng.geom.core.quaternion.Quat4.prototype.thi$ng$geom$core$PInterpolate$mix$arity$2 = (function (_,q){var self__ = this;
var ___$1 = this;return thi.ng.geom.core.mix.call(null,___$1,q,0.5);
});
thi.ng.geom.core.quaternion.Quat4.prototype.thi$ng$geom$core$PInterpolate$mix$arity$3 = (function (_,q,t){var self__ = this;
var ___$1 = this;var d = thi.ng.geom.core.dot.call(null,___$1,q);if((thi.ng.common.math.core.abs.call(null,d) < 1.0))
{var theta = Math.acos.call(null,d);var stheta = Math.sqrt.call(null,((d * d) + -1.0));var vec__11207 = (((thi.ng.common.math.core.abs.call(null,stheta) < 0.001))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.5,0.5], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(Math.sin.call(null,((1.0 - t) * theta)) / stheta),(Math.sin.call(null,(t * theta)) / stheta)], null));var a = cljs.core.nth.call(null,vec__11207,0,null);var b = cljs.core.nth.call(null,vec__11207,1,null);var q__$1 = q;return (new thi.ng.geom.core.quaternion.Quat4(((self__.x * a) + (q__$1.x * b)),((self__.y * a) + (q__$1.y * b)),((self__.z * a) + (q__$1.z * b)),((self__.w * a) + (q__$1.w * b))));
} else
{return ___$1;
}
});
thi.ng.geom.core.quaternion.__GT_Quat4 = (function __GT_Quat4(x,y,z,w){return (new thi.ng.geom.core.quaternion.Quat4(x,y,z,w));
});
thi.ng.geom.core.quaternion.quat = (function() {
var quat = null;
var quat__0 = (function (){return (new thi.ng.geom.core.quaternion.Quat4(0.0,0.0,0.0,1.0));
});
var quat__1 = (function (p__11211){var vec__11215 = p__11211;var x = cljs.core.nth.call(null,vec__11215,0,null);var y = cljs.core.nth.call(null,vec__11215,1,null);var z = cljs.core.nth.call(null,vec__11215,2,null);var w = cljs.core.nth.call(null,vec__11215,3,null);return (new thi.ng.geom.core.quaternion.Quat4(x,y,z,w));
});
var quat__2 = (function (p__11210,w){var vec__11214 = p__11210;var x = cljs.core.nth.call(null,vec__11214,0,null);var y = cljs.core.nth.call(null,vec__11214,1,null);var z = cljs.core.nth.call(null,vec__11214,2,null);return (new thi.ng.geom.core.quaternion.Quat4(x,y,z,w));
});
var quat__4 = (function (x,y,z,w){return (new thi.ng.geom.core.quaternion.Quat4(x,y,z,w));
});
quat = function(x,y,z,w){
switch(arguments.length){
case 0:
return quat__0.call(this);
case 1:
return quat__1.call(this,x);
case 2:
return quat__2.call(this,x,y);
case 4:
return quat__4.call(this,x,y,z,w);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
quat.cljs$core$IFn$_invoke$arity$0 = quat__0;
quat.cljs$core$IFn$_invoke$arity$1 = quat__1;
quat.cljs$core$IFn$_invoke$arity$2 = quat__2;
quat.cljs$core$IFn$_invoke$arity$4 = quat__4;
return quat;
})()
;
thi.ng.geom.core.quaternion.quat_from_axis_angle = (function quat_from_axis_angle(axis,theta){var theta__$1 = (theta / 2.0);return thi.ng.geom.core.quaternion.quat.call(null,thi.ng.geom.core.normalize.call(null,thi.ng.geom.core.vector.vec3.call(null,axis),Math.sin.call(null,theta__$1)),Math.cos.call(null,theta__$1));
});
/**
* @param {...*} var_args
*/
thi.ng.geom.core.quaternion.quat_from_euler = (function() { 
var quat_from_euler__delegate = function (order,p__11216){var vec__11220 = p__11216;var alpha = cljs.core.nth.call(null,vec__11220,0,null);var beta = cljs.core.nth.call(null,vec__11220,1,null);var gamma = cljs.core.nth.call(null,vec__11220,2,null);var vec__11221 = (function (){var G__11222 = order;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"zyx","zyx",1014025355),G__11222))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.vector.V3Z,thi.ng.geom.core.vector.V3Y,thi.ng.geom.core.vector.V3X], null);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"yzx","yzx",1014024425),G__11222))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.vector.V3Y,thi.ng.geom.core.vector.V3Z,thi.ng.geom.core.vector.V3X], null);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"zxy","zxy",1014025325),G__11222))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.vector.V3Z,thi.ng.geom.core.vector.V3X,thi.ng.geom.core.vector.V3Y], null);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"xzy","xzy",1014023465),G__11222))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.vector.V3X,thi.ng.geom.core.vector.V3Z,thi.ng.geom.core.vector.V3Y], null);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"yxz","yxz",1014024365),G__11222))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.vector.V3Y,thi.ng.geom.core.vector.V3X,thi.ng.geom.core.vector.V3Z], null);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"xyz","xyz",1014023435),G__11222))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.vector.V3X,thi.ng.geom.core.vector.V3Y,thi.ng.geom.core.vector.V3Z], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return thi.ng.common.error.illegal_arg_BANG_.call(null,order);
} else
{return null;
}
}
}
}
}
}
}
})();var a = cljs.core.nth.call(null,vec__11221,0,null);var b = cljs.core.nth.call(null,vec__11221,1,null);var c = cljs.core.nth.call(null,vec__11221,2,null);return thi.ng.geom.core._STAR_.call(null,thi.ng.geom.core.quaternion.quat_from_axis_angle.call(null,a,alpha),thi.ng.geom.core.quaternion.quat_from_axis_angle.call(null,b,beta),thi.ng.geom.core.quaternion.quat_from_axis_angle.call(null,c,gamma));
};
var quat_from_euler = function (order,var_args){
var p__11216 = null;if (arguments.length > 1) {
  p__11216 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return quat_from_euler__delegate.call(this,order,p__11216);};
quat_from_euler.cljs$lang$maxFixedArity = 1;
quat_from_euler.cljs$lang$applyTo = (function (arglist__11223){
var order = cljs.core.first(arglist__11223);
var p__11216 = cljs.core.rest(arglist__11223);
return quat_from_euler__delegate(order,p__11216);
});
quat_from_euler.cljs$core$IFn$_invoke$arity$variadic = quat_from_euler__delegate;
return quat_from_euler;
})()
;
thi.ng.geom.core.quaternion.quat_from_matrix = (function quat_from_matrix(m){var trace = ((m.m00 + m.m11) + m.m22);if((trace > 0))
{var s = (0.5 / Math.sqrt.call(null,(trace + 1)));return (new thi.ng.geom.core.quaternion.Quat4(((m.m12 - m.m21) * s),((m.m20 - m.m02) * s),((m.m01 - m.m10) * s),(0.25 / s)));
} else
{return thi.ng.geom.core.normalize.call(null,((((m.m00 > m.m11)) && ((m.m00 > m.m22)))?(function (){var s = (2.0 * Math.sqrt.call(null,(((m.m00 - m.m11) - m.m22) + 1)));var s_SINGLEQUOTE_ = (1 / s);return (new thi.ng.geom.core.quaternion.Quat4((0.25 * s),((m.m10 + m.m01) * s_SINGLEQUOTE_),((m.m20 + m.m02) * s_SINGLEQUOTE_),((m.m12 - m.m21) * s_SINGLEQUOTE_)));
})():(((m.m11 > m.m22))?(function (){var s = (2.0 * Math.sqrt.call(null,(((m.m11 - m.m00) - m.m22) + 1)));var s_SINGLEQUOTE_ = (1 / s);return (new thi.ng.geom.core.quaternion.Quat4(((m.m10 + m.m01) * s_SINGLEQUOTE_),(0.25 * s),((m.m21 + m.m12) * s_SINGLEQUOTE_),((m.m20 - m.m02) * s_SINGLEQUOTE_)));
})():(function (){var s = (2.0 * Math.sqrt.call(null,(((m.m22 - m.m00) - m.m11) + 1)));var s_SINGLEQUOTE_ = (1 / s);return (new thi.ng.geom.core.quaternion.Quat4(((m.m20 + m.m02) * s_SINGLEQUOTE_),((m.m21 + m.m12) * s_SINGLEQUOTE_),(0.25 * s),((m.m10 - m.m01) * s_SINGLEQUOTE_)));
})())));
}
});
thi.ng.geom.core.quaternion.alignment_quat = (function alignment_quat(a,b){var d = thi.ng.geom.core.dot.call(null,a,b);if((d < -0.999999))
{var c = thi.ng.geom.core.cross.call(null,thi.ng.geom.core.vector.V3X,a);var c__$1 = (((thi.ng.geom.core.mag.call(null,c) < 1.0E-6))?thi.ng.geom.core.cross.call(null,thi.ng.geom.core.vector.V3Y,a):c);return thi.ng.geom.core.quaternion.quat_from_axis_angle.call(null,c__$1,thi.ng.common.math.core.PI);
} else
{if((d > 0.999999))
{return thi.ng.geom.core.quaternion.quat.call(null);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return thi.ng.geom.core.normalize.call(null,thi.ng.geom.core.quaternion.quat.call(null,thi.ng.geom.core.cross.call(null,a,b),(d + 1)));
} else
{return null;
}
}
}
});
thi.ng.geom.core.quaternion.lookup4 = (function lookup4(_,k,nf){var G__11225 = k;if(cljs.core._EQ_.call(null,"w",G__11225))
{return _.w;
} else
{if(cljs.core._EQ_.call(null,"z",G__11225))
{return _.z;
} else
{if(cljs.core._EQ_.call(null,"y",G__11225))
{return _.y;
} else
{if(cljs.core._EQ_.call(null,"x",G__11225))
{return _.x;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var or__4953__auto__ = nf;if(cljs.core.truth_(or__4953__auto__))
{return or__4953__auto__;
} else
{return thi.ng.common.error.key_error_BANG_.call(null,k);
}
} else
{return null;
}
}
}
}
}
});
thi.ng.geom.core.quaternion.swizzle4 = (function swizzle4(_,k,default$){if(typeof k === 'number')
{var G__11229 = (k | 0);if(cljs.core._EQ_.call(null,3,G__11229))
{return _.w;
} else
{if(cljs.core._EQ_.call(null,2,G__11229))
{return _.z;
} else
{if(cljs.core._EQ_.call(null,1,G__11229))
{return _.y;
} else
{if(cljs.core._EQ_.call(null,0,G__11229))
{return _.x;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var or__4953__auto__ = default$;if(cljs.core.truth_(or__4953__auto__))
{return or__4953__auto__;
} else
{return thi.ng.common.error.key_error_BANG_.call(null,k);
}
} else
{return null;
}
}
}
}
}
} else
{var G__11230 = k;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"w","w",1013904361),G__11230))
{return _.w;
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"z","z",1013904364),G__11230))
{return _.z;
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"y","y",1013904363),G__11230))
{return _.y;
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"x","x",1013904362),G__11230))
{return _.x;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var n = cljs.core.name.call(null,k);var c = cljs.core.count.call(null,n);var G__11231 = c;if(cljs.core._EQ_.call(null,4,G__11231))
{return (new thi.ng.geom.core.quaternion.Quat4(thi.ng.geom.core.quaternion.lookup4.call(null,_,cljs.core.nth.call(null,n,0),default$),thi.ng.geom.core.quaternion.lookup4.call(null,_,cljs.core.nth.call(null,n,1),default$),thi.ng.geom.core.quaternion.lookup4.call(null,_,cljs.core.nth.call(null,n,2),default$),thi.ng.geom.core.quaternion.lookup4.call(null,_,cljs.core.nth.call(null,n,3),default$)));
} else
{if(cljs.core._EQ_.call(null,3,G__11231))
{return (new thi.ng.geom.core.vector.Vec3(thi.ng.geom.core.quaternion.lookup4.call(null,_,cljs.core.nth.call(null,n,0),default$),thi.ng.geom.core.quaternion.lookup4.call(null,_,cljs.core.nth.call(null,n,1),default$),thi.ng.geom.core.quaternion.lookup4.call(null,_,cljs.core.nth.call(null,n,2),default$)));
} else
{if(cljs.core._EQ_.call(null,2,G__11231))
{return (new thi.ng.geom.core.vector.Vec2(thi.ng.geom.core.quaternion.lookup4.call(null,_,cljs.core.nth.call(null,n,0),default$),thi.ng.geom.core.quaternion.lookup4.call(null,_,cljs.core.nth.call(null,n,1),default$)));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var or__4953__auto__ = default$;if(cljs.core.truth_(or__4953__auto__))
{return or__4953__auto__;
} else
{return thi.ng.common.error.key_error_BANG_.call(null,k);
}
} else
{return null;
}
}
}
}
} else
{return null;
}
}
}
}
}
}
});
thi.ng.geom.core.quaternion.swizzle4_assoc = (function swizzle4_assoc(_,k,v){if(typeof k === 'number')
{var G__11234 = (k | 0);if(cljs.core._EQ_.call(null,3,G__11234))
{return (new thi.ng.geom.core.quaternion.Quat4(_.x,_.y,_.z,v));
} else
{if(cljs.core._EQ_.call(null,2,G__11234))
{return (new thi.ng.geom.core.quaternion.Quat4(_.x,_.y,v,_.w));
} else
{if(cljs.core._EQ_.call(null,1,G__11234))
{return (new thi.ng.geom.core.quaternion.Quat4(_.x,v,_.z,_.w));
} else
{if(cljs.core._EQ_.call(null,0,G__11234))
{return (new thi.ng.geom.core.quaternion.Quat4(v,_.y,_.z,_.w));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return thi.ng.common.error.key_error_BANG_.call(null,k);
} else
{return null;
}
}
}
}
}
} else
{var G__11235 = k;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"w","w",1013904361),G__11235))
{return (new thi.ng.geom.core.quaternion.Quat4(_.x,_.y,_.z,v));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"z","z",1013904364),G__11235))
{return (new thi.ng.geom.core.quaternion.Quat4(_.x,_.y,v,_.w));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"y","y",1013904363),G__11235))
{return (new thi.ng.geom.core.quaternion.Quat4(_.x,v,_.z,_.w));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"x","x",1013904362),G__11235))
{return (new thi.ng.geom.core.quaternion.Quat4(v,_.y,_.z,_.w));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return thi.ng.geom.core.vector.swizzle_assoc_STAR_.call(null,_,thi.ng.geom.core.quaternion.quat,new cljs.core.PersistentArrayMap(null, 4, ["x",0,"y",1,"z",2,"w",3], null),k,v);
} else
{return null;
}
}
}
}
}
}
});
