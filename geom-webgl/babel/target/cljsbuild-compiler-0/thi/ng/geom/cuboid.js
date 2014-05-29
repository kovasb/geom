// Compiled by ClojureScript 0.0-2202
goog.provide('thi.ng.geom.cuboid');
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
goog.require('thi.ng.common.math.core');
goog.require('thi.ng.geom.types');
goog.require('thi.ng.geom.gmesh');
goog.require('thi.ng.common.error');
goog.require('thi.ng.common.data.core');
goog.require('thi.ng.geom.core');
goog.require('thi.ng.geom.types.utils');
goog.require('thi.ng.common.math.core');
goog.require('thi.ng.common.error');
goog.require('thi.ng.common.data.core');
thi.ng.geom.cuboid.cuboid = (function() {
var cuboid = null;
var cuboid__0 = (function (){return cuboid.call(null,1.0);
});
var cuboid__1 = (function (x){if(typeof x === 'number')
{return cuboid.call(null,thi.ng.geom.core.vector.vec3.call(null),x);
} else
{if(cljs.core.map_QMARK_.call(null,x))
{return cuboid.call(null,new cljs.core.Keyword(null,"p","p",1013904354).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"size","size",1017434995).cljs$core$IFn$_invoke$arity$1(x));
} else
{if(cljs.core.sequential_QMARK_.call(null,x))
{if((8 === cljs.core.count.call(null,x)))
{return (new thi.ng.geom.types.Cuboid(cljs.core.mapv.call(null,thi.ng.geom.core.vector.vec3,x)));
} else
{return thi.ng.common.error.illegal_arg_BANG_.call(null,"Wrong number of points, expected 8 but got",cljs.core.count.call(null,x));
}
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return thi.ng.common.error.illegal_arg_BANG_.call(null,x);
} else
{return null;
}
}
}
}
});
var cuboid__2 = (function (o,size){var vec__8399 = thi.ng.geom.core.vector.vec3.call(null,o);var x1 = cljs.core.nth.call(null,vec__8399,0,null);var y1 = cljs.core.nth.call(null,vec__8399,1,null);var z1 = cljs.core.nth.call(null,vec__8399,2,null);var a = vec__8399;var vec__8400 = thi.ng.geom.core._PLUS_.call(null,a,size);var x2 = cljs.core.nth.call(null,vec__8400,0,null);var y2 = cljs.core.nth.call(null,vec__8400,1,null);var z2 = cljs.core.nth.call(null,vec__8400,2,null);var g = vec__8400;var b = thi.ng.geom.core.vector.vec3.call(null,x1,y1,z2);var c = thi.ng.geom.core.vector.vec3.call(null,x2,y1,z2);var d = thi.ng.geom.core.vector.vec3.call(null,x2,y1,z1);var e = thi.ng.geom.core.vector.vec3.call(null,x1,y2,z1);var f = thi.ng.geom.core.vector.vec3.call(null,x1,y2,z2);var h = thi.ng.geom.core.vector.vec3.call(null,x2,y2,z1);return (new thi.ng.geom.types.Cuboid(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h], null)));
});
var cuboid__8 = (function (a,b,c,d,e,f,g,h){return (new thi.ng.geom.types.Cuboid(cljs.core.mapv.call(null,thi.ng.geom.core.vector.vec3,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h], null))));
});
cuboid = function(a,b,c,d,e,f,g,h){
switch(arguments.length){
case 0:
return cuboid__0.call(this);
case 1:
return cuboid__1.call(this,a);
case 2:
return cuboid__2.call(this,a,b);
case 8:
return cuboid__8.call(this,a,b,c,d,e,f,g,h);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cuboid.cljs$core$IFn$_invoke$arity$0 = cuboid__0;
cuboid.cljs$core$IFn$_invoke$arity$1 = cuboid__1;
cuboid.cljs$core$IFn$_invoke$arity$2 = cuboid__2;
cuboid.cljs$core$IFn$_invoke$arity$8 = cuboid__8;
return cuboid;
})()
;
/**
* Takes a seq of 8 points defining a cuboid and vector of normalized
* u,v,w coordinates. Applies trilinear interpolation to compute point
* within the cuboid:
* u is coord along AD/BC edge, v along AE/BF, w along AB/DC.
*/
thi.ng.geom.cuboid.unmap_uvw = (function unmap_uvw(p__8401,p__8402){var vec__8405 = p__8401;var a = cljs.core.nth.call(null,vec__8405,0,null);var b = cljs.core.nth.call(null,vec__8405,1,null);var c = cljs.core.nth.call(null,vec__8405,2,null);var d = cljs.core.nth.call(null,vec__8405,3,null);var e = cljs.core.nth.call(null,vec__8405,4,null);var f = cljs.core.nth.call(null,vec__8405,5,null);var g = cljs.core.nth.call(null,vec__8405,6,null);var h = cljs.core.nth.call(null,vec__8405,7,null);var vec__8406 = p__8402;var u = cljs.core.nth.call(null,vec__8406,0,null);var v = cljs.core.nth.call(null,vec__8406,1,null);var w = cljs.core.nth.call(null,vec__8406,2,null);return thi.ng.geom.core.mix.call(null,thi.ng.geom.core.mix.call(null,a,d,e,h,u,v),thi.ng.geom.core.mix.call(null,b,c,f,g,u,v),w);
});
thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PTransform$ = true;
thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PTransform$transform$arity$2 = (function (_,m){var ___$1 = this;return (new thi.ng.geom.types.Cuboid(cljs.core.mapv.call(null,((function (___$1){
return (function (p1__8417_SHARP_){return thi.ng.geom.core.transform_vector.call(null,m,p1__8417_SHARP_);
});})(___$1))
,new cljs.core.Keyword(null,"points","points",4326117461).cljs$core$IFn$_invoke$arity$1(___$1))));
});
thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PRotate$ = true;
thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PRotate$rotate$arity$2 = (function (_,theta){var ___$1 = this;return thi.ng.geom.core.rotate_z.call(null,___$1,theta);
});
thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PRotate3D$ = true;
thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PRotate3D$rotate_x$arity$2 = (function (_,theta){var ___$1 = this;return (new thi.ng.geom.types.Cuboid(cljs.core.mapv.call(null,((function (___$1){
return (function (p1__8409_SHARP_){return thi.ng.geom.core.rotate_x.call(null,p1__8409_SHARP_,theta);
});})(___$1))
,new cljs.core.Keyword(null,"points","points",4326117461).cljs$core$IFn$_invoke$arity$1(___$1))));
});
thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PRotate3D$rotate_y$arity$2 = (function (_,theta){var ___$1 = this;return (new thi.ng.geom.types.Cuboid(cljs.core.mapv.call(null,((function (___$1){
return (function (p1__8410_SHARP_){return thi.ng.geom.core.rotate_y.call(null,p1__8410_SHARP_,theta);
});})(___$1))
,new cljs.core.Keyword(null,"points","points",4326117461).cljs$core$IFn$_invoke$arity$1(___$1))));
});
thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PRotate3D$rotate_z$arity$2 = (function (_,theta){var ___$1 = this;return (new thi.ng.geom.types.Cuboid(cljs.core.mapv.call(null,((function (___$1){
return (function (p1__8411_SHARP_){return thi.ng.geom.core.rotate_z.call(null,p1__8411_SHARP_,theta);
});})(___$1))
,new cljs.core.Keyword(null,"points","points",4326117461).cljs$core$IFn$_invoke$arity$1(___$1))));
});
thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PRotate3D$rotate_around_axis$arity$3 = (function (_,axis,theta){var ___$1 = this;return (new thi.ng.geom.types.Cuboid(cljs.core.mapv.call(null,((function (___$1){
return (function (p1__8412_SHARP_){return thi.ng.geom.core.rotate_around_axis.call(null,p1__8412_SHARP_,axis,theta);
});})(___$1))
,new cljs.core.Keyword(null,"points","points",4326117461).cljs$core$IFn$_invoke$arity$1(___$1))));
});
thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PCenter$ = true;
thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PCenter$center$arity$1 = (function (_){var ___$1 = this;return (new thi.ng.geom.types.Cuboid(thi.ng.geom.core.utils.center.call(null,thi.ng.geom.core.vector.vec3.call(null),new cljs.core.Keyword(null,"points","points",4326117461).cljs$core$IFn$_invoke$arity$1(___$1))));
});
thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PCenter$center$arity$2 = (function (_,o){var ___$1 = this;return (new thi.ng.geom.types.Cuboid(thi.ng.geom.core.utils.center.call(null,thi.ng.geom.core.centroid.call(null,___$1),thi.ng.geom.core.vector.vec3.call(null,o),new cljs.core.Keyword(null,"points","points",4326117461).cljs$core$IFn$_invoke$arity$1(___$1))));
});
thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PCenter$centroid$arity$1 = (function (_){var ___$1 = this;return thi.ng.geom.core.utils.centroid.call(null,new cljs.core.Keyword(null,"points","points",4326117461).cljs$core$IFn$_invoke$arity$1(___$1));
});
thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PSample$ = true;
thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PSample$random_point_inside$arity$1 = (function (p__8418){var map__8419 = p__8418;var map__8419__$1 = ((cljs.core.seq_QMARK_.call(null,map__8419))?cljs.core.apply.call(null,cljs.core.hash_map,map__8419):map__8419);var p = cljs.core.get.call(null,map__8419__$1,new cljs.core.Keyword(null,"p","p",1013904354));var size = cljs.core.get.call(null,map__8419__$1,new cljs.core.Keyword(null,"size","size",1017434995));var map__8420 = this;var map__8420__$1 = ((cljs.core.seq_QMARK_.call(null,map__8420))?cljs.core.apply.call(null,cljs.core.hash_map,map__8420):map__8420);var p__$1 = cljs.core.get.call(null,map__8420__$1,new cljs.core.Keyword(null,"p","p",1013904354));var size__$1 = cljs.core.get.call(null,map__8420__$1,new cljs.core.Keyword(null,"size","size",1017434995));var vec__8421 = p__$1;var x1 = cljs.core.nth.call(null,vec__8421,0,null);var y1 = cljs.core.nth.call(null,vec__8421,1,null);var z1 = cljs.core.nth.call(null,vec__8421,2,null);var vec__8422 = thi.ng.geom.core._PLUS_.call(null,p__$1,size__$1);var x2 = cljs.core.nth.call(null,vec__8422,0,null);var y2 = cljs.core.nth.call(null,vec__8422,1,null);var z2 = cljs.core.nth.call(null,vec__8422,2,null);return thi.ng.geom.core.vector.vec3.call(null,thi.ng.common.math.core.random.call(null,x1,x2),thi.ng.common.math.core.random.call(null,y1,y2),thi.ng.common.math.core.random.call(null,z1,z2));
});
thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PSample$random_point$arity$1 = (function (p__8423){var map__8424 = p__8423;var map__8424__$1 = ((cljs.core.seq_QMARK_.call(null,map__8424))?cljs.core.apply.call(null,cljs.core.hash_map,map__8424):map__8424);var p = cljs.core.get.call(null,map__8424__$1,new cljs.core.Keyword(null,"p","p",1013904354));var size = cljs.core.get.call(null,map__8424__$1,new cljs.core.Keyword(null,"size","size",1017434995));var map__8425 = this;var map__8425__$1 = ((cljs.core.seq_QMARK_.call(null,map__8425))?cljs.core.apply.call(null,cljs.core.hash_map,map__8425):map__8425);var p__$1 = cljs.core.get.call(null,map__8425__$1,new cljs.core.Keyword(null,"p","p",1013904354));var size__$1 = cljs.core.get.call(null,map__8425__$1,new cljs.core.Keyword(null,"size","size",1017434995));var vec__8426 = p__$1;var x1 = cljs.core.nth.call(null,vec__8426,0,null);var y1 = cljs.core.nth.call(null,vec__8426,1,null);var z1 = cljs.core.nth.call(null,vec__8426,2,null);var vec__8427 = thi.ng.geom.core._PLUS_.call(null,p__$1,size__$1);var x2 = cljs.core.nth.call(null,vec__8427,0,null);var y2 = cljs.core.nth.call(null,vec__8427,1,null);var z2 = cljs.core.nth.call(null,vec__8427,2,null);var id = (thi.ng.common.math.core.random.call(null,6) | 0);if((id < 2))
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
thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PSubdivide$ = true;
thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PSubdivide$subdivide$arity$1 = (function (_){var ___$1 = this;return thi.ng.geom.core.subdivide.call(null,___$1,cljs.core.PersistentArrayMap.EMPTY);
});
thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PSubdivide$subdivide$arity$2 = (function (p__8428,p__8429){var map__8430 = p__8428;var map__8430__$1 = ((cljs.core.seq_QMARK_.call(null,map__8430))?cljs.core.apply.call(null,cljs.core.hash_map,map__8430):map__8430);var points = cljs.core.get.call(null,map__8430__$1,new cljs.core.Keyword(null,"points","points",4326117461));var map__8431 = p__8429;var map__8431__$1 = ((cljs.core.seq_QMARK_.call(null,map__8431))?cljs.core.apply.call(null,cljs.core.hash_map,map__8431):map__8431);var slices = cljs.core.get.call(null,map__8431__$1,new cljs.core.Keyword(null,"slices","slices",4409223315));var rows = cljs.core.get.call(null,map__8431__$1,new cljs.core.Keyword(null,"rows","rows",1017410891));var cols = cljs.core.get.call(null,map__8431__$1,new cljs.core.Keyword(null,"cols","cols",1016963685));var num = cljs.core.get.call(null,map__8431__$1,new cljs.core.Keyword(null,"num","num",1014013688),1);var map__8432 = this;var map__8432__$1 = ((cljs.core.seq_QMARK_.call(null,map__8432))?cljs.core.apply.call(null,cljs.core.hash_map,map__8432):map__8432);var points__$1 = cljs.core.get.call(null,map__8432__$1,new cljs.core.Keyword(null,"points","points",4326117461));var ru = thi.ng.common.data.core.successive_nth.call(null,2,thi.ng.common.math.core.norm_range.call(null,(function (){var or__3481__auto__ = cols;if(cljs.core.truth_(or__3481__auto__))
{return or__3481__auto__;
} else
{return num;
}
})()));var rv = thi.ng.common.data.core.successive_nth.call(null,2,thi.ng.common.math.core.norm_range.call(null,(function (){var or__3481__auto__ = rows;if(cljs.core.truth_(or__3481__auto__))
{return or__3481__auto__;
} else
{return num;
}
})()));var rw = thi.ng.common.data.core.successive_nth.call(null,2,thi.ng.common.math.core.norm_range.call(null,(function (){var or__3481__auto__ = slices;if(cljs.core.truth_(or__3481__auto__))
{return or__3481__auto__;
} else
{return num;
}
})()));var map_p = ((function (ru,rv,rw,map__8432,map__8432__$1,points__$1,map__8430,map__8430__$1,points,map__8431,map__8431__$1,slices,rows,cols,num){
return (function (p){return thi.ng.geom.core.vector.vec3.call(null,cljs.core.map.call(null,((function (ru,rv,rw,map__8432,map__8432__$1,points__$1,map__8430,map__8430__$1,points,map__8431,map__8431__$1,slices,rows,cols,num){
return (function (p1__8408_SHARP_){return thi.ng.common.math.core.roundto.call(null,p1__8408_SHARP_,thi.ng.common.math.core._STAR_eps_STAR_);
});})(ru,rv,rw,map__8432,map__8432__$1,points__$1,map__8430,map__8430__$1,points,map__8431,map__8431__$1,slices,rows,cols,num))
,thi.ng.geom.cuboid.unmap_uvw.call(null,points__$1,p)));
});})(ru,rv,rw,map__8432,map__8432__$1,points__$1,map__8430,map__8430__$1,points,map__8431,map__8431__$1,slices,rows,cols,num))
;var iter__4198__auto__ = ((function (ru,rv,rw,map_p,map__8432,map__8432__$1,points__$1,map__8430,map__8430__$1,points,map__8431,map__8431__$1,slices,rows,cols,num){
return (function iter__8433(s__8434){return (new cljs.core.LazySeq(null,((function (ru,rv,rw,map_p,map__8432,map__8432__$1,points__$1,map__8430,map__8430__$1,points,map__8431,map__8431__$1,slices,rows,cols,num){
return (function (){var s__8434__$1 = s__8434;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__8434__$1);if(temp__4126__auto__)
{var xs__4624__auto__ = temp__4126__auto__;var vec__8452 = cljs.core.first.call(null,xs__4624__auto__);var w1 = cljs.core.nth.call(null,vec__8452,0,null);var w2 = cljs.core.nth.call(null,vec__8452,1,null);var iterys__4194__auto__ = ((function (s__8434__$1,vec__8452,w1,w2,xs__4624__auto__,temp__4126__auto__,ru,rv,rw,map_p,map__8432,map__8432__$1,points__$1,map__8430,map__8430__$1,points,map__8431,map__8431__$1,slices,rows,cols,num){
return (function iter__8435(s__8436){return (new cljs.core.LazySeq(null,((function (s__8434__$1,vec__8452,w1,w2,xs__4624__auto__,temp__4126__auto__,ru,rv,rw,map_p,map__8432,map__8432__$1,points__$1,map__8430,map__8430__$1,points,map__8431,map__8431__$1,slices,rows,cols,num){
return (function (){var s__8436__$1 = s__8436;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__8436__$1);if(temp__4126__auto____$1)
{var xs__4624__auto____$1 = temp__4126__auto____$1;var vec__8458 = cljs.core.first.call(null,xs__4624__auto____$1);var v1 = cljs.core.nth.call(null,vec__8458,0,null);var v2 = cljs.core.nth.call(null,vec__8458,1,null);var iterys__4194__auto__ = ((function (s__8436__$1,s__8434__$1,vec__8458,v1,v2,xs__4624__auto____$1,temp__4126__auto____$1,vec__8452,w1,w2,xs__4624__auto__,temp__4126__auto__,ru,rv,rw,map_p,map__8432,map__8432__$1,points__$1,map__8430,map__8430__$1,points,map__8431,map__8431__$1,slices,rows,cols,num){
return (function iter__8437(s__8438){return (new cljs.core.LazySeq(null,((function (s__8436__$1,s__8434__$1,vec__8458,v1,v2,xs__4624__auto____$1,temp__4126__auto____$1,vec__8452,w1,w2,xs__4624__auto__,temp__4126__auto__,ru,rv,rw,map_p,map__8432,map__8432__$1,points__$1,map__8430,map__8430__$1,points,map__8431,map__8431__$1,slices,rows,cols,num){
return (function (){var s__8438__$1 = s__8438;while(true){
var temp__4126__auto____$2 = cljs.core.seq.call(null,s__8438__$1);if(temp__4126__auto____$2)
{var s__8438__$2 = temp__4126__auto____$2;if(cljs.core.chunked_seq_QMARK_.call(null,s__8438__$2))
{var c__4196__auto__ = cljs.core.chunk_first.call(null,s__8438__$2);var size__4197__auto__ = cljs.core.count.call(null,c__4196__auto__);var b__8440 = cljs.core.chunk_buffer.call(null,size__4197__auto__);if((function (){var i__8439 = 0;while(true){
if((i__8439 < size__4197__auto__))
{var vec__8461 = cljs.core._nth.call(null,c__4196__auto__,i__8439);var u1 = cljs.core.nth.call(null,vec__8461,0,null);var u2 = cljs.core.nth.call(null,vec__8461,1,null);cljs.core.chunk_append.call(null,b__8440,(new thi.ng.geom.types.Cuboid(cljs.core.mapv.call(null,map_p,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [u1,v1,w1], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [u1,v1,w2], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [u2,v1,w2], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [u2,v1,w1], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [u1,v2,w1], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [u1,v2,w2], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [u2,v2,w2], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [u2,v2,w1], null)], null)))));
{
var G__8471 = (i__8439 + 1);
i__8439 = G__8471;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8440),iter__8437.call(null,cljs.core.chunk_rest.call(null,s__8438__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8440),null);
}
} else
{var vec__8462 = cljs.core.first.call(null,s__8438__$2);var u1 = cljs.core.nth.call(null,vec__8462,0,null);var u2 = cljs.core.nth.call(null,vec__8462,1,null);return cljs.core.cons.call(null,(new thi.ng.geom.types.Cuboid(cljs.core.mapv.call(null,map_p,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [u1,v1,w1], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [u1,v1,w2], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [u2,v1,w2], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [u2,v1,w1], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [u1,v2,w1], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [u1,v2,w2], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [u2,v2,w2], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [u2,v2,w1], null)], null)))),iter__8437.call(null,cljs.core.rest.call(null,s__8438__$2)));
}
} else
{return null;
}
break;
}
});})(s__8436__$1,s__8434__$1,vec__8458,v1,v2,xs__4624__auto____$1,temp__4126__auto____$1,vec__8452,w1,w2,xs__4624__auto__,temp__4126__auto__,ru,rv,rw,map_p,map__8432,map__8432__$1,points__$1,map__8430,map__8430__$1,points,map__8431,map__8431__$1,slices,rows,cols,num))
,null,null));
});})(s__8436__$1,s__8434__$1,vec__8458,v1,v2,xs__4624__auto____$1,temp__4126__auto____$1,vec__8452,w1,w2,xs__4624__auto__,temp__4126__auto__,ru,rv,rw,map_p,map__8432,map__8432__$1,points__$1,map__8430,map__8430__$1,points,map__8431,map__8431__$1,slices,rows,cols,num))
;var fs__4195__auto__ = cljs.core.seq.call(null,iterys__4194__auto__.call(null,ru));if(fs__4195__auto__)
{return cljs.core.concat.call(null,fs__4195__auto__,iter__8435.call(null,cljs.core.rest.call(null,s__8436__$1)));
} else
{{
var G__8472 = cljs.core.rest.call(null,s__8436__$1);
s__8436__$1 = G__8472;
continue;
}
}
} else
{return null;
}
break;
}
});})(s__8434__$1,vec__8452,w1,w2,xs__4624__auto__,temp__4126__auto__,ru,rv,rw,map_p,map__8432,map__8432__$1,points__$1,map__8430,map__8430__$1,points,map__8431,map__8431__$1,slices,rows,cols,num))
,null,null));
});})(s__8434__$1,vec__8452,w1,w2,xs__4624__auto__,temp__4126__auto__,ru,rv,rw,map_p,map__8432,map__8432__$1,points__$1,map__8430,map__8430__$1,points,map__8431,map__8431__$1,slices,rows,cols,num))
;var fs__4195__auto__ = cljs.core.seq.call(null,iterys__4194__auto__.call(null,rv));if(fs__4195__auto__)
{return cljs.core.concat.call(null,fs__4195__auto__,iter__8433.call(null,cljs.core.rest.call(null,s__8434__$1)));
} else
{{
var G__8473 = cljs.core.rest.call(null,s__8434__$1);
s__8434__$1 = G__8473;
continue;
}
}
} else
{return null;
}
break;
}
});})(ru,rv,rw,map_p,map__8432,map__8432__$1,points__$1,map__8430,map__8430__$1,points,map__8431,map__8431__$1,slices,rows,cols,num))
,null,null));
});})(ru,rv,rw,map_p,map__8432,map__8432__$1,points__$1,map__8430,map__8430__$1,points,map__8431,map__8431__$1,slices,rows,cols,num))
;return iter__4198__auto__.call(null,rw);
});
thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PClassify$ = true;
thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PClassify$classify_point$arity$2 = (function (_,p){var ___$1 = this;return null;
});
thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PEdgeAccess$ = true;
thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PEdgeAccess$edges$arity$1 = (function (_){var ___$1 = this;var vec__8463 = new cljs.core.Keyword(null,"points","points",4326117461).cljs$core$IFn$_invoke$arity$1(___$1);var a = cljs.core.nth.call(null,vec__8463,0,null);var b = cljs.core.nth.call(null,vec__8463,1,null);var c = cljs.core.nth.call(null,vec__8463,2,null);var d = cljs.core.nth.call(null,vec__8463,3,null);var e = cljs.core.nth.call(null,vec__8463,4,null);var f = cljs.core.nth.call(null,vec__8463,5,null);var g = cljs.core.nth.call(null,vec__8463,6,null);var h = cljs.core.nth.call(null,vec__8463,7,null);return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,d], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [d,a], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,f], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,g], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [g,h], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,e], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,e], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,f], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,g], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [d,h], null)], null);
});
thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PVolume$ = true;
thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PVolume$volume$arity$1 = (function (_){var ___$1 = this;return 0;
});
thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PBoundary$ = true;
thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PBoundary$contains_point_QMARK_$arity$2 = (function (_,p){var ___$1 = this;return (thi.ng.geom.core.classify_point.call(null,___$1,p) >= 0);
});
thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PIntersect$ = true;
thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PIntersect$intersect_shape$arity$2 = (function (_,s){var ___$1 = this;return null;
});
thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PFaceAccess$ = true;
thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PFaceAccess$faces$arity$1 = (function (_){var ___$1 = this;var vec__8464 = new cljs.core.Keyword(null,"points","points",4326117461).cljs$core$IFn$_invoke$arity$1(___$1);var a = cljs.core.nth.call(null,vec__8464,0,null);var b = cljs.core.nth.call(null,vec__8464,1,null);var c = cljs.core.nth.call(null,vec__8464,2,null);var d = cljs.core.nth.call(null,vec__8464,3,null);var e = cljs.core.nth.call(null,vec__8464,4,null);var f = cljs.core.nth.call(null,vec__8464,5,null);var g = cljs.core.nth.call(null,vec__8464,6,null);var h = cljs.core.nth.call(null,vec__8464,7,null);return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,d,h,g], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,f,e], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,f,g,h], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,d,c,b], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,c,g,f], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,e,h,d], null)], null);
});
thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PTranslate$ = true;
thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PTranslate$translate$arity$2 = (function (_,t){var ___$1 = this;return (new thi.ng.geom.types.Cuboid(cljs.core.mapv.call(null,((function (___$1){
return (function (p1__8416_SHARP_){return thi.ng.geom.core._PLUS_.call(null,p1__8416_SHARP_,t);
});})(___$1))
,new cljs.core.Keyword(null,"points","points",4326117461).cljs$core$IFn$_invoke$arity$1(___$1))));
});
thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PBoundingSphere$ = true;
thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PBoundingSphere$bounding_sphere$arity$1 = (function (_){var ___$1 = this;return thi.ng.geom.types.utils.bounding_sphere.call(null,thi.ng.geom.core.centroid.call(null,___$1),new cljs.core.Keyword(null,"points","points",4326117461).cljs$core$IFn$_invoke$arity$1(___$1));
});
thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PScale$ = true;
thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PScale$scale$arity$2 = (function (_,s){var ___$1 = this;return (new thi.ng.geom.types.Cuboid(cljs.core.mapv.call(null,((function (___$1){
return (function (p1__8413_SHARP_){return thi.ng.geom.core._STAR_.call(null,p1__8413_SHARP_,s);
});})(___$1))
,new cljs.core.Keyword(null,"points","points",4326117461).cljs$core$IFn$_invoke$arity$1(___$1))));
});
thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PScale$scale$arity$3 = (function (_,sx,sy){var ___$1 = this;return (new thi.ng.geom.types.Cuboid(cljs.core.mapv.call(null,((function (___$1){
return (function (p1__8414_SHARP_){return thi.ng.geom.core._STAR_.call(null,p1__8414_SHARP_,sx,sy);
});})(___$1))
,new cljs.core.Keyword(null,"points","points",4326117461).cljs$core$IFn$_invoke$arity$1(___$1))));
});
thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PScale$scale$arity$4 = (function (_,sx,sy,sz){var ___$1 = this;return (new thi.ng.geom.types.Cuboid(cljs.core.mapv.call(null,((function (___$1){
return (function (p1__8415_SHARP_){return thi.ng.geom.core._STAR_.call(null,p1__8415_SHARP_,sx,sy,sz);
});})(___$1))
,new cljs.core.Keyword(null,"points","points",4326117461).cljs$core$IFn$_invoke$arity$1(___$1))));
});
thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PScale$scale_size$arity$2 = (function (_,s){var ___$1 = this;return (new thi.ng.geom.types.Cuboid(thi.ng.geom.core.utils.scale_size.call(null,s,new cljs.core.Keyword(null,"points","points",4326117461).cljs$core$IFn$_invoke$arity$1(___$1))));
});
thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PTessellate$ = true;
thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PTessellate$tessellate$arity$1 = (function (_){var ___$1 = this;return thi.ng.geom.core.tessellate.call(null,___$1,cljs.core.PersistentArrayMap.EMPTY);
});
thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PTessellate$tessellate$arity$2 = (function (_,p__8465){var map__8466 = p__8465;var map__8466__$1 = ((cljs.core.seq_QMARK_.call(null,map__8466))?cljs.core.apply.call(null,cljs.core.hash_map,map__8466):map__8466);var opts = map__8466__$1;var f = cljs.core.get.call(null,map__8466__$1,new cljs.core.Keyword(null,"fn","fn",1013907514),thi.ng.geom.core.utils.tessellate_3);var ___$1 = this;return cljs.core.mapcat.call(null,f,cljs.core.mapcat.call(null,thi.ng.geom.core.faces,(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"num","num",1014013688),null,new cljs.core.Keyword(null,"slices","slices",4409223315),null,new cljs.core.Keyword(null,"rows","rows",1017410891),null,new cljs.core.Keyword(null,"cols","cols",1016963685),null], null), null),cljs.core.keys.call(null,opts)))?thi.ng.geom.core.subdivide.call(null,___$1,opts):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [___$1], null))));
});
thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PBounds$ = true;
thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PBounds$bounds$arity$1 = (function (_){var ___$1 = this;return thi.ng.geom.types.utils.bounding_box.call(null,new cljs.core.Keyword(null,"points","points",4326117461).cljs$core$IFn$_invoke$arity$1(___$1));
});
thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PBounds$width$arity$1 = (function (_){var ___$1 = this;return thi.ng.geom.core.utils.axis_range.call(null,0,new cljs.core.Keyword(null,"points","points",4326117461).cljs$core$IFn$_invoke$arity$1(___$1));
});
thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PBounds$height$arity$1 = (function (_){var ___$1 = this;return thi.ng.geom.core.utils.axis_range.call(null,1,new cljs.core.Keyword(null,"points","points",4326117461).cljs$core$IFn$_invoke$arity$1(___$1));
});
thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PBounds$depth$arity$1 = (function (_){var ___$1 = this;return thi.ng.geom.core.utils.axis_range.call(null,2,new cljs.core.Keyword(null,"points","points",4326117461).cljs$core$IFn$_invoke$arity$1(___$1));
});
thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PVertexAccess$ = true;
thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PVertexAccess$vertices$arity$1 = (function (_){var ___$1 = this;return new cljs.core.Keyword(null,"points","points",4326117461).cljs$core$IFn$_invoke$arity$1(___$1);
});
thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PMeshConvert$ = true;
thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PMeshConvert$as_mesh$arity$1 = (function (_){var ___$1 = this;return thi.ng.geom.core.as_mesh.call(null,___$1,cljs.core.PersistentArrayMap.EMPTY);
});
thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PMeshConvert$as_mesh$arity$2 = (function (_,p__8467){var map__8468 = p__8467;var map__8468__$1 = ((cljs.core.seq_QMARK_.call(null,map__8468))?cljs.core.apply.call(null,cljs.core.hash_map,map__8468):map__8468);var flags = cljs.core.get.call(null,map__8468__$1,new cljs.core.Keyword(null,"flags","flags",1111417337),"nsewfb");var mesh = cljs.core.get.call(null,map__8468__$1,new cljs.core.Keyword(null,"mesh","mesh",1017252191));var ___$1 = this;var vec__8469 = thi.ng.geom.core.vertices.call(null,___$1);var a = cljs.core.nth.call(null,vec__8469,0,null);var b = cljs.core.nth.call(null,vec__8469,1,null);var c = cljs.core.nth.call(null,vec__8469,2,null);var d = cljs.core.nth.call(null,vec__8469,3,null);var e = cljs.core.nth.call(null,vec__8469,4,null);var f = cljs.core.nth.call(null,vec__8469,5,null);var g = cljs.core.nth.call(null,vec__8469,6,null);var h = cljs.core.nth.call(null,vec__8469,7,null);var vec__8470 = thi.ng.common.data.core.demunge_flags_seq.call(null,flags,"nsewfb");var tp = cljs.core.nth.call(null,vec__8470,0,null);var bt = cljs.core.nth.call(null,vec__8470,1,null);var rt = cljs.core.nth.call(null,vec__8470,2,null);var lf = cljs.core.nth.call(null,vec__8470,3,null);var fr = cljs.core.nth.call(null,vec__8470,4,null);var bk = cljs.core.nth.call(null,vec__8470,5,null);return thi.ng.geom.core.into.call(null,(function (){var or__3481__auto__ = mesh;if(cljs.core.truth_(or__3481__auto__))
{return or__3481__auto__;
} else
{return thi.ng.geom.gmesh.gmesh.call(null);
}
})(),cljs.core.filter.call(null,cljs.core.identity,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(fr)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,c,g,f], null):null),(cljs.core.truth_(bk)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,e,h,d], null):null),(cljs.core.truth_(lf)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,f,e], null):null),(cljs.core.truth_(rt)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,d,h,g], null):null),(cljs.core.truth_(tp)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,f,g,h], null):null),(cljs.core.truth_(bt)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,d,c,b], null):null)], null)));
});
thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PProximity$ = true;
thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PProximity$closest_point$arity$2 = (function (_,p){var ___$1 = this;return null;
});
thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PArea$ = true;
thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PArea$area$arity$1 = (function (_){var ___$1 = this;return cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (___$1){
return (function (p1__8407_SHARP_){return cljs.core.apply.call(null,thi.ng.geom.core.utils.tri_area3,p1__8407_SHARP_);
});})(___$1))
,thi.ng.geom.core.tessellate.call(null,___$1)));
});
