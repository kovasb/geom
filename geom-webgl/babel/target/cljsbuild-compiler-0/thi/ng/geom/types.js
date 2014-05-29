// Compiled by ClojureScript 0.0-2202
goog.provide('thi.ng.geom.types');
goog.require('cljs.core');
goog.require('thi.ng.geom.core.vector');

/**
* @constructor
* @param {*} vertices
* @param {*} edges
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
thi.ng.geom.types.Graph = (function (vertices,edges,__meta,__extmap){
this.vertices = vertices;
this.edges = edges;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>2){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
thi.ng.geom.types.Graph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4067__auto__,k__4068__auto__){var self__ = this;
var this__4067__auto____$1 = this;return cljs.core._lookup.call(null,this__4067__auto____$1,k__4068__auto__,null);
});
thi.ng.geom.types.Graph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4069__auto__,k7692,else__4070__auto__){var self__ = this;
var this__4069__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k7692,new cljs.core.Keyword(null,"vertices","vertices",3324730219)))
{return self__.vertices;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k7692,new cljs.core.Keyword(null,"edges","edges",1110261192)))
{return self__.edges;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k7692,else__4070__auto__);
} else
{return null;
}
}
}
});
thi.ng.geom.types.Graph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4081__auto__,writer__4082__auto__,opts__4083__auto__){var self__ = this;
var this__4081__auto____$1 = this;var pr_pair__4084__auto__ = ((function (this__4081__auto____$1){
return (function (keyval__4085__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4082__auto__,cljs.core.pr_writer,""," ","",opts__4083__auto__,keyval__4085__auto__);
});})(this__4081__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4082__auto__,pr_pair__4084__auto__,"#thi.ng.geom.types.Graph{",", ","}",opts__4083__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vertices","vertices",3324730219),self__.vertices],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"edges","edges",1110261192),self__.edges],null))], null),self__.__extmap));
});
thi.ng.geom.types.Graph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4065__auto__){var self__ = this;
var this__4065__auto____$1 = this;return self__.__meta;
});
thi.ng.geom.types.Graph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4061__auto__){var self__ = this;
var this__4061__auto____$1 = this;return (new thi.ng.geom.types.Graph(self__.vertices,self__.edges,self__.__meta,self__.__extmap,self__.__hash));
});
thi.ng.geom.types.Graph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4071__auto__){var self__ = this;
var this__4071__auto____$1 = this;return (2 + cljs.core.count.call(null,self__.__extmap));
});
thi.ng.geom.types.Graph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4062__auto__){var self__ = this;
var this__4062__auto____$1 = this;var h__3892__auto__ = self__.__hash;if(!((h__3892__auto__ == null)))
{return h__3892__auto__;
} else
{var h__3892__auto____$1 = cljs.core.hash_imap.call(null,this__4062__auto____$1);self__.__hash = h__3892__auto____$1;
return h__3892__auto____$1;
}
});
thi.ng.geom.types.Graph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4063__auto__,other__4064__auto__){var self__ = this;
var this__4063__auto____$1 = this;if(cljs.core.truth_((function (){var and__3469__auto__ = other__4064__auto__;if(cljs.core.truth_(and__3469__auto__))
{return ((this__4063__auto____$1.constructor === other__4064__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__4063__auto____$1,other__4064__auto__));
} else
{return and__3469__auto__;
}
})()))
{return true;
} else
{return false;
}
});
thi.ng.geom.types.Graph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4076__auto__,k__4077__auto__){var self__ = this;
var this__4076__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"vertices","vertices",3324730219),null,new cljs.core.Keyword(null,"edges","edges",1110261192),null], null), null),k__4077__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4076__auto____$1),self__.__meta),k__4077__auto__);
} else
{return (new thi.ng.geom.types.Graph(self__.vertices,self__.edges,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4077__auto__)),null));
}
});
thi.ng.geom.types.Graph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4074__auto__,k__4075__auto__,G__7691){var self__ = this;
var this__4074__auto____$1 = this;var pred__7694 = cljs.core.keyword_identical_QMARK_;var expr__7695 = k__4075__auto__;if(cljs.core.truth_(pred__7694.call(null,new cljs.core.Keyword(null,"vertices","vertices",3324730219),expr__7695)))
{return (new thi.ng.geom.types.Graph(G__7691,self__.edges,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__7694.call(null,new cljs.core.Keyword(null,"edges","edges",1110261192),expr__7695)))
{return (new thi.ng.geom.types.Graph(self__.vertices,G__7691,self__.__meta,self__.__extmap,null));
} else
{return (new thi.ng.geom.types.Graph(self__.vertices,self__.edges,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4075__auto__,G__7691),null));
}
}
});
thi.ng.geom.types.Graph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4079__auto__){var self__ = this;
var this__4079__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vertices","vertices",3324730219),self__.vertices],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"edges","edges",1110261192),self__.edges],null))], null),self__.__extmap));
});
thi.ng.geom.types.Graph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4066__auto__,G__7691){var self__ = this;
var this__4066__auto____$1 = this;return (new thi.ng.geom.types.Graph(self__.vertices,self__.edges,G__7691,self__.__extmap,self__.__hash));
});
thi.ng.geom.types.Graph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4072__auto__,entry__4073__auto__){var self__ = this;
var this__4072__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4073__auto__))
{return cljs.core._assoc.call(null,this__4072__auto____$1,cljs.core._nth.call(null,entry__4073__auto__,0),cljs.core._nth.call(null,entry__4073__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4072__auto____$1,entry__4073__auto__);
}
});
thi.ng.geom.types.Graph.cljs$lang$type = true;
thi.ng.geom.types.Graph.cljs$lang$ctorPrSeq = (function (this__4101__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Graph");
});
thi.ng.geom.types.Graph.cljs$lang$ctorPrWriter = (function (this__4101__auto__,writer__4102__auto__){return cljs.core._write.call(null,writer__4102__auto__,"thi.ng.geom.types/Graph");
});
thi.ng.geom.types.__GT_Graph = (function __GT_Graph(vertices,edges){return (new thi.ng.geom.types.Graph(vertices,edges));
});
thi.ng.geom.types.map__GT_Graph = (function map__GT_Graph(G__7693){return (new thi.ng.geom.types.Graph(new cljs.core.Keyword(null,"vertices","vertices",3324730219).cljs$core$IFn$_invoke$arity$1(G__7693),new cljs.core.Keyword(null,"edges","edges",1110261192).cljs$core$IFn$_invoke$arity$1(G__7693),null,cljs.core.dissoc.call(null,G__7693,new cljs.core.Keyword(null,"vertices","vertices",3324730219),new cljs.core.Keyword(null,"edges","edges",1110261192))));
});

/**
* @constructor
* @param {*} points
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
thi.ng.geom.types.Bezier2 = (function (points,__meta,__extmap){
this.points = points;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>1){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
thi.ng.geom.types.Bezier2.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4067__auto__,k__4068__auto__){var self__ = this;
var this__4067__auto____$1 = this;return cljs.core._lookup.call(null,this__4067__auto____$1,k__4068__auto__,null);
});
thi.ng.geom.types.Bezier2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4069__auto__,k7698,else__4070__auto__){var self__ = this;
var this__4069__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k7698,new cljs.core.Keyword(null,"points","points",4326117461)))
{return self__.points;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k7698,else__4070__auto__);
} else
{return null;
}
}
});
thi.ng.geom.types.Bezier2.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4081__auto__,writer__4082__auto__,opts__4083__auto__){var self__ = this;
var this__4081__auto____$1 = this;var pr_pair__4084__auto__ = ((function (this__4081__auto____$1){
return (function (keyval__4085__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4082__auto__,cljs.core.pr_writer,""," ","",opts__4083__auto__,keyval__4085__auto__);
});})(this__4081__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4082__auto__,pr_pair__4084__auto__,"#thi.ng.geom.types.Bezier2{",", ","}",opts__4083__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",4326117461),self__.points],null))], null),self__.__extmap));
});
thi.ng.geom.types.Bezier2.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4065__auto__){var self__ = this;
var this__4065__auto____$1 = this;return self__.__meta;
});
thi.ng.geom.types.Bezier2.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4061__auto__){var self__ = this;
var this__4061__auto____$1 = this;return (new thi.ng.geom.types.Bezier2(self__.points,self__.__meta,self__.__extmap,self__.__hash));
});
thi.ng.geom.types.Bezier2.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4071__auto__){var self__ = this;
var this__4071__auto____$1 = this;return (1 + cljs.core.count.call(null,self__.__extmap));
});
thi.ng.geom.types.Bezier2.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4062__auto__){var self__ = this;
var this__4062__auto____$1 = this;var h__3892__auto__ = self__.__hash;if(!((h__3892__auto__ == null)))
{return h__3892__auto__;
} else
{var h__3892__auto____$1 = cljs.core.hash_imap.call(null,this__4062__auto____$1);self__.__hash = h__3892__auto____$1;
return h__3892__auto____$1;
}
});
thi.ng.geom.types.Bezier2.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4063__auto__,other__4064__auto__){var self__ = this;
var this__4063__auto____$1 = this;if(cljs.core.truth_((function (){var and__3469__auto__ = other__4064__auto__;if(cljs.core.truth_(and__3469__auto__))
{return ((this__4063__auto____$1.constructor === other__4064__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__4063__auto____$1,other__4064__auto__));
} else
{return and__3469__auto__;
}
})()))
{return true;
} else
{return false;
}
});
thi.ng.geom.types.Bezier2.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4076__auto__,k__4077__auto__){var self__ = this;
var this__4076__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",4326117461),null], null), null),k__4077__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4076__auto____$1),self__.__meta),k__4077__auto__);
} else
{return (new thi.ng.geom.types.Bezier2(self__.points,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4077__auto__)),null));
}
});
thi.ng.geom.types.Bezier2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4074__auto__,k__4075__auto__,G__7697){var self__ = this;
var this__4074__auto____$1 = this;var pred__7700 = cljs.core.keyword_identical_QMARK_;var expr__7701 = k__4075__auto__;if(cljs.core.truth_(pred__7700.call(null,new cljs.core.Keyword(null,"points","points",4326117461),expr__7701)))
{return (new thi.ng.geom.types.Bezier2(G__7697,self__.__meta,self__.__extmap,null));
} else
{return (new thi.ng.geom.types.Bezier2(self__.points,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4075__auto__,G__7697),null));
}
});
thi.ng.geom.types.Bezier2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4079__auto__){var self__ = this;
var this__4079__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",4326117461),self__.points],null))], null),self__.__extmap));
});
thi.ng.geom.types.Bezier2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4066__auto__,G__7697){var self__ = this;
var this__4066__auto____$1 = this;return (new thi.ng.geom.types.Bezier2(self__.points,G__7697,self__.__extmap,self__.__hash));
});
thi.ng.geom.types.Bezier2.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4072__auto__,entry__4073__auto__){var self__ = this;
var this__4072__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4073__auto__))
{return cljs.core._assoc.call(null,this__4072__auto____$1,cljs.core._nth.call(null,entry__4073__auto__,0),cljs.core._nth.call(null,entry__4073__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4072__auto____$1,entry__4073__auto__);
}
});
thi.ng.geom.types.Bezier2.cljs$lang$type = true;
thi.ng.geom.types.Bezier2.cljs$lang$ctorPrSeq = (function (this__4101__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Bezier2");
});
thi.ng.geom.types.Bezier2.cljs$lang$ctorPrWriter = (function (this__4101__auto__,writer__4102__auto__){return cljs.core._write.call(null,writer__4102__auto__,"thi.ng.geom.types/Bezier2");
});
thi.ng.geom.types.__GT_Bezier2 = (function __GT_Bezier2(points){return (new thi.ng.geom.types.Bezier2(points));
});
thi.ng.geom.types.map__GT_Bezier2 = (function map__GT_Bezier2(G__7699){return (new thi.ng.geom.types.Bezier2(new cljs.core.Keyword(null,"points","points",4326117461).cljs$core$IFn$_invoke$arity$1(G__7699),null,cljs.core.dissoc.call(null,G__7699,new cljs.core.Keyword(null,"points","points",4326117461))));
});

/**
* @constructor
* @param {*} p
* @param {*} r
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
thi.ng.geom.types.Circle2 = (function (p,r,__meta,__extmap){
this.p = p;
this.r = r;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>2){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
thi.ng.geom.types.Circle2.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4067__auto__,k__4068__auto__){var self__ = this;
var this__4067__auto____$1 = this;return cljs.core._lookup.call(null,this__4067__auto____$1,k__4068__auto__,null);
});
thi.ng.geom.types.Circle2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4069__auto__,k7704,else__4070__auto__){var self__ = this;
var this__4069__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k7704,new cljs.core.Keyword(null,"p","p",1013904354)))
{return self__.p;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k7704,new cljs.core.Keyword(null,"r","r",1013904356)))
{return self__.r;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k7704,else__4070__auto__);
} else
{return null;
}
}
}
});
thi.ng.geom.types.Circle2.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4081__auto__,writer__4082__auto__,opts__4083__auto__){var self__ = this;
var this__4081__auto____$1 = this;var pr_pair__4084__auto__ = ((function (this__4081__auto____$1){
return (function (keyval__4085__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4082__auto__,cljs.core.pr_writer,""," ","",opts__4083__auto__,keyval__4085__auto__);
});})(this__4081__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4082__auto__,pr_pair__4084__auto__,"#thi.ng.geom.types.Circle2{",", ","}",opts__4083__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p","p",1013904354),self__.p],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"r","r",1013904356),self__.r],null))], null),self__.__extmap));
});
thi.ng.geom.types.Circle2.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4065__auto__){var self__ = this;
var this__4065__auto____$1 = this;return self__.__meta;
});
thi.ng.geom.types.Circle2.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4061__auto__){var self__ = this;
var this__4061__auto____$1 = this;return (new thi.ng.geom.types.Circle2(self__.p,self__.r,self__.__meta,self__.__extmap,self__.__hash));
});
thi.ng.geom.types.Circle2.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4071__auto__){var self__ = this;
var this__4071__auto____$1 = this;return (2 + cljs.core.count.call(null,self__.__extmap));
});
thi.ng.geom.types.Circle2.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4062__auto__){var self__ = this;
var this__4062__auto____$1 = this;var h__3892__auto__ = self__.__hash;if(!((h__3892__auto__ == null)))
{return h__3892__auto__;
} else
{var h__3892__auto____$1 = cljs.core.hash_imap.call(null,this__4062__auto____$1);self__.__hash = h__3892__auto____$1;
return h__3892__auto____$1;
}
});
thi.ng.geom.types.Circle2.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4063__auto__,other__4064__auto__){var self__ = this;
var this__4063__auto____$1 = this;if(cljs.core.truth_((function (){var and__3469__auto__ = other__4064__auto__;if(cljs.core.truth_(and__3469__auto__))
{return ((this__4063__auto____$1.constructor === other__4064__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__4063__auto____$1,other__4064__auto__));
} else
{return and__3469__auto__;
}
})()))
{return true;
} else
{return false;
}
});
thi.ng.geom.types.Circle2.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4076__auto__,k__4077__auto__){var self__ = this;
var this__4076__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"r","r",1013904356),null,new cljs.core.Keyword(null,"p","p",1013904354),null], null), null),k__4077__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4076__auto____$1),self__.__meta),k__4077__auto__);
} else
{return (new thi.ng.geom.types.Circle2(self__.p,self__.r,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4077__auto__)),null));
}
});
thi.ng.geom.types.Circle2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4074__auto__,k__4075__auto__,G__7703){var self__ = this;
var this__4074__auto____$1 = this;var pred__7706 = cljs.core.keyword_identical_QMARK_;var expr__7707 = k__4075__auto__;if(cljs.core.truth_(pred__7706.call(null,new cljs.core.Keyword(null,"p","p",1013904354),expr__7707)))
{return (new thi.ng.geom.types.Circle2(G__7703,self__.r,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__7706.call(null,new cljs.core.Keyword(null,"r","r",1013904356),expr__7707)))
{return (new thi.ng.geom.types.Circle2(self__.p,G__7703,self__.__meta,self__.__extmap,null));
} else
{return (new thi.ng.geom.types.Circle2(self__.p,self__.r,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4075__auto__,G__7703),null));
}
}
});
thi.ng.geom.types.Circle2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4079__auto__){var self__ = this;
var this__4079__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p","p",1013904354),self__.p],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"r","r",1013904356),self__.r],null))], null),self__.__extmap));
});
thi.ng.geom.types.Circle2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4066__auto__,G__7703){var self__ = this;
var this__4066__auto____$1 = this;return (new thi.ng.geom.types.Circle2(self__.p,self__.r,G__7703,self__.__extmap,self__.__hash));
});
thi.ng.geom.types.Circle2.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4072__auto__,entry__4073__auto__){var self__ = this;
var this__4072__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4073__auto__))
{return cljs.core._assoc.call(null,this__4072__auto____$1,cljs.core._nth.call(null,entry__4073__auto__,0),cljs.core._nth.call(null,entry__4073__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4072__auto____$1,entry__4073__auto__);
}
});
thi.ng.geom.types.Circle2.cljs$lang$type = true;
thi.ng.geom.types.Circle2.cljs$lang$ctorPrSeq = (function (this__4101__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Circle2");
});
thi.ng.geom.types.Circle2.cljs$lang$ctorPrWriter = (function (this__4101__auto__,writer__4102__auto__){return cljs.core._write.call(null,writer__4102__auto__,"thi.ng.geom.types/Circle2");
});
thi.ng.geom.types.__GT_Circle2 = (function __GT_Circle2(p,r){return (new thi.ng.geom.types.Circle2(p,r));
});
thi.ng.geom.types.map__GT_Circle2 = (function map__GT_Circle2(G__7705){return (new thi.ng.geom.types.Circle2(new cljs.core.Keyword(null,"p","p",1013904354).cljs$core$IFn$_invoke$arity$1(G__7705),new cljs.core.Keyword(null,"r","r",1013904356).cljs$core$IFn$_invoke$arity$1(G__7705),null,cljs.core.dissoc.call(null,G__7705,new cljs.core.Keyword(null,"p","p",1013904354),new cljs.core.Keyword(null,"r","r",1013904356))));
});

/**
* @constructor
* @param {*} p
* @param {*} rx
* @param {*} ry
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
thi.ng.geom.types.Ellipse2 = (function (p,rx,ry,__meta,__extmap){
this.p = p;
this.rx = rx;
this.ry = ry;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>3){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
thi.ng.geom.types.Ellipse2.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4067__auto__,k__4068__auto__){var self__ = this;
var this__4067__auto____$1 = this;return cljs.core._lookup.call(null,this__4067__auto____$1,k__4068__auto__,null);
});
thi.ng.geom.types.Ellipse2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4069__auto__,k7710,else__4070__auto__){var self__ = this;
var this__4069__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k7710,new cljs.core.Keyword(null,"p","p",1013904354)))
{return self__.p;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k7710,new cljs.core.Keyword(null,"rx","rx",1013907896)))
{return self__.rx;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k7710,new cljs.core.Keyword(null,"ry","ry",1013907897)))
{return self__.ry;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k7710,else__4070__auto__);
} else
{return null;
}
}
}
}
});
thi.ng.geom.types.Ellipse2.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4081__auto__,writer__4082__auto__,opts__4083__auto__){var self__ = this;
var this__4081__auto____$1 = this;var pr_pair__4084__auto__ = ((function (this__4081__auto____$1){
return (function (keyval__4085__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4082__auto__,cljs.core.pr_writer,""," ","",opts__4083__auto__,keyval__4085__auto__);
});})(this__4081__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4082__auto__,pr_pair__4084__auto__,"#thi.ng.geom.types.Ellipse2{",", ","}",opts__4083__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p","p",1013904354),self__.p],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rx","rx",1013907896),self__.rx],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ry","ry",1013907897),self__.ry],null))], null),self__.__extmap));
});
thi.ng.geom.types.Ellipse2.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4065__auto__){var self__ = this;
var this__4065__auto____$1 = this;return self__.__meta;
});
thi.ng.geom.types.Ellipse2.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4061__auto__){var self__ = this;
var this__4061__auto____$1 = this;return (new thi.ng.geom.types.Ellipse2(self__.p,self__.rx,self__.ry,self__.__meta,self__.__extmap,self__.__hash));
});
thi.ng.geom.types.Ellipse2.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4071__auto__){var self__ = this;
var this__4071__auto____$1 = this;return (3 + cljs.core.count.call(null,self__.__extmap));
});
thi.ng.geom.types.Ellipse2.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4062__auto__){var self__ = this;
var this__4062__auto____$1 = this;var h__3892__auto__ = self__.__hash;if(!((h__3892__auto__ == null)))
{return h__3892__auto__;
} else
{var h__3892__auto____$1 = cljs.core.hash_imap.call(null,this__4062__auto____$1);self__.__hash = h__3892__auto____$1;
return h__3892__auto____$1;
}
});
thi.ng.geom.types.Ellipse2.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4063__auto__,other__4064__auto__){var self__ = this;
var this__4063__auto____$1 = this;if(cljs.core.truth_((function (){var and__3469__auto__ = other__4064__auto__;if(cljs.core.truth_(and__3469__auto__))
{return ((this__4063__auto____$1.constructor === other__4064__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__4063__auto____$1,other__4064__auto__));
} else
{return and__3469__auto__;
}
})()))
{return true;
} else
{return false;
}
});
thi.ng.geom.types.Ellipse2.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4076__auto__,k__4077__auto__){var self__ = this;
var this__4076__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"rx","rx",1013907896),null,new cljs.core.Keyword(null,"p","p",1013904354),null,new cljs.core.Keyword(null,"ry","ry",1013907897),null], null), null),k__4077__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4076__auto____$1),self__.__meta),k__4077__auto__);
} else
{return (new thi.ng.geom.types.Ellipse2(self__.p,self__.rx,self__.ry,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4077__auto__)),null));
}
});
thi.ng.geom.types.Ellipse2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4074__auto__,k__4075__auto__,G__7709){var self__ = this;
var this__4074__auto____$1 = this;var pred__7712 = cljs.core.keyword_identical_QMARK_;var expr__7713 = k__4075__auto__;if(cljs.core.truth_(pred__7712.call(null,new cljs.core.Keyword(null,"p","p",1013904354),expr__7713)))
{return (new thi.ng.geom.types.Ellipse2(G__7709,self__.rx,self__.ry,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__7712.call(null,new cljs.core.Keyword(null,"rx","rx",1013907896),expr__7713)))
{return (new thi.ng.geom.types.Ellipse2(self__.p,G__7709,self__.ry,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__7712.call(null,new cljs.core.Keyword(null,"ry","ry",1013907897),expr__7713)))
{return (new thi.ng.geom.types.Ellipse2(self__.p,self__.rx,G__7709,self__.__meta,self__.__extmap,null));
} else
{return (new thi.ng.geom.types.Ellipse2(self__.p,self__.rx,self__.ry,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4075__auto__,G__7709),null));
}
}
}
});
thi.ng.geom.types.Ellipse2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4079__auto__){var self__ = this;
var this__4079__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p","p",1013904354),self__.p],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rx","rx",1013907896),self__.rx],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ry","ry",1013907897),self__.ry],null))], null),self__.__extmap));
});
thi.ng.geom.types.Ellipse2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4066__auto__,G__7709){var self__ = this;
var this__4066__auto____$1 = this;return (new thi.ng.geom.types.Ellipse2(self__.p,self__.rx,self__.ry,G__7709,self__.__extmap,self__.__hash));
});
thi.ng.geom.types.Ellipse2.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4072__auto__,entry__4073__auto__){var self__ = this;
var this__4072__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4073__auto__))
{return cljs.core._assoc.call(null,this__4072__auto____$1,cljs.core._nth.call(null,entry__4073__auto__,0),cljs.core._nth.call(null,entry__4073__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4072__auto____$1,entry__4073__auto__);
}
});
thi.ng.geom.types.Ellipse2.cljs$lang$type = true;
thi.ng.geom.types.Ellipse2.cljs$lang$ctorPrSeq = (function (this__4101__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Ellipse2");
});
thi.ng.geom.types.Ellipse2.cljs$lang$ctorPrWriter = (function (this__4101__auto__,writer__4102__auto__){return cljs.core._write.call(null,writer__4102__auto__,"thi.ng.geom.types/Ellipse2");
});
thi.ng.geom.types.__GT_Ellipse2 = (function __GT_Ellipse2(p,rx,ry){return (new thi.ng.geom.types.Ellipse2(p,rx,ry));
});
thi.ng.geom.types.map__GT_Ellipse2 = (function map__GT_Ellipse2(G__7711){return (new thi.ng.geom.types.Ellipse2(new cljs.core.Keyword(null,"p","p",1013904354).cljs$core$IFn$_invoke$arity$1(G__7711),new cljs.core.Keyword(null,"rx","rx",1013907896).cljs$core$IFn$_invoke$arity$1(G__7711),new cljs.core.Keyword(null,"ry","ry",1013907897).cljs$core$IFn$_invoke$arity$1(G__7711),null,cljs.core.dissoc.call(null,G__7711,new cljs.core.Keyword(null,"p","p",1013904354),new cljs.core.Keyword(null,"rx","rx",1013907896),new cljs.core.Keyword(null,"ry","ry",1013907897))));
});

/**
* @constructor
* @param {*} points
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
thi.ng.geom.types.Line2 = (function (points,__meta,__extmap){
this.points = points;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>1){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
thi.ng.geom.types.Line2.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4067__auto__,k__4068__auto__){var self__ = this;
var this__4067__auto____$1 = this;return cljs.core._lookup.call(null,this__4067__auto____$1,k__4068__auto__,null);
});
thi.ng.geom.types.Line2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4069__auto__,k7716,else__4070__auto__){var self__ = this;
var this__4069__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k7716,new cljs.core.Keyword(null,"points","points",4326117461)))
{return self__.points;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k7716,else__4070__auto__);
} else
{return null;
}
}
});
thi.ng.geom.types.Line2.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4081__auto__,writer__4082__auto__,opts__4083__auto__){var self__ = this;
var this__4081__auto____$1 = this;var pr_pair__4084__auto__ = ((function (this__4081__auto____$1){
return (function (keyval__4085__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4082__auto__,cljs.core.pr_writer,""," ","",opts__4083__auto__,keyval__4085__auto__);
});})(this__4081__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4082__auto__,pr_pair__4084__auto__,"#thi.ng.geom.types.Line2{",", ","}",opts__4083__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",4326117461),self__.points],null))], null),self__.__extmap));
});
thi.ng.geom.types.Line2.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4065__auto__){var self__ = this;
var this__4065__auto____$1 = this;return self__.__meta;
});
thi.ng.geom.types.Line2.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4061__auto__){var self__ = this;
var this__4061__auto____$1 = this;return (new thi.ng.geom.types.Line2(self__.points,self__.__meta,self__.__extmap,self__.__hash));
});
thi.ng.geom.types.Line2.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4071__auto__){var self__ = this;
var this__4071__auto____$1 = this;return (1 + cljs.core.count.call(null,self__.__extmap));
});
thi.ng.geom.types.Line2.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4062__auto__){var self__ = this;
var this__4062__auto____$1 = this;var h__3892__auto__ = self__.__hash;if(!((h__3892__auto__ == null)))
{return h__3892__auto__;
} else
{var h__3892__auto____$1 = cljs.core.hash_imap.call(null,this__4062__auto____$1);self__.__hash = h__3892__auto____$1;
return h__3892__auto____$1;
}
});
thi.ng.geom.types.Line2.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4063__auto__,other__4064__auto__){var self__ = this;
var this__4063__auto____$1 = this;if(cljs.core.truth_((function (){var and__3469__auto__ = other__4064__auto__;if(cljs.core.truth_(and__3469__auto__))
{return ((this__4063__auto____$1.constructor === other__4064__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__4063__auto____$1,other__4064__auto__));
} else
{return and__3469__auto__;
}
})()))
{return true;
} else
{return false;
}
});
thi.ng.geom.types.Line2.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4076__auto__,k__4077__auto__){var self__ = this;
var this__4076__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",4326117461),null], null), null),k__4077__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4076__auto____$1),self__.__meta),k__4077__auto__);
} else
{return (new thi.ng.geom.types.Line2(self__.points,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4077__auto__)),null));
}
});
thi.ng.geom.types.Line2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4074__auto__,k__4075__auto__,G__7715){var self__ = this;
var this__4074__auto____$1 = this;var pred__7718 = cljs.core.keyword_identical_QMARK_;var expr__7719 = k__4075__auto__;if(cljs.core.truth_(pred__7718.call(null,new cljs.core.Keyword(null,"points","points",4326117461),expr__7719)))
{return (new thi.ng.geom.types.Line2(G__7715,self__.__meta,self__.__extmap,null));
} else
{return (new thi.ng.geom.types.Line2(self__.points,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4075__auto__,G__7715),null));
}
});
thi.ng.geom.types.Line2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4079__auto__){var self__ = this;
var this__4079__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",4326117461),self__.points],null))], null),self__.__extmap));
});
thi.ng.geom.types.Line2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4066__auto__,G__7715){var self__ = this;
var this__4066__auto____$1 = this;return (new thi.ng.geom.types.Line2(self__.points,G__7715,self__.__extmap,self__.__hash));
});
thi.ng.geom.types.Line2.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4072__auto__,entry__4073__auto__){var self__ = this;
var this__4072__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4073__auto__))
{return cljs.core._assoc.call(null,this__4072__auto____$1,cljs.core._nth.call(null,entry__4073__auto__,0),cljs.core._nth.call(null,entry__4073__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4072__auto____$1,entry__4073__auto__);
}
});
thi.ng.geom.types.Line2.cljs$lang$type = true;
thi.ng.geom.types.Line2.cljs$lang$ctorPrSeq = (function (this__4101__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Line2");
});
thi.ng.geom.types.Line2.cljs$lang$ctorPrWriter = (function (this__4101__auto__,writer__4102__auto__){return cljs.core._write.call(null,writer__4102__auto__,"thi.ng.geom.types/Line2");
});
thi.ng.geom.types.__GT_Line2 = (function __GT_Line2(points){return (new thi.ng.geom.types.Line2(points));
});
thi.ng.geom.types.map__GT_Line2 = (function map__GT_Line2(G__7717){return (new thi.ng.geom.types.Line2(new cljs.core.Keyword(null,"points","points",4326117461).cljs$core$IFn$_invoke$arity$1(G__7717),null,cljs.core.dissoc.call(null,G__7717,new cljs.core.Keyword(null,"points","points",4326117461))));
});

/**
* @constructor
* @param {*} points
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
thi.ng.geom.types.LineStrip2 = (function (points,__meta,__extmap){
this.points = points;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>1){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
thi.ng.geom.types.LineStrip2.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4067__auto__,k__4068__auto__){var self__ = this;
var this__4067__auto____$1 = this;return cljs.core._lookup.call(null,this__4067__auto____$1,k__4068__auto__,null);
});
thi.ng.geom.types.LineStrip2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4069__auto__,k7722,else__4070__auto__){var self__ = this;
var this__4069__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k7722,new cljs.core.Keyword(null,"points","points",4326117461)))
{return self__.points;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k7722,else__4070__auto__);
} else
{return null;
}
}
});
thi.ng.geom.types.LineStrip2.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4081__auto__,writer__4082__auto__,opts__4083__auto__){var self__ = this;
var this__4081__auto____$1 = this;var pr_pair__4084__auto__ = ((function (this__4081__auto____$1){
return (function (keyval__4085__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4082__auto__,cljs.core.pr_writer,""," ","",opts__4083__auto__,keyval__4085__auto__);
});})(this__4081__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4082__auto__,pr_pair__4084__auto__,"#thi.ng.geom.types.LineStrip2{",", ","}",opts__4083__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",4326117461),self__.points],null))], null),self__.__extmap));
});
thi.ng.geom.types.LineStrip2.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4065__auto__){var self__ = this;
var this__4065__auto____$1 = this;return self__.__meta;
});
thi.ng.geom.types.LineStrip2.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4061__auto__){var self__ = this;
var this__4061__auto____$1 = this;return (new thi.ng.geom.types.LineStrip2(self__.points,self__.__meta,self__.__extmap,self__.__hash));
});
thi.ng.geom.types.LineStrip2.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4071__auto__){var self__ = this;
var this__4071__auto____$1 = this;return (1 + cljs.core.count.call(null,self__.__extmap));
});
thi.ng.geom.types.LineStrip2.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4062__auto__){var self__ = this;
var this__4062__auto____$1 = this;var h__3892__auto__ = self__.__hash;if(!((h__3892__auto__ == null)))
{return h__3892__auto__;
} else
{var h__3892__auto____$1 = cljs.core.hash_imap.call(null,this__4062__auto____$1);self__.__hash = h__3892__auto____$1;
return h__3892__auto____$1;
}
});
thi.ng.geom.types.LineStrip2.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4063__auto__,other__4064__auto__){var self__ = this;
var this__4063__auto____$1 = this;if(cljs.core.truth_((function (){var and__3469__auto__ = other__4064__auto__;if(cljs.core.truth_(and__3469__auto__))
{return ((this__4063__auto____$1.constructor === other__4064__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__4063__auto____$1,other__4064__auto__));
} else
{return and__3469__auto__;
}
})()))
{return true;
} else
{return false;
}
});
thi.ng.geom.types.LineStrip2.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4076__auto__,k__4077__auto__){var self__ = this;
var this__4076__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",4326117461),null], null), null),k__4077__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4076__auto____$1),self__.__meta),k__4077__auto__);
} else
{return (new thi.ng.geom.types.LineStrip2(self__.points,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4077__auto__)),null));
}
});
thi.ng.geom.types.LineStrip2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4074__auto__,k__4075__auto__,G__7721){var self__ = this;
var this__4074__auto____$1 = this;var pred__7724 = cljs.core.keyword_identical_QMARK_;var expr__7725 = k__4075__auto__;if(cljs.core.truth_(pred__7724.call(null,new cljs.core.Keyword(null,"points","points",4326117461),expr__7725)))
{return (new thi.ng.geom.types.LineStrip2(G__7721,self__.__meta,self__.__extmap,null));
} else
{return (new thi.ng.geom.types.LineStrip2(self__.points,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4075__auto__,G__7721),null));
}
});
thi.ng.geom.types.LineStrip2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4079__auto__){var self__ = this;
var this__4079__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",4326117461),self__.points],null))], null),self__.__extmap));
});
thi.ng.geom.types.LineStrip2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4066__auto__,G__7721){var self__ = this;
var this__4066__auto____$1 = this;return (new thi.ng.geom.types.LineStrip2(self__.points,G__7721,self__.__extmap,self__.__hash));
});
thi.ng.geom.types.LineStrip2.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4072__auto__,entry__4073__auto__){var self__ = this;
var this__4072__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4073__auto__))
{return cljs.core._assoc.call(null,this__4072__auto____$1,cljs.core._nth.call(null,entry__4073__auto__,0),cljs.core._nth.call(null,entry__4073__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4072__auto____$1,entry__4073__auto__);
}
});
thi.ng.geom.types.LineStrip2.cljs$lang$type = true;
thi.ng.geom.types.LineStrip2.cljs$lang$ctorPrSeq = (function (this__4101__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/LineStrip2");
});
thi.ng.geom.types.LineStrip2.cljs$lang$ctorPrWriter = (function (this__4101__auto__,writer__4102__auto__){return cljs.core._write.call(null,writer__4102__auto__,"thi.ng.geom.types/LineStrip2");
});
thi.ng.geom.types.__GT_LineStrip2 = (function __GT_LineStrip2(points){return (new thi.ng.geom.types.LineStrip2(points));
});
thi.ng.geom.types.map__GT_LineStrip2 = (function map__GT_LineStrip2(G__7723){return (new thi.ng.geom.types.LineStrip2(new cljs.core.Keyword(null,"points","points",4326117461).cljs$core$IFn$_invoke$arity$1(G__7723),null,cljs.core.dissoc.call(null,G__7723,new cljs.core.Keyword(null,"points","points",4326117461))));
});

/**
* @constructor
* @param {*} vertices
* @param {*} normals
* @param {*} fnormals
* @param {*} vnormals
* @param {*} edges
* @param {*} faces
* @param {*} attribs
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
thi.ng.geom.types.Mesh2 = (function (vertices,normals,fnormals,vnormals,edges,faces,attribs,__meta,__extmap){
this.vertices = vertices;
this.normals = normals;
this.fnormals = fnormals;
this.vnormals = vnormals;
this.edges = edges;
this.faces = faces;
this.attribs = attribs;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>7){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
thi.ng.geom.types.Mesh2.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4067__auto__,k__4068__auto__){var self__ = this;
var this__4067__auto____$1 = this;return cljs.core._lookup.call(null,this__4067__auto____$1,k__4068__auto__,null);
});
thi.ng.geom.types.Mesh2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4069__auto__,k7728,else__4070__auto__){var self__ = this;
var this__4069__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k7728,new cljs.core.Keyword(null,"vertices","vertices",3324730219)))
{return self__.vertices;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k7728,new cljs.core.Keyword(null,"normals","normals",3141522398)))
{return self__.normals;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k7728,new cljs.core.Keyword(null,"fnormals","fnormals",519550136)))
{return self__.fnormals;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k7728,new cljs.core.Keyword(null,"vnormals","vnormals",2634711720)))
{return self__.vnormals;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k7728,new cljs.core.Keyword(null,"edges","edges",1110261192)))
{return self__.edges;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k7728,new cljs.core.Keyword(null,"faces","faces",1111091496)))
{return self__.faces;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k7728,new cljs.core.Keyword(null,"attribs","attribs",4634025563)))
{return self__.attribs;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k7728,else__4070__auto__);
} else
{return null;
}
}
}
}
}
}
}
}
});
thi.ng.geom.types.Mesh2.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4081__auto__,writer__4082__auto__,opts__4083__auto__){var self__ = this;
var this__4081__auto____$1 = this;var pr_pair__4084__auto__ = ((function (this__4081__auto____$1){
return (function (keyval__4085__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4082__auto__,cljs.core.pr_writer,""," ","",opts__4083__auto__,keyval__4085__auto__);
});})(this__4081__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4082__auto__,pr_pair__4084__auto__,"#thi.ng.geom.types.Mesh2{",", ","}",opts__4083__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vertices","vertices",3324730219),self__.vertices],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"normals","normals",3141522398),self__.normals],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fnormals","fnormals",519550136),self__.fnormals],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vnormals","vnormals",2634711720),self__.vnormals],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"edges","edges",1110261192),self__.edges],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"faces","faces",1111091496),self__.faces],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attribs","attribs",4634025563),self__.attribs],null))], null),self__.__extmap));
});
thi.ng.geom.types.Mesh2.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4065__auto__){var self__ = this;
var this__4065__auto____$1 = this;return self__.__meta;
});
thi.ng.geom.types.Mesh2.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4061__auto__){var self__ = this;
var this__4061__auto____$1 = this;return (new thi.ng.geom.types.Mesh2(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,self__.__extmap,self__.__hash));
});
thi.ng.geom.types.Mesh2.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4071__auto__){var self__ = this;
var this__4071__auto____$1 = this;return (7 + cljs.core.count.call(null,self__.__extmap));
});
thi.ng.geom.types.Mesh2.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4062__auto__){var self__ = this;
var this__4062__auto____$1 = this;var h__3892__auto__ = self__.__hash;if(!((h__3892__auto__ == null)))
{return h__3892__auto__;
} else
{var h__3892__auto____$1 = cljs.core.hash_imap.call(null,this__4062__auto____$1);self__.__hash = h__3892__auto____$1;
return h__3892__auto____$1;
}
});
thi.ng.geom.types.Mesh2.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4063__auto__,other__4064__auto__){var self__ = this;
var this__4063__auto____$1 = this;if(cljs.core.truth_((function (){var and__3469__auto__ = other__4064__auto__;if(cljs.core.truth_(and__3469__auto__))
{return ((this__4063__auto____$1.constructor === other__4064__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__4063__auto____$1,other__4064__auto__));
} else
{return and__3469__auto__;
}
})()))
{return true;
} else
{return false;
}
});
thi.ng.geom.types.Mesh2.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4076__auto__,k__4077__auto__){var self__ = this;
var this__4076__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"vertices","vertices",3324730219),null,new cljs.core.Keyword(null,"vnormals","vnormals",2634711720),null,new cljs.core.Keyword(null,"attribs","attribs",4634025563),null,new cljs.core.Keyword(null,"normals","normals",3141522398),null,new cljs.core.Keyword(null,"faces","faces",1111091496),null,new cljs.core.Keyword(null,"edges","edges",1110261192),null,new cljs.core.Keyword(null,"fnormals","fnormals",519550136),null], null), null),k__4077__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4076__auto____$1),self__.__meta),k__4077__auto__);
} else
{return (new thi.ng.geom.types.Mesh2(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4077__auto__)),null));
}
});
thi.ng.geom.types.Mesh2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4074__auto__,k__4075__auto__,G__7727){var self__ = this;
var this__4074__auto____$1 = this;var pred__7730 = cljs.core.keyword_identical_QMARK_;var expr__7731 = k__4075__auto__;if(cljs.core.truth_(pred__7730.call(null,new cljs.core.Keyword(null,"vertices","vertices",3324730219),expr__7731)))
{return (new thi.ng.geom.types.Mesh2(G__7727,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__7730.call(null,new cljs.core.Keyword(null,"normals","normals",3141522398),expr__7731)))
{return (new thi.ng.geom.types.Mesh2(self__.vertices,G__7727,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__7730.call(null,new cljs.core.Keyword(null,"fnormals","fnormals",519550136),expr__7731)))
{return (new thi.ng.geom.types.Mesh2(self__.vertices,self__.normals,G__7727,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__7730.call(null,new cljs.core.Keyword(null,"vnormals","vnormals",2634711720),expr__7731)))
{return (new thi.ng.geom.types.Mesh2(self__.vertices,self__.normals,self__.fnormals,G__7727,self__.edges,self__.faces,self__.attribs,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__7730.call(null,new cljs.core.Keyword(null,"edges","edges",1110261192),expr__7731)))
{return (new thi.ng.geom.types.Mesh2(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,G__7727,self__.faces,self__.attribs,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__7730.call(null,new cljs.core.Keyword(null,"faces","faces",1111091496),expr__7731)))
{return (new thi.ng.geom.types.Mesh2(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,G__7727,self__.attribs,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__7730.call(null,new cljs.core.Keyword(null,"attribs","attribs",4634025563),expr__7731)))
{return (new thi.ng.geom.types.Mesh2(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,G__7727,self__.__meta,self__.__extmap,null));
} else
{return (new thi.ng.geom.types.Mesh2(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4075__auto__,G__7727),null));
}
}
}
}
}
}
}
});
thi.ng.geom.types.Mesh2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4079__auto__){var self__ = this;
var this__4079__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vertices","vertices",3324730219),self__.vertices],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"normals","normals",3141522398),self__.normals],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fnormals","fnormals",519550136),self__.fnormals],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vnormals","vnormals",2634711720),self__.vnormals],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"edges","edges",1110261192),self__.edges],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"faces","faces",1111091496),self__.faces],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attribs","attribs",4634025563),self__.attribs],null))], null),self__.__extmap));
});
thi.ng.geom.types.Mesh2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4066__auto__,G__7727){var self__ = this;
var this__4066__auto____$1 = this;return (new thi.ng.geom.types.Mesh2(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,G__7727,self__.__extmap,self__.__hash));
});
thi.ng.geom.types.Mesh2.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4072__auto__,entry__4073__auto__){var self__ = this;
var this__4072__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4073__auto__))
{return cljs.core._assoc.call(null,this__4072__auto____$1,cljs.core._nth.call(null,entry__4073__auto__,0),cljs.core._nth.call(null,entry__4073__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4072__auto____$1,entry__4073__auto__);
}
});
thi.ng.geom.types.Mesh2.cljs$lang$type = true;
thi.ng.geom.types.Mesh2.cljs$lang$ctorPrSeq = (function (this__4101__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Mesh2");
});
thi.ng.geom.types.Mesh2.cljs$lang$ctorPrWriter = (function (this__4101__auto__,writer__4102__auto__){return cljs.core._write.call(null,writer__4102__auto__,"thi.ng.geom.types/Mesh2");
});
thi.ng.geom.types.__GT_Mesh2 = (function __GT_Mesh2(vertices,normals,fnormals,vnormals,edges,faces,attribs){return (new thi.ng.geom.types.Mesh2(vertices,normals,fnormals,vnormals,edges,faces,attribs));
});
thi.ng.geom.types.map__GT_Mesh2 = (function map__GT_Mesh2(G__7729){return (new thi.ng.geom.types.Mesh2(new cljs.core.Keyword(null,"vertices","vertices",3324730219).cljs$core$IFn$_invoke$arity$1(G__7729),new cljs.core.Keyword(null,"normals","normals",3141522398).cljs$core$IFn$_invoke$arity$1(G__7729),new cljs.core.Keyword(null,"fnormals","fnormals",519550136).cljs$core$IFn$_invoke$arity$1(G__7729),new cljs.core.Keyword(null,"vnormals","vnormals",2634711720).cljs$core$IFn$_invoke$arity$1(G__7729),new cljs.core.Keyword(null,"edges","edges",1110261192).cljs$core$IFn$_invoke$arity$1(G__7729),new cljs.core.Keyword(null,"faces","faces",1111091496).cljs$core$IFn$_invoke$arity$1(G__7729),new cljs.core.Keyword(null,"attribs","attribs",4634025563).cljs$core$IFn$_invoke$arity$1(G__7729),null,cljs.core.dissoc.call(null,G__7729,new cljs.core.Keyword(null,"vertices","vertices",3324730219),new cljs.core.Keyword(null,"normals","normals",3141522398),new cljs.core.Keyword(null,"fnormals","fnormals",519550136),new cljs.core.Keyword(null,"vnormals","vnormals",2634711720),new cljs.core.Keyword(null,"edges","edges",1110261192),new cljs.core.Keyword(null,"faces","faces",1111091496),new cljs.core.Keyword(null,"attribs","attribs",4634025563))));
});

/**
* @constructor
* @param {*} segments
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
thi.ng.geom.types.Path2 = (function (segments,__meta,__extmap){
this.segments = segments;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>1){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
thi.ng.geom.types.Path2.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4067__auto__,k__4068__auto__){var self__ = this;
var this__4067__auto____$1 = this;return cljs.core._lookup.call(null,this__4067__auto____$1,k__4068__auto__,null);
});
thi.ng.geom.types.Path2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4069__auto__,k7734,else__4070__auto__){var self__ = this;
var this__4069__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k7734,new cljs.core.Keyword(null,"segments","segments",2069773074)))
{return self__.segments;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k7734,else__4070__auto__);
} else
{return null;
}
}
});
thi.ng.geom.types.Path2.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4081__auto__,writer__4082__auto__,opts__4083__auto__){var self__ = this;
var this__4081__auto____$1 = this;var pr_pair__4084__auto__ = ((function (this__4081__auto____$1){
return (function (keyval__4085__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4082__auto__,cljs.core.pr_writer,""," ","",opts__4083__auto__,keyval__4085__auto__);
});})(this__4081__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4082__auto__,pr_pair__4084__auto__,"#thi.ng.geom.types.Path2{",", ","}",opts__4083__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"segments","segments",2069773074),self__.segments],null))], null),self__.__extmap));
});
thi.ng.geom.types.Path2.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4065__auto__){var self__ = this;
var this__4065__auto____$1 = this;return self__.__meta;
});
thi.ng.geom.types.Path2.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4061__auto__){var self__ = this;
var this__4061__auto____$1 = this;return (new thi.ng.geom.types.Path2(self__.segments,self__.__meta,self__.__extmap,self__.__hash));
});
thi.ng.geom.types.Path2.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4071__auto__){var self__ = this;
var this__4071__auto____$1 = this;return (1 + cljs.core.count.call(null,self__.__extmap));
});
thi.ng.geom.types.Path2.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4062__auto__){var self__ = this;
var this__4062__auto____$1 = this;var h__3892__auto__ = self__.__hash;if(!((h__3892__auto__ == null)))
{return h__3892__auto__;
} else
{var h__3892__auto____$1 = cljs.core.hash_imap.call(null,this__4062__auto____$1);self__.__hash = h__3892__auto____$1;
return h__3892__auto____$1;
}
});
thi.ng.geom.types.Path2.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4063__auto__,other__4064__auto__){var self__ = this;
var this__4063__auto____$1 = this;if(cljs.core.truth_((function (){var and__3469__auto__ = other__4064__auto__;if(cljs.core.truth_(and__3469__auto__))
{return ((this__4063__auto____$1.constructor === other__4064__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__4063__auto____$1,other__4064__auto__));
} else
{return and__3469__auto__;
}
})()))
{return true;
} else
{return false;
}
});
thi.ng.geom.types.Path2.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4076__auto__,k__4077__auto__){var self__ = this;
var this__4076__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"segments","segments",2069773074),null], null), null),k__4077__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4076__auto____$1),self__.__meta),k__4077__auto__);
} else
{return (new thi.ng.geom.types.Path2(self__.segments,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4077__auto__)),null));
}
});
thi.ng.geom.types.Path2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4074__auto__,k__4075__auto__,G__7733){var self__ = this;
var this__4074__auto____$1 = this;var pred__7736 = cljs.core.keyword_identical_QMARK_;var expr__7737 = k__4075__auto__;if(cljs.core.truth_(pred__7736.call(null,new cljs.core.Keyword(null,"segments","segments",2069773074),expr__7737)))
{return (new thi.ng.geom.types.Path2(G__7733,self__.__meta,self__.__extmap,null));
} else
{return (new thi.ng.geom.types.Path2(self__.segments,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4075__auto__,G__7733),null));
}
});
thi.ng.geom.types.Path2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4079__auto__){var self__ = this;
var this__4079__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"segments","segments",2069773074),self__.segments],null))], null),self__.__extmap));
});
thi.ng.geom.types.Path2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4066__auto__,G__7733){var self__ = this;
var this__4066__auto____$1 = this;return (new thi.ng.geom.types.Path2(self__.segments,G__7733,self__.__extmap,self__.__hash));
});
thi.ng.geom.types.Path2.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4072__auto__,entry__4073__auto__){var self__ = this;
var this__4072__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4073__auto__))
{return cljs.core._assoc.call(null,this__4072__auto____$1,cljs.core._nth.call(null,entry__4073__auto__,0),cljs.core._nth.call(null,entry__4073__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4072__auto____$1,entry__4073__auto__);
}
});
thi.ng.geom.types.Path2.cljs$lang$type = true;
thi.ng.geom.types.Path2.cljs$lang$ctorPrSeq = (function (this__4101__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Path2");
});
thi.ng.geom.types.Path2.cljs$lang$ctorPrWriter = (function (this__4101__auto__,writer__4102__auto__){return cljs.core._write.call(null,writer__4102__auto__,"thi.ng.geom.types/Path2");
});
thi.ng.geom.types.__GT_Path2 = (function __GT_Path2(segments){return (new thi.ng.geom.types.Path2(segments));
});
thi.ng.geom.types.map__GT_Path2 = (function map__GT_Path2(G__7735){return (new thi.ng.geom.types.Path2(new cljs.core.Keyword(null,"segments","segments",2069773074).cljs$core$IFn$_invoke$arity$1(G__7735),null,cljs.core.dissoc.call(null,G__7735,new cljs.core.Keyword(null,"segments","segments",2069773074))));
});

/**
* @constructor
* @param {*} points
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
thi.ng.geom.types.Polygon2 = (function (points,__meta,__extmap){
this.points = points;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>1){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
thi.ng.geom.types.Polygon2.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4067__auto__,k__4068__auto__){var self__ = this;
var this__4067__auto____$1 = this;return cljs.core._lookup.call(null,this__4067__auto____$1,k__4068__auto__,null);
});
thi.ng.geom.types.Polygon2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4069__auto__,k7740,else__4070__auto__){var self__ = this;
var this__4069__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k7740,new cljs.core.Keyword(null,"points","points",4326117461)))
{return self__.points;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k7740,else__4070__auto__);
} else
{return null;
}
}
});
thi.ng.geom.types.Polygon2.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4081__auto__,writer__4082__auto__,opts__4083__auto__){var self__ = this;
var this__4081__auto____$1 = this;var pr_pair__4084__auto__ = ((function (this__4081__auto____$1){
return (function (keyval__4085__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4082__auto__,cljs.core.pr_writer,""," ","",opts__4083__auto__,keyval__4085__auto__);
});})(this__4081__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4082__auto__,pr_pair__4084__auto__,"#thi.ng.geom.types.Polygon2{",", ","}",opts__4083__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",4326117461),self__.points],null))], null),self__.__extmap));
});
thi.ng.geom.types.Polygon2.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4065__auto__){var self__ = this;
var this__4065__auto____$1 = this;return self__.__meta;
});
thi.ng.geom.types.Polygon2.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4061__auto__){var self__ = this;
var this__4061__auto____$1 = this;return (new thi.ng.geom.types.Polygon2(self__.points,self__.__meta,self__.__extmap,self__.__hash));
});
thi.ng.geom.types.Polygon2.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4071__auto__){var self__ = this;
var this__4071__auto____$1 = this;return (1 + cljs.core.count.call(null,self__.__extmap));
});
thi.ng.geom.types.Polygon2.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4062__auto__){var self__ = this;
var this__4062__auto____$1 = this;var h__3892__auto__ = self__.__hash;if(!((h__3892__auto__ == null)))
{return h__3892__auto__;
} else
{var h__3892__auto____$1 = cljs.core.hash_imap.call(null,this__4062__auto____$1);self__.__hash = h__3892__auto____$1;
return h__3892__auto____$1;
}
});
thi.ng.geom.types.Polygon2.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4063__auto__,other__4064__auto__){var self__ = this;
var this__4063__auto____$1 = this;if(cljs.core.truth_((function (){var and__3469__auto__ = other__4064__auto__;if(cljs.core.truth_(and__3469__auto__))
{return ((this__4063__auto____$1.constructor === other__4064__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__4063__auto____$1,other__4064__auto__));
} else
{return and__3469__auto__;
}
})()))
{return true;
} else
{return false;
}
});
thi.ng.geom.types.Polygon2.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4076__auto__,k__4077__auto__){var self__ = this;
var this__4076__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",4326117461),null], null), null),k__4077__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4076__auto____$1),self__.__meta),k__4077__auto__);
} else
{return (new thi.ng.geom.types.Polygon2(self__.points,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4077__auto__)),null));
}
});
thi.ng.geom.types.Polygon2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4074__auto__,k__4075__auto__,G__7739){var self__ = this;
var this__4074__auto____$1 = this;var pred__7742 = cljs.core.keyword_identical_QMARK_;var expr__7743 = k__4075__auto__;if(cljs.core.truth_(pred__7742.call(null,new cljs.core.Keyword(null,"points","points",4326117461),expr__7743)))
{return (new thi.ng.geom.types.Polygon2(G__7739,self__.__meta,self__.__extmap,null));
} else
{return (new thi.ng.geom.types.Polygon2(self__.points,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4075__auto__,G__7739),null));
}
});
thi.ng.geom.types.Polygon2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4079__auto__){var self__ = this;
var this__4079__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",4326117461),self__.points],null))], null),self__.__extmap));
});
thi.ng.geom.types.Polygon2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4066__auto__,G__7739){var self__ = this;
var this__4066__auto____$1 = this;return (new thi.ng.geom.types.Polygon2(self__.points,G__7739,self__.__extmap,self__.__hash));
});
thi.ng.geom.types.Polygon2.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4072__auto__,entry__4073__auto__){var self__ = this;
var this__4072__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4073__auto__))
{return cljs.core._assoc.call(null,this__4072__auto____$1,cljs.core._nth.call(null,entry__4073__auto__,0),cljs.core._nth.call(null,entry__4073__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4072__auto____$1,entry__4073__auto__);
}
});
thi.ng.geom.types.Polygon2.cljs$lang$type = true;
thi.ng.geom.types.Polygon2.cljs$lang$ctorPrSeq = (function (this__4101__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Polygon2");
});
thi.ng.geom.types.Polygon2.cljs$lang$ctorPrWriter = (function (this__4101__auto__,writer__4102__auto__){return cljs.core._write.call(null,writer__4102__auto__,"thi.ng.geom.types/Polygon2");
});
thi.ng.geom.types.__GT_Polygon2 = (function __GT_Polygon2(points){return (new thi.ng.geom.types.Polygon2(points));
});
thi.ng.geom.types.map__GT_Polygon2 = (function map__GT_Polygon2(G__7741){return (new thi.ng.geom.types.Polygon2(new cljs.core.Keyword(null,"points","points",4326117461).cljs$core$IFn$_invoke$arity$1(G__7741),null,cljs.core.dissoc.call(null,G__7741,new cljs.core.Keyword(null,"points","points",4326117461))));
});

/**
* @constructor
* @param {*} p
* @param {*} size
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
thi.ng.geom.types.Rect2 = (function (p,size,__meta,__extmap){
this.p = p;
this.size = size;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>2){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
thi.ng.geom.types.Rect2.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4067__auto__,k__4068__auto__){var self__ = this;
var this__4067__auto____$1 = this;return cljs.core._lookup.call(null,this__4067__auto____$1,k__4068__auto__,null);
});
thi.ng.geom.types.Rect2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4069__auto__,k7746,else__4070__auto__){var self__ = this;
var this__4069__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k7746,new cljs.core.Keyword(null,"p","p",1013904354)))
{return self__.p;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k7746,new cljs.core.Keyword(null,"size","size",1017434995)))
{return self__.size;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k7746,else__4070__auto__);
} else
{return null;
}
}
}
});
thi.ng.geom.types.Rect2.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4081__auto__,writer__4082__auto__,opts__4083__auto__){var self__ = this;
var this__4081__auto____$1 = this;var pr_pair__4084__auto__ = ((function (this__4081__auto____$1){
return (function (keyval__4085__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4082__auto__,cljs.core.pr_writer,""," ","",opts__4083__auto__,keyval__4085__auto__);
});})(this__4081__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4082__auto__,pr_pair__4084__auto__,"#thi.ng.geom.types.Rect2{",", ","}",opts__4083__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p","p",1013904354),self__.p],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"size","size",1017434995),self__.size],null))], null),self__.__extmap));
});
thi.ng.geom.types.Rect2.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4065__auto__){var self__ = this;
var this__4065__auto____$1 = this;return self__.__meta;
});
thi.ng.geom.types.Rect2.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4061__auto__){var self__ = this;
var this__4061__auto____$1 = this;return (new thi.ng.geom.types.Rect2(self__.p,self__.size,self__.__meta,self__.__extmap,self__.__hash));
});
thi.ng.geom.types.Rect2.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4071__auto__){var self__ = this;
var this__4071__auto____$1 = this;return (2 + cljs.core.count.call(null,self__.__extmap));
});
thi.ng.geom.types.Rect2.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4062__auto__){var self__ = this;
var this__4062__auto____$1 = this;var h__3892__auto__ = self__.__hash;if(!((h__3892__auto__ == null)))
{return h__3892__auto__;
} else
{var h__3892__auto____$1 = cljs.core.hash_imap.call(null,this__4062__auto____$1);self__.__hash = h__3892__auto____$1;
return h__3892__auto____$1;
}
});
thi.ng.geom.types.Rect2.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4063__auto__,other__4064__auto__){var self__ = this;
var this__4063__auto____$1 = this;if(cljs.core.truth_((function (){var and__3469__auto__ = other__4064__auto__;if(cljs.core.truth_(and__3469__auto__))
{return ((this__4063__auto____$1.constructor === other__4064__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__4063__auto____$1,other__4064__auto__));
} else
{return and__3469__auto__;
}
})()))
{return true;
} else
{return false;
}
});
thi.ng.geom.types.Rect2.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4076__auto__,k__4077__auto__){var self__ = this;
var this__4076__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1017434995),null,new cljs.core.Keyword(null,"p","p",1013904354),null], null), null),k__4077__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4076__auto____$1),self__.__meta),k__4077__auto__);
} else
{return (new thi.ng.geom.types.Rect2(self__.p,self__.size,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4077__auto__)),null));
}
});
thi.ng.geom.types.Rect2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4074__auto__,k__4075__auto__,G__7745){var self__ = this;
var this__4074__auto____$1 = this;var pred__7748 = cljs.core.keyword_identical_QMARK_;var expr__7749 = k__4075__auto__;if(cljs.core.truth_(pred__7748.call(null,new cljs.core.Keyword(null,"p","p",1013904354),expr__7749)))
{return (new thi.ng.geom.types.Rect2(G__7745,self__.size,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__7748.call(null,new cljs.core.Keyword(null,"size","size",1017434995),expr__7749)))
{return (new thi.ng.geom.types.Rect2(self__.p,G__7745,self__.__meta,self__.__extmap,null));
} else
{return (new thi.ng.geom.types.Rect2(self__.p,self__.size,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4075__auto__,G__7745),null));
}
}
});
thi.ng.geom.types.Rect2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4079__auto__){var self__ = this;
var this__4079__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p","p",1013904354),self__.p],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"size","size",1017434995),self__.size],null))], null),self__.__extmap));
});
thi.ng.geom.types.Rect2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4066__auto__,G__7745){var self__ = this;
var this__4066__auto____$1 = this;return (new thi.ng.geom.types.Rect2(self__.p,self__.size,G__7745,self__.__extmap,self__.__hash));
});
thi.ng.geom.types.Rect2.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4072__auto__,entry__4073__auto__){var self__ = this;
var this__4072__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4073__auto__))
{return cljs.core._assoc.call(null,this__4072__auto____$1,cljs.core._nth.call(null,entry__4073__auto__,0),cljs.core._nth.call(null,entry__4073__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4072__auto____$1,entry__4073__auto__);
}
});
thi.ng.geom.types.Rect2.cljs$lang$type = true;
thi.ng.geom.types.Rect2.cljs$lang$ctorPrSeq = (function (this__4101__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Rect2");
});
thi.ng.geom.types.Rect2.cljs$lang$ctorPrWriter = (function (this__4101__auto__,writer__4102__auto__){return cljs.core._write.call(null,writer__4102__auto__,"thi.ng.geom.types/Rect2");
});
thi.ng.geom.types.__GT_Rect2 = (function __GT_Rect2(p,size){return (new thi.ng.geom.types.Rect2(p,size));
});
thi.ng.geom.types.map__GT_Rect2 = (function map__GT_Rect2(G__7747){return (new thi.ng.geom.types.Rect2(new cljs.core.Keyword(null,"p","p",1013904354).cljs$core$IFn$_invoke$arity$1(G__7747),new cljs.core.Keyword(null,"size","size",1017434995).cljs$core$IFn$_invoke$arity$1(G__7747),null,cljs.core.dissoc.call(null,G__7747,new cljs.core.Keyword(null,"p","p",1013904354),new cljs.core.Keyword(null,"size","size",1017434995))));
});

/**
* @constructor
* @param {*} points
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
thi.ng.geom.types.Triangle2 = (function (points,__meta,__extmap){
this.points = points;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>1){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
thi.ng.geom.types.Triangle2.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4067__auto__,k__4068__auto__){var self__ = this;
var this__4067__auto____$1 = this;return cljs.core._lookup.call(null,this__4067__auto____$1,k__4068__auto__,null);
});
thi.ng.geom.types.Triangle2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4069__auto__,k7752,else__4070__auto__){var self__ = this;
var this__4069__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k7752,new cljs.core.Keyword(null,"points","points",4326117461)))
{return self__.points;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k7752,else__4070__auto__);
} else
{return null;
}
}
});
thi.ng.geom.types.Triangle2.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4081__auto__,writer__4082__auto__,opts__4083__auto__){var self__ = this;
var this__4081__auto____$1 = this;var pr_pair__4084__auto__ = ((function (this__4081__auto____$1){
return (function (keyval__4085__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4082__auto__,cljs.core.pr_writer,""," ","",opts__4083__auto__,keyval__4085__auto__);
});})(this__4081__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4082__auto__,pr_pair__4084__auto__,"#thi.ng.geom.types.Triangle2{",", ","}",opts__4083__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",4326117461),self__.points],null))], null),self__.__extmap));
});
thi.ng.geom.types.Triangle2.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4065__auto__){var self__ = this;
var this__4065__auto____$1 = this;return self__.__meta;
});
thi.ng.geom.types.Triangle2.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4061__auto__){var self__ = this;
var this__4061__auto____$1 = this;return (new thi.ng.geom.types.Triangle2(self__.points,self__.__meta,self__.__extmap,self__.__hash));
});
thi.ng.geom.types.Triangle2.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4071__auto__){var self__ = this;
var this__4071__auto____$1 = this;return (1 + cljs.core.count.call(null,self__.__extmap));
});
thi.ng.geom.types.Triangle2.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4062__auto__){var self__ = this;
var this__4062__auto____$1 = this;var h__3892__auto__ = self__.__hash;if(!((h__3892__auto__ == null)))
{return h__3892__auto__;
} else
{var h__3892__auto____$1 = cljs.core.hash_imap.call(null,this__4062__auto____$1);self__.__hash = h__3892__auto____$1;
return h__3892__auto____$1;
}
});
thi.ng.geom.types.Triangle2.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4063__auto__,other__4064__auto__){var self__ = this;
var this__4063__auto____$1 = this;if(cljs.core.truth_((function (){var and__3469__auto__ = other__4064__auto__;if(cljs.core.truth_(and__3469__auto__))
{return ((this__4063__auto____$1.constructor === other__4064__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__4063__auto____$1,other__4064__auto__));
} else
{return and__3469__auto__;
}
})()))
{return true;
} else
{return false;
}
});
thi.ng.geom.types.Triangle2.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4076__auto__,k__4077__auto__){var self__ = this;
var this__4076__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",4326117461),null], null), null),k__4077__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4076__auto____$1),self__.__meta),k__4077__auto__);
} else
{return (new thi.ng.geom.types.Triangle2(self__.points,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4077__auto__)),null));
}
});
thi.ng.geom.types.Triangle2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4074__auto__,k__4075__auto__,G__7751){var self__ = this;
var this__4074__auto____$1 = this;var pred__7754 = cljs.core.keyword_identical_QMARK_;var expr__7755 = k__4075__auto__;if(cljs.core.truth_(pred__7754.call(null,new cljs.core.Keyword(null,"points","points",4326117461),expr__7755)))
{return (new thi.ng.geom.types.Triangle2(G__7751,self__.__meta,self__.__extmap,null));
} else
{return (new thi.ng.geom.types.Triangle2(self__.points,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4075__auto__,G__7751),null));
}
});
thi.ng.geom.types.Triangle2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4079__auto__){var self__ = this;
var this__4079__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",4326117461),self__.points],null))], null),self__.__extmap));
});
thi.ng.geom.types.Triangle2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4066__auto__,G__7751){var self__ = this;
var this__4066__auto____$1 = this;return (new thi.ng.geom.types.Triangle2(self__.points,G__7751,self__.__extmap,self__.__hash));
});
thi.ng.geom.types.Triangle2.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4072__auto__,entry__4073__auto__){var self__ = this;
var this__4072__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4073__auto__))
{return cljs.core._assoc.call(null,this__4072__auto____$1,cljs.core._nth.call(null,entry__4073__auto__,0),cljs.core._nth.call(null,entry__4073__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4072__auto____$1,entry__4073__auto__);
}
});
thi.ng.geom.types.Triangle2.cljs$lang$type = true;
thi.ng.geom.types.Triangle2.cljs$lang$ctorPrSeq = (function (this__4101__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Triangle2");
});
thi.ng.geom.types.Triangle2.cljs$lang$ctorPrWriter = (function (this__4101__auto__,writer__4102__auto__){return cljs.core._write.call(null,writer__4102__auto__,"thi.ng.geom.types/Triangle2");
});
thi.ng.geom.types.__GT_Triangle2 = (function __GT_Triangle2(points){return (new thi.ng.geom.types.Triangle2(points));
});
thi.ng.geom.types.map__GT_Triangle2 = (function map__GT_Triangle2(G__7753){return (new thi.ng.geom.types.Triangle2(new cljs.core.Keyword(null,"points","points",4326117461).cljs$core$IFn$_invoke$arity$1(G__7753),null,cljs.core.dissoc.call(null,G__7753,new cljs.core.Keyword(null,"points","points",4326117461))));
});

/**
* @constructor
* @param {*} p
* @param {*} size
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
thi.ng.geom.types.AABB = (function (p,size,__meta,__extmap){
this.p = p;
this.size = size;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>2){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
thi.ng.geom.types.AABB.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4067__auto__,k__4068__auto__){var self__ = this;
var this__4067__auto____$1 = this;return cljs.core._lookup.call(null,this__4067__auto____$1,k__4068__auto__,null);
});
thi.ng.geom.types.AABB.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4069__auto__,k7758,else__4070__auto__){var self__ = this;
var this__4069__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k7758,new cljs.core.Keyword(null,"p","p",1013904354)))
{return self__.p;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k7758,new cljs.core.Keyword(null,"size","size",1017434995)))
{return self__.size;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k7758,else__4070__auto__);
} else
{return null;
}
}
}
});
thi.ng.geom.types.AABB.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4081__auto__,writer__4082__auto__,opts__4083__auto__){var self__ = this;
var this__4081__auto____$1 = this;var pr_pair__4084__auto__ = ((function (this__4081__auto____$1){
return (function (keyval__4085__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4082__auto__,cljs.core.pr_writer,""," ","",opts__4083__auto__,keyval__4085__auto__);
});})(this__4081__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4082__auto__,pr_pair__4084__auto__,"#thi.ng.geom.types.AABB{",", ","}",opts__4083__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p","p",1013904354),self__.p],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"size","size",1017434995),self__.size],null))], null),self__.__extmap));
});
thi.ng.geom.types.AABB.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4065__auto__){var self__ = this;
var this__4065__auto____$1 = this;return self__.__meta;
});
thi.ng.geom.types.AABB.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4061__auto__){var self__ = this;
var this__4061__auto____$1 = this;return (new thi.ng.geom.types.AABB(self__.p,self__.size,self__.__meta,self__.__extmap,self__.__hash));
});
thi.ng.geom.types.AABB.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4071__auto__){var self__ = this;
var this__4071__auto____$1 = this;return (2 + cljs.core.count.call(null,self__.__extmap));
});
thi.ng.geom.types.AABB.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4062__auto__){var self__ = this;
var this__4062__auto____$1 = this;var h__3892__auto__ = self__.__hash;if(!((h__3892__auto__ == null)))
{return h__3892__auto__;
} else
{var h__3892__auto____$1 = cljs.core.hash_imap.call(null,this__4062__auto____$1);self__.__hash = h__3892__auto____$1;
return h__3892__auto____$1;
}
});
thi.ng.geom.types.AABB.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4063__auto__,other__4064__auto__){var self__ = this;
var this__4063__auto____$1 = this;if(cljs.core.truth_((function (){var and__3469__auto__ = other__4064__auto__;if(cljs.core.truth_(and__3469__auto__))
{return ((this__4063__auto____$1.constructor === other__4064__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__4063__auto____$1,other__4064__auto__));
} else
{return and__3469__auto__;
}
})()))
{return true;
} else
{return false;
}
});
thi.ng.geom.types.AABB.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4076__auto__,k__4077__auto__){var self__ = this;
var this__4076__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1017434995),null,new cljs.core.Keyword(null,"p","p",1013904354),null], null), null),k__4077__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4076__auto____$1),self__.__meta),k__4077__auto__);
} else
{return (new thi.ng.geom.types.AABB(self__.p,self__.size,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4077__auto__)),null));
}
});
thi.ng.geom.types.AABB.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4074__auto__,k__4075__auto__,G__7757){var self__ = this;
var this__4074__auto____$1 = this;var pred__7760 = cljs.core.keyword_identical_QMARK_;var expr__7761 = k__4075__auto__;if(cljs.core.truth_(pred__7760.call(null,new cljs.core.Keyword(null,"p","p",1013904354),expr__7761)))
{return (new thi.ng.geom.types.AABB(G__7757,self__.size,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__7760.call(null,new cljs.core.Keyword(null,"size","size",1017434995),expr__7761)))
{return (new thi.ng.geom.types.AABB(self__.p,G__7757,self__.__meta,self__.__extmap,null));
} else
{return (new thi.ng.geom.types.AABB(self__.p,self__.size,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4075__auto__,G__7757),null));
}
}
});
thi.ng.geom.types.AABB.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4079__auto__){var self__ = this;
var this__4079__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p","p",1013904354),self__.p],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"size","size",1017434995),self__.size],null))], null),self__.__extmap));
});
thi.ng.geom.types.AABB.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4066__auto__,G__7757){var self__ = this;
var this__4066__auto____$1 = this;return (new thi.ng.geom.types.AABB(self__.p,self__.size,G__7757,self__.__extmap,self__.__hash));
});
thi.ng.geom.types.AABB.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4072__auto__,entry__4073__auto__){var self__ = this;
var this__4072__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4073__auto__))
{return cljs.core._assoc.call(null,this__4072__auto____$1,cljs.core._nth.call(null,entry__4073__auto__,0),cljs.core._nth.call(null,entry__4073__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4072__auto____$1,entry__4073__auto__);
}
});
thi.ng.geom.types.AABB.cljs$lang$type = true;
thi.ng.geom.types.AABB.cljs$lang$ctorPrSeq = (function (this__4101__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/AABB");
});
thi.ng.geom.types.AABB.cljs$lang$ctorPrWriter = (function (this__4101__auto__,writer__4102__auto__){return cljs.core._write.call(null,writer__4102__auto__,"thi.ng.geom.types/AABB");
});
thi.ng.geom.types.__GT_AABB = (function __GT_AABB(p,size){return (new thi.ng.geom.types.AABB(p,size));
});
thi.ng.geom.types.map__GT_AABB = (function map__GT_AABB(G__7759){return (new thi.ng.geom.types.AABB(new cljs.core.Keyword(null,"p","p",1013904354).cljs$core$IFn$_invoke$arity$1(G__7759),new cljs.core.Keyword(null,"size","size",1017434995).cljs$core$IFn$_invoke$arity$1(G__7759),null,cljs.core.dissoc.call(null,G__7759,new cljs.core.Keyword(null,"p","p",1013904354),new cljs.core.Keyword(null,"size","size",1017434995))));
});

/**
* @constructor
* @param {*} points
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
thi.ng.geom.types.Cuboid = (function (points,__meta,__extmap){
this.points = points;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>1){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
thi.ng.geom.types.Cuboid.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4067__auto__,k__4068__auto__){var self__ = this;
var this__4067__auto____$1 = this;return cljs.core._lookup.call(null,this__4067__auto____$1,k__4068__auto__,null);
});
thi.ng.geom.types.Cuboid.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4069__auto__,k7764,else__4070__auto__){var self__ = this;
var this__4069__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k7764,new cljs.core.Keyword(null,"points","points",4326117461)))
{return self__.points;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k7764,else__4070__auto__);
} else
{return null;
}
}
});
thi.ng.geom.types.Cuboid.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4081__auto__,writer__4082__auto__,opts__4083__auto__){var self__ = this;
var this__4081__auto____$1 = this;var pr_pair__4084__auto__ = ((function (this__4081__auto____$1){
return (function (keyval__4085__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4082__auto__,cljs.core.pr_writer,""," ","",opts__4083__auto__,keyval__4085__auto__);
});})(this__4081__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4082__auto__,pr_pair__4084__auto__,"#thi.ng.geom.types.Cuboid{",", ","}",opts__4083__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",4326117461),self__.points],null))], null),self__.__extmap));
});
thi.ng.geom.types.Cuboid.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4065__auto__){var self__ = this;
var this__4065__auto____$1 = this;return self__.__meta;
});
thi.ng.geom.types.Cuboid.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4061__auto__){var self__ = this;
var this__4061__auto____$1 = this;return (new thi.ng.geom.types.Cuboid(self__.points,self__.__meta,self__.__extmap,self__.__hash));
});
thi.ng.geom.types.Cuboid.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4071__auto__){var self__ = this;
var this__4071__auto____$1 = this;return (1 + cljs.core.count.call(null,self__.__extmap));
});
thi.ng.geom.types.Cuboid.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4062__auto__){var self__ = this;
var this__4062__auto____$1 = this;var h__3892__auto__ = self__.__hash;if(!((h__3892__auto__ == null)))
{return h__3892__auto__;
} else
{var h__3892__auto____$1 = cljs.core.hash_imap.call(null,this__4062__auto____$1);self__.__hash = h__3892__auto____$1;
return h__3892__auto____$1;
}
});
thi.ng.geom.types.Cuboid.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4063__auto__,other__4064__auto__){var self__ = this;
var this__4063__auto____$1 = this;if(cljs.core.truth_((function (){var and__3469__auto__ = other__4064__auto__;if(cljs.core.truth_(and__3469__auto__))
{return ((this__4063__auto____$1.constructor === other__4064__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__4063__auto____$1,other__4064__auto__));
} else
{return and__3469__auto__;
}
})()))
{return true;
} else
{return false;
}
});
thi.ng.geom.types.Cuboid.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4076__auto__,k__4077__auto__){var self__ = this;
var this__4076__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",4326117461),null], null), null),k__4077__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4076__auto____$1),self__.__meta),k__4077__auto__);
} else
{return (new thi.ng.geom.types.Cuboid(self__.points,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4077__auto__)),null));
}
});
thi.ng.geom.types.Cuboid.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4074__auto__,k__4075__auto__,G__7763){var self__ = this;
var this__4074__auto____$1 = this;var pred__7766 = cljs.core.keyword_identical_QMARK_;var expr__7767 = k__4075__auto__;if(cljs.core.truth_(pred__7766.call(null,new cljs.core.Keyword(null,"points","points",4326117461),expr__7767)))
{return (new thi.ng.geom.types.Cuboid(G__7763,self__.__meta,self__.__extmap,null));
} else
{return (new thi.ng.geom.types.Cuboid(self__.points,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4075__auto__,G__7763),null));
}
});
thi.ng.geom.types.Cuboid.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4079__auto__){var self__ = this;
var this__4079__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",4326117461),self__.points],null))], null),self__.__extmap));
});
thi.ng.geom.types.Cuboid.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4066__auto__,G__7763){var self__ = this;
var this__4066__auto____$1 = this;return (new thi.ng.geom.types.Cuboid(self__.points,G__7763,self__.__extmap,self__.__hash));
});
thi.ng.geom.types.Cuboid.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4072__auto__,entry__4073__auto__){var self__ = this;
var this__4072__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4073__auto__))
{return cljs.core._assoc.call(null,this__4072__auto____$1,cljs.core._nth.call(null,entry__4073__auto__,0),cljs.core._nth.call(null,entry__4073__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4072__auto____$1,entry__4073__auto__);
}
});
thi.ng.geom.types.Cuboid.cljs$lang$type = true;
thi.ng.geom.types.Cuboid.cljs$lang$ctorPrSeq = (function (this__4101__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Cuboid");
});
thi.ng.geom.types.Cuboid.cljs$lang$ctorPrWriter = (function (this__4101__auto__,writer__4102__auto__){return cljs.core._write.call(null,writer__4102__auto__,"thi.ng.geom.types/Cuboid");
});
thi.ng.geom.types.__GT_Cuboid = (function __GT_Cuboid(points){return (new thi.ng.geom.types.Cuboid(points));
});
thi.ng.geom.types.map__GT_Cuboid = (function map__GT_Cuboid(G__7765){return (new thi.ng.geom.types.Cuboid(new cljs.core.Keyword(null,"points","points",4326117461).cljs$core$IFn$_invoke$arity$1(G__7765),null,cljs.core.dissoc.call(null,G__7765,new cljs.core.Keyword(null,"points","points",4326117461))));
});

/**
* @constructor
* @param {*} points
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
thi.ng.geom.types.Bezier3 = (function (points,__meta,__extmap){
this.points = points;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>1){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
thi.ng.geom.types.Bezier3.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4067__auto__,k__4068__auto__){var self__ = this;
var this__4067__auto____$1 = this;return cljs.core._lookup.call(null,this__4067__auto____$1,k__4068__auto__,null);
});
thi.ng.geom.types.Bezier3.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4069__auto__,k7770,else__4070__auto__){var self__ = this;
var this__4069__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k7770,new cljs.core.Keyword(null,"points","points",4326117461)))
{return self__.points;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k7770,else__4070__auto__);
} else
{return null;
}
}
});
thi.ng.geom.types.Bezier3.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4081__auto__,writer__4082__auto__,opts__4083__auto__){var self__ = this;
var this__4081__auto____$1 = this;var pr_pair__4084__auto__ = ((function (this__4081__auto____$1){
return (function (keyval__4085__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4082__auto__,cljs.core.pr_writer,""," ","",opts__4083__auto__,keyval__4085__auto__);
});})(this__4081__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4082__auto__,pr_pair__4084__auto__,"#thi.ng.geom.types.Bezier3{",", ","}",opts__4083__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",4326117461),self__.points],null))], null),self__.__extmap));
});
thi.ng.geom.types.Bezier3.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4065__auto__){var self__ = this;
var this__4065__auto____$1 = this;return self__.__meta;
});
thi.ng.geom.types.Bezier3.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4061__auto__){var self__ = this;
var this__4061__auto____$1 = this;return (new thi.ng.geom.types.Bezier3(self__.points,self__.__meta,self__.__extmap,self__.__hash));
});
thi.ng.geom.types.Bezier3.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4071__auto__){var self__ = this;
var this__4071__auto____$1 = this;return (1 + cljs.core.count.call(null,self__.__extmap));
});
thi.ng.geom.types.Bezier3.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4062__auto__){var self__ = this;
var this__4062__auto____$1 = this;var h__3892__auto__ = self__.__hash;if(!((h__3892__auto__ == null)))
{return h__3892__auto__;
} else
{var h__3892__auto____$1 = cljs.core.hash_imap.call(null,this__4062__auto____$1);self__.__hash = h__3892__auto____$1;
return h__3892__auto____$1;
}
});
thi.ng.geom.types.Bezier3.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4063__auto__,other__4064__auto__){var self__ = this;
var this__4063__auto____$1 = this;if(cljs.core.truth_((function (){var and__3469__auto__ = other__4064__auto__;if(cljs.core.truth_(and__3469__auto__))
{return ((this__4063__auto____$1.constructor === other__4064__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__4063__auto____$1,other__4064__auto__));
} else
{return and__3469__auto__;
}
})()))
{return true;
} else
{return false;
}
});
thi.ng.geom.types.Bezier3.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4076__auto__,k__4077__auto__){var self__ = this;
var this__4076__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",4326117461),null], null), null),k__4077__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4076__auto____$1),self__.__meta),k__4077__auto__);
} else
{return (new thi.ng.geom.types.Bezier3(self__.points,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4077__auto__)),null));
}
});
thi.ng.geom.types.Bezier3.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4074__auto__,k__4075__auto__,G__7769){var self__ = this;
var this__4074__auto____$1 = this;var pred__7772 = cljs.core.keyword_identical_QMARK_;var expr__7773 = k__4075__auto__;if(cljs.core.truth_(pred__7772.call(null,new cljs.core.Keyword(null,"points","points",4326117461),expr__7773)))
{return (new thi.ng.geom.types.Bezier3(G__7769,self__.__meta,self__.__extmap,null));
} else
{return (new thi.ng.geom.types.Bezier3(self__.points,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4075__auto__,G__7769),null));
}
});
thi.ng.geom.types.Bezier3.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4079__auto__){var self__ = this;
var this__4079__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",4326117461),self__.points],null))], null),self__.__extmap));
});
thi.ng.geom.types.Bezier3.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4066__auto__,G__7769){var self__ = this;
var this__4066__auto____$1 = this;return (new thi.ng.geom.types.Bezier3(self__.points,G__7769,self__.__extmap,self__.__hash));
});
thi.ng.geom.types.Bezier3.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4072__auto__,entry__4073__auto__){var self__ = this;
var this__4072__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4073__auto__))
{return cljs.core._assoc.call(null,this__4072__auto____$1,cljs.core._nth.call(null,entry__4073__auto__,0),cljs.core._nth.call(null,entry__4073__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4072__auto____$1,entry__4073__auto__);
}
});
thi.ng.geom.types.Bezier3.cljs$lang$type = true;
thi.ng.geom.types.Bezier3.cljs$lang$ctorPrSeq = (function (this__4101__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Bezier3");
});
thi.ng.geom.types.Bezier3.cljs$lang$ctorPrWriter = (function (this__4101__auto__,writer__4102__auto__){return cljs.core._write.call(null,writer__4102__auto__,"thi.ng.geom.types/Bezier3");
});
thi.ng.geom.types.__GT_Bezier3 = (function __GT_Bezier3(points){return (new thi.ng.geom.types.Bezier3(points));
});
thi.ng.geom.types.map__GT_Bezier3 = (function map__GT_Bezier3(G__7771){return (new thi.ng.geom.types.Bezier3(new cljs.core.Keyword(null,"points","points",4326117461).cljs$core$IFn$_invoke$arity$1(G__7771),null,cljs.core.dissoc.call(null,G__7771,new cljs.core.Keyword(null,"points","points",4326117461))));
});

/**
* @constructor
* @param {*} vertices
* @param {*} normals
* @param {*} fnormals
* @param {*} vnormals
* @param {*} edges
* @param {*} faces
* @param {*} attribs
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
thi.ng.geom.types.GMesh = (function (vertices,normals,fnormals,vnormals,edges,faces,attribs,__meta,__extmap){
this.vertices = vertices;
this.normals = normals;
this.fnormals = fnormals;
this.vnormals = vnormals;
this.edges = edges;
this.faces = faces;
this.attribs = attribs;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>7){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
thi.ng.geom.types.GMesh.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4067__auto__,k__4068__auto__){var self__ = this;
var this__4067__auto____$1 = this;return cljs.core._lookup.call(null,this__4067__auto____$1,k__4068__auto__,null);
});
thi.ng.geom.types.GMesh.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4069__auto__,k7776,else__4070__auto__){var self__ = this;
var this__4069__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k7776,new cljs.core.Keyword(null,"vertices","vertices",3324730219)))
{return self__.vertices;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k7776,new cljs.core.Keyword(null,"normals","normals",3141522398)))
{return self__.normals;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k7776,new cljs.core.Keyword(null,"fnormals","fnormals",519550136)))
{return self__.fnormals;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k7776,new cljs.core.Keyword(null,"vnormals","vnormals",2634711720)))
{return self__.vnormals;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k7776,new cljs.core.Keyword(null,"edges","edges",1110261192)))
{return self__.edges;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k7776,new cljs.core.Keyword(null,"faces","faces",1111091496)))
{return self__.faces;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k7776,new cljs.core.Keyword(null,"attribs","attribs",4634025563)))
{return self__.attribs;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k7776,else__4070__auto__);
} else
{return null;
}
}
}
}
}
}
}
}
});
thi.ng.geom.types.GMesh.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4081__auto__,writer__4082__auto__,opts__4083__auto__){var self__ = this;
var this__4081__auto____$1 = this;var pr_pair__4084__auto__ = ((function (this__4081__auto____$1){
return (function (keyval__4085__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4082__auto__,cljs.core.pr_writer,""," ","",opts__4083__auto__,keyval__4085__auto__);
});})(this__4081__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4082__auto__,pr_pair__4084__auto__,"#thi.ng.geom.types.GMesh{",", ","}",opts__4083__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vertices","vertices",3324730219),self__.vertices],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"normals","normals",3141522398),self__.normals],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fnormals","fnormals",519550136),self__.fnormals],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vnormals","vnormals",2634711720),self__.vnormals],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"edges","edges",1110261192),self__.edges],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"faces","faces",1111091496),self__.faces],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attribs","attribs",4634025563),self__.attribs],null))], null),self__.__extmap));
});
thi.ng.geom.types.GMesh.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4065__auto__){var self__ = this;
var this__4065__auto____$1 = this;return self__.__meta;
});
thi.ng.geom.types.GMesh.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4061__auto__){var self__ = this;
var this__4061__auto____$1 = this;return (new thi.ng.geom.types.GMesh(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,self__.__extmap,self__.__hash));
});
thi.ng.geom.types.GMesh.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4071__auto__){var self__ = this;
var this__4071__auto____$1 = this;return (7 + cljs.core.count.call(null,self__.__extmap));
});
thi.ng.geom.types.GMesh.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4062__auto__){var self__ = this;
var this__4062__auto____$1 = this;var h__3892__auto__ = self__.__hash;if(!((h__3892__auto__ == null)))
{return h__3892__auto__;
} else
{var h__3892__auto____$1 = cljs.core.hash_imap.call(null,this__4062__auto____$1);self__.__hash = h__3892__auto____$1;
return h__3892__auto____$1;
}
});
thi.ng.geom.types.GMesh.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4063__auto__,other__4064__auto__){var self__ = this;
var this__4063__auto____$1 = this;if(cljs.core.truth_((function (){var and__3469__auto__ = other__4064__auto__;if(cljs.core.truth_(and__3469__auto__))
{return ((this__4063__auto____$1.constructor === other__4064__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__4063__auto____$1,other__4064__auto__));
} else
{return and__3469__auto__;
}
})()))
{return true;
} else
{return false;
}
});
thi.ng.geom.types.GMesh.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4076__auto__,k__4077__auto__){var self__ = this;
var this__4076__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"vertices","vertices",3324730219),null,new cljs.core.Keyword(null,"vnormals","vnormals",2634711720),null,new cljs.core.Keyword(null,"attribs","attribs",4634025563),null,new cljs.core.Keyword(null,"normals","normals",3141522398),null,new cljs.core.Keyword(null,"faces","faces",1111091496),null,new cljs.core.Keyword(null,"edges","edges",1110261192),null,new cljs.core.Keyword(null,"fnormals","fnormals",519550136),null], null), null),k__4077__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4076__auto____$1),self__.__meta),k__4077__auto__);
} else
{return (new thi.ng.geom.types.GMesh(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4077__auto__)),null));
}
});
thi.ng.geom.types.GMesh.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4074__auto__,k__4075__auto__,G__7775){var self__ = this;
var this__4074__auto____$1 = this;var pred__7778 = cljs.core.keyword_identical_QMARK_;var expr__7779 = k__4075__auto__;if(cljs.core.truth_(pred__7778.call(null,new cljs.core.Keyword(null,"vertices","vertices",3324730219),expr__7779)))
{return (new thi.ng.geom.types.GMesh(G__7775,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__7778.call(null,new cljs.core.Keyword(null,"normals","normals",3141522398),expr__7779)))
{return (new thi.ng.geom.types.GMesh(self__.vertices,G__7775,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__7778.call(null,new cljs.core.Keyword(null,"fnormals","fnormals",519550136),expr__7779)))
{return (new thi.ng.geom.types.GMesh(self__.vertices,self__.normals,G__7775,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__7778.call(null,new cljs.core.Keyword(null,"vnormals","vnormals",2634711720),expr__7779)))
{return (new thi.ng.geom.types.GMesh(self__.vertices,self__.normals,self__.fnormals,G__7775,self__.edges,self__.faces,self__.attribs,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__7778.call(null,new cljs.core.Keyword(null,"edges","edges",1110261192),expr__7779)))
{return (new thi.ng.geom.types.GMesh(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,G__7775,self__.faces,self__.attribs,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__7778.call(null,new cljs.core.Keyword(null,"faces","faces",1111091496),expr__7779)))
{return (new thi.ng.geom.types.GMesh(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,G__7775,self__.attribs,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__7778.call(null,new cljs.core.Keyword(null,"attribs","attribs",4634025563),expr__7779)))
{return (new thi.ng.geom.types.GMesh(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,G__7775,self__.__meta,self__.__extmap,null));
} else
{return (new thi.ng.geom.types.GMesh(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4075__auto__,G__7775),null));
}
}
}
}
}
}
}
});
thi.ng.geom.types.GMesh.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4079__auto__){var self__ = this;
var this__4079__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vertices","vertices",3324730219),self__.vertices],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"normals","normals",3141522398),self__.normals],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fnormals","fnormals",519550136),self__.fnormals],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vnormals","vnormals",2634711720),self__.vnormals],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"edges","edges",1110261192),self__.edges],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"faces","faces",1111091496),self__.faces],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attribs","attribs",4634025563),self__.attribs],null))], null),self__.__extmap));
});
thi.ng.geom.types.GMesh.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4066__auto__,G__7775){var self__ = this;
var this__4066__auto____$1 = this;return (new thi.ng.geom.types.GMesh(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,G__7775,self__.__extmap,self__.__hash));
});
thi.ng.geom.types.GMesh.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4072__auto__,entry__4073__auto__){var self__ = this;
var this__4072__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4073__auto__))
{return cljs.core._assoc.call(null,this__4072__auto____$1,cljs.core._nth.call(null,entry__4073__auto__,0),cljs.core._nth.call(null,entry__4073__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4072__auto____$1,entry__4073__auto__);
}
});
thi.ng.geom.types.GMesh.cljs$lang$type = true;
thi.ng.geom.types.GMesh.cljs$lang$ctorPrSeq = (function (this__4101__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/GMesh");
});
thi.ng.geom.types.GMesh.cljs$lang$ctorPrWriter = (function (this__4101__auto__,writer__4102__auto__){return cljs.core._write.call(null,writer__4102__auto__,"thi.ng.geom.types/GMesh");
});
thi.ng.geom.types.__GT_GMesh = (function __GT_GMesh(vertices,normals,fnormals,vnormals,edges,faces,attribs){return (new thi.ng.geom.types.GMesh(vertices,normals,fnormals,vnormals,edges,faces,attribs));
});
thi.ng.geom.types.map__GT_GMesh = (function map__GT_GMesh(G__7777){return (new thi.ng.geom.types.GMesh(new cljs.core.Keyword(null,"vertices","vertices",3324730219).cljs$core$IFn$_invoke$arity$1(G__7777),new cljs.core.Keyword(null,"normals","normals",3141522398).cljs$core$IFn$_invoke$arity$1(G__7777),new cljs.core.Keyword(null,"fnormals","fnormals",519550136).cljs$core$IFn$_invoke$arity$1(G__7777),new cljs.core.Keyword(null,"vnormals","vnormals",2634711720).cljs$core$IFn$_invoke$arity$1(G__7777),new cljs.core.Keyword(null,"edges","edges",1110261192).cljs$core$IFn$_invoke$arity$1(G__7777),new cljs.core.Keyword(null,"faces","faces",1111091496).cljs$core$IFn$_invoke$arity$1(G__7777),new cljs.core.Keyword(null,"attribs","attribs",4634025563).cljs$core$IFn$_invoke$arity$1(G__7777),null,cljs.core.dissoc.call(null,G__7777,new cljs.core.Keyword(null,"vertices","vertices",3324730219),new cljs.core.Keyword(null,"normals","normals",3141522398),new cljs.core.Keyword(null,"fnormals","fnormals",519550136),new cljs.core.Keyword(null,"vnormals","vnormals",2634711720),new cljs.core.Keyword(null,"edges","edges",1110261192),new cljs.core.Keyword(null,"faces","faces",1111091496),new cljs.core.Keyword(null,"attribs","attribs",4634025563))));
});

/**
* @constructor
* @param {*} points
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
thi.ng.geom.types.Line3 = (function (points,__meta,__extmap){
this.points = points;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>1){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
thi.ng.geom.types.Line3.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4067__auto__,k__4068__auto__){var self__ = this;
var this__4067__auto____$1 = this;return cljs.core._lookup.call(null,this__4067__auto____$1,k__4068__auto__,null);
});
thi.ng.geom.types.Line3.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4069__auto__,k7782,else__4070__auto__){var self__ = this;
var this__4069__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k7782,new cljs.core.Keyword(null,"points","points",4326117461)))
{return self__.points;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k7782,else__4070__auto__);
} else
{return null;
}
}
});
thi.ng.geom.types.Line3.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4081__auto__,writer__4082__auto__,opts__4083__auto__){var self__ = this;
var this__4081__auto____$1 = this;var pr_pair__4084__auto__ = ((function (this__4081__auto____$1){
return (function (keyval__4085__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4082__auto__,cljs.core.pr_writer,""," ","",opts__4083__auto__,keyval__4085__auto__);
});})(this__4081__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4082__auto__,pr_pair__4084__auto__,"#thi.ng.geom.types.Line3{",", ","}",opts__4083__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",4326117461),self__.points],null))], null),self__.__extmap));
});
thi.ng.geom.types.Line3.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4065__auto__){var self__ = this;
var this__4065__auto____$1 = this;return self__.__meta;
});
thi.ng.geom.types.Line3.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4061__auto__){var self__ = this;
var this__4061__auto____$1 = this;return (new thi.ng.geom.types.Line3(self__.points,self__.__meta,self__.__extmap,self__.__hash));
});
thi.ng.geom.types.Line3.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4071__auto__){var self__ = this;
var this__4071__auto____$1 = this;return (1 + cljs.core.count.call(null,self__.__extmap));
});
thi.ng.geom.types.Line3.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4062__auto__){var self__ = this;
var this__4062__auto____$1 = this;var h__3892__auto__ = self__.__hash;if(!((h__3892__auto__ == null)))
{return h__3892__auto__;
} else
{var h__3892__auto____$1 = cljs.core.hash_imap.call(null,this__4062__auto____$1);self__.__hash = h__3892__auto____$1;
return h__3892__auto____$1;
}
});
thi.ng.geom.types.Line3.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4063__auto__,other__4064__auto__){var self__ = this;
var this__4063__auto____$1 = this;if(cljs.core.truth_((function (){var and__3469__auto__ = other__4064__auto__;if(cljs.core.truth_(and__3469__auto__))
{return ((this__4063__auto____$1.constructor === other__4064__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__4063__auto____$1,other__4064__auto__));
} else
{return and__3469__auto__;
}
})()))
{return true;
} else
{return false;
}
});
thi.ng.geom.types.Line3.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4076__auto__,k__4077__auto__){var self__ = this;
var this__4076__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",4326117461),null], null), null),k__4077__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4076__auto____$1),self__.__meta),k__4077__auto__);
} else
{return (new thi.ng.geom.types.Line3(self__.points,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4077__auto__)),null));
}
});
thi.ng.geom.types.Line3.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4074__auto__,k__4075__auto__,G__7781){var self__ = this;
var this__4074__auto____$1 = this;var pred__7784 = cljs.core.keyword_identical_QMARK_;var expr__7785 = k__4075__auto__;if(cljs.core.truth_(pred__7784.call(null,new cljs.core.Keyword(null,"points","points",4326117461),expr__7785)))
{return (new thi.ng.geom.types.Line3(G__7781,self__.__meta,self__.__extmap,null));
} else
{return (new thi.ng.geom.types.Line3(self__.points,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4075__auto__,G__7781),null));
}
});
thi.ng.geom.types.Line3.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4079__auto__){var self__ = this;
var this__4079__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",4326117461),self__.points],null))], null),self__.__extmap));
});
thi.ng.geom.types.Line3.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4066__auto__,G__7781){var self__ = this;
var this__4066__auto____$1 = this;return (new thi.ng.geom.types.Line3(self__.points,G__7781,self__.__extmap,self__.__hash));
});
thi.ng.geom.types.Line3.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4072__auto__,entry__4073__auto__){var self__ = this;
var this__4072__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4073__auto__))
{return cljs.core._assoc.call(null,this__4072__auto____$1,cljs.core._nth.call(null,entry__4073__auto__,0),cljs.core._nth.call(null,entry__4073__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4072__auto____$1,entry__4073__auto__);
}
});
thi.ng.geom.types.Line3.cljs$lang$type = true;
thi.ng.geom.types.Line3.cljs$lang$ctorPrSeq = (function (this__4101__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Line3");
});
thi.ng.geom.types.Line3.cljs$lang$ctorPrWriter = (function (this__4101__auto__,writer__4102__auto__){return cljs.core._write.call(null,writer__4102__auto__,"thi.ng.geom.types/Line3");
});
thi.ng.geom.types.__GT_Line3 = (function __GT_Line3(points){return (new thi.ng.geom.types.Line3(points));
});
thi.ng.geom.types.map__GT_Line3 = (function map__GT_Line3(G__7783){return (new thi.ng.geom.types.Line3(new cljs.core.Keyword(null,"points","points",4326117461).cljs$core$IFn$_invoke$arity$1(G__7783),null,cljs.core.dissoc.call(null,G__7783,new cljs.core.Keyword(null,"points","points",4326117461))));
});

/**
* @constructor
* @param {*} points
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
thi.ng.geom.types.LineStrip3 = (function (points,__meta,__extmap){
this.points = points;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>1){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
thi.ng.geom.types.LineStrip3.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4067__auto__,k__4068__auto__){var self__ = this;
var this__4067__auto____$1 = this;return cljs.core._lookup.call(null,this__4067__auto____$1,k__4068__auto__,null);
});
thi.ng.geom.types.LineStrip3.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4069__auto__,k7788,else__4070__auto__){var self__ = this;
var this__4069__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k7788,new cljs.core.Keyword(null,"points","points",4326117461)))
{return self__.points;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k7788,else__4070__auto__);
} else
{return null;
}
}
});
thi.ng.geom.types.LineStrip3.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4081__auto__,writer__4082__auto__,opts__4083__auto__){var self__ = this;
var this__4081__auto____$1 = this;var pr_pair__4084__auto__ = ((function (this__4081__auto____$1){
return (function (keyval__4085__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4082__auto__,cljs.core.pr_writer,""," ","",opts__4083__auto__,keyval__4085__auto__);
});})(this__4081__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4082__auto__,pr_pair__4084__auto__,"#thi.ng.geom.types.LineStrip3{",", ","}",opts__4083__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",4326117461),self__.points],null))], null),self__.__extmap));
});
thi.ng.geom.types.LineStrip3.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4065__auto__){var self__ = this;
var this__4065__auto____$1 = this;return self__.__meta;
});
thi.ng.geom.types.LineStrip3.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4061__auto__){var self__ = this;
var this__4061__auto____$1 = this;return (new thi.ng.geom.types.LineStrip3(self__.points,self__.__meta,self__.__extmap,self__.__hash));
});
thi.ng.geom.types.LineStrip3.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4071__auto__){var self__ = this;
var this__4071__auto____$1 = this;return (1 + cljs.core.count.call(null,self__.__extmap));
});
thi.ng.geom.types.LineStrip3.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4062__auto__){var self__ = this;
var this__4062__auto____$1 = this;var h__3892__auto__ = self__.__hash;if(!((h__3892__auto__ == null)))
{return h__3892__auto__;
} else
{var h__3892__auto____$1 = cljs.core.hash_imap.call(null,this__4062__auto____$1);self__.__hash = h__3892__auto____$1;
return h__3892__auto____$1;
}
});
thi.ng.geom.types.LineStrip3.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4063__auto__,other__4064__auto__){var self__ = this;
var this__4063__auto____$1 = this;if(cljs.core.truth_((function (){var and__3469__auto__ = other__4064__auto__;if(cljs.core.truth_(and__3469__auto__))
{return ((this__4063__auto____$1.constructor === other__4064__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__4063__auto____$1,other__4064__auto__));
} else
{return and__3469__auto__;
}
})()))
{return true;
} else
{return false;
}
});
thi.ng.geom.types.LineStrip3.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4076__auto__,k__4077__auto__){var self__ = this;
var this__4076__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",4326117461),null], null), null),k__4077__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4076__auto____$1),self__.__meta),k__4077__auto__);
} else
{return (new thi.ng.geom.types.LineStrip3(self__.points,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4077__auto__)),null));
}
});
thi.ng.geom.types.LineStrip3.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4074__auto__,k__4075__auto__,G__7787){var self__ = this;
var this__4074__auto____$1 = this;var pred__7790 = cljs.core.keyword_identical_QMARK_;var expr__7791 = k__4075__auto__;if(cljs.core.truth_(pred__7790.call(null,new cljs.core.Keyword(null,"points","points",4326117461),expr__7791)))
{return (new thi.ng.geom.types.LineStrip3(G__7787,self__.__meta,self__.__extmap,null));
} else
{return (new thi.ng.geom.types.LineStrip3(self__.points,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4075__auto__,G__7787),null));
}
});
thi.ng.geom.types.LineStrip3.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4079__auto__){var self__ = this;
var this__4079__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",4326117461),self__.points],null))], null),self__.__extmap));
});
thi.ng.geom.types.LineStrip3.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4066__auto__,G__7787){var self__ = this;
var this__4066__auto____$1 = this;return (new thi.ng.geom.types.LineStrip3(self__.points,G__7787,self__.__extmap,self__.__hash));
});
thi.ng.geom.types.LineStrip3.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4072__auto__,entry__4073__auto__){var self__ = this;
var this__4072__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4073__auto__))
{return cljs.core._assoc.call(null,this__4072__auto____$1,cljs.core._nth.call(null,entry__4073__auto__,0),cljs.core._nth.call(null,entry__4073__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4072__auto____$1,entry__4073__auto__);
}
});
thi.ng.geom.types.LineStrip3.cljs$lang$type = true;
thi.ng.geom.types.LineStrip3.cljs$lang$ctorPrSeq = (function (this__4101__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/LineStrip3");
});
thi.ng.geom.types.LineStrip3.cljs$lang$ctorPrWriter = (function (this__4101__auto__,writer__4102__auto__){return cljs.core._write.call(null,writer__4102__auto__,"thi.ng.geom.types/LineStrip3");
});
thi.ng.geom.types.__GT_LineStrip3 = (function __GT_LineStrip3(points){return (new thi.ng.geom.types.LineStrip3(points));
});
thi.ng.geom.types.map__GT_LineStrip3 = (function map__GT_LineStrip3(G__7789){return (new thi.ng.geom.types.LineStrip3(new cljs.core.Keyword(null,"points","points",4326117461).cljs$core$IFn$_invoke$arity$1(G__7789),null,cljs.core.dissoc.call(null,G__7789,new cljs.core.Keyword(null,"points","points",4326117461))));
});

/**
* @constructor
* @param {*} vertices
* @param {*} normals
* @param {*} fnormals
* @param {*} vnormals
* @param {*} edges
* @param {*} faces
* @param {*} attribs
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
thi.ng.geom.types.Mesh3 = (function (vertices,normals,fnormals,vnormals,edges,faces,attribs,__meta,__extmap){
this.vertices = vertices;
this.normals = normals;
this.fnormals = fnormals;
this.vnormals = vnormals;
this.edges = edges;
this.faces = faces;
this.attribs = attribs;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>7){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
thi.ng.geom.types.Mesh3.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4067__auto__,k__4068__auto__){var self__ = this;
var this__4067__auto____$1 = this;return cljs.core._lookup.call(null,this__4067__auto____$1,k__4068__auto__,null);
});
thi.ng.geom.types.Mesh3.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4069__auto__,k7794,else__4070__auto__){var self__ = this;
var this__4069__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k7794,new cljs.core.Keyword(null,"vertices","vertices",3324730219)))
{return self__.vertices;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k7794,new cljs.core.Keyword(null,"normals","normals",3141522398)))
{return self__.normals;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k7794,new cljs.core.Keyword(null,"fnormals","fnormals",519550136)))
{return self__.fnormals;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k7794,new cljs.core.Keyword(null,"vnormals","vnormals",2634711720)))
{return self__.vnormals;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k7794,new cljs.core.Keyword(null,"edges","edges",1110261192)))
{return self__.edges;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k7794,new cljs.core.Keyword(null,"faces","faces",1111091496)))
{return self__.faces;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k7794,new cljs.core.Keyword(null,"attribs","attribs",4634025563)))
{return self__.attribs;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k7794,else__4070__auto__);
} else
{return null;
}
}
}
}
}
}
}
}
});
thi.ng.geom.types.Mesh3.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4081__auto__,writer__4082__auto__,opts__4083__auto__){var self__ = this;
var this__4081__auto____$1 = this;var pr_pair__4084__auto__ = ((function (this__4081__auto____$1){
return (function (keyval__4085__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4082__auto__,cljs.core.pr_writer,""," ","",opts__4083__auto__,keyval__4085__auto__);
});})(this__4081__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4082__auto__,pr_pair__4084__auto__,"#thi.ng.geom.types.Mesh3{",", ","}",opts__4083__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vertices","vertices",3324730219),self__.vertices],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"normals","normals",3141522398),self__.normals],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fnormals","fnormals",519550136),self__.fnormals],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vnormals","vnormals",2634711720),self__.vnormals],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"edges","edges",1110261192),self__.edges],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"faces","faces",1111091496),self__.faces],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attribs","attribs",4634025563),self__.attribs],null))], null),self__.__extmap));
});
thi.ng.geom.types.Mesh3.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4065__auto__){var self__ = this;
var this__4065__auto____$1 = this;return self__.__meta;
});
thi.ng.geom.types.Mesh3.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4061__auto__){var self__ = this;
var this__4061__auto____$1 = this;return (new thi.ng.geom.types.Mesh3(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,self__.__extmap,self__.__hash));
});
thi.ng.geom.types.Mesh3.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4071__auto__){var self__ = this;
var this__4071__auto____$1 = this;return (7 + cljs.core.count.call(null,self__.__extmap));
});
thi.ng.geom.types.Mesh3.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4062__auto__){var self__ = this;
var this__4062__auto____$1 = this;var h__3892__auto__ = self__.__hash;if(!((h__3892__auto__ == null)))
{return h__3892__auto__;
} else
{var h__3892__auto____$1 = cljs.core.hash_imap.call(null,this__4062__auto____$1);self__.__hash = h__3892__auto____$1;
return h__3892__auto____$1;
}
});
thi.ng.geom.types.Mesh3.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4063__auto__,other__4064__auto__){var self__ = this;
var this__4063__auto____$1 = this;if(cljs.core.truth_((function (){var and__3469__auto__ = other__4064__auto__;if(cljs.core.truth_(and__3469__auto__))
{return ((this__4063__auto____$1.constructor === other__4064__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__4063__auto____$1,other__4064__auto__));
} else
{return and__3469__auto__;
}
})()))
{return true;
} else
{return false;
}
});
thi.ng.geom.types.Mesh3.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4076__auto__,k__4077__auto__){var self__ = this;
var this__4076__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"vertices","vertices",3324730219),null,new cljs.core.Keyword(null,"vnormals","vnormals",2634711720),null,new cljs.core.Keyword(null,"attribs","attribs",4634025563),null,new cljs.core.Keyword(null,"normals","normals",3141522398),null,new cljs.core.Keyword(null,"faces","faces",1111091496),null,new cljs.core.Keyword(null,"edges","edges",1110261192),null,new cljs.core.Keyword(null,"fnormals","fnormals",519550136),null], null), null),k__4077__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4076__auto____$1),self__.__meta),k__4077__auto__);
} else
{return (new thi.ng.geom.types.Mesh3(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4077__auto__)),null));
}
});
thi.ng.geom.types.Mesh3.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4074__auto__,k__4075__auto__,G__7793){var self__ = this;
var this__4074__auto____$1 = this;var pred__7796 = cljs.core.keyword_identical_QMARK_;var expr__7797 = k__4075__auto__;if(cljs.core.truth_(pred__7796.call(null,new cljs.core.Keyword(null,"vertices","vertices",3324730219),expr__7797)))
{return (new thi.ng.geom.types.Mesh3(G__7793,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__7796.call(null,new cljs.core.Keyword(null,"normals","normals",3141522398),expr__7797)))
{return (new thi.ng.geom.types.Mesh3(self__.vertices,G__7793,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__7796.call(null,new cljs.core.Keyword(null,"fnormals","fnormals",519550136),expr__7797)))
{return (new thi.ng.geom.types.Mesh3(self__.vertices,self__.normals,G__7793,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__7796.call(null,new cljs.core.Keyword(null,"vnormals","vnormals",2634711720),expr__7797)))
{return (new thi.ng.geom.types.Mesh3(self__.vertices,self__.normals,self__.fnormals,G__7793,self__.edges,self__.faces,self__.attribs,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__7796.call(null,new cljs.core.Keyword(null,"edges","edges",1110261192),expr__7797)))
{return (new thi.ng.geom.types.Mesh3(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,G__7793,self__.faces,self__.attribs,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__7796.call(null,new cljs.core.Keyword(null,"faces","faces",1111091496),expr__7797)))
{return (new thi.ng.geom.types.Mesh3(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,G__7793,self__.attribs,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__7796.call(null,new cljs.core.Keyword(null,"attribs","attribs",4634025563),expr__7797)))
{return (new thi.ng.geom.types.Mesh3(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,G__7793,self__.__meta,self__.__extmap,null));
} else
{return (new thi.ng.geom.types.Mesh3(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4075__auto__,G__7793),null));
}
}
}
}
}
}
}
});
thi.ng.geom.types.Mesh3.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4079__auto__){var self__ = this;
var this__4079__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vertices","vertices",3324730219),self__.vertices],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"normals","normals",3141522398),self__.normals],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fnormals","fnormals",519550136),self__.fnormals],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vnormals","vnormals",2634711720),self__.vnormals],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"edges","edges",1110261192),self__.edges],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"faces","faces",1111091496),self__.faces],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attribs","attribs",4634025563),self__.attribs],null))], null),self__.__extmap));
});
thi.ng.geom.types.Mesh3.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4066__auto__,G__7793){var self__ = this;
var this__4066__auto____$1 = this;return (new thi.ng.geom.types.Mesh3(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,G__7793,self__.__extmap,self__.__hash));
});
thi.ng.geom.types.Mesh3.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4072__auto__,entry__4073__auto__){var self__ = this;
var this__4072__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4073__auto__))
{return cljs.core._assoc.call(null,this__4072__auto____$1,cljs.core._nth.call(null,entry__4073__auto__,0),cljs.core._nth.call(null,entry__4073__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4072__auto____$1,entry__4073__auto__);
}
});
thi.ng.geom.types.Mesh3.cljs$lang$type = true;
thi.ng.geom.types.Mesh3.cljs$lang$ctorPrSeq = (function (this__4101__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Mesh3");
});
thi.ng.geom.types.Mesh3.cljs$lang$ctorPrWriter = (function (this__4101__auto__,writer__4102__auto__){return cljs.core._write.call(null,writer__4102__auto__,"thi.ng.geom.types/Mesh3");
});
thi.ng.geom.types.__GT_Mesh3 = (function __GT_Mesh3(vertices,normals,fnormals,vnormals,edges,faces,attribs){return (new thi.ng.geom.types.Mesh3(vertices,normals,fnormals,vnormals,edges,faces,attribs));
});
thi.ng.geom.types.map__GT_Mesh3 = (function map__GT_Mesh3(G__7795){return (new thi.ng.geom.types.Mesh3(new cljs.core.Keyword(null,"vertices","vertices",3324730219).cljs$core$IFn$_invoke$arity$1(G__7795),new cljs.core.Keyword(null,"normals","normals",3141522398).cljs$core$IFn$_invoke$arity$1(G__7795),new cljs.core.Keyword(null,"fnormals","fnormals",519550136).cljs$core$IFn$_invoke$arity$1(G__7795),new cljs.core.Keyword(null,"vnormals","vnormals",2634711720).cljs$core$IFn$_invoke$arity$1(G__7795),new cljs.core.Keyword(null,"edges","edges",1110261192).cljs$core$IFn$_invoke$arity$1(G__7795),new cljs.core.Keyword(null,"faces","faces",1111091496).cljs$core$IFn$_invoke$arity$1(G__7795),new cljs.core.Keyword(null,"attribs","attribs",4634025563).cljs$core$IFn$_invoke$arity$1(G__7795),null,cljs.core.dissoc.call(null,G__7795,new cljs.core.Keyword(null,"vertices","vertices",3324730219),new cljs.core.Keyword(null,"normals","normals",3141522398),new cljs.core.Keyword(null,"fnormals","fnormals",519550136),new cljs.core.Keyword(null,"vnormals","vnormals",2634711720),new cljs.core.Keyword(null,"edges","edges",1110261192),new cljs.core.Keyword(null,"faces","faces",1111091496),new cljs.core.Keyword(null,"attribs","attribs",4634025563))));
});

/**
* @constructor
* @param {*} n
* @param {*} w
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
thi.ng.geom.types.Plane = (function (n,w,__meta,__extmap){
this.n = n;
this.w = w;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>2){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
thi.ng.geom.types.Plane.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4067__auto__,k__4068__auto__){var self__ = this;
var this__4067__auto____$1 = this;return cljs.core._lookup.call(null,this__4067__auto____$1,k__4068__auto__,null);
});
thi.ng.geom.types.Plane.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4069__auto__,k7800,else__4070__auto__){var self__ = this;
var this__4069__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k7800,new cljs.core.Keyword(null,"n","n",1013904352)))
{return self__.n;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k7800,new cljs.core.Keyword(null,"w","w",1013904361)))
{return self__.w;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k7800,else__4070__auto__);
} else
{return null;
}
}
}
});
thi.ng.geom.types.Plane.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4081__auto__,writer__4082__auto__,opts__4083__auto__){var self__ = this;
var this__4081__auto____$1 = this;var pr_pair__4084__auto__ = ((function (this__4081__auto____$1){
return (function (keyval__4085__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4082__auto__,cljs.core.pr_writer,""," ","",opts__4083__auto__,keyval__4085__auto__);
});})(this__4081__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4082__auto__,pr_pair__4084__auto__,"#thi.ng.geom.types.Plane{",", ","}",opts__4083__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"n","n",1013904352),self__.n],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",1013904361),self__.w],null))], null),self__.__extmap));
});
thi.ng.geom.types.Plane.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4065__auto__){var self__ = this;
var this__4065__auto____$1 = this;return self__.__meta;
});
thi.ng.geom.types.Plane.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4061__auto__){var self__ = this;
var this__4061__auto____$1 = this;return (new thi.ng.geom.types.Plane(self__.n,self__.w,self__.__meta,self__.__extmap,self__.__hash));
});
thi.ng.geom.types.Plane.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4071__auto__){var self__ = this;
var this__4071__auto____$1 = this;return (2 + cljs.core.count.call(null,self__.__extmap));
});
thi.ng.geom.types.Plane.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4062__auto__){var self__ = this;
var this__4062__auto____$1 = this;var h__3892__auto__ = self__.__hash;if(!((h__3892__auto__ == null)))
{return h__3892__auto__;
} else
{var h__3892__auto____$1 = cljs.core.hash_imap.call(null,this__4062__auto____$1);self__.__hash = h__3892__auto____$1;
return h__3892__auto____$1;
}
});
thi.ng.geom.types.Plane.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4063__auto__,other__4064__auto__){var self__ = this;
var this__4063__auto____$1 = this;if(cljs.core.truth_((function (){var and__3469__auto__ = other__4064__auto__;if(cljs.core.truth_(and__3469__auto__))
{return ((this__4063__auto____$1.constructor === other__4064__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__4063__auto____$1,other__4064__auto__));
} else
{return and__3469__auto__;
}
})()))
{return true;
} else
{return false;
}
});
thi.ng.geom.types.Plane.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4076__auto__,k__4077__auto__){var self__ = this;
var this__4076__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"n","n",1013904352),null,new cljs.core.Keyword(null,"w","w",1013904361),null], null), null),k__4077__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4076__auto____$1),self__.__meta),k__4077__auto__);
} else
{return (new thi.ng.geom.types.Plane(self__.n,self__.w,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4077__auto__)),null));
}
});
thi.ng.geom.types.Plane.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4074__auto__,k__4075__auto__,G__7799){var self__ = this;
var this__4074__auto____$1 = this;var pred__7802 = cljs.core.keyword_identical_QMARK_;var expr__7803 = k__4075__auto__;if(cljs.core.truth_(pred__7802.call(null,new cljs.core.Keyword(null,"n","n",1013904352),expr__7803)))
{return (new thi.ng.geom.types.Plane(G__7799,self__.w,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__7802.call(null,new cljs.core.Keyword(null,"w","w",1013904361),expr__7803)))
{return (new thi.ng.geom.types.Plane(self__.n,G__7799,self__.__meta,self__.__extmap,null));
} else
{return (new thi.ng.geom.types.Plane(self__.n,self__.w,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4075__auto__,G__7799),null));
}
}
});
thi.ng.geom.types.Plane.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4079__auto__){var self__ = this;
var this__4079__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"n","n",1013904352),self__.n],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",1013904361),self__.w],null))], null),self__.__extmap));
});
thi.ng.geom.types.Plane.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4066__auto__,G__7799){var self__ = this;
var this__4066__auto____$1 = this;return (new thi.ng.geom.types.Plane(self__.n,self__.w,G__7799,self__.__extmap,self__.__hash));
});
thi.ng.geom.types.Plane.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4072__auto__,entry__4073__auto__){var self__ = this;
var this__4072__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4073__auto__))
{return cljs.core._assoc.call(null,this__4072__auto____$1,cljs.core._nth.call(null,entry__4073__auto__,0),cljs.core._nth.call(null,entry__4073__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4072__auto____$1,entry__4073__auto__);
}
});
thi.ng.geom.types.Plane.cljs$lang$type = true;
thi.ng.geom.types.Plane.cljs$lang$ctorPrSeq = (function (this__4101__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Plane");
});
thi.ng.geom.types.Plane.cljs$lang$ctorPrWriter = (function (this__4101__auto__,writer__4102__auto__){return cljs.core._write.call(null,writer__4102__auto__,"thi.ng.geom.types/Plane");
});
thi.ng.geom.types.__GT_Plane = (function __GT_Plane(n,w){return (new thi.ng.geom.types.Plane(n,w));
});
thi.ng.geom.types.map__GT_Plane = (function map__GT_Plane(G__7801){return (new thi.ng.geom.types.Plane(new cljs.core.Keyword(null,"n","n",1013904352).cljs$core$IFn$_invoke$arity$1(G__7801),new cljs.core.Keyword(null,"w","w",1013904361).cljs$core$IFn$_invoke$arity$1(G__7801),null,cljs.core.dissoc.call(null,G__7801,new cljs.core.Keyword(null,"n","n",1013904352),new cljs.core.Keyword(null,"w","w",1013904361))));
});

/**
* @constructor
* @param {*} points
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
thi.ng.geom.types.Quad3 = (function (points,__meta,__extmap){
this.points = points;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>1){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
thi.ng.geom.types.Quad3.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4067__auto__,k__4068__auto__){var self__ = this;
var this__4067__auto____$1 = this;return cljs.core._lookup.call(null,this__4067__auto____$1,k__4068__auto__,null);
});
thi.ng.geom.types.Quad3.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4069__auto__,k7806,else__4070__auto__){var self__ = this;
var this__4069__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k7806,new cljs.core.Keyword(null,"points","points",4326117461)))
{return self__.points;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k7806,else__4070__auto__);
} else
{return null;
}
}
});
thi.ng.geom.types.Quad3.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4081__auto__,writer__4082__auto__,opts__4083__auto__){var self__ = this;
var this__4081__auto____$1 = this;var pr_pair__4084__auto__ = ((function (this__4081__auto____$1){
return (function (keyval__4085__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4082__auto__,cljs.core.pr_writer,""," ","",opts__4083__auto__,keyval__4085__auto__);
});})(this__4081__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4082__auto__,pr_pair__4084__auto__,"#thi.ng.geom.types.Quad3{",", ","}",opts__4083__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",4326117461),self__.points],null))], null),self__.__extmap));
});
thi.ng.geom.types.Quad3.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4065__auto__){var self__ = this;
var this__4065__auto____$1 = this;return self__.__meta;
});
thi.ng.geom.types.Quad3.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4061__auto__){var self__ = this;
var this__4061__auto____$1 = this;return (new thi.ng.geom.types.Quad3(self__.points,self__.__meta,self__.__extmap,self__.__hash));
});
thi.ng.geom.types.Quad3.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4071__auto__){var self__ = this;
var this__4071__auto____$1 = this;return (1 + cljs.core.count.call(null,self__.__extmap));
});
thi.ng.geom.types.Quad3.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4062__auto__){var self__ = this;
var this__4062__auto____$1 = this;var h__3892__auto__ = self__.__hash;if(!((h__3892__auto__ == null)))
{return h__3892__auto__;
} else
{var h__3892__auto____$1 = cljs.core.hash_imap.call(null,this__4062__auto____$1);self__.__hash = h__3892__auto____$1;
return h__3892__auto____$1;
}
});
thi.ng.geom.types.Quad3.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4063__auto__,other__4064__auto__){var self__ = this;
var this__4063__auto____$1 = this;if(cljs.core.truth_((function (){var and__3469__auto__ = other__4064__auto__;if(cljs.core.truth_(and__3469__auto__))
{return ((this__4063__auto____$1.constructor === other__4064__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__4063__auto____$1,other__4064__auto__));
} else
{return and__3469__auto__;
}
})()))
{return true;
} else
{return false;
}
});
thi.ng.geom.types.Quad3.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4076__auto__,k__4077__auto__){var self__ = this;
var this__4076__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",4326117461),null], null), null),k__4077__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4076__auto____$1),self__.__meta),k__4077__auto__);
} else
{return (new thi.ng.geom.types.Quad3(self__.points,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4077__auto__)),null));
}
});
thi.ng.geom.types.Quad3.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4074__auto__,k__4075__auto__,G__7805){var self__ = this;
var this__4074__auto____$1 = this;var pred__7808 = cljs.core.keyword_identical_QMARK_;var expr__7809 = k__4075__auto__;if(cljs.core.truth_(pred__7808.call(null,new cljs.core.Keyword(null,"points","points",4326117461),expr__7809)))
{return (new thi.ng.geom.types.Quad3(G__7805,self__.__meta,self__.__extmap,null));
} else
{return (new thi.ng.geom.types.Quad3(self__.points,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4075__auto__,G__7805),null));
}
});
thi.ng.geom.types.Quad3.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4079__auto__){var self__ = this;
var this__4079__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",4326117461),self__.points],null))], null),self__.__extmap));
});
thi.ng.geom.types.Quad3.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4066__auto__,G__7805){var self__ = this;
var this__4066__auto____$1 = this;return (new thi.ng.geom.types.Quad3(self__.points,G__7805,self__.__extmap,self__.__hash));
});
thi.ng.geom.types.Quad3.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4072__auto__,entry__4073__auto__){var self__ = this;
var this__4072__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4073__auto__))
{return cljs.core._assoc.call(null,this__4072__auto____$1,cljs.core._nth.call(null,entry__4073__auto__,0),cljs.core._nth.call(null,entry__4073__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4072__auto____$1,entry__4073__auto__);
}
});
thi.ng.geom.types.Quad3.cljs$lang$type = true;
thi.ng.geom.types.Quad3.cljs$lang$ctorPrSeq = (function (this__4101__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Quad3");
});
thi.ng.geom.types.Quad3.cljs$lang$ctorPrWriter = (function (this__4101__auto__,writer__4102__auto__){return cljs.core._write.call(null,writer__4102__auto__,"thi.ng.geom.types/Quad3");
});
thi.ng.geom.types.__GT_Quad3 = (function __GT_Quad3(points){return (new thi.ng.geom.types.Quad3(points));
});
thi.ng.geom.types.map__GT_Quad3 = (function map__GT_Quad3(G__7807){return (new thi.ng.geom.types.Quad3(new cljs.core.Keyword(null,"points","points",4326117461).cljs$core$IFn$_invoke$arity$1(G__7807),null,cljs.core.dissoc.call(null,G__7807,new cljs.core.Keyword(null,"points","points",4326117461))));
});

/**
* @constructor
* @param {*} p
* @param {*} r
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
thi.ng.geom.types.Sphere = (function (p,r,__meta,__extmap){
this.p = p;
this.r = r;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>2){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
thi.ng.geom.types.Sphere.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4067__auto__,k__4068__auto__){var self__ = this;
var this__4067__auto____$1 = this;return cljs.core._lookup.call(null,this__4067__auto____$1,k__4068__auto__,null);
});
thi.ng.geom.types.Sphere.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4069__auto__,k7812,else__4070__auto__){var self__ = this;
var this__4069__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k7812,new cljs.core.Keyword(null,"p","p",1013904354)))
{return self__.p;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k7812,new cljs.core.Keyword(null,"r","r",1013904356)))
{return self__.r;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k7812,else__4070__auto__);
} else
{return null;
}
}
}
});
thi.ng.geom.types.Sphere.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4081__auto__,writer__4082__auto__,opts__4083__auto__){var self__ = this;
var this__4081__auto____$1 = this;var pr_pair__4084__auto__ = ((function (this__4081__auto____$1){
return (function (keyval__4085__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4082__auto__,cljs.core.pr_writer,""," ","",opts__4083__auto__,keyval__4085__auto__);
});})(this__4081__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4082__auto__,pr_pair__4084__auto__,"#thi.ng.geom.types.Sphere{",", ","}",opts__4083__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p","p",1013904354),self__.p],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"r","r",1013904356),self__.r],null))], null),self__.__extmap));
});
thi.ng.geom.types.Sphere.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4065__auto__){var self__ = this;
var this__4065__auto____$1 = this;return self__.__meta;
});
thi.ng.geom.types.Sphere.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4061__auto__){var self__ = this;
var this__4061__auto____$1 = this;return (new thi.ng.geom.types.Sphere(self__.p,self__.r,self__.__meta,self__.__extmap,self__.__hash));
});
thi.ng.geom.types.Sphere.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4071__auto__){var self__ = this;
var this__4071__auto____$1 = this;return (2 + cljs.core.count.call(null,self__.__extmap));
});
thi.ng.geom.types.Sphere.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4062__auto__){var self__ = this;
var this__4062__auto____$1 = this;var h__3892__auto__ = self__.__hash;if(!((h__3892__auto__ == null)))
{return h__3892__auto__;
} else
{var h__3892__auto____$1 = cljs.core.hash_imap.call(null,this__4062__auto____$1);self__.__hash = h__3892__auto____$1;
return h__3892__auto____$1;
}
});
thi.ng.geom.types.Sphere.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4063__auto__,other__4064__auto__){var self__ = this;
var this__4063__auto____$1 = this;if(cljs.core.truth_((function (){var and__3469__auto__ = other__4064__auto__;if(cljs.core.truth_(and__3469__auto__))
{return ((this__4063__auto____$1.constructor === other__4064__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__4063__auto____$1,other__4064__auto__));
} else
{return and__3469__auto__;
}
})()))
{return true;
} else
{return false;
}
});
thi.ng.geom.types.Sphere.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4076__auto__,k__4077__auto__){var self__ = this;
var this__4076__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"r","r",1013904356),null,new cljs.core.Keyword(null,"p","p",1013904354),null], null), null),k__4077__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4076__auto____$1),self__.__meta),k__4077__auto__);
} else
{return (new thi.ng.geom.types.Sphere(self__.p,self__.r,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4077__auto__)),null));
}
});
thi.ng.geom.types.Sphere.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4074__auto__,k__4075__auto__,G__7811){var self__ = this;
var this__4074__auto____$1 = this;var pred__7814 = cljs.core.keyword_identical_QMARK_;var expr__7815 = k__4075__auto__;if(cljs.core.truth_(pred__7814.call(null,new cljs.core.Keyword(null,"p","p",1013904354),expr__7815)))
{return (new thi.ng.geom.types.Sphere(G__7811,self__.r,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__7814.call(null,new cljs.core.Keyword(null,"r","r",1013904356),expr__7815)))
{return (new thi.ng.geom.types.Sphere(self__.p,G__7811,self__.__meta,self__.__extmap,null));
} else
{return (new thi.ng.geom.types.Sphere(self__.p,self__.r,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4075__auto__,G__7811),null));
}
}
});
thi.ng.geom.types.Sphere.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4079__auto__){var self__ = this;
var this__4079__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p","p",1013904354),self__.p],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"r","r",1013904356),self__.r],null))], null),self__.__extmap));
});
thi.ng.geom.types.Sphere.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4066__auto__,G__7811){var self__ = this;
var this__4066__auto____$1 = this;return (new thi.ng.geom.types.Sphere(self__.p,self__.r,G__7811,self__.__extmap,self__.__hash));
});
thi.ng.geom.types.Sphere.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4072__auto__,entry__4073__auto__){var self__ = this;
var this__4072__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4073__auto__))
{return cljs.core._assoc.call(null,this__4072__auto____$1,cljs.core._nth.call(null,entry__4073__auto__,0),cljs.core._nth.call(null,entry__4073__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4072__auto____$1,entry__4073__auto__);
}
});
thi.ng.geom.types.Sphere.cljs$lang$type = true;
thi.ng.geom.types.Sphere.cljs$lang$ctorPrSeq = (function (this__4101__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Sphere");
});
thi.ng.geom.types.Sphere.cljs$lang$ctorPrWriter = (function (this__4101__auto__,writer__4102__auto__){return cljs.core._write.call(null,writer__4102__auto__,"thi.ng.geom.types/Sphere");
});
thi.ng.geom.types.__GT_Sphere = (function __GT_Sphere(p,r){return (new thi.ng.geom.types.Sphere(p,r));
});
thi.ng.geom.types.map__GT_Sphere = (function map__GT_Sphere(G__7813){return (new thi.ng.geom.types.Sphere(new cljs.core.Keyword(null,"p","p",1013904354).cljs$core$IFn$_invoke$arity$1(G__7813),new cljs.core.Keyword(null,"r","r",1013904356).cljs$core$IFn$_invoke$arity$1(G__7813),null,cljs.core.dissoc.call(null,G__7813,new cljs.core.Keyword(null,"p","p",1013904354),new cljs.core.Keyword(null,"r","r",1013904356))));
});

/**
* @constructor
* @param {*} points
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
thi.ng.geom.types.Tetrahedron = (function (points,__meta,__extmap){
this.points = points;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>1){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
thi.ng.geom.types.Tetrahedron.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4067__auto__,k__4068__auto__){var self__ = this;
var this__4067__auto____$1 = this;return cljs.core._lookup.call(null,this__4067__auto____$1,k__4068__auto__,null);
});
thi.ng.geom.types.Tetrahedron.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4069__auto__,k7818,else__4070__auto__){var self__ = this;
var this__4069__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k7818,new cljs.core.Keyword(null,"points","points",4326117461)))
{return self__.points;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k7818,else__4070__auto__);
} else
{return null;
}
}
});
thi.ng.geom.types.Tetrahedron.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4081__auto__,writer__4082__auto__,opts__4083__auto__){var self__ = this;
var this__4081__auto____$1 = this;var pr_pair__4084__auto__ = ((function (this__4081__auto____$1){
return (function (keyval__4085__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4082__auto__,cljs.core.pr_writer,""," ","",opts__4083__auto__,keyval__4085__auto__);
});})(this__4081__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4082__auto__,pr_pair__4084__auto__,"#thi.ng.geom.types.Tetrahedron{",", ","}",opts__4083__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",4326117461),self__.points],null))], null),self__.__extmap));
});
thi.ng.geom.types.Tetrahedron.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4065__auto__){var self__ = this;
var this__4065__auto____$1 = this;return self__.__meta;
});
thi.ng.geom.types.Tetrahedron.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4061__auto__){var self__ = this;
var this__4061__auto____$1 = this;return (new thi.ng.geom.types.Tetrahedron(self__.points,self__.__meta,self__.__extmap,self__.__hash));
});
thi.ng.geom.types.Tetrahedron.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4071__auto__){var self__ = this;
var this__4071__auto____$1 = this;return (1 + cljs.core.count.call(null,self__.__extmap));
});
thi.ng.geom.types.Tetrahedron.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4062__auto__){var self__ = this;
var this__4062__auto____$1 = this;var h__3892__auto__ = self__.__hash;if(!((h__3892__auto__ == null)))
{return h__3892__auto__;
} else
{var h__3892__auto____$1 = cljs.core.hash_imap.call(null,this__4062__auto____$1);self__.__hash = h__3892__auto____$1;
return h__3892__auto____$1;
}
});
thi.ng.geom.types.Tetrahedron.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4063__auto__,other__4064__auto__){var self__ = this;
var this__4063__auto____$1 = this;if(cljs.core.truth_((function (){var and__3469__auto__ = other__4064__auto__;if(cljs.core.truth_(and__3469__auto__))
{return ((this__4063__auto____$1.constructor === other__4064__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__4063__auto____$1,other__4064__auto__));
} else
{return and__3469__auto__;
}
})()))
{return true;
} else
{return false;
}
});
thi.ng.geom.types.Tetrahedron.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4076__auto__,k__4077__auto__){var self__ = this;
var this__4076__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",4326117461),null], null), null),k__4077__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4076__auto____$1),self__.__meta),k__4077__auto__);
} else
{return (new thi.ng.geom.types.Tetrahedron(self__.points,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4077__auto__)),null));
}
});
thi.ng.geom.types.Tetrahedron.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4074__auto__,k__4075__auto__,G__7817){var self__ = this;
var this__4074__auto____$1 = this;var pred__7820 = cljs.core.keyword_identical_QMARK_;var expr__7821 = k__4075__auto__;if(cljs.core.truth_(pred__7820.call(null,new cljs.core.Keyword(null,"points","points",4326117461),expr__7821)))
{return (new thi.ng.geom.types.Tetrahedron(G__7817,self__.__meta,self__.__extmap,null));
} else
{return (new thi.ng.geom.types.Tetrahedron(self__.points,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4075__auto__,G__7817),null));
}
});
thi.ng.geom.types.Tetrahedron.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4079__auto__){var self__ = this;
var this__4079__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",4326117461),self__.points],null))], null),self__.__extmap));
});
thi.ng.geom.types.Tetrahedron.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4066__auto__,G__7817){var self__ = this;
var this__4066__auto____$1 = this;return (new thi.ng.geom.types.Tetrahedron(self__.points,G__7817,self__.__extmap,self__.__hash));
});
thi.ng.geom.types.Tetrahedron.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4072__auto__,entry__4073__auto__){var self__ = this;
var this__4072__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4073__auto__))
{return cljs.core._assoc.call(null,this__4072__auto____$1,cljs.core._nth.call(null,entry__4073__auto__,0),cljs.core._nth.call(null,entry__4073__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4072__auto____$1,entry__4073__auto__);
}
});
thi.ng.geom.types.Tetrahedron.cljs$lang$type = true;
thi.ng.geom.types.Tetrahedron.cljs$lang$ctorPrSeq = (function (this__4101__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Tetrahedron");
});
thi.ng.geom.types.Tetrahedron.cljs$lang$ctorPrWriter = (function (this__4101__auto__,writer__4102__auto__){return cljs.core._write.call(null,writer__4102__auto__,"thi.ng.geom.types/Tetrahedron");
});
thi.ng.geom.types.__GT_Tetrahedron = (function __GT_Tetrahedron(points){return (new thi.ng.geom.types.Tetrahedron(points));
});
thi.ng.geom.types.map__GT_Tetrahedron = (function map__GT_Tetrahedron(G__7819){return (new thi.ng.geom.types.Tetrahedron(new cljs.core.Keyword(null,"points","points",4326117461).cljs$core$IFn$_invoke$arity$1(G__7819),null,cljs.core.dissoc.call(null,G__7819,new cljs.core.Keyword(null,"points","points",4326117461))));
});

/**
* @constructor
* @param {*} points
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
thi.ng.geom.types.Triangle3 = (function (points,__meta,__extmap){
this.points = points;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>1){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
thi.ng.geom.types.Triangle3.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4067__auto__,k__4068__auto__){var self__ = this;
var this__4067__auto____$1 = this;return cljs.core._lookup.call(null,this__4067__auto____$1,k__4068__auto__,null);
});
thi.ng.geom.types.Triangle3.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4069__auto__,k7824,else__4070__auto__){var self__ = this;
var this__4069__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k7824,new cljs.core.Keyword(null,"points","points",4326117461)))
{return self__.points;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k7824,else__4070__auto__);
} else
{return null;
}
}
});
thi.ng.geom.types.Triangle3.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4081__auto__,writer__4082__auto__,opts__4083__auto__){var self__ = this;
var this__4081__auto____$1 = this;var pr_pair__4084__auto__ = ((function (this__4081__auto____$1){
return (function (keyval__4085__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4082__auto__,cljs.core.pr_writer,""," ","",opts__4083__auto__,keyval__4085__auto__);
});})(this__4081__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4082__auto__,pr_pair__4084__auto__,"#thi.ng.geom.types.Triangle3{",", ","}",opts__4083__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",4326117461),self__.points],null))], null),self__.__extmap));
});
thi.ng.geom.types.Triangle3.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4065__auto__){var self__ = this;
var this__4065__auto____$1 = this;return self__.__meta;
});
thi.ng.geom.types.Triangle3.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4061__auto__){var self__ = this;
var this__4061__auto____$1 = this;return (new thi.ng.geom.types.Triangle3(self__.points,self__.__meta,self__.__extmap,self__.__hash));
});
thi.ng.geom.types.Triangle3.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4071__auto__){var self__ = this;
var this__4071__auto____$1 = this;return (1 + cljs.core.count.call(null,self__.__extmap));
});
thi.ng.geom.types.Triangle3.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4062__auto__){var self__ = this;
var this__4062__auto____$1 = this;var h__3892__auto__ = self__.__hash;if(!((h__3892__auto__ == null)))
{return h__3892__auto__;
} else
{var h__3892__auto____$1 = cljs.core.hash_imap.call(null,this__4062__auto____$1);self__.__hash = h__3892__auto____$1;
return h__3892__auto____$1;
}
});
thi.ng.geom.types.Triangle3.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4063__auto__,other__4064__auto__){var self__ = this;
var this__4063__auto____$1 = this;if(cljs.core.truth_((function (){var and__3469__auto__ = other__4064__auto__;if(cljs.core.truth_(and__3469__auto__))
{return ((this__4063__auto____$1.constructor === other__4064__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__4063__auto____$1,other__4064__auto__));
} else
{return and__3469__auto__;
}
})()))
{return true;
} else
{return false;
}
});
thi.ng.geom.types.Triangle3.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4076__auto__,k__4077__auto__){var self__ = this;
var this__4076__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",4326117461),null], null), null),k__4077__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4076__auto____$1),self__.__meta),k__4077__auto__);
} else
{return (new thi.ng.geom.types.Triangle3(self__.points,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4077__auto__)),null));
}
});
thi.ng.geom.types.Triangle3.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4074__auto__,k__4075__auto__,G__7823){var self__ = this;
var this__4074__auto____$1 = this;var pred__7826 = cljs.core.keyword_identical_QMARK_;var expr__7827 = k__4075__auto__;if(cljs.core.truth_(pred__7826.call(null,new cljs.core.Keyword(null,"points","points",4326117461),expr__7827)))
{return (new thi.ng.geom.types.Triangle3(G__7823,self__.__meta,self__.__extmap,null));
} else
{return (new thi.ng.geom.types.Triangle3(self__.points,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4075__auto__,G__7823),null));
}
});
thi.ng.geom.types.Triangle3.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4079__auto__){var self__ = this;
var this__4079__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",4326117461),self__.points],null))], null),self__.__extmap));
});
thi.ng.geom.types.Triangle3.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4066__auto__,G__7823){var self__ = this;
var this__4066__auto____$1 = this;return (new thi.ng.geom.types.Triangle3(self__.points,G__7823,self__.__extmap,self__.__hash));
});
thi.ng.geom.types.Triangle3.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4072__auto__,entry__4073__auto__){var self__ = this;
var this__4072__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4073__auto__))
{return cljs.core._assoc.call(null,this__4072__auto____$1,cljs.core._nth.call(null,entry__4073__auto__,0),cljs.core._nth.call(null,entry__4073__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4072__auto____$1,entry__4073__auto__);
}
});
thi.ng.geom.types.Triangle3.cljs$lang$type = true;
thi.ng.geom.types.Triangle3.cljs$lang$ctorPrSeq = (function (this__4101__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Triangle3");
});
thi.ng.geom.types.Triangle3.cljs$lang$ctorPrWriter = (function (this__4101__auto__,writer__4102__auto__){return cljs.core._write.call(null,writer__4102__auto__,"thi.ng.geom.types/Triangle3");
});
thi.ng.geom.types.__GT_Triangle3 = (function __GT_Triangle3(points){return (new thi.ng.geom.types.Triangle3(points));
});
thi.ng.geom.types.map__GT_Triangle3 = (function map__GT_Triangle3(G__7825){return (new thi.ng.geom.types.Triangle3(new cljs.core.Keyword(null,"points","points",4326117461).cljs$core$IFn$_invoke$arity$1(G__7825),null,cljs.core.dissoc.call(null,G__7825,new cljs.core.Keyword(null,"points","points",4326117461))));
});
