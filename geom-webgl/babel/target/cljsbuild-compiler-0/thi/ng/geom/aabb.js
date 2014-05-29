// Compiled by ClojureScript 0.0-2202
goog.provide('thi.ng.geom.aabb');
goog.require('cljs.core');
goog.require('thi.ng.common.math.core');
goog.require('thi.ng.geom.core.vector');
goog.require('thi.ng.geom.core.utils');
goog.require('thi.ng.geom.types.utils');
goog.require('thi.ng.geom.core');
goog.require('thi.ng.geom.core.utils');
goog.require('thi.ng.geom.core.vector');
goog.require('thi.ng.geom.gmesh');
goog.require('thi.ng.geom.core.vector');
goog.require('thi.ng.geom.core.intersect');
goog.require('thi.ng.geom.cuboid');
goog.require('thi.ng.common.math.core');
goog.require('thi.ng.geom.types');
goog.require('thi.ng.geom.gmesh');
goog.require('thi.ng.common.error');
goog.require('thi.ng.common.data.core');
goog.require('thi.ng.geom.cuboid');
goog.require('thi.ng.geom.core');
goog.require('thi.ng.geom.types.utils');
goog.require('thi.ng.common.math.core');
goog.require('thi.ng.geom.core.intersect');
goog.require('thi.ng.common.error');
goog.require('thi.ng.common.data.core');
thi.ng.geom.aabb.aabb = (function() {
var aabb = null;
var aabb__0 = (function (){return (new thi.ng.geom.types.AABB(thi.ng.geom.core.vector.vec3.call(null,0.0),thi.ng.geom.core.vector.vec3.call(null,1.0)));
});
var aabb__1 = (function (size){return (new thi.ng.geom.types.AABB(thi.ng.geom.core.vector.vec3.call(null,0.0),thi.ng.geom.core.vector.vec3.call(null,size)));
});
var aabb__2 = (function (o,size){return (new thi.ng.geom.types.AABB(thi.ng.geom.core.vector.vec3.call(null,o),thi.ng.geom.core.vector.vec3.call(null,size)));
});
var aabb__3 = (function (sx,sy,sz){return (new thi.ng.geom.types.AABB(thi.ng.geom.core.vector.vec3.call(null,0.0),thi.ng.geom.core.vector.vec3.call(null,sx,sy,sz)));
});
aabb = function(sx,sy,sz){
switch(arguments.length){
case 0:
return aabb__0.call(this);
case 1:
return aabb__1.call(this,sx);
case 2:
return aabb__2.call(this,sx,sy);
case 3:
return aabb__3.call(this,sx,sy,sz);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
aabb.cljs$core$IFn$_invoke$arity$0 = aabb__0;
aabb.cljs$core$IFn$_invoke$arity$1 = aabb__1;
aabb.cljs$core$IFn$_invoke$arity$2 = aabb__2;
aabb.cljs$core$IFn$_invoke$arity$3 = aabb__3;
return aabb;
})()
;
thi.ng.geom.aabb.aabb_from_minmax = (function aabb_from_minmax(p,q){var a = thi.ng.geom.core.min.call(null,p,q);return (new thi.ng.geom.types.AABB(a,thi.ng.geom.core._.call(null,thi.ng.geom.core.max.call(null,p,q),a)));
});
thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PTransform$ = true;
thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PTransform$transform$arity$2 = (function (_,m){var ___$1 = this;return thi.ng.geom.core.transform.call(null,thi.ng.geom.cuboid.cuboid.call(null,new cljs.core.Keyword(null,"p","p",1013904354).cljs$core$IFn$_invoke$arity$1(___$1),new cljs.core.Keyword(null,"size","size",1017434995).cljs$core$IFn$_invoke$arity$1(___$1)),m);
});
thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PRotate$ = true;
thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PRotate$rotate$arity$2 = (function (_,theta){var ___$1 = this;return thi.ng.geom.core.rotate_z.call(null,thi.ng.geom.cuboid.cuboid.call(null,new cljs.core.Keyword(null,"p","p",1013904354).cljs$core$IFn$_invoke$arity$1(___$1),new cljs.core.Keyword(null,"size","size",1017434995).cljs$core$IFn$_invoke$arity$1(___$1)),theta);
});
thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PRotate3D$ = true;
thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PRotate3D$rotate_x$arity$2 = (function (_,theta){var ___$1 = this;return thi.ng.geom.core.rotate_x.call(null,thi.ng.geom.cuboid.cuboid.call(null,new cljs.core.Keyword(null,"p","p",1013904354).cljs$core$IFn$_invoke$arity$1(___$1),new cljs.core.Keyword(null,"size","size",1017434995).cljs$core$IFn$_invoke$arity$1(___$1)),theta);
});
thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PRotate3D$rotate_y$arity$2 = (function (_,theta){var ___$1 = this;return thi.ng.geom.core.rotate_y.call(null,thi.ng.geom.cuboid.cuboid.call(null,new cljs.core.Keyword(null,"p","p",1013904354).cljs$core$IFn$_invoke$arity$1(___$1),new cljs.core.Keyword(null,"size","size",1017434995).cljs$core$IFn$_invoke$arity$1(___$1)),theta);
});
thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PRotate3D$rotate_z$arity$2 = (function (_,theta){var ___$1 = this;return thi.ng.geom.core.rotate_z.call(null,thi.ng.geom.cuboid.cuboid.call(null,new cljs.core.Keyword(null,"p","p",1013904354).cljs$core$IFn$_invoke$arity$1(___$1),new cljs.core.Keyword(null,"size","size",1017434995).cljs$core$IFn$_invoke$arity$1(___$1)),theta);
});
thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PRotate3D$rotate_around_axis$arity$3 = (function (_,axis,theta){var ___$1 = this;return thi.ng.geom.core.rotate_around_axis.call(null,thi.ng.geom.cuboid.cuboid.call(null,new cljs.core.Keyword(null,"p","p",1013904354).cljs$core$IFn$_invoke$arity$1(___$1),new cljs.core.Keyword(null,"size","size",1017434995).cljs$core$IFn$_invoke$arity$1(___$1)),axis,theta);
});
thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PCenter$ = true;
thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PCenter$center$arity$1 = (function (p__8323){var map__8324 = p__8323;var map__8324__$1 = ((cljs.core.seq_QMARK_.call(null,map__8324))?cljs.core.apply.call(null,cljs.core.hash_map,map__8324):map__8324);var p = cljs.core.get.call(null,map__8324__$1,new cljs.core.Keyword(null,"p","p",1013904354));var size = cljs.core.get.call(null,map__8324__$1,new cljs.core.Keyword(null,"size","size",1017434995));var map__8325 = this;var map__8325__$1 = ((cljs.core.seq_QMARK_.call(null,map__8325))?cljs.core.apply.call(null,cljs.core.hash_map,map__8325):map__8325);var p__$1 = cljs.core.get.call(null,map__8325__$1,new cljs.core.Keyword(null,"p","p",1013904354));var size__$1 = cljs.core.get.call(null,map__8325__$1,new cljs.core.Keyword(null,"size","size",1017434995));return (new thi.ng.geom.types.AABB(thi.ng.geom.core._.call(null,p__$1,thi.ng.geom.core._STAR_.call(null,size__$1,0.5)),size__$1));
});
thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PCenter$center$arity$2 = (function (p__8326,q){var map__8327 = p__8326;var map__8327__$1 = ((cljs.core.seq_QMARK_.call(null,map__8327))?cljs.core.apply.call(null,cljs.core.hash_map,map__8327):map__8327);var size = cljs.core.get.call(null,map__8327__$1,new cljs.core.Keyword(null,"size","size",1017434995));var map__8328 = this;var map__8328__$1 = ((cljs.core.seq_QMARK_.call(null,map__8328))?cljs.core.apply.call(null,cljs.core.hash_map,map__8328):map__8328);var size__$1 = cljs.core.get.call(null,map__8328__$1,new cljs.core.Keyword(null,"size","size",1017434995));return (new thi.ng.geom.types.AABB(thi.ng.geom.core._.call(null,q,thi.ng.geom.core._STAR_.call(null,size__$1,0.5)),size__$1));
});
thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PCenter$centroid$arity$1 = (function (_){var ___$1 = this;return thi.ng.geom.core.madd.call(null,new cljs.core.Keyword(null,"size","size",1017434995).cljs$core$IFn$_invoke$arity$1(___$1),0.5,new cljs.core.Keyword(null,"p","p",1013904354).cljs$core$IFn$_invoke$arity$1(___$1));
});
thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PSample$ = true;
thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PSample$random_point_inside$arity$1 = (function (p__8329){var map__8330 = p__8329;var map__8330__$1 = ((cljs.core.seq_QMARK_.call(null,map__8330))?cljs.core.apply.call(null,cljs.core.hash_map,map__8330):map__8330);var p = cljs.core.get.call(null,map__8330__$1,new cljs.core.Keyword(null,"p","p",1013904354));var size = cljs.core.get.call(null,map__8330__$1,new cljs.core.Keyword(null,"size","size",1017434995));var map__8331 = this;var map__8331__$1 = ((cljs.core.seq_QMARK_.call(null,map__8331))?cljs.core.apply.call(null,cljs.core.hash_map,map__8331):map__8331);var p__$1 = cljs.core.get.call(null,map__8331__$1,new cljs.core.Keyword(null,"p","p",1013904354));var size__$1 = cljs.core.get.call(null,map__8331__$1,new cljs.core.Keyword(null,"size","size",1017434995));var vec__8332 = p__$1;var x1 = cljs.core.nth.call(null,vec__8332,0,null);var y1 = cljs.core.nth.call(null,vec__8332,1,null);var z1 = cljs.core.nth.call(null,vec__8332,2,null);var vec__8333 = thi.ng.geom.core._PLUS_.call(null,p__$1,size__$1);var x2 = cljs.core.nth.call(null,vec__8333,0,null);var y2 = cljs.core.nth.call(null,vec__8333,1,null);var z2 = cljs.core.nth.call(null,vec__8333,2,null);return thi.ng.geom.core.vector.vec3.call(null,thi.ng.common.math.core.random.call(null,x1,x2),thi.ng.common.math.core.random.call(null,y1,y2),thi.ng.common.math.core.random.call(null,z1,z2));
});
thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PSample$random_point$arity$1 = (function (p__8334){var map__8335 = p__8334;var map__8335__$1 = ((cljs.core.seq_QMARK_.call(null,map__8335))?cljs.core.apply.call(null,cljs.core.hash_map,map__8335):map__8335);var p = cljs.core.get.call(null,map__8335__$1,new cljs.core.Keyword(null,"p","p",1013904354));var size = cljs.core.get.call(null,map__8335__$1,new cljs.core.Keyword(null,"size","size",1017434995));var map__8336 = this;var map__8336__$1 = ((cljs.core.seq_QMARK_.call(null,map__8336))?cljs.core.apply.call(null,cljs.core.hash_map,map__8336):map__8336);var p__$1 = cljs.core.get.call(null,map__8336__$1,new cljs.core.Keyword(null,"p","p",1013904354));var size__$1 = cljs.core.get.call(null,map__8336__$1,new cljs.core.Keyword(null,"size","size",1017434995));var vec__8337 = p__$1;var x1 = cljs.core.nth.call(null,vec__8337,0,null);var y1 = cljs.core.nth.call(null,vec__8337,1,null);var z1 = cljs.core.nth.call(null,vec__8337,2,null);var vec__8338 = thi.ng.geom.core._PLUS_.call(null,p__$1,size__$1);var x2 = cljs.core.nth.call(null,vec__8338,0,null);var y2 = cljs.core.nth.call(null,vec__8338,1,null);var z2 = cljs.core.nth.call(null,vec__8338,2,null);var id = (thi.ng.common.math.core.random.call(null,6) | 0);if((id < 2))
{return thi.ng.geom.core.vector.vec3.call(null,(((id === 0))?x1:x2),thi.ng.common.math.core.random.call(null,y1,y2),thi.ng.common.math.core.random.call(null,z1,z2));
} else
{if((id < 4))
{return thi.ng.geom.core.vector.vec3.call(null,thi.ng.common.math.core.random.call(null,x1,x2),((cljs.core._EQ_.call(null,2,id))?y1:y2),thi.ng.common.math.core.random.call(null,z1,z2));
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return thi.ng.geom.core.vector.vec3.call(null,thi.ng.common.math.core.random.call(null,x1,x2),thi.ng.common.math.core.random.call(null,y1,y2),((cljs.core._EQ_.call(null,4,id))?z1:z2));
} else
{return null;
}
}
}
});
thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PSubdivide$ = true;
thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PSubdivide$subdivide$arity$1 = (function (_){var ___$1 = this;return thi.ng.geom.core.subdivide.call(null,___$1,cljs.core.PersistentArrayMap.EMPTY);
});
thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PSubdivide$subdivide$arity$2 = (function (p__8339,p__8340){var map__8341 = p__8339;var map__8341__$1 = ((cljs.core.seq_QMARK_.call(null,map__8341))?cljs.core.apply.call(null,cljs.core.hash_map,map__8341):map__8341);var p = cljs.core.get.call(null,map__8341__$1,new cljs.core.Keyword(null,"p","p",1013904354));var size = cljs.core.get.call(null,map__8341__$1,new cljs.core.Keyword(null,"size","size",1017434995));var map__8342 = p__8340;var map__8342__$1 = ((cljs.core.seq_QMARK_.call(null,map__8342))?cljs.core.apply.call(null,cljs.core.hash_map,map__8342):map__8342);var slices = cljs.core.get.call(null,map__8342__$1,new cljs.core.Keyword(null,"slices","slices",4409223315));var rows = cljs.core.get.call(null,map__8342__$1,new cljs.core.Keyword(null,"rows","rows",1017410891));var cols = cljs.core.get.call(null,map__8342__$1,new cljs.core.Keyword(null,"cols","cols",1016963685));var num = cljs.core.get.call(null,map__8342__$1,new cljs.core.Keyword(null,"num","num",1014013688),1);var map__8343 = this;var map__8343__$1 = ((cljs.core.seq_QMARK_.call(null,map__8343))?cljs.core.apply.call(null,cljs.core.hash_map,map__8343):map__8343);var p__$1 = cljs.core.get.call(null,map__8343__$1,new cljs.core.Keyword(null,"p","p",1013904354));var size__$1 = cljs.core.get.call(null,map__8343__$1,new cljs.core.Keyword(null,"size","size",1017434995));var sx = (function (){var or__3481__auto__ = cols;if(cljs.core.truth_(or__3481__auto__))
{return or__3481__auto__;
} else
{return num;
}
})();var sy = (function (){var or__3481__auto__ = rows;if(cljs.core.truth_(or__3481__auto__))
{return or__3481__auto__;
} else
{return num;
}
})();var sz = (function (){var or__3481__auto__ = slices;if(cljs.core.truth_(or__3481__auto__))
{return or__3481__auto__;
} else
{return num;
}
})();var s = thi.ng.geom.core.div.call(null,size__$1,sx,sy,sz);var iter__4198__auto__ = ((function (sx,sy,sz,s,map__8343,map__8343__$1,p__$1,size__$1,map__8341,map__8341__$1,p,size,map__8342,map__8342__$1,slices,rows,cols,num){
return (function iter__8344(s__8345){return (new cljs.core.LazySeq(null,((function (sx,sy,sz,s,map__8343,map__8343__$1,p__$1,size__$1,map__8341,map__8341__$1,p,size,map__8342,map__8342__$1,slices,rows,cols,num){
return (function (){var s__8345__$1 = s__8345;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__8345__$1);if(temp__4126__auto__)
{var xs__4624__auto__ = temp__4126__auto__;var z = cljs.core.first.call(null,xs__4624__auto__);var iterys__4194__auto__ = ((function (s__8345__$1,z,xs__4624__auto__,temp__4126__auto__,sx,sy,sz,s,map__8343,map__8343__$1,p__$1,size__$1,map__8341,map__8341__$1,p,size,map__8342,map__8342__$1,slices,rows,cols,num){
return (function iter__8346(s__8347){return (new cljs.core.LazySeq(null,((function (s__8345__$1,z,xs__4624__auto__,temp__4126__auto__,sx,sy,sz,s,map__8343,map__8343__$1,p__$1,size__$1,map__8341,map__8341__$1,p,size,map__8342,map__8342__$1,slices,rows,cols,num){
return (function (){var s__8347__$1 = s__8347;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__8347__$1);if(temp__4126__auto____$1)
{var xs__4624__auto____$1 = temp__4126__auto____$1;var y = cljs.core.first.call(null,xs__4624__auto____$1);var iterys__4194__auto__ = ((function (s__8347__$1,s__8345__$1,y,xs__4624__auto____$1,temp__4126__auto____$1,z,xs__4624__auto__,temp__4126__auto__,sx,sy,sz,s,map__8343,map__8343__$1,p__$1,size__$1,map__8341,map__8341__$1,p,size,map__8342,map__8342__$1,slices,rows,cols,num){
return (function iter__8348(s__8349){return (new cljs.core.LazySeq(null,((function (s__8347__$1,s__8345__$1,y,xs__4624__auto____$1,temp__4126__auto____$1,z,xs__4624__auto__,temp__4126__auto__,sx,sy,sz,s,map__8343,map__8343__$1,p__$1,size__$1,map__8341,map__8341__$1,p,size,map__8342,map__8342__$1,slices,rows,cols,num){
return (function (){var s__8349__$1 = s__8349;while(true){
var temp__4126__auto____$2 = cljs.core.seq.call(null,s__8349__$1);if(temp__4126__auto____$2)
{var s__8349__$2 = temp__4126__auto____$2;if(cljs.core.chunked_seq_QMARK_.call(null,s__8349__$2))
{var c__4196__auto__ = cljs.core.chunk_first.call(null,s__8349__$2);var size__4197__auto__ = cljs.core.count.call(null,c__4196__auto__);var b__8351 = cljs.core.chunk_buffer.call(null,size__4197__auto__);if((function (){var i__8350 = 0;while(true){
if((i__8350 < size__4197__auto__))
{var x = cljs.core._nth.call(null,c__4196__auto__,i__8350);cljs.core.chunk_append.call(null,b__8351,(new thi.ng.geom.types.AABB(thi.ng.geom.core.madd.call(null,thi.ng.geom.core.vector.vec3.call(null,x,y,z),size__$1,p__$1),s)));
{
var G__8394 = (i__8350 + 1);
i__8350 = G__8394;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8351),iter__8348.call(null,cljs.core.chunk_rest.call(null,s__8349__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8351),null);
}
} else
{var x = cljs.core.first.call(null,s__8349__$2);return cljs.core.cons.call(null,(new thi.ng.geom.types.AABB(thi.ng.geom.core.madd.call(null,thi.ng.geom.core.vector.vec3.call(null,x,y,z),size__$1,p__$1),s)),iter__8348.call(null,cljs.core.rest.call(null,s__8349__$2)));
}
} else
{return null;
}
break;
}
});})(s__8347__$1,s__8345__$1,y,xs__4624__auto____$1,temp__4126__auto____$1,z,xs__4624__auto__,temp__4126__auto__,sx,sy,sz,s,map__8343,map__8343__$1,p__$1,size__$1,map__8341,map__8341__$1,p,size,map__8342,map__8342__$1,slices,rows,cols,num))
,null,null));
});})(s__8347__$1,s__8345__$1,y,xs__4624__auto____$1,temp__4126__auto____$1,z,xs__4624__auto__,temp__4126__auto__,sx,sy,sz,s,map__8343,map__8343__$1,p__$1,size__$1,map__8341,map__8341__$1,p,size,map__8342,map__8342__$1,slices,rows,cols,num))
;var fs__4195__auto__ = cljs.core.seq.call(null,iterys__4194__auto__.call(null,cljs.core.butlast.call(null,thi.ng.common.math.core.norm_range.call(null,sx))));if(fs__4195__auto__)
{return cljs.core.concat.call(null,fs__4195__auto__,iter__8346.call(null,cljs.core.rest.call(null,s__8347__$1)));
} else
{{
var G__8395 = cljs.core.rest.call(null,s__8347__$1);
s__8347__$1 = G__8395;
continue;
}
}
} else
{return null;
}
break;
}
});})(s__8345__$1,z,xs__4624__auto__,temp__4126__auto__,sx,sy,sz,s,map__8343,map__8343__$1,p__$1,size__$1,map__8341,map__8341__$1,p,size,map__8342,map__8342__$1,slices,rows,cols,num))
,null,null));
});})(s__8345__$1,z,xs__4624__auto__,temp__4126__auto__,sx,sy,sz,s,map__8343,map__8343__$1,p__$1,size__$1,map__8341,map__8341__$1,p,size,map__8342,map__8342__$1,slices,rows,cols,num))
;var fs__4195__auto__ = cljs.core.seq.call(null,iterys__4194__auto__.call(null,cljs.core.butlast.call(null,thi.ng.common.math.core.norm_range.call(null,sy))));if(fs__4195__auto__)
{return cljs.core.concat.call(null,fs__4195__auto__,iter__8344.call(null,cljs.core.rest.call(null,s__8345__$1)));
} else
{{
var G__8396 = cljs.core.rest.call(null,s__8345__$1);
s__8345__$1 = G__8396;
continue;
}
}
} else
{return null;
}
break;
}
});})(sx,sy,sz,s,map__8343,map__8343__$1,p__$1,size__$1,map__8341,map__8341__$1,p,size,map__8342,map__8342__$1,slices,rows,cols,num))
,null,null));
});})(sx,sy,sz,s,map__8343,map__8343__$1,p__$1,size__$1,map__8341,map__8341__$1,p,size,map__8342,map__8342__$1,slices,rows,cols,num))
;return iter__4198__auto__.call(null,cljs.core.butlast.call(null,thi.ng.common.math.core.norm_range.call(null,sz)));
});
thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PClassify$ = true;
thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PClassify$classify_point$arity$2 = (function (p__8352,p__8353){var map__8354 = p__8352;var map__8354__$1 = ((cljs.core.seq_QMARK_.call(null,map__8354))?cljs.core.apply.call(null,cljs.core.hash_map,map__8354):map__8354);var p = cljs.core.get.call(null,map__8354__$1,new cljs.core.Keyword(null,"p","p",1013904354));var size = cljs.core.get.call(null,map__8354__$1,new cljs.core.Keyword(null,"size","size",1017434995));var vec__8355 = p__8353;var x = cljs.core.nth.call(null,vec__8355,0,null);var y = cljs.core.nth.call(null,vec__8355,1,null);var z = cljs.core.nth.call(null,vec__8355,2,null);var q = vec__8355;var map__8356 = this;var map__8356__$1 = ((cljs.core.seq_QMARK_.call(null,map__8356))?cljs.core.apply.call(null,cljs.core.hash_map,map__8356):map__8356);var p__$1 = cljs.core.get.call(null,map__8356__$1,new cljs.core.Keyword(null,"p","p",1013904354));var size__$1 = cljs.core.get.call(null,map__8356__$1,new cljs.core.Keyword(null,"size","size",1017434995));var vec__8357 = p__$1;var x1 = cljs.core.nth.call(null,vec__8357,0,null);var y1 = cljs.core.nth.call(null,vec__8357,1,null);var z1 = cljs.core.nth.call(null,vec__8357,2,null);var vec__8358 = thi.ng.geom.core._PLUS_.call(null,p__$1,size__$1);var x2 = cljs.core.nth.call(null,vec__8358,0,null);var y2 = cljs.core.nth.call(null,vec__8358,1,null);var z2 = cljs.core.nth.call(null,vec__8358,2,null);var on_plane_QMARK_ = ((function (vec__8357,x1,y1,z1,vec__8358,x2,y2,z2,map__8356,map__8356__$1,p__$1,size__$1,map__8354,map__8354__$1,p,size,vec__8355,x,y,z,q){
return (function (p__8359){var vec__8360 = p__8359;var minp = cljs.core.nth.call(null,vec__8360,0,null);var maxp = cljs.core.nth.call(null,vec__8360,1,null);var p__$2 = cljs.core.nth.call(null,vec__8360,2,null);var min1 = cljs.core.nth.call(null,vec__8360,3,null);var max1 = cljs.core.nth.call(null,vec__8360,4,null);var min2 = cljs.core.nth.call(null,vec__8360,5,null);var max2 = cljs.core.nth.call(null,vec__8360,6,null);var c1 = cljs.core.nth.call(null,vec__8360,7,null);var c2 = cljs.core.nth.call(null,vec__8360,8,null);return ((thi.ng.common.math.core.delta_EQ_.call(null,minp,p__$2,thi.ng.common.math.core._STAR_eps_STAR_)) || (thi.ng.common.math.core.delta_EQ_.call(null,maxp,p__$2,thi.ng.common.math.core._STAR_eps_STAR_))) && (thi.ng.common.math.core.in_range_QMARK_.call(null,min1,max1,c1)) && (thi.ng.common.math.core.in_range_QMARK_.call(null,min2,max2,c2));
});})(vec__8357,x1,y1,z1,vec__8358,x2,y2,z2,map__8356,map__8356__$1,p__$1,size__$1,map__8354,map__8354__$1,p,size,vec__8355,x,y,z,q))
;if(cljs.core.truth_(cljs.core.some.call(null,on_plane_QMARK_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,x2,x,y1,y2,z1,z2,y,z], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [y1,y2,y,x1,x2,z1,z2,x,z], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [z1,z2,z,x1,x2,y1,y2,x,y], null)], null))))
{return 0;
} else
{if((thi.ng.common.math.core.in_range_QMARK_.call(null,x1,x2,x)) && (thi.ng.common.math.core.in_range_QMARK_.call(null,y1,y2,y)) && (thi.ng.common.math.core.in_range_QMARK_.call(null,z1,z2,z)))
{return 1;
} else
{return -1;
}
}
});
thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PEdgeAccess$ = true;
thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PEdgeAccess$edges$arity$1 = (function (_){var ___$1 = this;var vec__8361 = thi.ng.geom.core.vertices.call(null,___$1);var a = cljs.core.nth.call(null,vec__8361,0,null);var b = cljs.core.nth.call(null,vec__8361,1,null);var c = cljs.core.nth.call(null,vec__8361,2,null);var d = cljs.core.nth.call(null,vec__8361,3,null);var e = cljs.core.nth.call(null,vec__8361,4,null);var f = cljs.core.nth.call(null,vec__8361,5,null);var g = cljs.core.nth.call(null,vec__8361,6,null);var h = cljs.core.nth.call(null,vec__8361,7,null);return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,d], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [d,a], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,f], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,g], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [g,h], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,e], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,e], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,f], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,g], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [d,h], null)], null);
});
thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PVolume$ = true;
thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PVolume$volume$arity$1 = (function (p__8362){var map__8363 = p__8362;var map__8363__$1 = ((cljs.core.seq_QMARK_.call(null,map__8363))?cljs.core.apply.call(null,cljs.core.hash_map,map__8363):map__8363);var vec__8364 = cljs.core.get.call(null,map__8363__$1,new cljs.core.Keyword(null,"size","size",1017434995));var w = cljs.core.nth.call(null,vec__8364,0,null);var h = cljs.core.nth.call(null,vec__8364,1,null);var d = cljs.core.nth.call(null,vec__8364,2,null);var map__8365 = this;var map__8365__$1 = ((cljs.core.seq_QMARK_.call(null,map__8365))?cljs.core.apply.call(null,cljs.core.hash_map,map__8365):map__8365);var vec__8366 = cljs.core.get.call(null,map__8365__$1,new cljs.core.Keyword(null,"size","size",1017434995));var w__$1 = cljs.core.nth.call(null,vec__8366,0,null);var h__$1 = cljs.core.nth.call(null,vec__8366,1,null);var d__$1 = cljs.core.nth.call(null,vec__8366,2,null);return ((w__$1 * h__$1) * d__$1);
});
thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PBoundary$ = true;
thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PBoundary$contains_point_QMARK_$arity$2 = (function (p__8367,p__8368){var map__8369 = p__8367;var map__8369__$1 = ((cljs.core.seq_QMARK_.call(null,map__8369))?cljs.core.apply.call(null,cljs.core.hash_map,map__8369):map__8369);var p = cljs.core.get.call(null,map__8369__$1,new cljs.core.Keyword(null,"p","p",1013904354));var size = cljs.core.get.call(null,map__8369__$1,new cljs.core.Keyword(null,"size","size",1017434995));var vec__8370 = p__8368;var qx = cljs.core.nth.call(null,vec__8370,0,null);var qy = cljs.core.nth.call(null,vec__8370,1,null);var qz = cljs.core.nth.call(null,vec__8370,2,null);var map__8371 = this;var map__8371__$1 = ((cljs.core.seq_QMARK_.call(null,map__8371))?cljs.core.apply.call(null,cljs.core.hash_map,map__8371):map__8371);var p__$1 = cljs.core.get.call(null,map__8371__$1,new cljs.core.Keyword(null,"p","p",1013904354));var size__$1 = cljs.core.get.call(null,map__8371__$1,new cljs.core.Keyword(null,"size","size",1017434995));var vec__8372 = p__$1;var x1 = cljs.core.nth.call(null,vec__8372,0,null);var y1 = cljs.core.nth.call(null,vec__8372,1,null);var z1 = cljs.core.nth.call(null,vec__8372,2,null);var vec__8373 = thi.ng.geom.core._PLUS_.call(null,p__$1,size__$1);var x2 = cljs.core.nth.call(null,vec__8373,0,null);var y2 = cljs.core.nth.call(null,vec__8373,1,null);var z2 = cljs.core.nth.call(null,vec__8373,2,null);return (thi.ng.common.math.core.in_range_QMARK_.call(null,x1,x2,qx)) && (thi.ng.common.math.core.in_range_QMARK_.call(null,y1,y2,qy)) && (thi.ng.common.math.core.in_range_QMARK_.call(null,z1,z2,qz));
});
thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PIntersect$ = true;
thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PIntersect$intersect_shape$arity$2 = (function (_,s){var ___$1 = this;if((s instanceof thi.ng.geom.types.AABB))
{return thi.ng.geom.core.intersect.intersect_aabb_aabb_QMARK_.call(null,___$1,s);
} else
{if((s instanceof thi.ng.geom.types.Sphere))
{return thi.ng.geom.core.intersect.intersect_aabb_sphere_QMARK_.call(null,___$1,s);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return thi.ng.common.error.type_error_BANG_.call(null,"AABB",s);
} else
{return null;
}
}
}
});
thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PFaceAccess$ = true;
thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PFaceAccess$faces$arity$1 = (function (_){var ___$1 = this;var vec__8374 = thi.ng.geom.core.vertices.call(null,___$1);var a = cljs.core.nth.call(null,vec__8374,0,null);var b = cljs.core.nth.call(null,vec__8374,1,null);var c = cljs.core.nth.call(null,vec__8374,2,null);var d = cljs.core.nth.call(null,vec__8374,3,null);var e = cljs.core.nth.call(null,vec__8374,4,null);var f = cljs.core.nth.call(null,vec__8374,5,null);var g = cljs.core.nth.call(null,vec__8374,6,null);var h = cljs.core.nth.call(null,vec__8374,7,null);return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,d,h,g], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,f,e], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,f,g,h], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,d,c,b], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,c,g,f], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,e,h,d], null)], null);
});
thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PTranslate$ = true;
thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PTranslate$translate$arity$2 = (function (_,t){var ___$1 = this;return (new thi.ng.geom.types.AABB(thi.ng.geom.core._PLUS_.call(null,new cljs.core.Keyword(null,"p","p",1013904354).cljs$core$IFn$_invoke$arity$1(___$1),t),new cljs.core.Keyword(null,"size","size",1017434995).cljs$core$IFn$_invoke$arity$1(___$1)));
});
thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PBoundingSphere$ = true;
thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PBoundingSphere$bounding_sphere$arity$1 = (function (p__8380){var map__8381 = p__8380;var map__8381__$1 = ((cljs.core.seq_QMARK_.call(null,map__8381))?cljs.core.apply.call(null,cljs.core.hash_map,map__8381):map__8381);var p = cljs.core.get.call(null,map__8381__$1,new cljs.core.Keyword(null,"p","p",1013904354));var size = cljs.core.get.call(null,map__8381__$1,new cljs.core.Keyword(null,"size","size",1017434995));var map__8382 = this;var map__8382__$1 = ((cljs.core.seq_QMARK_.call(null,map__8382))?cljs.core.apply.call(null,cljs.core.hash_map,map__8382):map__8382);var p__$1 = cljs.core.get.call(null,map__8382__$1,new cljs.core.Keyword(null,"p","p",1013904354));var size__$1 = cljs.core.get.call(null,map__8382__$1,new cljs.core.Keyword(null,"size","size",1017434995));var ext = thi.ng.geom.core._STAR_.call(null,size__$1,0.5);return thi.ng.geom.types.utils.bounding_sphere.call(null,thi.ng.geom.core._PLUS_.call(null,p__$1,ext),thi.ng.geom.core.mag.call(null,ext));
});
thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PScale$ = true;
thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PScale$scale$arity$2 = (function (_,s){var ___$1 = this;return (new thi.ng.geom.types.AABB(thi.ng.geom.core._STAR_.call(null,new cljs.core.Keyword(null,"p","p",1013904354).cljs$core$IFn$_invoke$arity$1(___$1),s),thi.ng.geom.core._STAR_.call(null,new cljs.core.Keyword(null,"size","size",1017434995).cljs$core$IFn$_invoke$arity$1(___$1),s)));
});
thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PScale$scale$arity$3 = (function (_,sx,sy){var ___$1 = this;return (new thi.ng.geom.types.AABB(thi.ng.geom.core._STAR_.call(null,new cljs.core.Keyword(null,"p","p",1013904354).cljs$core$IFn$_invoke$arity$1(___$1),sx,sy),thi.ng.geom.core._STAR_.call(null,new cljs.core.Keyword(null,"size","size",1017434995).cljs$core$IFn$_invoke$arity$1(___$1),sx,sy)));
});
thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PScale$scale$arity$4 = (function (_,sx,sy,sz){var ___$1 = this;return (new thi.ng.geom.types.AABB(thi.ng.geom.core._STAR_.call(null,new cljs.core.Keyword(null,"p","p",1013904354).cljs$core$IFn$_invoke$arity$1(___$1),sx,sy,sz),thi.ng.geom.core._STAR_.call(null,new cljs.core.Keyword(null,"size","size",1017434995).cljs$core$IFn$_invoke$arity$1(___$1),sx,sy,sz)));
});
thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PScale$scale_size$arity$2 = (function (_,s){var ___$1 = this;var s_SINGLEQUOTE_ = thi.ng.geom.core._STAR_.call(null,new cljs.core.Keyword(null,"size","size",1017434995).cljs$core$IFn$_invoke$arity$1(___$1),s);return (new thi.ng.geom.types.AABB(thi.ng.geom.core.madd.call(null,thi.ng.geom.core._.call(null,s_SINGLEQUOTE_,new cljs.core.Keyword(null,"size","size",1017434995).cljs$core$IFn$_invoke$arity$1(___$1)),-0.5,new cljs.core.Keyword(null,"p","p",1013904354).cljs$core$IFn$_invoke$arity$1(___$1)),s_SINGLEQUOTE_));
});
thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PTessellate$ = true;
thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PTessellate$tessellate$arity$1 = (function (_){var ___$1 = this;return thi.ng.geom.core.tessellate.call(null,___$1,cljs.core.PersistentArrayMap.EMPTY);
});
thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PTessellate$tessellate$arity$2 = (function (_,p__8383){var map__8384 = p__8383;var map__8384__$1 = ((cljs.core.seq_QMARK_.call(null,map__8384))?cljs.core.apply.call(null,cljs.core.hash_map,map__8384):map__8384);var opts = map__8384__$1;var f = cljs.core.get.call(null,map__8384__$1,new cljs.core.Keyword(null,"fn","fn",1013907514),thi.ng.geom.core.utils.tessellate_3);var ___$1 = this;return cljs.core.mapcat.call(null,f,cljs.core.mapcat.call(null,thi.ng.geom.core.faces,(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"num","num",1014013688),null,new cljs.core.Keyword(null,"slices","slices",4409223315),null,new cljs.core.Keyword(null,"rows","rows",1017410891),null,new cljs.core.Keyword(null,"cols","cols",1016963685),null], null), null),cljs.core.keys.call(null,opts)))?thi.ng.geom.core.subdivide.call(null,___$1,opts):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [___$1], null))));
});
thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PBounds$ = true;
thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PBounds$bounds$arity$1 = (function (_){var ___$1 = this;return ___$1;
});
thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PBounds$width$arity$1 = (function (_){var ___$1 = this;return new cljs.core.Keyword(null,"size","size",1017434995).cljs$core$IFn$_invoke$arity$1(___$1).call(null,0);
});
thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PBounds$height$arity$1 = (function (_){var ___$1 = this;return new cljs.core.Keyword(null,"size","size",1017434995).cljs$core$IFn$_invoke$arity$1(___$1).call(null,1);
});
thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PBounds$depth$arity$1 = (function (_){var ___$1 = this;return new cljs.core.Keyword(null,"size","size",1017434995).cljs$core$IFn$_invoke$arity$1(___$1).call(null,2);
});
thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PVertexAccess$ = true;
thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PVertexAccess$vertices$arity$1 = (function (p__8385){var map__8386 = p__8385;var map__8386__$1 = ((cljs.core.seq_QMARK_.call(null,map__8386))?cljs.core.apply.call(null,cljs.core.hash_map,map__8386):map__8386);var a = cljs.core.get.call(null,map__8386__$1,new cljs.core.Keyword(null,"p","p",1013904354));var size = cljs.core.get.call(null,map__8386__$1,new cljs.core.Keyword(null,"size","size",1017434995));var map__8387 = this;var map__8387__$1 = ((cljs.core.seq_QMARK_.call(null,map__8387))?cljs.core.apply.call(null,cljs.core.hash_map,map__8387):map__8387);var a__$1 = cljs.core.get.call(null,map__8387__$1,new cljs.core.Keyword(null,"p","p",1013904354));var size__$1 = cljs.core.get.call(null,map__8387__$1,new cljs.core.Keyword(null,"size","size",1017434995));var vec__8388 = a__$1;var x1 = cljs.core.nth.call(null,vec__8388,0,null);var y1 = cljs.core.nth.call(null,vec__8388,1,null);var z1 = cljs.core.nth.call(null,vec__8388,2,null);var vec__8389 = thi.ng.geom.core._PLUS_.call(null,a__$1,size__$1);var x2 = cljs.core.nth.call(null,vec__8389,0,null);var y2 = cljs.core.nth.call(null,vec__8389,1,null);var z2 = cljs.core.nth.call(null,vec__8389,2,null);var g = vec__8389;var b = thi.ng.geom.core.vector.vec3.call(null,x1,y1,z2);var c = thi.ng.geom.core.vector.vec3.call(null,x2,y1,z2);var d = thi.ng.geom.core.vector.vec3.call(null,x2,y1,z1);var e = thi.ng.geom.core.vector.vec3.call(null,x1,y2,z1);var f = thi.ng.geom.core.vector.vec3.call(null,x1,y2,z2);var h = thi.ng.geom.core.vector.vec3.call(null,x2,y2,z1);return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [a__$1,b,c,d,e,f,g,h], null);
});
thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PMeshConvert$ = true;
thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PMeshConvert$as_mesh$arity$1 = (function (_){var ___$1 = this;return thi.ng.geom.core.as_mesh.call(null,___$1,cljs.core.PersistentArrayMap.EMPTY);
});
thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PMeshConvert$as_mesh$arity$2 = (function (_,p__8390){var map__8391 = p__8390;var map__8391__$1 = ((cljs.core.seq_QMARK_.call(null,map__8391))?cljs.core.apply.call(null,cljs.core.hash_map,map__8391):map__8391);var flags = cljs.core.get.call(null,map__8391__$1,new cljs.core.Keyword(null,"flags","flags",1111417337),"nsewfb");var mesh = cljs.core.get.call(null,map__8391__$1,new cljs.core.Keyword(null,"mesh","mesh",1017252191));var ___$1 = this;var vec__8392 = thi.ng.geom.core.vertices.call(null,___$1);var a = cljs.core.nth.call(null,vec__8392,0,null);var b = cljs.core.nth.call(null,vec__8392,1,null);var c = cljs.core.nth.call(null,vec__8392,2,null);var d = cljs.core.nth.call(null,vec__8392,3,null);var e = cljs.core.nth.call(null,vec__8392,4,null);var f = cljs.core.nth.call(null,vec__8392,5,null);var g = cljs.core.nth.call(null,vec__8392,6,null);var h = cljs.core.nth.call(null,vec__8392,7,null);var vec__8393 = thi.ng.common.data.core.demunge_flags_seq.call(null,flags,"nsewfb");var tp = cljs.core.nth.call(null,vec__8393,0,null);var bt = cljs.core.nth.call(null,vec__8393,1,null);var rt = cljs.core.nth.call(null,vec__8393,2,null);var lf = cljs.core.nth.call(null,vec__8393,3,null);var fr = cljs.core.nth.call(null,vec__8393,4,null);var bk = cljs.core.nth.call(null,vec__8393,5,null);return thi.ng.geom.core.into.call(null,(function (){var or__3481__auto__ = mesh;if(cljs.core.truth_(or__3481__auto__))
{return or__3481__auto__;
} else
{return thi.ng.geom.gmesh.gmesh.call(null);
}
})(),cljs.core.filter.call(null,cljs.core.identity,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(fr)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,c,g,f], null):null),(cljs.core.truth_(bk)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,e,h,d], null):null),(cljs.core.truth_(lf)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,f,e], null):null),(cljs.core.truth_(rt)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,d,h,g], null):null),(cljs.core.truth_(tp)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,f,g,h], null):null),(cljs.core.truth_(bt)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,d,c,b], null):null)], null)));
});
thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PProximity$ = true;
thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PProximity$closest_point$arity$2 = (function (_,p){var ___$1 = this;return null;
});
thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PArea$ = true;
thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PArea$area$arity$1 = (function (p__8375){var map__8376 = p__8375;var map__8376__$1 = ((cljs.core.seq_QMARK_.call(null,map__8376))?cljs.core.apply.call(null,cljs.core.hash_map,map__8376):map__8376);var vec__8377 = cljs.core.get.call(null,map__8376__$1,new cljs.core.Keyword(null,"size","size",1017434995));var w = cljs.core.nth.call(null,vec__8377,0,null);var h = cljs.core.nth.call(null,vec__8377,1,null);var d = cljs.core.nth.call(null,vec__8377,2,null);var map__8378 = this;var map__8378__$1 = ((cljs.core.seq_QMARK_.call(null,map__8378))?cljs.core.apply.call(null,cljs.core.hash_map,map__8378):map__8378);var vec__8379 = cljs.core.get.call(null,map__8378__$1,new cljs.core.Keyword(null,"size","size",1017434995));var w__$1 = cljs.core.nth.call(null,vec__8379,0,null);var h__$1 = cljs.core.nth.call(null,vec__8379,1,null);var d__$1 = cljs.core.nth.call(null,vec__8379,2,null);return (2.0 * (((w__$1 * h__$1) + (d__$1 * h__$1)) + (w__$1 * d__$1)));
});
