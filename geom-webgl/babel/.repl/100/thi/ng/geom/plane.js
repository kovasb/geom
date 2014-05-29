// Compiled by ClojureScript 0.0-2202
goog.provide('thi.ng.geom.plane');
goog.require('cljs.core');
goog.require('thi.ng.geom.core.vector');
goog.require('thi.ng.common.math.core');
goog.require('thi.ng.geom.core.utils');
goog.require('thi.ng.geom.types.utils');
goog.require('thi.ng.geom.core');
goog.require('thi.ng.geom.core.quaternion');
goog.require('thi.ng.geom.core.utils');
goog.require('thi.ng.geom.core.vector');
goog.require('thi.ng.geom.gmesh');
goog.require('thi.ng.geom.core.vector');
goog.require('thi.ng.geom.core.intersect');
goog.require('thi.ng.common.math.core');
goog.require('thi.ng.geom.types');
goog.require('thi.ng.geom.gmesh');
goog.require('thi.ng.common.error');
goog.require('thi.ng.geom.core.quaternion');
goog.require('thi.ng.geom.types');
goog.require('thi.ng.geom.core');
goog.require('thi.ng.geom.types.utils');
goog.require('thi.ng.common.math.core');
goog.require('thi.ng.geom.core.intersect');
goog.require('thi.ng.common.error');
thi.ng.geom.plane.plane = (function plane(n,w){return (new thi.ng.geom.types.Plane(thi.ng.geom.core.normalize.call(null,thi.ng.geom.core.vector.vec3.call(null,n)),w));
});
thi.ng.geom.plane.plane_with_point = (function plane_with_point(p,n){var n__$1 = thi.ng.geom.core.normalize.call(null,thi.ng.geom.core.vector.vec3.call(null,n));return (new thi.ng.geom.types.Plane(n__$1,thi.ng.geom.core.dot.call(null,n__$1,p)));
});
thi.ng.geom.plane.plane_from_points = (function() {
var plane_from_points = null;
var plane_from_points__1 = (function (p__11191){var vec__11193 = p__11191;var a = cljs.core.nth.call(null,vec__11193,0,null);var b = cljs.core.nth.call(null,vec__11193,1,null);var c = cljs.core.nth.call(null,vec__11193,2,null);return plane_from_points.call(null,a,b,c);
});
var plane_from_points__3 = (function (a,b,c){var n = thi.ng.geom.core.utils.ortho_normal.call(null,a,b,c);return (new thi.ng.geom.types.Plane(n,thi.ng.geom.core.dot.call(null,n,a)));
});
plane_from_points = function(a,b,c){
switch(arguments.length){
case 1:
return plane_from_points__1.call(this,a);
case 3:
return plane_from_points__3.call(this,a,b,c);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
plane_from_points.cljs$core$IFn$_invoke$arity$1 = plane_from_points__1;
plane_from_points.cljs$core$IFn$_invoke$arity$3 = plane_from_points__3;
return plane_from_points;
})()
;
thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PTransform$ = true;
thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PTransform$transform$arity$2 = (function (_,m){var ___$1 = this;return thi.ng.geom.plane.plane_with_point.call(null,thi.ng.geom.core.transform_vector.call(null,m,thi.ng.geom.core.centroid.call(null,___$1)),thi.ng.geom.core.transform_vector.call(null,m,new cljs.core.Keyword(null,"n","n",1013904352).cljs$core$IFn$_invoke$arity$1(___$1)));
});
thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PCenter$ = true;
thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PCenter$center$arity$1 = (function (_){var ___$1 = this;return (new thi.ng.geom.types.Plane(new cljs.core.Keyword(null,"n","n",1013904352).cljs$core$IFn$_invoke$arity$1(___$1),0));
});
thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PCenter$center$arity$2 = (function (_,o){var ___$1 = this;return thi.ng.geom.plane.plane_with_point.call(null,o,new cljs.core.Keyword(null,"n","n",1013904352).cljs$core$IFn$_invoke$arity$1(___$1));
});
thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PCenter$centroid$arity$1 = (function (_){var ___$1 = this;return thi.ng.geom.core._STAR_.call(null,new cljs.core.Keyword(null,"n","n",1013904352).cljs$core$IFn$_invoke$arity$1(___$1),new cljs.core.Keyword(null,"w","w",1013904361).cljs$core$IFn$_invoke$arity$1(___$1));
});
thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PFlip$ = true;
thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PFlip$flip$arity$1 = (function (_){var ___$1 = this;return (new thi.ng.geom.types.Plane(thi.ng.geom.core._.call(null,new cljs.core.Keyword(null,"n","n",1013904352).cljs$core$IFn$_invoke$arity$1(___$1)),(- new cljs.core.Keyword(null,"w","w",1013904361).cljs$core$IFn$_invoke$arity$1(___$1))));
});
thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PClassify$ = true;
thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PClassify$classify_point$arity$2 = (function (_,p){var ___$1 = this;return thi.ng.common.math.core.signum.call(null,(thi.ng.geom.core.dot.call(null,new cljs.core.Keyword(null,"n","n",1013904352).cljs$core$IFn$_invoke$arity$1(___$1),p) - new cljs.core.Keyword(null,"w","w",1013904361).cljs$core$IFn$_invoke$arity$1(___$1)),thi.ng.common.math.core._STAR_eps_STAR_);
});
thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PVolume$ = true;
thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PVolume$volume$arity$1 = (function (_){var ___$1 = this;return 0.0;
});
thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PIntersect$ = true;
thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PIntersect$intersect_line$arity$2 = (function (_,p__11195){var map__11196 = p__11195;var map__11196__$1 = ((cljs.core.seq_QMARK_.call(null,map__11196))?cljs.core.apply.call(null,cljs.core.hash_map,map__11196):map__11196);var vec__11197 = cljs.core.get.call(null,map__11196__$1,new cljs.core.Keyword(null,"points","points",4326117461));var p = cljs.core.nth.call(null,vec__11197,0,null);var q = cljs.core.nth.call(null,vec__11197,1,null);var ___$1 = this;return thi.ng.geom.core.intersect.intersect_ray_plane_QMARK_.call(null,p,thi.ng.geom.core._.call(null,q,p),new cljs.core.Keyword(null,"n","n",1013904352).cljs$core$IFn$_invoke$arity$1(___$1),new cljs.core.Keyword(null,"w","w",1013904361).cljs$core$IFn$_invoke$arity$1(___$1));
});
thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PIntersect$intersect_line$arity$3 = (function (_,p,q){var ___$1 = this;return thi.ng.geom.core.intersect.intersect_ray_plane_QMARK_.call(null,p,thi.ng.geom.core._.call(null,q,p),new cljs.core.Keyword(null,"n","n",1013904352).cljs$core$IFn$_invoke$arity$1(___$1),new cljs.core.Keyword(null,"w","w",1013904361).cljs$core$IFn$_invoke$arity$1(___$1));
});
thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PIntersect$intersect_ray$arity$2 = (function (_,ray){var ___$1 = this;return thi.ng.geom.core.intersect.intersect_ray_plane_QMARK_.call(null,new cljs.core.Keyword(null,"p","p",1013904354).cljs$core$IFn$_invoke$arity$1(ray),new cljs.core.Keyword(null,"dir","dir",1014003711).cljs$core$IFn$_invoke$arity$1(ray),new cljs.core.Keyword(null,"n","n",1013904352).cljs$core$IFn$_invoke$arity$1(___$1),new cljs.core.Keyword(null,"w","w",1013904361).cljs$core$IFn$_invoke$arity$1(___$1));
});
thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PIntersect$intersect_ray$arity$3 = (function (_,p,dir){var ___$1 = this;return thi.ng.geom.core.intersect.intersect_ray_plane_QMARK_.call(null,p,dir,new cljs.core.Keyword(null,"n","n",1013904352).cljs$core$IFn$_invoke$arity$1(___$1),new cljs.core.Keyword(null,"w","w",1013904361).cljs$core$IFn$_invoke$arity$1(___$1));
});
thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PIntersect$intersect_shape$arity$2 = (function (_,s){var ___$1 = this;if((s instanceof thi.ng.geom.types.Plane))
{return thi.ng.geom.core.intersect.intersect_plane_plane_QMARK_.call(null,new cljs.core.Keyword(null,"n","n",1013904352).cljs$core$IFn$_invoke$arity$1(___$1),new cljs.core.Keyword(null,"w","w",1013904361).cljs$core$IFn$_invoke$arity$1(___$1),new cljs.core.Keyword(null,"n","n",1013904352).cljs$core$IFn$_invoke$arity$1(s),new cljs.core.Keyword(null,"w","w",1013904361).cljs$core$IFn$_invoke$arity$1(s));
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return thi.ng.common.error.illegal_arg_BANG_.call(null,s);
} else
{return null;
}
}
});
thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PDistance$ = true;
thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PDistance$dist$arity$2 = (function (_,p){var ___$1 = this;return ((- new cljs.core.Keyword(null,"w","w",1013904361).cljs$core$IFn$_invoke$arity$1(___$1)) + thi.ng.geom.core.dot.call(null,new cljs.core.Keyword(null,"n","n",1013904352).cljs$core$IFn$_invoke$arity$1(___$1),p));
});
thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PDistance$dist_squared$arity$2 = (function (_,p){var ___$1 = this;var d = thi.ng.geom.core.dist.call(null,___$1,p);return (d * d);
});
thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PTranslate$ = true;
thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PTranslate$translate$arity$2 = (function (_,t){var ___$1 = this;return thi.ng.geom.plane.plane_with_point.call(null,thi.ng.geom.core._PLUS_.call(null,thi.ng.geom.core.centroid.call(null,___$1),t),new cljs.core.Keyword(null,"n","n",1013904352).cljs$core$IFn$_invoke$arity$1(___$1));
});
thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PBoundingSphere$ = true;
thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PBoundingSphere$bounding_sphere$arity$1 = (function (_){var ___$1 = this;return (new thi.ng.geom.types.Sphere(thi.ng.geom.core.centroid.call(null,___$1),thi.ng.common.math.core.INF_PLUS_));
});
thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PScale$ = true;
thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PScale$scale$arity$2 = (function (_,s){var ___$1 = this;return thi.ng.geom.plane.plane_with_point.call(null,thi.ng.geom.core._STAR_.call(null,thi.ng.geom.core.centroid.call(null,___$1),s),new cljs.core.Keyword(null,"n","n",1013904352).cljs$core$IFn$_invoke$arity$1(___$1));
});
thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PScale$scale$arity$3 = (function (_,a,b){var ___$1 = this;return thi.ng.geom.plane.plane_with_point.call(null,thi.ng.geom.core._STAR_.call(null,thi.ng.geom.core.centroid.call(null,___$1),a,b),new cljs.core.Keyword(null,"n","n",1013904352).cljs$core$IFn$_invoke$arity$1(___$1));
});
thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PScale$scale$arity$4 = (function (_,a,b,c){var ___$1 = this;return thi.ng.geom.plane.plane_with_point.call(null,thi.ng.geom.core._STAR_.call(null,thi.ng.geom.core.centroid.call(null,___$1),a,b,c),new cljs.core.Keyword(null,"n","n",1013904352).cljs$core$IFn$_invoke$arity$1(___$1));
});
thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PScale$scale_size$arity$2 = (function (_,s){var ___$1 = this;return ___$1;
});
thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PBounds$ = true;
thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PBounds$bounds$arity$1 = (function (_){var ___$1 = this;var s = thi.ng.geom.core.vector.vec3.call(null,thi.ng.geom.core.width.call(null,___$1),thi.ng.geom.core.height.call(null,___$1),thi.ng.geom.core.depth.call(null,___$1));return (new thi.ng.geom.types.AABB(thi.ng.geom.core.madd.call(null,s,-0.5,thi.ng.geom.core.centroid.call(null,___$1)),s));
});
thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PBounds$width$arity$1 = (function (_){var ___$1 = this;if(thi.ng.common.math.core.delta_EQ_.call(null,thi.ng.geom.core.abs.call(null,new cljs.core.Keyword(null,"n","n",1013904352).cljs$core$IFn$_invoke$arity$1(___$1)),thi.ng.geom.core.vector.V3X,thi.ng.common.math.core._STAR_eps_STAR_))
{return 0.0;
} else
{return thi.ng.common.math.core.INF_PLUS_;
}
});
thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PBounds$height$arity$1 = (function (_){var ___$1 = this;if(thi.ng.common.math.core.delta_EQ_.call(null,thi.ng.geom.core.abs.call(null,new cljs.core.Keyword(null,"n","n",1013904352).cljs$core$IFn$_invoke$arity$1(___$1)),thi.ng.geom.core.vector.V3Y,thi.ng.common.math.core._STAR_eps_STAR_))
{return 0.0;
} else
{return thi.ng.common.math.core.INF_PLUS_;
}
});
thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PBounds$depth$arity$1 = (function (_){var ___$1 = this;if(thi.ng.common.math.core.delta_EQ_.call(null,thi.ng.geom.core.abs.call(null,new cljs.core.Keyword(null,"n","n",1013904352).cljs$core$IFn$_invoke$arity$1(___$1)),thi.ng.geom.core.vector.V3Z,thi.ng.common.math.core._STAR_eps_STAR_))
{return 0.0;
} else
{return thi.ng.common.math.core.INF_PLUS_;
}
});
thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PMeshConvert$ = true;
thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PMeshConvert$as_mesh$arity$1 = (function (_){var ___$1 = this;return thi.ng.geom.core.as_mesh.call(null,___$1,cljs.core.PersistentArrayMap.EMPTY);
});
thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PMeshConvert$as_mesh$arity$2 = (function (_,p__11198){var map__11199 = p__11198;var map__11199__$1 = ((cljs.core.seq_QMARK_.call(null,map__11199))?cljs.core.apply.call(null,cljs.core.hash_map,map__11199):map__11199);var mesh = cljs.core.get.call(null,map__11199__$1,new cljs.core.Keyword(null,"mesh","mesh",1017252191));var size = cljs.core.get.call(null,map__11199__$1,new cljs.core.Keyword(null,"size","size",1017434995),1.0);var height = cljs.core.get.call(null,map__11199__$1,new cljs.core.Keyword(null,"height","height",4087841945));var width = cljs.core.get.call(null,map__11199__$1,new cljs.core.Keyword(null,"width","width",1127031096));var p = cljs.core.get.call(null,map__11199__$1,new cljs.core.Keyword(null,"p","p",1013904354));var ___$1 = this;var w = ((function (){var or__4953__auto__ = width;if(cljs.core.truth_(or__4953__auto__))
{return or__4953__auto__;
} else
{return size;
}
})() * 0.5);var h = ((function (){var or__4953__auto__ = height;if(cljs.core.truth_(or__4953__auto__))
{return or__4953__auto__;
} else
{return size;
}
})() * 0.5);var flip_QMARK_ = thi.ng.common.math.core.delta_EQ_.call(null,-1.0,thi.ng.geom.core.dot.call(null,new cljs.core.Keyword(null,"n","n",1013904352).cljs$core$IFn$_invoke$arity$1(___$1),thi.ng.geom.core.vector.V3Z));var p__$1 = thi.ng.geom.core.closest_point.call(null,___$1,(function (){var or__4953__auto__ = p;if(cljs.core.truth_(or__4953__auto__))
{return or__4953__auto__;
} else
{return thi.ng.geom.core.vector.vec3.call(null);
}
})());var q = ((flip_QMARK_)?thi.ng.geom.core.quaternion.quat.call(null,0,0,0,1):thi.ng.geom.core.quaternion.alignment_quat.call(null,thi.ng.geom.core.vector.V3Z,new cljs.core.Keyword(null,"n","n",1013904352).cljs$core$IFn$_invoke$arity$1(___$1)));var vec__11200 = cljs.core.map.call(null,((function (w,h,flip_QMARK_,p__$1,q,___$1,map__11199,map__11199__$1,mesh,size,height,width,p){
return (function (p1__11194_SHARP_){return thi.ng.geom.core._PLUS_.call(null,p__$1,thi.ng.geom.core.transform_vector.call(null,q,p1__11194_SHARP_));
});})(w,h,flip_QMARK_,p__$1,q,___$1,map__11199,map__11199__$1,mesh,size,height,width,p))
,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.vector.vec3.call(null,(- w),(- h),0),thi.ng.geom.core.vector.vec3.call(null,(- w),h,0),thi.ng.geom.core.vector.vec3.call(null,w,h,0),thi.ng.geom.core.vector.vec3.call(null,w,(- h),0)], null));var a = cljs.core.nth.call(null,vec__11200,0,null);var b = cljs.core.nth.call(null,vec__11200,1,null);var c = cljs.core.nth.call(null,vec__11200,2,null);var d = cljs.core.nth.call(null,vec__11200,3,null);return thi.ng.geom.gmesh.add_face.call(null,(function (){var or__4953__auto__ = mesh;if(cljs.core.truth_(or__4953__auto__))
{return or__4953__auto__;
} else
{return thi.ng.geom.gmesh.gmesh.call(null);
}
})(),((flip_QMARK_)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [d,c,b,a], null)));
});
thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PProximity$ = true;
thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PProximity$closest_point$arity$2 = (function (_,p){var ___$1 = this;return thi.ng.geom.core._.call(null,p,thi.ng.geom.core.normalize.call(null,new cljs.core.Keyword(null,"n","n",1013904352).cljs$core$IFn$_invoke$arity$1(___$1),((- new cljs.core.Keyword(null,"w","w",1013904361).cljs$core$IFn$_invoke$arity$1(___$1)) + thi.ng.geom.core.dot.call(null,new cljs.core.Keyword(null,"n","n",1013904352).cljs$core$IFn$_invoke$arity$1(___$1),p))));
});
thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PArea$ = true;
thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PArea$area$arity$1 = (function (_){var ___$1 = this;return thi.ng.common.math.core.INF_PLUS_;
});
