// Compiled by ClojureScript 0.0-2202
goog.provide('thi.ng.geom.core.vector');
goog.require('cljs.core');
goog.require('thi.ng.common.math.core');
goog.require('thi.ng.common.math.core');
goog.require('thi.ng.common.math.core');
goog.require('thi.ng.common.error');
goog.require('thi.ng.common.error');
goog.require('thi.ng.common.data.core');
goog.require('thi.ng.common.data.core');
goog.require('thi.ng.geom.core');
goog.require('thi.ng.geom.core');

/**
* @constructor
*/
thi.ng.geom.core.vector.Vec2 = (function (x,y){
this.x = x;
this.y = y;
this.cljs$lang$protocol_mask$partition0$ = 166224859;
this.cljs$lang$protocol_mask$partition1$ = 10240;
})
thi.ng.geom.core.vector.Vec2.cljs$lang$type = true;
thi.ng.geom.core.vector.Vec2.cljs$lang$ctorStr = "thi.ng.geom.core.vector/Vec2";
thi.ng.geom.core.vector.Vec2.cljs$lang$ctorPrWriter = (function (this__5520__auto__,writer__5521__auto__,opt__5522__auto__){return cljs.core._write.call(null,writer__5521__auto__,"thi.ng.geom.core.vector/Vec2");
});
thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PTransform$ = true;
thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PTransform$transform$arity$2 = (function (_,m){var self__ = this;
var ___$1 = this;return thi.ng.geom.core.transform_vector.call(null,m,___$1);
});
thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PRotate$ = true;
thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PRotate$rotate$arity$2 = (function (_,theta){var self__ = this;
var ___$1 = this;var s = Math.sin.call(null,theta);var c = Math.cos.call(null,theta);return (new thi.ng.geom.core.vector.Vec2(((self__.x * c) - (self__.y * s)),((self__.x * s) + (self__.y * c))));
});
thi.ng.geom.core.vector.Vec2.prototype.toString = (function (){var self__ = this;
var _ = this;return [cljs.core.str("["),cljs.core.str(self__.x),cljs.core.str(" "),cljs.core.str(self__.y),cljs.core.str("]")].join('');
});
thi.ng.geom.core.vector.Vec2.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (_,k){var self__ = this;
var ___$1 = this;return thi.ng.geom.core.vector.swizzle2.call(null,___$1,k,null);
});
thi.ng.geom.core.vector.Vec2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,k,nf){var self__ = this;
var ___$1 = this;return thi.ng.geom.core.vector.swizzle2.call(null,___$1,k,nf);
});
thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PDotProduct$ = true;
thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PDotProduct$dot$arity$2 = (function (_,p__9969){var self__ = this;
var vec__9970 = p__9969;var ax = cljs.core.nth.call(null,vec__9970,0,null);var ay = cljs.core.nth.call(null,vec__9970,1,null);var ___$1 = this;return ((self__.x * ax) + (self__.y * ay));
});
thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PNormalize$ = true;
thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PNormalize$normalize$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var l = Math.sqrt.call(null,((self__.x * self__.x) + (self__.y * self__.y)));if((l > 0))
{return (new thi.ng.geom.core.vector.Vec2((self__.x / l),(self__.y / l)));
} else
{return ___$1;
}
});
thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PNormalize$normalize$arity$2 = (function (_,len){var self__ = this;
var ___$1 = this;var l = Math.sqrt.call(null,((self__.x * self__.x) + (self__.y * self__.y)));if((l > 0))
{var l__$1 = (len / l);return (new thi.ng.geom.core.vector.Vec2((self__.x * l__$1),(self__.y * l__$1)));
} else
{return ___$1;
}
});
thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PNormalize$normalized_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return thi.ng.common.math.core.delta_EQ_.call(null,1.0,thi.ng.geom.core.mag_squared.call(null,___$1));
});
thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PRotate3D$ = true;
thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PRotate3D$rotate_x$arity$2 = (function (_,theta){var self__ = this;
var ___$1 = this;return thi.ng.geom.core.rotate_x.call(null,thi.ng.geom.core.vector.vec3.call(null,___$1),theta);
});
thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PRotate3D$rotate_y$arity$2 = (function (_,theta){var self__ = this;
var ___$1 = this;return thi.ng.geom.core.rotate_y.call(null,thi.ng.geom.core.vector.vec3.call(null,___$1),theta);
});
thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PRotate3D$rotate_z$arity$2 = (function (_,theta){var self__ = this;
var ___$1 = this;return thi.ng.geom.core.vector.vec3.call(null,thi.ng.geom.core.rotate.call(null,___$1,theta));
});
thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PRotate3D$rotate_around_axis$arity$3 = (function (_,axis,theta){var self__ = this;
var ___$1 = this;return thi.ng.geom.core.rotate_around_axis.call(null,thi.ng.geom.core.vector.vec3.call(null,___$1),axis,theta);
});
thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PReflect$ = true;
thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PReflect$reflect$arity$2 = (function (_,p__9971){var self__ = this;
var vec__9972 = p__9971;var rx = cljs.core.nth.call(null,vec__9972,0,null);var ry = cljs.core.nth.call(null,vec__9972,1,null);var r = vec__9972;var ___$1 = this;var d = (thi.ng.geom.core.dot.call(null,___$1,r) * 2.0);return (new thi.ng.geom.core.vector.Vec2(((rx * d) - self__.x),((ry * d) - self__.y)));
});
thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PCrossProduct$ = true;
thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PCrossProduct$cross$arity$2 = (function (_,p__9973){var self__ = this;
var vec__9974 = p__9973;var ax = cljs.core.nth.call(null,vec__9974,0,null);var ay = cljs.core.nth.call(null,vec__9974,1,null);var ___$1 = this;return ((self__.x * ay) - (self__.y * ax));
});
thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (_,k){var self__ = this;
var ___$1 = this;var G__9975 = (k | 0);if(cljs.core._EQ_.call(null,1,G__9975))
{return self__.y;
} else
{if(cljs.core._EQ_.call(null,0,G__9975))
{return self__.x;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return thi.ng.common.error.key_error_BANG_.call(null,k);
} else
{return null;
}
}
}
});
thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (_,k,nf){var self__ = this;
var ___$1 = this;var G__9976 = (k | 0);if(cljs.core._EQ_.call(null,1,G__9976))
{return self__.y;
} else
{if(cljs.core._EQ_.call(null,0,G__9976))
{return self__.x;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return nf;
} else
{return null;
}
}
}
});
thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (_,k,v){var self__ = this;
var ___$1 = this;var G__9977 = (k | 0);if(cljs.core._EQ_.call(null,1,G__9977))
{return (new thi.ng.geom.core.vector.Vec2(self__.x,v));
} else
{if(cljs.core._EQ_.call(null,0,G__9977))
{return (new thi.ng.geom.core.vector.Vec2(v,self__.y));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return thi.ng.common.error.key_error_BANG_.call(null,k);
} else
{return null;
}
}
}
});
thi.ng.geom.core.vector.Vec2.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new thi.ng.geom.core.vector.Vec2(self__.x,self__.y));
});
thi.ng.geom.core.vector.Vec2.prototype.cljs$core$INext$_next$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.cons.call(null,self__.y,null);
});
thi.ng.geom.core.vector.Vec2.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return 2;
});
thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IStack$_peek$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.y;
});
thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IStack$_pop$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.x], null);
});
thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new thi.ng.geom.core.vector.Vec2(self__.y,self__.x));
});
thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.hash_combine.call(null,cljs.core.hash.call(null,self__.x),cljs.core.hash.call(null,self__.y));
});
thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,o){var self__ = this;
var ___$1 = this;if((o instanceof thi.ng.geom.core.vector.Vec2))
{return ((self__.x === o.x)) && ((self__.y === o.y));
} else
{return (cljs.core.sequential_QMARK_.call(null,o)) && (cljs.core._EQ_.call(null,2,cljs.core.count.call(null,o))) && (cljs.core._EQ_.call(null,self__.x,cljs.core.nth.call(null,o,0))) && (cljs.core._EQ_.call(null,self__.y,cljs.core.nth.call(null,o,1)));
}
});
thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PHeading$ = true;
thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PHeading$heading$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var t = Math.atan2.call(null,self__.y,self__.x);if((t < 0))
{return (t + thi.ng.common.math.core.TWO_PI);
} else
{return t;
}
});
thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PHeading$heading_xy$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return thi.ng.geom.core.heading.call(null,___$1);
});
thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PHeading$angle_between$arity$2 = (function (_,a){var self__ = this;
var ___$1 = this;var t = (thi.ng.geom.core.heading_xy.call(null,a) - thi.ng.geom.core.heading_xy.call(null,___$1));if((t < 0))
{return (t + thi.ng.common.math.core.TWO_PI);
} else
{return t;
}
});
thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PHeading$slope_xy$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (self__.y / self__.x);
});
thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PDistance$ = true;
thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PDistance$dist$arity$2 = (function (_,a){var self__ = this;
var ___$1 = this;var vec__9978 = (((a instanceof thi.ng.geom.core.vector.Vec2))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(self__.x - a.x),(self__.y - a.y)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(self__.x - cljs.core.nth.call(null,a,0)),(self__.y - cljs.core.nth.call(null,a,1))], null));var dx = cljs.core.nth.call(null,vec__9978,0,null);var dy = cljs.core.nth.call(null,vec__9978,1,null);return Math.sqrt.call(null,((dx * dx) + (dy * dy)));
});
thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PDistance$dist_squared$arity$2 = (function (_,a){var self__ = this;
var ___$1 = this;var vec__9979 = (((a instanceof thi.ng.geom.core.vector.Vec2))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(self__.x - a.x),(self__.y - a.y)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(self__.x - cljs.core.nth.call(null,a,0)),(self__.y - cljs.core.nth.call(null,a,1))], null));var dx = cljs.core.nth.call(null,vec__9979,0,null);var dy = cljs.core.nth.call(null,vec__9979,1,null);return ((dx * dx) + (dy * dy));
});
thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){var self__ = this;
var coll__$1 = this;var acc = f.call(null,self__.x,self__.y);if(cljs.core.reduced_QMARK_.call(null,acc))
{return cljs.core.deref.call(null,acc);
} else
{return acc;
}
});
thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){var self__ = this;
var coll__$1 = this;var acc = f.call(null,start,self__.x);if(cljs.core.reduced_QMARK_.call(null,acc))
{return cljs.core.deref.call(null,acc);
} else
{var acc__$1 = f.call(null,acc,self__.y);if(cljs.core.reduced_QMARK_.call(null,acc__$1))
{return cljs.core.deref.call(null,acc__$1);
} else
{return acc__$1;
}
}
});
thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PInvert$ = true;
thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PInvert$invert$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new thi.ng.geom.core.vector.Vec2((- self__.x),(- self__.y)));
});
thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$ = true;
thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$msub$arity$3 = (function (_,a,b){var self__ = this;
var ___$1 = this;return thi.ng.geom.core.vector.vec2_op_2_STAR_.call(null,cljs.core._STAR_,cljs.core._,___$1,a,b,1.0,0.0);
});
thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$_STAR_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return ___$1;
});
thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$_STAR_$arity$2 = (function (_,a){var self__ = this;
var ___$1 = this;return thi.ng.geom.core.vector.vec2_op_1.call(null,cljs.core._STAR_,___$1,a,1.0);
});
thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$_STAR_$arity$3 = (function (_,a,b){var self__ = this;
var ___$1 = this;return thi.ng.geom.core.vector.vec2_op_2.call(null,cljs.core._STAR_,___$1,a,b,1.0,1.0);
});
thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$_STAR_$arity$4 = (function (_,a,b,c){var self__ = this;
var ___$1 = this;return thi.ng.geom.core.vector.vec2_op_3.call(null,cljs.core._STAR_,___$1,a,b,c,1.0);
});
thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new thi.ng.geom.core.vector.Vec2((- self__.x),(- self__.y)));
});
thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$_$arity$2 = (function (_,a){var self__ = this;
var ___$1 = this;return thi.ng.geom.core.vector.vec2_op_1.call(null,cljs.core._,___$1,a,0.0);
});
thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$_$arity$3 = (function (_,a,b){var self__ = this;
var ___$1 = this;return thi.ng.geom.core.vector.vec2_op_2.call(null,cljs.core._,___$1,a,b,0.0,0.0);
});
thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$_$arity$4 = (function (_,a,b,c){var self__ = this;
var ___$1 = this;return thi.ng.geom.core.vector.vec2_op_3.call(null,cljs.core._,___$1,a,b,c,0.0);
});
thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$madd$arity$3 = (function (_,a,b){var self__ = this;
var ___$1 = this;return thi.ng.geom.core.vector.vec2_op_2_STAR_.call(null,cljs.core._STAR_,cljs.core._PLUS_,___$1,a,b,1.0,0.0);
});
thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$addm$arity$3 = (function (_,a,b){var self__ = this;
var ___$1 = this;return thi.ng.geom.core.vector.vec2_op_2_STAR_.call(null,cljs.core._PLUS_,cljs.core._STAR_,___$1,a,b,0.0,1.0);
});
thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$div$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new thi.ng.geom.core.vector.Vec2((1 / self__.x),(1 / self__.y)));
});
thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$div$arity$2 = (function (_,a){var self__ = this;
var ___$1 = this;return thi.ng.geom.core.vector.vec2_op_1.call(null,cljs.core._SLASH_,___$1,a,0.0);
});
thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$div$arity$3 = (function (_,a,b){var self__ = this;
var ___$1 = this;return thi.ng.geom.core.vector.vec2_op_2.call(null,cljs.core._SLASH_,___$1,a,b,0.0,0.0);
});
thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$div$arity$4 = (function (_,a,b,c){var self__ = this;
var ___$1 = this;return thi.ng.geom.core.vector.vec2_op_3.call(null,cljs.core._SLASH_,___$1,a,b,c,0.0);
});
thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$_PLUS_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return ___$1;
});
thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$_PLUS_$arity$2 = (function (_,a){var self__ = this;
var ___$1 = this;return thi.ng.geom.core.vector.vec2_op_1.call(null,cljs.core._PLUS_,___$1,a,0.0);
});
thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$_PLUS_$arity$3 = (function (_,a,b){var self__ = this;
var ___$1 = this;return thi.ng.geom.core.vector.vec2_op_2.call(null,cljs.core._PLUS_,___$1,a,b,0.0,0.0);
});
thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$_PLUS_$arity$4 = (function (_,a,b,c){var self__ = this;
var ___$1 = this;return thi.ng.geom.core.vector.vec2_op_3.call(null,cljs.core._PLUS_,___$1,a,b,c,0.0);
});
thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$abs$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new thi.ng.geom.core.vector.Vec2(thi.ng.common.math.core.abs.call(null,self__.x),thi.ng.common.math.core.abs.call(null,self__.y)));
});
thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$subm$arity$3 = (function (_,a,b){var self__ = this;
var ___$1 = this;return thi.ng.geom.core.vector.vec2_op_2_STAR_.call(null,cljs.core._,cljs.core._STAR_,___$1,a,b,0.0,1.0);
});
thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PNormal$ = true;
thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PNormal$normal$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new thi.ng.geom.core.vector.Vec2((- self__.y),self__.x));
});
thi.ng.geom.core.vector.Vec2.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.x;
});
thi.ng.geom.core.vector.Vec2.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.cons.call(null,self__.y,null);
});
thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PTranslate$ = true;
thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PTranslate$translate$arity$2 = (function (_,a){var self__ = this;
var ___$1 = this;return thi.ng.geom.core.vector.vec2_op_1.call(null,cljs.core._PLUS_,___$1,a,0.0);
});
thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PTranslate$translate$arity$3 = (function (_,a,b){var self__ = this;
var ___$1 = this;return thi.ng.geom.core.vector.vec2_op_2.call(null,cljs.core._PLUS_,___$1,a,b,0.0,0.0);
});
thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PTranslate$translate$arity$4 = (function (_,a,b,c){var self__ = this;
var ___$1 = this;return thi.ng.geom.core.vector.vec2_op_3.call(null,cljs.core._PLUS_,___$1,a,b,c,0.0);
});
thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){var self__ = this;
var ___$1 = this;return !((new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [0,null,new cljs.core.Keyword(null,"y","y",1013904363),null,1,null,new cljs.core.Keyword(null,"x","x",1013904362),null], null), null).call(null,k) == null));
});
thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (_,k,v){var self__ = this;
var ___$1 = this;return thi.ng.geom.core.vector.swizzle2_assoc.call(null,___$1,k,v);
});
thi.ng.geom.core.vector.Vec2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return ___$1;
});
thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PScale$ = true;
thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PScale$scale$arity$2 = (function (_,a){var self__ = this;
var ___$1 = this;return thi.ng.geom.core.vector.vec2_op_1.call(null,cljs.core._STAR_,___$1,a,1.0);
});
thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PScale$scale$arity$3 = (function (_,a,b){var self__ = this;
var ___$1 = this;return thi.ng.geom.core.vector.vec2_op_2.call(null,cljs.core._STAR_,___$1,a,b,1.0,1.0);
});
thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PScale$scale$arity$4 = (function (_,a,b,c){var self__ = this;
var ___$1 = this;return thi.ng.geom.core.vector.vec2_op_3.call(null,cljs.core._STAR_,___$1,a,b,c,1.0);
});
thi.ng.geom.core.vector.Vec2.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,z){var self__ = this;
var ___$1 = this;return thi.ng.geom.core.vector.vec3.call(null,self__.x,self__.y,z);
});
thi.ng.geom.core.vector.Vec2.prototype.call = (function() {
var G__10002 = null;
var G__10002__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var _ = self____$1;return thi.ng.geom.core.vector.swizzle2.call(null,_,k,null);
});
var G__10002__3 = (function (self__,k,nf){var self__ = this;
var self____$1 = this;var _ = self____$1;return thi.ng.geom.core.vector.swizzle2.call(null,_,k,nf);
});
G__10002 = function(self__,k,nf){
switch(arguments.length){
case 2:
return G__10002__2.call(this,self__,k);
case 3:
return G__10002__3.call(this,self__,k,nf);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__10002;
})()
;
thi.ng.geom.core.vector.Vec2.prototype.apply = (function (self__,args9968){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args9968)));
});
thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var _ = this;return thi.ng.geom.core.vector.swizzle2.call(null,_,k,null);
});
thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,nf){var self__ = this;
var _ = this;return thi.ng.geom.core.vector.swizzle2.call(null,_,k,nf);
});
thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMinMax$ = true;
thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMinMax$min$arity$2 = (function (_,p__9980){var self__ = this;
var vec__9981 = p__9980;var ax = cljs.core.nth.call(null,vec__9981,0,null);var ay = cljs.core.nth.call(null,vec__9981,1,null);var ___$1 = this;return (new thi.ng.geom.core.vector.Vec2((function (){var x__5267__auto__ = self__.x;var y__5268__auto__ = ax;return ((x__5267__auto__ < y__5268__auto__) ? x__5267__auto__ : y__5268__auto__);
})(),(function (){var x__5267__auto__ = self__.y;var y__5268__auto__ = ay;return ((x__5267__auto__ < y__5268__auto__) ? x__5267__auto__ : y__5268__auto__);
})()));
});
thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMinMax$min$arity$3 = (function (_,p__9982,p__9983){var self__ = this;
var vec__9984 = p__9982;var ax = cljs.core.nth.call(null,vec__9984,0,null);var ay = cljs.core.nth.call(null,vec__9984,1,null);var vec__9985 = p__9983;var bx = cljs.core.nth.call(null,vec__9985,0,null);var by = cljs.core.nth.call(null,vec__9985,1,null);var ___$1 = this;return (new thi.ng.geom.core.vector.Vec2((function (){var x__5267__auto__ = (function (){var x__5267__auto__ = self__.x;var y__5268__auto__ = ax;return ((x__5267__auto__ < y__5268__auto__) ? x__5267__auto__ : y__5268__auto__);
})();var y__5268__auto__ = bx;return ((x__5267__auto__ < y__5268__auto__) ? x__5267__auto__ : y__5268__auto__);
})(),(function (){var x__5267__auto__ = (function (){var x__5267__auto__ = self__.y;var y__5268__auto__ = ay;return ((x__5267__auto__ < y__5268__auto__) ? x__5267__auto__ : y__5268__auto__);
})();var y__5268__auto__ = by;return ((x__5267__auto__ < y__5268__auto__) ? x__5267__auto__ : y__5268__auto__);
})()));
});
thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMinMax$max$arity$2 = (function (_,p__9986){var self__ = this;
var vec__9987 = p__9986;var ax = cljs.core.nth.call(null,vec__9987,0,null);var ay = cljs.core.nth.call(null,vec__9987,1,null);var ___$1 = this;return (new thi.ng.geom.core.vector.Vec2((function (){var x__5260__auto__ = self__.x;var y__5261__auto__ = ax;return ((x__5260__auto__ > y__5261__auto__) ? x__5260__auto__ : y__5261__auto__);
})(),(function (){var x__5260__auto__ = self__.y;var y__5261__auto__ = ay;return ((x__5260__auto__ > y__5261__auto__) ? x__5260__auto__ : y__5261__auto__);
})()));
});
thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMinMax$max$arity$3 = (function (_,p__9988,p__9989){var self__ = this;
var vec__9990 = p__9988;var ax = cljs.core.nth.call(null,vec__9990,0,null);var ay = cljs.core.nth.call(null,vec__9990,1,null);var vec__9991 = p__9989;var bx = cljs.core.nth.call(null,vec__9991,0,null);var by = cljs.core.nth.call(null,vec__9991,1,null);var ___$1 = this;return (new thi.ng.geom.core.vector.Vec2((function (){var x__5260__auto__ = (function (){var x__5260__auto__ = self__.x;var y__5261__auto__ = ax;return ((x__5260__auto__ > y__5261__auto__) ? x__5260__auto__ : y__5261__auto__);
})();var y__5261__auto__ = bx;return ((x__5260__auto__ > y__5261__auto__) ? x__5260__auto__ : y__5261__auto__);
})(),(function (){var x__5260__auto__ = (function (){var x__5260__auto__ = self__.y;var y__5261__auto__ = ay;return ((x__5260__auto__ > y__5261__auto__) ? x__5260__auto__ : y__5261__auto__);
})();var y__5261__auto__ = by;return ((x__5260__auto__ > y__5261__auto__) ? x__5260__auto__ : y__5261__auto__);
})()));
});
thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IComparable$_compare$arity$2 = (function (_,o){var self__ = this;
var ___$1 = this;if((o instanceof thi.ng.geom.core.vector.Vec2))
{var c = cljs.core.compare.call(null,self__.x,o.x);if((0 === c))
{return cljs.core.compare.call(null,self__.y,o.y);
} else
{return c;
}
} else
{var c = cljs.core.count.call(null,o);if((2 === c))
{return cljs.core.compare.call(null,o,___$1);
} else
{return (2 - c);
}
}
});
thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMagnitude$ = true;
thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMagnitude$mag$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return Math.sqrt.call(null,((self__.x * self__.x) + (self__.y * self__.y)));
});
thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMagnitude$mag_squared$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return ((self__.x * self__.x) + (self__.y * self__.y));
});
thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PInterpolate$ = true;
thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PInterpolate$mix$arity$2 = (function (_,p__9992){var self__ = this;
var vec__9993 = p__9992;var ax = cljs.core.nth.call(null,vec__9993,0,null);var ay = cljs.core.nth.call(null,vec__9993,1,null);var ___$1 = this;return (new thi.ng.geom.core.vector.Vec2((((ax - self__.x) * 0.5) + self__.x),(((ay - self__.y) * 0.5) + self__.y)));
});
thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PInterpolate$mix$arity$3 = (function (_,p__9994,t){var self__ = this;
var vec__9995 = p__9994;var ax = cljs.core.nth.call(null,vec__9995,0,null);var ay = cljs.core.nth.call(null,vec__9995,1,null);var ___$1 = this;return (new thi.ng.geom.core.vector.Vec2((((ax - self__.x) * t) + self__.x),(((ay - self__.y) * t) + self__.y)));
});
thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PInterpolate$mix$arity$6 = (function (_,p__9996,p__9997,p__9998,u,v){var self__ = this;
var vec__9999 = p__9996;var ax = cljs.core.nth.call(null,vec__9999,0,null);var ay = cljs.core.nth.call(null,vec__9999,1,null);var vec__10000 = p__9997;var bx = cljs.core.nth.call(null,vec__10000,0,null);var by = cljs.core.nth.call(null,vec__10000,1,null);var vec__10001 = p__9998;var cx = cljs.core.nth.call(null,vec__10001,0,null);var cy = cljs.core.nth.call(null,vec__10001,1,null);var ___$1 = this;var ux = (((ax - self__.x) * u) + self__.x);var uy = (((ay - self__.y) * u) + self__.y);return (new thi.ng.geom.core.vector.Vec2(((((((cx - bx) * u) + bx) - ux) * v) + ux),((((((cy - by) * u) + by) - uy) * v) + uy)));
});
thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PLimit$ = true;
thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PLimit$limit$arity$2 = (function (_,len){var self__ = this;
var ___$1 = this;if((thi.ng.geom.core.mag_squared.call(null,___$1) > (len * len)))
{return thi.ng.geom.core.normalize.call(null,___$1,len);
} else
{return ___$1;
}
});
thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PPolar$ = true;
thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PPolar$as_polar$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new thi.ng.geom.core.vector.Vec2(thi.ng.geom.core.mag.call(null,___$1),thi.ng.geom.core.heading_xy.call(null,___$1)));
});
thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PPolar$as_cartesian$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new thi.ng.geom.core.vector.Vec2((self__.x * Math.cos.call(null,self__.y)),(self__.x * Math.sin.call(null,self__.y))));
});
thi.ng.geom.core.vector.__GT_Vec2 = (function __GT_Vec2(x,y){return (new thi.ng.geom.core.vector.Vec2(x,y));
});

