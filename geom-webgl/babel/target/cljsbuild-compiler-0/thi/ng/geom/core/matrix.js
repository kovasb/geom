// Compiled by ClojureScript 0.0-2202
goog.provide('thi.ng.geom.core.matrix');
goog.require('cljs.core');
goog.require('thi.ng.geom.core.vector');
goog.require('thi.ng.common.math.core');
goog.require('thi.ng.geom.core.utils');
goog.require('thi.ng.geom.core');
goog.require('thi.ng.geom.core.utils');
goog.require('thi.ng.geom.core.vector');
goog.require('thi.ng.geom.core.vector');
goog.require('thi.ng.common.math.core');
goog.require('thi.ng.common.error');
goog.require('thi.ng.geom.core');
goog.require('thi.ng.common.math.core');
goog.require('thi.ng.common.error');
thi.ng.geom.core.matrix.hash_matrix = (function hash_matrix(coll){var res = cljs.core.hash.call(null,cljs.core.first.call(null,coll));var s = cljs.core.next.call(null,coll);while(true){
if((s == null))
{return res;
} else
{{
var G__8136 = cljs.core.hash_combine.call(null,res,cljs.core.hash.call(null,cljs.core.first.call(null,s)));
var G__8137 = cljs.core.next.call(null,s);
res = G__8136;
s = G__8137;
continue;
}
}
break;
}
});

