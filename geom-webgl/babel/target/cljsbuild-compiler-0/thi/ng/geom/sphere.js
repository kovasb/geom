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
thi.ng.geom.types.Sphere.prototype.thi$ng$geom$core$PClassify$classify_point$arity$2 = (function (p__8271,q){var map__8272 = p__8271;var map__8272__$1 = ((cljs.core.seq_QMARK_.call(null,map__8272))?cljs.core.apply.call(null,cljs.core.hash_map,map__8272):map__8272);var p = cljs.core.get.call(null,map__8272__$1,new cljs.core.Keyword(null,"p","p",1013904354));var r = cljs.core.get.call(null,map__8272__$1,new cljs.core.Keyword(null,"r","r",1013904356));var map__8273 = this;var map__8273__$1 = ((cljs.core.seq_QMARK_.call(null,map__8273))?cljs.core.apply.call(null,cljs.core.hash_map,map__8273):map__8273);var p__$1 = cljs.core.get.call(null,map__8273__$1,new cljs.core.Keyword(null,"p","p",1013904354));var r__$1 = cljs.core.get.call(null,map__8273__$1,new cljs.core.Keyword(null,"r","r",1013904356));return thi.ng.common.math.core.signum.call(null,((r__$1 * r__$1) - thi.ng.geom.core.dist_squared.call(null,p__$1,q)),thi.ng.common.math.core._STAR_eps_STAR_);
});
thi.ng.geom.types.Sphere.prototype.thi$ng$geom$core$PVolume$ = true;
thi.ng.geom.types.Sphere.prototype.thi$ng$geom$core$PVolume$volume$arity$1 = (function (p__8274){var map__8275 = p__8274;var map__8275__$1 = ((cljs.core.seq_QMARK_.call(null,map__8275))?cljs.core.apply.call(null,cljs.core.hash_map,map__8275):map__8275);var r = cljs.core.get.call(null,map__8275__$1,new cljs.core.Keyword(null,"r","r",1013904356));var map__8276 = this;var map__8276__$1 = ((cljs.core.seq_QMARK_.call(null,map__8276))?cljs.core.apply.call(null,cljs.core.hash_map,map__8276):map__8276);var r__$1 = cljs.core.get.call(null,map__8276__$1,new cljs.core.Keyword(null,"r","r",1013904356));return (((((4.0 / 3.0) * thi.ng.common.math.core.PI) * r__$1) * r__$1) * r__$1);
});
thi.ng.geom.types.Sphere.prototype.thi$ng$geom$core$PBoundary$ = true;
thi.ng.geom.types.Sphere.prototype.thi$ng$geom$core$PBoundary$contains_point_QMARK_$arity$2 = (function (p__8277,q){var map__8278 = p__8277;var map__8278__$1 = ((cljs.core.seq_QMARK_.call(null,map__8278))?cljs.core.apply.call(null,cljs.core.hash_map,map__8278):map__8278);var p = cljs.core.get.call(null,map__8278__$1,new cljs.core.Keyword(null,"p","p",1013904354));var r = cljs.core.get.call(null,map__8278__$1,new cljs.core.Keyword(null,"r","r",1013904356));var map__8279 = this;var map__8279__$1 = ((cljs.core.seq_QMARK_.call(null,map__8279))?cljs.core.apply.call(null,cljs.core.hash_map,map__8279):map__8279);var p__$1 = cljs.core.get.call(null,map__8279__$1,new cljs.core.Keyword(null,"p","p",1013904354));var r__$1 = cljs.core.get.call(null,map__8279__$1,new cljs.core.Keyword(null,"r","r",1013904356));return (thi.ng.geom.core.dist_squared.call(null,p__$1,q) <= (r__$1 * r__$1));
});
thi.ng.geom.types.Sphere.prototype.thi$ng$geom$core$PIntersect$ = true;
thi.ng.geom.types.Sphere.prototype.thi$ng$geom$core$PIntersect$intersect_ray$arity$2 = (function (p__8280,ray){var map__8281 = p__8280;var map__8281__$1 = ((cljs.core.seq_QMARK_.call(null,map__8281))?cljs.core.apply.call(null,cljs.core.hash_map,map__8281):map__8281);var p = cljs.core.get.call(null,map__8281__$1,new cljs.core.Keyword(null,"p","p",1013904354));var r = cljs.core.get.call(null,map__8281__$1,new cljs.core.Keyword(null,"r","r",1013904356));var map__8282 = this;var map__8282__$1 = ((cljs.core.seq_QMARK_.call(null,map__8282))?cljs.core.apply.call(null,cljs.core.hash_map,map__8282):map__8282);var p__$1 = cljs.core.get.call(null,map__8282__$1,new cljs.core.Keyword(null,"p","p",1013904354));var r__$1 = cljs.core.get.call(null,map__8282__$1,new cljs.core.Keyword(null,"r","r",1013904356));var vec__8283 = ((cljs.core.map_QMARK_.call(null,ray))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",1013904354).cljs$core$IFn$_invoke$arity$1(ray),new cljs.core.Keyword(null,"dir","dir",1014003711).cljs$core$IFn$_invoke$arity$1(ray)], null):ray);var rp = cljs.core.nth.call(null,vec__8283,0,null);var dir = cljs.core.nth.call(null,vec__8283,1,null);return thi.ng.geom.core.intersect.intersect_ray_sphere_QMARK_.call(null,rp,dir,p__$1,r__$1);
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
thi.ng.geom.types.Sphere.prototype.thi$ng$geom$core$PMeshConvert$as_mesh$arity$2 = (function (p__8287,p__8288){var map__8289 = p__8287;var map__8289__$1 = ((cljs.core.seq_QMARK_.call(null,map__8289))?cljs.core.apply.call(null,cljs.core.hash_map,map__8289):map__8289);var vec__8290 = cljs.core.get.call(null,map__8289__$1,new cljs.core.Keyword(null,"p","p",1013904354));var x = cljs.core.nth.call(null,vec__8290,0,null);var y = cljs.core.nth.call(null,vec__8290,1,null);var z = cljs.core.nth.call(null,vec__8290,2,null);var r = cljs.core.get.call(null,map__8289__$1,new cljs.core.Keyword(null,"r","r",1013904356));var map__8291 = p__8288;var map__8291__$1 = ((cljs.core.seq_QMARK_.call(null,map__8291))?cljs.core.apply.call(null,cljs.core.hash_map,map__8291):map__8291);var stacks = cljs.core.get.call(null,map__8291__$1,new cljs.core.Keyword(null,"stacks","stacks",4416373341));var slices = cljs.core.get.call(null,map__8291__$1,new cljs.core.Keyword(null,"slices","slices",4409223315));var res = cljs.core.get.call(null,map__8291__$1,new cljs.core.Keyword(null,"res","res",1014017042),thi.ng.geom.core._STAR_resolution_STAR_);var mesh = cljs.core.get.call(null,map__8291__$1,new cljs.core.Keyword(null,"mesh","mesh",1017252191));var map__8292 = this;var map__8292__$1 = ((cljs.core.seq_QMARK_.call(null,map__8292))?cljs.core.apply.call(null,cljs.core.hash_map,map__8292):map__8292);var vec__8293 = cljs.core.get.call(null,map__8292__$1,new cljs.core.Keyword(null,"p","p",1013904354));var x__$1 = cljs.core.nth.call(null,vec__8293,0,null);var y__$1 = cljs.core.nth.call(null,vec__8293,1,null);var z__$1 = cljs.core.nth.call(null,vec__8293,2,null);var r__$1 = cljs.core.get.call(null,map__8292__$1,new cljs.core.Keyword(null,"r","r",1013904356));var slices__$1 = (function (){var or__3481__auto__ = slices;if(cljs.core.truth_(or__3481__auto__))
{return or__3481__auto__;
} else
{return res;
}
})();var stacks__$1 = (function (){var or__3481__auto__ = stacks;if(cljs.core.truth_(or__3481__auto__))
{return or__3481__auto__;
} else
{return res;
}
})();var range_u = cljs.core.range.call(null,slices__$1);var range_v = cljs.core.range.call(null,stacks__$1);return thi.ng.geom.core.into.call(null,(function (){var or__3481__auto__ = mesh;if(cljs.core.truth_(or__3481__auto__))
{return or__3481__auto__;
} else
{return thi.ng.geom.gmesh.gmesh.call(null);
}
})(),cljs.core.map.call(null,((function (slices__$1,stacks__$1,range_u,range_v,map__8292,map__8292__$1,vec__8293,x__$1,y__$1,z__$1,r__$1,map__8289,map__8289__$1,vec__8290,x,y,z,r,map__8291,map__8291__$1,stacks,slices,res,mesh){
return (function (verts){return cljs.core.map.call(null,((function (slices__$1,stacks__$1,range_u,range_v,map__8292,map__8292__$1,vec__8293,x__$1,y__$1,z__$1,r__$1,map__8289,map__8289__$1,vec__8290,x,y,z,r,map__8291,map__8291__$1,stacks,slices,res,mesh){
return (function (p__8294){var vec__8295 = p__8294;var u = cljs.core.nth.call(null,vec__8295,0,null);var v = cljs.core.nth.call(null,vec__8295,1,null);var theta = (thi.ng.common.math.core.TWO_PI * u);var phi = (thi.ng.common.math.core.PI * v);var st = Math.sin.call(null,theta);var ct = Math.cos.call(null,theta);var sp = Math.sin.call(null,phi);var cp = Math.cos.call(null,phi);return thi.ng.geom.core.vector.vec3.call(null,(((ct * sp) * r__$1) + x__$1),((cp * r__$1) + y__$1),(((st * sp) * r__$1) + z__$1));
});})(slices__$1,stacks__$1,range_u,range_v,map__8292,map__8292__$1,vec__8293,x__$1,y__$1,z__$1,r__$1,map__8289,map__8289__$1,vec__8290,x,y,z,r,map__8291,map__8291__$1,stacks,slices,res,mesh))
,verts);
});})(slices__$1,stacks__$1,range_u,range_v,map__8292,map__8292__$1,vec__8293,x__$1,y__$1,z__$1,r__$1,map__8289,map__8289__$1,vec__8290,x,y,z,r,map__8291,map__8291__$1,stacks,slices,res,mesh))
,(function (){var iter__4198__auto__ = ((function (slices__$1,stacks__$1,range_u,range_v,map__8292,map__8292__$1,vec__8293,x__$1,y__$1,z__$1,r__$1,map__8289,map__8289__$1,vec__8290,x,y,z,r,map__8291,map__8291__$1,stacks,slices,res,mesh){
return (function iter__8296(s__8297){return (new cljs.core.LazySeq(null,((function (slices__$1,stacks__$1,range_u,range_v,map__8292,map__8292__$1,vec__8293,x__$1,y__$1,z__$1,r__$1,map__8289,map__8289__$1,vec__8290,x,y,z,r,map__8291,map__8291__$1,stacks,slices,res,mesh){
return (function (){var s__8297__$1 = s__8297;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__8297__$1);if(temp__4126__auto__)
{var xs__4624__auto__ = temp__4126__auto__;var i = cljs.core.first.call(null,xs__4624__auto__);var iterys__4194__auto__ = ((function (s__8297__$1,i,xs__4624__auto__,temp__4126__auto__,slices__$1,stacks__$1,range_u,range_v,map__8292,map__8292__$1,vec__8293,x__$1,y__$1,z__$1,r__$1,map__8289,map__8289__$1,vec__8290,x,y,z,r,map__8291,map__8291__$1,stacks,slices,res,mesh){
return (function iter__8298(s__8299){return (new cljs.core.LazySeq(null,((function (s__8297__$1,i,xs__4624__auto__,temp__4126__auto__,slices__$1,stacks__$1,range_u,range_v,map__8292,map__8292__$1,vec__8293,x__$1,y__$1,z__$1,r__$1,map__8289,map__8289__$1,vec__8290,x,y,z,r,map__8291,map__8291__$1,stacks,slices,res,mesh){
return (function (){var s__8299__$1 = s__8299;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__8299__$1);if(temp__4126__auto____$1)
{var s__8299__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__8299__$2))
{var c__4196__auto__ = cljs.core.chunk_first.call(null,s__8299__$2);var size__4197__auto__ = cljs.core.count.call(null,c__4196__auto__);var b__8301 = cljs.core.chunk_buffer.call(null,size__4197__auto__);if((function (){var i__8300 = 0;while(true){
if((i__8300 < size__4197__auto__))
{var j = cljs.core._nth.call(null,c__4196__auto__,i__8300);var u = (i / slices__$1);var v = (j / stacks__$1);var u1 = ((i + 1) / slices__$1);var v1 = ((j + 1) / stacks__$1);var verts = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [u,v], null)], null);var verts__$1 = (((j > 0))?cljs.core.conj.call(null,verts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [u1,v], null)):verts);var verts__$2 = (((j < (stacks__$1 - 1)))?cljs.core.conj.call(null,verts__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [u1,v1], null)):verts__$1);cljs.core.chunk_append.call(null,b__8301,cljs.core.conj.call(null,verts__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [u,v1], null)));
{
var G__8305 = (i__8300 + 1);
i__8300 = G__8305;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8301),iter__8298.call(null,cljs.core.chunk_rest.call(null,s__8299__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8301),null);
}
} else
{var j = cljs.core.first.call(null,s__8299__$2);var u = (i / slices__$1);var v = (j / stacks__$1);var u1 = ((i + 1) / slices__$1);var v1 = ((j + 1) / stacks__$1);var verts = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [u,v], null)], null);var verts__$1 = (((j > 0))?cljs.core.conj.call(null,verts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [u1,v], null)):verts);var verts__$2 = (((j < (stacks__$1 - 1)))?cljs.core.conj.call(null,verts__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [u1,v1], null)):verts__$1);return cljs.core.cons.call(null,cljs.core.conj.call(null,verts__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [u,v1], null)),iter__8298.call(null,cljs.core.rest.call(null,s__8299__$2)));
}
} else
{return null;
}
break;
}
});})(s__8297__$1,i,xs__4624__auto__,temp__4126__auto__,slices__$1,stacks__$1,range_u,range_v,map__8292,map__8292__$1,vec__8293,x__$1,y__$1,z__$1,r__$1,map__8289,map__8289__$1,vec__8290,x,y,z,r,map__8291,map__8291__$1,stacks,slices,res,mesh))
,null,null));
});})(s__8297__$1,i,xs__4624__auto__,temp__4126__auto__,slices__$1,stacks__$1,range_u,range_v,map__8292,map__8292__$1,vec__8293,x__$1,y__$1,z__$1,r__$1,map__8289,map__8289__$1,vec__8290,x,y,z,r,map__8291,map__8291__$1,stacks,slices,res,mesh))
;var fs__4195__auto__ = cljs.core.seq.call(null,iterys__4194__auto__.call(null,range_v));if(fs__4195__auto__)
{return cljs.core.concat.call(null,fs__4195__auto__,iter__8296.call(null,cljs.core.rest.call(null,s__8297__$1)));
} else
{{
var G__8306 = cljs.core.rest.call(null,s__8297__$1);
s__8297__$1 = G__8306;
continue;
}
}
} else
{return null;
}
break;
}
});})(slices__$1,stacks__$1,range_u,range_v,map__8292,map__8292__$1,vec__8293,x__$1,y__$1,z__$1,r__$1,map__8289,map__8289__$1,vec__8290,x,y,z,r,map__8291,map__8291__$1,stacks,slices,res,mesh))
,null,null));
});})(slices__$1,stacks__$1,range_u,range_v,map__8292,map__8292__$1,vec__8293,x__$1,y__$1,z__$1,r__$1,map__8289,map__8289__$1,vec__8290,x,y,z,r,map__8291,map__8291__$1,stacks,slices,res,mesh))
;return iter__4198__auto__.call(null,range_u);
})()));
});
thi.ng.geom.types.Sphere.prototype.thi$ng$geom$core$PProximity$ = true;
thi.ng.geom.types.Sphere.prototype.thi$ng$geom$core$PProximity$closest_point$arity$2 = (function (p__8302,q){var map__8303 = p__8302;var map__8303__$1 = ((cljs.core.seq_QMARK_.call(null,map__8303))?cljs.core.apply.call(null,cljs.core.hash_map,map__8303):map__8303);var p = cljs.core.get.call(null,map__8303__$1,new cljs.core.Keyword(null,"p","p",1013904354));var r = cljs.core.get.call(null,map__8303__$1,new cljs.core.Keyword(null,"r","r",1013904356));var map__8304 = this;var map__8304__$1 = ((cljs.core.seq_QMARK_.call(null,map__8304))?cljs.core.apply.call(null,cljs.core.hash_map,map__8304):map__8304);var p__$1 = cljs.core.get.call(null,map__8304__$1,new cljs.core.Keyword(null,"p","p",1013904354));var r__$1 = cljs.core.get.call(null,map__8304__$1,new cljs.core.Keyword(null,"r","r",1013904356));return thi.ng.geom.core._PLUS_.call(null,p__$1,thi.ng.geom.core.normalize.call(null,thi.ng.geom.core._.call(null,q,p__$1),r__$1));
});
thi.ng.geom.types.Sphere.prototype.thi$ng$geom$core$PArea$ = true;
thi.ng.geom.types.Sphere.prototype.thi$ng$geom$core$PArea$area$arity$1 = (function (p__8284){var map__8285 = p__8284;var map__8285__$1 = ((cljs.core.seq_QMARK_.call(null,map__8285))?cljs.core.apply.call(null,cljs.core.hash_map,map__8285):map__8285);var r = cljs.core.get.call(null,map__8285__$1,new cljs.core.Keyword(null,"r","r",1013904356));var map__8286 = this;var map__8286__$1 = ((cljs.core.seq_QMARK_.call(null,map__8286))?cljs.core.apply.call(null,cljs.core.hash_map,map__8286):map__8286);var r__$1 = cljs.core.get.call(null,map__8286__$1,new cljs.core.Keyword(null,"r","r",1013904356));return (((4.0 * thi.ng.common.math.core.PI) * r__$1) * r__$1);
});