/**
* @constructor
*/
thi.ng.geom.core.vector.Vec3 = (function (x,y,z){
this.x = x;
this.y = y;
this.z = z;
this.cljs$lang$protocol_mask$partition0$ = 166224859;
this.cljs$lang$protocol_mask$partition1$ = 10240;
})
thi.ng.geom.core.vector.Vec3.cljs$lang$type = true;
thi.ng.geom.core.vector.Vec3.cljs$lang$ctorStr = "thi.ng.geom.core.vector/Vec3";
thi.ng.geom.core.vector.Vec3.cljs$lang$ctorPrWriter = (function (this__5520__auto__,writer__5521__auto__,opt__5522__auto__){return cljs.core._write.call(null,writer__5521__auto__,"thi.ng.geom.core.vector/Vec3");
});
thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PTransform$ = true;
thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PTransform$transform$arity$2 = (function (_,m){var self__ = this;
var ___$1 = this;return thi.ng.geom.core.transform_vector.call(null,m,___$1);
});
thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PRotate$ = true;
thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PRotate$rotate$arity$2 = (function (_,theta){var self__ = this;
var ___$1 = this;return thi.ng.geom.core.rotate_z.call(null,___$1,theta);
});
thi.ng.geom.core.vector.Vec3.prototype.toString = (function (){var self__ = this;
var _ = this;return [cljs.core.str("["),cljs.core.str(self__.x),cljs.core.str(" "),cljs.core.str(self__.y),cljs.core.str(" "),cljs.core.str(self__.z),cljs.core.str("]")].join('');
});
thi.ng.geom.core.vector.Vec3.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (_,k){var self__ = this;
var ___$1 = this;return thi.ng.geom.core.vector.swizzle3.call(null,___$1,k,null);
});
thi.ng.geom.core.vector.Vec3.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,k,nf){var self__ = this;
var ___$1 = this;return thi.ng.geom.core.vector.swizzle3.call(null,___$1,k,nf);
});
thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PDotProduct$ = true;
thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PDotProduct$dot$arity$2 = (function (_,p__10004){var self__ = this;
var vec__10005 = p__10004;var ax = cljs.core.nth.call(null,vec__10005,0,null);var ay = cljs.core.nth.call(null,vec__10005,1,null);var az = cljs.core.nth.call(null,vec__10005,2,null);var ___$1 = this;return (((self__.x * ax) + (self__.y * ay)) + (self__.z * az));
});
thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PNormalize$ = true;
thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PNormalize$normalize$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var l = Math.sqrt.call(null,(((self__.x * self__.x) + (self__.y * self__.y)) + (self__.z * self__.z)));if((l > 0))
{return (new thi.ng.geom.core.vector.Vec3((self__.x / l),(self__.y / l),(self__.z / l)));
} else
{return ___$1;
}
});
thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PNormalize$normalize$arity$2 = (function (_,len){var self__ = this;
var ___$1 = this;var l = Math.sqrt.call(null,(((self__.x * self__.x) + (self__.y * self__.y)) + (self__.z * self__.z)));if((l > 0))
{var l__$1 = (len / l);return (new thi.ng.geom.core.vector.Vec3((self__.x * l__$1),(self__.y * l__$1),(self__.z * l__$1)));
} else
{return ___$1;
}
});
thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PNormalize$normalized_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return thi.ng.common.math.core.delta_EQ_.call(null,1.0,thi.ng.geom.core.mag_squared.call(null,___$1));
});
thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PRotate3D$ = true;
thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PRotate3D$rotate_x$arity$2 = (function (_,theta){var self__ = this;
var ___$1 = this;var s = Math.sin.call(null,theta);var c = Math.cos.call(null,theta);return (new thi.ng.geom.core.vector.Vec3(self__.x,((self__.y * c) - (self__.z * s)),((self__.y * s) + (self__.z * c))));
});
thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PRotate3D$rotate_y$arity$2 = (function (_,theta){var self__ = this;
var ___$1 = this;var s = Math.sin.call(null,theta);var c = Math.cos.call(null,theta);return (new thi.ng.geom.core.vector.Vec3(((self__.x * c) + (self__.z * s)),self__.y,((self__.z * c) - (self__.x * s))));
});
thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PRotate3D$rotate_z$arity$2 = (function (_,theta){var self__ = this;
var ___$1 = this;var s = Math.sin.call(null,theta);var c = Math.cos.call(null,theta);return (new thi.ng.geom.core.vector.Vec3(((self__.x * c) - (self__.y * s)),((self__.x * s) + (self__.y * c)),self__.z));
});
thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PRotate3D$rotate_around_axis$arity$3 = (function (_,p__10006,theta){var self__ = this;
var vec__10007 = p__10006;var ax = cljs.core.nth.call(null,vec__10007,0,null);var ay = cljs.core.nth.call(null,vec__10007,1,null);var az = cljs.core.nth.call(null,vec__10007,2,null);var ___$1 = this;var ux = (ax * self__.x);var uy = (ax * self__.y);var uz = (ax * self__.z);var vx = (ay * self__.x);var vy = (ay * self__.y);var vz = (ay * self__.z);var wx = (az * self__.x);var wy = (az * self__.y);var wz = (az * self__.z);var ax2 = (ax * ax);var ay2 = (ay * ay);var az2 = (az * az);var s = Math.sin.call(null,theta);var c = Math.cos.call(null,theta);var uvw = ((ux + vy) + wz);return (new thi.ng.geom.core.vector.Vec3((((uvw * ax) + ((((ay2 + az2) * self__.x) - ((vy + wz) * ax)) * c)) + ((vz - wy) * s)),(((uvw * ay) + ((((ax2 + az2) * self__.y) - ((ux + wz) * ay)) * c)) + ((wx - uz) * s)),(((uvw * az) + ((((ax2 + ay2) * self__.z) - ((ux + vy) * az)) * c)) + ((uy - vx) * s))));
});
thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PReflect$ = true;
thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PReflect$reflect$arity$2 = (function (_,p__10008){var self__ = this;
var vec__10009 = p__10008;var rx = cljs.core.nth.call(null,vec__10009,0,null);var ry = cljs.core.nth.call(null,vec__10009,1,null);var rz = cljs.core.nth.call(null,vec__10009,2,null);var r = vec__10009;var ___$1 = this;var d = (thi.ng.geom.core.dot.call(null,___$1,r) * 2.0);return (new thi.ng.geom.core.vector.Vec3(((rx * d) - self__.x),((ry * d) - self__.y),((rz * d) - self__.z)));
});
thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PCrossProduct$ = true;
thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PCrossProduct$cross$arity$2 = (function (_,p__10010){var self__ = this;
var vec__10011 = p__10010;var ax = cljs.core.nth.call(null,vec__10011,0,null);var ay = cljs.core.nth.call(null,vec__10011,1,null);var az = cljs.core.nth.call(null,vec__10011,2,null);var ___$1 = this;return (new thi.ng.geom.core.vector.Vec3(((self__.y * az) - (ay * self__.z)),((self__.z * ax) - (az * self__.x)),((self__.x * ay) - (ax * self__.y))));
});
thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (_,k){var self__ = this;
var ___$1 = this;var G__10012 = (k | 0);if(cljs.core._EQ_.call(null,2,G__10012))
{return self__.z;
} else
{if(cljs.core._EQ_.call(null,1,G__10012))
{return self__.y;
} else
{if(cljs.core._EQ_.call(null,0,G__10012))
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
});
thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (_,k,nf){var self__ = this;
var ___$1 = this;var G__10013 = (k | 0);if(cljs.core._EQ_.call(null,2,G__10013))
{return self__.z;
} else
{if(cljs.core._EQ_.call(null,1,G__10013))
{return self__.y;
} else
{if(cljs.core._EQ_.call(null,0,G__10013))
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
});
thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (_,k,v){var self__ = this;
var ___$1 = this;var G__10014 = (k | 0);if(cljs.core._EQ_.call(null,2,G__10014))
{return (new thi.ng.geom.core.vector.Vec3(self__.x,self__.y,v));
} else
{if(cljs.core._EQ_.call(null,1,G__10014))
{return (new thi.ng.geom.core.vector.Vec3(self__.x,v,self__.z));
} else
{if(cljs.core._EQ_.call(null,0,G__10014))
{return (new thi.ng.geom.core.vector.Vec3(v,self__.y,self__.z));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return thi.ng.common.error.key_error_BANG_.call(null,k);
} else
{return null;
}
}
}
}
});
thi.ng.geom.core.vector.Vec3.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new thi.ng.geom.core.vector.Vec3(self__.x,self__.y,self__.z));
});
thi.ng.geom.core.vector.Vec3.prototype.cljs$core$INext$_next$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.cons.call(null,self__.y,cljs.core.cons.call(null,self__.z,null));
});
thi.ng.geom.core.vector.Vec3.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return 3;
});
thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IStack$_peek$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.z;
});
thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IStack$_pop$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new thi.ng.geom.core.vector.Vec2(self__.x,self__.y));
});
thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new thi.ng.geom.core.vector.Vec3(self__.z,self__.y,self__.x));
});
thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.hash_combine.call(null,cljs.core.hash_combine.call(null,cljs.core.hash.call(null,self__.x),cljs.core.hash.call(null,self__.y)),cljs.core.hash.call(null,self__.z));
});
thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,o){var self__ = this;
var ___$1 = this;if((o instanceof thi.ng.geom.core.vector.Vec3))
{return ((self__.x === o.x)) && ((self__.y === o.y)) && ((self__.z === o.z));
} else
{return (cljs.core.sequential_QMARK_.call(null,o)) && (cljs.core._EQ_.call(null,3,cljs.core.count.call(null,o))) && (cljs.core._EQ_.call(null,self__.x,cljs.core.nth.call(null,o,0))) && (cljs.core._EQ_.call(null,self__.y,cljs.core.nth.call(null,o,1))) && (cljs.core._EQ_.call(null,self__.z,cljs.core.nth.call(null,o,2)));
}
});
thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PHeading$ = true;
thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PHeading$heading$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return thi.ng.geom.core.heading_xy.call(null,___$1);
});
thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PHeading$heading_xy$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var t = Math.atan2.call(null,self__.y,self__.x);if((t < 0))
{return (t + thi.ng.common.math.core.TWO_PI);
} else
{return t;
}
});
thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PHeading$heading_xz$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var t = Math.atan2.call(null,self__.z,self__.x);if((t < 0))
{return (t + thi.ng.common.math.core.TWO_PI);
} else
{return t;
}
});
thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PHeading$heading_yz$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var t = Math.atan2.call(null,self__.z,self__.y);if((t < 0))
{return (t + thi.ng.common.math.core.TWO_PI);
} else
{return t;
}
});
thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PHeading$angle_between$arity$2 = (function (_,a){var self__ = this;
var ___$1 = this;return Math.acos.call(null,thi.ng.geom.core.dot.call(null,___$1,a));
});
thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PHeading$slope_xy$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (self__.y / self__.x);
});
thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PHeading$slope_xz$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (self__.x / self__.x);
});
thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PHeading$slope_yz$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (self__.z / self__.y);
});
thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PDistance$ = true;
thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PDistance$dist$arity$2 = (function (_,a){var self__ = this;
var ___$1 = this;return Math.sqrt.call(null,thi.ng.geom.core.dist_squared.call(null,___$1,a));
});
thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PDistance$dist_squared$arity$2 = (function (_,a){var self__ = this;
var ___$1 = this;var vec__10015 = (((a instanceof thi.ng.geom.core.vector.Vec3))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(self__.x - a.x),(self__.y - a.y),(self__.z - a.z)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(self__.x - cljs.core.nth.call(null,a,0)),(self__.y - cljs.core.nth.call(null,a,1)),(self__.z - cljs.core.nth.call(null,a,2,0.0))], null));var dx = cljs.core.nth.call(null,vec__10015,0,null);var dy = cljs.core.nth.call(null,vec__10015,1,null);var dz = cljs.core.nth.call(null,vec__10015,2,null);return (((dx * dx) + (dy * dy)) + (dz * dz));
});
thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){var self__ = this;
var coll__$1 = this;var acc = f.call(null,self__.x,self__.y);if(cljs.core.reduced_QMARK_.call(null,acc))
{return cljs.core.deref.call(null,acc);
} else
{var acc__$1 = f.call(null,acc,self__.z);if(cljs.core.reduced_QMARK_.call(null,acc__$1))
{return cljs.core.deref.call(null,acc__$1);
} else
{return acc__$1;
}
}
});
thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){var self__ = this;
var coll__$1 = this;var acc = f.call(null,start,self__.x);if(cljs.core.reduced_QMARK_.call(null,acc))
{return cljs.core.deref.call(null,acc);
} else
{var acc__$1 = f.call(null,acc,self__.y);if(cljs.core.reduced_QMARK_.call(null,acc__$1))
{return cljs.core.deref.call(null,acc__$1);
} else
{var acc__$2 = f.call(null,acc__$1,self__.z);if(cljs.core.reduced_QMARK_.call(null,acc__$2))
{return cljs.core.deref.call(null,acc__$2);
} else
{return acc__$2;
}
}
}
});
thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PInvert$ = true;
thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PInvert$invert$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new thi.ng.geom.core.vector.Vec3((- self__.x),(- self__.y),(- self__.z)));
});
thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$ = true;
thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$msub$arity$3 = (function (_,a,b){var self__ = this;
var ___$1 = this;return thi.ng.geom.core.vector.vec3_op_2.call(null,cljs.core._STAR_,cljs.core._,___$1,a,b,1.0,0.0);
});
thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$_STAR_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return ___$1;
});
thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$_STAR_$arity$2 = (function (_,a){var self__ = this;
var ___$1 = this;return thi.ng.geom.core.vector.vec3_op_1.call(null,cljs.core._STAR_,___$1,a,1.0);
});
thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$_STAR_$arity$3 = (function (_,a,b){var self__ = this;
var ___$1 = this;return thi.ng.geom.core.vector.vec3_op_2.call(null,cljs.core._STAR_,cljs.core._STAR_,___$1,a,b,1.0,1.0);
});
thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$_STAR_$arity$4 = (function (_,a,b,c){var self__ = this;
var ___$1 = this;return thi.ng.geom.core.vector.vec3_op_3.call(null,cljs.core._STAR_,___$1,a,b,c,1.0);
});
thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new thi.ng.geom.core.vector.Vec3((- self__.x),(- self__.y),(- self__.z)));
});
thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$_$arity$2 = (function (_,a){var self__ = this;
var ___$1 = this;return thi.ng.geom.core.vector.vec3_op_1.call(null,cljs.core._,___$1,a,0.0);
});
thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$_$arity$3 = (function (_,a,b){var self__ = this;
var ___$1 = this;return thi.ng.geom.core.vector.vec3_op_2.call(null,cljs.core._,cljs.core._,___$1,a,b,0.0,0.0);
});
thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$_$arity$4 = (function (_,a,b,c){var self__ = this;
var ___$1 = this;return thi.ng.geom.core.vector.vec3_op_3.call(null,cljs.core._,___$1,a,b,c,0.0);
});
thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$madd$arity$3 = (function (_,a,b){var self__ = this;
var ___$1 = this;return thi.ng.geom.core.vector.vec3_op_2.call(null,cljs.core._STAR_,cljs.core._PLUS_,___$1,a,b,1.0,0.0);
});
thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$addm$arity$3 = (function (_,a,b){var self__ = this;
var ___$1 = this;return thi.ng.geom.core.vector.vec3_op_2.call(null,cljs.core._PLUS_,cljs.core._STAR_,___$1,a,b,0.0,1.0);
});
thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$div$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new thi.ng.geom.core.vector.Vec3((1 / self__.x),(1 / self__.y),(1 / self__.z)));
});
thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$div$arity$2 = (function (_,a){var self__ = this;
var ___$1 = this;return thi.ng.geom.core.vector.vec3_op_1.call(null,cljs.core._SLASH_,___$1,a,0.0);
});
thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$div$arity$3 = (function (_,a,b){var self__ = this;
var ___$1 = this;return thi.ng.geom.core.vector.vec3_op_2.call(null,cljs.core._SLASH_,cljs.core._SLASH_,___$1,a,b,0.0,0.0);
});
thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$div$arity$4 = (function (_,a,b,c){var self__ = this;
var ___$1 = this;return thi.ng.geom.core.vector.vec3_op_3.call(null,cljs.core._SLASH_,___$1,a,b,c,0.0);
});
thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$_PLUS_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return ___$1;
});
thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$_PLUS_$arity$2 = (function (_,a){var self__ = this;
var ___$1 = this;return thi.ng.geom.core.vector.vec3_op_1.call(null,cljs.core._PLUS_,___$1,a,0.0);
});
thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$_PLUS_$arity$3 = (function (_,a,b){var self__ = this;
var ___$1 = this;return thi.ng.geom.core.vector.vec3_op_2.call(null,cljs.core._PLUS_,cljs.core._PLUS_,___$1,a,b,0.0,0.0);
});
thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$_PLUS_$arity$4 = (function (_,a,b,c){var self__ = this;
var ___$1 = this;return thi.ng.geom.core.vector.vec3_op_3.call(null,cljs.core._PLUS_,___$1,a,b,c,0.0);
});
thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$abs$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new thi.ng.geom.core.vector.Vec3(thi.ng.common.math.core.abs.call(null,self__.x),thi.ng.common.math.core.abs.call(null,self__.y),thi.ng.common.math.core.abs.call(null,self__.z)));
});
thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$subm$arity$3 = (function (_,a,b){var self__ = this;
var ___$1 = this;return thi.ng.geom.core.vector.vec3_op_2.call(null,cljs.core._,cljs.core._STAR_,___$1,a,b,0.0,1.0);
});
thi.ng.geom.core.vector.Vec3.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.x;
});
thi.ng.geom.core.vector.Vec3.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.cons.call(null,self__.y,cljs.core.cons.call(null,self__.z,null));
});
thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PTranslate$ = true;
thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PTranslate$translate$arity$2 = (function (_,a){var self__ = this;
var ___$1 = this;return thi.ng.geom.core.vector.vec3_op_1.call(null,cljs.core._PLUS_,___$1,a,0.0);
});
thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PTranslate$translate$arity$3 = (function (_,a,b){var self__ = this;
var ___$1 = this;return thi.ng.geom.core.vector.vec3_op_2.call(null,cljs.core._PLUS_,cljs.core._PLUS_,___$1,a,b,0.0,0.0);
});
thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PTranslate$translate$arity$4 = (function (_,a,b,c){var self__ = this;
var ___$1 = this;return thi.ng.geom.core.vector.vec3_op_3.call(null,cljs.core._PLUS_,___$1,a,b,c,0.0);
});
thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){var self__ = this;
var ___$1 = this;return !((new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [0,null,new cljs.core.Keyword(null,"y","y",1013904363),null,1,null,new cljs.core.Keyword(null,"z","z",1013904364),null,2,null,new cljs.core.Keyword(null,"x","x",1013904362),null], null), null).call(null,k) == null));
});
thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (_,k,v){var self__ = this;
var ___$1 = this;return thi.ng.geom.core.vector.swizzle3_assoc.call(null,___$1,k,v);
});
thi.ng.geom.core.vector.Vec3.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return ___$1;
});
thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PScale$ = true;
thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PScale$scale$arity$2 = (function (_,a){var self__ = this;
var ___$1 = this;return thi.ng.geom.core.vector.vec3_op_1.call(null,cljs.core._STAR_,___$1,a,1.0);
});
thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PScale$scale$arity$3 = (function (_,a,b){var self__ = this;
var ___$1 = this;return thi.ng.geom.core.vector.vec3_op_2.call(null,cljs.core._STAR_,cljs.core._STAR_,___$1,a,b,1.0,1.0);
});
thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PScale$scale$arity$4 = (function (_,a,b,c){var self__ = this;
var ___$1 = this;return thi.ng.geom.core.vector.vec3_op_3.call(null,cljs.core._STAR_,___$1,a,b,c,1.0);
});
thi.ng.geom.core.vector.Vec3.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,w){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.x,self__.y,self__.z,w], null);
});
thi.ng.geom.core.vector.Vec3.prototype.call = (function() {
var G__10038 = null;
var G__10038__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var _ = self____$1;return thi.ng.geom.core.vector.swizzle3.call(null,_,k,null);
});
var G__10038__3 = (function (self__,k,nf){var self__ = this;
var self____$1 = this;var _ = self____$1;return thi.ng.geom.core.vector.swizzle3.call(null,_,k,nf);
});
G__10038 = function(self__,k,nf){
switch(arguments.length){
case 2:
return G__10038__2.call(this,self__,k);
case 3:
return G__10038__3.call(this,self__,k,nf);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__10038;
})()
;
thi.ng.geom.core.vector.Vec3.prototype.apply = (function (self__,args10003){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args10003)));
});
thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var _ = this;return thi.ng.geom.core.vector.swizzle3.call(null,_,k,null);
});
thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,nf){var self__ = this;
var _ = this;return thi.ng.geom.core.vector.swizzle3.call(null,_,k,nf);
});
thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMinMax$ = true;
thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMinMax$min$arity$2 = (function (_,p__10016){var self__ = this;
var vec__10017 = p__10016;var ax = cljs.core.nth.call(null,vec__10017,0,null);var ay = cljs.core.nth.call(null,vec__10017,1,null);var az = cljs.core.nth.call(null,vec__10017,2,null);var ___$1 = this;return (new thi.ng.geom.core.vector.Vec3((function (){var x__5267__auto__ = self__.x;var y__5268__auto__ = ax;return ((x__5267__auto__ < y__5268__auto__) ? x__5267__auto__ : y__5268__auto__);
})(),(function (){var x__5267__auto__ = self__.y;var y__5268__auto__ = ay;return ((x__5267__auto__ < y__5268__auto__) ? x__5267__auto__ : y__5268__auto__);
})(),(function (){var x__5267__auto__ = self__.z;var y__5268__auto__ = az;return ((x__5267__auto__ < y__5268__auto__) ? x__5267__auto__ : y__5268__auto__);
})()));
});
thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMinMax$min$arity$3 = (function (_,p__10018,p__10019){var self__ = this;
var vec__10020 = p__10018;var ax = cljs.core.nth.call(null,vec__10020,0,null);var ay = cljs.core.nth.call(null,vec__10020,1,null);var az = cljs.core.nth.call(null,vec__10020,2,null);var vec__10021 = p__10019;var bx = cljs.core.nth.call(null,vec__10021,0,null);var by = cljs.core.nth.call(null,vec__10021,1,null);var bz = cljs.core.nth.call(null,vec__10021,2,null);var ___$1 = this;return (new thi.ng.geom.core.vector.Vec3((function (){var x__5267__auto__ = (function (){var x__5267__auto__ = self__.x;var y__5268__auto__ = ax;return ((x__5267__auto__ < y__5268__auto__) ? x__5267__auto__ : y__5268__auto__);
})();var y__5268__auto__ = bx;return ((x__5267__auto__ < y__5268__auto__) ? x__5267__auto__ : y__5268__auto__);
})(),(function (){var x__5267__auto__ = (function (){var x__5267__auto__ = self__.y;var y__5268__auto__ = ay;return ((x__5267__auto__ < y__5268__auto__) ? x__5267__auto__ : y__5268__auto__);
})();var y__5268__auto__ = by;return ((x__5267__auto__ < y__5268__auto__) ? x__5267__auto__ : y__5268__auto__);
})(),(function (){var x__5267__auto__ = (function (){var x__5267__auto__ = self__.z;var y__5268__auto__ = az;return ((x__5267__auto__ < y__5268__auto__) ? x__5267__auto__ : y__5268__auto__);
})();var y__5268__auto__ = bz;return ((x__5267__auto__ < y__5268__auto__) ? x__5267__auto__ : y__5268__auto__);
})()));
});
thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMinMax$max$arity$2 = (function (_,p__10022){var self__ = this;
var vec__10023 = p__10022;var ax = cljs.core.nth.call(null,vec__10023,0,null);var ay = cljs.core.nth.call(null,vec__10023,1,null);var az = cljs.core.nth.call(null,vec__10023,2,null);var ___$1 = this;return (new thi.ng.geom.core.vector.Vec3((function (){var x__5260__auto__ = self__.x;var y__5261__auto__ = ax;return ((x__5260__auto__ > y__5261__auto__) ? x__5260__auto__ : y__5261__auto__);
})(),(function (){var x__5260__auto__ = self__.y;var y__5261__auto__ = ay;return ((x__5260__auto__ > y__5261__auto__) ? x__5260__auto__ : y__5261__auto__);
})(),(function (){var x__5260__auto__ = self__.z;var y__5261__auto__ = az;return ((x__5260__auto__ > y__5261__auto__) ? x__5260__auto__ : y__5261__auto__);
})()));
});
thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMinMax$max$arity$3 = (function (_,p__10024,p__10025){var self__ = this;
var vec__10026 = p__10024;var ax = cljs.core.nth.call(null,vec__10026,0,null);var ay = cljs.core.nth.call(null,vec__10026,1,null);var az = cljs.core.nth.call(null,vec__10026,2,null);var vec__10027 = p__10025;var bx = cljs.core.nth.call(null,vec__10027,0,null);var by = cljs.core.nth.call(null,vec__10027,1,null);var bz = cljs.core.nth.call(null,vec__10027,2,null);var ___$1 = this;return (new thi.ng.geom.core.vector.Vec3((function (){var x__5260__auto__ = (function (){var x__5260__auto__ = self__.x;var y__5261__auto__ = ax;return ((x__5260__auto__ > y__5261__auto__) ? x__5260__auto__ : y__5261__auto__);
})();var y__5261__auto__ = bx;return ((x__5260__auto__ > y__5261__auto__) ? x__5260__auto__ : y__5261__auto__);
})(),(function (){var x__5260__auto__ = (function (){var x__5260__auto__ = self__.y;var y__5261__auto__ = ay;return ((x__5260__auto__ > y__5261__auto__) ? x__5260__auto__ : y__5261__auto__);
})();var y__5261__auto__ = by;return ((x__5260__auto__ > y__5261__auto__) ? x__5260__auto__ : y__5261__auto__);
})(),(function (){var x__5260__auto__ = (function (){var x__5260__auto__ = self__.z;var y__5261__auto__ = az;return ((x__5260__auto__ > y__5261__auto__) ? x__5260__auto__ : y__5261__auto__);
})();var y__5261__auto__ = bz;return ((x__5260__auto__ > y__5261__auto__) ? x__5260__auto__ : y__5261__auto__);
})()));
});
thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IComparable$_compare$arity$2 = (function (_,o){var self__ = this;
var ___$1 = this;if((o instanceof thi.ng.geom.core.vector.Vec3))
{var c = cljs.core.compare.call(null,self__.x,o.x);if((0 === c))
{var c__$1 = cljs.core.compare.call(null,self__.y,o.y);if((0 === c__$1))
{return cljs.core.compare.call(null,self__.z,o.z);
} else
{return c__$1;
}
} else
{return c;
}
} else
{var c = cljs.core.count.call(null,o);if((3 === c))
{return cljs.core.compare.call(null,o,___$1);
} else
{return (3 - c);
}
}
});
thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMagnitude$ = true;
thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMagnitude$mag$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return Math.sqrt.call(null,(((self__.x * self__.x) + (self__.y * self__.y)) + (self__.z * self__.z)));
});
thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMagnitude$mag_squared$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (((self__.x * self__.x) + (self__.y * self__.y)) + (self__.z * self__.z));
});
thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PInterpolate$ = true;
thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PInterpolate$mix$arity$2 = (function (_,p__10028){var self__ = this;
var vec__10029 = p__10028;var ax = cljs.core.nth.call(null,vec__10029,0,null);var ay = cljs.core.nth.call(null,vec__10029,1,null);var az = cljs.core.nth.call(null,vec__10029,2,null);var ___$1 = this;return (new thi.ng.geom.core.vector.Vec3((((ax - self__.x) * 0.5) + self__.x),(((ay - self__.y) * 0.5) + self__.y),(((az - self__.z) * 0.5) + self__.z)));
});
thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PInterpolate$mix$arity$3 = (function (_,p__10030,t){var self__ = this;
var vec__10031 = p__10030;var ax = cljs.core.nth.call(null,vec__10031,0,null);var ay = cljs.core.nth.call(null,vec__10031,1,null);var az = cljs.core.nth.call(null,vec__10031,2,null);var ___$1 = this;return (new thi.ng.geom.core.vector.Vec3((((ax - self__.x) * t) + self__.x),(((ay - self__.y) * t) + self__.y),(((az - self__.z) * t) + self__.z)));
});
thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PInterpolate$mix$arity$6 = (function (_,p__10032,p__10033,p__10034,u,v){var self__ = this;
var vec__10035 = p__10032;var ax = cljs.core.nth.call(null,vec__10035,0,null);var ay = cljs.core.nth.call(null,vec__10035,1,null);var az = cljs.core.nth.call(null,vec__10035,2,null);var vec__10036 = p__10033;var bx = cljs.core.nth.call(null,vec__10036,0,null);var by = cljs.core.nth.call(null,vec__10036,1,null);var bz = cljs.core.nth.call(null,vec__10036,2,null);var vec__10037 = p__10034;var cx = cljs.core.nth.call(null,vec__10037,0,null);var cy = cljs.core.nth.call(null,vec__10037,1,null);var cz = cljs.core.nth.call(null,vec__10037,2,null);var ___$1 = this;var ux = (((ax - self__.x) * u) + self__.x);var uy = (((ay - self__.y) * u) + self__.y);var uz = (((az - self__.z) * u) + self__.z);return (new thi.ng.geom.core.vector.Vec3(((((((cx - bx) * u) + bx) - ux) * v) + ux),((((((cy - by) * u) + by) - uy) * v) + uy),((((((cz - bz) * u) + bz) - uz) * v) + uz)));
});
thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PLimit$ = true;
thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PLimit$limit$arity$2 = (function (_,len){var self__ = this;
var ___$1 = this;if((thi.ng.geom.core.mag_squared.call(null,___$1) > (len * len)))
{return thi.ng.geom.core.normalize.call(null,___$1,len);
} else
{return ___$1;
}
});
thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PPolar$ = true;
thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PPolar$as_polar$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var r = thi.ng.geom.core.mag.call(null,___$1);var theta = Math.atan2.call(null,self__.y,self__.x);var phi = Math.acos.call(null,(self__.z / r));return (new thi.ng.geom.core.vector.Vec3(r,(((theta < 0))?(thi.ng.common.math.core.TWO_PI + theta):theta),phi));
});
thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PPolar$as_cartesian$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var rsphi = (Math.sin.call(null,self__.z) * self__.x);return (new thi.ng.geom.core.vector.Vec3((Math.cos.call(null,self__.y) * rsphi),(Math.sin.call(null,self__.y) * rsphi),(Math.cos.call(null,self__.z) * self__.x)));
});
thi.ng.geom.core.vector.__GT_Vec3 = (function __GT_Vec3(x,y,z){return (new thi.ng.geom.core.vector.Vec3(x,y,z));
});
thi.ng.geom.core.vector.vec2_op_seq = (function vec2_op_seq(op,acc,xs){var ax = acc.x;var ay = acc.y;var xs__$1 = xs;while(true){
if(cljs.core.truth_(xs__$1))
{var v = cljs.core.first.call(null,xs__$1);{
var G__10039 = op.call(null,ax,v.x);
var G__10040 = op.call(null,ay,v.y);
var G__10041 = cljs.core.next.call(null,xs__$1);
ax = G__10039;
ay = G__10040;
xs__$1 = G__10041;
continue;
}
} else
{return (new thi.ng.geom.core.vector.Vec2(ax,ay));
}
break;
}
});
thi.ng.geom.core.vector.vec2_op_seq2 = (function vec2_op_seq2(op,op2,acc,as,b){var ax = acc.x;var ay = acc.y;var as__$1 = as;while(true){
if(cljs.core.truth_(as__$1))
{var v = cljs.core.first.call(null,as__$1);{
var G__10044 = op.call(null,ax,v.x);
var G__10045 = op.call(null,ay,v.y);
var G__10046 = cljs.core.next.call(null,as__$1);
ax = G__10044;
ay = G__10045;
as__$1 = G__10046;
continue;
}
} else
{var vec__10043 = ((typeof b === 'number')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,b], null):b);var bx = cljs.core.nth.call(null,vec__10043,0,null);var by = cljs.core.nth.call(null,vec__10043,1,null);return (new thi.ng.geom.core.vector.Vec2(op2.call(null,ax,bx),op2.call(null,ay,by)));
}
break;
}
});
thi.ng.geom.core.vector.vec2_op_1 = (function vec2_op_1(op,_,a,d){if((a instanceof thi.ng.geom.core.vector.Vec2))
{return (new thi.ng.geom.core.vector.Vec2(op.call(null,_.x,a.x),op.call(null,_.y,a.y)));
} else
{if(typeof a === 'number')
{return (new thi.ng.geom.core.vector.Vec2(op.call(null,_.x,a),op.call(null,_.y,a)));
} else
{if((cljs.core.first.call(null,a) instanceof thi.ng.geom.core.vector.Vec2))
{return thi.ng.geom.core.vector.vec2_op_seq.call(null,op,_,a);
} else
{return (new thi.ng.geom.core.vector.Vec2(op.call(null,_.x,cljs.core.nth.call(null,a,0,d)),op.call(null,_.y,cljs.core.nth.call(null,a,1,d))));
}
}
}
});
thi.ng.geom.core.vector.vec2_op_2 = (function vec2_op_2(op,_,a,b,d1,d2){if((a instanceof thi.ng.geom.core.vector.Vec2))
{if((b instanceof thi.ng.geom.core.vector.Vec2))
{return (new thi.ng.geom.core.vector.Vec2(op.call(null,op.call(null,_.x,a.x),b.x),op.call(null,op.call(null,_.y,a.y),b.y)));
} else
{if(typeof b === 'number')
{return (new thi.ng.geom.core.vector.Vec2(op.call(null,op.call(null,_.x,a.x),b),op.call(null,op.call(null,_.y,a.y),b)));
} else
{return (new thi.ng.geom.core.vector.Vec2(op.call(null,op.call(null,_.x,a.x),cljs.core.nth.call(null,b,0,d2)),op.call(null,op.call(null,_.y,a.y),cljs.core.nth.call(null,b,1,d2))));
}
}
} else
{var an_QMARK_ = typeof a === 'number';var bn_QMARK_ = typeof b === 'number';if((an_QMARK_) && (bn_QMARK_))
{return (new thi.ng.geom.core.vector.Vec2(op.call(null,_.x,a),op.call(null,_.y,b)));
} else
{var vec__10049 = ((an_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,a], null):a);var ax = cljs.core.nth.call(null,vec__10049,0,null);var ay = cljs.core.nth.call(null,vec__10049,1,null);var vec__10050 = ((bn_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,b], null):b);var bx = cljs.core.nth.call(null,vec__10050,0,null);var by = cljs.core.nth.call(null,vec__10050,1,null);return (new thi.ng.geom.core.vector.Vec2(op.call(null,op.call(null,_.x,(function (){var or__4953__auto__ = ax;if(cljs.core.truth_(or__4953__auto__))
{return or__4953__auto__;
} else
{return d1;
}
})()),(function (){var or__4953__auto__ = bx;if(cljs.core.truth_(or__4953__auto__))
{return or__4953__auto__;
} else
{return d2;
}
})()),op.call(null,op.call(null,_.y,(function (){var or__4953__auto__ = ay;if(cljs.core.truth_(or__4953__auto__))
{return or__4953__auto__;
} else
{return d1;
}
})()),(function (){var or__4953__auto__ = by;if(cljs.core.truth_(or__4953__auto__))
{return or__4953__auto__;
} else
{return d2;
}
})())));
}
}
});
/**
* Similar to vec2-op-2 but takes 2 fn args and handles case with
* a & b being both numbers differently.
*/
thi.ng.geom.core.vector.vec2_op_2_STAR_ = (function vec2_op_2_STAR_(op,op2,_,a,b,d1,d2){if((a instanceof thi.ng.geom.core.vector.Vec2))
{if((b instanceof thi.ng.geom.core.vector.Vec2))
{return (new thi.ng.geom.core.vector.Vec2(op2.call(null,op.call(null,_.x,a.x),b.x),op2.call(null,op.call(null,_.y,a.y),b.y)));
} else
{if(typeof b === 'number')
{return (new thi.ng.geom.core.vector.Vec2(op2.call(null,op.call(null,_.x,a.x),b),op2.call(null,op.call(null,_.y,a.y),b)));
} else
{return (new thi.ng.geom.core.vector.Vec2(op2.call(null,op.call(null,_.x,a.x),cljs.core.nth.call(null,b,0,d2)),op2.call(null,op.call(null,_.y,a.y),cljs.core.nth.call(null,b,1,d2))));
}
}
} else
{if((cljs.core.sequential_QMARK_.call(null,a)) && ((cljs.core.first.call(null,a) instanceof thi.ng.geom.core.vector.Vec2)))
{return thi.ng.geom.core.vector.vec2_op_seq2.call(null,op,op2,_,a,b);
} else
{var an_QMARK_ = typeof a === 'number';var bn_QMARK_ = typeof b === 'number';if((an_QMARK_) && (bn_QMARK_))
{return (new thi.ng.geom.core.vector.Vec2(op2.call(null,op.call(null,_.x,a),b),op2.call(null,op.call(null,_.y,a),b)));
} else
{var vec__10053 = ((an_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,a], null):a);var ax = cljs.core.nth.call(null,vec__10053,0,null);var ay = cljs.core.nth.call(null,vec__10053,1,null);var vec__10054 = ((bn_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,b], null):b);var bx = cljs.core.nth.call(null,vec__10054,0,null);var by = cljs.core.nth.call(null,vec__10054,1,null);return (new thi.ng.geom.core.vector.Vec2(op2.call(null,op.call(null,_.x,(function (){var or__4953__auto__ = ax;if(cljs.core.truth_(or__4953__auto__))
{return or__4953__auto__;
} else
{return d1;
}
})()),(function (){var or__4953__auto__ = bx;if(cljs.core.truth_(or__4953__auto__))
{return or__4953__auto__;
} else
{return d2;
}
})()),op2.call(null,op.call(null,_.y,(function (){var or__4953__auto__ = ay;if(cljs.core.truth_(or__4953__auto__))
{return or__4953__auto__;
} else
{return d1;
}
})()),(function (){var or__4953__auto__ = by;if(cljs.core.truth_(or__4953__auto__))
{return or__4953__auto__;
} else
{return d2;
}
})())));
}
}
}
});
thi.ng.geom.core.vector.vec2_op_3 = (function vec2_op_3(op,_,a,b,c,d){if((a instanceof thi.ng.geom.core.vector.Vec2))
{if((b instanceof thi.ng.geom.core.vector.Vec2))
{if((c instanceof thi.ng.geom.core.vector.Vec2))
{return (new thi.ng.geom.core.vector.Vec2(op.call(null,op.call(null,op.call(null,_.x,a.x),b.x),c.x),op.call(null,op.call(null,op.call(null,_.y,a.y),b.y),c.y)));
} else
{if(typeof c === 'number')
{return (new thi.ng.geom.core.vector.Vec2(op.call(null,op.call(null,op.call(null,_.x,a.x),b.x),c),op.call(null,op.call(null,op.call(null,_.y,a.y),b.y),c)));
} else
{return (new thi.ng.geom.core.vector.Vec2(op.call(null,op.call(null,op.call(null,_.x,a.x),b.x),cljs.core.nth.call(null,c,0,d)),op.call(null,op.call(null,op.call(null,_.y,a.y),b.y),cljs.core.nth.call(null,c,1,d))));
}
}
} else
{var vec__10060 = ((typeof b === 'number')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,b], null):b);var bx = cljs.core.nth.call(null,vec__10060,0,null);var by = cljs.core.nth.call(null,vec__10060,1,null);var vec__10061 = ((typeof c === 'number')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,c], null):c);var cx = cljs.core.nth.call(null,vec__10061,0,null);var cy = cljs.core.nth.call(null,vec__10061,1,null);return (new thi.ng.geom.core.vector.Vec2(op.call(null,op.call(null,op.call(null,_.x,a.x),(function (){var or__4953__auto__ = bx;if(cljs.core.truth_(or__4953__auto__))
{return or__4953__auto__;
} else
{return d;
}
})()),(function (){var or__4953__auto__ = cx;if(cljs.core.truth_(or__4953__auto__))
{return or__4953__auto__;
} else
{return d;
}
})()),op.call(null,op.call(null,op.call(null,_.y,a.y),(function (){var or__4953__auto__ = by;if(cljs.core.truth_(or__4953__auto__))
{return or__4953__auto__;
} else
{return d;
}
})()),(function (){var or__4953__auto__ = cy;if(cljs.core.truth_(or__4953__auto__))
{return or__4953__auto__;
} else
{return d;
}
})())));
}
} else
{var vec__10062 = ((typeof a === 'number')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,a], null):a);var ax = cljs.core.nth.call(null,vec__10062,0,null);var ay = cljs.core.nth.call(null,vec__10062,1,null);var vec__10063 = ((typeof b === 'number')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,b], null):b);var bx = cljs.core.nth.call(null,vec__10063,0,null);var by = cljs.core.nth.call(null,vec__10063,1,null);var vec__10064 = ((typeof c === 'number')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,c], null):c);var cx = cljs.core.nth.call(null,vec__10064,0,null);var cy = cljs.core.nth.call(null,vec__10064,1,null);return (new thi.ng.geom.core.vector.Vec2(op.call(null,op.call(null,op.call(null,_.x,(function (){var or__4953__auto__ = ax;if(cljs.core.truth_(or__4953__auto__))
{return or__4953__auto__;
} else
{return d;
}
})()),(function (){var or__4953__auto__ = bx;if(cljs.core.truth_(or__4953__auto__))
{return or__4953__auto__;
} else
{return d;
}
})()),(function (){var or__4953__auto__ = cx;if(cljs.core.truth_(or__4953__auto__))
{return or__4953__auto__;
} else
{return d;
}
})()),op.call(null,op.call(null,op.call(null,_.y,(function (){var or__4953__auto__ = ay;if(cljs.core.truth_(or__4953__auto__))
{return or__4953__auto__;
} else
{return d;
}
})()),(function (){var or__4953__auto__ = by;if(cljs.core.truth_(or__4953__auto__))
{return or__4953__auto__;
} else
{return d;
}
})()),(function (){var or__4953__auto__ = cy;if(cljs.core.truth_(or__4953__auto__))
{return or__4953__auto__;
} else
{return d;
}
})())));
}
});
thi.ng.geom.core.vector.vec3_op_seq = (function vec3_op_seq(op,acc,xs){var ax = acc.x;var ay = acc.y;var az = acc.z;var xs__$1 = xs;while(true){
if(cljs.core.truth_(xs__$1))
{var v = cljs.core.first.call(null,xs__$1);{
var G__10065 = op.call(null,ax,v.x);
var G__10066 = op.call(null,ay,v.y);
var G__10067 = op.call(null,az,v.z);
var G__10068 = cljs.core.next.call(null,xs__$1);
ax = G__10065;
ay = G__10066;
az = G__10067;
xs__$1 = G__10068;
continue;
}
} else
{return (new thi.ng.geom.core.vector.Vec3(ax,ay,az));
}
break;
}
});
thi.ng.geom.core.vector.vec3_op_seq2 = (function vec3_op_seq2(op,op2,acc,as,b){var ax = acc.x;var ay = acc.y;var az = acc.z;var as__$1 = as;while(true){
if(cljs.core.truth_(as__$1))
{var v = cljs.core.first.call(null,as__$1);{
var G__10071 = op.call(null,ax,v.x);
var G__10072 = op.call(null,ay,v.y);
var G__10073 = op.call(null,az,v.z);
var G__10074 = cljs.core.next.call(null,as__$1);
ax = G__10071;
ay = G__10072;
az = G__10073;
as__$1 = G__10074;
continue;
}
} else
{var vec__10070 = ((typeof b === 'number')?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,b,b], null):b);var bx = cljs.core.nth.call(null,vec__10070,0,null);var by = cljs.core.nth.call(null,vec__10070,1,null);var bz = cljs.core.nth.call(null,vec__10070,2,null);return (new thi.ng.geom.core.vector.Vec3(op2.call(null,ax,bx),op2.call(null,ay,by),op2.call(null,az,bz)));
}
break;
}
});
thi.ng.geom.core.vector.vec3_op_1 = (function vec3_op_1(op,_,a,d){if((a instanceof thi.ng.geom.core.vector.Vec3))
{return (new thi.ng.geom.core.vector.Vec3(op.call(null,_.x,a.x),op.call(null,_.y,a.y),op.call(null,_.z,a.z)));
} else
{if(typeof a === 'number')
{return (new thi.ng.geom.core.vector.Vec3(op.call(null,_.x,a),op.call(null,_.y,a),op.call(null,_.z,a)));
} else
{if((cljs.core.first.call(null,a) instanceof thi.ng.geom.core.vector.Vec3))
{return thi.ng.geom.core.vector.vec3_op_seq.call(null,op,_,a);
} else
{return (new thi.ng.geom.core.vector.Vec3(op.call(null,_.x,cljs.core.nth.call(null,a,0,d)),op.call(null,_.y,cljs.core.nth.call(null,a,1,d)),op.call(null,_.z,cljs.core.nth.call(null,a,2,d))));
}
}
}
});
thi.ng.geom.core.vector.vec3_op_2 = (function vec3_op_2(op,op2,_,a,b,d1,d2){if((a instanceof thi.ng.geom.core.vector.Vec3))
{if((b instanceof thi.ng.geom.core.vector.Vec3))
{return (new thi.ng.geom.core.vector.Vec3(op2.call(null,op.call(null,_.x,a.x),b.x),op2.call(null,op.call(null,_.y,a.y),b.y),op2.call(null,op.call(null,_.z,a.z),b.z)));
} else
{if(typeof b === 'number')
{return (new thi.ng.geom.core.vector.Vec3(op2.call(null,op.call(null,_.x,a.x),b),op2.call(null,op.call(null,_.y,a.y),b),op2.call(null,op.call(null,_.z,a.z),b)));
} else
{return (new thi.ng.geom.core.vector.Vec3(op2.call(null,op.call(null,_.x,a.x),cljs.core.nth.call(null,b,0,d2)),op2.call(null,op.call(null,_.y,a.y),cljs.core.nth.call(null,b,1,d2)),op2.call(null,op.call(null,_.z,a.z),cljs.core.nth.call(null,b,2,d2))));
}
}
} else
{if((cljs.core.sequential_QMARK_.call(null,a)) && ((cljs.core.first.call(null,a) instanceof thi.ng.geom.core.vector.Vec3)))
{return thi.ng.geom.core.vector.vec3_op_seq2.call(null,op,op2,_,a,b);
} else
{var vec__10077 = ((typeof a === 'number')?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,a,a], null):a);var ax = cljs.core.nth.call(null,vec__10077,0,null);var ay = cljs.core.nth.call(null,vec__10077,1,null);var az = cljs.core.nth.call(null,vec__10077,2,null);var vec__10078 = ((typeof b === 'number')?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,b,b], null):b);var bx = cljs.core.nth.call(null,vec__10078,0,null);var by = cljs.core.nth.call(null,vec__10078,1,null);var bz = cljs.core.nth.call(null,vec__10078,2,null);return (new thi.ng.geom.core.vector.Vec3(op2.call(null,op.call(null,_.x,(function (){var or__4953__auto__ = ax;if(cljs.core.truth_(or__4953__auto__))
{return or__4953__auto__;
} else
{return d1;
}
})()),(function (){var or__4953__auto__ = bx;if(cljs.core.truth_(or__4953__auto__))
{return or__4953__auto__;
} else
{return d2;
}
})()),op2.call(null,op.call(null,_.y,(function (){var or__4953__auto__ = ay;if(cljs.core.truth_(or__4953__auto__))
{return or__4953__auto__;
} else
{return d1;
}
})()),(function (){var or__4953__auto__ = by;if(cljs.core.truth_(or__4953__auto__))
{return or__4953__auto__;
} else
{return d2;
}
})()),op2.call(null,op.call(null,_.z,(function (){var or__4953__auto__ = az;if(cljs.core.truth_(or__4953__auto__))
{return or__4953__auto__;
} else
{return d1;
}
})()),(function (){var or__4953__auto__ = bz;if(cljs.core.truth_(or__4953__auto__))
{return or__4953__auto__;
} else
{return d2;
}
})())));
}
}
});
thi.ng.geom.core.vector.vec3_op_3 = (function vec3_op_3(op,_,a,b,c,d){if((a instanceof thi.ng.geom.core.vector.Vec3))
{if((b instanceof thi.ng.geom.core.vector.Vec3))
{if((c instanceof thi.ng.geom.core.vector.Vec3))
{return (new thi.ng.geom.core.vector.Vec3(op.call(null,op.call(null,op.call(null,_.x,a.x),b.x),c.x),op.call(null,op.call(null,op.call(null,_.y,a.y),b.y),c.y),op.call(null,op.call(null,op.call(null,_.z,a.z),b.z),c.z)));
} else
{if(typeof c === 'number')
{return (new thi.ng.geom.core.vector.Vec3(op.call(null,op.call(null,op.call(null,_.x,a.x),b.x),c),op.call(null,op.call(null,op.call(null,_.y,a.y),b.y),c),op.call(null,op.call(null,op.call(null,_.z,a.z),b.z),c)));
} else
{return (new thi.ng.geom.core.vector.Vec3(op.call(null,op.call(null,op.call(null,_.x,a.x),b.x),cljs.core.nth.call(null,c,0,d)),op.call(null,op.call(null,op.call(null,_.y,a.y),b.y),cljs.core.nth.call(null,c,1,d)),op.call(null,op.call(null,op.call(null,_.z,a.z),b.z),cljs.core.nth.call(null,c,2,d))));
}
}
} else
{var vec__10084 = ((typeof b === 'number')?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,b,b], null):b);var bx = cljs.core.nth.call(null,vec__10084,0,null);var by = cljs.core.nth.call(null,vec__10084,1,null);var bz = cljs.core.nth.call(null,vec__10084,2,null);var vec__10085 = ((typeof c === 'number')?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,c,c], null):c);var cx = cljs.core.nth.call(null,vec__10085,0,null);var cy = cljs.core.nth.call(null,vec__10085,1,null);var cz = cljs.core.nth.call(null,vec__10085,2,null);return (new thi.ng.geom.core.vector.Vec3(op.call(null,op.call(null,op.call(null,_.x,a.x),(function (){var or__4953__auto__ = bx;if(cljs.core.truth_(or__4953__auto__))
{return or__4953__auto__;
} else
{return d;
}
})()),(function (){var or__4953__auto__ = cx;if(cljs.core.truth_(or__4953__auto__))
{return or__4953__auto__;
} else
{return d;
}
})()),op.call(null,op.call(null,op.call(null,_.y,a.y),(function (){var or__4953__auto__ = by;if(cljs.core.truth_(or__4953__auto__))
{return or__4953__auto__;
} else
{return d;
}
})()),(function (){var or__4953__auto__ = cy;if(cljs.core.truth_(or__4953__auto__))
{return or__4953__auto__;
} else
{return d;
}
})()),op.call(null,op.call(null,op.call(null,_.z,a.z),(function (){var or__4953__auto__ = bz;if(cljs.core.truth_(or__4953__auto__))
{return or__4953__auto__;
} else
{return d;
}
})()),(function (){var or__4953__auto__ = cz;if(cljs.core.truth_(or__4953__auto__))
{return or__4953__auto__;
} else
{return d;
}
})())));
}
} else
{var an_QMARK_ = typeof a === 'number';var bn_QMARK_ = typeof b === 'number';var cn_QMARK_ = typeof c === 'number';if((an_QMARK_) && (bn_QMARK_) && (cn_QMARK_))
{return (new thi.ng.geom.core.vector.Vec3(op.call(null,_.x,a),op.call(null,_.y,b),op.call(null,_.z,c)));
} else
{var vec__10086 = ((typeof a === 'number')?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,a,a], null):a);var ax = cljs.core.nth.call(null,vec__10086,0,null);var ay = cljs.core.nth.call(null,vec__10086,1,null);var az = cljs.core.nth.call(null,vec__10086,2,null);var vec__10087 = ((typeof b === 'number')?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,b,b], null):b);var bx = cljs.core.nth.call(null,vec__10087,0,null);var by = cljs.core.nth.call(null,vec__10087,1,null);var bz = cljs.core.nth.call(null,vec__10087,2,null);var vec__10088 = ((typeof c === 'number')?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,c,c], null):c);var cx = cljs.core.nth.call(null,vec__10088,0,null);var cy = cljs.core.nth.call(null,vec__10088,1,null);var cz = cljs.core.nth.call(null,vec__10088,2,null);return (new thi.ng.geom.core.vector.Vec3(op.call(null,op.call(null,op.call(null,_.x,(function (){var or__4953__auto__ = ax;if(cljs.core.truth_(or__4953__auto__))
{return or__4953__auto__;
} else
{return d;
}
})()),(function (){var or__4953__auto__ = bx;if(cljs.core.truth_(or__4953__auto__))
{return or__4953__auto__;
} else
{return d;
}
})()),(function (){var or__4953__auto__ = cx;if(cljs.core.truth_(or__4953__auto__))
{return or__4953__auto__;
} else
{return d;
}
})()),op.call(null,op.call(null,op.call(null,_.y,(function (){var or__4953__auto__ = ay;if(cljs.core.truth_(or__4953__auto__))
{return or__4953__auto__;
} else
{return d;
}
})()),(function (){var or__4953__auto__ = by;if(cljs.core.truth_(or__4953__auto__))
{return or__4953__auto__;
} else
{return d;
}
})()),(function (){var or__4953__auto__ = cy;if(cljs.core.truth_(or__4953__auto__))
{return or__4953__auto__;
} else
{return d;
}
})()),op.call(null,op.call(null,op.call(null,_.z,(function (){var or__4953__auto__ = az;if(cljs.core.truth_(or__4953__auto__))
{return or__4953__auto__;
} else
{return d;
}
})()),(function (){var or__4953__auto__ = bz;if(cljs.core.truth_(or__4953__auto__))
{return or__4953__auto__;
} else
{return d;
}
})()),(function (){var or__4953__auto__ = cz;if(cljs.core.truth_(or__4953__auto__))
{return or__4953__auto__;
} else
{return d;
}
})())));
}
}
});
thi.ng.geom.core.vector.V2 = (new thi.ng.geom.core.vector.Vec2(0.0,0.0));
thi.ng.geom.core.vector.V3 = (new thi.ng.geom.core.vector.Vec3(0.0,0.0,0.0));
thi.ng.geom.core.vector.V2X = (new thi.ng.geom.core.vector.Vec2(1.0,0.0));
thi.ng.geom.core.vector.V2Y = (new thi.ng.geom.core.vector.Vec2(0.0,1.0));
thi.ng.geom.core.vector.V3X = (new thi.ng.geom.core.vector.Vec3(1.0,0.0,0.0));
thi.ng.geom.core.vector.V3Y = (new thi.ng.geom.core.vector.Vec3(0.0,1.0,0.0));
thi.ng.geom.core.vector.V3Z = (new thi.ng.geom.core.vector.Vec3(0.0,0.0,1.0));
thi.ng.geom.core.vector.V2INF_ = (new thi.ng.geom.core.vector.Vec2(thi.ng.common.math.core.INF_,thi.ng.common.math.core.INF_));
thi.ng.geom.core.vector.V2INF_PLUS_ = (new thi.ng.geom.core.vector.Vec2(thi.ng.common.math.core.INF_PLUS_,thi.ng.common.math.core.INF_PLUS_));
thi.ng.geom.core.vector.V3INF_ = (new thi.ng.geom.core.vector.Vec3(thi.ng.common.math.core.INF_,thi.ng.common.math.core.INF_,thi.ng.common.math.core.INF_));
thi.ng.geom.core.vector.V3INF_PLUS_ = (new thi.ng.geom.core.vector.Vec3(thi.ng.common.math.core.INF_PLUS_,thi.ng.common.math.core.INF_PLUS_,thi.ng.common.math.core.INF_PLUS_));
thi.ng.geom.core.vector.vec2 = (function() {
var vec2 = null;
var vec2__0 = (function (){return thi.ng.geom.core.vector.V2;
});
var vec2__1 = (function (x){if((x instanceof thi.ng.geom.core.vector.Vec2))
{return x;
} else
{if(cljs.core.sequential_QMARK_.call(null,x))
{return (new thi.ng.geom.core.vector.Vec2(cljs.core.nth.call(null,x,0,0.0),cljs.core.nth.call(null,x,1,0.0)));
} else
{if(typeof x === 'number')
{return (new thi.ng.geom.core.vector.Vec2(x,x));
} else
{if(cljs.core.map_QMARK_.call(null,x))
{return (new thi.ng.geom.core.vector.Vec2(cljs.core.get.call(null,x,new cljs.core.Keyword(null,"x","x",1013904362),0.0),cljs.core.get.call(null,x,new cljs.core.Keyword(null,"y","y",1013904363),0.0)));
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return thi.ng.common.error.type_error_BANG_.call(null,"Vec2",x);
} else
{return null;
}
}
}
}
}
});
var vec2__2 = (function (x,y){return (new thi.ng.geom.core.vector.Vec2(x,y));
});
vec2 = function(x,y){
switch(arguments.length){
case 0:
return vec2__0.call(this);
case 1:
return vec2__1.call(this,x);
case 2:
return vec2__2.call(this,x,y);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
vec2.cljs$core$IFn$_invoke$arity$0 = vec2__0;
vec2.cljs$core$IFn$_invoke$arity$1 = vec2__1;
vec2.cljs$core$IFn$_invoke$arity$2 = vec2__2;
return vec2;
})()
;
thi.ng.geom.core.vector.vec3 = (function() {
var vec3 = null;
var vec3__0 = (function (){return thi.ng.geom.core.vector.V3;
});
var vec3__1 = (function (x){if((x instanceof thi.ng.geom.core.vector.Vec3))
{return x;
} else
{if(cljs.core.sequential_QMARK_.call(null,x))
{return (new thi.ng.geom.core.vector.Vec3(cljs.core.nth.call(null,x,0,0.0),cljs.core.nth.call(null,x,1,0.0),cljs.core.nth.call(null,x,2,0.0)));
} else
{if(typeof x === 'number')
{return (new thi.ng.geom.core.vector.Vec3(x,x,x));
} else
{if(cljs.core.map_QMARK_.call(null,x))
{return (new thi.ng.geom.core.vector.Vec3(cljs.core.get.call(null,x,new cljs.core.Keyword(null,"x","x",1013904362),0.0),cljs.core.get.call(null,x,new cljs.core.Keyword(null,"y","y",1013904363),0.0),cljs.core.get.call(null,x,new cljs.core.Keyword(null,"z","z",1013904364),0.0)));
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return thi.ng.common.error.type_error_BANG_.call(null,"Vec3",x);
} else
{return null;
}
}
}
}
}
});
var vec3__2 = (function (x,y){return (new thi.ng.geom.core.vector.Vec3(x,y,0.0));
});
var vec3__3 = (function (x,y,z){return (new thi.ng.geom.core.vector.Vec3(x,y,z));
});
vec3 = function(x,y,z){
switch(arguments.length){
case 0:
return vec3__0.call(this);
case 1:
return vec3__1.call(this,x);
case 2:
return vec3__2.call(this,x,y);
case 3:
return vec3__3.call(this,x,y,z);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
vec3.cljs$core$IFn$_invoke$arity$0 = vec3__0;
vec3.cljs$core$IFn$_invoke$arity$1 = vec3__1;
vec3.cljs$core$IFn$_invoke$arity$2 = vec3__2;
vec3.cljs$core$IFn$_invoke$arity$3 = vec3__3;
return vec3;
})()
;
thi.ng.geom.core.vector.vec2_QMARK_ = (function vec2_QMARK_(x){return (x instanceof thi.ng.geom.core.vector.Vec2);
});
thi.ng.geom.core.vector.vec3_QMARK_ = (function vec3_QMARK_(x){return (x instanceof thi.ng.geom.core.vector.Vec3);
});
thi.ng.geom.core.vector.randvec2 = (function() {
var randvec2 = null;
var randvec2__0 = (function (){return thi.ng.geom.core.normalize.call(null,thi.ng.geom.core.vector.vec2.call(null,thi.ng.common.math.core.randnorm.call(null),thi.ng.common.math.core.randnorm.call(null)));
});
var randvec2__1 = (function (n){return thi.ng.geom.core.normalize.call(null,thi.ng.geom.core.vector.vec2.call(null,thi.ng.common.math.core.randnorm.call(null),thi.ng.common.math.core.randnorm.call(null)),n);
});
randvec2 = function(n){
switch(arguments.length){
case 0:
return randvec2__0.call(this);
case 1:
return randvec2__1.call(this,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
randvec2.cljs$core$IFn$_invoke$arity$0 = randvec2__0;
randvec2.cljs$core$IFn$_invoke$arity$1 = randvec2__1;
return randvec2;
})()
;
thi.ng.geom.core.vector.randvec3 = (function() {
var randvec3 = null;
var randvec3__0 = (function (){return thi.ng.geom.core.normalize.call(null,thi.ng.geom.core.vector.vec3.call(null,thi.ng.common.math.core.randnorm.call(null),thi.ng.common.math.core.randnorm.call(null),thi.ng.common.math.core.randnorm.call(null)));
});
var randvec3__1 = (function (n){return thi.ng.geom.core.normalize.call(null,thi.ng.geom.core.vector.vec3.call(null,thi.ng.common.math.core.randnorm.call(null),thi.ng.common.math.core.randnorm.call(null),thi.ng.common.math.core.randnorm.call(null)),n);
});
randvec3 = function(n){
switch(arguments.length){
case 0:
return randvec3__0.call(this);
case 1:
return randvec3__1.call(this,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
randvec3.cljs$core$IFn$_invoke$arity$0 = randvec3__0;
randvec3.cljs$core$IFn$_invoke$arity$1 = randvec3__1;
return randvec3;
})()
;
thi.ng.geom.core.vector.lookup2 = (function lookup2(_,k,nf){var G__10090 = k;if(cljs.core._EQ_.call(null,"y",G__10090))
{return _.y;
} else
{if(cljs.core._EQ_.call(null,"x",G__10090))
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
});
thi.ng.geom.core.vector.lookup3 = (function lookup3(_,k,nf){var G__10092 = k;if(cljs.core._EQ_.call(null,"z",G__10092))
{return _.z;
} else
{if(cljs.core._EQ_.call(null,"y",G__10092))
{return _.y;
} else
{if(cljs.core._EQ_.call(null,"x",G__10092))
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
});
thi.ng.geom.core.vector.swizzle_assoc_STAR_ = (function swizzle_assoc_STAR_(_,ctor,keymap,k,v){var n = cljs.core.name.call(null,k);var c = cljs.core.count.call(null,n);if(((c <= cljs.core.count.call(null,keymap))) && (((c === cljs.core.count.call(null,v))) && ((cljs.core.count.call(null,v) === cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,n))))))
{var acc = cljs.core.vec.call(null,_);var i = 0;var n__$1 = n;while(true){
if(cljs.core.truth_(n__$1))
{{
var G__10093 = cljs.core.assoc.call(null,acc,keymap.call(null,cljs.core.first.call(null,n__$1)),v.call(null,i));
var G__10094 = (i + 1);
var G__10095 = cljs.core.next.call(null,n__$1);
acc = G__10093;
i = G__10094;
n__$1 = G__10095;
continue;
}
} else
{return ctor.call(null,acc);
}
break;
}
} else
{return thi.ng.common.error.key_error_BANG_.call(null,k);
}
});
thi.ng.geom.core.vector.swizzle2 = (function swizzle2(_,k,default$){if(typeof k === 'number')
{var G__10099 = (k | 0);if(cljs.core._EQ_.call(null,1,G__10099))
{return _.y;
} else
{if(cljs.core._EQ_.call(null,0,G__10099))
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
} else
{var G__10100 = k;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"y","y",1013904363),G__10100))
{return _.y;
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"x","x",1013904362),G__10100))
{return _.x;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var n = cljs.core.name.call(null,k);var c = cljs.core.count.call(null,n);var G__10101 = c;if(cljs.core._EQ_.call(null,3,G__10101))
{return (new thi.ng.geom.core.vector.Vec3(thi.ng.geom.core.vector.lookup2.call(null,_,cljs.core.nth.call(null,n,0),default$),thi.ng.geom.core.vector.lookup2.call(null,_,cljs.core.nth.call(null,n,1),default$),thi.ng.geom.core.vector.lookup2.call(null,_,cljs.core.nth.call(null,n,2),default$)));
} else
{if(cljs.core._EQ_.call(null,2,G__10101))
{return (new thi.ng.geom.core.vector.Vec2(thi.ng.geom.core.vector.lookup2.call(null,_,cljs.core.nth.call(null,n,0),default$),thi.ng.geom.core.vector.lookup2.call(null,_,cljs.core.nth.call(null,n,1),default$)));
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
} else
{return null;
}
}
}
}
});
thi.ng.geom.core.vector.swizzle2_assoc = (function swizzle2_assoc(_,k,v){var G__10103 = k;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"yx","yx",1013908113),G__10103))
{return (new thi.ng.geom.core.vector.Vec2(v.call(null,1),v.call(null,0)));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"xy","xy",1013908083),G__10103))
{return (new thi.ng.geom.core.vector.Vec2(v.call(null,0),v.call(null,1)));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"y","y",1013904363),G__10103))
{return (new thi.ng.geom.core.vector.Vec2(_.x,v));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"x","x",1013904362),G__10103))
{return (new thi.ng.geom.core.vector.Vec2(v,_.y));
} else
{if(cljs.core._EQ_.call(null,1,G__10103))
{return (new thi.ng.geom.core.vector.Vec2(_.x,v));
} else
{if(cljs.core._EQ_.call(null,0,G__10103))
{return (new thi.ng.geom.core.vector.Vec2(v,_.y));
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
}
}
});
thi.ng.geom.core.vector.swizzle3 = (function swizzle3(_,k,default$){if(typeof k === 'number')
{var G__10107 = (k | 0);if(cljs.core._EQ_.call(null,2,G__10107))
{return _.z;
} else
{if(cljs.core._EQ_.call(null,1,G__10107))
{return _.y;
} else
{if(cljs.core._EQ_.call(null,0,G__10107))
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
} else
{var G__10108 = k;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"z","z",1013904364),G__10108))
{return _.z;
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"y","y",1013904363),G__10108))
{return _.y;
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"x","x",1013904362),G__10108))
{return _.x;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var n = cljs.core.name.call(null,k);var c = cljs.core.count.call(null,n);var G__10109 = c;if(cljs.core._EQ_.call(null,3,G__10109))
{return (new thi.ng.geom.core.vector.Vec3(thi.ng.geom.core.vector.lookup3.call(null,_,cljs.core.nth.call(null,n,0),default$),thi.ng.geom.core.vector.lookup3.call(null,_,cljs.core.nth.call(null,n,1),default$),thi.ng.geom.core.vector.lookup3.call(null,_,cljs.core.nth.call(null,n,2),default$)));
} else
{if(cljs.core._EQ_.call(null,2,G__10109))
{return (new thi.ng.geom.core.vector.Vec2(thi.ng.geom.core.vector.lookup3.call(null,_,cljs.core.nth.call(null,n,0),default$),thi.ng.geom.core.vector.lookup3.call(null,_,cljs.core.nth.call(null,n,1),default$)));
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
} else
{return null;
}
}
}
}
}
});
thi.ng.geom.core.vector.swizzle3_assoc = (function swizzle3_assoc(_,k,v){var G__10111 = k;if(cljs.core._EQ_.call(null,2,G__10111))
{return (new thi.ng.geom.core.vector.Vec3(_.x,_.y,v));
} else
{if(cljs.core._EQ_.call(null,1,G__10111))
{return (new thi.ng.geom.core.vector.Vec3(_.x,v,_.z));
} else
{if(cljs.core._EQ_.call(null,0,G__10111))
{return (new thi.ng.geom.core.vector.Vec3(v,_.y,_.z));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"z","z",1013904364),G__10111))
{return (new thi.ng.geom.core.vector.Vec3(_.x,_.y,v));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"y","y",1013904363),G__10111))
{return (new thi.ng.geom.core.vector.Vec3(_.x,v,_.z));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"x","x",1013904362),G__10111))
{return (new thi.ng.geom.core.vector.Vec3(v,_.y,_.z));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return thi.ng.geom.core.vector.swizzle_assoc_STAR_.call(null,_,thi.ng.geom.core.vector.vec3,new cljs.core.PersistentArrayMap(null, 3, ["x",0,"y",1,"z",2], null),k,v);
} else
{return null;
}
}
}
}
}
}
}
});
