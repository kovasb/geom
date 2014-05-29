// Compiled by ClojureScript 0.0-2202
goog.provide('thi.ng.geom.gmesh');
goog.require('cljs.core');
goog.require('thi.ng.common.math.core');
goog.require('thi.ng.geom.core.vector');
goog.require('thi.ng.geom.core.matrix');
goog.require('thi.ng.geom.core.utils');
goog.require('clojure.set');
goog.require('thi.ng.geom.types.utils');
goog.require('thi.ng.geom.core');
goog.require('thi.ng.geom.core.utils');
goog.require('clojure.core.reducers');
goog.require('clojure.core.reducers');
goog.require('thi.ng.geom.core.vector');
goog.require('thi.ng.geom.core.vector');
goog.require('clojure.set');
goog.require('thi.ng.common.math.core');
goog.require('thi.ng.geom.types');
goog.require('thi.ng.common.data.core');
goog.require('thi.ng.geom.types');
goog.require('thi.ng.geom.core');
goog.require('thi.ng.geom.types.utils');
goog.require('thi.ng.common.math.core');
goog.require('thi.ng.geom.core.matrix');
goog.require('thi.ng.common.data.core');
thi.ng.geom.gmesh.add_face = (function add_face(p__10830,verts){var map__10834 = p__10830;var map__10834__$1 = ((cljs.core.seq_QMARK_.call(null,map__10834))?cljs.core.apply.call(null,cljs.core.hash_map,map__10834):map__10834);var mesh = map__10834__$1;var faces = cljs.core.get.call(null,map__10834__$1,new cljs.core.Keyword(null,"faces","faces",1111091496));var edges = cljs.core.get.call(null,map__10834__$1,new cljs.core.Keyword(null,"edges","edges",1110261192));var vertices = cljs.core.get.call(null,map__10834__$1,new cljs.core.Keyword(null,"vertices","vertices",3324730219));var f = cljs.core.mapv.call(null,((function (map__10834,map__10834__$1,mesh,faces,edges,vertices){
return (function (p1__10829_SHARP_){return cljs.core.get.call(null,cljs.core.find.call(null,vertices,p1__10829_SHARP_),0,p1__10829_SHARP_);
});})(map__10834,map__10834__$1,mesh,faces,edges,vertices))
,verts);if(((cljs.core.get.call(null,faces,f) == null)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,f),cljs.core.count.call(null,cljs.core.set.call(null,f)))))
{var vertices__$1 = cljs.core.reduce.call(null,((function (f,map__10834,map__10834__$1,mesh,faces,edges,vertices){
return (function (acc,p__10835){var vec__10836 = p__10835;var p = cljs.core.nth.call(null,vec__10836,0,null);var c = cljs.core.nth.call(null,vec__10836,1,null);var n = cljs.core.nth.call(null,vec__10836,2,null);return thi.ng.common.data.core.index_kv.call(null,acc,c,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"next","next",1017282149),n,new cljs.core.Keyword(null,"prev","prev",1017353637),p,new cljs.core.Keyword(null,"f","f",1013904344),f], null));
});})(f,map__10834,map__10834__$1,mesh,faces,edges,vertices))
,vertices,thi.ng.common.data.core.successive_nth.call(null,3,thi.ng.common.data.core.wrap_seq.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.peek.call(null,f)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,f)], null))));var edges__$1 = cljs.core.reduce.call(null,((function (vertices__$1,f,map__10834,map__10834__$1,mesh,faces,edges,vertices){
return (function (acc,pair){return thi.ng.common.data.core.index_kv.call(null,acc,cljs.core.set.call(null,pair),f);
});})(vertices__$1,f,map__10834,map__10834__$1,mesh,faces,edges,vertices))
,edges,thi.ng.common.data.core.successive_nth.call(null,2,cljs.core.conj.call(null,f,cljs.core.first.call(null,f))));return cljs.core.assoc.call(null,mesh,new cljs.core.Keyword(null,"vertices","vertices",3324730219),vertices__$1,new cljs.core.Keyword(null,"edges","edges",1110261192),edges__$1,new cljs.core.Keyword(null,"faces","faces",1111091496),cljs.core.conj.call(null,faces,f));
} else
{return mesh;
}
});
thi.ng.geom.gmesh.vertices_planar_QMARK_ = (function vertices_planar_QMARK_(p__10838){var vec__10840 = p__10838;var a = cljs.core.nth.call(null,vec__10840,0,null);var b = cljs.core.nth.call(null,vec__10840,1,null);var c = cljs.core.nth.call(null,vec__10840,2,null);var verts = vec__10840;var or__4953__auto__ = (cljs.core.count.call(null,verts) < 4);if(or__4953__auto__)
{return or__4953__auto__;
} else
{var n = thi.ng.geom.core.utils.ortho_normal.call(null,a,b,c);return cljs.core.every_QMARK_.call(null,((function (n,or__4953__auto__,vec__10840,a,b,c,verts){
return (function (p1__10837_SHARP_){return thi.ng.common.math.core.delta_EQ_.call(null,n,thi.ng.geom.core.utils.ortho_normal.call(null,p1__10837_SHARP_));
});})(n,or__4953__auto__,vec__10840,a,b,c,verts))
,thi.ng.common.data.core.successive_nth.call(null,3,cljs.core.conj.call(null,cljs.core.rest.call(null,verts),a)));
}
});
thi.ng.geom.gmesh.face_neighbors_shared_edges = (function face_neighbors_shared_edges(p__10841,f){var map__10843 = p__10841;var map__10843__$1 = ((cljs.core.seq_QMARK_.call(null,map__10843))?cljs.core.apply.call(null,cljs.core.hash_map,map__10843):map__10843);var edges = cljs.core.get.call(null,map__10843__$1,new cljs.core.Keyword(null,"edges","edges",1110261192));return cljs.core.reduce.call(null,((function (map__10843,map__10843__$1,edges){
return (function (acc,pair){return cljs.core.into.call(null,acc,cljs.core.disj.call(null,edges.call(null,cljs.core.set.call(null,pair)),f));
});})(map__10843,map__10843__$1,edges))
,cljs.core.PersistentVector.EMPTY,thi.ng.common.data.core.successive_nth.call(null,2,cljs.core.conj.call(null,f,cljs.core.first.call(null,f))));
});
thi.ng.geom.gmesh.vertex_neighbors_STAR_ = (function vertex_neighbors_STAR_(p__10844,v){var map__10846 = p__10844;var map__10846__$1 = ((cljs.core.seq_QMARK_.call(null,map__10846))?cljs.core.apply.call(null,cljs.core.hash_map,map__10846):map__10846);var vertices = cljs.core.get.call(null,map__10846__$1,new cljs.core.Keyword(null,"vertices","vertices",3324730219));return clojure.set.union.call(null,thi.ng.common.data.core.value_set.call(null,new cljs.core.Keyword(null,"next","next",1017282149),vertices,v),thi.ng.common.data.core.value_set.call(null,new cljs.core.Keyword(null,"prev","prev",1017353637),vertices,v));
});
thi.ng.geom.gmesh.vertex_valence_STAR_ = (function vertex_valence_STAR_(mesh,v){return (cljs.core.count.call(null,cljs.core.get.call(null,new cljs.core.Keyword(null,"vertices","vertices",3324730219).cljs$core$IFn$_invoke$arity$1(mesh),v)) + 1);
});
thi.ng.geom.gmesh.vertex_faces_STAR_ = (function vertex_faces_STAR_(mesh,v){return thi.ng.common.data.core.value_set.call(null,new cljs.core.Keyword(null,"f","f",1013904344),new cljs.core.Keyword(null,"vertices","vertices",3324730219).cljs$core$IFn$_invoke$arity$1(mesh),v);
});
thi.ng.geom.gmesh.remove_vertex_STAR_ = (function remove_vertex_STAR_(mesh,v){if(cljs.core.truth_(cljs.core.find.call(null,new cljs.core.Keyword(null,"vertices","vertices",3324730219).cljs$core$IFn$_invoke$arity$1(mesh),v)))
{return cljs.core.reduce.call(null,thi.ng.geom.core.remove_face,mesh,thi.ng.geom.gmesh.vertex_faces_STAR_.call(null,mesh,v));
} else
{return mesh;
}
});
thi.ng.geom.gmesh.replace_vertex_STAR_ = (function() {
var replace_vertex_STAR_ = null;
var replace_vertex_STAR___3 = (function (mesh,v,v2){var vfaces = thi.ng.geom.gmesh.vertex_faces_STAR_.call(null,mesh,v);return replace_vertex_STAR_.call(null,cljs.core.reduce.call(null,thi.ng.geom.core.remove_face,mesh,vfaces),v,v2,vfaces);
});
var replace_vertex_STAR___4 = (function (mesh,v,v2,faces){return cljs.core.reduce.call(null,(function (p1__10847_SHARP_,p2__10848_SHARP_){return thi.ng.geom.gmesh.add_face.call(null,p1__10847_SHARP_,cljs.core.replace.call(null,new cljs.core.PersistentArrayMap.fromArray([v,v2], true, false),p2__10848_SHARP_));
}),mesh,faces);
});
replace_vertex_STAR_ = function(mesh,v,v2,faces){
switch(arguments.length){
case 3:
return replace_vertex_STAR___3.call(this,mesh,v,v2);
case 4:
return replace_vertex_STAR___4.call(this,mesh,v,v2,faces);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
replace_vertex_STAR_.cljs$core$IFn$_invoke$arity$3 = replace_vertex_STAR___3;
replace_vertex_STAR_.cljs$core$IFn$_invoke$arity$4 = replace_vertex_STAR___4;
return replace_vertex_STAR_;
})()
;
thi.ng.geom.gmesh.merge_vertices_STAR_ = (function merge_vertices_STAR_(mesh,a,b){if(cljs.core.truth_(thi.ng.geom.gmesh.vertex_neighbors_STAR_.call(null,mesh,a).call(null,b)))
{var fa = thi.ng.geom.gmesh.vertex_faces_STAR_.call(null,mesh,a);var fb = thi.ng.geom.gmesh.vertex_faces_STAR_.call(null,mesh,b);var ab_isec = clojure.set.intersection.call(null,fa,fb);var a_xor = clojure.set.difference.call(null,fa,ab_isec);var b_xor = clojure.set.difference.call(null,fb,ab_isec);var mp = thi.ng.geom.core.mix.call(null,a,b);return thi.ng.geom.gmesh.replace_vertex_STAR_.call(null,thi.ng.geom.gmesh.replace_vertex_STAR_.call(null,cljs.core.reduce.call(null,thi.ng.geom.core.remove_face,mesh,clojure.set.union.call(null,ab_isec,a_xor,b_xor)),a,mp,a_xor),b,mp,b_xor);
} else
{return mesh;
}
});
/**
* Builds a new 3d mesh data structure and (optionally) populates it with
* the given items (a seq of existing meshes and/or faces). Faces are defined
* as vectors of their vertices.
*/
thi.ng.geom.gmesh.gmesh = (function gmesh(){return thi.ng.geom.types.map__GT_GMesh.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"vertices","vertices",3324730219),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"edges","edges",1110261192),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"fnormals","fnormals",519550136),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"vnormals","vnormals",2634711720),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"normals","normals",3141522398),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"faces","faces",1111091496),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"attribs","attribs",4634025563),cljs.core.PersistentArrayMap.EMPTY], null));
});
thi.ng.geom.gmesh.into_mesh = (function() {
var into_mesh = null;
var into_mesh__1 = (function (mesh_or_faces){return into_mesh.call(null,thi.ng.geom.gmesh.gmesh.call(null),mesh_or_faces);
});
var into_mesh__2 = (function (mesh,mesh_or_faces){return cljs.core.reduce.call(null,thi.ng.geom.gmesh.add_face,mesh,(((function (){var G__10850 = mesh_or_faces;if(G__10850)
{var bit__5603__auto__ = null;if(cljs.core.truth_((function (){var or__4953__auto__ = bit__5603__auto__;if(cljs.core.truth_(or__4953__auto__))
{return or__4953__auto__;
} else
{return G__10850.thi$ng$geom$core$PFaceAccess$;
}
})()))
{return true;
} else
{if((!G__10850.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,thi.ng.geom.core.PFaceAccess,G__10850);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,thi.ng.geom.core.PFaceAccess,G__10850);
}
})())?thi.ng.geom.core.faces.call(null,mesh_or_faces):mesh_or_faces));
});
into_mesh = function(mesh,mesh_or_faces){
switch(arguments.length){
case 1:
return into_mesh__1.call(this,mesh);
case 2:
return into_mesh__2.call(this,mesh,mesh_or_faces);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
into_mesh.cljs$core$IFn$_invoke$arity$1 = into_mesh__1;
into_mesh.cljs$core$IFn$_invoke$arity$2 = into_mesh__2;
return into_mesh;
})()
;
/**
* @param {...*} var_args
*/
thi.ng.geom.gmesh.lathe_mesh = (function() { 
var lathe_mesh__delegate = function (points,res,phi,rot_fn,p__10852){var vec__10860 = p__10852;var face_fn = cljs.core.nth.call(null,vec__10860,0,null);var strips = cljs.core.mapv.call(null,((function (vec__10860,face_fn){
return (function (i){var theta = (i * phi);return cljs.core.mapv.call(null,((function (theta,vec__10860,face_fn){
return (function (p1__10851_SHARP_){var p = rot_fn.call(null,p1__10851_SHARP_,theta);if(thi.ng.common.math.core.delta_EQ_.call(null,p,p1__10851_SHARP_,thi.ng.common.math.core._STAR_eps_STAR_))
{return p1__10851_SHARP_;
} else
{return p;
}
});})(theta,vec__10860,face_fn))
,points);
});})(vec__10860,face_fn))
,cljs.core.butlast.call(null,thi.ng.common.math.core.norm_range.call(null,res)));var strips__$1 = ((thi.ng.common.math.core.delta_EQ_.call(null,phi,thi.ng.common.math.core.TWO_PI))?cljs.core.conj.call(null,strips,cljs.core.first.call(null,strips)):strips);var make_face = ((function (strips,strips__$1,vec__10860,face_fn){
return (function (p__10861,p__10862){var vec__10863 = p__10861;var a1 = cljs.core.nth.call(null,vec__10863,0,null);var a2 = cljs.core.nth.call(null,vec__10863,1,null);var vec__10864 = p__10862;var b1 = cljs.core.nth.call(null,vec__10864,0,null);var b2 = cljs.core.nth.call(null,vec__10864,1,null);var f = (((cljs.core.count.call(null,cljs.core.PersistentHashSet.fromArray.call(null,[a1,a2,b1,b2],true)) < 3))?null:((cljs.core._EQ_.call(null,a1,b1))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [b1,b2,a2], null):((cljs.core._EQ_.call(null,a2,b2))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [b1,a2,a1], null):((new cljs.core.Keyword(null,"default","default",2558708147))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [b1,b2,a2,a1], null):null))));if(cljs.core.truth_((function (){var and__4941__auto__ = f;if(cljs.core.truth_(and__4941__auto__))
{return face_fn;
} else
{return and__4941__auto__;
}
})()))
{return face_fn.call(null,f);
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [f], null);
}
});})(strips,strips__$1,vec__10860,face_fn))
;return thi.ng.geom.gmesh.into_mesh.call(null,thi.ng.geom.gmesh.gmesh.call(null),cljs.core.mapcat.call(null,((function (strips,strips__$1,make_face,vec__10860,face_fn){
return (function (p__10865){var vec__10866 = p__10865;var sa = cljs.core.nth.call(null,vec__10866,0,null);var sb = cljs.core.nth.call(null,vec__10866,1,null);return cljs.core.mapcat.call(null,make_face,thi.ng.common.data.core.successive_nth.call(null,2,sa),thi.ng.common.data.core.successive_nth.call(null,2,sb));
});})(strips,strips__$1,make_face,vec__10860,face_fn))
,thi.ng.common.data.core.successive_nth.call(null,2,strips__$1)));
};
var lathe_mesh = function (points,res,phi,rot_fn,var_args){
var p__10852 = null;if (arguments.length > 4) {
  p__10852 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);} 
return lathe_mesh__delegate.call(this,points,res,phi,rot_fn,p__10852);};
lathe_mesh.cljs$lang$maxFixedArity = 4;
lathe_mesh.cljs$lang$applyTo = (function (arglist__10867){
var points = cljs.core.first(arglist__10867);
arglist__10867 = cljs.core.next(arglist__10867);
var res = cljs.core.first(arglist__10867);
arglist__10867 = cljs.core.next(arglist__10867);
var phi = cljs.core.first(arglist__10867);
arglist__10867 = cljs.core.next(arglist__10867);
var rot_fn = cljs.core.first(arglist__10867);
var p__10852 = cljs.core.rest(arglist__10867);
return lathe_mesh__delegate(points,res,phi,rot_fn,p__10852);
});
lathe_mesh.cljs$core$IFn$_invoke$arity$variadic = lathe_mesh__delegate;
return lathe_mesh;
})()
;
thi.ng.geom.gmesh.saddle = (function saddle(s){var sv = thi.ng.geom.core.vector.vec3.call(null,s);return cljs.core.reduce.call(null,((function (sv){
return (function (m,p__10870){var vec__10871 = p__10870;var p = cljs.core.nth.call(null,vec__10871,0,null);var flags = cljs.core.nth.call(null,vec__10871,1,null);return thi.ng.geom.gmesh.into_mesh.call(null,m,thi.ng.geom.core.as_mesh.call(null,thi.ng.geom.types.AABB.call(null,p,s),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flags","flags",1111417337),flags], null)));
});})(sv))
,thi.ng.geom.gmesh.gmesh.call(null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.vector.vec3.call(null),new cljs.core.Keyword(null,"ewsfb","ewsfb",1110838767)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.vector.vec3.call(null,0,s,0),new cljs.core.Keyword(null,"wfb","wfb",1014021861)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.vector.vec3.call(null,s,s,0),new cljs.core.Keyword(null,"ensfb","ensfb",1110570648)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.vector.vec3.call(null,0,(s * 2),0),new cljs.core.Keyword(null,"ewnfb","ewnfb",1110833962)], null)], null));
});
/**
* Applies f to all faces of given mesh and adds resulting faces to
* new mesh. Thus f should return a seq of faces. Returns new mesh.
*/
thi.ng.geom.gmesh.map_faces = (function map_faces(f,mesh){return thi.ng.geom.gmesh.into_mesh.call(null,thi.ng.geom.gmesh.gmesh.call(null),cljs.core.mapcat.call(null,f,new cljs.core.Keyword(null,"faces","faces",1111091496).cljs$core$IFn$_invoke$arity$1(mesh)));
});
thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$PTransform$ = true;
thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$PTransform$transform$arity$2 = (function (_,m){var ___$1 = this;return cljs.core.reduce.call(null,((function (___$1){
return (function (mesh,f){return thi.ng.geom.gmesh.add_face.call(null,mesh,cljs.core.mapv.call(null,((function (___$1){
return (function (p1__10875_SHARP_){return thi.ng.geom.core.transform_vector.call(null,m,p1__10875_SHARP_);
});})(___$1))
,f));
});})(___$1))
,thi.ng.geom.gmesh.gmesh.call(null),new cljs.core.Keyword(null,"faces","faces",1111091496).cljs$core$IFn$_invoke$arity$1(___$1));
});
thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$PCenter$ = true;
thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$PCenter$center$arity$1 = (function (_){var ___$1 = this;return thi.ng.geom.core.center.call(null,___$1,thi.ng.geom.core.vector.vec3.call(null));
});
thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$PCenter$center$arity$2 = (function (_,o){var ___$1 = this;return thi.ng.geom.core.transform.call(null,___$1,thi.ng.geom.core.translate.call(null,thi.ng.geom.core.matrix.M44,thi.ng.geom.core._.call(null,o,thi.ng.geom.core.centroid.call(null,___$1))));
});
thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$PCenter$centroid$arity$1 = (function (_){var ___$1 = this;return thi.ng.geom.core.utils.centroid.call(null,cljs.core.keys.call(null,new cljs.core.Keyword(null,"vertices","vertices",3324730219).cljs$core$IFn$_invoke$arity$1(___$1)));
});
thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$PFlip$ = true;
thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$PFlip$flip$arity$1 = (function (_){var ___$1 = this;return thi.ng.geom.gmesh.map_faces.call(null,((function (___$1){
return (function (f){return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec.call(null,cljs.core.rseq.call(null,f))], null);
});})(___$1))
,___$1);
});
thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$PEdgeAccess$ = true;
thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$PEdgeAccess$edges$arity$1 = (function (_){var ___$1 = this;return cljs.core.keys.call(null,new cljs.core.Keyword(null,"edges","edges",1110261192).cljs$core$IFn$_invoke$arity$1(___$1));
});
thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$PNormalAccess$ = true;
thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$PNormalAccess$face_normals$arity$1 = (function (_){var ___$1 = this;if(cljs.core.seq.call(null,new cljs.core.Keyword(null,"fnormals","fnormals",519550136).cljs$core$IFn$_invoke$arity$1(___$1)))
{return new cljs.core.Keyword(null,"fnormals","fnormals",519550136).cljs$core$IFn$_invoke$arity$1(___$1);
} else
{return new cljs.core.Keyword(null,"fnormals","fnormals",519550136).cljs$core$IFn$_invoke$arity$1(thi.ng.geom.core.compute_face_normals.call(null,___$1));
}
});
thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$PNormalAccess$vertex_normals$arity$1 = (function (_){var ___$1 = this;if(cljs.core.seq.call(null,new cljs.core.Keyword(null,"vnormals","vnormals",2634711720).cljs$core$IFn$_invoke$arity$1(___$1)))
{return new cljs.core.Keyword(null,"vnormals","vnormals",2634711720).cljs$core$IFn$_invoke$arity$1(___$1);
} else
{return new cljs.core.Keyword(null,"vnormals","vnormals",2634711720).cljs$core$IFn$_invoke$arity$1(thi.ng.geom.core.compute_vertex_normals.call(null,___$1));
}
});
thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$PNormalAccess$compute_face_normals$arity$1 = (function (_){var ___$1 = this;var norms = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);var fnorms = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);var faces = new cljs.core.Keyword(null,"faces","faces",1111091496).cljs$core$IFn$_invoke$arity$1(___$1);while(true){
if(cljs.core.truth_(faces))
{var vec__10876 = cljs.core.first.call(null,faces);var a = cljs.core.nth.call(null,vec__10876,0,null);var b = cljs.core.nth.call(null,vec__10876,1,null);var c = cljs.core.nth.call(null,vec__10876,2,null);var f = vec__10876;var vec__10877 = thi.ng.common.data.core.index_BANG_.call(null,norms,thi.ng.geom.core.utils.ortho_normal.call(null,a,b,c));var norms__$1 = cljs.core.nth.call(null,vec__10877,0,null);var n = cljs.core.nth.call(null,vec__10877,1,null);{
var G__10888 = norms__$1;
var G__10889 = cljs.core.assoc_BANG_.call(null,fnorms,f,n);
var G__10890 = cljs.core.next.call(null,faces);
norms = G__10888;
fnorms = G__10889;
faces = G__10890;
continue;
}
} else
{return cljs.core.assoc.call(null,___$1,new cljs.core.Keyword(null,"normals","normals",3141522398),cljs.core.persistent_BANG_.call(null,norms),new cljs.core.Keyword(null,"fnormals","fnormals",519550136),cljs.core.persistent_BANG_.call(null,fnorms));
}
break;
}
});
thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$PNormalAccess$compute_vertex_normals$arity$1 = (function (_){var ___$1 = this;var ___$2 = ((cljs.core.seq.call(null,new cljs.core.Keyword(null,"fnormals","fnormals",519550136).cljs$core$IFn$_invoke$arity$1(___$1)))?___$1:thi.ng.geom.core.compute_face_normals.call(null,___$1));var map__10878 = ___$2;var map__10878__$1 = ((cljs.core.seq_QMARK_.call(null,map__10878))?cljs.core.apply.call(null,cljs.core.hash_map,map__10878):map__10878);var fnormals = cljs.core.get.call(null,map__10878__$1,new cljs.core.Keyword(null,"fnormals","fnormals",519550136));var normals = cljs.core.get.call(null,map__10878__$1,new cljs.core.Keyword(null,"normals","normals",3141522398));var vertices = cljs.core.get.call(null,map__10878__$1,new cljs.core.Keyword(null,"vertices","vertices",3324730219));var norms = cljs.core.transient$.call(null,normals);var vnorms = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);var verts = cljs.core.keys.call(null,vertices);while(true){
if(cljs.core.truth_(verts))
{var v = cljs.core.first.call(null,verts);var n = thi.ng.geom.core.normalize.call(null,cljs.core.reduce.call(null,thi.ng.geom.core._PLUS_,cljs.core.map.call(null,((function (norms,vnorms,verts,v,___$2,map__10878,map__10878__$1,fnormals,normals,vertices,___$1){
return (function (p1__10874_SHARP_){return cljs.core.get.call(null,fnormals,p1__10874_SHARP_);
});})(norms,vnorms,verts,v,___$2,map__10878,map__10878__$1,fnormals,normals,vertices,___$1))
,thi.ng.geom.core.vertex_faces.call(null,___$2,v))));var vec__10879 = thi.ng.common.data.core.index_BANG_.call(null,norms,n);var norms__$1 = cljs.core.nth.call(null,vec__10879,0,null);var n__$1 = cljs.core.nth.call(null,vec__10879,1,null);{
var G__10891 = norms__$1;
var G__10892 = cljs.core.assoc_BANG_.call(null,vnorms,v,n__$1);
var G__10893 = cljs.core.next.call(null,verts);
norms = G__10891;
vnorms = G__10892;
verts = G__10893;
continue;
}
} else
{return cljs.core.assoc.call(null,___$2,new cljs.core.Keyword(null,"normals","normals",3141522398),cljs.core.persistent_BANG_.call(null,norms),new cljs.core.Keyword(null,"vnormals","vnormals",2634711720),cljs.core.persistent_BANG_.call(null,vnorms));
}
break;
}
});
thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$PVolume$ = true;
thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$PVolume$volume$arity$1 = (function (_){var ___$1 = this;return ((1 / 6.0) * clojure.core.reducers.fold.call(null,cljs.core._PLUS_,clojure.core.reducers.map.call(null,((function (___$1){
return (function (p__10880){var vec__10881 = p__10880;var a = cljs.core.nth.call(null,vec__10881,0,null);var b = cljs.core.nth.call(null,vec__10881,1,null);var c = cljs.core.nth.call(null,vec__10881,2,null);return thi.ng.geom.core.dot.call(null,a,thi.ng.geom.core.cross.call(null,b,c));
});})(___$1))
,clojure.core.reducers.mapcat.call(null,thi.ng.geom.core.utils.tessellate_with_first,new cljs.core.Keyword(null,"faces","faces",1111091496).cljs$core$IFn$_invoke$arity$1(___$1)))));
});
thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$PFaceAccess$ = true;
thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$PFaceAccess$faces$arity$1 = (function (_){var ___$1 = this;return new cljs.core.Keyword(null,"faces","faces",1111091496).cljs$core$IFn$_invoke$arity$1(___$1);
});
thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$PFaceAccess$add_face$arity$2 = (function (_,f){var ___$1 = this;return thi.ng.geom.gmesh.add_face.call(null,___$1,f);
});
thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$PFaceAccess$vertex_faces$arity$2 = (function (_,v){var ___$1 = this;return thi.ng.geom.gmesh.vertex_faces_STAR_.call(null,___$1,v);
});
thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$PFaceAccess$remove_face$arity$2 = (function (p__10882,f){var map__10883 = p__10882;var map__10883__$1 = ((cljs.core.seq_QMARK_.call(null,map__10883))?cljs.core.apply.call(null,cljs.core.hash_map,map__10883):map__10883);var _ = map__10883__$1;var vnormals = cljs.core.get.call(null,map__10883__$1,new cljs.core.Keyword(null,"vnormals","vnormals",2634711720));var fnormals = cljs.core.get.call(null,map__10883__$1,new cljs.core.Keyword(null,"fnormals","fnormals",519550136));var faces = cljs.core.get.call(null,map__10883__$1,new cljs.core.Keyword(null,"faces","faces",1111091496));var edges = cljs.core.get.call(null,map__10883__$1,new cljs.core.Keyword(null,"edges","edges",1110261192));var vertices = cljs.core.get.call(null,map__10883__$1,new cljs.core.Keyword(null,"vertices","vertices",3324730219));var map__10884 = this;var map__10884__$1 = ((cljs.core.seq_QMARK_.call(null,map__10884))?cljs.core.apply.call(null,cljs.core.hash_map,map__10884):map__10884);var ___$1 = map__10884__$1;var vnormals__$1 = cljs.core.get.call(null,map__10884__$1,new cljs.core.Keyword(null,"vnormals","vnormals",2634711720));var fnormals__$1 = cljs.core.get.call(null,map__10884__$1,new cljs.core.Keyword(null,"fnormals","fnormals",519550136));var faces__$1 = cljs.core.get.call(null,map__10884__$1,new cljs.core.Keyword(null,"faces","faces",1111091496));var edges__$1 = cljs.core.get.call(null,map__10884__$1,new cljs.core.Keyword(null,"edges","edges",1110261192));var vertices__$1 = cljs.core.get.call(null,map__10884__$1,new cljs.core.Keyword(null,"vertices","vertices",3324730219));if(cljs.core.truth_(cljs.core.get.call(null,faces__$1,f)))
{var verts = vertices__$1;var vnorms = vnormals__$1;var edges__$2 = edges__$1;var fedges = thi.ng.common.data.core.successive_nth.call(null,2,cljs.core.conj.call(null,f,cljs.core.first.call(null,f)));while(true){
if(cljs.core.truth_(fedges))
{var vec__10885 = cljs.core.first.call(null,fedges);var a = cljs.core.nth.call(null,vec__10885,0,null);var b = cljs.core.nth.call(null,vec__10885,1,null);var e = cljs.core.PersistentHashSet.fromArray([a,b], true);var efaces = cljs.core.disj.call(null,cljs.core.get.call(null,edges__$2,e),f);var edges__$3 = ((cljs.core.seq.call(null,efaces))?cljs.core.assoc.call(null,edges__$2,e,efaces):cljs.core.dissoc.call(null,edges__$2,e));var ve = cljs.core.filter.call(null,((function (verts,vnorms,edges__$2,fedges,vec__10885,a,b,e,efaces,edges__$3,map__10884,map__10884__$1,___$1,vnormals__$1,fnormals__$1,faces__$1,edges__$1,vertices__$1,map__10883,map__10883__$1,_,vnormals,fnormals,faces,edges,vertices){
return (function (p1__10873_SHARP_){return cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"f","f",1013904344).cljs$core$IFn$_invoke$arity$1(p1__10873_SHARP_),f);
});})(verts,vnorms,edges__$2,fedges,vec__10885,a,b,e,efaces,edges__$3,map__10884,map__10884__$1,___$1,vnormals__$1,fnormals__$1,faces__$1,edges__$1,vertices__$1,map__10883,map__10883__$1,_,vnormals,fnormals,faces,edges,vertices))
,cljs.core.get.call(null,verts,a));if(cljs.core.seq.call(null,ve))
{{
var G__10894 = cljs.core.assoc.call(null,verts,a,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,ve));
var G__10895 = vnorms;
var G__10896 = edges__$3;
var G__10897 = cljs.core.next.call(null,fedges);
verts = G__10894;
vnorms = G__10895;
edges__$2 = G__10896;
fedges = G__10897;
continue;
}
} else
{{
var G__10898 = cljs.core.dissoc.call(null,verts,a);
var G__10899 = cljs.core.dissoc.call(null,vnorms,a);
var G__10900 = edges__$3;
var G__10901 = cljs.core.next.call(null,fedges);
verts = G__10898;
vnorms = G__10899;
edges__$2 = G__10900;
fedges = G__10901;
continue;
}
}
} else
{return cljs.core.assoc.call(null,___$1,new cljs.core.Keyword(null,"vertices","vertices",3324730219),verts,new cljs.core.Keyword(null,"vnormals","vnormals",2634711720),vnorms,new cljs.core.Keyword(null,"edges","edges",1110261192),edges__$2,new cljs.core.Keyword(null,"faces","faces",1111091496),cljs.core.disj.call(null,faces__$1,f),new cljs.core.Keyword(null,"fnormals","fnormals",519550136),cljs.core.dissoc.call(null,fnormals__$1,f));
}
break;
}
} else
{return ___$1;
}
});
thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$PBoundingSphere$ = true;
thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$PBoundingSphere$bounding_sphere$arity$1 = (function (_){var ___$1 = this;return thi.ng.geom.types.utils.bounding_sphere.call(null,thi.ng.geom.core.centroid.call(null,___$1),thi.ng.geom.core.vertices.call(null,___$1));
});
thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$PTessellate$ = true;
thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$PTessellate$tessellate$arity$1 = (function (_){var ___$1 = this;return thi.ng.geom.core.tessellate.call(null,___$1,cljs.core.PersistentArrayMap.EMPTY);
});
thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$PTessellate$tessellate$arity$2 = (function (_,p__10886){var map__10887 = p__10886;var map__10887__$1 = ((cljs.core.seq_QMARK_.call(null,map__10887))?cljs.core.apply.call(null,cljs.core.hash_map,map__10887):map__10887);var fn = cljs.core.get.call(null,map__10887__$1,new cljs.core.Keyword(null,"fn","fn",1013907514),thi.ng.geom.core.utils.tessellate_with_first);var ___$1 = this;return thi.ng.geom.gmesh.map_faces.call(null,fn,___$1);
});
thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$PGeomContainer$ = true;
thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$PGeomContainer$into$arity$2 = (function (_,faces){var ___$1 = this;return thi.ng.geom.gmesh.into_mesh.call(null,___$1,faces);
});
thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$PBounds$ = true;
thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$PBounds$bounds$arity$1 = (function (_){var ___$1 = this;return thi.ng.geom.types.utils.bounding_box.call(null,cljs.core.keys.call(null,new cljs.core.Keyword(null,"vertices","vertices",3324730219).cljs$core$IFn$_invoke$arity$1(___$1)));
});
thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$PBounds$width$arity$1 = (function (_){var ___$1 = this;return thi.ng.geom.core.utils.axis_range.call(null,0,cljs.core.keys.call(null,new cljs.core.Keyword(null,"vertices","vertices",3324730219).cljs$core$IFn$_invoke$arity$1(___$1)));
});
thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$PBounds$height$arity$1 = (function (_){var ___$1 = this;return thi.ng.geom.core.utils.axis_range.call(null,1,cljs.core.keys.call(null,new cljs.core.Keyword(null,"vertices","vertices",3324730219).cljs$core$IFn$_invoke$arity$1(___$1)));
});
thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$PBounds$depth$arity$1 = (function (_){var ___$1 = this;return thi.ng.geom.core.utils.axis_range.call(null,2,cljs.core.keys.call(null,new cljs.core.Keyword(null,"vertices","vertices",3324730219).cljs$core$IFn$_invoke$arity$1(___$1)));
});
thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$PVertexAccess$ = true;
thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$PVertexAccess$vertices$arity$1 = (function (_){var ___$1 = this;return cljs.core.keys.call(null,new cljs.core.Keyword(null,"vertices","vertices",3324730219).cljs$core$IFn$_invoke$arity$1(___$1));
});
thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$PMeshConvert$ = true;
thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$PMeshConvert$as_mesh$arity$1 = (function (_){var ___$1 = this;return ___$1;
});
thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$PMeshConvert$as_mesh$arity$2 = (function (_,opts){var ___$1 = this;return thi.ng.geom.core.into.call(null,new cljs.core.Keyword(null,"mesh","mesh",1017252191).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"faces","faces",1111091496).cljs$core$IFn$_invoke$arity$1(___$1));
});
thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$PGraph$ = true;
thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$PGraph$connected_components$arity$1 = (function (_){var ___$1 = this;return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [___$1], null);
});
thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$PGraph$vertex_neighbors$arity$2 = (function (_,v){var ___$1 = this;return thi.ng.geom.gmesh.vertex_neighbors_STAR_.call(null,___$1,v);
});
thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$PGraph$vertex_valence$arity$2 = (function (_,v){var ___$1 = this;return thi.ng.geom.gmesh.vertex_valence_STAR_.call(null,___$1,v);
});
thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$PGraph$remove_vertex$arity$2 = (function (_,v){var ___$1 = this;return thi.ng.geom.gmesh.remove_vertex_STAR_.call(null,___$1,v);
});
thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$PGraph$replace_vertex$arity$3 = (function (_,v,v2){var ___$1 = this;return thi.ng.geom.gmesh.replace_vertex_STAR_.call(null,___$1,v,v2);
});
thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$PGraph$merge_vertices$arity$3 = (function (_,a,b){var ___$1 = this;return thi.ng.geom.gmesh.merge_vertices_STAR_.call(null,___$1,a,b);
});
thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$PArea$ = true;
thi.ng.geom.types.GMesh.prototype.thi$ng$geom$core$PArea$area$arity$1 = (function (_){var ___$1 = this;return clojure.core.reducers.fold.call(null,cljs.core._PLUS_,clojure.core.reducers.map.call(null,((function (___$1){
return (function (p1__10872_SHARP_){return thi.ng.common.math.core.abs.call(null,cljs.core.apply.call(null,thi.ng.geom.core.utils.tri_area3,p1__10872_SHARP_));
});})(___$1))
,clojure.core.reducers.mapcat.call(null,thi.ng.geom.core.utils.tessellate_with_first,new cljs.core.Keyword(null,"faces","faces",1111091496).cljs$core$IFn$_invoke$arity$1(___$1))));
});
