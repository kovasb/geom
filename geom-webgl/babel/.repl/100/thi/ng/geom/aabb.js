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
thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PCenter$center$arity$1 = (function (p__10670){var map__10671 = p__10670;var map__10671__$1 = ((cljs.core.seq_QMARK_.call(null,map__10671))?cljs.core.apply.call(null,cljs.core.hash_map,map__10671):map__10671);var p = cljs.core.get.call(null,map__10671__$1,new cljs.core.Keyword(null,"p","p",1013904354));var size = cljs.core.get.call(null,map__10671__$1,new cljs.core.Keyword(null,"size","size",1017434995));var map__10672 = this;var map__10672__$1 = ((cljs.core.seq_QMARK_.call(null,map__10672))?cljs.core.apply.call(null,cljs.core.hash_map,map__10672):map__10672);var p__$1 = cljs.core.get.call(null,map__10672__$1,new cljs.core.Keyword(null,"p","p",1013904354));var size__$1 = cljs.core.get.call(null,map__10672__$1,new cljs.core.Keyword(null,"size","size",1017434995));return (new thi.ng.geom.types.AABB(thi.ng.geom.core._.call(null,p__$1,thi.ng.geom.core._STAR_.call(null,size__$1,0.5)),size__$1));
});
thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PCenter$center$arity$2 = (function (p__10673,q){var map__10674 = p__10673;var map__10674__$1 = ((cljs.core.seq_QMARK_.call(null,map__10674))?cljs.core.apply.call(null,cljs.core.hash_map,map__10674):map__10674);var size = cljs.core.get.call(null,map__10674__$1,new cljs.core.Keyword(null,"size","size",1017434995));var map__10675 = this;var map__10675__$1 = ((cljs.core.seq_QMARK_.call(null,map__10675))?cljs.core.apply.call(null,cljs.core.hash_map,map__10675):map__10675);var size__$1 = cljs.core.get.call(null,map__10675__$1,new cljs.core.Keyword(null,"size","size",1017434995));return (new thi.ng.geom.types.AABB(thi.ng.geom.core._.call(null,q,thi.ng.geom.core._STAR_.call(null,size__$1,0.5)),size__$1));
});
thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PCenter$centroid$arity$1 = (function (_){var ___$1 = this;return thi.ng.geom.core.madd.call(null,new cljs.core.Keyword(null,"size","size",1017434995).cljs$core$IFn$_invoke$arity$1(___$1),0.5,new cljs.core.Keyword(null,"p","p",1013904354).cljs$core$IFn$_invoke$arity$1(___$1));
});
thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PSample$ = true;
thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PSample$random_point_inside$arity$1 = (function (p__10676){var map__10677 = p__10676;var map__10677__$1 = ((cljs.core.seq_QMARK_.call(null,map__10677))?cljs.core.apply.call(null,cljs.core.hash_map,map__10677):map__10677);var p = cljs.core.get.call(null,map__10677__$1,new cljs.core.Keyword(null,"p","p",1013904354));var size = cljs.core.get.call(null,map__10677__$1,new cljs.core.Keyword(null,"size","size",1017434995));var map__10678 = this;var map__10678__$1 = ((cljs.core.seq_QMARK_.call(null,map__10678))?cljs.core.apply.call(null,cljs.core.hash_map,map__10678):map__10678);var p__$1 = cljs.core.get.call(null,map__10678__$1,new cljs.core.Keyword(null,"p","p",1013904354));var size__$1 = cljs.core.get.call(null,map__10678__$1,new cljs.core.Keyword(null,"size","size",1017434995));var vec__10679 = p__$1;var x1 = cljs.core.nth.call(null,vec__10679,0,null);var y1 = cljs.core.nth.call(null,vec__10679,1,null);var z1 = cljs.core.nth.call(null,vec__10679,2,null);var vec__10680 = thi.ng.geom.core._PLUS_.call(null,p__$1,size__$1);var x2 = cljs.core.nth.call(null,vec__10680,0,null);var y2 = cljs.core.nth.call(null,vec__10680,1,null);var z2 = cljs.core.nth.call(null,vec__10680,2,null);return thi.ng.geom.core.vector.vec3.call(null,thi.ng.common.math.core.random.call(null,x1,x2),thi.ng.common.math.core.random.call(null,y1,y2),thi.ng.common.math.core.random.call(null,z1,z2));
});
thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PSample$random_point$arity$1 = (function (p__10681){var map__10682 = p__10681;var map__10682__$1 = ((cljs.core.seq_QMARK_.call(null,map__10682))?cljs.core.apply.call(null,cljs.core.hash_map,map__10682):map__10682);var p = cljs.core.get.call(null,map__10682__$1,new cljs.core.Keyword(null,"p","p",1013904354));var size = cljs.core.get.call(null,map__10682__$1,new cljs.core.Keyword(null,"size","size",1017434995));var map__10683 = this;var map__10683__$1 = ((cljs.core.seq_QMARK_.call(null,map__10683))?cljs.core.apply.call(null,cljs.core.hash_map,map__10683):map__10683);var p__$1 = cljs.core.get.call(null,map__10683__$1,new cljs.core.Keyword(null,"p","p",1013904354));var size__$1 = cljs.core.get.call(null,map__10683__$1,new cljs.core.Keyword(null,"size","size",1017434995));var vec__10684 = p__$1;var x1 = cljs.core.nth.call(null,vec__10684,0,null);var y1 = cljs.core.nth.call(null,vec__10684,1,null);var z1 = cljs.core.nth.call(null,vec__10684,2,null);var vec__10685 = thi.ng.geom.core._PLUS_.call(null,p__$1,size__$1);var x2 = cljs.core.nth.call(null,vec__10685,0,null);var y2 = cljs.core.nth.call(null,vec__10685,1,null);var z2 = cljs.core.nth.call(null,vec__10685,2,null);var id = (thi.ng.common.math.core.random.call(null,6) | 0);if((id < 2))
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
thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PSubdivide$subdivide$arity$2 = (function (p__10686,p__10687){var map__10688 = p__10686;var map__10688__$1 = ((cljs.core.seq_QMARK_.call(null,map__10688))?cljs.core.apply.call(null,cljs.core.hash_map,map__10688):map__10688);var p = cljs.core.get.call(null,map__10688__$1,new cljs.core.Keyword(null,"p","p",1013904354));var size = cljs.core.get.call(null,map__10688__$1,new cljs.core.Keyword(null,"size","size",1017434995));var map__10689 = p__10687;var map__10689__$1 = ((cljs.core.seq_QMARK_.call(null,map__10689))?cljs.core.apply.call(null,cljs.core.hash_map,map__10689):map__10689);var slices = cljs.core.get.call(null,map__10689__$1,new cljs.core.Keyword(null,"slices","slices",4409223315));var rows = cljs.core.get.call(null,map__10689__$1,new cljs.core.Keyword(null,"rows","rows",1017410891));var cols = cljs.core.get.call(null,map__10689__$1,new cljs.core.Keyword(null,"cols","cols",1016963685));var num = cljs.core.get.call(null,map__10689__$1,new cljs.core.Keyword(null,"num","num",1014013688),1);var map__10690 = this;var map__10690__$1 = ((cljs.core.seq_QMARK_.call(null,map__10690))?cljs.core.apply.call(null,cljs.core.hash_map,map__10690):map__10690);var p__$1 = cljs.core.get.call(null,map__10690__$1,new cljs.core.Keyword(null,"p","p",1013904354));var size__$1 = cljs.core.get.call(null,map__10690__$1,new cljs.core.Keyword(null,"size","size",1017434995));var sx = (function (){var or__4953__auto__ = cols;if(cljs.core.truth_(or__4953__auto__))
{return or__4953__auto__;
} else
{return num;
}
})();var sy = (function (){var or__4953__auto__ = rows;if(cljs.core.truth_(or__4953__auto__))
{return or__4953__auto__;
} else
{return num;
}
})();var sz = (function (){var or__4953__auto__ = slices;if(cljs.core.truth_(or__4953__auto__))
{return or__4953__auto__;
} else
{return num;
}
})();var s = thi.ng.geom.core.div.call(null,size__$1,sx,sy,sz);var iter__5670__auto__ = ((function (sx,sy,sz,s,map__10690,map__10690__$1,p__$1,size__$1,map__10688,map__10688__$1,p,size,map__10689,map__10689__$1,slices,rows,cols,num){
return (function iter__10691(s__10692){return (new cljs.core.LazySeq(null,((function (sx,sy,sz,s,map__10690,map__10690__$1,p__$1,size__$1,map__10688,map__10688__$1,p,size,map__10689,map__10689__$1,slices,rows,cols,num){
return (function (){var s__10692__$1 = s__10692;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__10692__$1);if(temp__4126__auto__)
{var xs__4624__auto__ = temp__4126__auto__;var z = cljs.core.first.call(null,xs__4624__auto__);var iterys__5666__auto__ = ((function (s__10692__$1,z,xs__4624__auto__,temp__4126__auto__,sx,sy,sz,s,map__10690,map__10690__$1,p__$1,size__$1,map__10688,map__10688__$1,p,size,map__10689,map__10689__$1,slices,rows,cols,num){
return (function iter__10693(s__10694){return (new cljs.core.LazySeq(null,((function (s__10692__$1,z,xs__4624__auto__,temp__4126__auto__,sx,sy,sz,s,map__10690,map__10690__$1,p__$1,size__$1,map__10688,map__10688__$1,p,size,map__10689,map__10689__$1,slices,rows,cols,num){
return (function (){var s__10694__$1 = s__10694;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__10694__$1);if(temp__4126__auto____$1)
{var xs__4624__auto____$1 = temp__4126__auto____$1;var y = cljs.core.first.call(null,xs__4624__auto____$1);var iterys__5666__auto__ = ((function (s__10694__$1,s__10692__$1,y,xs__4624__auto____$1,temp__4126__auto____$1,z,xs__4624__auto__,temp__4126__auto__,sx,sy,sz,s,map__10690,map__10690__$1,p__$1,size__$1,map__10688,map__10688__$1,p,size,map__10689,map__10689__$1,slices,rows,cols,num){
return (function iter__10695(s__10696){return (new cljs.core.LazySeq(null,((function (s__10694__$1,s__10692__$1,y,xs__4624__auto____$1,temp__4126__auto____$1,z,xs__4624__auto__,temp__4126__auto__,sx,sy,sz,s,map__10690,map__10690__$1,p__$1,size__$1,map__10688,map__10688__$1,p,size,map__10689,map__10689__$1,slices,rows,cols,num){
return (function (){var s__10696__$1 = s__10696;while(true){
var temp__4126__auto____$2 = cljs.core.seq.call(null,s__10696__$1);if(temp__4126__auto____$2)
{var s__10696__$2 = temp__4126__auto____$2;if(cljs.core.chunked_seq_QMARK_.call(null,s__10696__$2))
{var c__5668__auto__ = cljs.core.chunk_first.call(null,s__10696__$2);var size__5669__auto__ = cljs.core.count.call(null,c__5668__auto__);var b__10698 = cljs.core.chunk_buffer.call(null,size__5669__auto__);if((function (){var i__10697 = 0;while(true){
if((i__10697 < size__5669__auto__))
{var x = cljs.core._nth.call(null,c__5668__auto__,i__10697);cljs.core.chunk_append.call(null,b__10698,(new thi.ng.geom.types.AABB(thi.ng.geom.core.madd.call(null,thi.ng.geom.core.vector.vec3.call(null,x,y,z),size__$1,p__$1),s)));
{
var G__10741 = (i__10697 + 1);
i__10697 = G__10741;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10698),iter__10695.call(null,cljs.core.chunk_rest.call(null,s__10696__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10698),null);
}
} else
{var x = cljs.core.first.call(null,s__10696__$2);return cljs.core.cons.call(null,(new thi.ng.geom.types.AABB(thi.ng.geom.core.madd.call(null,thi.ng.geom.core.vector.vec3.call(null,x,y,z),size__$1,p__$1),s)),iter__10695.call(null,cljs.core.rest.call(null,s__10696__$2)));
}
} else
{return null;
}
break;
}
});})(s__10694__$1,s__10692__$1,y,xs__4624__auto____$1,temp__4126__auto____$1,z,xs__4624__auto__,temp__4126__auto__,sx,sy,sz,s,map__10690,map__10690__$1,p__$1,size__$1,map__10688,map__10688__$1,p,size,map__10689,map__10689__$1,slices,rows,cols,num))
,null,null));
});})(s__10694__$1,s__10692__$1,y,xs__4624__auto____$1,temp__4126__auto____$1,z,xs__4624__auto__,temp__4126__auto__,sx,sy,sz,s,map__10690,map__10690__$1,p__$1,size__$1,map__10688,map__10688__$1,p,size,map__10689,map__10689__$1,slices,rows,cols,num))
;var fs__5667__auto__ = cljs.core.seq.call(null,iterys__5666__auto__.call(null,cljs.core.butlast.call(null,thi.ng.common.math.core.norm_range.call(null,sx))));if(fs__5667__auto__)
{return cljs.core.concat.call(null,fs__5667__auto__,iter__10693.call(null,cljs.core.rest.call(null,s__10694__$1)));
} else
{{
var G__10742 = cljs.core.rest.call(null,s__10694__$1);
s__10694__$1 = G__10742;
continue;
}
}
} else
{return null;
}
break;
}
});})(s__10692__$1,z,xs__4624__auto__,temp__4126__auto__,sx,sy,sz,s,map__10690,map__10690__$1,p__$1,size__$1,map__10688,map__10688__$1,p,size,map__10689,map__10689__$1,slices,rows,cols,num))
,null,null));
});})(s__10692__$1,z,xs__4624__auto__,temp__4126__auto__,sx,sy,sz,s,map__10690,map__10690__$1,p__$1,size__$1,map__10688,map__10688__$1,p,size,map__10689,map__10689__$1,slices,rows,cols,num))
;var fs__5667__auto__ = cljs.core.seq.call(null,iterys__5666__auto__.call(null,cljs.core.butlast.call(null,thi.ng.common.math.core.norm_range.call(null,sy))));if(fs__5667__auto__)
{return cljs.core.concat.call(null,fs__5667__auto__,iter__10691.call(null,cljs.core.rest.call(null,s__10692__$1)));
} else
{{
var G__10743 = cljs.core.rest.call(null,s__10692__$1);
s__10692__$1 = G__10743;
continue;
}
}
} else
{return null;
}
break;
}
});})(sx,sy,sz,s,map__10690,map__10690__$1,p__$1,size__$1,map__10688,map__10688__$1,p,size,map__10689,map__10689__$1,slices,rows,cols,num))
,null,null));
});})(sx,sy,sz,s,map__10690,map__10690__$1,p__$1,size__$1,map__10688,map__10688__$1,p,size,map__10689,map__10689__$1,slices,rows,cols,num))
;return iter__5670__auto__.call(null,cljs.core.butlast.call(null,thi.ng.common.math.core.norm_range.call(null,sz)));
});
thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PClassify$ = true;
thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PClassify$classify_point$arity$2 = (function (p__10699,p__10700){var map__10701 = p__10699;var map__10701__$1 = ((cljs.core.seq_QMARK_.call(null,map__10701))?cljs.core.apply.call(null,cljs.core.hash_map,map__10701):map__10701);var p = cljs.core.get.call(null,map__10701__$1,new cljs.core.Keyword(null,"p","p",1013904354));var size = cljs.core.get.call(null,map__10701__$1,new cljs.core.Keyword(null,"size","size",1017434995));var vec__10702 = p__10700;var x = cljs.core.nth.call(null,vec__10702,0,null);var y = cljs.core.nth.call(null,vec__10702,1,null);var z = cljs.core.nth.call(null,vec__10702,2,null);var q = vec__10702;var map__10703 = this;var map__10703__$1 = ((cljs.core.seq_QMARK_.call(null,map__10703))?cljs.core.apply.call(null,cljs.core.hash_map,map__10703):map__10703);var p__$1 = cljs.core.get.call(null,map__10703__$1,new cljs.core.Keyword(null,"p","p",1013904354));var size__$1 = cljs.core.get.call(null,map__10703__$1,new cljs.core.Keyword(null,"size","size",1017434995));var vec__10704 = p__$1;var x1 = cljs.core.nth.call(null,vec__10704,0,null);var y1 = cljs.core.nth.call(null,vec__10704,1,null);var z1 = cljs.core.nth.call(null,vec__10704,2,null);var vec__10705 = thi.ng.geom.core._PLUS_.call(null,p__$1,size__$1);var x2 = cljs.core.nth.call(null,vec__10705,0,null);var y2 = cljs.core.nth.call(null,vec__10705,1,null);var z2 = cljs.core.nth.call(null,vec__10705,2,null);var on_plane_QMARK_ = ((function (vec__10704,x1,y1,z1,vec__10705,x2,y2,z2,map__10703,map__10703__$1,p__$1,size__$1,map__10701,map__10701__$1,p,size,vec__10702,x,y,z,q){
return (function (p__10706){var vec__10707 = p__10706;var minp = cljs.core.nth.call(null,vec__10707,0,null);var maxp = cljs.core.nth.call(null,vec__10707,1,null);var p__$2 = cljs.core.nth.call(null,vec__10707,2,null);var min1 = cljs.core.nth.call(null,vec__10707,3,null);var max1 = cljs.core.nth.call(null,vec__10707,4,null);var min2 = cljs.core.nth.call(null,vec__10707,5,null);var max2 = cljs.core.nth.call(null,vec__10707,6,null);var c1 = cljs.core.nth.call(null,vec__10707,7,null);var c2 = cljs.core.nth.call(null,vec__10707,8,null);return ((thi.ng.common.math.core.delta_EQ_.call(null,minp,p__$2,thi.ng.common.math.core._STAR_eps_STAR_)) || (thi.ng.common.math.core.delta_EQ_.call(null,maxp,p__$2,thi.ng.common.math.core._STAR_eps_STAR_))) && (thi.ng.common.math.core.in_range_QMARK_.call(null,min1,max1,c1)) && (thi.ng.common.math.core.in_range_QMARK_.call(null,min2,max2,c2));
});})(vec__10704,x1,y1,z1,vec__10705,x2,y2,z2,map__10703,map__10703__$1,p__$1,size__$1,map__10701,map__10701__$1,p,size,vec__10702,x,y,z,q))
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
thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PEdgeAccess$edges$arity$1 = (function (_){var ___$1 = this;var vec__10708 = thi.ng.geom.core.vertices.call(null,___$1);var a = cljs.core.nth.call(null,vec__10708,0,null);var b = cljs.core.nth.call(null,vec__10708,1,null);var c = cljs.core.nth.call(null,vec__10708,2,null);var d = cljs.core.nth.call(null,vec__10708,3,null);var e = cljs.core.nth.call(null,vec__10708,4,null);var f = cljs.core.nth.call(null,vec__10708,5,null);var g = cljs.core.nth.call(null,vec__10708,6,null);var h = cljs.core.nth.call(null,vec__10708,7,null);return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,d], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [d,a], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,f], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,g], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [g,h], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,e], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,e], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,f], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,g], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [d,h], null)], null);
});
thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PVolume$ = true;
thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PVolume$volume$arity$1 = (function (p__10709){var map__10710 = p__10709;var map__10710__$1 = ((cljs.core.seq_QMARK_.call(null,map__10710))?cljs.core.apply.call(null,cljs.core.hash_map,map__10710):map__10710);var vec__10711 = cljs.core.get.call(null,map__10710__$1,new cljs.core.Keyword(null,"size","size",1017434995));var w = cljs.core.nth.call(null,vec__10711,0,null);var h = cljs.core.nth.call(null,vec__10711,1,null);var d = cljs.core.nth.call(null,vec__10711,2,null);var map__10712 = this;var map__10712__$1 = ((cljs.core.seq_QMARK_.call(null,map__10712))?cljs.core.apply.call(null,cljs.core.hash_map,map__10712):map__10712);var vec__10713 = cljs.core.get.call(null,map__10712__$1,new cljs.core.Keyword(null,"size","size",1017434995));var w__$1 = cljs.core.nth.call(null,vec__10713,0,null);var h__$1 = cljs.core.nth.call(null,vec__10713,1,null);var d__$1 = cljs.core.nth.call(null,vec__10713,2,null);return ((w__$1 * h__$1) * d__$1);
});
thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PBoundary$ = true;
thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PBoundary$contains_point_QMARK_$arity$2 = (function (p__10714,p__10715){var map__10716 = p__10714;var map__10716__$1 = ((cljs.core.seq_QMARK_.call(null,map__10716))?cljs.core.apply.call(null,cljs.core.hash_map,map__10716):map__10716);var p = cljs.core.get.call(null,map__10716__$1,new cljs.core.Keyword(null,"p","p",1013904354));var size = cljs.core.get.call(null,map__10716__$1,new cljs.core.Keyword(null,"size","size",1017434995));var vec__10717 = p__10715;var qx = cljs.core.nth.call(null,vec__10717,0,null);var qy = cljs.core.nth.call(null,vec__10717,1,null);var qz = cljs.core.nth.call(null,vec__10717,2,null);var map__10718 = this;var map__10718__$1 = ((cljs.core.seq_QMARK_.call(null,map__10718))?cljs.core.apply.call(null,cljs.core.hash_map,map__10718):map__10718);var p__$1 = cljs.core.get.call(null,map__10718__$1,new cljs.core.Keyword(null,"p","p",1013904354));var size__$1 = cljs.core.get.call(null,map__10718__$1,new cljs.core.Keyword(null,"size","size",1017434995));var vec__10719 = p__$1;var x1 = cljs.core.nth.call(null,vec__10719,0,null);var y1 = cljs.core.nth.call(null,vec__10719,1,null);var z1 = cljs.core.nth.call(null,vec__10719,2,null);var vec__10720 = thi.ng.geom.core._PLUS_.call(null,p__$1,size__$1);var x2 = cljs.core.nth.call(null,vec__10720,0,null);var y2 = cljs.core.nth.call(null,vec__10720,1,null);var z2 = cljs.core.nth.call(null,vec__10720,2,null);return (thi.ng.common.math.core.in_range_QMARK_.call(null,x1,x2,qx)) && (thi.ng.common.math.core.in_range_QMARK_.call(null,y1,y2,qy)) && (thi.ng.common.math.core.in_range_QMARK_.call(null,z1,z2,qz));
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
thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PFaceAccess$faces$arity$1 = (function (_){var ___$1 = this;var vec__10721 = thi.ng.geom.core.vertices.call(null,___$1);var a = cljs.core.nth.call(null,vec__10721,0,null);var b = cljs.core.nth.call(null,vec__10721,1,null);var c = cljs.core.nth.call(null,vec__10721,2,null);var d = cljs.core.nth.call(null,vec__10721,3,null);var e = cljs.core.nth.call(null,vec__10721,4,null);var f = cljs.core.nth.call(null,vec__10721,5,null);var g = cljs.core.nth.call(null,vec__10721,6,null);var h = cljs.core.nth.call(null,vec__10721,7,null);return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,d,h,g], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,f,e], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,f,g,h], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,d,c,b], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,c,g,f], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,e,h,d], null)], null);
});
thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PTranslate$ = true;
thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PTranslate$translate$arity$2 = (function (_,t){var ___$1 = this;return (new thi.ng.geom.types.AABB(thi.ng.geom.core._PLUS_.call(null,new cljs.core.Keyword(null,"p","p",1013904354).cljs$core$IFn$_invoke$arity$1(___$1),t),new cljs.core.Keyword(null,"size","size",1017434995).cljs$core$IFn$_invoke$arity$1(___$1)));
});
thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PBoundingSphere$ = true;
thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PBoundingSphere$bounding_sphere$arity$1 = (function (p__10727){var map__10728 = p__10727;var map__10728__$1 = ((cljs.core.seq_QMARK_.call(null,map__10728))?cljs.core.apply.call(null,cljs.core.hash_map,map__10728):map__10728);var p = cljs.core.get.call(null,map__10728__$1,new cljs.core.Keyword(null,"p","p",1013904354));var size = cljs.core.get.call(null,map__10728__$1,new cljs.core.Keyword(null,"size","size",1017434995));var map__10729 = this;var map__10729__$1 = ((cljs.core.seq_QMARK_.call(null,map__10729))?cljs.core.apply.call(null,cljs.core.hash_map,map__10729):map__10729);var p__$1 = cljs.core.get.call(null,map__10729__$1,new cljs.core.Keyword(null,"p","p",1013904354));var size__$1 = cljs.core.get.call(null,map__10729__$1,new cljs.core.Keyword(null,"size","size",1017434995));var ext = thi.ng.geom.core._STAR_.call(null,size__$1,0.5);return thi.ng.geom.types.utils.bounding_sphere.call(null,thi.ng.geom.core._PLUS_.call(null,p__$1,ext),thi.ng.geom.core.mag.call(null,ext));
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
thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PTessellate$tessellate$arity$2 = (function (_,p__10730){var map__10731 = p__10730;var map__10731__$1 = ((cljs.core.seq_QMARK_.call(null,map__10731))?cljs.core.apply.call(null,cljs.core.hash_map,map__10731):map__10731);var opts = map__10731__$1;var f = cljs.core.get.call(null,map__10731__$1,new cljs.core.Keyword(null,"fn","fn",1013907514),thi.ng.geom.core.utils.tessellate_3);var ___$1 = this;return cljs.core.mapcat.call(null,f,cljs.core.mapcat.call(null,thi.ng.geom.core.faces,(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"num","num",1014013688),null,new cljs.core.Keyword(null,"slices","slices",4409223315),null,new cljs.core.Keyword(null,"rows","rows",1017410891),null,new cljs.core.Keyword(null,"cols","cols",1016963685),null], null), null),cljs.core.keys.call(null,opts)))?thi.ng.geom.core.subdivide.call(null,___$1,opts):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [___$1], null))));
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
thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PVertexAccess$vertices$arity$1 = (function (p__10732){var map__10733 = p__10732;var map__10733__$1 = ((cljs.core.seq_QMARK_.call(null,map__10733))?cljs.core.apply.call(null,cljs.core.hash_map,map__10733):map__10733);var a = cljs.core.get.call(null,map__10733__$1,new cljs.core.Keyword(null,"p","p",1013904354));var size = cljs.core.get.call(null,map__10733__$1,new cljs.core.Keyword(null,"size","size",1017434995));var map__10734 = this;var map__10734__$1 = ((cljs.core.seq_QMARK_.call(null,map__10734))?cljs.core.apply.call(null,cljs.core.hash_map,map__10734):map__10734);var a__$1 = cljs.core.get.call(null,map__10734__$1,new cljs.core.Keyword(null,"p","p",1013904354));var size__$1 = cljs.core.get.call(null,map__10734__$1,new cljs.core.Keyword(null,"size","size",1017434995));var vec__10735 = a__$1;var x1 = cljs.core.nth.call(null,vec__10735,0,null);var y1 = cljs.core.nth.call(null,vec__10735,1,null);var z1 = cljs.core.nth.call(null,vec__10735,2,null);var vec__10736 = thi.ng.geom.core._PLUS_.call(null,a__$1,size__$1);var x2 = cljs.core.nth.call(null,vec__10736,0,null);var y2 = cljs.core.nth.call(null,vec__10736,1,null);var z2 = cljs.core.nth.call(null,vec__10736,2,null);var g = vec__10736;var b = thi.ng.geom.core.vector.vec3.call(null,x1,y1,z2);var c = thi.ng.geom.core.vector.vec3.call(null,x2,y1,z2);var d = thi.ng.geom.core.vector.vec3.call(null,x2,y1,z1);var e = thi.ng.geom.core.vector.vec3.call(null,x1,y2,z1);var f = thi.ng.geom.core.vector.vec3.call(null,x1,y2,z2);var h = thi.ng.geom.core.vector.vec3.call(null,x2,y2,z1);return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [a__$1,b,c,d,e,f,g,h], null);
});
thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PMeshConvert$ = true;
thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PMeshConvert$as_mesh$arity$1 = (function (_){var ___$1 = this;return thi.ng.geom.core.as_mesh.call(null,___$1,cljs.core.PersistentArrayMap.EMPTY);
});
thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PMeshConvert$as_mesh$arity$2 = (function (_,p__10737){var map__10738 = p__10737;var map__10738__$1 = ((cljs.core.seq_QMARK_.call(null,map__10738))?cljs.core.apply.call(null,cljs.core.hash_map,map__10738):map__10738);var flags = cljs.core.get.call(null,map__10738__$1,new cljs.core.Keyword(null,"flags","flags",1111417337),"nsewfb");var mesh = cljs.core.get.call(null,map__10738__$1,new cljs.core.Keyword(null,"mesh","mesh",1017252191));var ___$1 = this;var vec__10739 = thi.ng.geom.core.vertices.call(null,___$1);var a = cljs.core.nth.call(null,vec__10739,0,null);var b = cljs.core.nth.call(null,vec__10739,1,null);var c = cljs.core.nth.call(null,vec__10739,2,null);var d = cljs.core.nth.call(null,vec__10739,3,null);var e = cljs.core.nth.call(null,vec__10739,4,null);var f = cljs.core.nth.call(null,vec__10739,5,null);var g = cljs.core.nth.call(null,vec__10739,6,null);var h = cljs.core.nth.call(null,vec__10739,7,null);var vec__10740 = thi.ng.common.data.core.demunge_flags_seq.call(null,flags,"nsewfb");var tp = cljs.core.nth.call(null,vec__10740,0,null);var bt = cljs.core.nth.call(null,vec__10740,1,null);var rt = cljs.core.nth.call(null,vec__10740,2,null);var lf = cljs.core.nth.call(null,vec__10740,3,null);var fr = cljs.core.nth.call(null,vec__10740,4,null);var bk = cljs.core.nth.call(null,vec__10740,5,null);return thi.ng.geom.core.into.call(null,(function (){var or__4953__auto__ = mesh;if(cljs.core.truth_(or__4953__auto__))
{return or__4953__auto__;
} else
{return thi.ng.geom.gmesh.gmesh.call(null);
}
})(),cljs.core.filter.call(null,cljs.core.identity,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(fr)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,c,g,f], null):null),(cljs.core.truth_(bk)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,e,h,d], null):null),(cljs.core.truth_(lf)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,f,e], null):null),(cljs.core.truth_(rt)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,d,h,g], null):null),(cljs.core.truth_(tp)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,f,g,h], null):null),(cljs.core.truth_(bt)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,d,c,b], null):null)], null)));
});
thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PProximity$ = true;
thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PProximity$closest_point$arity$2 = (function (_,p){var ___$1 = this;return null;
});
thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PArea$ = true;
thi.ng.geom.types.AABB.prototype.thi$ng$geom$core$PArea$area$arity$1 = (function (p__10722){var map__10723 = p__10722;var map__10723__$1 = ((cljs.core.seq_QMARK_.call(null,map__10723))?cljs.core.apply.call(null,cljs.core.hash_map,map__10723):map__10723);var vec__10724 = cljs.core.get.call(null,map__10723__$1,new cljs.core.Keyword(null,"size","size",1017434995));var w = cljs.core.nth.call(null,vec__10724,0,null);var h = cljs.core.nth.call(null,vec__10724,1,null);var d = cljs.core.nth.call(null,vec__10724,2,null);var map__10725 = this;var map__10725__$1 = ((cljs.core.seq_QMARK_.call(null,map__10725))?cljs.core.apply.call(null,cljs.core.hash_map,map__10725):map__10725);var vec__10726 = cljs.core.get.call(null,map__10725__$1,new cljs.core.Keyword(null,"size","size",1017434995));var w__$1 = cljs.core.nth.call(null,vec__10726,0,null);var h__$1 = cljs.core.nth.call(null,vec__10726,1,null);var d__$1 = cljs.core.nth.call(null,vec__10726,2,null);return (2.0 * (((w__$1 * h__$1) + (d__$1 * h__$1)) + (w__$1 * d__$1)));
});