/**
* @constructor
*/
thi.ng.geom.core.matrix.Matrix32 = (function (m00,m01,m02,m10,m11,m12){
this.m00 = m00;
this.m01 = m01;
this.m02 = m02;
this.m10 = m10;
this.m11 = m11;
this.m12 = m12;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31457498;
})
thi.ng.geom.core.matrix.Matrix32.cljs$lang$type = true;
thi.ng.geom.core.matrix.Matrix32.cljs$lang$ctorStr = "thi.ng.geom.core.matrix/Matrix32";
thi.ng.geom.core.matrix.Matrix32.cljs$lang$ctorPrWriter = (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write.call(null,writer__4049__auto__,"thi.ng.geom.core.matrix/Matrix32");
});
thi.ng.geom.core.matrix.Matrix32.prototype.thi$ng$geom$core$PVectorTransform$ = true;
thi.ng.geom.core.matrix.Matrix32.prototype.thi$ng$geom$core$PVectorTransform$transform_vector$arity$2 = (function (_,p__8139){var self__ = this;
var vec__8140 = p__8139;var x = cljs.core.nth.call(null,vec__8140,0,null);var y = cljs.core.nth.call(null,vec__8140,1,null);var v = vec__8140;var ___$1 = this;return (new thi.ng.geom.core.vector.Vec2((((x * self__.m00) + (y * self__.m01)) + self__.m02),(((x * self__.m10) + (y * self__.m11)) + self__.m12)));
});
thi.ng.geom.core.matrix.Matrix32.prototype.thi$ng$geom$core$PTransform$ = true;
thi.ng.geom.core.matrix.Matrix32.prototype.thi$ng$geom$core$PTransform$transform$arity$2 = (function (_,matrix){var self__ = this;
var ___$1 = this;return thi.ng.geom.core._STAR_.call(null,___$1,matrix);
});
thi.ng.geom.core.matrix.Matrix32.prototype.thi$ng$geom$core$PRotate$ = true;
thi.ng.geom.core.matrix.Matrix32.prototype.thi$ng$geom$core$PRotate$rotate$arity$2 = (function (_,theta){var self__ = this;
var ___$1 = this;var s = Math.sin.call(null,theta);var c = Math.cos.call(null,theta);return thi.ng.geom.core._STAR_.call(null,___$1,(new thi.ng.geom.core.matrix.Matrix32(c,(- s),0.0,s,c,0.0)));
});
thi.ng.geom.core.matrix.Matrix32.prototype.toString = (function (){var self__ = this;
var _ = this;return cljs.core.apply.call(null,cljs.core.str,cljs.core.concat.call(null,"[",cljs.core.interpose.call(null," ",_),"]"));
});
thi.ng.geom.core.matrix.Matrix32.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (_,k){var self__ = this;
var ___$1 = this;if(thi.ng.common.math.core.in_range_QMARK_.call(null,0,5,k))
{var G__8141 = (k | 0);if(cljs.core._EQ_.call(null,5,G__8141))
{return self__.m12;
} else
{if(cljs.core._EQ_.call(null,4,G__8141))
{return self__.m11;
} else
{if(cljs.core._EQ_.call(null,3,G__8141))
{return self__.m10;
} else
{if(cljs.core._EQ_.call(null,2,G__8141))
{return self__.m02;
} else
{if(cljs.core._EQ_.call(null,1,G__8141))
{return self__.m01;
} else
{if(cljs.core._EQ_.call(null,0,G__8141))
{return self__.m00;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str((k | 0))].join('')));
} else
{return null;
}
}
}
}
}
}
}
} else
{return thi.ng.common.error.illegal_arg_BANG_.call(null,k);
}
});
thi.ng.geom.core.matrix.Matrix32.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (_,k,nf){var self__ = this;
var ___$1 = this;if(thi.ng.common.math.core.in_range_QMARK_.call(null,0,15,k))
{var G__8142 = (k | 0);if(cljs.core._EQ_.call(null,5,G__8142))
{return self__.m12;
} else
{if(cljs.core._EQ_.call(null,4,G__8142))
{return self__.m11;
} else
{if(cljs.core._EQ_.call(null,3,G__8142))
{return self__.m10;
} else
{if(cljs.core._EQ_.call(null,2,G__8142))
{return self__.m02;
} else
{if(cljs.core._EQ_.call(null,1,G__8142))
{return self__.m01;
} else
{if(cljs.core._EQ_.call(null,0,G__8142))
{return self__.m00;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str((k | 0))].join('')));
} else
{return null;
}
}
}
}
}
}
}
} else
{return nf;
}
});
thi.ng.geom.core.matrix.Matrix32.prototype.cljs$core$INext$_next$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.m01,self__.m02,self__.m10,self__.m11,self__.m12], null));
});
thi.ng.geom.core.matrix.Matrix32.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return 6;
});
thi.ng.geom.core.matrix.Matrix32.prototype.thi$ng$geom$core$PDeterminant$ = true;
thi.ng.geom.core.matrix.Matrix32.prototype.thi$ng$geom$core$PDeterminant$determinant$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return ((self__.m00 * self__.m11) - (self__.m01 * self__.m10));
});
thi.ng.geom.core.matrix.Matrix32.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return thi.ng.geom.core.matrix.hash_matrix.call(null,___$1);
});
thi.ng.geom.core.matrix.Matrix32.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,o){var self__ = this;
var ___$1 = this;if((cljs.core.sequential_QMARK_.call(null,o)) && (cljs.core._EQ_.call(null,6,cljs.core.count.call(null,o))))
{return cljs.core.every_QMARK_.call(null,((function (___$1){
return (function (p1__8138_SHARP_){return cljs.core._EQ_.call(null,p1__8138_SHARP_.call(null,0),p1__8138_SHARP_.call(null,1));
});})(___$1))
,cljs.core.map.call(null,cljs.core.vector,___$1,o));
} else
{return false;
}
});
thi.ng.geom.core.matrix.Matrix32.prototype.thi$ng$geom$core$PInvert$ = true;
thi.ng.geom.core.matrix.Matrix32.prototype.thi$ng$geom$core$PInvert$invert$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var d = thi.ng.geom.core.determinant.call(null,___$1);if((d === 0))
{return null;
} else
{return (new thi.ng.geom.core.matrix.Matrix32((self__.m11 / d),(- (self__.m01 / d)),(((self__.m01 * self__.m12) - (self__.m11 * self__.m02)) / d),(- (self__.m10 / d)),(self__.m00 / d),(((self__.m10 * self__.m02) - (self__.m00 * self__.m12)) / d)));
}
});
thi.ng.geom.core.matrix.Matrix32.prototype.thi$ng$geom$core$PMathOps$ = true;
thi.ng.geom.core.matrix.Matrix32.prototype.thi$ng$geom$core$PMathOps$_STAR_$arity$2 = (function (_,m){var self__ = this;
var ___$1 = this;var m__$1 = m;return (new thi.ng.geom.core.matrix.Matrix32(((self__.m00 * m__$1.m00) + (self__.m01 * m__$1.m10)),((self__.m00 * m__$1.m01) + (self__.m01 * m__$1.m11)),(((self__.m00 * m__$1.m02) + (self__.m01 * m__$1.m12)) + self__.m02),((self__.m10 * m__$1.m00) + (self__.m11 * m__$1.m10)),((self__.m10 * m__$1.m01) + (self__.m11 * m__$1.m11)),(((self__.m10 * m__$1.m02) + (self__.m11 * m__$1.m12)) + self__.m12)));
});
thi.ng.geom.core.matrix.Matrix32.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.next.call(null,___$1);
});
thi.ng.geom.core.matrix.Matrix32.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.m00;
});
thi.ng.geom.core.matrix.Matrix32.prototype.thi$ng$geom$core$PTranslate$ = true;
thi.ng.geom.core.matrix.Matrix32.prototype.thi$ng$geom$core$PTranslate$translate$arity$2 = (function (_,t){var self__ = this;
var ___$1 = this;return thi.ng.geom.core._STAR_.call(null,___$1,(new thi.ng.geom.core.matrix.Matrix32(1.0,0.0,((typeof t === 'number')?t:t.call(null,0)),0.0,1.0,((typeof t === 'number')?t:t.call(null,1)))));
});
thi.ng.geom.core.matrix.Matrix32.prototype.thi$ng$geom$core$PTranslate$translate$arity$3 = (function (_,tx,ty){var self__ = this;
var ___$1 = this;if(typeof tx === 'number')
{if(typeof ty === 'number')
{return thi.ng.geom.core._STAR_.call(null,___$1,(new thi.ng.geom.core.matrix.Matrix32(1.0,0.0,tx,0.0,1.0,ty)));
} else
{return thi.ng.geom.core._STAR_.call(null,___$1,(new thi.ng.geom.core.matrix.Matrix32(1.0,0.0,(tx * ty.call(null,0)),0.0,1.0,(tx * ty.call(null,1)))));
}
} else
{if(typeof ty === 'number')
{return thi.ng.geom.core._STAR_.call(null,___$1,(new thi.ng.geom.core.matrix.Matrix32(1.0,0.0,(ty * tx.call(null,0)),0.0,1.0,(ty * tx.call(null,1)))));
} else
{return thi.ng.geom.core._STAR_.call(null,___$1,(new thi.ng.geom.core.matrix.Matrix32(1.0,0.0,(tx.call(null,0) * ty.call(null,0)),0.0,1.0,(tx.call(null,1) * ty.call(null,1)))));
}
}
});
thi.ng.geom.core.matrix.Matrix32.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return ___$1;
});
thi.ng.geom.core.matrix.Matrix32.prototype.thi$ng$geom$core$PScale$ = true;
thi.ng.geom.core.matrix.Matrix32.prototype.thi$ng$geom$core$PScale$scale$arity$2 = (function (_,s){var self__ = this;
var ___$1 = this;return thi.ng.geom.core._STAR_.call(null,___$1,(new thi.ng.geom.core.matrix.Matrix32(((typeof s === 'number')?s:s.call(null,0)),0.0,0.0,0.0,((typeof s === 'number')?s:s.call(null,1)),0.0)));
});
thi.ng.geom.core.matrix.Matrix32.prototype.thi$ng$geom$core$PScale$scale$arity$3 = (function (_,sx,sy){var self__ = this;
var ___$1 = this;if(typeof sx === 'number')
{if(typeof sy === 'number')
{return thi.ng.geom.core._STAR_.call(null,___$1,(new thi.ng.geom.core.matrix.Matrix32(sx,0.0,0.0,0.0,sy,0.0)));
} else
{return thi.ng.geom.core._STAR_.call(null,___$1,(new thi.ng.geom.core.matrix.Matrix32((sx * sy.call(null,0)),0.0,0.0,0.0,(sx * sy.call(null,1)),0.0)));
}
} else
{if(typeof sy === 'number')
{return thi.ng.geom.core._STAR_.call(null,___$1,(new thi.ng.geom.core.matrix.Matrix32((sy * sx.call(null,0)),0.0,0.0,0.0,(sy * sx.call(null,1)),0.0)));
} else
{return thi.ng.geom.core._STAR_.call(null,___$1,(new thi.ng.geom.core.matrix.Matrix32((sx.call(null,0) * sy.call(null,0)),0.0,0.0,0.0,(sx.call(null,1) * sy.call(null,1)),0.0)));
}
}
});
thi.ng.geom.core.matrix.Matrix32.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,x){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.m00,self__.m01,self__.m02,self__.m10,self__.m11,self__.m12,x], null);
});
thi.ng.geom.core.matrix.Matrix32.prototype.thi$ng$geom$core$PShear$ = true;
thi.ng.geom.core.matrix.Matrix32.prototype.thi$ng$geom$core$PShear$shear$arity$2 = (function (_,s){var self__ = this;
var ___$1 = this;return thi.ng.geom.core._STAR_.call(null,___$1,(new thi.ng.geom.core.matrix.Matrix32(1.0,((typeof s === 'number')?s:s.call(null,0)),0.0,((typeof s === 'number')?s:s.call(null,1)),1.0,0.0)));
});
thi.ng.geom.core.matrix.Matrix32.prototype.thi$ng$geom$core$PShear$shear$arity$3 = (function (_,sx,sy){var self__ = this;
var ___$1 = this;return thi.ng.geom.core._STAR_.call(null,___$1,(new thi.ng.geom.core.matrix.Matrix32(1.0,sx,0.0,sy,1.0,0.0)));
});
thi.ng.geom.core.matrix.__GT_Matrix32 = (function __GT_Matrix32(m00,m01,m02,m10,m11,m12){return (new thi.ng.geom.core.matrix.Matrix32(m00,m01,m02,m10,m11,m12));
});

