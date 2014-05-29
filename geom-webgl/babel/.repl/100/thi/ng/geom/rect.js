// Compiled by ClojureScript 0.0-2202
goog.provide('thi.ng.geom.rect');
goog.require('cljs.core');
goog.require('thi.ng.common.math.core');
goog.require('thi.ng.geom.core.vector');
goog.require('thi.ng.geom.core.utils');
goog.require('thi.ng.geom.aabb');
goog.require('thi.ng.geom.types.utils');
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
goog.require('thi.ng.common.data.core');
goog.require('thi.ng.geom.types');
goog.require('thi.ng.geom.core');
goog.require('thi.ng.geom.types.utils');
goog.require('thi.ng.common.math.core');
goog.require('thi.ng.geom.aabb');
goog.require('thi.ng.geom.core.intersect');
goog.require('thi.ng.common.error');
goog.require('thi.ng.common.data.core');
thi.ng.geom.rect.rect = (function() {
var rect = null;
var rect__0 = (function (){return (new thi.ng.geom.types.Rect2(thi.ng.geom.core.vector.vec2.call(null),thi.ng.geom.core.vector.vec2.call(null,1.0)));
});
var rect__1 = (function (w){return (new thi.ng.geom.types.Rect2(thi.ng.geom.core.vector.vec2.call(null),thi.ng.geom.core.vector.vec2.call(null,w)));
});
var rect__2 = (function (p,q){if(cljs.core.sequential_QMARK_.call(null,p))
{if(cljs.core.sequential_QMARK_.call(null,q))
{var p__$1 = thi.ng.geom.core.vector.vec2.call(null,p);var q__$1 = thi.ng.geom.core.vector.vec2.call(null,q);var vec__10499 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.min.call(null,p__$1,q__$1),thi.ng.geom.core.max.call(null,p__$1,q__$1)], null);var p__$2 = cljs.core.nth.call(null,vec__10499,0,null);var q__$2 = cljs.core.nth.call(null,vec__10499,1,null);return (new thi.ng.geom.types.Rect2(p__$2,thi.ng.geom.core._.call(null,q__$2,p__$2)));
} else
{return (new thi.ng.geom.types.Rect2(thi.ng.geom.core.vector.vec2.call(null,p),thi.ng.geom.core.vector.vec2.call(null,q)));
}
} else
{return (new thi.ng.geom.types.Rect2(thi.ng.geom.core.vector.vec2.call(null),thi.ng.geom.core.vector.vec2.call(null,p,q)));
}
});
var rect__3 = (function (x,y,w){if(typeof x === 'number')
{return (new thi.ng.geom.types.Rect2(thi.ng.geom.core.vector.vec2.call(null,x,y),thi.ng.geom.core.vector.vec2.call(null,w)));
} else
{return (new thi.ng.geom.types.Rect2(thi.ng.geom.core.vector.vec2.call(null,x),thi.ng.geom.core.vector.vec2.call(null,y,w)));
}
});
var rect__4 = (function (x,y,w,h){return (new thi.ng.geom.types.Rect2(thi.ng.geom.core.vector.vec2.call(null,x,y),thi.ng.geom.core.vector.vec2.call(null,w,h)));
});
rect = function(x,y,w,h){
switch(arguments.length){
case 0:
return rect__0.call(this);
case 1:
return rect__1.call(this,x);
case 2:
return rect__2.call(this,x,y);
case 3:
return rect__3.call(this,x,y,w);
case 4:
return rect__4.call(this,x,y,w,h);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rect.cljs$core$IFn$_invoke$arity$0 = rect__0;
rect.cljs$core$IFn$_invoke$arity$1 = rect__1;
rect.cljs$core$IFn$_invoke$arity$2 = rect__2;
rect.cljs$core$IFn$_invoke$arity$3 = rect__3;
rect.cljs$core$IFn$_invoke$arity$4 = rect__4;
return rect;
})()
;
thi.ng.geom.rect.union = (function union(p__10500,p__10501){var map__10507 = p__10500;var map__10507__$1 = ((cljs.core.seq_QMARK_.call(null,map__10507))?cljs.core.apply.call(null,cljs.core.hash_map,map__10507):map__10507);var p = cljs.core.get.call(null,map__10507__$1,new cljs.core.Keyword(null,"p","p",1013904354));var vec__10508 = cljs.core.get.call(null,map__10507__$1,new cljs.core.Keyword(null,"size","size",1017434995));var w = cljs.core.nth.call(null,vec__10508,0,null);var h = cljs.core.nth.call(null,vec__10508,1,null);var map__10509 = p__10501;var map__10509__$1 = ((cljs.core.seq_QMARK_.call(null,map__10509))?cljs.core.apply.call(null,cljs.core.hash_map,map__10509):map__10509);var q = cljs.core.get.call(null,map__10509__$1,new cljs.core.Keyword(null,"p","p",1013904354));var vec__10510 = cljs.core.get.call(null,map__10509__$1,new cljs.core.Keyword(null,"size","size",1017434995));var qw = cljs.core.nth.call(null,vec__10510,0,null);var qh = cljs.core.nth.call(null,vec__10510,1,null);var vec__10511 = thi.ng.geom.core.min.call(null,p,q);var x1 = cljs.core.nth.call(null,vec__10511,0,null);var y1 = cljs.core.nth.call(null,vec__10511,1,null);var p_STAR_ = vec__10511;var x2 = (function (){var x__5260__auto__ = (p.call(null,0) + w);var y__5261__auto__ = (q.call(null,0) + qw);return ((x__5260__auto__ > y__5261__auto__) ? x__5260__auto__ : y__5261__auto__);
})();var y2 = (function (){var x__5260__auto__ = (p.call(null,1) + h);var y__5261__auto__ = (q.call(null,1) + qh);return ((x__5260__auto__ > y__5261__auto__) ? x__5260__auto__ : y__5261__auto__);
})();var w__$1 = (x2 - x1);var h__$1 = (y2 - y1);return (new thi.ng.geom.types.Rect2(p_STAR_,thi.ng.geom.core.vector.vec2.call(null,w__$1,h__$1)));
});
thi.ng.geom.rect.map_uv = (function map_uv(p__10512,p__10513){var map__10516 = p__10512;var map__10516__$1 = ((cljs.core.seq_QMARK_.call(null,map__10516))?cljs.core.apply.call(null,cljs.core.hash_map,map__10516):map__10516);var size = cljs.core.get.call(null,map__10516__$1,new cljs.core.Keyword(null,"size","size",1017434995));var p = cljs.core.get.call(null,map__10516__$1,new cljs.core.Keyword(null,"p","p",1013904354));var vec__10517 = p__10513;var qx = cljs.core.nth.call(null,vec__10517,0,null);var qy = cljs.core.nth.call(null,vec__10517,1,null);return thi.ng.geom.core.vector.vec2.call(null,((qx - p.call(null,0)) / size.call(null,0)),((qy - p.call(null,1)) / size.call(null,1)));
});
thi.ng.geom.rect.unmap_uv = (function unmap_uv(p__10518,p__10519){var map__10522 = p__10518;var map__10522__$1 = ((cljs.core.seq_QMARK_.call(null,map__10522))?cljs.core.apply.call(null,cljs.core.hash_map,map__10522):map__10522);var size = cljs.core.get.call(null,map__10522__$1,new cljs.core.Keyword(null,"size","size",1017434995));var p = cljs.core.get.call(null,map__10522__$1,new cljs.core.Keyword(null,"p","p",1013904354));var vec__10523 = p__10519;var qx = cljs.core.nth.call(null,vec__10523,0,null);var qy = cljs.core.nth.call(null,vec__10523,1,null);return thi.ng.geom.core.vector.vec2.call(null,((qx * size.call(null,0)) + p.call(null,0)),((qy * size.call(null,1)) + p.call(null,1)));
});
thi.ng.geom.rect.left = (function left(r){return new cljs.core.Keyword(null,"p","p",1013904354).cljs$core$IFn$_invoke$arity$1(r).call(null,0);
});
thi.ng.geom.rect.right = (function right(r){return (new cljs.core.Keyword(null,"p","p",1013904354).cljs$core$IFn$_invoke$arity$1(r).call(null,0) + new cljs.core.Keyword(null,"size","size",1017434995).cljs$core$IFn$_invoke$arity$1(r).call(null,0));
});
thi.ng.geom.rect.bottom = (function bottom(r){return new cljs.core.Keyword(null,"p","p",1013904354).cljs$core$IFn$_invoke$arity$1(r).call(null,1);
});
thi.ng.geom.rect.bottom_left = (function bottom_left(r){return new cljs.core.Keyword(null,"p","p",1013904354).cljs$core$IFn$_invoke$arity$1(r);
});
thi.ng.geom.rect.top = (function top(r){return (new cljs.core.Keyword(null,"p","p",1013904354).cljs$core$IFn$_invoke$arity$1(r).call(null,1) + new cljs.core.Keyword(null,"size","size",1017434995).cljs$core$IFn$_invoke$arity$1(r).call(null,1));
});
thi.ng.geom.rect.top_right = (function top_right(r){return thi.ng.geom.core._PLUS_.call(null,new cljs.core.Keyword(null,"p","p",1013904354).cljs$core$IFn$_invoke$arity$1(r),new cljs.core.Keyword(null,"size","size",1017434995).cljs$core$IFn$_invoke$arity$1(r));
});
thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PTransform$ = true;
thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PTransform$transform$arity$2 = (function (_,m){var ___$1 = this;return thi.ng.geom.core.transform.call(null,thi.ng.geom.core.as_polygon.call(null,___$1),m);
});
thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PRotate$ = true;
thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PRotate$rotate$arity$2 = (function (_,m){var ___$1 = this;return thi.ng.geom.core.rotate.call(null,thi.ng.geom.core.as_polygon.call(null,___$1),m);
});
thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PCenter$ = true;
thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PCenter$center$arity$1 = (function (p__10525){var map__10526 = p__10525;var map__10526__$1 = ((cljs.core.seq_QMARK_.call(null,map__10526))?cljs.core.apply.call(null,cljs.core.hash_map,map__10526):map__10526);var s = cljs.core.get.call(null,map__10526__$1,new cljs.core.Keyword(null,"size","size",1017434995));var map__10527 = this;var map__10527__$1 = ((cljs.core.seq_QMARK_.call(null,map__10527))?cljs.core.apply.call(null,cljs.core.hash_map,map__10527):map__10527);var s__$1 = cljs.core.get.call(null,map__10527__$1,new cljs.core.Keyword(null,"size","size",1017434995));return (new thi.ng.geom.types.Rect2(thi.ng.geom.core._STAR_.call(null,s__$1,-0.5),s__$1));
});
thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PCenter$center$arity$2 = (function (p__10528,o){var map__10529 = p__10528;var map__10529__$1 = ((cljs.core.seq_QMARK_.call(null,map__10529))?cljs.core.apply.call(null,cljs.core.hash_map,map__10529):map__10529);var s = cljs.core.get.call(null,map__10529__$1,new cljs.core.Keyword(null,"size","size",1017434995));var map__10530 = this;var map__10530__$1 = ((cljs.core.seq_QMARK_.call(null,map__10530))?cljs.core.apply.call(null,cljs.core.hash_map,map__10530):map__10530);var s__$1 = cljs.core.get.call(null,map__10530__$1,new cljs.core.Keyword(null,"size","size",1017434995));return (new thi.ng.geom.types.Rect2(thi.ng.geom.core.madd.call(null,s__$1,-0.5,o),s__$1));
});
thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PCenter$centroid$arity$1 = (function (_){var ___$1 = this;return thi.ng.geom.core.madd.call(null,new cljs.core.Keyword(null,"size","size",1017434995).cljs$core$IFn$_invoke$arity$1(___$1),0.5,new cljs.core.Keyword(null,"p","p",1013904354).cljs$core$IFn$_invoke$arity$1(___$1));
});
thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PPolygonConvert$ = true;
thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PPolygonConvert$as_polygon$arity$1 = (function (_){var ___$1 = this;return (new thi.ng.geom.types.Polygon2(thi.ng.geom.core.vertices.call(null,___$1)));
});
thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PSample$ = true;
thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PSample$point_at$arity$2 = (function (_,t){var ___$1 = this;return thi.ng.geom.core.utils.point_at.call(null,t,cljs.core.conj.call(null,thi.ng.geom.core.vertices.call(null,___$1),new cljs.core.Keyword(null,"p","p",1013904354).cljs$core$IFn$_invoke$arity$1(___$1)));
});
thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PSample$random_point$arity$1 = (function (_){var ___$1 = this;return thi.ng.geom.core.point_at.call(null,___$1,thi.ng.common.math.core.random.call(null));
});
thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PSample$random_point_inside$arity$1 = (function (_){var ___$1 = this;return thi.ng.geom.core._PLUS_.call(null,new cljs.core.Keyword(null,"p","p",1013904354).cljs$core$IFn$_invoke$arity$1(___$1),thi.ng.common.math.core.random.call(null,new cljs.core.Keyword(null,"size","size",1017434995).cljs$core$IFn$_invoke$arity$1(___$1).call(null,0)),thi.ng.common.math.core.random.call(null,new cljs.core.Keyword(null,"size","size",1017434995).cljs$core$IFn$_invoke$arity$1(___$1).call(null,1)));
});
thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PSample$sample_uniform$arity$3 = (function (_,udist,include_last_QMARK_){var ___$1 = this;return thi.ng.geom.core.utils.sample_uniform.call(null,udist,include_last_QMARK_,cljs.core.conj.call(null,thi.ng.geom.core.vertices.call(null,___$1),new cljs.core.Keyword(null,"p","p",1013904354).cljs$core$IFn$_invoke$arity$1(___$1)));
});
thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PSubdivide$ = true;
thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PSubdivide$subdivide$arity$1 = (function (_){var ___$1 = this;return thi.ng.geom.core.subdivide.call(null,___$1,cljs.core.PersistentArrayMap.EMPTY);
});
thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PSubdivide$subdivide$arity$2 = (function (_,p__10531){var map__10532 = p__10531;var map__10532__$1 = ((cljs.core.seq_QMARK_.call(null,map__10532))?cljs.core.apply.call(null,cljs.core.hash_map,map__10532):map__10532);var rows = cljs.core.get.call(null,map__10532__$1,new cljs.core.Keyword(null,"rows","rows",1017410891));var cols = cljs.core.get.call(null,map__10532__$1,new cljs.core.Keyword(null,"cols","cols",1016963685));var num = cljs.core.get.call(null,map__10532__$1,new cljs.core.Keyword(null,"num","num",1014013688),2);var ___$1 = this;var dx = (1.0 / (function (){var or__4953__auto__ = cols;if(cljs.core.truth_(or__4953__auto__))
{return or__4953__auto__;
} else
{return num;
}
})());var dy = (1.0 / (function (){var or__4953__auto__ = rows;if(cljs.core.truth_(or__4953__auto__))
{return or__4953__auto__;
} else
{return num;
}
})());var rx = cljs.core.range.call(null,0.0,1.0,dx);var ry = cljs.core.range.call(null,0.0,1.0,dy);var s = thi.ng.geom.core._STAR_.call(null,new cljs.core.Keyword(null,"size","size",1017434995).cljs$core$IFn$_invoke$arity$1(___$1),dx,dy);var iter__5670__auto__ = ((function (dx,dy,rx,ry,s,___$1,map__10532,map__10532__$1,rows,cols,num){
return (function iter__10533(s__10534){return (new cljs.core.LazySeq(null,((function (dx,dy,rx,ry,s,___$1,map__10532,map__10532__$1,rows,cols,num){
return (function (){var s__10534__$1 = s__10534;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__10534__$1);if(temp__4126__auto__)
{var xs__4624__auto__ = temp__4126__auto__;var y = cljs.core.first.call(null,xs__4624__auto__);var iterys__5666__auto__ = ((function (s__10534__$1,y,xs__4624__auto__,temp__4126__auto__,dx,dy,rx,ry,s,___$1,map__10532,map__10532__$1,rows,cols,num){
return (function iter__10535(s__10536){return (new cljs.core.LazySeq(null,((function (s__10534__$1,y,xs__4624__auto__,temp__4126__auto__,dx,dy,rx,ry,s,___$1,map__10532,map__10532__$1,rows,cols,num){
return (function (){var s__10536__$1 = s__10536;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__10536__$1);if(temp__4126__auto____$1)
{var s__10536__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__10536__$2))
{var c__5668__auto__ = cljs.core.chunk_first.call(null,s__10536__$2);var size__5669__auto__ = cljs.core.count.call(null,c__5668__auto__);var b__10538 = cljs.core.chunk_buffer.call(null,size__5669__auto__);if((function (){var i__10537 = 0;while(true){
if((i__10537 < size__5669__auto__))
{var x = cljs.core._nth.call(null,c__5668__auto__,i__10537);var vec__10545 = thi.ng.geom.rect.unmap_uv.call(null,___$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));var px = cljs.core.nth.call(null,vec__10545,0,null);var py = cljs.core.nth.call(null,vec__10545,1,null);var px__$1 = thi.ng.common.math.core.roundto.call(null,px,thi.ng.common.math.core._STAR_eps_STAR_);var py__$1 = thi.ng.common.math.core.roundto.call(null,py,thi.ng.common.math.core._STAR_eps_STAR_);cljs.core.chunk_append.call(null,b__10538,(new thi.ng.geom.types.Rect2(thi.ng.geom.core.vector.vec2.call(null,px__$1,py__$1),s)));
{
var G__10559 = (i__10537 + 1);
i__10537 = G__10559;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10538),iter__10535.call(null,cljs.core.chunk_rest.call(null,s__10536__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10538),null);
}
} else
{var x = cljs.core.first.call(null,s__10536__$2);var vec__10546 = thi.ng.geom.rect.unmap_uv.call(null,___$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));var px = cljs.core.nth.call(null,vec__10546,0,null);var py = cljs.core.nth.call(null,vec__10546,1,null);var px__$1 = thi.ng.common.math.core.roundto.call(null,px,thi.ng.common.math.core._STAR_eps_STAR_);var py__$1 = thi.ng.common.math.core.roundto.call(null,py,thi.ng.common.math.core._STAR_eps_STAR_);return cljs.core.cons.call(null,(new thi.ng.geom.types.Rect2(thi.ng.geom.core.vector.vec2.call(null,px__$1,py__$1),s)),iter__10535.call(null,cljs.core.rest.call(null,s__10536__$2)));
}
} else
{return null;
}
break;
}
});})(s__10534__$1,y,xs__4624__auto__,temp__4126__auto__,dx,dy,rx,ry,s,___$1,map__10532,map__10532__$1,rows,cols,num))
,null,null));
});})(s__10534__$1,y,xs__4624__auto__,temp__4126__auto__,dx,dy,rx,ry,s,___$1,map__10532,map__10532__$1,rows,cols,num))
;var fs__5667__auto__ = cljs.core.seq.call(null,iterys__5666__auto__.call(null,rx));if(fs__5667__auto__)
{return cljs.core.concat.call(null,fs__5667__auto__,iter__10533.call(null,cljs.core.rest.call(null,s__10534__$1)));
} else
{{
var G__10560 = cljs.core.rest.call(null,s__10534__$1);
s__10534__$1 = G__10560;
continue;
}
}
} else
{return null;
}
break;
}
});})(dx,dy,rx,ry,s,___$1,map__10532,map__10532__$1,rows,cols,num))
,null,null));
});})(dx,dy,rx,ry,s,___$1,map__10532,map__10532__$1,rows,cols,num))
;return iter__5670__auto__.call(null,ry);
});
thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PClassify$ = true;
thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PClassify$classify_point$arity$2 = (function (_,q){var ___$1 = this;return cljs.core.reduce.call(null,cljs.core.min,cljs.core.map.call(null,((function (___$1){
return (function (p1__10524_SHARP_){return thi.ng.common.math.core.signum.call(null,cljs.core.apply.call(null,thi.ng.geom.core.utils.closest_point_coeff,q,p1__10524_SHARP_),thi.ng.common.math.core._STAR_eps_STAR_);
});})(___$1))
,thi.ng.geom.core.edges.call(null,___$1)));
});
thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PExtrude$ = true;
thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PExtrude$extrude$arity$2 = (function (_,p__10547){var map__10548 = p__10547;var map__10548__$1 = ((cljs.core.seq_QMARK_.call(null,map__10548))?cljs.core.apply.call(null,cljs.core.hash_map,map__10548):map__10548);var opts = map__10548__$1;var offset = cljs.core.get.call(null,map__10548__$1,new cljs.core.Keyword(null,"offset","offset",4289091589));var scale = cljs.core.get.call(null,map__10548__$1,new cljs.core.Keyword(null,"scale","scale",1123155132),1.0);var depth = cljs.core.get.call(null,map__10548__$1,new cljs.core.Keyword(null,"depth","depth",1109376565),1.0);var ___$1 = this;if(((scale === 1.0)) && ((offset == null)))
{return thi.ng.geom.core.as_mesh.call(null,(new thi.ng.geom.types.AABB(thi.ng.geom.core.vector.vec3.call(null,new cljs.core.Keyword(null,"p","p",1013904354).cljs$core$IFn$_invoke$arity$1(___$1)),cljs.core.conj.call(null,new cljs.core.Keyword(null,"size","size",1017434995).cljs$core$IFn$_invoke$arity$1(___$1),depth))),new cljs.core.Keyword(null,"mesh","mesh",1017252191).cljs$core$IFn$_invoke$arity$1(opts));
} else
{return thi.ng.geom.core.extrude.call(null,thi.ng.geom.core.as_polygon.call(null,___$1),opts);
}
});
thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PExtrude$extrude_shell$arity$2 = (function (_,opts){var ___$1 = this;return thi.ng.geom.core.extrude_shell.call(null,thi.ng.geom.core.as_polygon.call(null,___$1),opts);
});
thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PEdgeAccess$ = true;
thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PEdgeAccess$edges$arity$1 = (function (_){var ___$1 = this;var a = new cljs.core.Keyword(null,"p","p",1013904354).cljs$core$IFn$_invoke$arity$1(___$1);var c = thi.ng.geom.core._PLUS_.call(null,a,new cljs.core.Keyword(null,"size","size",1017434995).cljs$core$IFn$_invoke$arity$1(___$1));var b = thi.ng.geom.core.vector.vec2.call(null,c.call(null,0),a.call(null,1));var d = thi.ng.geom.core.vector.vec2.call(null,a.call(null,0),c.call(null,1));return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,c], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,d], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [d,a], null)], null);
});
thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PVolume$ = true;
thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PVolume$volume$arity$1 = (function (_){var ___$1 = this;return 0.0;
});
thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PBoundary$ = true;
thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PBoundary$contains_point_QMARK_$arity$2 = (function (p__10549,p__10550){var map__10551 = p__10549;var map__10551__$1 = ((cljs.core.seq_QMARK_.call(null,map__10551))?cljs.core.apply.call(null,cljs.core.hash_map,map__10551):map__10551);var vec__10552 = cljs.core.get.call(null,map__10551__$1,new cljs.core.Keyword(null,"p","p",1013904354));var px = cljs.core.nth.call(null,vec__10552,0,null);var py = cljs.core.nth.call(null,vec__10552,1,null);var vec__10553 = cljs.core.get.call(null,map__10551__$1,new cljs.core.Keyword(null,"size","size",1017434995));var w = cljs.core.nth.call(null,vec__10553,0,null);var h = cljs.core.nth.call(null,vec__10553,1,null);var vec__10554 = p__10550;var x = cljs.core.nth.call(null,vec__10554,0,null);var y = cljs.core.nth.call(null,vec__10554,1,null);var map__10555 = this;var map__10555__$1 = ((cljs.core.seq_QMARK_.call(null,map__10555))?cljs.core.apply.call(null,cljs.core.hash_map,map__10555):map__10555);var vec__10556 = cljs.core.get.call(null,map__10555__$1,new cljs.core.Keyword(null,"p","p",1013904354));var px__$1 = cljs.core.nth.call(null,vec__10556,0,null);var py__$1 = cljs.core.nth.call(null,vec__10556,1,null);var vec__10557 = cljs.core.get.call(null,map__10555__$1,new cljs.core.Keyword(null,"size","size",1017434995));var w__$1 = cljs.core.nth.call(null,vec__10557,0,null);var h__$1 = cljs.core.nth.call(null,vec__10557,1,null);return (thi.ng.common.math.core.in_range_QMARK_.call(null,0.0,w__$1,(x - px__$1))) && (thi.ng.common.math.core.in_range_QMARK_.call(null,0.0,h__$1,(y - py__$1)));
});
thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PIntersect$ = true;
thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PIntersect$intersect_line$arity$2 = (function (_,l){var ___$1 = this;return null;
});
thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PIntersect$intersect_ray$arity$2 = (function (_,r){var ___$1 = this;return null;
});
thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PIntersect$intersect_shape$arity$2 = (function (_,s){var ___$1 = this;if((s instanceof thi.ng.geom.types.Rect2))
{return thi.ng.geom.core.intersect.intersect_rect_rect_QMARK_.call(null,___$1,s);
} else
{if((s instanceof thi.ng.geom.types.Circle2))
{return thi.ng.geom.core.intersect.intersect_aabb_sphere_QMARK_.call(null,___$1,s);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return thi.ng.common.error.type_error_BANG_.call(null,"Rect2",s);
} else
{return null;
}
}
}
});
thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PBoundingCircle$ = true;
thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PBoundingCircle$bounding_circle$arity$1 = (function (_){var ___$1 = this;var c = thi.ng.geom.core.centroid.call(null,___$1);return thi.ng.geom.types.utils.bounding_circle.call(null,c,thi.ng.geom.core.dist.call(null,c,new cljs.core.Keyword(null,"p","p",1013904354).cljs$core$IFn$_invoke$arity$1(___$1)));
});
thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PTranslate$ = true;
thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PTranslate$translate$arity$2 = (function (_,t){var ___$1 = this;return (new thi.ng.geom.types.Rect2(thi.ng.geom.core._PLUS_.call(null,new cljs.core.Keyword(null,"p","p",1013904354).cljs$core$IFn$_invoke$arity$1(___$1),t),new cljs.core.Keyword(null,"size","size",1017434995).cljs$core$IFn$_invoke$arity$1(___$1)));
});
thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PScale$ = true;
thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PScale$scale$arity$2 = (function (_,s){var ___$1 = this;return (new thi.ng.geom.types.Rect2(thi.ng.geom.core._STAR_.call(null,new cljs.core.Keyword(null,"p","p",1013904354).cljs$core$IFn$_invoke$arity$1(___$1),s),thi.ng.geom.core._STAR_.call(null,new cljs.core.Keyword(null,"size","size",1017434995).cljs$core$IFn$_invoke$arity$1(___$1),s)));
});
thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PScale$scale$arity$3 = (function (_,a,b){var ___$1 = this;return (new thi.ng.geom.types.Rect2(thi.ng.geom.core._STAR_.call(null,new cljs.core.Keyword(null,"p","p",1013904354).cljs$core$IFn$_invoke$arity$1(___$1),a,b),thi.ng.geom.core._STAR_.call(null,new cljs.core.Keyword(null,"size","size",1017434995).cljs$core$IFn$_invoke$arity$1(___$1),a,b)));
});
thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PScale$scale_size$arity$2 = (function (_,s){var ___$1 = this;var s_SINGLEQUOTE_ = thi.ng.geom.core._STAR_.call(null,new cljs.core.Keyword(null,"size","size",1017434995).cljs$core$IFn$_invoke$arity$1(___$1),s);return (new thi.ng.geom.types.Rect2(thi.ng.geom.core.madd.call(null,s_SINGLEQUOTE_,-0.5,thi.ng.geom.core.centroid.call(null,___$1)),s_SINGLEQUOTE_));
});
thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PTessellate$ = true;
thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PTessellate$tessellate$arity$1 = (function (_){var ___$1 = this;var vec__10558 = thi.ng.geom.core.vertices.call(null,___$1);var a = cljs.core.nth.call(null,vec__10558,0,null);var b = cljs.core.nth.call(null,vec__10558,1,null);var c = cljs.core.nth.call(null,vec__10558,2,null);var d = cljs.core.nth.call(null,vec__10558,3,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new thi.ng.geom.types.Triangle2(a,b,c)),(new thi.ng.geom.types.Triangle2(a,c,d))], null);
});
thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PTessellate$tessellate$arity$2 = (function (_,opts){var ___$1 = this;return cljs.core.mapcat.call(null,thi.ng.geom.core.tessellate,thi.ng.geom.core.subdivide.call(null,___$1,opts));
});
thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PCircumference$ = true;
thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PCircumference$circumference$arity$1 = (function (_){var ___$1 = this;return (2.0 * cljs.core.reduce.call(null,cljs.core._PLUS_,new cljs.core.Keyword(null,"size","size",1017434995).cljs$core$IFn$_invoke$arity$1(___$1)));
});
thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PBounds$ = true;
thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PBounds$bounds$arity$1 = (function (_){var ___$1 = this;return ___$1;
});
thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PBounds$width$arity$1 = (function (_){var ___$1 = this;return new cljs.core.Keyword(null,"size","size",1017434995).cljs$core$IFn$_invoke$arity$1(___$1).call(null,0);
});
thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PBounds$height$arity$1 = (function (_){var ___$1 = this;return new cljs.core.Keyword(null,"size","size",1017434995).cljs$core$IFn$_invoke$arity$1(___$1).call(null,1);
});
thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PBounds$depth$arity$1 = (function (_){var ___$1 = this;return 0;
});
thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PVertexAccess$ = true;
thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PVertexAccess$vertices$arity$1 = (function (_){var ___$1 = this;var a = new cljs.core.Keyword(null,"p","p",1013904354).cljs$core$IFn$_invoke$arity$1(___$1);var c = thi.ng.geom.core._PLUS_.call(null,a,new cljs.core.Keyword(null,"size","size",1017434995).cljs$core$IFn$_invoke$arity$1(___$1));return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,thi.ng.geom.core.vector.vec2.call(null,c.call(null,0),a.call(null,1)),c,thi.ng.geom.core.vector.vec2.call(null,a.call(null,0),c.call(null,1))], null);
});
thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PMeshConvert$ = true;
thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PMeshConvert$as_mesh$arity$1 = (function (_){var ___$1 = this;return thi.ng.geom.core.as_mesh.call(null,___$1,cljs.core.PersistentArrayMap.EMPTY);
});
thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PMeshConvert$as_mesh$arity$2 = (function (_,opts){var ___$1 = this;return thi.ng.geom.core.add_face.call(null,(function (){var or__4953__auto__ = new cljs.core.Keyword(null,"mesh","mesh",1017252191).cljs$core$IFn$_invoke$arity$1(opts);if(cljs.core.truth_(or__4953__auto__))
{return or__4953__auto__;
} else
{return thi.ng.geom.gmesh.gmesh.call(null);
}
})(),cljs.core.mapv.call(null,thi.ng.geom.core.vector.vec3,thi.ng.geom.core.vertices.call(null,___$1)));
});
thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PGraph$ = true;
thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PGraph$vertex_neighbors$arity$2 = (function (_,v){var ___$1 = this;return thi.ng.common.data.core.neighbors.call(null,thi.ng.geom.core.vector.vec2.call(null,v),thi.ng.geom.core.vertices.call(null,___$1));
});
thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PGraph$vertex_valence$arity$2 = (function (_,v){var ___$1 = this;if(cljs.core.truth_(cljs.core.set.call(null,thi.ng.geom.core.vertices.call(null,___$1)).call(null,thi.ng.geom.core.vector.vec2.call(null,v))))
{return 2;
} else
{return 0;
}
});
thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PProximity$ = true;
thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PProximity$closest_point$arity$2 = (function (_,p){var ___$1 = this;return thi.ng.geom.core.utils.closest_point_on_segments.call(null,p,thi.ng.geom.core.edges.call(null,___$1));
});
thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PArea$ = true;
thi.ng.geom.types.Rect2.prototype.thi$ng$geom$core$PArea$area$arity$1 = (function (_){var ___$1 = this;return cljs.core.reduce.call(null,cljs.core._STAR_,new cljs.core.Keyword(null,"size","size",1017434995).cljs$core$IFn$_invoke$arity$1(___$1));
});
