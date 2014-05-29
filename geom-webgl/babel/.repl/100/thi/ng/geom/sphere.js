// Compiled by ClojureScript 0.0-2202
goog.provide('thi.ng.geom.sphere');
goog.require('cljs.core');
goog.require('thi.ng.geom.core');
goog.require('thi.ng.geom.core.vector');
goog.require('thi.ng.common.math.core');
goog.require('thi.ng.geom.core.utils');
goog.require('thi.ng.geom.core');
goog.require('thi.ng.geom.core.utils');
goog.require('thi.ng.geom.core.vector');
goog.require('thi.ng.geom.gmesh');
goog.require('thi.ng.geom.core.vector');
goog.require('thi.ng.geom.core.intersect');
goog.require('thi.ng.common.math.core');
goog.require('thi.ng.geom.types');
goog.require('thi.ng.geom.gmesh');
goog.require('thi.ng.common.error');
goog.require('thi.ng.geom.types');
goog.require('thi.ng.geom.core');
goog.require('thi.ng.common.math.core');
goog.require('thi.ng.geom.core.intersect');
goog.require('thi.ng.common.error');
thi.ng.geom.sphere.sphere = (function() {
var sphere = null;
var sphere__0 = (function (){return (new thi.ng.geom.types.Sphere(thi.ng.geom.core.vector.vec3.call(null),1.0));
});
var sphere__1 = (function (r){return (new thi.ng.geom.types.Sphere(thi.ng.geom.core.vector.vec3.call(null),r));
});
var sphere__2 = (function (p,r){return (new thi.ng.geom.types.Sphere(thi.ng.geom.core.vector.vec3.call(null,p),r));
});
sphere = function(p,r){
switch(arguments.length){
case 0:
return sphere__0.call(this);
case 1:
return sphere__1.call(this,p);
case 2:
return sphere__2.call(this,p,r);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sphere.cljs$core$IFn$_invoke$arity$0 = sphere__0;
sphere.cljs$core$IFn$_invoke$arity$1 = sphere__1;
sphere.cljs$core$IFn$_invoke$arity$2 = sphere__2;
return sphere;
})()
;
thi.ng.geom.types.Sphere.prototype.thi$ng$geom$core$PRotate$ = true;
thi.ng.geom.types.Sphere.prototype.thi$ng$geom$core$PRotate$rotate$arity$2 = (function (_,theta){var ___$1 = this;return (new thi.ng.geom.types.Sphere(thi.ng.geom.core.rotate_z.call(null,new cljs.core.Keyword(null,"p","p",1013904354).cljs$core$IFn$_invoke$arity$1(___$1),theta),new cljs.core.Keyword(null,"r","r",1013904356).cljs$core$IFn$_invoke$arity$1(___$1)));
});
thi.ng.geom.types.Sphere.prototype.thi$ng$geom$core$PRotate3D$ = true;
thi.ng.geom.types.Sphere.prototype.thi$ng$geom$core$PRotate3D$rotate_x$arity$2 = (function (_,theta){var ___$1 = this;return (new thi.ng.geom.types.Sphere(thi.ng.geom.core.rotate_x.call(null,new cljs.core.Keyword(null,"p","p",1013904354).cljs$core$IFn$_invoke$arity$1(___$1),theta),new cljs.core.Keyword(null,"r","r",1013904356).cljs$core$IFn$_invoke$arity$1(___$1)));
});
thi.ng.geom.types.Sphere.prototype.thi$ng$geom$core$PRotate3D$rotate_y$arity$2 = (function (_,theta){var ___$1 = this;return (new thi.ng.geom.types.Sphere(thi.ng.geom.core.rotate_y.call(null,new cljs.core.Keyword(null,"p","p",1013904354).cljs$core$IFn$_invoke$arity$1(___$1),theta),new cljs.core.Keyword(null,"r","r",1013904356).cljs$core$IFn$_invoke$arity$1(___$1)));
});
thi.ng.geom.types.Sphere.prototype.thi$ng$geom$core$PRotate3D$rotate_z$arity$2 = (function (_,theta){var ___$1 = this;return (new thi.ng.geom.types.Sphere(thi.ng.geom.core.rotate_z.call(null,new cljs.core.Keyword(null,"p","p",1013904354).cljs$core$IFn$_invoke$arity$1(___$1),theta),new cljs.core.Keyword(null,"r","r",1013904356).cljs$core$IFn$_invoke$arity$1(___$1)));
});
thi.ng.geom.types.Sphere.prototype.thi$ng$geom$core$PRotate3D$rotate_around_axis$arity$3 = (function (_,axis,theta){var ___$1 = this;return (new thi.ng.geom.types.Sphere(thi.ng.geom.core.rotate_around_axis.call(null,new cljs.core.Keyword(null,"p","p",1013904354).cljs$core$IFn$_invoke$arity$1(___$1),axis,theta),new cljs.core.Keyword(null,"r","r",1013904356).cljs$core$IFn$_invoke$arity$1(___$1)));
});
thi.ng.geom.types.Sphere.prototype.thi$ng$geom$core$PCenter$ = true;
thi.ng.geom.types.Sphere.prototype.thi$ng$geom$core$PCenter$center$arity$1 = (function (_){var ___$1 = this;return (new thi.ng.geom.types.Sphere(thi.ng.geom.core.vector.vec3.call(null),new cljs.core.Keyword(null,"r","r",1013904356).cljs$core$IFn$_invoke$arity$1(___$1)));
});
thi.ng.geom.types.Sphere.prototype.thi$ng$geom$core$PCenter$center$arity$2 = (function (_,p){var ___$1 = this;return (new thi.ng.geom.types.Sphere(thi.ng.geom.core.vector.vec3.call(null,p),new cljs.core.Keyword(null,"r","r",1013904356).cljs$core$IFn$_invoke$arity$1(___$1)));
});
thi.ng.geom.types.Sphere.prototype.thi$ng$geom$core$PCenter$centroid$arity$1 = (function (_){var ___$1 = this;return new cljs.core.Keyword(null,"p","p",1013904354).cljs$core$IFn$_invoke$arity$1(___$1);
});
thi.ng.geom.types.Sphere.prototype.thi$ng$geom$core$PSample$ = true;
thi.ng.geom.types.Sphere.prototype.thi$ng$geom$core$PSample$random_point_inside$arity$1 = (function (_){var ___$1 = this;return thi.ng.geom.core._PLUS_.call(null,new cljs.core.Keyword(null,"p","p",1013904354).cljs$core$IFn$_invoke$arity$1(___$1),thi.ng.geom.core.vector.randvec3.call(null,thi.ng.common.math.core.random.call(null,new cljs.core.Keyword(null,"r","r",1013904356).cljs$core$IFn$_invoke$arity$1(___$1))));
});
thi.ng.geom.types.Sphere.prototype.thi$ng$geom$core$PSample$random_point$arity$1 = (function (_){var ___$1 = this;return thi.ng.geom.core._PLUS_.call(null,new cljs.core.Keyword(null,"p","p",1013904354).cljs$core$IFn$_invoke$arity$1(___$1),thi.ng.geom.core.vector.randvec3.call(null,new cljs.core.Keyword(null,"r","r",1013904356).cljs$core$IFn$_invoke$arity$1(___$1)));
});
thi.ng.geom.types.Sphere.prototype.thi$ng$geom$core$PClassify$ = true;
thi.ng.geom.types.Sphere.prototype.thi$ng$geom$core$PClassify$classify_point$arity$2 = (function (p__11240,q){var map__11241 = p__11240;var map__11241__$1 = ((cljs.core.seq_QMARK_.call(null,map__11241))?cljs.core.apply.call(null,cljs.core.hash_map,map__11241):map__11241);var p = cljs.core.get.call(null,map__11241__$1,new cljs.core.Keyword(null,"p","p",1013904354));var r = cljs.core.get.call(null,map__11241__$1,new cljs.core.Keyword(null,"r","r",1013904356));var map__11242 = this;var map__11242__$1 = ((cljs.core.seq_QMARK_.call(null,map__11242))?cljs.core.apply.call(null,cljs.core.hash_map,map__11242):map__11242);var p__$1 = cljs.core.get.call(null,map__11242__$1,new cljs.core.Keyword(null,"p","p",1013904354));var r__$1 = cljs.core.get.call(null,map__11242__$1,new cljs.core.Keyword(null,"r","r",1013904356));return thi.ng.common.math.core.signum.call(null,((r__$1 * r__$1) - thi.ng.geom.core.dist_squared.call(null,p__$1,q)),thi.ng.common.math.core._STAR_eps_STAR_);
});
thi.ng.geom.types.Sphere.prototype.thi$ng$geom$core$PVolume$ = true;
thi.ng.geom.types.Sphere.prototype.thi$ng$geom$core$PVolume$volume$arity$1 = (function (p__11243){var map__11244 = p__11243;var map__11244__$1 = ((cljs.core.seq_QMARK_.call(null,map__11244))?cljs.core.apply.call(null,cljs.core.hash_map,map__11244):map__11244);var r = cljs.core.get.call(null,map__11244__$1,new cljs.core.Keyword(null,"r","r",1013904356));var map__11245 = this;var map__11245__$1 = ((cljs.core.seq_QMARK_.call(null,map__11245))?cljs.core.apply.call(null,cljs.core.hash_map,map__11245):map__11245);var r__$1 = cljs.core.get.call(null,map__11245__$1,new cljs.core.Keyword(null,"r","r",1013904356));return (((((4.0 / 3.0) * thi.ng.common.math.core.PI) * r__$1) * r__$1) * r__$1);
});
thi.ng.geom.types.Sphere.prototype.thi$ng$geom$core$PBoundary$ = true;
thi.ng.geom.types.Sphere.prototype.thi$ng$geom$core$PBoundary$contains_point_QMARK_$arity$2 = (function (p__11246,q){var map__11247 = p__11246;var map__11247__$1 = ((cljs.core.seq_QMARK_.call(null,map__11247))?cljs.core.apply.call(null,cljs.core.hash_map,map__11247):map__11247);var p = cljs.core.get.call(null,map__11247__$1,new cljs.core.Keyword(null,"p","p",1013904354));var r = cljs.core.get.call(null,map__11247__$1,new cljs.core.Keyword(null,"r","r",1013904356));var map__11248 = this;var map__11248__$1 = ((cljs.core.seq_QMARK_.call(null,map__11248))?cljs.core.apply.call(null,cljs.core.hash_map,map__11248):map__11248);var p__$1 = cljs.core.get.call(null,map__11248__$1,new cljs.core.Keyword(null,"p","p",1013904354));var r__$1 = cljs.core.get.call(null,map__11248__$1,new cljs.core.Keyword(null,"r","r",1013904356));return (thi.ng.geom.core.dist_squared.call(null,p__$1,q) <= (r__$1 * r__$1));
});
thi.ng.geom.types.Sphere.prototype.thi$ng$geom$core$PIntersect$ = true;
thi.ng.geom.types.Sphere.prototype.thi$ng$geom$core$PIntersect$intersect_ray$arity$2 = (function (p__11249,ray){var map__11250 = p__11249;var map__11250__$1 = ((cljs.core.seq_QMARK_.call(null,map__11250))?cljs.core.apply.call(null,cljs.core.hash_map,map__11250):map__11250);var p = cljs.core.get.call(null,map__11250__$1,new cljs.core.Keyword(null,"p","p",1013904354));var r = cljs.core.get.call(null,map__11250__$1,new cljs.core.Keyword(null,"r","r",1013904356));var map__11251 = this;var map__11251__$1 = ((cljs.core.seq_QMARK_.call(null,map__11251))?cljs.core.apply.call(null,cljs.core.hash_map,map__11251):map__11251);var p__$1 = cljs.core.get.call(null,map__11251__$1,new cljs.core.Keyword(null,"p","p",1013904354));var r__$1 = cljs.core.get.call(null,map__11251__$1,new cljs.core.Keyword(null,"r","r",1013904356));var vec__11252 = ((cljs.core.map_QMARK_.call(null,ray))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",1013904354).cljs$core$IFn$_invoke$arity$1(ray),new cljs.core.Keyword(null,"dir","dir",1014003711).cljs$core$IFn$_invoke$arity$1(ray)], null):ray);var rp = cljs.core.nth.call(null,vec__11252,0,null);var dir = cljs.core.nth.call(null,vec__11252,1,null);return thi.ng.geom.core.intersect.intersect_ray_sphere_QMARK_.call(null,rp,dir,p__$1,r__$1);
});
thi.ng.geom.types.Sphere.prototype.thi$ng$geom$core$PIntersect$intersect_shape$arity$2 = (function (_,s){var ___$1 = this;if((s instanceof thi.ng.geom.types.AABB))
{return thi.ng.geom.core.intersect.intersect_aabb_sphere_QMARK_.call(null,s,___$1);
} else
{if((s instanceof thi.ng.geom.types.Sphere))
{return thi.ng.geom.core.intersect.intersect_sphere_sphere_QMARK_.call(null,___$1,s);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return thi.ng.common.error.type_error_BANG_.call(null,"Sphere",s);
} else
{return null;
}
}
}
});
thi.ng.geom.types.Sphere.prototype.thi$ng$geom$core$PTranslate$ = true;
thi.ng.geom.types.Sphere.prototype.thi$ng$geom$core$PTranslate$translate$arity$2 = (function (_,t){var ___$1 = this;return (new thi.ng.geom.types.Sphere(thi.ng.geom.core._PLUS_.call(null,new cljs.core.Keyword(null,"p","p",1013904354).cljs$core$IFn$_invoke$arity$1(___$1),t),new cljs.core.Keyword(null,"r","r",1013904356).cljs$core$IFn$_invoke$arity$1(___$1)));
});
thi.ng.geom.types.Sphere.prototype.thi$ng$geom$core$PBoundingSphere$ = true;
thi.ng.geom.types.Sphere.prototype.thi$ng$geom$core$PBoundingSphere$bounding_sphere$arity$1 = (function (_){var ___$1 = this;return ___$1;
});
thi.ng.geom.types.Sphere.prototype.thi$ng$geom$core$PScale$ = true;
thi.ng.geom.types.Sphere.prototype.thi$ng$geom$core$PScale$scale$arity$2 = (function (_,s){var ___$1 = this;return (new thi.ng.geom.types.Sphere(thi.ng.geom.core._STAR_.call(null,new cljs.core.Keyword(null,"p","p",1013904354).cljs$core$IFn$_invoke$arity$1(___$1),s),(new cljs.core.Keyword(null,"r","r",1013904356).cljs$core$IFn$_invoke$arity$1(___$1) * s)));
});
thi.ng.geom.types.Sphere.prototype.thi$ng$geom$core$PScale$scale_size$arity$2 = (function (_,s){var ___$1 = this;return (new thi.ng.geom.types.Sphere(new cljs.core.Keyword(null,"p","p",1013904354).cljs$core$IFn$_invoke$arity$1(___$1),(new cljs.core.Keyword(null,"r","r",1013904356).cljs$core$IFn$_invoke$arity$1(___$1) * s)));
});
thi.ng.geom.types.Sphere.prototype.thi$ng$geom$core$PTessellate$ = true;
thi.ng.geom.types.Sphere.prototype.thi$ng$geom$core$PTessellate$tessellate$arity$1 = (function (_){var ___$1 = this;return thi.ng.geom.core.tessellate.call(null,___$1,cljs.core.PersistentArrayMap.EMPTY);
});
thi.ng.geom.types.Sphere.prototype.thi$ng$geom$core$PTessellate$tessellate$arity$2 = (function (_,opts){var ___$1 = this;return thi.ng.geom.core.tessellate.call(null,thi.ng.geom.core.as_mesh.call(null,___$1,opts));
});
thi.ng.geom.types.Sphere.prototype.thi$ng$geom$core$PBounds$ = true;
thi.ng.geom.types.Sphere.prototype.thi$ng$geom$core$PBounds$bounds$arity$1 = (function (_){var ___$1 = this;return (new thi.ng.geom.types.AABB(thi.ng.geom.core._.call(null,new cljs.core.Keyword(null,"p","p",1013904354).cljs$core$IFn$_invoke$arity$1(___$1),new cljs.core.Keyword(null,"r","r",1013904356).cljs$core$IFn$_invoke$arity$1(___$1)),thi.ng.geom.core.vector.vec3.call(null,(2 * new cljs.core.Keyword(null,"r","r",1013904356).cljs$core$IFn$_invoke$arity$1(___$1)))));
});
thi.ng.geom.types.Sphere.prototype.thi$ng$geom$core$PBounds$width$arity$1 = (function (_){var ___$1 = this;return (2.0 * new cljs.core.Keyword(null,"r","r",1013904356).cljs$core$IFn$_invoke$arity$1(___$1));
});
thi.ng.geom.types.Sphere.prototype.thi$ng$geom$core$PBounds$height$arity$1 = (function (_){var ___$1 = this;return (2.0 * new cljs.core.Keyword(null,"r","r",1013904356).cljs$core$IFn$_invoke$arity$1(___$1));
});
thi.ng.geom.types.Sphere.prototype.thi$ng$geom$core$PBounds$depth$arity$1 = (function (_){var ___$1 = this;return (2.0 * new cljs.core.Keyword(null,"r","r",1013904356).cljs$core$IFn$_invoke$arity$1(___$1));
});
thi.ng.geom.types.Sphere.prototype.thi$ng$geom$core$PMeshConvert$ = true;
thi.ng.geom.types.Sphere.prototype.thi$ng$geom$core$PMeshConvert$as_mesh$arity$1 = (function (_){var ___$1 = this;return thi.ng.geom.core.as_mesh.call(null,___$1,cljs.core.PersistentArrayMap.EMPTY);
});
thi.ng.geom.types.Sphere.prototype.thi$ng$geom$core$PMeshConvert$as_mesh$arity$2 = (function (p__11256,p__11257){var map__11258 = p__11256;var map__11258__$1 = ((cljs.core.seq_QMARK_.call(null,map__11258))?cljs.core.apply.call(null,cljs.core.hash_map,map__11258):map__11258);var vec__11259 = cljs.core.get.call(null,map__11258__$1,new cljs.core.Keyword(null,"p","p",1013904354));var x = cljs.core.nth.call(null,vec__11259,0,null);var y = cljs.core.nth.call(null,vec__11259,1,null);var z = cljs.core.nth.call(null,vec__11259,2,null);var r = cljs.core.get.call(null,map__11258__$1,new cljs.core.Keyword(null,"r","r",1013904356));var map__11260 = p__11257;var map__11260__$1 = ((cljs.core.seq_QMARK_.call(null,map__11260))?cljs.core.apply.call(null,cljs.core.hash_map,map__11260):map__11260);var stacks = cljs.core.get.call(null,map__11260__$1,new cljs.core.Keyword(null,"stacks","stacks",4416373341));var slices = cljs.core.get.call(null,map__11260__$1,new cljs.core.Keyword(null,"slices","slices",4409223315));var res = cljs.core.get.call(null,map__11260__$1,new cljs.core.Keyword(null,"res","res",1014017042),thi.ng.geom.core._STAR_resolution_STAR_);var mesh = cljs.core.get.call(null,map__11260__$1,new cljs.core.Keyword(null,"mesh","mesh",1017252191));var map__11261 = this;var map__11261__$1 = ((cljs.core.seq_QMARK_.call(null,map__11261))?cljs.core.apply.call(null,cljs.core.hash_map,map__11261):map__11261);var vec__11262 = cljs.core.get.call(null,map__11261__$1,new cljs.core.Keyword(null,"p","p",1013904354));var x__$1 = cljs.core.nth.call(null,vec__11262,0,null);var y__$1 = cljs.core.nth.call(null,vec__11262,1,null);var z__$1 = cljs.core.nth.call(null,vec__11262,2,null);var r__$1 = cljs.core.get.call(null,map__11261__$1,new cljs.core.Keyword(null,"r","r",1013904356));var slices__$1 = (function (){var or__4953__auto__ = slices;if(cljs.core.truth_(or__4953__auto__))
{return or__4953__auto__;
} else
{return res;
}
})();var stacks__$1 = (function (){var or__4953__auto__ = stacks;if(cljs.core.truth_(or__4953__auto__))
{return or__4953__auto__;
} else
{return res;
}
})();var range_u = cljs.core.range.call(null,slices__$1);var range_v = cljs.core.range.call(null,stacks__$1);return thi.ng.geom.core.into.call(null,(function (){var or__4953__auto__ = mesh;if(cljs.core.truth_(or__4953__auto__))
{return or__4953__auto__;
} else
{return thi.ng.geom.gmesh.gmesh.call(null);
}
})(),cljs.core.map.call(null,((function (slices__$1,stacks__$1,range_u,range_v,map__11261,map__11261__$1,vec__11262,x__$1,y__$1,z__$1,r__$1,map__11258,map__11258__$1,vec__11259,x,y,z,r,map__11260,map__11260__$1,stacks,slices,res,mesh){
return (function (verts){return cljs.core.map.call(null,((function (slices__$1,stacks__$1,range_u,range_v,map__11261,map__11261__$1,vec__11262,x__$1,y__$1,z__$1,r__$1,map__11258,map__11258__$1,vec__11259,x,y,z,r,map__11260,map__11260__$1,stacks,slices,res,mesh){
return (function (p__11263){var vec__11264 = p__11263;var u = cljs.core.nth.call(null,vec__11264,0,null);var v = cljs.core.nth.call(null,vec__11264,1,null);var theta = (thi.ng.common.math.core.TWO_PI * u);var phi = (thi.ng.common.math.core.PI * v);var st = Math.sin.call(null,theta);var ct = Math.cos.call(null,theta);var sp = Math.sin.call(null,phi);var cp = Math.cos.call(null,phi);return thi.ng.geom.core.vector.vec3.call(null,(((ct * sp) * r__$1) + x__$1),((cp * r__$1) + y__$1),(((st * sp) * r__$1) + z__$1));
});})(slices__$1,stacks__$1,range_u,range_v,map__11261,map__11261__$1,vec__11262,x__$1,y__$1,z__$1,r__$1,map__11258,map__11258__$1,vec__11259,x,y,z,r,map__11260,map__11260__$1,stacks,slices,res,mesh))
,verts);
});})(slices__$1,stacks__$1,range_u,range_v,map__11261,map__11261__$1,vec__11262,x__$1,y__$1,z__$1,r__$1,map__11258,map__11258__$1,vec__11259,x,y,z,r,map__11260,map__11260__$1,stacks,slices,res,mesh))
,(function (){var iter__5670__auto__ = ((function (slices__$1,stacks__$1,range_u,range_v,map__11261,map__11261__$1,vec__11262,x__$1,y__$1,z__$1,r__$1,map__11258,map__11258__$1,vec__11259,x,y,z,r,map__11260,map__11260__$1,stacks,slices,res,mesh){
return (function iter__11265(s__11266){return (new cljs.core.LazySeq(null,((function (slices__$1,stacks__$1,range_u,range_v,map__11261,map__11261__$1,vec__11262,x__$1,y__$1,z__$1,r__$1,map__11258,map__11258__$1,vec__11259,x,y,z,r,map__11260,map__11260__$1,stacks,slices,res,mesh){
return (function (){var s__11266__$1 = s__11266;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__11266__$1);if(temp__4126__auto__)
{var xs__4624__auto__ = temp__4126__auto__;var i = cljs.core.first.call(null,xs__4624__auto__);var iterys__5666__auto__ = ((function (s__11266__$1,i,xs__4624__auto__,temp__4126__auto__,slices__$1,stacks__$1,range_u,range_v,map__11261,map__11261__$1,vec__11262,x__$1,y__$1,z__$1,r__$1,map__11258,map__11258__$1,vec__11259,x,y,z,r,map__11260,map__11260__$1,stacks,slices,res,mesh){
return (function iter__11267(s__11268){return (new cljs.core.LazySeq(null,((function (s__11266__$1,i,xs__4624__auto__,temp__4126__auto__,slices__$1,stacks__$1,range_u,range_v,map__11261,map__11261__$1,vec__11262,x__$1,y__$1,z__$1,r__$1,map__11258,map__11258__$1,vec__11259,x,y,z,r,map__11260,map__11260__$1,stacks,slices,res,mesh){
return (function (){var s__11268__$1 = s__11268;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__11268__$1);if(temp__4126__auto____$1)
{var s__11268__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__11268__$2))
{var c__5668__auto__ = cljs.core.chunk_first.call(null,s__11268__$2);var size__5669__auto__ = cljs.core.count.call(null,c__5668__auto__);var b__11270 = cljs.core.chunk_buffer.call(null,size__5669__auto__);if((function (){var i__11269 = 0;while(true){
if((i__11269 < size__5669__auto__))
{var j = cljs.core._nth.call(null,c__5668__auto__,i__11269);var u = (i / slices__$1);var v = (j / stacks__$1);var u1 = ((i + 1) / slices__$1);var v1 = ((j + 1) / stacks__$1);var verts = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [u,v], null)], null);var verts__$1 = (((j > 0))?cljs.core.conj.call(null,verts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [u1,v], null)):verts);var verts__$2 = (((j < (stacks__$1 - 1)))?cljs.core.conj.call(null,verts__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [u1,v1], null)):verts__$1);cljs.core.chunk_append.call(null,b__11270,cljs.core.conj.call(null,verts__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [u,v1], null)));
{
var G__11274 = (i__11269 + 1);
i__11269 = G__11274;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11270),iter__11267.call(null,cljs.core.chunk_rest.call(null,s__11268__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11270),null);
}
} else
{var j = cljs.core.first.call(null,s__11268__$2);var u = (i / slices__$1);var v = (j / stacks__$1);var u1 = ((i + 1) / slices__$1);var v1 = ((j + 1) / stacks__$1);var verts = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [u,v], null)], null);var verts__$1 = (((j > 0))?cljs.core.conj.call(null,verts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [u1,v], null)):verts);var verts__$2 = (((j < (stacks__$1 - 1)))?cljs.core.conj.call(null,verts__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [u1,v1], null)):verts__$1);return cljs.core.cons.call(null,cljs.core.conj.call(null,verts__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [u,v1], null)),iter__11267.call(null,cljs.core.rest.call(null,s__11268__$2)));
}
} else
{return null;
}
break;
}
});})(s__11266__$1,i,xs__4624__auto__,temp__4126__auto__,slices__$1,stacks__$1,range_u,range_v,map__11261,map__11261__$1,vec__11262,x__$1,y__$1,z__$1,r__$1,map__11258,map__11258__$1,vec__11259,x,y,z,r,map__11260,map__11260__$1,stacks,slices,res,mesh))
,null,null));
});})(s__11266__$1,i,xs__4624__auto__,temp__4126__auto__,slices__$1,stacks__$1,range_u,range_v,map__11261,map__11261__$1,vec__11262,x__$1,y__$1,z__$1,r__$1,map__11258,map__11258__$1,vec__11259,x,y,z,r,map__11260,map__11260__$1,stacks,slices,res,mesh))
;var fs__5667__auto__ = cljs.core.seq.call(null,iterys__5666__auto__.call(null,range_v));if(fs__5667__auto__)
{return cljs.core.concat.call(null,fs__5667__auto__,iter__11265.call(null,cljs.core.rest.call(null,s__11266__$1)));
} else
{{
var G__11275 = cljs.core.rest.call(null,s__11266__$1);
s__11266__$1 = G__11275;
continue;
}
}
} else
{return null;
}
break;
}
});})(slices__$1,stacks__$1,range_u,range_v,map__11261,map__11261__$1,vec__11262,x__$1,y__$1,z__$1,r__$1,map__11258,map__11258__$1,vec__11259,x,y,z,r,map__11260,map__11260__$1,stacks,slices,res,mesh))
,null,null));
});})(slices__$1,stacks__$1,range_u,range_v,map__11261,map__11261__$1,vec__11262,x__$1,y__$1,z__$1,r__$1,map__11258,map__11258__$1,vec__11259,x,y,z,r,map__11260,map__11260__$1,stacks,slices,res,mesh))
;return iter__5670__auto__.call(null,range_u);
})()));
});
thi.ng.geom.types.Sphere.prototype.thi$ng$geom$core$PProximity$ = true;
thi.ng.geom.types.Sphere.prototype.thi$ng$geom$core$PProximity$closest_point$arity$2 = (function (p__11271,q){var map__11272 = p__11271;var map__11272__$1 = ((cljs.core.seq_QMARK_.call(null,map__11272))?cljs.core.apply.call(null,cljs.core.hash_map,map__11272):map__11272);var p = cljs.core.get.call(null,map__11272__$1,new cljs.core.Keyword(null,"p","p",1013904354));var r = cljs.core.get.call(null,map__11272__$1,new cljs.core.Keyword(null,"r","r",1013904356));var map__11273 = this;var map__11273__$1 = ((cljs.core.seq_QMARK_.call(null,map__11273))?cljs.core.apply.call(null,cljs.core.hash_map,map__11273):map__11273);var p__$1 = cljs.core.get.call(null,map__11273__$1,new cljs.core.Keyword(null,"p","p",1013904354));var r__$1 = cljs.core.get.call(null,map__11273__$1,new cljs.core.Keyword(null,"r","r",1013904356));return thi.ng.geom.core._PLUS_.call(null,p__$1,thi.ng.geom.core.normalize.call(null,thi.ng.geom.core._.call(null,q,p__$1),r__$1));
});
thi.ng.geom.types.Sphere.prototype.thi$ng$geom$core$PArea$ = true;
thi.ng.geom.types.Sphere.prototype.thi$ng$geom$core$PArea$area$arity$1 = (function (p__11253){var map__11254 = p__11253;var map__11254__$1 = ((cljs.core.seq_QMARK_.call(null,map__11254))?cljs.core.apply.call(null,cljs.core.hash_map,map__11254):map__11254);var r = cljs.core.get.call(null,map__11254__$1,new cljs.core.Keyword(null,"r","r",1013904356));var map__11255 = this;var map__11255__$1 = ((cljs.core.seq_QMARK_.call(null,map__11255))?cljs.core.apply.call(null,cljs.core.hash_map,map__11255):map__11255);var r__$1 = cljs.core.get.call(null,map__11255__$1,new cljs.core.Keyword(null,"r","r",1013904356));return (((4.0 * thi.ng.common.math.core.PI) * r__$1) * r__$1);
});
