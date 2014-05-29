// Compiled by ClojureScript 0.0-2202
goog.provide('thi.ng.geom.mesh.csg');
goog.require('cljs.core');
goog.require('thi.ng.common.math.core');
goog.require('thi.ng.geom.core.vector');
goog.require('thi.ng.geom.plane');
goog.require('thi.ng.geom.types.utils');
goog.require('thi.ng.geom.core');
goog.require('thi.ng.geom.core.vector');
goog.require('thi.ng.geom.gmesh');
goog.require('thi.ng.geom.core.vector');
goog.require('thi.ng.common.math.core');
goog.require('thi.ng.geom.gmesh');
goog.require('thi.ng.common.data.core');
goog.require('thi.ng.geom.core');
goog.require('thi.ng.geom.types.utils');
goog.require('thi.ng.common.math.core');
goog.require('thi.ng.geom.plane');
goog.require('thi.ng.common.data.core');

/**
* @constructor
*/
thi.ng.geom.mesh.csg.CSGPolygon = (function (plane,vertices,shared,bsphere){
this.plane = plane;
this.vertices = vertices;
this.shared = shared;
this.bsphere = bsphere;
})
thi.ng.geom.mesh.csg.CSGPolygon.cljs$lang$type = true;
thi.ng.geom.mesh.csg.CSGPolygon.cljs$lang$ctorStr = "thi.ng.geom.mesh.csg/CSGPolygon";
thi.ng.geom.mesh.csg.CSGPolygon.cljs$lang$ctorPrWriter = (function (this__5520__auto__,writer__5521__auto__,opt__5522__auto__){return cljs.core._write.call(null,writer__5521__auto__,"thi.ng.geom.mesh.csg/CSGPolygon");
});
thi.ng.geom.mesh.csg.CSGPolygon.prototype.thi$ng$geom$core$PFlip$ = true;
thi.ng.geom.mesh.csg.CSGPolygon.prototype.thi$ng$geom$core$PFlip$flip$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new thi.ng.geom.mesh.csg.CSGPolygon(thi.ng.geom.core.flip.call(null,self__.plane),cljs.core.reverse.call(null,self__.vertices),self__.shared,self__.bsphere));
});
thi.ng.geom.mesh.csg.CSGPolygon.prototype.thi$ng$geom$core$PBoundingSphere$ = true;
thi.ng.geom.mesh.csg.CSGPolygon.prototype.thi$ng$geom$core$PBoundingSphere$bounding_sphere$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.bsphere))
{return self__.bsphere;
} else
{self__.bsphere = thi.ng.geom.types.utils.bounding_sphere.call(null,self__.vertices);
return self__.bsphere;
}
});
thi.ng.geom.mesh.csg.__GT_CSGPolygon = (function __GT_CSGPolygon(plane,vertices,shared,bsphere){return (new thi.ng.geom.mesh.csg.CSGPolygon(plane,vertices,shared,bsphere));
});
thi.ng.geom.mesh.csg.compute_split_types = (function compute_split_types(n,w,vertices){var ieps = (- thi.ng.common.math.core._STAR_eps_STAR_);var ptype = 0;var types = cljs.core.PersistentVector.EMPTY;var vertices__$1 = vertices;while(true){
if(cljs.core.truth_(vertices__$1))
{var t = (thi.ng.geom.core.dot.call(null,n,cljs.core.first.call(null,vertices__$1)) - w);var pt = (((t < ieps))?2:(((t > thi.ng.common.math.core._STAR_eps_STAR_))?1:0));{
var G__11154 = (ptype | pt);
var G__11155 = cljs.core.conj.call(null,types,pt);
var G__11156 = cljs.core.next.call(null,vertices__$1);
ptype = G__11154;
types = G__11155;
vertices__$1 = G__11156;
continue;
}
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ptype,types], null);
}
break;
}
});
thi.ng.geom.mesh.csg.split_poly_STAR_ = (function split_poly_STAR_(n,w,vertices,types){var nv = cljs.core.count.call(null,vertices);var f = cljs.core.PersistentVector.EMPTY;var b = cljs.core.PersistentVector.EMPTY;var i = 0;while(true){
if((i < nv))
{var j = cljs.core.rem.call(null,(i + 1),nv);var vi = cljs.core.nth.call(null,vertices,i);var ti = types.call(null,i);var f__$1 = (((ti === 2))?f:cljs.core.conj.call(null,f,vi));var b__$1 = (((ti === 1))?b:cljs.core.conj.call(null,b,vi));if((3 === (ti | types.call(null,j))))
{var vj = cljs.core.nth.call(null,vertices,j);var v = thi.ng.geom.core.mix.call(null,vi,vj,((w - thi.ng.geom.core.dot.call(null,n,vi)) / thi.ng.geom.core.dot.call(null,n,thi.ng.geom.core._.call(null,vj,vi))));{
var G__11157 = cljs.core.conj.call(null,f__$1,v);
var G__11158 = cljs.core.conj.call(null,b__$1,v);
var G__11159 = (i + 1);
f = G__11157;
b = G__11158;
i = G__11159;
continue;
}
} else
{{
var G__11160 = f__$1;
var G__11161 = b__$1;
var G__11162 = (i + 1);
f = G__11160;
b = G__11161;
i = G__11162;
continue;
}
}
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,b], null);
}
break;
}
});
/**
* Takes a plane and splits the given polygon with it. Returns a 4-element vector
* of classified sub-shapes: [coplanar-front coplanar-back front back].
*/
thi.ng.geom.mesh.csg.split_poly = (function split_poly(p__11163,poly,state){var map__11168 = p__11163;var map__11168__$1 = ((cljs.core.seq_QMARK_.call(null,map__11168))?cljs.core.apply.call(null,cljs.core.hash_map,map__11168):map__11168);var w = cljs.core.get.call(null,map__11168__$1,new cljs.core.Keyword(null,"w","w",1013904361));var n = cljs.core.get.call(null,map__11168__$1,new cljs.core.Keyword(null,"n","n",1013904352));var s = thi.ng.geom.core.bounding_sphere.call(null,poly);var r = (new cljs.core.Keyword(null,"r","r",1013904356).cljs$core$IFn$_invoke$arity$1(s) + thi.ng.common.math.core._STAR_eps_STAR_);var d = (thi.ng.geom.core.dot.call(null,n,new cljs.core.Keyword(null,"p","p",1013904354).cljs$core$IFn$_invoke$arity$1(s)) - w);if((d > r))
{return cljs.core.assoc.call(null,state,2,cljs.core.conj.call(null,state.call(null,2),poly));
} else
{if((d < (- r)))
{return cljs.core.assoc.call(null,state,3,cljs.core.conj.call(null,state.call(null,3),poly));
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{var vec__11169 = thi.ng.geom.mesh.csg.compute_split_types.call(null,n,w,poly.vertices);var ptype = cljs.core.nth.call(null,vec__11169,0,null);var types = cljs.core.nth.call(null,vec__11169,1,null);var G__11170 = ptype;if(cljs.core._EQ_.call(null,3,G__11170))
{var vec__11171 = thi.ng.geom.mesh.csg.split_poly_STAR_.call(null,n,w,poly.vertices,types);var f = cljs.core.nth.call(null,vec__11171,0,null);var b = cljs.core.nth.call(null,vec__11171,1,null);return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [state.call(null,0),state.call(null,1),(((cljs.core.count.call(null,f) >= 3))?cljs.core.conj.call(null,state.call(null,2),thi.ng.geom.mesh.csg.csg_polygon.call(null,f,poly.shared)):f),(((cljs.core.count.call(null,b) >= 3))?cljs.core.conj.call(null,state.call(null,3),thi.ng.geom.mesh.csg.csg_polygon.call(null,b,poly.shared)):b)], null);
} else
{if(cljs.core._EQ_.call(null,2,G__11170))
{return cljs.core.assoc.call(null,state,3,cljs.core.conj.call(null,state.call(null,3),poly));
} else
{if(cljs.core._EQ_.call(null,1,G__11170))
{return cljs.core.assoc.call(null,state,2,cljs.core.conj.call(null,state.call(null,2),poly));
} else
{if(cljs.core._EQ_.call(null,0,G__11170))
{if((thi.ng.geom.core.dot.call(null,n,new cljs.core.Keyword(null,"n","n",1013904352).cljs$core$IFn$_invoke$arity$1(poly.plane)) > 0))
{return cljs.core.assoc.call(null,state,0,cljs.core.conj.call(null,state.call(null,0),poly));
} else
{return cljs.core.assoc.call(null,state,1,cljs.core.conj.call(null,state.call(null,1),poly));
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(ptype)].join('')));
} else
{return null;
}
}
}
}
}
} else
{return null;
}
}
}
});
/**
* Uses a CSG node's plane to recursively clip the given seq of polygons.
* Returns a flat seq of polygons classified as in-front of the plane
* or the original seq if no clipping plane is available.
*/
thi.ng.geom.mesh.csg.clip_polygons = (function clip_polygons(p__11172,ps){var map__11175 = p__11172;var map__11175__$1 = ((cljs.core.seq_QMARK_.call(null,map__11175))?cljs.core.apply.call(null,cljs.core.hash_map,map__11175):map__11175);var node = map__11175__$1;var back = cljs.core.get.call(null,map__11175__$1,new cljs.core.Keyword(null,"back","back",1016920153));var front = cljs.core.get.call(null,map__11175__$1,new cljs.core.Keyword(null,"front","front",1111609755));var plane = cljs.core.get.call(null,map__11175__$1,new cljs.core.Keyword(null,"plane","plane",1120652750));if(cljs.core.not.call(null,plane))
{return ps;
} else
{var vec__11176 = cljs.core.reduce.call(null,((function (map__11175,map__11175__$1,node,back,front,plane){
return (function (state,poly){return thi.ng.geom.mesh.csg.split_poly.call(null,plane,poly,state);
});})(map__11175,map__11175__$1,node,back,front,plane))
,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY], null),ps);var cp_front = cljs.core.nth.call(null,vec__11176,0,null);var cp_back = cljs.core.nth.call(null,vec__11176,1,null);var new_front = cljs.core.nth.call(null,vec__11176,2,null);var new_back = cljs.core.nth.call(null,vec__11176,3,null);var new_front__$1 = cljs.core.concat.call(null,new_front,cp_front);var new_front__$2 = (cljs.core.truth_(front)?clip_polygons.call(null,front,new_front__$1):new_front__$1);var new_back__$1 = (cljs.core.truth_(back)?clip_polygons.call(null,back,cljs.core.concat.call(null,new_back,cp_back)):cljs.core.PersistentVector.EMPTY);return cljs.core.concat.call(null,new_front__$2,new_back__$1);
}
});
/**
* Returns a lazy seq of all polygons of the given CSG node and its children.
*/
thi.ng.geom.mesh.csg.all_polygons = (function all_polygons(p__11177){var map__11179 = p__11177;var map__11179__$1 = ((cljs.core.seq_QMARK_.call(null,map__11179))?cljs.core.apply.call(null,cljs.core.hash_map,map__11179):map__11179);var node = map__11179__$1;var back = cljs.core.get.call(null,map__11179__$1,new cljs.core.Keyword(null,"back","back",1016920153));var front = cljs.core.get.call(null,map__11179__$1,new cljs.core.Keyword(null,"front","front",1111609755));return cljs.core.concat.call(null,new cljs.core.Keyword(null,"polygons","polygons",1575699947).cljs$core$IFn$_invoke$arity$1(node),(cljs.core.truth_(front)?all_polygons.call(null,front):null),(cljs.core.truth_(back)?all_polygons.call(null,back):null));
});
thi.ng.geom.mesh.csg.invert = (function invert(p__11180){var map__11182 = p__11180;var map__11182__$1 = ((cljs.core.seq_QMARK_.call(null,map__11182))?cljs.core.apply.call(null,cljs.core.hash_map,map__11182):map__11182);var node = map__11182__$1;var plane = cljs.core.get.call(null,map__11182__$1,new cljs.core.Keyword(null,"plane","plane",1120652750));var back = cljs.core.get.call(null,map__11182__$1,new cljs.core.Keyword(null,"back","back",1016920153));var front = cljs.core.get.call(null,map__11182__$1,new cljs.core.Keyword(null,"front","front",1111609755));return cljs.core.assoc.call(null,node,new cljs.core.Keyword(null,"polygons","polygons",1575699947),cljs.core.mapv.call(null,thi.ng.geom.core.flip,new cljs.core.Keyword(null,"polygons","polygons",1575699947).cljs$core$IFn$_invoke$arity$1(node)),new cljs.core.Keyword(null,"plane","plane",1120652750),(cljs.core.truth_(plane)?thi.ng.geom.core.flip.call(null,plane):null),new cljs.core.Keyword(null,"front","front",1111609755),(cljs.core.truth_(back)?invert.call(null,back):null),new cljs.core.Keyword(null,"back","back",1016920153),(cljs.core.truth_(front)?invert.call(null,front):null));
});
/**
* Clips the polygons of the first node with the ones from the second.
* Returns the updated node.
*/
thi.ng.geom.mesh.csg.clip = (function clip(p__11183,b){var map__11185 = p__11183;var map__11185__$1 = ((cljs.core.seq_QMARK_.call(null,map__11185))?cljs.core.apply.call(null,cljs.core.hash_map,map__11185):map__11185);var a = map__11185__$1;var back = cljs.core.get.call(null,map__11185__$1,new cljs.core.Keyword(null,"back","back",1016920153));var front = cljs.core.get.call(null,map__11185__$1,new cljs.core.Keyword(null,"front","front",1111609755));return cljs.core.assoc.call(null,a,new cljs.core.Keyword(null,"polygons","polygons",1575699947),thi.ng.geom.mesh.csg.clip_polygons.call(null,b,new cljs.core.Keyword(null,"polygons","polygons",1575699947).cljs$core$IFn$_invoke$arity$1(a)),new cljs.core.Keyword(null,"front","front",1111609755),(cljs.core.truth_(front)?clip.call(null,front,b):null),new cljs.core.Keyword(null,"back","back",1016920153),(cljs.core.truth_(back)?clip.call(null,back,b):null));
});
/**
* Creates a CSG polygon map from the given vertices and
* computes a plane definition using the first 3 vertices.
*/
thi.ng.geom.mesh.csg.csg_polygon = (function() {
var csg_polygon = null;
var csg_polygon__1 = (function (vertices){return csg_polygon.call(null,vertices,null);
});
var csg_polygon__2 = (function (vertices,shared){return (new thi.ng.geom.mesh.csg.CSGPolygon(thi.ng.geom.plane.plane_from_points.call(null,vertices),cljs.core.vec.call(null,vertices),shared,null));
});
csg_polygon = function(vertices,shared){
switch(arguments.length){
case 1:
return csg_polygon__1.call(this,vertices);
case 2:
return csg_polygon__2.call(this,vertices,shared);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csg_polygon.cljs$core$IFn$_invoke$arity$1 = csg_polygon__1;
csg_polygon.cljs$core$IFn$_invoke$arity$2 = csg_polygon__2;
return csg_polygon;
})()
;
/**
* Creates a new or refines a CSG tree node and recursively
* adds the given polygons to it.
*/
thi.ng.geom.mesh.csg.csg_node = (function() {
var csg_node = null;
var csg_node__1 = (function (polygons){return csg_node.call(null,null,polygons);
});
var csg_node__2 = (function (p__11186,ps){var map__11189 = p__11186;var map__11189__$1 = ((cljs.core.seq_QMARK_.call(null,map__11189))?cljs.core.apply.call(null,cljs.core.hash_map,map__11189):map__11189);var node = map__11189__$1;var back = cljs.core.get.call(null,map__11189__$1,new cljs.core.Keyword(null,"back","back",1016920153));var front = cljs.core.get.call(null,map__11189__$1,new cljs.core.Keyword(null,"front","front",1111609755));var plane = cljs.core.get.call(null,map__11189__$1,new cljs.core.Keyword(null,"plane","plane",1120652750));var polygons = cljs.core.get.call(null,map__11189__$1,new cljs.core.Keyword(null,"polygons","polygons",1575699947));if(cljs.core.seq.call(null,ps))
{var plane__$1 = (function (){var or__4953__auto__ = plane;if(cljs.core.truth_(or__4953__auto__))
{return or__4953__auto__;
} else
{return cljs.core.first.call(null,ps).plane;
}
})();var vec__11190 = cljs.core.reduce.call(null,((function (plane__$1,map__11189,map__11189__$1,node,back,front,plane,polygons){
return (function (state,poly){return thi.ng.geom.mesh.csg.split_poly.call(null,plane__$1,poly,state);
});})(plane__$1,map__11189,map__11189__$1,node,back,front,plane,polygons))
,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY], null),ps);var cp_front = cljs.core.nth.call(null,vec__11190,0,null);var cp_back = cljs.core.nth.call(null,vec__11190,1,null);var new_front = cljs.core.nth.call(null,vec__11190,2,null);var new_back = cljs.core.nth.call(null,vec__11190,3,null);return cljs.core.assoc.call(null,node,new cljs.core.Keyword(null,"plane","plane",1120652750),plane__$1,new cljs.core.Keyword(null,"polygons","polygons",1575699947),cljs.core.concat.call(null,polygons,cp_front,cp_back),new cljs.core.Keyword(null,"front","front",1111609755),((cljs.core.seq.call(null,new_front))?csg_node.call(null,front,new_front):front),new cljs.core.Keyword(null,"back","back",1016920153),((cljs.core.seq.call(null,new_back))?csg_node.call(null,back,new_back):back));
} else
{return node;
}
});
csg_node = function(p__11186,ps){
switch(arguments.length){
case 1:
return csg_node__1.call(this,p__11186);
case 2:
return csg_node__2.call(this,p__11186,ps);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csg_node.cljs$core$IFn$_invoke$arity$1 = csg_node__1;
csg_node.cljs$core$IFn$_invoke$arity$2 = csg_node__2;
return csg_node;
})()
;
thi.ng.geom.mesh.csg.union = (function union(a,b){var a__$1 = thi.ng.geom.mesh.csg.csg_node.call(null,a);var b__$1 = thi.ng.geom.mesh.csg.csg_node.call(null,b);var a__$2 = thi.ng.geom.mesh.csg.clip.call(null,a__$1,b__$1);var b__$2 = thi.ng.geom.mesh.csg.invert.call(null,thi.ng.geom.mesh.csg.clip.call(null,thi.ng.geom.mesh.csg.invert.call(null,thi.ng.geom.mesh.csg.clip.call(null,b__$1,a__$2)),a__$2));return thi.ng.geom.mesh.csg.all_polygons.call(null,thi.ng.geom.mesh.csg.csg_node.call(null,a__$2,thi.ng.geom.mesh.csg.all_polygons.call(null,b__$2)));
});
thi.ng.geom.mesh.csg.subtract = (function subtract(a,b){var b__$1 = thi.ng.geom.mesh.csg.csg_node.call(null,b);var a__$1 = thi.ng.geom.mesh.csg.clip.call(null,thi.ng.geom.mesh.csg.invert.call(null,thi.ng.geom.mesh.csg.csg_node.call(null,a)),b__$1);var b__$2 = thi.ng.geom.mesh.csg.invert.call(null,thi.ng.geom.mesh.csg.clip.call(null,thi.ng.geom.mesh.csg.invert.call(null,thi.ng.geom.mesh.csg.clip.call(null,b__$1,a__$1)),a__$1));return thi.ng.geom.mesh.csg.all_polygons.call(null,thi.ng.geom.mesh.csg.invert.call(null,thi.ng.geom.mesh.csg.csg_node.call(null,a__$1,thi.ng.geom.mesh.csg.all_polygons.call(null,b__$2))));
});
thi.ng.geom.mesh.csg.intersect = (function intersect(a,b){var a__$1 = thi.ng.geom.mesh.csg.invert.call(null,thi.ng.geom.mesh.csg.csg_node.call(null,a));var b__$1 = thi.ng.geom.mesh.csg.invert.call(null,thi.ng.geom.mesh.csg.clip.call(null,thi.ng.geom.mesh.csg.csg_node.call(null,b),a__$1));var a__$2 = thi.ng.geom.mesh.csg.clip.call(null,a__$1,b__$1);var b__$2 = thi.ng.geom.mesh.csg.clip.call(null,b__$1,a__$2);return thi.ng.geom.mesh.csg.all_polygons.call(null,thi.ng.geom.mesh.csg.invert.call(null,thi.ng.geom.mesh.csg.csg_node.call(null,a__$2,thi.ng.geom.mesh.csg.all_polygons.call(null,b__$2))));
});
/**
* Converts a regular Mesh3 into a seq of CSG polygons.
* First calls `compute-face-normals` on mesh if not already present.
*/
thi.ng.geom.mesh.csg.mesh__GT_csg = (function mesh__GT_csg(m){return cljs.core.map.call(null,(function (f){return thi.ng.geom.mesh.csg.csg_polygon.call(null,f,null);
}),thi.ng.geom.core.faces.call(null,m));
});
thi.ng.geom.mesh.csg.csg__GT_mesh = (function csg__GT_mesh(polygons){return thi.ng.geom.core.into.call(null,thi.ng.geom.gmesh.gmesh.call(null),cljs.core.map.call(null,(function (poly){return poly.vertices;
}),polygons));
});
thi.ng.geom.mesh.csg.csg_cone = (function() {
var csg_cone = null;
var csg_cone__4 = (function (s,e,radius,res){return csg_cone.call(null,s,e,radius,radius,res);
});
var csg_cone__5 = (function (s,e,r_south,r_north,res){var dir = thi.ng.geom.core._.call(null,e,s);var az = thi.ng.geom.core.normalize.call(null,dir);var ax = thi.ng.geom.core.normalize.call(null,thi.ng.geom.core.cross.call(null,(((thi.ng.common.math.core.abs.call(null,az.call(null,1)) > 0.5))?thi.ng.geom.core.vector.V3X:thi.ng.geom.core.vector.V3Y),az));var ay = thi.ng.geom.core.normalize.call(null,thi.ng.geom.core.cross.call(null,ax,az));var f = ((function (dir,az,ax,ay){
return (function (stack,i,r){var theta = (thi.ng.common.math.core.TWO_PI * i);var out = thi.ng.geom.core.madd.call(null,ax,Math.cos.call(null,theta),thi.ng.geom.core._STAR_.call(null,ay,Math.sin.call(null,theta)));var pos = thi.ng.geom.core._PLUS_.call(null,s,thi.ng.geom.core._STAR_.call(null,dir,stack),thi.ng.geom.core._STAR_.call(null,out,r));return pos;
});})(dir,az,ax,ay))
;var res__$1 = (1.0 / res);return cljs.core.mapcat.call(null,((function (dir,az,ax,ay,f,res__$1){
return (function (i){var t0 = (i * res__$1);var t1 = ((i + 1) * res__$1);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.mesh.csg.csg_polygon.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,f.call(null,0,t0,r_south),f.call(null,0,t1,r_south)], null)),thi.ng.geom.mesh.csg.csg_polygon.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [f.call(null,0,t1,r_south),f.call(null,0,t0,r_south),f.call(null,1,t0,r_north),f.call(null,1,t1,r_north)], null)),thi.ng.geom.mesh.csg.csg_polygon.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,f.call(null,1,t1,r_north),f.call(null,1,t0,r_north)], null))], null);
});})(dir,az,ax,ay,f,res__$1))
,cljs.core.range.call(null,res__$1));
});
csg_cone = function(s,e,r_south,r_north,res){
switch(arguments.length){
case 4:
return csg_cone__4.call(this,s,e,r_south,r_north);
case 5:
return csg_cone__5.call(this,s,e,r_south,r_north,res);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
csg_cone.cljs$core$IFn$_invoke$arity$4 = csg_cone__4;
csg_cone.cljs$core$IFn$_invoke$arity$5 = csg_cone__5;
return csg_cone;
})()
;
