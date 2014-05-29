// Compiled by ClojureScript 0.0-2202
goog.provide('thi.ng.geom.types.utils');
goog.require('cljs.core');
goog.require('thi.ng.geom.core.vector');
goog.require('thi.ng.geom.types');
goog.require('thi.ng.geom.core.vector');
goog.require('thi.ng.geom.core.vector');
goog.require('thi.ng.geom.core.utils');
goog.require('thi.ng.geom.core.utils');
thi.ng.geom.types.utils.bounding_rect = (function bounding_rect(points){var vec__10822 = thi.ng.geom.core.utils.bounding_rect.call(null,points);var p = cljs.core.nth.call(null,vec__10822,0,null);var size = cljs.core.nth.call(null,vec__10822,1,null);if(cljs.core.truth_(p))
{return (new thi.ng.geom.types.Rect2(p,size));
} else
{return null;
}
});
thi.ng.geom.types.utils.bounding_box = (function bounding_box(points){var vec__10824 = thi.ng.geom.core.utils.bounding_box.call(null,points);var p = cljs.core.nth.call(null,vec__10824,0,null);var size = cljs.core.nth.call(null,vec__10824,1,null);if(cljs.core.truth_(p))
{return (new thi.ng.geom.types.AABB(p,size));
} else
{return null;
}
});
thi.ng.geom.types.utils.bounding_circle = (function() {
var bounding_circle = null;
var bounding_circle__1 = (function (points){return bounding_circle.call(null,thi.ng.geom.core.utils.centroid.call(null,points),points);
});
var bounding_circle__2 = (function (c,r_or_points){var vec__10826 = thi.ng.geom.core.utils.radial_bounds.call(null,thi.ng.geom.core.vector.vec2,c,r_or_points);var c__$1 = cljs.core.nth.call(null,vec__10826,0,null);var r = cljs.core.nth.call(null,vec__10826,1,null);return (new thi.ng.geom.types.Circle2(c__$1,r));
});
bounding_circle = function(c,r_or_points){
switch(arguments.length){
case 1:
return bounding_circle__1.call(this,c);
case 2:
return bounding_circle__2.call(this,c,r_or_points);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bounding_circle.cljs$core$IFn$_invoke$arity$1 = bounding_circle__1;
bounding_circle.cljs$core$IFn$_invoke$arity$2 = bounding_circle__2;
return bounding_circle;
})()
;
thi.ng.geom.types.utils.bounding_sphere = (function() {
var bounding_sphere = null;
var bounding_sphere__1 = (function (points){return bounding_sphere.call(null,thi.ng.geom.core.utils.centroid.call(null,points),points);
});
var bounding_sphere__2 = (function (c,r_or_points){var vec__10828 = thi.ng.geom.core.utils.radial_bounds.call(null,thi.ng.geom.core.vector.vec3,c,r_or_points);var c__$1 = cljs.core.nth.call(null,vec__10828,0,null);var r = cljs.core.nth.call(null,vec__10828,1,null);return (new thi.ng.geom.types.Sphere(c__$1,r));
});
bounding_sphere = function(c,r_or_points){
switch(arguments.length){
case 1:
return bounding_sphere__1.call(this,c);
case 2:
return bounding_sphere__2.call(this,c,r_or_points);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bounding_sphere.cljs$core$IFn$_invoke$arity$1 = bounding_sphere__1;
bounding_sphere.cljs$core$IFn$_invoke$arity$2 = bounding_sphere__2;
return bounding_sphere;
})()
;
