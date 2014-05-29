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
var cuboid__2 = (function (o,size){var vec__10746 = thi.ng.geom.core.vector.vec3.call(null,o);var x1 = cljs.core.nth.call(null,vec__10746,0,null);var y1 = cljs.core.nth.call(null,vec__10746,1,null);var z1 = cljs.core.nth.call(null,vec__10746,2,null);var a = vec__10746;var vec__10747 = thi.ng.geom.core._PLUS_.call(null,a,size);var x2 = cljs.core.nth.call(null,vec__10747,0,null);var y2 = cljs.core.nth.call(null,vec__10747,1,null);var z2 = cljs.core.nth.call(null,vec__10747,2,null);var g = vec__10747;var b = thi.ng.geom.core.vector.vec3.call(null,x1,y1,z2);var c = thi.ng.geom.core.vector.vec3.call(null,x2,y1,z2);var d = thi.ng.geom.core.vector.vec3.call(null,x2,y1,z1);var e = thi.ng.geom.core.vector.vec3.call(null,x1,y2,z1);var f = thi.ng.geom.core.vector.vec3.call(null,x1,y2,z2);var h = thi.ng.geom.core.vector.vec3.call(null,x2,y2,z1);return (new thi.ng.geom.types.Cuboid(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f,g,h], null)));
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
thi.ng.geom.cuboid.unmap_uvw = (function unmap_uvw(p__10748,p__10749){var vec__10752 = p__10748;var a = cljs.core.nth.call(null,vec__10752,0,null);var b = cljs.core.nth.call(null,vec__10752,1,null);var c = cljs.core.nth.call(null,vec__10752,2,null);var d = cljs.core.nth.call(null,vec__10752,3,null);var e = cljs.core.nth.call(null,vec__10752,4,null);var f = cljs.core.nth.call(null,vec__10752,5,null);var g = cljs.core.nth.call(null,vec__10752,6,null);var h = cljs.core.nth.call(null,vec__10752,7,null);var vec__10753 = p__10749;var u = cljs.core.nth.call(null,vec__10753,0,null);var v = cljs.core.nth.call(null,vec__10753,1,null);var w = cljs.core.nth.call(null,vec__10753,2,null);return thi.ng.geom.core.mix.call(null,thi.ng.geom.core.mix.call(null,a,d,e,h,u,v),thi.ng.geom.core.mix.call(null,b,c,f,g,u,v),w);
});
thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PTransform$ = true;
thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PTransform$transform$arity$2 = (function (_,m){var ___$1 = this;return (new thi.ng.geom.types.Cuboid(cljs.core.mapv.call(null,((function (___$1){
return (function (p1__10764_SHARP_){return thi.ng.geom.core.transform_vector.call(null,m,p1__10764_SHARP_);
});})(___$1))
,new cljs.core.Keyword(null,"points","points",4326117461).cljs$core$IFn$_invoke$arity$1(___$1))));
});
thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PRotate$ = true;
thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PRotate$rotate$arity$2 = (function (_,theta){var ___$1 = this;return thi.ng.geom.core.rotate_z.call(null,___$1,theta);
});
thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PRotate3D$ = true;
thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PRotate3D$rotate_x$arity$2 = (function (_,theta){var ___$1 = this;return (new thi.ng.geom.types.Cuboid(cljs.core.mapv.call(null,((function (___$1){
return (function (p1__10756_SHARP_){return thi.ng.geom.core.rotate_x.call(null,p1__10756_SHARP_,theta);
});})(___$1))
,new cljs.core.Keyword(null,"points","points",4326117461).cljs$core$IFn$_invoke$arity$1(___$1))));
});
thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PRotate3D$rotate_y$arity$2 = (function (_,theta){var ___$1 = this;return (new thi.ng.geom.types.Cuboid(cljs.core.mapv.call(null,((function (___$1){
return (function (p1__10757_SHARP_){return thi.ng.geom.core.rotate_y.call(null,p1__10757_SHARP_,theta);
});})(___$1))
,new cljs.core.Keyword(null,"points","points",4326117461).cljs$core$IFn$_invoke$arity$1(___$1))));
});
thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PRotate3D$rotate_z$arity$2 = (function (_,theta){var ___$1 = this;return (new thi.ng.geom.types.Cuboid(cljs.core.mapv.call(null,((function (___$1){
return (function (p1__10758_SHARP_){return thi.ng.geom.core.rotate_z.call(null,p1__10758_SHARP_,theta);
});})(___$1))
,new cljs.core.Keyword(null,"points","points",4326117461).cljs$core$IFn$_invoke$arity$1(___$1))));
});
thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PRotate3D$rotate_around_axis$arity$3 = (function (_,axis,theta){var ___$1 = this;return (new thi.ng.geom.types.Cuboid(cljs.core.mapv.call(null,((function (___$1){
return (function (p1__10759_SHARP_){return thi.ng.geom.core.rotate_around_axis.call(null,p1__10759_SHARP_,axis,theta);
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
thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PSample$random_point_inside$arity$1 = (function (p__10765){var map__10766 = p__10765;var map__10766__$1 = ((cljs.core.seq_QMARK_.call(null,map__10766))?cljs.core.apply.call(null,cljs.core.hash_map,map__10766):map__10766);var p = cljs.core.get.call(null,map__10766__$1,new cljs.core.Keyword(null,"p","p",1013904354));var size = cljs.core.get.call(null,map__10766__$1,new cljs.core.Keyword(null,"size","size",1017434995));var map__10767 = this;var map__10767__$1 = ((cljs.core.seq_QMARK_.call(null,map__10767))?cljs.core.apply.call(null,cljs.core.hash_map,map__10767):map__10767);var p__$1 = cljs.core.get.call(null,map__10767__$1,new cljs.core.Keyword(null,"p","p",1013904354));var size__$1 = cljs.core.get.call(null,map__10767__$1,new cljs.core.Keyword(null,"size","size",1017434995));var vec__10768 = p__$1;var x1 = cljs.core.nth.call(null,vec__10768,0,null);var y1 = cljs.core.nth.call(null,vec__10768,1,null);var z1 = cljs.core.nth.call(null,vec__10768,2,null);var vec__10769 = thi.ng.geom.core._PLUS_.call(null,p__$1,size__$1);var x2 = cljs.core.nth.call(null,vec__10769,0,null);var y2 = cljs.core.nth.call(null,vec__10769,1,null);var z2 = cljs.core.nth.call(null,vec__10769,2,null);return thi.ng.geom.core.vector.vec3.call(null,thi.ng.common.math.core.random.call(null,x1,x2),thi.ng.common.math.core.random.call(null,y1,y2),thi.ng.common.math.core.random.call(null,z1,z2));
});
thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PSample$random_point$arity$1 = (function (p__10770){var map__10771 = p__10770;var map__10771__$1 = ((cljs.core.seq_QMARK_.call(null,map__10771))?cljs.core.apply.call(null,cljs.core.hash_map,map__10771):map__10771);var p = cljs.core.get.call(null,map__10771__$1,new cljs.core.Keyword(null,"p","p",1013904354));var size = cljs.core.get.call(null,map__10771__$1,new cljs.core.Keyword(null,"size","size",1017434995));var map__10772 = this;var map__10772__$1 = ((cljs.core.seq_QMARK_.call(null,map__10772))?cljs.core.apply.call(null,cljs.core.hash_map,map__10772):map__10772);var p__$1 = cljs.core.get.call(null,map__10772__$1,new cljs.core.Keyword(null,"p","p",1013904354));var size__$1 = cljs.core.get.call(null,map__10772__$1,new cljs.core.Keyword(null,"size","size",1017434995));var vec__10773 = p__$1;var x1 = cljs.core.nth.call(null,vec__10773,0,null);var y1 = cljs.core.nth.call(null,vec__10773,1,null);var z1 = cljs.core.nth.call(null,vec__10773,2,null);var vec__10774 = thi.ng.geom.core._PLUS_.call(null,p__$1,size__$1);var x2 = cljs.core.nth.call(null,vec__10774,0,null);var y2 = cljs.core.nth.call(null,vec__10774,1,null);var z2 = cljs.core.nth.call(null,vec__10774,2,null);var id = (thi.ng.common.math.core.random.call(null,6) | 0);if((id < 2))
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
thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PSubdivide$subdivide$arity$2 = (function (p__10775,p__10776){var map__10777 = p__10775;var map__10777__$1 = ((cljs.core.seq_QMARK_.call(null,map__10777))?cljs.core.apply.call(null,cljs.core.hash_map,map__10777):map__10777);var points = cljs.core.get.call(null,map__10777__$1,new cljs.core.Keyword(null,"points","points",4326117461));var map__10778 = p__10776;var map__10778__$1 = ((cljs.core.seq_QMARK_.call(null,map__10778))?cljs.core.apply.call(null,cljs.core.hash_map,map__10778):map__10778);var slices = cljs.core.get.call(null,map__10778__$1,new cljs.core.Keyword(null,"slices","slices",4409223315));var rows = cljs.core.get.call(null,map__10778__$1,new cljs.core.Keyword(null,"rows","rows",1017410891));var cols = cljs.core.get.call(null,map__10778__$1,new cljs.core.Keyword(null,"cols","cols",1016963685));var num = cljs.core.get.call(null,map__10778__$1,new cljs.core.Keyword(null,"num","num",1014013688),1);var map__10779 = this;var map__10779__$1 = ((cljs.core.seq_QMARK_.call(null,map__10779))?cljs.core.apply.call(null,cljs.core.hash_map,map__10779):map__10779);var points__$1 = cljs.core.get.call(null,map__10779__$1,new cljs.core.Keyword(null,"points","points",4326117461));var ru = thi.ng.common.data.core.successive_nth.call(null,2,thi.ng.common.math.core.norm_range.call(null,(function (){var or__4953__auto__ = cols;if(cljs.core.truth_(or__4953__auto__))
{return or__4953__auto__;
} else
{return num;
}
})()));var rv = thi.ng.common.data.core.successive_nth.call(null,2,thi.ng.common.math.core.norm_range.call(null,(function (){var or__4953__auto__ = rows;if(cljs.core.truth_(or__4953__auto__))
{return or__4953__auto__;
} else
{return num;
}
})()));var rw = thi.ng.common.data.core.successive_nth.call(null,2,thi.ng.common.math.core.norm_range.call(null,(function (){var or__4953__auto__ = slices;if(cljs.core.truth_(or__4953__auto__))
{return or__4953__auto__;
} else
{return num;
}
})()));var map_p = ((function (ru,rv,rw,map__10779,map__10779__$1,points__$1,map__10777,map__10777__$1,points,map__10778,map__10778__$1,slices,rows,cols,num){
return (function (p){return thi.ng.geom.core.vector.vec3.call(null,cljs.core.map.call(null,((function (ru,rv,rw,map__10779,map__10779__$1,points__$1,map__10777,map__10777__$1,points,map__10778,map__10778__$1,slices,rows,cols,num){
return (function (p1__10755_SHARP_){return thi.ng.common.math.core.roundto.call(null,p1__10755_SHARP_,thi.ng.common.math.core._STAR_eps_STAR_);
});})(ru,rv,rw,map__10779,map__10779__$1,points__$1,map__10777,map__10777__$1,points,map__10778,map__10778__$1,slices,rows,cols,num))
,thi.ng.geom.cuboid.unmap_uvw.call(null,points__$1,p)));
});})(ru,rv,rw,map__10779,map__10779__$1,points__$1,map__10777,map__10777__$1,points,map__10778,map__10778__$1,slices,rows,cols,num))
;var iter__5670__auto__ = ((function (ru,rv,rw,map_p,map__10779,map__10779__$1,points__$1,map__10777,map__10777__$1,points,map__10778,map__10778__$1,slices,rows,cols,num){
return (function iter__10780(s__10781){return (new cljs.core.LazySeq(null,((function (ru,rv,rw,map_p,map__10779,map__10779__$1,points__$1,map__10777,map__10777__$1,points,map__10778,map__10778__$1,slices,rows,cols,num){
return (function (){var s__10781__$1 = s__10781;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__10781__$1);if(temp__4126__auto__)
{var xs__4624__auto__ = temp__4126__auto__;var vec__10799 = cljs.core.first.call(null,xs__4624__auto__);var w1 = cljs.core.nth.call(null,vec__10799,0,null);var w2 = cljs.core.nth.call(null,vec__10799,1,null);var iterys__5666__auto__ = ((function (s__10781__$1,vec__10799,w1,w2,xs__4624__auto__,temp__4126__auto__,ru,rv,rw,map_p,map__10779,map__10779__$1,points__$1,map__10777,map__10777__$1,points,map__10778,map__10778__$1,slices,rows,cols,num){
return (function iter__10782(s__10783){return (new cljs.core.LazySeq(null,((function (s__10781__$1,vec__10799,w1,w2,xs__4624__auto__,temp__4126__auto__,ru,rv,rw,map_p,map__10779,map__10779__$1,points__$1,map__10777,map__10777__$1,points,map__10778,map__10778__$1,slices,rows,cols,num){
return (function (){var s__10783__$1 = s__10783;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__10783__$1);if(temp__4126__auto____$1)
{var xs__4624__auto____$1 = temp__4126__auto____$1;var vec__10805 = cljs.core.first.call(null,xs__4624__auto____$1);var v1 = cljs.core.nth.call(null,vec__10805,0,null);var v2 = cljs.core.nth.call(null,vec__10805,1,null);var iterys__5666__auto__ = ((function (s__10783__$1,s__10781__$1,vec__10805,v1,v2,xs__4624__auto____$1,temp__4126__auto____$1,vec__10799,w1,w2,xs__4624__auto__,temp__4126__auto__,ru,rv,rw,map_p,map__10779,map__10779__$1,points__$1,map__10777,map__10777__$1,points,map__10778,map__10778__$1,slices,rows,cols,num){
return (function iter__10784(s__10785){return (new cljs.core.LazySeq(null,((function (s__10783__$1,s__10781__$1,vec__10805,v1,v2,xs__4624__auto____$1,temp__4126__auto____$1,vec__10799,w1,w2,xs__4624__auto__,temp__4126__auto__,ru,rv,rw,map_p,map__10779,map__10779__$1,points__$1,map__10777,map__10777__$1,points,map__10778,map__10778__$1,slices,rows,cols,num){
return (function (){var s__10785__$1 = s__10785;while(true){
var temp__4126__auto____$2 = cljs.core.seq.call(null,s__10785__$1);if(temp__4126__auto____$2)
{var s__10785__$2 = temp__4126__auto____$2;if(cljs.core.chunked_seq_QMARK_.call(null,s__10785__$2))
{var c__5668__auto__ = cljs.core.chunk_first.call(null,s__10785__$2);var size__5669__auto__ = cljs.core.count.call(null,c__5668__auto__);var b__10787 = cljs.core.chunk_buffer.call(null,size__5669__auto__);if((function (){var i__10786 = 0;while(true){
if((i__10786 < size__5669__auto__))
{var vec__10808 = cljs.core._nth.call(null,c__5668__auto__,i__10786);var u1 = cljs.core.nth.call(null,vec__10808,0,null);var u2 = cljs.core.nth.call(null,vec__10808,1,null);cljs.core.chunk_append.call(null,b__10787,(new thi.ng.geom.types.Cuboid(cljs.core.mapv.call(null,map_p,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [u1,v1,w1], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [u1,v1,w2], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [u2,v1,w2], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [u2,v1,w1], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [u1,v2,w1], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [u1,v2,w2], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [u2,v2,w2], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [u2,v2,w1], null)], null)))));
{
var G__10818 = (i__10786 + 1);
i__10786 = G__10818;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10787),iter__10784.call(null,cljs.core.chunk_rest.call(null,s__10785__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10787),null);
}
} else
{var vec__10809 = cljs.core.first.call(null,s__10785__$2);var u1 = cljs.core.nth.call(null,vec__10809,0,null);var u2 = cljs.core.nth.call(null,vec__10809,1,null);return cljs.core.cons.call(null,(new thi.ng.geom.types.Cuboid(cljs.core.mapv.call(null,map_p,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [u1,v1,w1], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [u1,v1,w2], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [u2,v1,w2], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [u2,v1,w1], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [u1,v2,w1], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [u1,v2,w2], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [u2,v2,w2], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [u2,v2,w1], null)], null)))),iter__10784.call(null,cljs.core.rest.call(null,s__10785__$2)));
}
} else
{return null;
}
break;
}
});})(s__10783__$1,s__10781__$1,vec__10805,v1,v2,xs__4624__auto____$1,temp__4126__auto____$1,vec__10799,w1,w2,xs__4624__auto__,temp__4126__auto__,ru,rv,rw,map_p,map__10779,map__10779__$1,points__$1,map__10777,map__10777__$1,points,map__10778,map__10778__$1,slices,rows,cols,num))
,null,null));
});})(s__10783__$1,s__10781__$1,vec__10805,v1,v2,xs__4624__auto____$1,temp__4126__auto____$1,vec__10799,w1,w2,xs__4624__auto__,temp__4126__auto__,ru,rv,rw,map_p,map__10779,map__10779__$1,points__$1,map__10777,map__10777__$1,points,map__10778,map__10778__$1,slices,rows,cols,num))
;var fs__5667__auto__ = cljs.core.seq.call(null,iterys__5666__auto__.call(null,ru));if(fs__5667__auto__)
{return cljs.core.concat.call(null,fs__5667__auto__,iter__10782.call(null,cljs.core.rest.call(null,s__10783__$1)));
} else
{{
var G__10819 = cljs.core.rest.call(null,s__10783__$1);
s__10783__$1 = G__10819;
continue;
}
}
} else
{return null;
}
break;
}
});})(s__10781__$1,vec__10799,w1,w2,xs__4624__auto__,temp__4126__auto__,ru,rv,rw,map_p,map__10779,map__10779__$1,points__$1,map__10777,map__10777__$1,points,map__10778,map__10778__$1,slices,rows,cols,num))
,null,null));
});})(s__10781__$1,vec__10799,w1,w2,xs__4624__auto__,temp__4126__auto__,ru,rv,rw,map_p,map__10779,map__10779__$1,points__$1,map__10777,map__10777__$1,points,map__10778,map__10778__$1,slices,rows,cols,num))
;var fs__5667__auto__ = cljs.core.seq.call(null,iterys__5666__auto__.call(null,rv));if(fs__5667__auto__)
{return cljs.core.concat.call(null,fs__5667__auto__,iter__10780.call(null,cljs.core.rest.call(null,s__10781__$1)));
} else
{{
var G__10820 = cljs.core.rest.call(null,s__10781__$1);
s__10781__$1 = G__10820;
continue;
}
}
} else
{return null;
}
break;
}
});})(ru,rv,rw,map_p,map__10779,map__10779__$1,points__$1,map__10777,map__10777__$1,points,map__10778,map__10778__$1,slices,rows,cols,num))
,null,null));
});})(ru,rv,rw,map_p,map__10779,map__10779__$1,points__$1,map__10777,map__10777__$1,points,map__10778,map__10778__$1,slices,rows,cols,num))
;return iter__5670__auto__.call(null,rw);
});
thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PClassify$ = true;
thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PClassify$classify_point$arity$2 = (function (_,p){var ___$1 = this;return null;
});
thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PEdgeAccess$ = true;
thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PEdgeAccess$edges$arity$1 = (function (_){var ___$1 = this;var vec__10810 = new cljs.core.Keyword(null,"points","points",4326117461).cljs$core$IFn$_invoke$arity$1(___$1);var a = cljs.core.nth.call(null,vec__10810,0,null);var b = cljs.core.nth.call(null,vec__10810,1,null);var c = cljs.core.nth.call(null,vec__10810,2,null);var d = cljs.core.nth.call(null,vec__10810,3,null);var e = cljs.core.nth.call(null,vec__10810,4,null);var f = cljs.core.nth.call(null,vec__10810,5,null);var g = cljs.core.nth.call(null,vec__10810,6,null);var h = cljs.core.nth.call(null,vec__10810,7,null);return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,d], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [d,a], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,f], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,g], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [g,h], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,e], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,e], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,f], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,g], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [d,h], null)], null);
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
thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PFaceAccess$faces$arity$1 = (function (_){var ___$1 = this;var vec__10811 = new cljs.core.Keyword(null,"points","points",4326117461).cljs$core$IFn$_invoke$arity$1(___$1);var a = cljs.core.nth.call(null,vec__10811,0,null);var b = cljs.core.nth.call(null,vec__10811,1,null);var c = cljs.core.nth.call(null,vec__10811,2,null);var d = cljs.core.nth.call(null,vec__10811,3,null);var e = cljs.core.nth.call(null,vec__10811,4,null);var f = cljs.core.nth.call(null,vec__10811,5,null);var g = cljs.core.nth.call(null,vec__10811,6,null);var h = cljs.core.nth.call(null,vec__10811,7,null);return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,d,h,g], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,f,e], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,f,g,h], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,d,c,b], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,c,g,f], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,e,h,d], null)], null);
});
thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PTranslate$ = true;
thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PTranslate$translate$arity$2 = (function (_,t){var ___$1 = this;return (new thi.ng.geom.types.Cuboid(cljs.core.mapv.call(null,((function (___$1){
return (function (p1__10763_SHARP_){return thi.ng.geom.core._PLUS_.call(null,p1__10763_SHARP_,t);
});})(___$1))
,new cljs.core.Keyword(null,"points","points",4326117461).cljs$core$IFn$_invoke$arity$1(___$1))));
});
thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PBoundingSphere$ = true;
thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PBoundingSphere$bounding_sphere$arity$1 = (function (_){var ___$1 = this;return thi.ng.geom.types.utils.bounding_sphere.call(null,thi.ng.geom.core.centroid.call(null,___$1),new cljs.core.Keyword(null,"points","points",4326117461).cljs$core$IFn$_invoke$arity$1(___$1));
});
thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PScale$ = true;
thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PScale$scale$arity$2 = (function (_,s){var ___$1 = this;return (new thi.ng.geom.types.Cuboid(cljs.core.mapv.call(null,((function (___$1){
return (function (p1__10760_SHARP_){return thi.ng.geom.core._STAR_.call(null,p1__10760_SHARP_,s);
});})(___$1))
,new cljs.core.Keyword(null,"points","points",4326117461).cljs$core$IFn$_invoke$arity$1(___$1))));
});
thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PScale$scale$arity$3 = (function (_,sx,sy){var ___$1 = this;return (new thi.ng.geom.types.Cuboid(cljs.core.mapv.call(null,((function (___$1){
return (function (p1__10761_SHARP_){return thi.ng.geom.core._STAR_.call(null,p1__10761_SHARP_,sx,sy);
});})(___$1))
,new cljs.core.Keyword(null,"points","points",4326117461).cljs$core$IFn$_invoke$arity$1(___$1))));
});
thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PScale$scale$arity$4 = (function (_,sx,sy,sz){var ___$1 = this;return (new thi.ng.geom.types.Cuboid(cljs.core.mapv.call(null,((function (___$1){
return (function (p1__10762_SHARP_){return thi.ng.geom.core._STAR_.call(null,p1__10762_SHARP_,sx,sy,sz);
});})(___$1))
,new cljs.core.Keyword(null,"points","points",4326117461).cljs$core$IFn$_invoke$arity$1(___$1))));
});
thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PScale$scale_size$arity$2 = (function (_,s){var ___$1 = this;return (new thi.ng.geom.types.Cuboid(thi.ng.geom.core.utils.scale_size.call(null,s,new cljs.core.Keyword(null,"points","points",4326117461).cljs$core$IFn$_invoke$arity$1(___$1))));
});
thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PTessellate$ = true;
thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PTessellate$tessellate$arity$1 = (function (_){var ___$1 = this;return thi.ng.geom.core.tessellate.call(null,___$1,cljs.core.PersistentArrayMap.EMPTY);
});
thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PTessellate$tessellate$arity$2 = (function (_,p__10812){var map__10813 = p__10812;var map__10813__$1 = ((cljs.core.seq_QMARK_.call(null,map__10813))?cljs.core.apply.call(null,cljs.core.hash_map,map__10813):map__10813);var opts = map__10813__$1;var f = cljs.core.get.call(null,map__10813__$1,new cljs.core.Keyword(null,"fn","fn",1013907514),thi.ng.geom.core.utils.tessellate_3);var ___$1 = this;return cljs.core.mapcat.call(null,f,cljs.core.mapcat.call(null,thi.ng.geom.core.faces,(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"num","num",1014013688),null,new cljs.core.Keyword(null,"slices","slices",4409223315),null,new cljs.core.Keyword(null,"rows","rows",1017410891),null,new cljs.core.Keyword(null,"cols","cols",1016963685),null], null), null),cljs.core.keys.call(null,opts)))?thi.ng.geom.core.subdivide.call(null,___$1,opts):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [___$1], null))));
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
thi.ng.geom.types.Cuboid.prototype.thi$ng$geom$core$PMeshConvert$as_mesh$arity$2 = (function (_,p__10814){var map__10815 = p__10814;var map__10815__$1 = ((cljs.core.seq_QMARK_.call(null,map__10815))?cljs.core.apply.call(null,cljs.core.hash_map,map__10815):map__10815);var flags = cljs.core.get.call(null,map__10815__$1,new cljs.core.Keyword(null,"flags","flags",1111417337),"nsewfb");var mesh = cljs.core.get.call(null,map__10815__$1,new cljs.core.Keyword(null,"mesh","mesh",1017252191));var ___$1 = this;var vec__10816 = thi.ng.geom.core.vertices.call(null,___$1);var a = cljs.core.nth.call(null,vec__10816,0,null);var b = cljs.core.nth.call(null,vec__10816,1,null);var c = cljs.core.nth.call(null,vec__10816,2,null);var d = cljs.core.nth.call(null,vec__10816,3,null);var e = cljs.core.nth.call(null,vec__10816,4,null);var f = cljs.core.nth.call(null,vec__10816,5,null);var g = cljs.core.nth.call(null,vec__10816,6,null);var h = cljs.core.nth.call(null,vec__10816,7,null);var vec__10817 = thi.ng.common.data.core.demunge_flags_seq.call(null,flags,"nsewfb");var tp = cljs.core.nth.call(null,vec__10817,0,null);var bt = cljs.core.nth.call(null,vec__10817,1,null);var rt = cljs.core.nth.call(null,vec__10817,2,null);var lf = cljs.core.nth.call(null,vec__10817,3,null);var fr = cljs.core.nth.call(null,vec__10817,4,null);var bk = cljs.core.nth.call(null,vec__10817,5,null);return thi.ng.geom.core.into.call(null,(function (){var or__4953__auto__ = mesh;if(cljs.core.truth_(or__4953__auto__))
{return or__4953__auto__;
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
return (function (p1__10754_SHARP_){return cljs.core.apply.call(null,thi.ng.geom.core.utils.tri_area3,p1__10754_SHARP_);
});})(___$1))
,thi.ng.geom.core.tessellate.call(null,___$1)));
});
