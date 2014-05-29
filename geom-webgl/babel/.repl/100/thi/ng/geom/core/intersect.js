// Compiled by ClojureScript 0.0-2202
goog.provide('thi.ng.geom.core.intersect');
goog.require('cljs.core');
goog.require('thi.ng.common.math.core');
goog.require('thi.ng.geom.core.vector');
goog.require('thi.ng.common.math.core');
goog.require('thi.ng.common.math.core');
goog.require('thi.ng.geom.core.vector');
goog.require('thi.ng.geom.core.vector');
goog.require('thi.ng.geom.core.utils');
goog.require('thi.ng.geom.core.utils');
goog.require('thi.ng.geom.core');
goog.require('thi.ng.geom.core');
thi.ng.geom.core.intersect.intersect_circle_circle_QMARK_ = (function() {
var intersect_circle_circle_QMARK_ = null;
var intersect_circle_circle_QMARK___2 = (function (p__10561,p__10562){var map__10565 = p__10561;var map__10565__$1 = ((cljs.core.seq_QMARK_.call(null,map__10565))?cljs.core.apply.call(null,cljs.core.hash_map,map__10565):map__10565);var p = cljs.core.get.call(null,map__10565__$1,new cljs.core.Keyword(null,"p","p",1013904354));var r1 = cljs.core.get.call(null,map__10565__$1,new cljs.core.Keyword(null,"r","r",1013904356));var map__10566 = p__10562;var map__10566__$1 = ((cljs.core.seq_QMARK_.call(null,map__10566))?cljs.core.apply.call(null,cljs.core.hash_map,map__10566):map__10566);var q = cljs.core.get.call(null,map__10566__$1,new cljs.core.Keyword(null,"p","p",1013904354));var r2 = cljs.core.get.call(null,map__10566__$1,new cljs.core.Keyword(null,"r","r",1013904356));return intersect_circle_circle_QMARK_.call(null,p,r1,q,r2);
});
var intersect_circle_circle_QMARK___4 = (function (p,r1,q,r2){var delta = thi.ng.geom.core._.call(null,q,p);var d = thi.ng.geom.core.mag.call(null,delta);if(((d <= (r1 + r2))) && ((d >= thi.ng.common.math.core.abs.call(null,(r1 - r2)))))
{var a = ((((r1 * r1) - (r2 * r2)) + (d * d)) / (2.0 * d));var invd = (1.0 / d);var p__$1 = thi.ng.geom.core.madd.call(null,delta,(a * invd),p);var h = Math.sqrt.call(null,((r1 * r1) - (a * a)));var perp = thi.ng.geom.core._STAR_.call(null,thi.ng.geom.core.normal.call(null,delta),(h * invd));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core._PLUS_.call(null,p__$1,perp),thi.ng.geom.core._.call(null,p__$1,perp)], null);
} else
{return null;
}
});
intersect_circle_circle_QMARK_ = function(p,r1,q,r2){
switch(arguments.length){
case 2:
return intersect_circle_circle_QMARK___2.call(this,p,r1);
case 4:
return intersect_circle_circle_QMARK___4.call(this,p,r1,q,r2);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
intersect_circle_circle_QMARK_.cljs$core$IFn$_invoke$arity$2 = intersect_circle_circle_QMARK___2;
intersect_circle_circle_QMARK_.cljs$core$IFn$_invoke$arity$4 = intersect_circle_circle_QMARK___4;
return intersect_circle_circle_QMARK_;
})()
;
thi.ng.geom.core.intersect.intersect_rect_rect_QMARK_ = (function() {
var intersect_rect_rect_QMARK_ = null;
var intersect_rect_rect_QMARK___2 = (function (p__10567,p__10568){var map__10583 = p__10567;var map__10583__$1 = ((cljs.core.seq_QMARK_.call(null,map__10583))?cljs.core.apply.call(null,cljs.core.hash_map,map__10583):map__10583);var vec__10584 = cljs.core.get.call(null,map__10583__$1,new cljs.core.Keyword(null,"p","p",1013904354));var px = cljs.core.nth.call(null,vec__10584,0,null);var py = cljs.core.nth.call(null,vec__10584,1,null);var vec__10585 = cljs.core.get.call(null,map__10583__$1,new cljs.core.Keyword(null,"size","size",1017434995));var w = cljs.core.nth.call(null,vec__10585,0,null);var h = cljs.core.nth.call(null,vec__10585,1,null);var map__10586 = p__10568;var map__10586__$1 = ((cljs.core.seq_QMARK_.call(null,map__10586))?cljs.core.apply.call(null,cljs.core.hash_map,map__10586):map__10586);var vec__10587 = cljs.core.get.call(null,map__10586__$1,new cljs.core.Keyword(null,"p","p",1013904354));var qx = cljs.core.nth.call(null,vec__10587,0,null);var qy = cljs.core.nth.call(null,vec__10587,1,null);var vec__10588 = cljs.core.get.call(null,map__10586__$1,new cljs.core.Keyword(null,"size","size",1017434995));var qw = cljs.core.nth.call(null,vec__10588,0,null);var qh = cljs.core.nth.call(null,vec__10588,1,null);return !(((px > (qx + qw))) || ((qx > (px + w))) || ((py > (qy + qh))) || ((qy > (py + h))));
});
var intersect_rect_rect_QMARK___4 = (function (p__10569,p__10570,p__10571,p__10572){var vec__10589 = p__10569;var px1 = cljs.core.nth.call(null,vec__10589,0,null);var py1 = cljs.core.nth.call(null,vec__10589,1,null);var vec__10590 = p__10570;var qx1 = cljs.core.nth.call(null,vec__10590,0,null);var qy1 = cljs.core.nth.call(null,vec__10590,1,null);var vec__10591 = p__10571;var px2 = cljs.core.nth.call(null,vec__10591,0,null);var py2 = cljs.core.nth.call(null,vec__10591,1,null);var vec__10592 = p__10572;var qx2 = cljs.core.nth.call(null,vec__10592,0,null);var qy2 = cljs.core.nth.call(null,vec__10592,1,null);return !(((px1 > qx2)) || ((px2 > qx1)) || ((py1 > qy2)) || ((py2 > qy1)));
});
intersect_rect_rect_QMARK_ = function(p__10569,p__10570,p__10571,p__10572){
switch(arguments.length){
case 2:
return intersect_rect_rect_QMARK___2.call(this,p__10569,p__10570);
case 4:
return intersect_rect_rect_QMARK___4.call(this,p__10569,p__10570,p__10571,p__10572);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
intersect_rect_rect_QMARK_.cljs$core$IFn$_invoke$arity$2 = intersect_rect_rect_QMARK___2;
intersect_rect_rect_QMARK_.cljs$core$IFn$_invoke$arity$4 = intersect_rect_rect_QMARK___4;
return intersect_rect_rect_QMARK_;
})()
;
thi.ng.geom.core.intersect.intersect_aabb_aabb_QMARK_ = (function() {
var intersect_aabb_aabb_QMARK_ = null;
var intersect_aabb_aabb_QMARK___2 = (function (p__10595,p__10596){var map__10599 = p__10595;var map__10599__$1 = ((cljs.core.seq_QMARK_.call(null,map__10599))?cljs.core.apply.call(null,cljs.core.hash_map,map__10599):map__10599);var pa = cljs.core.get.call(null,map__10599__$1,new cljs.core.Keyword(null,"p","p",1013904354));var sa = cljs.core.get.call(null,map__10599__$1,new cljs.core.Keyword(null,"size","size",1017434995));var map__10600 = p__10596;var map__10600__$1 = ((cljs.core.seq_QMARK_.call(null,map__10600))?cljs.core.apply.call(null,cljs.core.hash_map,map__10600):map__10600);var pb = cljs.core.get.call(null,map__10600__$1,new cljs.core.Keyword(null,"p","p",1013904354));var sb = cljs.core.get.call(null,map__10600__$1,new cljs.core.Keyword(null,"size","size",1017434995));return cljs.core.every_QMARK_.call(null,((function (map__10599,map__10599__$1,pa,sa,map__10600,map__10600__$1,pb,sb){
return (function (p1__10593_SHARP_){return ((pa.call(null,p1__10593_SHARP_) <= (pb.call(null,p1__10593_SHARP_) + sb.call(null,p1__10593_SHARP_)))) && ((pb.call(null,p1__10593_SHARP_) <= (pa.call(null,p1__10593_SHARP_) + sa.call(null,p1__10593_SHARP_))));
});})(map__10599,map__10599__$1,pa,sa,map__10600,map__10600__$1,pb,sb))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,1,2], null));
});
var intersect_aabb_aabb_QMARK___4 = (function (pa,pb,qa,qb){return cljs.core.every_QMARK_.call(null,(function (p1__10594_SHARP_){return ((pa.call(null,p1__10594_SHARP_) <= qb.call(null,p1__10594_SHARP_))) && ((pb.call(null,p1__10594_SHARP_) <= qa.call(null,p1__10594_SHARP_)));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,1,2], null));
});
intersect_aabb_aabb_QMARK_ = function(pa,pb,qa,qb){
switch(arguments.length){
case 2:
return intersect_aabb_aabb_QMARK___2.call(this,pa,pb);
case 4:
return intersect_aabb_aabb_QMARK___4.call(this,pa,pb,qa,qb);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
intersect_aabb_aabb_QMARK_.cljs$core$IFn$_invoke$arity$2 = intersect_aabb_aabb_QMARK___2;
intersect_aabb_aabb_QMARK_.cljs$core$IFn$_invoke$arity$4 = intersect_aabb_aabb_QMARK___4;
return intersect_aabb_aabb_QMARK_;
})()
;
thi.ng.geom.core.intersect.intersect_aabb_sphere_QMARK_ = (function() {
var intersect_aabb_sphere_QMARK_ = null;
var intersect_aabb_sphere_QMARK___2 = (function (p__10602,p__10603){var map__10606 = p__10602;var map__10606__$1 = ((cljs.core.seq_QMARK_.call(null,map__10606))?cljs.core.apply.call(null,cljs.core.hash_map,map__10606):map__10606);var p = cljs.core.get.call(null,map__10606__$1,new cljs.core.Keyword(null,"p","p",1013904354));var sz = cljs.core.get.call(null,map__10606__$1,new cljs.core.Keyword(null,"size","size",1017434995));var map__10607 = p__10603;var map__10607__$1 = ((cljs.core.seq_QMARK_.call(null,map__10607))?cljs.core.apply.call(null,cljs.core.hash_map,map__10607):map__10607);var s = cljs.core.get.call(null,map__10607__$1,new cljs.core.Keyword(null,"p","p",1013904354));var r = cljs.core.get.call(null,map__10607__$1,new cljs.core.Keyword(null,"r","r",1013904356));return intersect_aabb_sphere_QMARK_.call(null,p,thi.ng.geom.core._PLUS_.call(null,p,sz),s,r);
});
var intersect_aabb_sphere_QMARK___4 = (function (p,q,c,r){var sq = (function (p1__10601_SHARP_){return (p1__10601_SHARP_ * p1__10601_SHARP_);
});var ds = cljs.core.mapv.call(null,((function (sq){
return (function (x1,x2,sx){if((sx < x1))
{return sq.call(null,(sx - x1));
} else
{if((sx > x2))
{return sq.call(null,(sx - x2));
} else
{return 0.0;
}
}
});})(sq))
,p,q,c);return (cljs.core.apply.call(null,cljs.core._PLUS_,ds) <= (r * r));
});
intersect_aabb_sphere_QMARK_ = function(p,q,c,r){
switch(arguments.length){
case 2:
return intersect_aabb_sphere_QMARK___2.call(this,p,q);
case 4:
return intersect_aabb_sphere_QMARK___4.call(this,p,q,c,r);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
intersect_aabb_sphere_QMARK_.cljs$core$IFn$_invoke$arity$2 = intersect_aabb_sphere_QMARK___2;
intersect_aabb_sphere_QMARK_.cljs$core$IFn$_invoke$arity$4 = intersect_aabb_sphere_QMARK___4;
return intersect_aabb_sphere_QMARK_;
})()
;
thi.ng.geom.core.intersect.intersect_sphere_sphere_QMARK_ = (function() {
var intersect_sphere_sphere_QMARK_ = null;
var intersect_sphere_sphere_QMARK___2 = (function (p__10608,p__10609){var map__10612 = p__10608;var map__10612__$1 = ((cljs.core.seq_QMARK_.call(null,map__10612))?cljs.core.apply.call(null,cljs.core.hash_map,map__10612):map__10612);var p1 = cljs.core.get.call(null,map__10612__$1,new cljs.core.Keyword(null,"p","p",1013904354));var r1 = cljs.core.get.call(null,map__10612__$1,new cljs.core.Keyword(null,"r","r",1013904356));var map__10613 = p__10609;var map__10613__$1 = ((cljs.core.seq_QMARK_.call(null,map__10613))?cljs.core.apply.call(null,cljs.core.hash_map,map__10613):map__10613);var p2 = cljs.core.get.call(null,map__10613__$1,new cljs.core.Keyword(null,"p","p",1013904354));var r2 = cljs.core.get.call(null,map__10613__$1,new cljs.core.Keyword(null,"r","r",1013904356));return intersect_sphere_sphere_QMARK_.call(null,p1,r1,p2,r2);
});
var intersect_sphere_sphere_QMARK___4 = (function (p1,r1,p2,r2){return (thi.ng.geom.core.dist_squared.call(null,p1,p2) <= ((r1 + r2) * (r1 + r2)));
});
intersect_sphere_sphere_QMARK_ = function(p1,r1,p2,r2){
switch(arguments.length){
case 2:
return intersect_sphere_sphere_QMARK___2.call(this,p1,r1);
case 4:
return intersect_sphere_sphere_QMARK___4.call(this,p1,r1,p2,r2);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
intersect_sphere_sphere_QMARK_.cljs$core$IFn$_invoke$arity$2 = intersect_sphere_sphere_QMARK___2;
intersect_sphere_sphere_QMARK_.cljs$core$IFn$_invoke$arity$4 = intersect_sphere_sphere_QMARK___4;
return intersect_sphere_sphere_QMARK_;
})()
;
thi.ng.geom.core.intersect.intersect_ray_sphere_QMARK_ = (function() {
var intersect_ray_sphere_QMARK_ = null;
var intersect_ray_sphere_QMARK___2 = (function (p__10614,p__10615){var map__10618 = p__10614;var map__10618__$1 = ((cljs.core.seq_QMARK_.call(null,map__10618))?cljs.core.apply.call(null,cljs.core.hash_map,map__10618):map__10618);var rp = cljs.core.get.call(null,map__10618__$1,new cljs.core.Keyword(null,"p","p",1013904354));var dir = cljs.core.get.call(null,map__10618__$1,new cljs.core.Keyword(null,"dir","dir",1014003711));var map__10619 = p__10615;var map__10619__$1 = ((cljs.core.seq_QMARK_.call(null,map__10619))?cljs.core.apply.call(null,cljs.core.hash_map,map__10619):map__10619);var p = cljs.core.get.call(null,map__10619__$1,new cljs.core.Keyword(null,"p","p",1013904354));var r = cljs.core.get.call(null,map__10619__$1,new cljs.core.Keyword(null,"r","r",1013904356));return intersect_ray_sphere_QMARK_.call(null,rp,dir,p,r);
});
var intersect_ray_sphere_QMARK___4 = (function (rp,dir,p,r){var q = thi.ng.geom.core._.call(null,p,rp);var ds = thi.ng.geom.core.mag_squared.call(null,q);var v = (- thi.ng.geom.core.dot.call(null,q,dir));var d = ((r * r) - (ds - (v * v)));if((d >= 0.0))
{var d__$1 = Math.sqrt.call(null,d);var a = (v + d__$1);var b = (v - d__$1);if(!(((a < 0)) && ((b < 0))))
{if(((a > 0)) && ((b > 0)))
{if((a > b))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,a], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}
} else
{if((b > 0))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,a], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}
}
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}
} else
{return null;
}
});
intersect_ray_sphere_QMARK_ = function(rp,dir,p,r){
switch(arguments.length){
case 2:
return intersect_ray_sphere_QMARK___2.call(this,rp,dir);
case 4:
return intersect_ray_sphere_QMARK___4.call(this,rp,dir,p,r);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
intersect_ray_sphere_QMARK_.cljs$core$IFn$_invoke$arity$2 = intersect_ray_sphere_QMARK___2;
intersect_ray_sphere_QMARK_.cljs$core$IFn$_invoke$arity$4 = intersect_ray_sphere_QMARK___4;
return intersect_ray_sphere_QMARK_;
})()
;
thi.ng.geom.core.intersect.intersect_ray_triangle3_QMARK_ = (function intersect_ray_triangle3_QMARK_(p,d,a,b,c){var u = thi.ng.geom.core._.call(null,b,a);var v = thi.ng.geom.core._.call(null,c,a);var n = thi.ng.geom.core.cross.call(null,u,v);if(thi.ng.common.math.core.delta_EQ_.call(null,thi.ng.geom.core.vector.V3,n))
{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"degenerate","degenerate",2483487848)], null);
} else
{var w0 = thi.ng.geom.core._.call(null,p,a);var a_SINGLEQUOTE_ = (- thi.ng.geom.core.dot.call(null,n,w0));var b_SINGLEQUOTE_ = thi.ng.geom.core.dot.call(null,n,d);if(thi.ng.common.math.core.delta_EQ_.call(null,0.0,b_SINGLEQUOTE_))
{if(thi.ng.common.math.core.delta_EQ_.call(null,0.0,a_SINGLEQUOTE_))
{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"same-plane","same-plane",2486648231)], null);
} else
{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"no-intersect","no-intersect",684837765)], null);
}
} else
{var r = (a_SINGLEQUOTE_ / b_SINGLEQUOTE_);if((r < 0.0))
{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"no-intersect","no-intersect",684837765)], null);
} else
{var i = thi.ng.geom.core.madd.call(null,d,r,p);var vec__10621 = thi.ng.geom.core.utils.triangle_barycentric_coords.call(null,a,b,c,i,u,v);var u__$1 = cljs.core.nth.call(null,vec__10621,0,null);var v__$1 = cljs.core.nth.call(null,vec__10621,1,null);var w = cljs.core.nth.call(null,vec__10621,2,null);if(((u__$1 >= 0.0)) && ((w >= 0.0)) && (thi.ng.common.math.core.in_range_QMARK_.call(null,0.0,1.0,v__$1)))
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"intersect","intersect",1516918929),new cljs.core.Keyword(null,"p","p",1013904354),i], null);
} else
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"no-intersect","no-intersect",684837765),new cljs.core.Keyword(null,"p","p",1013904354),i], null);
}
}
}
}
});
thi.ng.geom.core.intersect.intersect_line2_line2_QMARK_ = (function intersect_line2_line2_QMARK_(p__10622,p__10623,p__10624,p__10625){var vec__10630 = p__10622;var px1 = cljs.core.nth.call(null,vec__10630,0,null);var py1 = cljs.core.nth.call(null,vec__10630,1,null);var p = vec__10630;var vec__10631 = p__10623;var qx1 = cljs.core.nth.call(null,vec__10631,0,null);var qy1 = cljs.core.nth.call(null,vec__10631,1,null);var q = vec__10631;var vec__10632 = p__10624;var px2 = cljs.core.nth.call(null,vec__10632,0,null);var py2 = cljs.core.nth.call(null,vec__10632,1,null);var lp = vec__10632;var vec__10633 = p__10625;var qx2 = cljs.core.nth.call(null,vec__10633,0,null);var qy2 = cljs.core.nth.call(null,vec__10633,1,null);var lq = vec__10633;var dx1 = (qx1 - px1);var dy1 = (qy1 - py1);var dx2 = (qx2 - px2);var dy2 = (qy2 - py2);var dx12 = (px1 - px2);var dy12 = (py1 - py2);var denom = ((dy2 * dx1) - (dx2 * dy1));var na = ((dx2 * dy12) - (dy2 * dx12));var nb = ((dx1 * dy12) - (dy1 * dx12));if((denom === 0))
{if(((na === 0)) && ((nb === 0)))
{var ip = thi.ng.geom.core.utils.closest_point_on_segment.call(null,lp,p,q);var iq = thi.ng.geom.core.utils.closest_point_on_segment.call(null,lq,p,q);if((thi.ng.common.math.core.delta_EQ_.call(null,ip,lp)) || (thi.ng.common.math.core.delta_EQ_.call(null,iq,lq)))
{return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"coincident","coincident",4356905136),new cljs.core.Keyword(null,"p","p",1013904354),ip,new cljs.core.Keyword(null,"q","q",1013904355),iq], null);
} else
{return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"coincident-no-intersect","coincident-no-intersect",1806876596),new cljs.core.Keyword(null,"p","p",1013904354),ip,new cljs.core.Keyword(null,"q","q",1013904355),iq], null);
}
} else
{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"parallel","parallel",2185306489)], null);
}
} else
{var ua = (na / denom);var ub = (nb / denom);var i = thi.ng.geom.core.mix.call(null,p,q,ua);if(((ua >= 0.0)) && ((ua <= 1.0)) && ((ub >= 0.0)) && ((ub <= 1.0)))
{return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"intersect","intersect",1516918929),new cljs.core.Keyword(null,"p","p",1013904354),i,new cljs.core.Keyword(null,"ua","ua",1013907966),ua,new cljs.core.Keyword(null,"ub","ub",1013907967),ub], null);
} else
{return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"intersect-outside","intersect-outside",606528105),new cljs.core.Keyword(null,"p","p",1013904354),i,new cljs.core.Keyword(null,"ua","ua",1013907966),ua,new cljs.core.Keyword(null,"ub","ub",1013907967),ub], null);
}
}
});
thi.ng.geom.core.intersect.intersect_plane_plane_QMARK_ = (function intersect_plane_plane_QMARK_(an,aw,bn,bw){if((thi.ng.common.math.core.delta_EQ_.call(null,aw,bw,thi.ng.common.math.core._STAR_eps_STAR_)) || (thi.ng.common.math.core.delta_EQ_.call(null,an,bn,thi.ng.common.math.core._STAR_eps_STAR_)))
{return null;
} else
{var od = thi.ng.geom.core.dot.call(null,an,bn);var det = (1 / ((od * od) + -1));var u = (((bw * od) + (- aw)) * det);var v = (((aw * od) + (- bw)) * det);return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"p","p",1013904354),thi.ng.geom.core.madd.call(null,an,u,thi.ng.geom.core._STAR_.call(null,bn,v)),new cljs.core.Keyword(null,"dir","dir",1014003711),thi.ng.geom.core.utils.ortho_normal.call(null,an,bn)], null);
}
});
thi.ng.geom.core.intersect.intersect_ray_plane_QMARK_ = (function intersect_ray_plane_QMARK_(rp,dir,n,w){var dp = thi.ng.geom.core.dot.call(null,n,dir);var dn = (thi.ng.geom.core.dot.call(null,n,rp) - w);if(thi.ng.common.math.core.delta_EQ_.call(null,0.0,dp,thi.ng.common.math.core._STAR_eps_STAR_))
{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1017479852),(((dn === 0))?new cljs.core.Keyword(null,"on-plane","on-plane",1428540512):new cljs.core.Keyword(null,"parallel","parallel",2185306489))], null);
} else
{var du = (- (dn / dp));var i = thi.ng.geom.core.madd.call(null,dir,du,rp);if(thi.ng.common.math.core.in_range_QMARK_.call(null,0.0,1.0,du))
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"intersect","intersect",1516918929),new cljs.core.Keyword(null,"p","p",1013904354),i], null);
} else
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"intersect-outside","intersect-outside",606528105),new cljs.core.Keyword(null,"p","p",1013904354),i], null);
}
}
});
/**
* Computes sum((a-b)*c), where a, b, c are 3D vectors.
*/
thi.ng.geom.core.intersect.subdot = (function subdot(a,b,c){var d = thi.ng.geom.core.subm.call(null,a,b,c);return ((d.call(null,0) + d.call(null,1)) + d.call(null,2));
});
/**
* Takes a transformation fn and the 4 delta vectors between tetra1/tetra2.
* Returns 2-elem vec of [bitmask affine-coords].
*/
thi.ng.geom.core.intersect.face_a = (function face_a(f,deltas){var aff = cljs.core.mapv.call(null,f,deltas);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((((aff.call(null,0) > 0))?1:0) | (((aff.call(null,1) > 0))?2:0)) | (((aff.call(null,2) > 0))?4:0)) | (((aff.call(null,3) > 0))?8:0)),aff], null);
});
/**
* Takes the 4 delta vectors between tetra2/tetra1 and a normal.
* Returns true if all dot products are positive.
*/
thi.ng.geom.core.intersect.face_b1_QMARK_ = (function face_b1_QMARK_(deltas,n){return cljs.core.every_QMARK_.call(null,(function (p1__10634_SHARP_){return (thi.ng.geom.core.dot.call(null,p1__10634_SHARP_,n) > 0);
}),deltas);
});
/**
* Like face-b1?, but optimized for last face of tetrahedron.
*/
thi.ng.geom.core.intersect.face_b2_QMARK_ = (function face_b2_QMARK_(verts,refv,n){return cljs.core.every_QMARK_.call(null,(function (p1__10635_SHARP_){return (thi.ng.geom.core.intersect.subdot.call(null,p1__10635_SHARP_,refv,n) > 0);
}),verts);
});
/**
* Takes 2 bitmasks and edge flags, returns true if there's a
* separating plane between the faces shared by that edge.
*/
thi.ng.geom.core.intersect.edge_a = (function edge_a(ma,mb,ea,eb){var xa = (ma & (ma ^ mb));var xb = (mb & (xa ^ mb));var edge = ((function (xa,xb){
return (function (a,b,i,j){var cp = ((ea.call(null,i) * eb.call(null,j)) - (ea.call(null,j) * eb.call(null,i)));return (((cp > 0)) && (((xa | a) > 0)) && (((xb | b) > 0))) || (((cp < 0)) && (((xa | b) > 0)) && (((xb | a) > 0)));
});})(xa,xb))
;return !((cljs.core.not_EQ_.call(null,15,(ma | mb))) || (edge.call(null,1,2,1,0)) || (edge.call(null,1,4,2,0)) || (edge.call(null,1,8,3,0)) || (edge.call(null,2,4,2,1)) || (edge.call(null,2,8,3,1)) || (edge.call(null,4,8,3,2)));
});
/**
* Lazy edge evaluation. Takes a vector of edges, vector of edge
* points and an edge id. Looks up edge for given id and if not yet
* present constructs it. Returns 2-elem vector of [edges edge].
*/
thi.ng.geom.core.intersect.get_edge = (function get_edge(edges,epoints,id){var e = edges.call(null,id);if(cljs.core.truth_(e))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [edges,e], null);
} else
{var ep = epoints.call(null,id);var e__$1 = thi.ng.geom.core._.call(null,ep.call(null,0),ep.call(null,1));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,edges,id,e__$1),e__$1], null);
}
});
/**
* Takes the 4 delta vectors between the two tetras, edge definitions
* of the 1st tetra, vertices of the 2nd, a reference point of the 1st
* and a seq of specs, each encoding a specific check (either calls to
* face-a* or edge-a). Returns vector of bitmasks or nil if fail early.
*/
thi.ng.geom.core.intersect.check_faces_a = (function check_faces_a(deltas,epoints,verts,p,specs){var masks = cljs.core.PersistentVector.EMPTY;var affine = cljs.core.PersistentVector.EMPTY;var edges = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null,null,null], null);var s = specs;while(true){
if(cljs.core.truth_(s))
{var vec__10642 = cljs.core.first.call(null,s);var f = cljs.core.nth.call(null,vec__10642,0,null);var a = cljs.core.nth.call(null,vec__10642,1,null);var b = cljs.core.nth.call(null,vec__10642,2,null);if((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"f","f",1013904344),f)) || (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"f*","f*",1013907446),f)))
{var vec__10643 = thi.ng.geom.core.intersect.get_edge.call(null,edges,epoints,a);var edges__$1 = cljs.core.nth.call(null,vec__10643,0,null);var ea = cljs.core.nth.call(null,vec__10643,1,null);var vec__10644 = thi.ng.geom.core.intersect.get_edge.call(null,edges__$1,epoints,b);var edges__$2 = cljs.core.nth.call(null,vec__10644,0,null);var eb = cljs.core.nth.call(null,vec__10644,1,null);var n = thi.ng.geom.core.cross.call(null,ea,eb);var vec__10645 = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"f","f",1013904344),f))?thi.ng.geom.core.intersect.face_a.call(null,((function (masks,affine,edges,s,vec__10643,edges__$1,ea,vec__10644,edges__$2,eb,n,vec__10642,f,a,b){
return (function (p1__10636_SHARP_){return thi.ng.geom.core.dot.call(null,p1__10636_SHARP_,n);
});})(masks,affine,edges,s,vec__10643,edges__$1,ea,vec__10644,edges__$2,eb,n,vec__10642,f,a,b))
,deltas):thi.ng.geom.core.intersect.face_a.call(null,((function (masks,affine,edges,s,vec__10643,edges__$1,ea,vec__10644,edges__$2,eb,n,vec__10642,f,a,b){
return (function (p1__10637_SHARP_){return thi.ng.geom.core.intersect.subdot.call(null,p1__10637_SHARP_,p,n);
});})(masks,affine,edges,s,vec__10643,edges__$1,ea,vec__10644,edges__$2,eb,n,vec__10642,f,a,b))
,verts));var m = cljs.core.nth.call(null,vec__10645,0,null);var a__$1 = cljs.core.nth.call(null,vec__10645,1,null);if((m < 15))
{{
var G__10646 = cljs.core.conj.call(null,masks,m);
var G__10647 = cljs.core.conj.call(null,affine,a__$1);
var G__10648 = edges__$2;
var G__10649 = cljs.core.next.call(null,s);
masks = G__10646;
affine = G__10647;
edges = G__10648;
s = G__10649;
continue;
}
} else
{return null;
}
} else
{if(!(thi.ng.geom.core.intersect.edge_a.call(null,masks.call(null,a),masks.call(null,b),affine.call(null,a),affine.call(null,b))))
{{
var G__10650 = masks;
var G__10651 = affine;
var G__10652 = edges;
var G__10653 = cljs.core.next.call(null,s);
masks = G__10650;
affine = G__10651;
edges = G__10652;
s = G__10653;
continue;
}
} else
{return null;
}
}
} else
{return masks;
}
break;
}
});
/**
* Much like check-faces-a, but for 2nd tetra and specs encoding calls to face-b1/2?.
* Returns true if tetras do intersect.
*/
thi.ng.geom.core.intersect.check_faces_b = (function check_faces_b(deltas,epoints,verts,p,specs){var edges = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null,null,null], null);var s = specs;while(true){
if(cljs.core.truth_(s))
{var vec__10657 = cljs.core.first.call(null,s);var f = cljs.core.nth.call(null,vec__10657,0,null);var a = cljs.core.nth.call(null,vec__10657,1,null);var b = cljs.core.nth.call(null,vec__10657,2,null);var vec__10658 = thi.ng.geom.core.intersect.get_edge.call(null,edges,epoints,a);var edges__$1 = cljs.core.nth.call(null,vec__10658,0,null);var ea = cljs.core.nth.call(null,vec__10658,1,null);var vec__10659 = thi.ng.geom.core.intersect.get_edge.call(null,edges__$1,epoints,b);var edges__$2 = cljs.core.nth.call(null,vec__10659,0,null);var eb = cljs.core.nth.call(null,vec__10659,1,null);if(!(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"f","f",1013904344),f))?thi.ng.geom.core.intersect.face_b1_QMARK_.call(null,deltas,thi.ng.geom.core.cross.call(null,ea,eb)):thi.ng.geom.core.intersect.face_b2_QMARK_.call(null,verts,p,thi.ng.geom.core.cross.call(null,ea,eb)))))
{{
var G__10660 = edges__$2;
var G__10661 = cljs.core.next.call(null,s);
edges = G__10660;
s = G__10661;
continue;
}
} else
{return null;
}
} else
{return true;
}
break;
}
});
/**
* Takes 2 seqs of 4 3D points, each defining a tetrahedron. Returns
* true if they intersect. Orientation of points is irrelevant (unlike
* in the original algorithm this implementation is based on).
*/
thi.ng.geom.core.intersect.intersect_tetrahedra_QMARK_ = (function intersect_tetrahedra_QMARK_(p__10664,p__10665){var vec__10668 = p__10664;var pa = cljs.core.nth.call(null,vec__10668,0,null);var pb = cljs.core.nth.call(null,vec__10668,1,null);var pc = cljs.core.nth.call(null,vec__10668,2,null);var pd = cljs.core.nth.call(null,vec__10668,3,null);var p = vec__10668;var vec__10669 = p__10665;var qa = cljs.core.nth.call(null,vec__10669,0,null);var qb = cljs.core.nth.call(null,vec__10669,1,null);var qc = cljs.core.nth.call(null,vec__10669,2,null);var qd = cljs.core.nth.call(null,vec__10669,3,null);var q = vec__10669;var masks = thi.ng.geom.core.intersect.check_faces_a.call(null,cljs.core.map.call(null,((function (vec__10668,pa,pb,pc,pd,p,vec__10669,qa,qb,qc,qd,q){
return (function (p1__10662_SHARP_){return thi.ng.geom.core._.call(null,p1__10662_SHARP_,pa);
});})(vec__10668,pa,pb,pc,pd,p,vec__10669,qa,qb,qc,qd,q))
,q),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pb,pa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pc,pa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pd,pa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pc,pb], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pd,pb], null)], null),q,pb,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f","f",1013904344),0,1], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f","f",1013904344),2,0], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"e","e",1013904343),0,1], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f","f",1013904344),1,2], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"e","e",1013904343),0,2], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"e","e",1013904343),1,2], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f*","f*",1013907446),4,3], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"e","e",1013904343),0,3], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"e","e",1013904343),1,3], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"e","e",1013904343),2,3], null)], null));if(cljs.core.truth_(masks))
{var or__4953__auto__ = cljs.core.not_EQ_.call(null,15,cljs.core.reduce.call(null,cljs.core.bit_or,masks));if(or__4953__auto__)
{return or__4953__auto__;
} else
{return thi.ng.geom.core.intersect.check_faces_b.call(null,cljs.core.map.call(null,((function (or__4953__auto__,masks,vec__10668,pa,pb,pc,pd,p,vec__10669,qa,qb,qc,qd,q){
return (function (p1__10663_SHARP_){return thi.ng.geom.core._.call(null,p1__10663_SHARP_,qa);
});})(or__4953__auto__,masks,vec__10668,pa,pb,pc,pd,p,vec__10669,qa,qb,qc,qd,q))
,p),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qb,qa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qc,qa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qd,qa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qc,qb], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qd,qb], null)], null),p,qb,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f","f",1013904344),0,1], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f","f",1013904344),2,0], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f","f",1013904344),1,2], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f*","f*",1013907446),4,3], null)], null));
}
} else
{return null;
}
});