/**
* @constructor
*/
thi.ng.geom.core.matrix.Matrix44 = (function (m00,m01,m02,m03,m10,m11,m12,m13,m20,m21,m22,m23,m30,m31,m32,m33){
this.m00 = m00;
this.m01 = m01;
this.m02 = m02;
this.m03 = m03;
this.m10 = m10;
this.m11 = m11;
this.m12 = m12;
this.m13 = m13;
this.m20 = m20;
this.m21 = m21;
this.m22 = m22;
this.m23 = m23;
this.m30 = m30;
this.m31 = m31;
this.m32 = m32;
this.m33 = m33;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31457498;
})
thi.ng.geom.core.matrix.Matrix44.cljs$lang$type = true;
thi.ng.geom.core.matrix.Matrix44.cljs$lang$ctorStr = "thi.ng.geom.core.matrix/Matrix44";
thi.ng.geom.core.matrix.Matrix44.cljs$lang$ctorPrWriter = (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write.call(null,writer__4049__auto__,"thi.ng.geom.core.matrix/Matrix44");
});
thi.ng.geom.core.matrix.Matrix44.prototype.thi$ng$geom$core$PVectorTransform$ = true;
thi.ng.geom.core.matrix.Matrix44.prototype.thi$ng$geom$core$PVectorTransform$transform_vector$arity$2 = (function (_,p__8144){var self__ = this;
var vec__8145 = p__8144;var x = cljs.core.nth.call(null,vec__8145,0,null);var y = cljs.core.nth.call(null,vec__8145,1,null);var z = cljs.core.nth.call(null,vec__8145,2,null);var w = cljs.core.nth.call(null,vec__8145,3,null);var ___$1 = this;if(cljs.core.truth_(w))
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((x * self__.m00) + (y * self__.m10)) + (z * self__.m20)) + (w * self__.m30)),((((x * self__.m01) + (y * self__.m11)) + (z * self__.m21)) + (w * self__.m31)),((((x * self__.m02) + (y * self__.m12)) + (z * self__.m22)) + (w * self__.m32)),((((x * self__.m03) + (y * self__.m13)) + (z * self__.m23)) + (w * self__.m33))], null);
} else
{return (new thi.ng.geom.core.vector.Vec3(((((x * self__.m00) + (y * self__.m10)) + (z * self__.m20)) + self__.m30),((((x * self__.m01) + (y * self__.m11)) + (z * self__.m21)) + self__.m31),((((x * self__.m02) + (y * self__.m12)) + (z * self__.m22)) + self__.m32)));
}
});
thi.ng.geom.core.matrix.Matrix44.prototype.thi$ng$geom$core$PTransform$ = true;
thi.ng.geom.core.matrix.Matrix44.prototype.thi$ng$geom$core$PTransform$transform$arity$2 = (function (_,matrix){var self__ = this;
var ___$1 = this;return thi.ng.geom.core._STAR_.call(null,___$1,matrix);
});
thi.ng.geom.core.matrix.Matrix44.prototype.thi$ng$geom$core$PRotate$ = true;
thi.ng.geom.core.matrix.Matrix44.prototype.thi$ng$geom$core$PRotate$rotate$arity$2 = (function (_,theta){var self__ = this;
var ___$1 = this;return thi.ng.geom.core.rotate_z.call(null,___$1,theta);
});
thi.ng.geom.core.matrix.Matrix44.prototype.thi$ng$geom$core$PTranspose$ = true;
thi.ng.geom.core.matrix.Matrix44.prototype.thi$ng$geom$core$PTranspose$transpose$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new thi.ng.geom.core.matrix.Matrix44(self__.m00,self__.m10,self__.m20,self__.m30,self__.m01,self__.m11,self__.m21,self__.m31,self__.m02,self__.m12,self__.m22,self__.m32,self__.m03,self__.m13,self__.m23,self__.m33));
});
thi.ng.geom.core.matrix.Matrix44.prototype.toString = (function (){var self__ = this;
var _ = this;return cljs.core.apply.call(null,cljs.core.str,cljs.core.concat.call(null,"[",cljs.core.interpose.call(null," ",_),"]"));
});
thi.ng.geom.core.matrix.Matrix44.prototype.thi$ng$geom$core$PRotate3D$ = true;
thi.ng.geom.core.matrix.Matrix44.prototype.thi$ng$geom$core$PRotate3D$rotate_x$arity$2 = (function (_,theta){var self__ = this;
var ___$1 = this;var s = Math.sin.call(null,theta);var c = Math.cos.call(null,theta);return (new thi.ng.geom.core.matrix.Matrix44(self__.m00,self__.m01,self__.m02,self__.m03,((self__.m10 * c) + (self__.m20 * s)),((self__.m11 * c) + (self__.m21 * s)),((self__.m12 * c) + (self__.m22 * s)),((self__.m13 * c) + (self__.m23 * s)),((self__.m20 * c) - (self__.m10 * s)),((self__.m21 * c) - (self__.m11 * s)),((self__.m22 * c) - (self__.m12 * s)),((self__.m23 * c) - (self__.m13 * s)),self__.m30,self__.m31,self__.m32,self__.m33));
});
thi.ng.geom.core.matrix.Matrix44.prototype.thi$ng$geom$core$PRotate3D$rotate_y$arity$2 = (function (_,theta){var self__ = this;
var ___$1 = this;var s = Math.sin.call(null,theta);var c = Math.cos.call(null,theta);return (new thi.ng.geom.core.matrix.Matrix44(((self__.m00 * c) - (self__.m20 * s)),((self__.m01 * c) - (self__.m21 * s)),((self__.m02 * c) - (self__.m22 * s)),((self__.m03 * c) - (self__.m23 * s)),self__.m10,self__.m11,self__.m12,self__.m13,((self__.m00 * s) + (self__.m20 * c)),((self__.m01 * s) + (self__.m21 * c)),((self__.m02 * s) + (self__.m22 * c)),((self__.m03 * s) + (self__.m23 * c)),self__.m30,self__.m31,self__.m32,self__.m33));
});
thi.ng.geom.core.matrix.Matrix44.prototype.thi$ng$geom$core$PRotate3D$rotate_z$arity$2 = (function (_,theta){var self__ = this;
var ___$1 = this;var s = Math.sin.call(null,theta);var c = Math.cos.call(null,theta);return (new thi.ng.geom.core.matrix.Matrix44(((self__.m00 * c) + (self__.m10 * s)),((self__.m01 * c) + (self__.m11 * s)),((self__.m02 * c) + (self__.m12 * s)),((self__.m03 * c) + (self__.m13 * s)),((self__.m10 * c) - (self__.m00 * s)),((self__.m11 * c) - (self__.m01 * s)),((self__.m12 * c) - (self__.m02 * s)),((self__.m13 * c) - (self__.m03 * s)),self__.m20,self__.m21,self__.m22,self__.m23,self__.m30,self__.m31,self__.m32,self__.m33));
});
thi.ng.geom.core.matrix.Matrix44.prototype.thi$ng$geom$core$PRotate3D$rotate_around_axis$arity$3 = (function (_,p__8146,theta){var self__ = this;
var vec__8147 = p__8146;var x = cljs.core.nth.call(null,vec__8147,0,null);var y = cljs.core.nth.call(null,vec__8147,1,null);var z = cljs.core.nth.call(null,vec__8147,2,null);var ___$1 = this;var s = Math.sin.call(null,theta);var c = Math.cos.call(null,theta);var sx = (s * x);var sy = (s * y);var sz = (s * z);var t = (1.0 - c);var tx = (t * x);var ty = (t * y);var b00 = ((tx * x) + c);var b01 = ((tx * y) + sz);var b02 = ((tx * z) - sy);var b10 = ((ty * x) - sz);var b11 = ((ty * y) + c);var b12 = ((ty * z) + sx);var b20 = ((tx * z) + sy);var b21 = ((ty * z) - sx);var b22 = (((t * z) * z) + c);return (new thi.ng.geom.core.matrix.Matrix44((((self__.m00 * b00) + (self__.m10 * b01)) + (self__.m20 * b02)),(((self__.m01 * b00) + (self__.m11 * b01)) + (self__.m21 * b02)),(((self__.m02 * b00) + (self__.m12 * b01)) + (self__.m22 * b02)),(((self__.m03 * b00) + (self__.m13 * b01)) + (self__.m23 * b02)),(((self__.m00 * b10) + (self__.m10 * b11)) + (self__.m20 * b12)),(((self__.m01 * b10) + (self__.m11 * b11)) + (self__.m21 * b12)),(((self__.m02 * b10) + (self__.m12 * b11)) + (self__.m22 * b12)),(((self__.m03 * b10) + (self__.m13 * b11)) + (self__.m23 * b12)),(((self__.m00 * b20) + (self__.m10 * b21)) + (self__.m20 * b22)),(((self__.m01 * b20) + (self__.m11 * b21)) + (self__.m21 * b22)),(((self__.m02 * b20) + (self__.m12 * b21)) + (self__.m22 * b22)),(((self__.m03 * b20) + (self__.m13 * b21)) + (self__.m23 * b22)),self__.m30,self__.m31,self__.m32,self__.m33));
});
thi.ng.geom.core.matrix.Matrix44.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (_,k){var self__ = this;
var ___$1 = this;if(thi.ng.common.math.core.in_range_QMARK_.call(null,0,15,k))
{var G__8148 = (k | 0);if(cljs.core._EQ_.call(null,0,G__8148))
{return self__.m00;
} else
{if(cljs.core._EQ_.call(null,7,G__8148))
{return self__.m13;
} else
{if(cljs.core._EQ_.call(null,1,G__8148))
{return self__.m01;
} else
{if(cljs.core._EQ_.call(null,4,G__8148))
{return self__.m10;
} else
{if(cljs.core._EQ_.call(null,15,G__8148))
{return self__.m33;
} else
{if(cljs.core._EQ_.call(null,13,G__8148))
{return self__.m31;
} else
{if(cljs.core._EQ_.call(null,6,G__8148))
{return self__.m12;
} else
{if(cljs.core._EQ_.call(null,3,G__8148))
{return self__.m03;
} else
{if(cljs.core._EQ_.call(null,12,G__8148))
{return self__.m30;
} else
{if(cljs.core._EQ_.call(null,2,G__8148))
{return self__.m02;
} else
{if(cljs.core._EQ_.call(null,11,G__8148))
{return self__.m23;
} else
{if(cljs.core._EQ_.call(null,9,G__8148))
{return self__.m21;
} else
{if(cljs.core._EQ_.call(null,5,G__8148))
{return self__.m11;
} else
{if(cljs.core._EQ_.call(null,14,G__8148))
{return self__.m32;
} else
{if(cljs.core._EQ_.call(null,10,G__8148))
{return self__.m22;
} else
{if(cljs.core._EQ_.call(null,8,G__8148))
{return self__.m20;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str((k | 0))].join('')));
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
} else
{return thi.ng.common.error.illegal_arg_BANG_.call(null,k);
}
});
thi.ng.geom.core.matrix.Matrix44.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (_,k,nf){var self__ = this;
var ___$1 = this;if(thi.ng.common.math.core.in_range_QMARK_.call(null,0,15,k))
{var G__8149 = (k | 0);if(cljs.core._EQ_.call(null,0,G__8149))
{return self__.m00;
} else
{if(cljs.core._EQ_.call(null,7,G__8149))
{return self__.m13;
} else
{if(cljs.core._EQ_.call(null,1,G__8149))
{return self__.m01;
} else
{if(cljs.core._EQ_.call(null,4,G__8149))
{return self__.m10;
} else
{if(cljs.core._EQ_.call(null,15,G__8149))
{return self__.m33;
} else
{if(cljs.core._EQ_.call(null,13,G__8149))
{return self__.m31;
} else
{if(cljs.core._EQ_.call(null,6,G__8149))
{return self__.m12;
} else
{if(cljs.core._EQ_.call(null,3,G__8149))
{return self__.m03;
} else
{if(cljs.core._EQ_.call(null,12,G__8149))
{return self__.m30;
} else
{if(cljs.core._EQ_.call(null,2,G__8149))
{return self__.m02;
} else
{if(cljs.core._EQ_.call(null,11,G__8149))
{return self__.m23;
} else
{if(cljs.core._EQ_.call(null,9,G__8149))
{return self__.m21;
} else
{if(cljs.core._EQ_.call(null,5,G__8149))
{return self__.m11;
} else
{if(cljs.core._EQ_.call(null,14,G__8149))
{return self__.m32;
} else
{if(cljs.core._EQ_.call(null,10,G__8149))
{return self__.m22;
} else
{if(cljs.core._EQ_.call(null,8,G__8149))
{return self__.m20;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str((k | 0))].join('')));
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
} else
{return nf;
}
});
thi.ng.geom.core.matrix.Matrix44.prototype.cljs$core$INext$_next$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.m01,self__.m02,self__.m03,self__.m10,self__.m11,self__.m12,self__.m13,self__.m20,self__.m21,self__.m22,self__.m23,self__.m30,self__.m31,self__.m32,self__.m33], null));
});
thi.ng.geom.core.matrix.Matrix44.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return 16;
});
thi.ng.geom.core.matrix.Matrix44.prototype.thi$ng$geom$core$PDeterminant$ = true;
thi.ng.geom.core.matrix.Matrix44.prototype.thi$ng$geom$core$PDeterminant$determinant$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var b00 = ((self__.m00 * self__.m11) - (self__.m01 * self__.m10));var b01 = ((self__.m00 * self__.m12) - (self__.m02 * self__.m10));var b02 = ((self__.m00 * self__.m13) - (self__.m03 * self__.m10));var b03 = ((self__.m01 * self__.m12) - (self__.m02 * self__.m11));var b04 = ((self__.m01 * self__.m13) - (self__.m03 * self__.m11));var b05 = ((self__.m02 * self__.m13) - (self__.m03 * self__.m12));var b06 = ((self__.m20 * self__.m31) - (self__.m21 * self__.m30));var b07 = ((self__.m20 * self__.m32) - (self__.m22 * self__.m30));var b08 = ((self__.m20 * self__.m33) - (self__.m23 * self__.m30));var b09 = ((self__.m21 * self__.m32) - (self__.m22 * self__.m31));var b10 = ((self__.m21 * self__.m33) - (self__.m23 * self__.m31));var b11 = ((self__.m22 * self__.m33) - (self__.m23 * self__.m32));return ((((b00 * b11) - (b01 * b10)) - (b04 * b07)) + (((b02 * b09) + (b03 * b08)) + (b05 * b06)));
});
thi.ng.geom.core.matrix.Matrix44.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return thi.ng.geom.core.matrix.hash_matrix.call(null,___$1);
});
thi.ng.geom.core.matrix.Matrix44.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,o){var self__ = this;
var ___$1 = this;if((cljs.core.sequential_QMARK_.call(null,o)) && (cljs.core._EQ_.call(null,16,cljs.core.count.call(null,o))))
{return cljs.core.every_QMARK_.call(null,((function (___$1){
return (function (p1__8143_SHARP_){return cljs.core._EQ_.call(null,p1__8143_SHARP_.call(null,0),p1__8143_SHARP_.call(null,1));
});})(___$1))
,cljs.core.map.call(null,cljs.core.vector,___$1,o));
} else
{return false;
}
});
thi.ng.geom.core.matrix.Matrix44.prototype.thi$ng$geom$core$PInvert$ = true;
thi.ng.geom.core.matrix.Matrix44.prototype.thi$ng$geom$core$PInvert$invert$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var n00 = ((self__.m00 * self__.m11) - (self__.m01 * self__.m10));var n01 = ((self__.m00 * self__.m12) - (self__.m02 * self__.m10));var n02 = ((self__.m00 * self__.m13) - (self__.m03 * self__.m10));var n03 = ((self__.m01 * self__.m12) - (self__.m02 * self__.m11));var n04 = ((self__.m01 * self__.m13) - (self__.m03 * self__.m11));var n05 = ((self__.m02 * self__.m13) - (self__.m03 * self__.m12));var n06 = ((self__.m20 * self__.m31) - (self__.m21 * self__.m30));var n07 = ((self__.m20 * self__.m32) - (self__.m22 * self__.m30));var n08 = ((self__.m20 * self__.m33) - (self__.m23 * self__.m30));var n09 = ((self__.m21 * self__.m32) - (self__.m22 * self__.m31));var n10 = ((self__.m21 * self__.m33) - (self__.m23 * self__.m31));var n11 = ((self__.m22 * self__.m33) - (self__.m23 * self__.m32));var d = ((((n00 * n11) - (n01 * n10)) - (n04 * n07)) + (((n02 * n09) + (n03 * n08)) + (n05 * n06)));if((d === 0))
{return null;
} else
{var invd = (1.0 / d);return (new thi.ng.geom.core.matrix.Matrix44(((((self__.m11 * n11) - (self__.m12 * n10)) + (self__.m13 * n09)) * invd),((((self__.m02 * n10) - (self__.m03 * n09)) + ((- self__.m01) * n11)) * invd),((((self__.m31 * n05) - (self__.m32 * n04)) + (self__.m33 * n03)) * invd),((((self__.m22 * n04) - (self__.m23 * n03)) + ((- self__.m21) * n05)) * invd),((((self__.m12 * n08) - (self__.m13 * n07)) + ((- self__.m10) * n11)) * invd),((((self__.m00 * n11) - (self__.m02 * n08)) + (self__.m03 * n07)) * invd),((((self__.m32 * n02) - (self__.m33 * n01)) + ((- self__.m30) * n05)) * invd),((((self__.m20 * n05) - (self__.m22 * n02)) + (self__.m23 * n01)) * invd),((((self__.m10 * n10) - (self__.m11 * n08)) + (self__.m13 * n06)) * invd),((((self__.m01 * n08) - (self__.m03 * n06)) + ((- self__.m00) * n10)) * invd),((((self__.m30 * n04) - (self__.m31 * n02)) + (self__.m33 * n00)) * invd),((((self__.m21 * n02) - (self__.m23 * n00)) + ((- self__.m20) * n04)) * invd),((((self__.m11 * n07) - (self__.m12 * n06)) + ((- self__.m10) * n09)) * invd),((((self__.m00 * n09) - (self__.m01 * n07)) + (self__.m02 * n06)) * invd),((((self__.m31 * n01) - (self__.m32 * n00)) + ((- self__.m30) * n03)) * invd),((((self__.m20 * n03) - (self__.m21 * n01)) + (self__.m22 * n00)) * invd)));
}
});
thi.ng.geom.core.matrix.Matrix44.prototype.thi$ng$geom$core$PMathOps$ = true;
thi.ng.geom.core.matrix.Matrix44.prototype.thi$ng$geom$core$PMathOps$_STAR_$arity$2 = (function (_,m){var self__ = this;
var ___$1 = this;var m__$1 = m;return (new thi.ng.geom.core.matrix.Matrix44(((((self__.m00 * m__$1.m00) + (self__.m10 * m__$1.m01)) + (self__.m20 * m__$1.m02)) + (self__.m30 * m__$1.m03)),((((self__.m01 * m__$1.m00) + (self__.m11 * m__$1.m01)) + (self__.m21 * m__$1.m02)) + (self__.m31 * m__$1.m03)),((((self__.m02 * m__$1.m00) + (self__.m12 * m__$1.m01)) + (self__.m22 * m__$1.m02)) + (self__.m32 * m__$1.m03)),((((self__.m03 * m__$1.m00) + (self__.m13 * m__$1.m01)) + (self__.m23 * m__$1.m02)) + (self__.m33 * m__$1.m03)),((((self__.m00 * m__$1.m10) + (self__.m10 * m__$1.m11)) + (self__.m20 * m__$1.m12)) + (self__.m30 * m__$1.m13)),((((self__.m01 * m__$1.m10) + (self__.m11 * m__$1.m11)) + (self__.m21 * m__$1.m12)) + (self__.m31 * m__$1.m13)),((((self__.m02 * m__$1.m10) + (self__.m12 * m__$1.m11)) + (self__.m22 * m__$1.m12)) + (self__.m32 * m__$1.m13)),((((self__.m03 * m__$1.m10) + (self__.m13 * m__$1.m11)) + (self__.m23 * m__$1.m12)) + (self__.m33 * m__$1.m13)),((((self__.m00 * m__$1.m20) + (self__.m10 * m__$1.m21)) + (self__.m20 * m__$1.m22)) + (self__.m30 * m__$1.m23)),((((self__.m01 * m__$1.m20) + (self__.m11 * m__$1.m21)) + (self__.m21 * m__$1.m22)) + (self__.m31 * m__$1.m23)),((((self__.m02 * m__$1.m20) + (self__.m12 * m__$1.m21)) + (self__.m22 * m__$1.m22)) + (self__.m32 * m__$1.m23)),((((self__.m03 * m__$1.m20) + (self__.m13 * m__$1.m21)) + (self__.m23 * m__$1.m22)) + (self__.m33 * m__$1.m23)),((((self__.m00 * m__$1.m30) + (self__.m10 * m__$1.m31)) + (self__.m20 * m__$1.m32)) + (self__.m30 * m__$1.m33)),((((self__.m01 * m__$1.m30) + (self__.m11 * m__$1.m31)) + (self__.m21 * m__$1.m32)) + (self__.m31 * m__$1.m33)),((((self__.m02 * m__$1.m30) + (self__.m12 * m__$1.m31)) + (self__.m22 * m__$1.m32)) + (self__.m32 * m__$1.m33)),((((self__.m03 * m__$1.m30) + (self__.m13 * m__$1.m31)) + (self__.m23 * m__$1.m32)) + (self__.m33 * m__$1.m33))));
});
thi.ng.geom.core.matrix.Matrix44.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.next.call(null,___$1);
});
thi.ng.geom.core.matrix.Matrix44.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.m00;
});
thi.ng.geom.core.matrix.Matrix44.prototype.thi$ng$geom$core$PTranslate$ = true;
thi.ng.geom.core.matrix.Matrix44.prototype.thi$ng$geom$core$PTranslate$translate$arity$2 = (function (_,t){var self__ = this;
var ___$1 = this;var vec__8150 = ((typeof t === 'number')?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,t,t], null):t);var x = cljs.core.nth.call(null,vec__8150,0,null);var y = cljs.core.nth.call(null,vec__8150,1,null);var z = cljs.core.nth.call(null,vec__8150,2,null);return thi.ng.geom.core.translate.call(null,___$1,x,y,z);
});
thi.ng.geom.core.matrix.Matrix44.prototype.thi$ng$geom$core$PTranslate$translate$arity$4 = (function (_,x,y,z){var self__ = this;
var ___$1 = this;return (new thi.ng.geom.core.matrix.Matrix44(self__.m00,self__.m01,self__.m02,self__.m03,self__.m10,self__.m11,self__.m12,self__.m13,self__.m20,self__.m21,self__.m22,self__.m23,((((self__.m00 * x) + (self__.m10 * y)) + (self__.m20 * z)) + self__.m30),((((self__.m01 * x) + (self__.m11 * y)) + (self__.m21 * z)) + self__.m31),((((self__.m02 * x) + (self__.m12 * y)) + (self__.m22 * z)) + self__.m32),((((self__.m03 * x) + (self__.m13 * y)) + (self__.m23 * z)) + self__.m33)));
});
thi.ng.geom.core.matrix.Matrix44.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return ___$1;
});
thi.ng.geom.core.matrix.Matrix44.prototype.thi$ng$geom$core$PScale$ = true;
thi.ng.geom.core.matrix.Matrix44.prototype.thi$ng$geom$core$PScale$scale$arity$2 = (function (_,s){var self__ = this;
var ___$1 = this;var vec__8151 = ((typeof s === 'number')?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,s,s], null):s);var x = cljs.core.nth.call(null,vec__8151,0,null);var y = cljs.core.nth.call(null,vec__8151,1,null);var z = cljs.core.nth.call(null,vec__8151,2,null);return thi.ng.geom.core.scale.call(null,___$1,x,y,z);
});
thi.ng.geom.core.matrix.Matrix44.prototype.thi$ng$geom$core$PScale$scale$arity$4 = (function (_,x,y,z){var self__ = this;
var ___$1 = this;return (new thi.ng.geom.core.matrix.Matrix44((self__.m00 * x),(self__.m01 * x),(self__.m02 * x),(self__.m03 * x),(self__.m10 * y),(self__.m11 * y),(self__.m12 * y),(self__.m13 * y),(self__.m20 * z),(self__.m21 * z),(self__.m22 * z),(self__.m23 * z),self__.m30,self__.m31,self__.m32,self__.m33));
});
thi.ng.geom.core.matrix.Matrix44.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,x){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.m00,self__.m01,self__.m02,self__.m03,self__.m10,self__.m11,self__.m12,self__.m13,self__.m20,self__.m21,self__.m22,self__.m23,self__.m30,self__.m31,self__.m32,self__.m33,x], null);
});
thi.ng.geom.core.matrix.__GT_Matrix44 = (function __GT_Matrix44(m00,m01,m02,m03,m10,m11,m12,m13,m20,m21,m22,m23,m30,m31,m32,m33){return (new thi.ng.geom.core.matrix.Matrix44(m00,m01,m02,m03,m10,m11,m12,m13,m20,m21,m22,m23,m30,m31,m32,m33));
});
thi.ng.geom.core.matrix.M32 = (new thi.ng.geom.core.matrix.Matrix32(1.0,0.0,0.0,0.0,1.0,0.0));
thi.ng.geom.core.matrix.M44 = (new thi.ng.geom.core.matrix.Matrix44(1.0,0.0,0.0,0.0,0.0,1.0,0.0,0.0,0.0,0.0,1.0,0.0,0.0,0.0,0.0,1.0));
thi.ng.geom.core.matrix.matrix32 = (function() {
var matrix32 = null;
var matrix32__0 = (function (){return thi.ng.geom.core.matrix.M32;
});
var matrix32__1 = (function (p__8152){var vec__8154 = p__8152;var m00 = cljs.core.nth.call(null,vec__8154,0,null);var m01 = cljs.core.nth.call(null,vec__8154,1,null);var m02 = cljs.core.nth.call(null,vec__8154,2,null);var m10 = cljs.core.nth.call(null,vec__8154,3,null);var m11 = cljs.core.nth.call(null,vec__8154,4,null);var m12 = cljs.core.nth.call(null,vec__8154,5,null);return (new thi.ng.geom.core.matrix.Matrix32(m00,m01,m02,m10,m11,m12));
});
var matrix32__6 = (function (m00,m01,m02,m10,m11,m12){return (new thi.ng.geom.core.matrix.Matrix32(m00,m01,m02,m10,m11,m12));
});
matrix32 = function(m00,m01,m02,m10,m11,m12){
switch(arguments.length){
case 0:
return matrix32__0.call(this);
case 1:
return matrix32__1.call(this,m00);
case 6:
return matrix32__6.call(this,m00,m01,m02,m10,m11,m12);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
matrix32.cljs$core$IFn$_invoke$arity$0 = matrix32__0;
matrix32.cljs$core$IFn$_invoke$arity$1 = matrix32__1;
matrix32.cljs$core$IFn$_invoke$arity$6 = matrix32__6;
return matrix32;
})()
;
thi.ng.geom.core.matrix.matrix44 = (function() {
var matrix44 = null;
var matrix44__0 = (function (){return thi.ng.geom.core.matrix.M44;
});
var matrix44__1 = (function (p__8155){var vec__8157 = p__8155;var m00 = cljs.core.nth.call(null,vec__8157,0,null);var m01 = cljs.core.nth.call(null,vec__8157,1,null);var m02 = cljs.core.nth.call(null,vec__8157,2,null);var m03 = cljs.core.nth.call(null,vec__8157,3,null);var m10 = cljs.core.nth.call(null,vec__8157,4,null);var m11 = cljs.core.nth.call(null,vec__8157,5,null);var m12 = cljs.core.nth.call(null,vec__8157,6,null);var m13 = cljs.core.nth.call(null,vec__8157,7,null);var m20 = cljs.core.nth.call(null,vec__8157,8,null);var m21 = cljs.core.nth.call(null,vec__8157,9,null);var m22 = cljs.core.nth.call(null,vec__8157,10,null);var m23 = cljs.core.nth.call(null,vec__8157,11,null);var m30 = cljs.core.nth.call(null,vec__8157,12,null);var m31 = cljs.core.nth.call(null,vec__8157,13,null);var m32 = cljs.core.nth.call(null,vec__8157,14,null);var m33 = cljs.core.nth.call(null,vec__8157,15,null);return (new thi.ng.geom.core.matrix.Matrix44(m00,m01,m02,m03,m10,m11,m12,m13,m20,m21,m22,m23,m30,m31,m32,m33));
});
var matrix44__16 = (function (m00,m01,m02,m03,m10,m11,m12,m13,m20,m21,m22,m23,m30,m31,m32,m33){return (new thi.ng.geom.core.matrix.Matrix44(m00,m01,m02,m03,m10,m11,m12,m13,m20,m21,m22,m23,m30,m31,m32,m33));
});
matrix44 = function(m00,m01,m02,m03,m10,m11,m12,m13,m20,m21,m22,m23,m30,m31,m32,m33){
switch(arguments.length){
case 0:
return matrix44__0.call(this);
case 1:
return matrix44__1.call(this,m00);
case 16:
return matrix44__16.call(this,m00,m01,m02,m03,m10,m11,m12,m13,m20,m21,m22,m23,m30,m31,m32,m33);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
matrix44.cljs$core$IFn$_invoke$arity$0 = matrix44__0;
matrix44.cljs$core$IFn$_invoke$arity$1 = matrix44__1;
matrix44.cljs$core$IFn$_invoke$arity$16 = matrix44__16;
return matrix44;
})()
;
thi.ng.geom.core.matrix.matrix44__GT_matrix33 = (function matrix44__GT_matrix33(p__8158){var vec__8160 = p__8158;var m00 = cljs.core.nth.call(null,vec__8160,0,null);var m01 = cljs.core.nth.call(null,vec__8160,1,null);var m02 = cljs.core.nth.call(null,vec__8160,2,null);var _ = cljs.core.nth.call(null,vec__8160,3,null);var m10 = cljs.core.nth.call(null,vec__8160,4,null);var m11 = cljs.core.nth.call(null,vec__8160,5,null);var m12 = cljs.core.nth.call(null,vec__8160,6,null);var ___$1 = cljs.core.nth.call(null,vec__8160,7,null);var m20 = cljs.core.nth.call(null,vec__8160,8,null);var m21 = cljs.core.nth.call(null,vec__8160,9,null);var m22 = cljs.core.nth.call(null,vec__8160,10,null);return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [m00,m01,m02,m10,m11,m12,m20,m21,m22], null);
});
thi.ng.geom.core.matrix.matrix44__GT_matrix33_rot = (function matrix44__GT_matrix33_rot(p__8161){var vec__8163 = p__8161;var m00 = cljs.core.nth.call(null,vec__8163,0,null);var m01 = cljs.core.nth.call(null,vec__8163,1,null);var m02 = cljs.core.nth.call(null,vec__8163,2,null);var _ = cljs.core.nth.call(null,vec__8163,3,null);var m10 = cljs.core.nth.call(null,vec__8163,4,null);var m11 = cljs.core.nth.call(null,vec__8163,5,null);var m12 = cljs.core.nth.call(null,vec__8163,6,null);var ___$1 = cljs.core.nth.call(null,vec__8163,7,null);var m20 = cljs.core.nth.call(null,vec__8163,8,null);var m21 = cljs.core.nth.call(null,vec__8163,9,null);var m22 = cljs.core.nth.call(null,vec__8163,10,null);var b01 = ((m22 * m11) - (m12 * m21));var b11 = ((m12 * m20) - (m22 * m10));var b21 = ((m21 * m10) - (m11 * m20));var invd = (1 / (((m00 * b01) + (m01 * b11)) + (m02 * b21)));return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(b01 * invd),(b11 * invd),(b21 * invd),(((m02 * m21) - (m22 * m01)) * invd),(((m22 * m00) - (m02 * m20)) * invd),(((m01 * m20) - (m21 * m00)) * invd),(((m12 * m01) - (m02 * m11)) * invd),(((m02 * m10) - (m12 * m00)) * invd),(((m11 * m00) - (m01 * m10)) * invd)], null);
});
/**
* Sets up a viewing frustum, shaped like a truncated pyramid with the
* camera where the tip of the pyramid would be.
* This emulates the OpenGL function glFrustum().
*/
thi.ng.geom.core.matrix.frustum = (function frustum(l,t,r,b,n,f){var dx = (1 / (r - l));var dy = (1 / (t - b));var dz = (1 / (n - f));var n2 = (2.0 * n);return (new thi.ng.geom.core.matrix.Matrix44((n2 * dx),0.0,0.0,0.0,0.0,(n2 * dy),0.0,0.0,((l + r) * dx),((t + b) * dy),((n + f) * dz),-1.0,0.0,0.0,((n2 * f) * dz),0.0));
});
thi.ng.geom.core.matrix.frustum_bounds = (function frustum_bounds(fovy,aspect,near){var top = (near * Math.tan.call(null,(0.5 * thi.ng.common.math.core.radians.call(null,fovy))));var right = (top * aspect);return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"left","left",1017222009),(- right),new cljs.core.Keyword(null,"right","right",1122416014),right,new cljs.core.Keyword(null,"top","top",1014019271),top,new cljs.core.Keyword(null,"bottom","bottom",3925642653),(- top)], null);
});
/**
* Returns an orthographic projection matrix, in which objects are the same size no
* matter how far away or nearby they are.
* This emulates the OpenGL function glOrtho().
*/
thi.ng.geom.core.matrix.ortho = (function ortho(l,t,r,b,n,f){var dx = (1 / (l - r));var dy = (1 / (b - t));var dz = (1 / (n - f));return (new thi.ng.geom.core.matrix.Matrix44((-2.0 * dx),0.0,0.0,0.0,0.0,(-2.0 * dy),0.0,0.0,0.0,0.0,(2.0 * dz),0.0,((l + r) * dx),((t + b) * dy),((n + f) * dz),1.0));
});
/**
* Returns a perspective transform matrix, which makes far away objects appear
* smaller than nearby objects. The `aspect` argument should be the width
* divided by the height of your viewport and `fov` is the vertical angle
* of the field of view in degrees.
*/
thi.ng.geom.core.matrix.perspective = (function perspective(fovy,aspect,near,far){var f = (1 / Math.tan.call(null,(0.5 * thi.ng.common.math.core.radians.call(null,fovy))));var nf = (1 / (near - far));return (new thi.ng.geom.core.matrix.Matrix44((f / aspect),0.0,0.0,0.0,0.0,f,0.0,0.0,0.0,0.0,((near + far) * nf),-1.0,0.0,0.0,(((2.0 * near) * far) * nf),0.0));
});
thi.ng.geom.core.matrix.perspective_frustum = (function perspective_frustum(fov,aspect,near,far){var map__8165 = thi.ng.geom.core.matrix.frustum_bounds.call(null,fov,aspect,near);var map__8165__$1 = ((cljs.core.seq_QMARK_.call(null,map__8165))?cljs.core.apply.call(null,cljs.core.hash_map,map__8165):map__8165);var bottom = cljs.core.get.call(null,map__8165__$1,new cljs.core.Keyword(null,"bottom","bottom",3925642653));var top = cljs.core.get.call(null,map__8165__$1,new cljs.core.Keyword(null,"top","top",1014019271));var right = cljs.core.get.call(null,map__8165__$1,new cljs.core.Keyword(null,"right","right",1122416014));var left = cljs.core.get.call(null,map__8165__$1,new cljs.core.Keyword(null,"left","left",1017222009));return thi.ng.geom.core.matrix.frustum.call(null,left,top,right,bottom,near,far);
});
/**
* Returns a matrix that puts the camera at the eye position looking
* toward the target point with the given up direction.
*/
thi.ng.geom.core.matrix.look_at = (function look_at(eye,target,up){var dir = thi.ng.geom.core._.call(null,eye,target);if(thi.ng.common.math.core.delta_EQ_.call(null,thi.ng.geom.core.vector.V3,dir))
{return thi.ng.geom.core.matrix.M44;
} else
{var vec__8169 = thi.ng.geom.core.normalize.call(null,dir);var zx = cljs.core.nth.call(null,vec__8169,0,null);var zy = cljs.core.nth.call(null,vec__8169,1,null);var zz = cljs.core.nth.call(null,vec__8169,2,null);var z = vec__8169;var vec__8170 = thi.ng.geom.core.utils.ortho_normal.call(null,up,z);var xx = cljs.core.nth.call(null,vec__8170,0,null);var xy = cljs.core.nth.call(null,vec__8170,1,null);var xz = cljs.core.nth.call(null,vec__8170,2,null);var x = vec__8170;var vec__8171 = thi.ng.geom.core.utils.ortho_normal.call(null,z,x);var yx = cljs.core.nth.call(null,vec__8171,0,null);var yy = cljs.core.nth.call(null,vec__8171,1,null);var yz = cljs.core.nth.call(null,vec__8171,2,null);var y = vec__8171;return (new thi.ng.geom.core.matrix.Matrix44(xx,yx,zx,0.0,xy,yy,zy,0.0,xz,yz,zz,0.0,(- thi.ng.geom.core.dot.call(null,x,eye)),(- thi.ng.geom.core.dot.call(null,y,eye)),(- thi.ng.geom.core.dot.call(null,z,eye)),1.0));
}
});
/**
* Takes a vec3 in screenspace, view matrix, projection matrix and
* view rect. Returns vector in model space or nil.
*/
thi.ng.geom.core.matrix.unproject = (function unproject(v,vmat,pmat,p__8172){var map__8174 = p__8172;var map__8174__$1 = ((cljs.core.seq_QMARK_.call(null,map__8174))?cljs.core.apply.call(null,cljs.core.hash_map,map__8174):map__8174);var height = cljs.core.get.call(null,map__8174__$1,new cljs.core.Keyword(null,"height","height",4087841945));var width = cljs.core.get.call(null,map__8174__$1,new cljs.core.Keyword(null,"width","width",1127031096));var p = cljs.core.get.call(null,map__8174__$1,new cljs.core.Keyword(null,"p","p",1013904354));var x = (((v.call(null,0) - p.call(null,0)) * (2.0 / width)) - 1.0);var y = (((v.call(null,1) - p.call(null,1)) * (2.0 / height)) - 1.0);var z = ((v.call(null,2) * 2.0) - 1.0);var vpm = thi.ng.geom.core._STAR_.call(null,pmat,vmat);if(cljs.core.truth_(thi.ng.geom.core.invert.call(null,vpm)))
{var v_SINGLEQUOTE_ = thi.ng.geom.core.transform_vector.call(null,vpm,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,z,1.0], null));if(!((v_SINGLEQUOTE_.call(null,3) === 0)))
{return thi.ng.geom.core.div.call(null,thi.ng.geom.core.vector.vec3.call(null,v_SINGLEQUOTE_),v_SINGLEQUOTE_.call(null,3));
} else
{return null;
}
} else
{return null;
}
});
