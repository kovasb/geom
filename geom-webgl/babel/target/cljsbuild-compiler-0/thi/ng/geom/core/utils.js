// Compiled by ClojureScript 0.0-2202
goog.provide('thi.ng.geom.core.utils');
goog.require('cljs.core');
goog.require('thi.ng.common.math.core');
goog.require('thi.ng.geom.core.vector');
goog.require('thi.ng.common.math.core');
goog.require('thi.ng.common.math.core');
goog.require('thi.ng.common.data.core');
goog.require('thi.ng.common.data.core');
goog.require('thi.ng.geom.core.vector');
goog.require('thi.ng.geom.core.vector');
goog.require('thi.ng.geom.core');
goog.require('thi.ng.geom.core');
thi.ng.geom.core.utils.closest_point_coeff = (function closest_point_coeff(p,a,b){var d = thi.ng.geom.core._.call(null,b,a);return (thi.ng.geom.core.dot.call(null,thi.ng.geom.core._.call(null,p,a),d) / thi.ng.geom.core.mag_squared.call(null,d));
});
thi.ng.geom.core.utils.closest_point_on_line = (function closest_point_on_line(p,a,b){return thi.ng.geom.core.mix.call(null,a,b,thi.ng.geom.core.utils.closest_point_coeff.call(null,p,a,b));
});
thi.ng.geom.core.utils.closest_point_on_segment = (function closest_point_on_segment(p,a,b){var t = thi.ng.geom.core.utils.closest_point_coeff.call(null,p,a,b);if((t <= 0.0))
{return a;
} else
{if((t >= 1.0))
{return b;
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return thi.ng.geom.core.mix.call(null,a,b,t);
} else
{return null;
}
}
}
});
thi.ng.geom.core.utils.closest_point_on_segments = (function closest_point_on_segments(p,segments){var vec__7318 = cljs.core.map.call(null,(function (p1__7316_SHARP_){return cljs.core.apply.call(null,thi.ng.geom.core.utils.closest_point_on_segment,p,p1__7316_SHARP_);
}),segments);var a = cljs.core.nth.call(null,vec__7318,0,null);var more = cljs.core.nthnext.call(null,vec__7318,1);var c = a;var d = thi.ng.geom.core.dist_squared.call(null,p,a);var more__$1 = more;while(true){
if(more__$1)
{var q = cljs.core.first.call(null,more__$1);var d_SINGLEQUOTE_ = thi.ng.geom.core.dist_squared.call(null,p,q);if((d_SINGLEQUOTE_ < d))
{{
var G__7319 = q;
var G__7320 = d_SINGLEQUOTE_;
var G__7321 = cljs.core.next.call(null,more__$1);
c = G__7319;
d = G__7320;
more__$1 = G__7321;
continue;
}
} else
{{
var G__7322 = c;
var G__7323 = d;
var G__7324 = cljs.core.next.call(null,more__$1);
c = G__7322;
d = G__7323;
more__$1 = G__7324;
continue;
}
}
} else
{return c;
}
break;
}
});
thi.ng.geom.core.utils.closest_line_between = (function closest_line_between(a1,b1,a2,b2){var p43 = thi.ng.geom.core._.call(null,b2,a2);if(!(thi.ng.common.math.core.delta_EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,0,0], null),p43,thi.ng.common.math.core._STAR_eps_STAR_)))
{var p21 = thi.ng.geom.core._.call(null,b1,a1);if(!(thi.ng.common.math.core.delta_EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,0,0], null),p21,thi.ng.common.math.core._STAR_eps_STAR_)))
{var p13 = thi.ng.geom.core._.call(null,a1,a2);var d1343 = thi.ng.geom.core.dot.call(null,p13,p43);var d4321 = thi.ng.geom.core.dot.call(null,p43,p21);var d1321 = thi.ng.geom.core.dot.call(null,p13,p21);var d4343 = thi.ng.geom.core.dot.call(null,p43,p43);var d2121 = thi.ng.geom.core.dot.call(null,p21,p21);var d = ((d2121 * d4343) - (d4321 * d4321));if(thi.ng.common.math.core.delta_EQ_.call(null,0.0,d,thi.ng.common.math.core._STAR_eps_STAR_))
{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"parallel","parallel",2185306489)], null);
} else
{var n = ((d1343 * d4321) - (d1321 * d4343));var ua = (n / d);var ub = (((d4321 * ua) + d1343) / d4343);return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"intersect","intersect",1516918929),new cljs.core.Keyword(null,"a","a",1013904339),thi.ng.geom.core.madd.call(null,p21,ua,a1),new cljs.core.Keyword(null,"b","b",1013904340),thi.ng.geom.core.madd.call(null,p43,ub,a2),new cljs.core.Keyword(null,"ua","ua",1013907966),ua,new cljs.core.Keyword(null,"ub","ub",1013907967),ub], null);
}
} else
{return null;
}
} else
{return null;
}
});
thi.ng.geom.core.utils.max_dist = (function max_dist(c,points){return Math.sqrt.call(null,cljs.core.reduce.call(null,cljs.core.max,cljs.core.map.call(null,(function (p1__7325_SHARP_){return thi.ng.geom.core.dist_squared.call(null,c,p1__7325_SHARP_);
}),points)));
});
thi.ng.geom.core.utils.arc_length_index = (function arc_length_index(points){return cljs.core.vec.call(null,cljs.core.reductions.call(null,cljs.core._PLUS_,0,cljs.core.map.call(null,(function (p1__7326_SHARP_){return thi.ng.geom.core.dist.call(null,p1__7326_SHARP_.call(null,0),p1__7326_SHARP_.call(null,1));
}),thi.ng.common.data.core.successive_nth.call(null,2,points))));
});
thi.ng.geom.core.utils.arc_length = (function arc_length(points){return thi.ng.common.data.core.reduce_pairs.call(null,cljs.core._PLUS_,thi.ng.geom.core.dist,points);
});
thi.ng.geom.core.utils.centroid = (function centroid(p__7327){var vec__7330 = p__7327;var x = cljs.core.nth.call(null,vec__7330,0,null);var xs = cljs.core.nthnext.call(null,vec__7330,1);var coll = vec__7330;var G__7331 = cljs.core.count.call(null,coll);if(cljs.core._EQ_.call(null,2,G__7331))
{return thi.ng.geom.core.mix.call(null,x,cljs.core.first.call(null,xs));
} else
{if(cljs.core._EQ_.call(null,1,G__7331))
{return x;
} else
{if(cljs.core._EQ_.call(null,0,G__7331))
{return null;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return thi.ng.geom.core.addm.call(null,x,xs,(1.0 / cljs.core.count.call(null,coll)));
} else
{return null;
}
}
}
}
});
thi.ng.geom.core.utils.center = (function() {
var center = null;
var center__2 = (function (c_SINGLEQUOTE_,coll){return center.call(null,thi.ng.geom.core.utils.centroid.call(null,coll),c_SINGLEQUOTE_,coll);
});
var center__3 = (function (c,c_SINGLEQUOTE_,coll){var d = (c_SINGLEQUOTE_ - c);return cljs.core.mapv.call(null,((function (d){
return (function (p1__7332_SHARP_){return thi.ng.geom.core._PLUS_.call(null,p1__7332_SHARP_,d);
});})(d))
,coll);
});
center = function(c,c_SINGLEQUOTE_,coll){
switch(arguments.length){
case 2:
return center__2.call(this,c,c_SINGLEQUOTE_);
case 3:
return center__3.call(this,c,c_SINGLEQUOTE_,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
center.cljs$core$IFn$_invoke$arity$2 = center__2;
center.cljs$core$IFn$_invoke$arity$3 = center__3;
return center;
})()
;
thi.ng.geom.core.utils.scale_size = (function() {
var scale_size = null;
var scale_size__2 = (function (s,coll){return scale_size.call(null,thi.ng.geom.core.utils.centroid.call(null,coll),s,coll);
});
var scale_size__3 = (function (c,s,coll){return cljs.core.mapv.call(null,(function (p1__7333_SHARP_){return thi.ng.geom.core.madd.call(null,thi.ng.geom.core._.call(null,p1__7333_SHARP_,c),s,c);
}),coll);
});
scale_size = function(c,s,coll){
switch(arguments.length){
case 2:
return scale_size__2.call(this,c,s);
case 3:
return scale_size__3.call(this,c,s,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
scale_size.cljs$core$IFn$_invoke$arity$2 = scale_size__2;
scale_size.cljs$core$IFn$_invoke$arity$3 = scale_size__3;
return scale_size;
})()
;
thi.ng.geom.core.utils.bounds_STAR_ = (function bounds_STAR_(f,zero,p__7334){var vec__7336 = p__7334;var x = cljs.core.nth.call(null,vec__7336,0,null);var xs = cljs.core.nthnext.call(null,vec__7336,1);var coll = vec__7336;var c = cljs.core.count.call(null,coll);if((c > 1))
{var p = f.call(null,cljs.core.min,x,xs);var q = f.call(null,cljs.core.max,x,xs);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,thi.ng.geom.core._.call(null,q,p)], null);
} else
{if(cljs.core._EQ_.call(null,c,1))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,zero], null);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return null;
} else
{return null;
}
}
}
});
thi.ng.geom.core.utils.bounding_rect = (function bounding_rect(points){return thi.ng.geom.core.utils.bounds_STAR_.call(null,thi.ng.geom.core.vector.vec2_op_seq,thi.ng.geom.core.vector.V2,points);
});
thi.ng.geom.core.utils.bounding_box = (function bounding_box(points){return thi.ng.geom.core.utils.bounds_STAR_.call(null,thi.ng.geom.core.vector.vec3_op_seq,thi.ng.geom.core.vector.V3,points);
});
thi.ng.geom.core.utils.radial_bounds = (function radial_bounds(ctor,c,r_or_points){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ctor.call(null,c),((cljs.core.coll_QMARK_.call(null,r_or_points))?thi.ng.geom.core.utils.max_dist.call(null,c,r_or_points):r_or_points)], null);
});
thi.ng.geom.core.utils.axis_bounds = (function axis_bounds(axis,coll){var xs = cljs.core.map.call(null,(function (p1__7337_SHARP_){return cljs.core.nth.call(null,p1__7337_SHARP_,axis);
}),coll);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.reduce.call(null,cljs.core.min,xs),cljs.core.reduce.call(null,cljs.core.max,xs)], null);
});
thi.ng.geom.core.utils.axis_range = (function axis_range(axis,coll){return (- cljs.core.apply.call(null,cljs.core._,thi.ng.geom.core.utils.axis_bounds.call(null,axis,coll)));
});
thi.ng.geom.core.utils.delta_contains = (function delta_contains(points,p,eps){return cljs.core.some.call(null,(function (p1__7338_SHARP_){return thi.ng.common.math.core.delta_EQ_.call(null,p,p1__7338_SHARP_,eps);
}),points);
});
thi.ng.geom.core.utils.from_barycentric = (function from_barycentric(points,weights){return cljs.core.reduce.call(null,thi.ng.geom.core._PLUS_,cljs.core.map.call(null,thi.ng.geom.core._STAR_,points,weights));
});
thi.ng.geom.core.utils.point_at_STAR_ = (function point_at_STAR_(points,idx,total,t,i){var ct = (t * total);var i__$1 = ((function (){var i__$1 = i;while(true){
if((ct >= idx.call(null,i__$1)))
{{
var G__7339 = (i__$1 + 1);
i__$1 = G__7339;
continue;
}
} else
{return i__$1;
}
break;
}
})() | 0);var i1 = (i__$1 - 1);var pi = idx.call(null,i1);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.mix.call(null,cljs.core.nth.call(null,points,i1),cljs.core.nth.call(null,points,i__$1),((ct - pi) / (idx.call(null,i__$1) - pi))),i__$1], null);
});
thi.ng.geom.core.utils.point_at = (function() {
var point_at = null;
var point_at__2 = (function (t,points){return point_at.call(null,t,points,null);
});
var point_at__3 = (function (t,points,idx){if(thi.ng.common.math.core.in_range_QMARK_.call(null,0.0,1.0,t))
{var n = cljs.core.count.call(null,points);var t__$1 = t;if((0 === n))
{return null;
} else
{if((1 === n))
{return cljs.core.first.call(null,points);
} else
{if((1.0 === t__$1))
{return cljs.core.last.call(null,points);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{var idx__$1 = (function (){var or__3481__auto__ = idx;if(cljs.core.truth_(or__3481__auto__))
{return or__3481__auto__;
} else
{return thi.ng.geom.core.utils.arc_length_index.call(null,points);
}
})();return cljs.core.first.call(null,thi.ng.geom.core.utils.point_at_STAR_.call(null,points,idx__$1,cljs.core.peek.call(null,idx__$1),t__$1,1));
} else
{return null;
}
}
}
}
} else
{return null;
}
});
point_at = function(t,points,idx){
switch(arguments.length){
case 2:
return point_at__2.call(this,t,points);
case 3:
return point_at__3.call(this,t,points,idx);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
point_at.cljs$core$IFn$_invoke$arity$2 = point_at__2;
point_at.cljs$core$IFn$_invoke$arity$3 = point_at__3;
return point_at;
})()
;
thi.ng.geom.core.utils.sample_uniform_STAR_ = (function sample_uniform_STAR_(udist,include_last_QMARK_,points){var idx = thi.ng.geom.core.utils.arc_length_index.call(null,points);var total = cljs.core.peek.call(null,idx);var delta = (udist / total);var samples = (function (){var t = 0.0;var i = 1;var acc = cljs.core.PersistentVector.EMPTY;while(true){
if((t < 1.0))
{var vec__7341 = thi.ng.geom.core.utils.point_at_STAR_.call(null,points,idx,total,t,i);var p = cljs.core.nth.call(null,vec__7341,0,null);var i__$1 = cljs.core.nth.call(null,vec__7341,1,null);{
var G__7342 = (t + delta);
var G__7343 = (i__$1 | 0);
var G__7344 = cljs.core.conj.call(null,acc,p);
t = G__7342;
i = G__7343;
acc = G__7344;
continue;
}
} else
{return acc;
}
break;
}
})();if(cljs.core.truth_(include_last_QMARK_))
{return cljs.core.conj.call(null,samples,cljs.core.last.call(null,points));
} else
{return samples;
}
});
thi.ng.geom.core.utils.sample_uniform = (function sample_uniform(udist,include_last_QMARK_,points){var n = cljs.core.count.call(null,points);if((0 === n))
{return null;
} else
{if((1 === n))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,points)], null);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return thi.ng.geom.core.utils.sample_uniform_STAR_.call(null,udist,include_last_QMARK_,points);
} else
{return null;
}
}
}
});
thi.ng.geom.core.utils.sample_segment_with_res = (function sample_segment_with_res(a,b,res,include_b_QMARK_){var ls = (function (){var iter__4198__auto__ = (function iter__7349(s__7350){return (new cljs.core.LazySeq(null,(function (){var s__7350__$1 = s__7350;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__7350__$1);if(temp__4126__auto__)
{var s__7350__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__7350__$2))
{var c__4196__auto__ = cljs.core.chunk_first.call(null,s__7350__$2);var size__4197__auto__ = cljs.core.count.call(null,c__4196__auto__);var b__7352 = cljs.core.chunk_buffer.call(null,size__4197__auto__);if((function (){var i__7351 = 0;while(true){
if((i__7351 < size__4197__auto__))
{var t = cljs.core._nth.call(null,c__4196__auto__,i__7351);cljs.core.chunk_append.call(null,b__7352,thi.ng.geom.core.mix.call(null,a,b,t));
{
var G__7353 = (i__7351 + 1);
i__7351 = G__7353;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7352),iter__7349.call(null,cljs.core.chunk_rest.call(null,s__7350__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7352),null);
}
} else
{var t = cljs.core.first.call(null,s__7350__$2);return cljs.core.cons.call(null,thi.ng.geom.core.mix.call(null,a,b,t),iter__7349.call(null,cljs.core.rest.call(null,s__7350__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4198__auto__.call(null,thi.ng.common.math.core.norm_range.call(null,res));
})();if(cljs.core.truth_(include_b_QMARK_))
{return ls;
} else
{return cljs.core.butlast.call(null,ls);
}
});
thi.ng.geom.core.utils.tessellate_with_point = (function() {
var tessellate_with_point = null;
var tessellate_with_point__1 = (function (points){return tessellate_with_point.call(null,thi.ng.geom.core.utils.centroid.call(null,points),points);
});
var tessellate_with_point__2 = (function (c,points){return cljs.core.map.call(null,(function (p1__7354_SHARP_){return (new cljs.core.PersistentVector(null,3,5,cljs.core.PersistentVector.EMPTY_NODE,[c,p1__7354_SHARP_.call(null,0),p1__7354_SHARP_.call(null,1)],null));
}),thi.ng.common.data.core.successive_nth.call(null,2,cljs.core.concat.call(null,points,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,points)], null))));
});
tessellate_with_point = function(c,points){
switch(arguments.length){
case 1:
return tessellate_with_point__1.call(this,c);
case 2:
return tessellate_with_point__2.call(this,c,points);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tessellate_with_point.cljs$core$IFn$_invoke$arity$1 = tessellate_with_point__1;
tessellate_with_point.cljs$core$IFn$_invoke$arity$2 = tessellate_with_point__2;
return tessellate_with_point;
})()
;
thi.ng.geom.core.utils.tessellate_with_first = (function tessellate_with_first(points){if((cljs.core.count.call(null,points) > 3))
{var vec__7358 = points;var v0 = cljs.core.nth.call(null,vec__7358,0,null);var more = cljs.core.nthnext.call(null,vec__7358,1);return cljs.core.map.call(null,((function (vec__7358,v0,more){
return (function (p__7359){var vec__7360 = p__7359;var a = cljs.core.nth.call(null,vec__7360,0,null);var b = cljs.core.nth.call(null,vec__7360,1,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v0,a,b], null);
});})(vec__7358,v0,more))
,thi.ng.common.data.core.successive_nth.call(null,2,more));
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [points], null);
}
});
thi.ng.geom.core.utils.tessellate_tri_with_midpoints = (function tessellate_tri_with_midpoints(p__7361){var vec__7363 = p__7361;var a = cljs.core.nth.call(null,vec__7363,0,null);var b = cljs.core.nth.call(null,vec__7363,1,null);var c = cljs.core.nth.call(null,vec__7363,2,null);var ab = thi.ng.geom.core.mix.call(null,a,b);var bc = thi.ng.geom.core.mix.call(null,b,c);var ca = thi.ng.geom.core.mix.call(null,c,a);return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,ab,ca], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ab,b,bc], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bc,c,ca], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ab,bc,ca], null)], null);
});
thi.ng.geom.core.utils.tessellate_3 = (function tessellate_3(points){var pred__7368 = cljs.core._EQ_;var expr__7369 = cljs.core.count.call(null,points);if(cljs.core.truth_(pred__7368.call(null,3,expr__7369)))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [points], null);
} else
{if(cljs.core.truth_(pred__7368.call(null,4,expr__7369)))
{var vec__7371 = points;var a = cljs.core.nth.call(null,vec__7371,0,null);var b = cljs.core.nth.call(null,vec__7371,1,null);var c = cljs.core.nth.call(null,vec__7371,2,null);var d = cljs.core.nth.call(null,vec__7371,3,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,c,d], null)], null);
} else
{return thi.ng.geom.core.utils.tessellate_with_point.call(null,points);
}
}
});
thi.ng.geom.core.utils.tessellate_max4 = (function tessellate_max4(points){if((cljs.core.count.call(null,points) <= 4))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [points], null);
} else
{return thi.ng.geom.core.utils.tessellate_with_point.call(null,points);
}
});
thi.ng.geom.core.utils.ortho_normal = (function() {
var ortho_normal = null;
var ortho_normal__1 = (function (p__7372){var vec__7374 = p__7372;var a = cljs.core.nth.call(null,vec__7374,0,null);var b = cljs.core.nth.call(null,vec__7374,1,null);var c = cljs.core.nth.call(null,vec__7374,2,null);return thi.ng.geom.core.normalize.call(null,thi.ng.geom.core.cross.call(null,thi.ng.geom.core._.call(null,b,a),thi.ng.geom.core._.call(null,c,a)));
});
var ortho_normal__2 = (function (a,b){return thi.ng.geom.core.normalize.call(null,thi.ng.geom.core.cross.call(null,a,b));
});
var ortho_normal__3 = (function (a,b,c){return thi.ng.geom.core.normalize.call(null,thi.ng.geom.core.cross.call(null,thi.ng.geom.core._.call(null,b,a),thi.ng.geom.core._.call(null,c,a)));
});
ortho_normal = function(a,b,c){
switch(arguments.length){
case 1:
return ortho_normal__1.call(this,a);
case 2:
return ortho_normal__2.call(this,a,b);
case 3:
return ortho_normal__3.call(this,a,b,c);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ortho_normal.cljs$core$IFn$_invoke$arity$1 = ortho_normal__1;
ortho_normal.cljs$core$IFn$_invoke$arity$2 = ortho_normal__2;
ortho_normal.cljs$core$IFn$_invoke$arity$3 = ortho_normal__3;
return ortho_normal;
})()
;
thi.ng.geom.core.utils.norm_sign2 = (function norm_sign2(p__7375,p__7376,p__7377){var vec__7381 = p__7375;var ax = cljs.core.nth.call(null,vec__7381,0,null);var ay = cljs.core.nth.call(null,vec__7381,1,null);var vec__7382 = p__7376;var bx = cljs.core.nth.call(null,vec__7382,0,null);var by = cljs.core.nth.call(null,vec__7382,1,null);var vec__7383 = p__7377;var cx = cljs.core.nth.call(null,vec__7383,0,null);var cy = cljs.core.nth.call(null,vec__7383,1,null);return (((bx - ax) * (cy - ay)) - ((cx - ax) * (by - ay)));
});
thi.ng.geom.core.utils.norm_sign3 = (function norm_sign3(a,b,c){return thi.ng.geom.core.mag.call(null,thi.ng.geom.core.cross.call(null,thi.ng.geom.core._.call(null,b,a),thi.ng.geom.core._.call(null,c,a)));
});
thi.ng.geom.core.utils.tri_area2 = (function tri_area2(a,b,c){return (0.5 * thi.ng.geom.core.utils.norm_sign2.call(null,a,b,c));
});
thi.ng.geom.core.utils.tri_area3 = (function tri_area3(a,b,c){return (0.5 * thi.ng.geom.core.utils.norm_sign3.call(null,a,b,c));
});
thi.ng.geom.core.utils.clockwise2_QMARK_ = (function clockwise2_QMARK_(a,b,c){return (thi.ng.geom.core.utils.norm_sign2.call(null,a,b,c) < 0);
});
thi.ng.geom.core.utils.clockwise3_QMARK_ = (function clockwise3_QMARK_(a,b,c,n){return (thi.ng.geom.core.dot.call(null,thi.ng.geom.core.cross.call(null,thi.ng.geom.core._.call(null,b,a),thi.ng.geom.core._.call(null,c,a)),n) > 0);
});
thi.ng.geom.core.utils.triangle_barycentric_coords = (function() {
var triangle_barycentric_coords = null;
var triangle_barycentric_coords__2 = (function (p__7384,p){var vec__7386 = p__7384;var a = cljs.core.nth.call(null,vec__7386,0,null);var b = cljs.core.nth.call(null,vec__7386,1,null);var c = cljs.core.nth.call(null,vec__7386,2,null);return triangle_barycentric_coords.call(null,a,b,c,p,thi.ng.geom.core._.call(null,b,a),thi.ng.geom.core._.call(null,c,a));
});
var triangle_barycentric_coords__4 = (function (a,b,c,p){return triangle_barycentric_coords.call(null,a,b,c,p,thi.ng.geom.core._.call(null,b,a),thi.ng.geom.core._.call(null,c,a));
});
var triangle_barycentric_coords__6 = (function (a,b,c,p,u,v){var w = thi.ng.geom.core._.call(null,p,a);var uu = thi.ng.geom.core.mag_squared.call(null,u);var vv = thi.ng.geom.core.mag_squared.call(null,v);var uv = thi.ng.geom.core.dot.call(null,u,v);var wu = thi.ng.geom.core.dot.call(null,w,u);var wv = thi.ng.geom.core.dot.call(null,w,v);var denom = (1.0 / ((uv * uv) - (uu * vv)));var s = (denom * ((uv * wv) - (vv * wu)));var t = (denom * ((uv * wu) - (uu * wv)));return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1.0 - (s + t)),s,t], null);
});
triangle_barycentric_coords = function(a,b,c,p,u,v){
switch(arguments.length){
case 2:
return triangle_barycentric_coords__2.call(this,a,b);
case 4:
return triangle_barycentric_coords__4.call(this,a,b,c,p);
case 6:
return triangle_barycentric_coords__6.call(this,a,b,c,p,u,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
triangle_barycentric_coords.cljs$core$IFn$_invoke$arity$2 = triangle_barycentric_coords__2;
triangle_barycentric_coords.cljs$core$IFn$_invoke$arity$4 = triangle_barycentric_coords__4;
triangle_barycentric_coords.cljs$core$IFn$_invoke$arity$6 = triangle_barycentric_coords__6;
return triangle_barycentric_coords;
})()
;
thi.ng.geom.core.utils.point_in_triangle2_QMARK_ = (function point_in_triangle2_QMARK_(p,a,b,c){if(thi.ng.geom.core.utils.clockwise2_QMARK_.call(null,a,b,c))
{return ((thi.ng.geom.core.utils.norm_sign2.call(null,a,c,p) >= 0.0)) && ((thi.ng.geom.core.utils.norm_sign2.call(null,b,a,p) >= 0.0)) && ((thi.ng.geom.core.utils.norm_sign2.call(null,c,b,p) >= 0.0));
} else
{return ((thi.ng.geom.core.utils.norm_sign2.call(null,b,c,p) >= 0.0)) && ((thi.ng.geom.core.utils.norm_sign2.call(null,a,b,p) >= 0.0)) && ((thi.ng.geom.core.utils.norm_sign2.call(null,c,a,p) >= 0.0));
}
});
thi.ng.geom.core.utils.point_in_triangle3_QMARK_ = (function point_in_triangle3_QMARK_(p,a,b,c){var u = thi.ng.geom.core._.call(null,b,a);var v = thi.ng.geom.core._.call(null,c,a);var n = thi.ng.geom.core.utils.ortho_normal.call(null,u,v);var cl = (thi.ng.geom.core.dot.call(null,n,p) - thi.ng.geom.core.dot.call(null,n,a));if(thi.ng.common.math.core.delta_EQ_.call(null,0.0,cl))
{var vec__7388 = thi.ng.geom.core.utils.triangle_barycentric_coords.call(null,a,b,c,p,u,v);var u__$1 = cljs.core.nth.call(null,vec__7388,0,null);var v__$1 = cljs.core.nth.call(null,vec__7388,1,null);var w = cljs.core.nth.call(null,vec__7388,2,null);return ((u__$1 >= 0.0)) && ((w >= 0.0)) && (thi.ng.common.math.core.in_range_QMARK_.call(null,0.0,1.0,v__$1));
} else
{return null;
}
});
