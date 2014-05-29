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
thi.ng.geom.types.Graph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5539__auto__,k__5540__auto__){var self__ = this;
var this__5539__auto____$1 = this;return cljs.core._lookup.call(null,this__5539__auto____$1,k__5540__auto__,null);
});
thi.ng.geom.types.Graph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5541__auto__,k10957,else__5542__auto__){var self__ = this;
var this__5541__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k10957,new cljs.core.Keyword(null,"vertices","vertices",3324730219)))
{return self__.vertices;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k10957,new cljs.core.Keyword(null,"edges","edges",1110261192)))
{return self__.edges;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k10957,else__5542__auto__);
} else
{return null;
}
}
}
});
thi.ng.geom.types.Graph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5553__auto__,writer__5554__auto__,opts__5555__auto__){var self__ = this;
var this__5553__auto____$1 = this;var pr_pair__5556__auto__ = ((function (this__5553__auto____$1){
return (function (keyval__5557__auto__){return cljs.core.pr_sequential_writer.call(null,writer__5554__auto__,cljs.core.pr_writer,""," ","",opts__5555__auto__,keyval__5557__auto__);
});})(this__5553__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__5554__auto__,pr_pair__5556__auto__,"#thi.ng.geom.types.Graph{",", ","}",opts__5555__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vertices","vertices",3324730219),self__.vertices],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"edges","edges",1110261192),self__.edges],null))], null),self__.__extmap));
});
thi.ng.geom.types.Graph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5537__auto__){var self__ = this;
var this__5537__auto____$1 = this;return self__.__meta;
});
thi.ng.geom.types.Graph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5533__auto__){var self__ = this;
var this__5533__auto____$1 = this;return (new thi.ng.geom.types.Graph(self__.vertices,self__.edges,self__.__meta,self__.__extmap,self__.__hash));
});
thi.ng.geom.types.Graph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5543__auto__){var self__ = this;
var this__5543__auto____$1 = this;return (2 + cljs.core.count.call(null,self__.__extmap));
});
thi.ng.geom.types.Graph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5534__auto__){var self__ = this;
var this__5534__auto____$1 = this;var h__5364__auto__ = self__.__hash;if(!((h__5364__auto__ == null)))
{return h__5364__auto__;
} else
{var h__5364__auto____$1 = cljs.core.hash_imap.call(null,this__5534__auto____$1);self__.__hash = h__5364__auto____$1;
return h__5364__auto____$1;
}
});
thi.ng.geom.types.Graph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5535__auto__,other__5536__auto__){var self__ = this;
var this__5535__auto____$1 = this;if(cljs.core.truth_((function (){var and__4941__auto__ = other__5536__auto__;if(cljs.core.truth_(and__4941__auto__))
{return ((this__5535__auto____$1.constructor === other__5536__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__5535__auto____$1,other__5536__auto__));
} else
{return and__4941__auto__;
}
})()))
{return true;
} else
{return false;
}
});
thi.ng.geom.types.Graph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5548__auto__,k__5549__auto__){var self__ = this;
var this__5548__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"vertices","vertices",3324730219),null,new cljs.core.Keyword(null,"edges","edges",1110261192),null], null), null),k__5549__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5548__auto____$1),self__.__meta),k__5549__auto__);
} else
{return (new thi.ng.geom.types.Graph(self__.vertices,self__.edges,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5549__auto__)),null));
}
});
thi.ng.geom.types.Graph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5546__auto__,k__5547__auto__,G__10956){var self__ = this;
var this__5546__auto____$1 = this;var pred__10959 = cljs.core.keyword_identical_QMARK_;var expr__10960 = k__5547__auto__;if(cljs.core.truth_(pred__10959.call(null,new cljs.core.Keyword(null,"vertices","vertices",3324730219),expr__10960)))
{return (new thi.ng.geom.types.Graph(G__10956,self__.edges,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__10959.call(null,new cljs.core.Keyword(null,"edges","edges",1110261192),expr__10960)))
{return (new thi.ng.geom.types.Graph(self__.vertices,G__10956,self__.__meta,self__.__extmap,null));
} else
{return (new thi.ng.geom.types.Graph(self__.vertices,self__.edges,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5547__auto__,G__10956),null));
}
}
});
thi.ng.geom.types.Graph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5551__auto__){var self__ = this;
var this__5551__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vertices","vertices",3324730219),self__.vertices],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"edges","edges",1110261192),self__.edges],null))], null),self__.__extmap));
});
thi.ng.geom.types.Graph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5538__auto__,G__10956){var self__ = this;
var this__5538__auto____$1 = this;return (new thi.ng.geom.types.Graph(self__.vertices,self__.edges,G__10956,self__.__extmap,self__.__hash));
});
thi.ng.geom.types.Graph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5544__auto__,entry__5545__auto__){var self__ = this;
var this__5544__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__5545__auto__))
{return cljs.core._assoc.call(null,this__5544__auto____$1,cljs.core._nth.call(null,entry__5545__auto__,0),cljs.core._nth.call(null,entry__5545__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__5544__auto____$1,entry__5545__auto__);
}
});
thi.ng.geom.types.Graph.cljs$lang$type = true;
thi.ng.geom.types.Graph.cljs$lang$ctorPrSeq = (function (this__5573__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Graph");
});
thi.ng.geom.types.Graph.cljs$lang$ctorPrWriter = (function (this__5573__auto__,writer__5574__auto__){return cljs.core._write.call(null,writer__5574__auto__,"thi.ng.geom.types/Graph");
});
thi.ng.geom.types.__GT_Graph = (function __GT_Graph(vertices,edges){return (new thi.ng.geom.types.Graph(vertices,edges));
});
thi.ng.geom.types.map__GT_Graph = (function map__GT_Graph(G__10958){return (new thi.ng.geom.types.Graph(new cljs.core.Keyword(null,"vertices","vertices",3324730219).cljs$core$IFn$_invoke$arity$1(G__10958),new cljs.core.Keyword(null,"edges","edges",1110261192).cljs$core$IFn$_invoke$arity$1(G__10958),null,cljs.core.dissoc.call(null,G__10958,new cljs.core.Keyword(null,"vertices","vertices",3324730219),new cljs.core.Keyword(null,"edges","edges",1110261192))));
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
thi.ng.geom.types.Bezier2.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5539__auto__,k__5540__auto__){var self__ = this;
var this__5539__auto____$1 = this;return cljs.core._lookup.call(null,this__5539__auto____$1,k__5540__auto__,null);
});
thi.ng.geom.types.Bezier2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5541__auto__,k10963,else__5542__auto__){var self__ = this;
var this__5541__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k10963,new cljs.core.Keyword(null,"points","points",4326117461)))
{return self__.points;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k10963,else__5542__auto__);
} else
{return null;
}
}
});
thi.ng.geom.types.Bezier2.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5553__auto__,writer__5554__auto__,opts__5555__auto__){var self__ = this;
var this__5553__auto____$1 = this;var pr_pair__5556__auto__ = ((function (this__5553__auto____$1){
return (function (keyval__5557__auto__){return cljs.core.pr_sequential_writer.call(null,writer__5554__auto__,cljs.core.pr_writer,""," ","",opts__5555__auto__,keyval__5557__auto__);
});})(this__5553__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__5554__auto__,pr_pair__5556__auto__,"#thi.ng.geom.types.Bezier2{",", ","}",opts__5555__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",4326117461),self__.points],null))], null),self__.__extmap));
});
thi.ng.geom.types.Bezier2.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5537__auto__){var self__ = this;
var this__5537__auto____$1 = this;return self__.__meta;
});
thi.ng.geom.types.Bezier2.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5533__auto__){var self__ = this;
var this__5533__auto____$1 = this;return (new thi.ng.geom.types.Bezier2(self__.points,self__.__meta,self__.__extmap,self__.__hash));
});
thi.ng.geom.types.Bezier2.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5543__auto__){var self__ = this;
var this__5543__auto____$1 = this;return (1 + cljs.core.count.call(null,self__.__extmap));
});
thi.ng.geom.types.Bezier2.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5534__auto__){var self__ = this;
var this__5534__auto____$1 = this;var h__5364__auto__ = self__.__hash;if(!((h__5364__auto__ == null)))
{return h__5364__auto__;
} else
{var h__5364__auto____$1 = cljs.core.hash_imap.call(null,this__5534__auto____$1);self__.__hash = h__5364__auto____$1;
return h__5364__auto____$1;
}
});
thi.ng.geom.types.Bezier2.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5535__auto__,other__5536__auto__){var self__ = this;
var this__5535__auto____$1 = this;if(cljs.core.truth_((function (){var and__4941__auto__ = other__5536__auto__;if(cljs.core.truth_(and__4941__auto__))
{return ((this__5535__auto____$1.constructor === other__5536__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__5535__auto____$1,other__5536__auto__));
} else
{return and__4941__auto__;
}
})()))
{return true;
} else
{return false;
}
});
thi.ng.geom.types.Bezier2.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5548__auto__,k__5549__auto__){var self__ = this;
var this__5548__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",4326117461),null], null), null),k__5549__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5548__auto____$1),self__.__meta),k__5549__auto__);
} else
{return (new thi.ng.geom.types.Bezier2(self__.points,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5549__auto__)),null));
}
});
thi.ng.geom.types.Bezier2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5546__auto__,k__5547__auto__,G__10962){var self__ = this;
var this__5546__auto____$1 = this;var pred__10965 = cljs.core.keyword_identical_QMARK_;var expr__10966 = k__5547__auto__;if(cljs.core.truth_(pred__10965.call(null,new cljs.core.Keyword(null,"points","points",4326117461),expr__10966)))
{return (new thi.ng.geom.types.Bezier2(G__10962,self__.__meta,self__.__extmap,null));
} else
{return (new thi.ng.geom.types.Bezier2(self__.points,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5547__auto__,G__10962),null));
}
});
thi.ng.geom.types.Bezier2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5551__auto__){var self__ = this;
var this__5551__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",4326117461),self__.points],null))], null),self__.__extmap));
});
thi.ng.geom.types.Bezier2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5538__auto__,G__10962){var self__ = this;
var this__5538__auto____$1 = this;return (new thi.ng.geom.types.Bezier2(self__.points,G__10962,self__.__extmap,self__.__hash));
});
thi.ng.geom.types.Bezier2.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5544__auto__,entry__5545__auto__){var self__ = this;
var this__5544__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__5545__auto__))
{return cljs.core._assoc.call(null,this__5544__auto____$1,cljs.core._nth.call(null,entry__5545__auto__,0),cljs.core._nth.call(null,entry__5545__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__5544__auto____$1,entry__5545__auto__);
}
});
thi.ng.geom.types.Bezier2.cljs$lang$type = true;
thi.ng.geom.types.Bezier2.cljs$lang$ctorPrSeq = (function (this__5573__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Bezier2");
});
thi.ng.geom.types.Bezier2.cljs$lang$ctorPrWriter = (function (this__5573__auto__,writer__5574__auto__){return cljs.core._write.call(null,writer__5574__auto__,"thi.ng.geom.types/Bezier2");
});
thi.ng.geom.types.__GT_Bezier2 = (function __GT_Bezier2(points){return (new thi.ng.geom.types.Bezier2(points));
});
thi.ng.geom.types.map__GT_Bezier2 = (function map__GT_Bezier2(G__10964){return (new thi.ng.geom.types.Bezier2(new cljs.core.Keyword(null,"points","points",4326117461).cljs$core$IFn$_invoke$arity$1(G__10964),null,cljs.core.dissoc.call(null,G__10964,new cljs.core.Keyword(null,"points","points",4326117461))));
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
thi.ng.geom.types.Circle2.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5539__auto__,k__5540__auto__){var self__ = this;
var this__5539__auto____$1 = this;return cljs.core._lookup.call(null,this__5539__auto____$1,k__5540__auto__,null);
});
thi.ng.geom.types.Circle2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5541__auto__,k10969,else__5542__auto__){var self__ = this;
var this__5541__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k10969,new cljs.core.Keyword(null,"p","p",1013904354)))
{return self__.p;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k10969,new cljs.core.Keyword(null,"r","r",1013904356)))
{return self__.r;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k10969,else__5542__auto__);
} else
{return null;
}
}
}
});
thi.ng.geom.types.Circle2.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5553__auto__,writer__5554__auto__,opts__5555__auto__){var self__ = this;
var this__5553__auto____$1 = this;var pr_pair__5556__auto__ = ((function (this__5553__auto____$1){
return (function (keyval__5557__auto__){return cljs.core.pr_sequential_writer.call(null,writer__5554__auto__,cljs.core.pr_writer,""," ","",opts__5555__auto__,keyval__5557__auto__);
});})(this__5553__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__5554__auto__,pr_pair__5556__auto__,"#thi.ng.geom.types.Circle2{",", ","}",opts__5555__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p","p",1013904354),self__.p],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"r","r",1013904356),self__.r],null))], null),self__.__extmap));
});
thi.ng.geom.types.Circle2.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5537__auto__){var self__ = this;
var this__5537__auto____$1 = this;return self__.__meta;
});
thi.ng.geom.types.Circle2.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5533__auto__){var self__ = this;
var this__5533__auto____$1 = this;return (new thi.ng.geom.types.Circle2(self__.p,self__.r,self__.__meta,self__.__extmap,self__.__hash));
});
thi.ng.geom.types.Circle2.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5543__auto__){var self__ = this;
var this__5543__auto____$1 = this;return (2 + cljs.core.count.call(null,self__.__extmap));
});
thi.ng.geom.types.Circle2.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5534__auto__){var self__ = this;
var this__5534__auto____$1 = this;var h__5364__auto__ = self__.__hash;if(!((h__5364__auto__ == null)))
{return h__5364__auto__;
} else
{var h__5364__auto____$1 = cljs.core.hash_imap.call(null,this__5534__auto____$1);self__.__hash = h__5364__auto____$1;
return h__5364__auto____$1;
}
});
thi.ng.geom.types.Circle2.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5535__auto__,other__5536__auto__){var self__ = this;
var this__5535__auto____$1 = this;if(cljs.core.truth_((function (){var and__4941__auto__ = other__5536__auto__;if(cljs.core.truth_(and__4941__auto__))
{return ((this__5535__auto____$1.constructor === other__5536__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__5535__auto____$1,other__5536__auto__));
} else
{return and__4941__auto__;
}
})()))
{return true;
} else
{return false;
}
});
thi.ng.geom.types.Circle2.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5548__auto__,k__5549__auto__){var self__ = this;
var this__5548__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"r","r",1013904356),null,new cljs.core.Keyword(null,"p","p",1013904354),null], null), null),k__5549__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5548__auto____$1),self__.__meta),k__5549__auto__);
} else
{return (new thi.ng.geom.types.Circle2(self__.p,self__.r,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5549__auto__)),null));
}
});
thi.ng.geom.types.Circle2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5546__auto__,k__5547__auto__,G__10968){var self__ = this;
var this__5546__auto____$1 = this;var pred__10971 = cljs.core.keyword_identical_QMARK_;var expr__10972 = k__5547__auto__;if(cljs.core.truth_(pred__10971.call(null,new cljs.core.Keyword(null,"p","p",1013904354),expr__10972)))
{return (new thi.ng.geom.types.Circle2(G__10968,self__.r,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__10971.call(null,new cljs.core.Keyword(null,"r","r",1013904356),expr__10972)))
{return (new thi.ng.geom.types.Circle2(self__.p,G__10968,self__.__meta,self__.__extmap,null));
} else
{return (new thi.ng.geom.types.Circle2(self__.p,self__.r,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5547__auto__,G__10968),null));
}
}
});
thi.ng.geom.types.Circle2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5551__auto__){var self__ = this;
var this__5551__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p","p",1013904354),self__.p],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"r","r",1013904356),self__.r],null))], null),self__.__extmap));
});
thi.ng.geom.types.Circle2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5538__auto__,G__10968){var self__ = this;
var this__5538__auto____$1 = this;return (new thi.ng.geom.types.Circle2(self__.p,self__.r,G__10968,self__.__extmap,self__.__hash));
});
thi.ng.geom.types.Circle2.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5544__auto__,entry__5545__auto__){var self__ = this;
var this__5544__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__5545__auto__))
{return cljs.core._assoc.call(null,this__5544__auto____$1,cljs.core._nth.call(null,entry__5545__auto__,0),cljs.core._nth.call(null,entry__5545__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__5544__auto____$1,entry__5545__auto__);
}
});
thi.ng.geom.types.Circle2.cljs$lang$type = true;
thi.ng.geom.types.Circle2.cljs$lang$ctorPrSeq = (function (this__5573__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Circle2");
});
thi.ng.geom.types.Circle2.cljs$lang$ctorPrWriter = (function (this__5573__auto__,writer__5574__auto__){return cljs.core._write.call(null,writer__5574__auto__,"thi.ng.geom.types/Circle2");
});
thi.ng.geom.types.__GT_Circle2 = (function __GT_Circle2(p,r){return (new thi.ng.geom.types.Circle2(p,r));
});
thi.ng.geom.types.map__GT_Circle2 = (function map__GT_Circle2(G__10970){return (new thi.ng.geom.types.Circle2(new cljs.core.Keyword(null,"p","p",1013904354).cljs$core$IFn$_invoke$arity$1(G__10970),new cljs.core.Keyword(null,"r","r",1013904356).cljs$core$IFn$_invoke$arity$1(G__10970),null,cljs.core.dissoc.call(null,G__10970,new cljs.core.Keyword(null,"p","p",1013904354),new cljs.core.Keyword(null,"r","r",1013904356))));
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
thi.ng.geom.types.Ellipse2.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5539__auto__,k__5540__auto__){var self__ = this;
var this__5539__auto____$1 = this;return cljs.core._lookup.call(null,this__5539__auto____$1,k__5540__auto__,null);
});
thi.ng.geom.types.Ellipse2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5541__auto__,k10975,else__5542__auto__){var self__ = this;
var this__5541__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k10975,new cljs.core.Keyword(null,"p","p",1013904354)))
{return self__.p;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k10975,new cljs.core.Keyword(null,"rx","rx",1013907896)))
{return self__.rx;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k10975,new cljs.core.Keyword(null,"ry","ry",1013907897)))
{return self__.ry;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k10975,else__5542__auto__);
} else
{return null;
}
}
}
}
});
thi.ng.geom.types.Ellipse2.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5553__auto__,writer__5554__auto__,opts__5555__auto__){var self__ = this;
var this__5553__auto____$1 = this;var pr_pair__5556__auto__ = ((function (this__5553__auto____$1){
return (function (keyval__5557__auto__){return cljs.core.pr_sequential_writer.call(null,writer__5554__auto__,cljs.core.pr_writer,""," ","",opts__5555__auto__,keyval__5557__auto__);
});})(this__5553__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__5554__auto__,pr_pair__5556__auto__,"#thi.ng.geom.types.Ellipse2{",", ","}",opts__5555__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p","p",1013904354),self__.p],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rx","rx",1013907896),self__.rx],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ry","ry",1013907897),self__.ry],null))], null),self__.__extmap));
});
thi.ng.geom.types.Ellipse2.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5537__auto__){var self__ = this;
var this__5537__auto____$1 = this;return self__.__meta;
});
thi.ng.geom.types.Ellipse2.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5533__auto__){var self__ = this;
var this__5533__auto____$1 = this;return (new thi.ng.geom.types.Ellipse2(self__.p,self__.rx,self__.ry,self__.__meta,self__.__extmap,self__.__hash));
});
thi.ng.geom.types.Ellipse2.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5543__auto__){var self__ = this;
var this__5543__auto____$1 = this;return (3 + cljs.core.count.call(null,self__.__extmap));
});
thi.ng.geom.types.Ellipse2.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5534__auto__){var self__ = this;
var this__5534__auto____$1 = this;var h__5364__auto__ = self__.__hash;if(!((h__5364__auto__ == null)))
{return h__5364__auto__;
} else
{var h__5364__auto____$1 = cljs.core.hash_imap.call(null,this__5534__auto____$1);self__.__hash = h__5364__auto____$1;
return h__5364__auto____$1;
}
});
thi.ng.geom.types.Ellipse2.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5535__auto__,other__5536__auto__){var self__ = this;
var this__5535__auto____$1 = this;if(cljs.core.truth_((function (){var and__4941__auto__ = other__5536__auto__;if(cljs.core.truth_(and__4941__auto__))
{return ((this__5535__auto____$1.constructor === other__5536__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__5535__auto____$1,other__5536__auto__));
} else
{return and__4941__auto__;
}
})()))
{return true;
} else
{return false;
}
});
thi.ng.geom.types.Ellipse2.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5548__auto__,k__5549__auto__){var self__ = this;
var this__5548__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"rx","rx",1013907896),null,new cljs.core.Keyword(null,"p","p",1013904354),null,new cljs.core.Keyword(null,"ry","ry",1013907897),null], null), null),k__5549__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5548__auto____$1),self__.__meta),k__5549__auto__);
} else
{return (new thi.ng.geom.types.Ellipse2(self__.p,self__.rx,self__.ry,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5549__auto__)),null));
}
});
thi.ng.geom.types.Ellipse2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5546__auto__,k__5547__auto__,G__10974){var self__ = this;
var this__5546__auto____$1 = this;var pred__10977 = cljs.core.keyword_identical_QMARK_;var expr__10978 = k__5547__auto__;if(cljs.core.truth_(pred__10977.call(null,new cljs.core.Keyword(null,"p","p",1013904354),expr__10978)))
{return (new thi.ng.geom.types.Ellipse2(G__10974,self__.rx,self__.ry,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__10977.call(null,new cljs.core.Keyword(null,"rx","rx",1013907896),expr__10978)))
{return (new thi.ng.geom.types.Ellipse2(self__.p,G__10974,self__.ry,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__10977.call(null,new cljs.core.Keyword(null,"ry","ry",1013907897),expr__10978)))
{return (new thi.ng.geom.types.Ellipse2(self__.p,self__.rx,G__10974,self__.__meta,self__.__extmap,null));
} else
{return (new thi.ng.geom.types.Ellipse2(self__.p,self__.rx,self__.ry,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5547__auto__,G__10974),null));
}
}
}
});
thi.ng.geom.types.Ellipse2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5551__auto__){var self__ = this;
var this__5551__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p","p",1013904354),self__.p],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rx","rx",1013907896),self__.rx],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ry","ry",1013907897),self__.ry],null))], null),self__.__extmap));
});
thi.ng.geom.types.Ellipse2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5538__auto__,G__10974){var self__ = this;
var this__5538__auto____$1 = this;return (new thi.ng.geom.types.Ellipse2(self__.p,self__.rx,self__.ry,G__10974,self__.__extmap,self__.__hash));
});
thi.ng.geom.types.Ellipse2.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5544__auto__,entry__5545__auto__){var self__ = this;
var this__5544__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__5545__auto__))
{return cljs.core._assoc.call(null,this__5544__auto____$1,cljs.core._nth.call(null,entry__5545__auto__,0),cljs.core._nth.call(null,entry__5545__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__5544__auto____$1,entry__5545__auto__);
}
});
thi.ng.geom.types.Ellipse2.cljs$lang$type = true;
thi.ng.geom.types.Ellipse2.cljs$lang$ctorPrSeq = (function (this__5573__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Ellipse2");
});
thi.ng.geom.types.Ellipse2.cljs$lang$ctorPrWriter = (function (this__5573__auto__,writer__5574__auto__){return cljs.core._write.call(null,writer__5574__auto__,"thi.ng.geom.types/Ellipse2");
});
thi.ng.geom.types.__GT_Ellipse2 = (function __GT_Ellipse2(p,rx,ry){return (new thi.ng.geom.types.Ellipse2(p,rx,ry));
});
thi.ng.geom.types.map__GT_Ellipse2 = (function map__GT_Ellipse2(G__10976){return (new thi.ng.geom.types.Ellipse2(new cljs.core.Keyword(null,"p","p",1013904354).cljs$core$IFn$_invoke$arity$1(G__10976),new cljs.core.Keyword(null,"rx","rx",1013907896).cljs$core$IFn$_invoke$arity$1(G__10976),new cljs.core.Keyword(null,"ry","ry",1013907897).cljs$core$IFn$_invoke$arity$1(G__10976),null,cljs.core.dissoc.call(null,G__10976,new cljs.core.Keyword(null,"p","p",1013904354),new cljs.core.Keyword(null,"rx","rx",1013907896),new cljs.core.Keyword(null,"ry","ry",1013907897))));
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
thi.ng.geom.types.Line2.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5539__auto__,k__5540__auto__){var self__ = this;
var this__5539__auto____$1 = this;return cljs.core._lookup.call(null,this__5539__auto____$1,k__5540__auto__,null);
});
thi.ng.geom.types.Line2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5541__auto__,k10981,else__5542__auto__){var self__ = this;
var this__5541__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k10981,new cljs.core.Keyword(null,"points","points",4326117461)))
{return self__.points;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k10981,else__5542__auto__);
} else
{return null;
}
}
});
thi.ng.geom.types.Line2.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5553__auto__,writer__5554__auto__,opts__5555__auto__){var self__ = this;
var this__5553__auto____$1 = this;var pr_pair__5556__auto__ = ((function (this__5553__auto____$1){
return (function (keyval__5557__auto__){return cljs.core.pr_sequential_writer.call(null,writer__5554__auto__,cljs.core.pr_writer,""," ","",opts__5555__auto__,keyval__5557__auto__);
});})(this__5553__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__5554__auto__,pr_pair__5556__auto__,"#thi.ng.geom.types.Line2{",", ","}",opts__5555__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",4326117461),self__.points],null))], null),self__.__extmap));
});
thi.ng.geom.types.Line2.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5537__auto__){var self__ = this;
var this__5537__auto____$1 = this;return self__.__meta;
});
thi.ng.geom.types.Line2.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5533__auto__){var self__ = this;
var this__5533__auto____$1 = this;return (new thi.ng.geom.types.Line2(self__.points,self__.__meta,self__.__extmap,self__.__hash));
});
thi.ng.geom.types.Line2.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5543__auto__){var self__ = this;
var this__5543__auto____$1 = this;return (1 + cljs.core.count.call(null,self__.__extmap));
});
thi.ng.geom.types.Line2.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5534__auto__){var self__ = this;
var this__5534__auto____$1 = this;var h__5364__auto__ = self__.__hash;if(!((h__5364__auto__ == null)))
{return h__5364__auto__;
} else
{var h__5364__auto____$1 = cljs.core.hash_imap.call(null,this__5534__auto____$1);self__.__hash = h__5364__auto____$1;
return h__5364__auto____$1;
}
});
thi.ng.geom.types.Line2.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5535__auto__,other__5536__auto__){var self__ = this;
var this__5535__auto____$1 = this;if(cljs.core.truth_((function (){var and__4941__auto__ = other__5536__auto__;if(cljs.core.truth_(and__4941__auto__))
{return ((this__5535__auto____$1.constructor === other__5536__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__5535__auto____$1,other__5536__auto__));
} else
{return and__4941__auto__;
}
})()))
{return true;
} else
{return false;
}
});
thi.ng.geom.types.Line2.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5548__auto__,k__5549__auto__){var self__ = this;
var this__5548__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",4326117461),null], null), null),k__5549__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5548__auto____$1),self__.__meta),k__5549__auto__);
} else
{return (new thi.ng.geom.types.Line2(self__.points,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5549__auto__)),null));
}
});
thi.ng.geom.types.Line2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5546__auto__,k__5547__auto__,G__10980){var self__ = this;
var this__5546__auto____$1 = this;var pred__10983 = cljs.core.keyword_identical_QMARK_;var expr__10984 = k__5547__auto__;if(cljs.core.truth_(pred__10983.call(null,new cljs.core.Keyword(null,"points","points",4326117461),expr__10984)))
{return (new thi.ng.geom.types.Line2(G__10980,self__.__meta,self__.__extmap,null));
} else
{return (new thi.ng.geom.types.Line2(self__.points,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5547__auto__,G__10980),null));
}
});
thi.ng.geom.types.Line2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5551__auto__){var self__ = this;
var this__5551__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",4326117461),self__.points],null))], null),self__.__extmap));
});
thi.ng.geom.types.Line2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5538__auto__,G__10980){var self__ = this;
var this__5538__auto____$1 = this;return (new thi.ng.geom.types.Line2(self__.points,G__10980,self__.__extmap,self__.__hash));
});
thi.ng.geom.types.Line2.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5544__auto__,entry__5545__auto__){var self__ = this;
var this__5544__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__5545__auto__))
{return cljs.core._assoc.call(null,this__5544__auto____$1,cljs.core._nth.call(null,entry__5545__auto__,0),cljs.core._nth.call(null,entry__5545__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__5544__auto____$1,entry__5545__auto__);
}
});
thi.ng.geom.types.Line2.cljs$lang$type = true;
thi.ng.geom.types.Line2.cljs$lang$ctorPrSeq = (function (this__5573__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Line2");
});
thi.ng.geom.types.Line2.cljs$lang$ctorPrWriter = (function (this__5573__auto__,writer__5574__auto__){return cljs.core._write.call(null,writer__5574__auto__,"thi.ng.geom.types/Line2");
});
thi.ng.geom.types.__GT_Line2 = (function __GT_Line2(points){return (new thi.ng.geom.types.Line2(points));
});
thi.ng.geom.types.map__GT_Line2 = (function map__GT_Line2(G__10982){return (new thi.ng.geom.types.Line2(new cljs.core.Keyword(null,"points","points",4326117461).cljs$core$IFn$_invoke$arity$1(G__10982),null,cljs.core.dissoc.call(null,G__10982,new cljs.core.Keyword(null,"points","points",4326117461))));
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
thi.ng.geom.types.LineStrip2.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5539__auto__,k__5540__auto__){var self__ = this;
var this__5539__auto____$1 = this;return cljs.core._lookup.call(null,this__5539__auto____$1,k__5540__auto__,null);
});
thi.ng.geom.types.LineStrip2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5541__auto__,k10987,else__5542__auto__){var self__ = this;
var this__5541__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k10987,new cljs.core.Keyword(null,"points","points",4326117461)))
{return self__.points;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k10987,else__5542__auto__);
} else
{return null;
}
}
});
thi.ng.geom.types.LineStrip2.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5553__auto__,writer__5554__auto__,opts__5555__auto__){var self__ = this;
var this__5553__auto____$1 = this;var pr_pair__5556__auto__ = ((function (this__5553__auto____$1){
return (function (keyval__5557__auto__){return cljs.core.pr_sequential_writer.call(null,writer__5554__auto__,cljs.core.pr_writer,""," ","",opts__5555__auto__,keyval__5557__auto__);
});})(this__5553__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__5554__auto__,pr_pair__5556__auto__,"#thi.ng.geom.types.LineStrip2{",", ","}",opts__5555__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",4326117461),self__.points],null))], null),self__.__extmap));
});
thi.ng.geom.types.LineStrip2.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5537__auto__){var self__ = this;
var this__5537__auto____$1 = this;return self__.__meta;
});
thi.ng.geom.types.LineStrip2.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5533__auto__){var self__ = this;
var this__5533__auto____$1 = this;return (new thi.ng.geom.types.LineStrip2(self__.points,self__.__meta,self__.__extmap,self__.__hash));
});
thi.ng.geom.types.LineStrip2.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5543__auto__){var self__ = this;
var this__5543__auto____$1 = this;return (1 + cljs.core.count.call(null,self__.__extmap));
});
thi.ng.geom.types.LineStrip2.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5534__auto__){var self__ = this;
var this__5534__auto____$1 = this;var h__5364__auto__ = self__.__hash;if(!((h__5364__auto__ == null)))
{return h__5364__auto__;
} else
{var h__5364__auto____$1 = cljs.core.hash_imap.call(null,this__5534__auto____$1);self__.__hash = h__5364__auto____$1;
return h__5364__auto____$1;
}
});
thi.ng.geom.types.LineStrip2.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5535__auto__,other__5536__auto__){var self__ = this;
var this__5535__auto____$1 = this;if(cljs.core.truth_((function (){var and__4941__auto__ = other__5536__auto__;if(cljs.core.truth_(and__4941__auto__))
{return ((this__5535__auto____$1.constructor === other__5536__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__5535__auto____$1,other__5536__auto__));
} else
{return and__4941__auto__;
}
})()))
{return true;
} else
{return false;
}
});
thi.ng.geom.types.LineStrip2.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5548__auto__,k__5549__auto__){var self__ = this;
var this__5548__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",4326117461),null], null), null),k__5549__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5548__auto____$1),self__.__meta),k__5549__auto__);
} else
{return (new thi.ng.geom.types.LineStrip2(self__.points,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5549__auto__)),null));
}
});
thi.ng.geom.types.LineStrip2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5546__auto__,k__5547__auto__,G__10986){var self__ = this;
var this__5546__auto____$1 = this;var pred__10989 = cljs.core.keyword_identical_QMARK_;var expr__10990 = k__5547__auto__;if(cljs.core.truth_(pred__10989.call(null,new cljs.core.Keyword(null,"points","points",4326117461),expr__10990)))
{return (new thi.ng.geom.types.LineStrip2(G__10986,self__.__meta,self__.__extmap,null));
} else
{return (new thi.ng.geom.types.LineStrip2(self__.points,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5547__auto__,G__10986),null));
}
});
thi.ng.geom.types.LineStrip2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5551__auto__){var self__ = this;
var this__5551__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",4326117461),self__.points],null))], null),self__.__extmap));
});
thi.ng.geom.types.LineStrip2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5538__auto__,G__10986){var self__ = this;
var this__5538__auto____$1 = this;return (new thi.ng.geom.types.LineStrip2(self__.points,G__10986,self__.__extmap,self__.__hash));
});
thi.ng.geom.types.LineStrip2.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5544__auto__,entry__5545__auto__){var self__ = this;
var this__5544__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__5545__auto__))
{return cljs.core._assoc.call(null,this__5544__auto____$1,cljs.core._nth.call(null,entry__5545__auto__,0),cljs.core._nth.call(null,entry__5545__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__5544__auto____$1,entry__5545__auto__);
}
});
thi.ng.geom.types.LineStrip2.cljs$lang$type = true;
thi.ng.geom.types.LineStrip2.cljs$lang$ctorPrSeq = (function (this__5573__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/LineStrip2");
});
thi.ng.geom.types.LineStrip2.cljs$lang$ctorPrWriter = (function (this__5573__auto__,writer__5574__auto__){return cljs.core._write.call(null,writer__5574__auto__,"thi.ng.geom.types/LineStrip2");
});
thi.ng.geom.types.__GT_LineStrip2 = (function __GT_LineStrip2(points){return (new thi.ng.geom.types.LineStrip2(points));
});
thi.ng.geom.types.map__GT_LineStrip2 = (function map__GT_LineStrip2(G__10988){return (new thi.ng.geom.types.LineStrip2(new cljs.core.Keyword(null,"points","points",4326117461).cljs$core$IFn$_invoke$arity$1(G__10988),null,cljs.core.dissoc.call(null,G__10988,new cljs.core.Keyword(null,"points","points",4326117461))));
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
thi.ng.geom.types.Mesh2.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5539__auto__,k__5540__auto__){var self__ = this;
var this__5539__auto____$1 = this;return cljs.core._lookup.call(null,this__5539__auto____$1,k__5540__auto__,null);
});
thi.ng.geom.types.Mesh2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5541__auto__,k10993,else__5542__auto__){var self__ = this;
var this__5541__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k10993,new cljs.core.Keyword(null,"vertices","vertices",3324730219)))
{return self__.vertices;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k10993,new cljs.core.Keyword(null,"normals","normals",3141522398)))
{return self__.normals;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k10993,new cljs.core.Keyword(null,"fnormals","fnormals",519550136)))
{return self__.fnormals;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k10993,new cljs.core.Keyword(null,"vnormals","vnormals",2634711720)))
{return self__.vnormals;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k10993,new cljs.core.Keyword(null,"edges","edges",1110261192)))
{return self__.edges;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k10993,new cljs.core.Keyword(null,"faces","faces",1111091496)))
{return self__.faces;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k10993,new cljs.core.Keyword(null,"attribs","attribs",4634025563)))
{return self__.attribs;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k10993,else__5542__auto__);
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
thi.ng.geom.types.Mesh2.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5553__auto__,writer__5554__auto__,opts__5555__auto__){var self__ = this;
var this__5553__auto____$1 = this;var pr_pair__5556__auto__ = ((function (this__5553__auto____$1){
return (function (keyval__5557__auto__){return cljs.core.pr_sequential_writer.call(null,writer__5554__auto__,cljs.core.pr_writer,""," ","",opts__5555__auto__,keyval__5557__auto__);
});})(this__5553__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__5554__auto__,pr_pair__5556__auto__,"#thi.ng.geom.types.Mesh2{",", ","}",opts__5555__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vertices","vertices",3324730219),self__.vertices],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"normals","normals",3141522398),self__.normals],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fnormals","fnormals",519550136),self__.fnormals],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vnormals","vnormals",2634711720),self__.vnormals],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"edges","edges",1110261192),self__.edges],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"faces","faces",1111091496),self__.faces],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attribs","attribs",4634025563),self__.attribs],null))], null),self__.__extmap));
});
thi.ng.geom.types.Mesh2.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5537__auto__){var self__ = this;
var this__5537__auto____$1 = this;return self__.__meta;
});
thi.ng.geom.types.Mesh2.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5533__auto__){var self__ = this;
var this__5533__auto____$1 = this;return (new thi.ng.geom.types.Mesh2(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,self__.__extmap,self__.__hash));
});
thi.ng.geom.types.Mesh2.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5543__auto__){var self__ = this;
var this__5543__auto____$1 = this;return (7 + cljs.core.count.call(null,self__.__extmap));
});
thi.ng.geom.types.Mesh2.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5534__auto__){var self__ = this;
var this__5534__auto____$1 = this;var h__5364__auto__ = self__.__hash;if(!((h__5364__auto__ == null)))
{return h__5364__auto__;
} else
{var h__5364__auto____$1 = cljs.core.hash_imap.call(null,this__5534__auto____$1);self__.__hash = h__5364__auto____$1;
return h__5364__auto____$1;
}
});
thi.ng.geom.types.Mesh2.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5535__auto__,other__5536__auto__){var self__ = this;
var this__5535__auto____$1 = this;if(cljs.core.truth_((function (){var and__4941__auto__ = other__5536__auto__;if(cljs.core.truth_(and__4941__auto__))
{return ((this__5535__auto____$1.constructor === other__5536__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__5535__auto____$1,other__5536__auto__));
} else
{return and__4941__auto__;
}
})()))
{return true;
} else
{return false;
}
});
thi.ng.geom.types.Mesh2.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5548__auto__,k__5549__auto__){var self__ = this;
var this__5548__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"vertices","vertices",3324730219),null,new cljs.core.Keyword(null,"vnormals","vnormals",2634711720),null,new cljs.core.Keyword(null,"attribs","attribs",4634025563),null,new cljs.core.Keyword(null,"normals","normals",3141522398),null,new cljs.core.Keyword(null,"faces","faces",1111091496),null,new cljs.core.Keyword(null,"edges","edges",1110261192),null,new cljs.core.Keyword(null,"fnormals","fnormals",519550136),null], null), null),k__5549__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5548__auto____$1),self__.__meta),k__5549__auto__);
} else
{return (new thi.ng.geom.types.Mesh2(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5549__auto__)),null));
}
});
thi.ng.geom.types.Mesh2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5546__auto__,k__5547__auto__,G__10992){var self__ = this;
var this__5546__auto____$1 = this;var pred__10995 = cljs.core.keyword_identical_QMARK_;var expr__10996 = k__5547__auto__;if(cljs.core.truth_(pred__10995.call(null,new cljs.core.Keyword(null,"vertices","vertices",3324730219),expr__10996)))
{return (new thi.ng.geom.types.Mesh2(G__10992,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__10995.call(null,new cljs.core.Keyword(null,"normals","normals",3141522398),expr__10996)))
{return (new thi.ng.geom.types.Mesh2(self__.vertices,G__10992,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__10995.call(null,new cljs.core.Keyword(null,"fnormals","fnormals",519550136),expr__10996)))
{return (new thi.ng.geom.types.Mesh2(self__.vertices,self__.normals,G__10992,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__10995.call(null,new cljs.core.Keyword(null,"vnormals","vnormals",2634711720),expr__10996)))
{return (new thi.ng.geom.types.Mesh2(self__.vertices,self__.normals,self__.fnormals,G__10992,self__.edges,self__.faces,self__.attribs,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__10995.call(null,new cljs.core.Keyword(null,"edges","edges",1110261192),expr__10996)))
{return (new thi.ng.geom.types.Mesh2(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,G__10992,self__.faces,self__.attribs,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__10995.call(null,new cljs.core.Keyword(null,"faces","faces",1111091496),expr__10996)))
{return (new thi.ng.geom.types.Mesh2(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,G__10992,self__.attribs,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__10995.call(null,new cljs.core.Keyword(null,"attribs","attribs",4634025563),expr__10996)))
{return (new thi.ng.geom.types.Mesh2(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,G__10992,self__.__meta,self__.__extmap,null));
} else
{return (new thi.ng.geom.types.Mesh2(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5547__auto__,G__10992),null));
}
}
}
}
}
}
}
});
thi.ng.geom.types.Mesh2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5551__auto__){var self__ = this;
var this__5551__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vertices","vertices",3324730219),self__.vertices],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"normals","normals",3141522398),self__.normals],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fnormals","fnormals",519550136),self__.fnormals],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vnormals","vnormals",2634711720),self__.vnormals],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"edges","edges",1110261192),self__.edges],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"faces","faces",1111091496),self__.faces],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attribs","attribs",4634025563),self__.attribs],null))], null),self__.__extmap));
});
thi.ng.geom.types.Mesh2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5538__auto__,G__10992){var self__ = this;
var this__5538__auto____$1 = this;return (new thi.ng.geom.types.Mesh2(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,G__10992,self__.__extmap,self__.__hash));
});
thi.ng.geom.types.Mesh2.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5544__auto__,entry__5545__auto__){var self__ = this;
var this__5544__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__5545__auto__))
{return cljs.core._assoc.call(null,this__5544__auto____$1,cljs.core._nth.call(null,entry__5545__auto__,0),cljs.core._nth.call(null,entry__5545__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__5544__auto____$1,entry__5545__auto__);
}
});
thi.ng.geom.types.Mesh2.cljs$lang$type = true;
thi.ng.geom.types.Mesh2.cljs$lang$ctorPrSeq = (function (this__5573__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Mesh2");
});
thi.ng.geom.types.Mesh2.cljs$lang$ctorPrWriter = (function (this__5573__auto__,writer__5574__auto__){return cljs.core._write.call(null,writer__5574__auto__,"thi.ng.geom.types/Mesh2");
});
thi.ng.geom.types.__GT_Mesh2 = (function __GT_Mesh2(vertices,normals,fnormals,vnormals,edges,faces,attribs){return (new thi.ng.geom.types.Mesh2(vertices,normals,fnormals,vnormals,edges,faces,attribs));
});
thi.ng.geom.types.map__GT_Mesh2 = (function map__GT_Mesh2(G__10994){return (new thi.ng.geom.types.Mesh2(new cljs.core.Keyword(null,"vertices","vertices",3324730219).cljs$core$IFn$_invoke$arity$1(G__10994),new cljs.core.Keyword(null,"normals","normals",3141522398).cljs$core$IFn$_invoke$arity$1(G__10994),new cljs.core.Keyword(null,"fnormals","fnormals",519550136).cljs$core$IFn$_invoke$arity$1(G__10994),new cljs.core.Keyword(null,"vnormals","vnormals",2634711720).cljs$core$IFn$_invoke$arity$1(G__10994),new cljs.core.Keyword(null,"edges","edges",1110261192).cljs$core$IFn$_invoke$arity$1(G__10994),new cljs.core.Keyword(null,"faces","faces",1111091496).cljs$core$IFn$_invoke$arity$1(G__10994),new cljs.core.Keyword(null,"attribs","attribs",4634025563).cljs$core$IFn$_invoke$arity$1(G__10994),null,cljs.core.dissoc.call(null,G__10994,new cljs.core.Keyword(null,"vertices","vertices",3324730219),new cljs.core.Keyword(null,"normals","normals",3141522398),new cljs.core.Keyword(null,"fnormals","fnormals",519550136),new cljs.core.Keyword(null,"vnormals","vnormals",2634711720),new cljs.core.Keyword(null,"edges","edges",1110261192),new cljs.core.Keyword(null,"faces","faces",1111091496),new cljs.core.Keyword(null,"attribs","attribs",4634025563))));
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
thi.ng.geom.types.Path2.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5539__auto__,k__5540__auto__){var self__ = this;
var this__5539__auto____$1 = this;return cljs.core._lookup.call(null,this__5539__auto____$1,k__5540__auto__,null);
});
thi.ng.geom.types.Path2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5541__auto__,k10999,else__5542__auto__){var self__ = this;
var this__5541__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k10999,new cljs.core.Keyword(null,"segments","segments",2069773074)))
{return self__.segments;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k10999,else__5542__auto__);
} else
{return null;
}
}
});
thi.ng.geom.types.Path2.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5553__auto__,writer__5554__auto__,opts__5555__auto__){var self__ = this;
var this__5553__auto____$1 = this;var pr_pair__5556__auto__ = ((function (this__5553__auto____$1){
return (function (keyval__5557__auto__){return cljs.core.pr_sequential_writer.call(null,writer__5554__auto__,cljs.core.pr_writer,""," ","",opts__5555__auto__,keyval__5557__auto__);
});})(this__5553__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__5554__auto__,pr_pair__5556__auto__,"#thi.ng.geom.types.Path2{",", ","}",opts__5555__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"segments","segments",2069773074),self__.segments],null))], null),self__.__extmap));
});
thi.ng.geom.types.Path2.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5537__auto__){var self__ = this;
var this__5537__auto____$1 = this;return self__.__meta;
});
thi.ng.geom.types.Path2.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5533__auto__){var self__ = this;
var this__5533__auto____$1 = this;return (new thi.ng.geom.types.Path2(self__.segments,self__.__meta,self__.__extmap,self__.__hash));
});
thi.ng.geom.types.Path2.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5543__auto__){var self__ = this;
var this__5543__auto____$1 = this;return (1 + cljs.core.count.call(null,self__.__extmap));
});
thi.ng.geom.types.Path2.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5534__auto__){var self__ = this;
var this__5534__auto____$1 = this;var h__5364__auto__ = self__.__hash;if(!((h__5364__auto__ == null)))
{return h__5364__auto__;
} else
{var h__5364__auto____$1 = cljs.core.hash_imap.call(null,this__5534__auto____$1);self__.__hash = h__5364__auto____$1;
return h__5364__auto____$1;
}
});
thi.ng.geom.types.Path2.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5535__auto__,other__5536__auto__){var self__ = this;
var this__5535__auto____$1 = this;if(cljs.core.truth_((function (){var and__4941__auto__ = other__5536__auto__;if(cljs.core.truth_(and__4941__auto__))
{return ((this__5535__auto____$1.constructor === other__5536__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__5535__auto____$1,other__5536__auto__));
} else
{return and__4941__auto__;
}
})()))
{return true;
} else
{return false;
}
});
thi.ng.geom.types.Path2.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5548__auto__,k__5549__auto__){var self__ = this;
var this__5548__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"segments","segments",2069773074),null], null), null),k__5549__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5548__auto____$1),self__.__meta),k__5549__auto__);
} else
{return (new thi.ng.geom.types.Path2(self__.segments,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5549__auto__)),null));
}
});
thi.ng.geom.types.Path2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5546__auto__,k__5547__auto__,G__10998){var self__ = this;
var this__5546__auto____$1 = this;var pred__11001 = cljs.core.keyword_identical_QMARK_;var expr__11002 = k__5547__auto__;if(cljs.core.truth_(pred__11001.call(null,new cljs.core.Keyword(null,"segments","segments",2069773074),expr__11002)))
{return (new thi.ng.geom.types.Path2(G__10998,self__.__meta,self__.__extmap,null));
} else
{return (new thi.ng.geom.types.Path2(self__.segments,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5547__auto__,G__10998),null));
}
});
thi.ng.geom.types.Path2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5551__auto__){var self__ = this;
var this__5551__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"segments","segments",2069773074),self__.segments],null))], null),self__.__extmap));
});
thi.ng.geom.types.Path2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5538__auto__,G__10998){var self__ = this;
var this__5538__auto____$1 = this;return (new thi.ng.geom.types.Path2(self__.segments,G__10998,self__.__extmap,self__.__hash));
});
thi.ng.geom.types.Path2.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5544__auto__,entry__5545__auto__){var self__ = this;
var this__5544__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__5545__auto__))
{return cljs.core._assoc.call(null,this__5544__auto____$1,cljs.core._nth.call(null,entry__5545__auto__,0),cljs.core._nth.call(null,entry__5545__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__5544__auto____$1,entry__5545__auto__);
}
});
thi.ng.geom.types.Path2.cljs$lang$type = true;
thi.ng.geom.types.Path2.cljs$lang$ctorPrSeq = (function (this__5573__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Path2");
});
thi.ng.geom.types.Path2.cljs$lang$ctorPrWriter = (function (this__5573__auto__,writer__5574__auto__){return cljs.core._write.call(null,writer__5574__auto__,"thi.ng.geom.types/Path2");
});
thi.ng.geom.types.__GT_Path2 = (function __GT_Path2(segments){return (new thi.ng.geom.types.Path2(segments));
});
thi.ng.geom.types.map__GT_Path2 = (function map__GT_Path2(G__11000){return (new thi.ng.geom.types.Path2(new cljs.core.Keyword(null,"segments","segments",2069773074).cljs$core$IFn$_invoke$arity$1(G__11000),null,cljs.core.dissoc.call(null,G__11000,new cljs.core.Keyword(null,"segments","segments",2069773074))));
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
thi.ng.geom.types.Polygon2.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5539__auto__,k__5540__auto__){var self__ = this;
var this__5539__auto____$1 = this;return cljs.core._lookup.call(null,this__5539__auto____$1,k__5540__auto__,null);
});
thi.ng.geom.types.Polygon2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5541__auto__,k11005,else__5542__auto__){var self__ = this;
var this__5541__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k11005,new cljs.core.Keyword(null,"points","points",4326117461)))
{return self__.points;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k11005,else__5542__auto__);
} else
{return null;
}
}
});
thi.ng.geom.types.Polygon2.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5553__auto__,writer__5554__auto__,opts__5555__auto__){var self__ = this;
var this__5553__auto____$1 = this;var pr_pair__5556__auto__ = ((function (this__5553__auto____$1){
return (function (keyval__5557__auto__){return cljs.core.pr_sequential_writer.call(null,writer__5554__auto__,cljs.core.pr_writer,""," ","",opts__5555__auto__,keyval__5557__auto__);
});})(this__5553__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__5554__auto__,pr_pair__5556__auto__,"#thi.ng.geom.types.Polygon2{",", ","}",opts__5555__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",4326117461),self__.points],null))], null),self__.__extmap));
});
thi.ng.geom.types.Polygon2.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5537__auto__){var self__ = this;
var this__5537__auto____$1 = this;return self__.__meta;
});
thi.ng.geom.types.Polygon2.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5533__auto__){var self__ = this;
var this__5533__auto____$1 = this;return (new thi.ng.geom.types.Polygon2(self__.points,self__.__meta,self__.__extmap,self__.__hash));
});
thi.ng.geom.types.Polygon2.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5543__auto__){var self__ = this;
var this__5543__auto____$1 = this;return (1 + cljs.core.count.call(null,self__.__extmap));
});
thi.ng.geom.types.Polygon2.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5534__auto__){var self__ = this;
var this__5534__auto____$1 = this;var h__5364__auto__ = self__.__hash;if(!((h__5364__auto__ == null)))
{return h__5364__auto__;
} else
{var h__5364__auto____$1 = cljs.core.hash_imap.call(null,this__5534__auto____$1);self__.__hash = h__5364__auto____$1;
return h__5364__auto____$1;
}
});
thi.ng.geom.types.Polygon2.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5535__auto__,other__5536__auto__){var self__ = this;
var this__5535__auto____$1 = this;if(cljs.core.truth_((function (){var and__4941__auto__ = other__5536__auto__;if(cljs.core.truth_(and__4941__auto__))
{return ((this__5535__auto____$1.constructor === other__5536__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__5535__auto____$1,other__5536__auto__));
} else
{return and__4941__auto__;
}
})()))
{return true;
} else
{return false;
}
});
thi.ng.geom.types.Polygon2.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5548__auto__,k__5549__auto__){var self__ = this;
var this__5548__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",4326117461),null], null), null),k__5549__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5548__auto____$1),self__.__meta),k__5549__auto__);
} else
{return (new thi.ng.geom.types.Polygon2(self__.points,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5549__auto__)),null));
}
});
thi.ng.geom.types.Polygon2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5546__auto__,k__5547__auto__,G__11004){var self__ = this;
var this__5546__auto____$1 = this;var pred__11007 = cljs.core.keyword_identical_QMARK_;var expr__11008 = k__5547__auto__;if(cljs.core.truth_(pred__11007.call(null,new cljs.core.Keyword(null,"points","points",4326117461),expr__11008)))
{return (new thi.ng.geom.types.Polygon2(G__11004,self__.__meta,self__.__extmap,null));
} else
{return (new thi.ng.geom.types.Polygon2(self__.points,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5547__auto__,G__11004),null));
}
});
thi.ng.geom.types.Polygon2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5551__auto__){var self__ = this;
var this__5551__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",4326117461),self__.points],null))], null),self__.__extmap));
});
thi.ng.geom.types.Polygon2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5538__auto__,G__11004){var self__ = this;
var this__5538__auto____$1 = this;return (new thi.ng.geom.types.Polygon2(self__.points,G__11004,self__.__extmap,self__.__hash));
});
thi.ng.geom.types.Polygon2.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5544__auto__,entry__5545__auto__){var self__ = this;
var this__5544__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__5545__auto__))
{return cljs.core._assoc.call(null,this__5544__auto____$1,cljs.core._nth.call(null,entry__5545__auto__,0),cljs.core._nth.call(null,entry__5545__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__5544__auto____$1,entry__5545__auto__);
}
});
thi.ng.geom.types.Polygon2.cljs$lang$type = true;
thi.ng.geom.types.Polygon2.cljs$lang$ctorPrSeq = (function (this__5573__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Polygon2");
});
thi.ng.geom.types.Polygon2.cljs$lang$ctorPrWriter = (function (this__5573__auto__,writer__5574__auto__){return cljs.core._write.call(null,writer__5574__auto__,"thi.ng.geom.types/Polygon2");
});
thi.ng.geom.types.__GT_Polygon2 = (function __GT_Polygon2(points){return (new thi.ng.geom.types.Polygon2(points));
});
thi.ng.geom.types.map__GT_Polygon2 = (function map__GT_Polygon2(G__11006){return (new thi.ng.geom.types.Polygon2(new cljs.core.Keyword(null,"points","points",4326117461).cljs$core$IFn$_invoke$arity$1(G__11006),null,cljs.core.dissoc.call(null,G__11006,new cljs.core.Keyword(null,"points","points",4326117461))));
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
thi.ng.geom.types.Rect2.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5539__auto__,k__5540__auto__){var self__ = this;
var this__5539__auto____$1 = this;return cljs.core._lookup.call(null,this__5539__auto____$1,k__5540__auto__,null);
});
thi.ng.geom.types.Rect2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5541__auto__,k11011,else__5542__auto__){var self__ = this;
var this__5541__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k11011,new cljs.core.Keyword(null,"p","p",1013904354)))
{return self__.p;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k11011,new cljs.core.Keyword(null,"size","size",1017434995)))
{return self__.size;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k11011,else__5542__auto__);
} else
{return null;
}
}
}
});
thi.ng.geom.types.Rect2.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5553__auto__,writer__5554__auto__,opts__5555__auto__){var self__ = this;
var this__5553__auto____$1 = this;var pr_pair__5556__auto__ = ((function (this__5553__auto____$1){
return (function (keyval__5557__auto__){return cljs.core.pr_sequential_writer.call(null,writer__5554__auto__,cljs.core.pr_writer,""," ","",opts__5555__auto__,keyval__5557__auto__);
});})(this__5553__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__5554__auto__,pr_pair__5556__auto__,"#thi.ng.geom.types.Rect2{",", ","}",opts__5555__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p","p",1013904354),self__.p],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"size","size",1017434995),self__.size],null))], null),self__.__extmap));
});
thi.ng.geom.types.Rect2.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5537__auto__){var self__ = this;
var this__5537__auto____$1 = this;return self__.__meta;
});
thi.ng.geom.types.Rect2.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5533__auto__){var self__ = this;
var this__5533__auto____$1 = this;return (new thi.ng.geom.types.Rect2(self__.p,self__.size,self__.__meta,self__.__extmap,self__.__hash));
});
thi.ng.geom.types.Rect2.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5543__auto__){var self__ = this;
var this__5543__auto____$1 = this;return (2 + cljs.core.count.call(null,self__.__extmap));
});
thi.ng.geom.types.Rect2.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5534__auto__){var self__ = this;
var this__5534__auto____$1 = this;var h__5364__auto__ = self__.__hash;if(!((h__5364__auto__ == null)))
{return h__5364__auto__;
} else
{var h__5364__auto____$1 = cljs.core.hash_imap.call(null,this__5534__auto____$1);self__.__hash = h__5364__auto____$1;
return h__5364__auto____$1;
}
});
thi.ng.geom.types.Rect2.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5535__auto__,other__5536__auto__){var self__ = this;
var this__5535__auto____$1 = this;if(cljs.core.truth_((function (){var and__4941__auto__ = other__5536__auto__;if(cljs.core.truth_(and__4941__auto__))
{return ((this__5535__auto____$1.constructor === other__5536__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__5535__auto____$1,other__5536__auto__));
} else
{return and__4941__auto__;
}
})()))
{return true;
} else
{return false;
}
});
thi.ng.geom.types.Rect2.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5548__auto__,k__5549__auto__){var self__ = this;
var this__5548__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1017434995),null,new cljs.core.Keyword(null,"p","p",1013904354),null], null), null),k__5549__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5548__auto____$1),self__.__meta),k__5549__auto__);
} else
{return (new thi.ng.geom.types.Rect2(self__.p,self__.size,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5549__auto__)),null));
}
});
thi.ng.geom.types.Rect2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5546__auto__,k__5547__auto__,G__11010){var self__ = this;
var this__5546__auto____$1 = this;var pred__11013 = cljs.core.keyword_identical_QMARK_;var expr__11014 = k__5547__auto__;if(cljs.core.truth_(pred__11013.call(null,new cljs.core.Keyword(null,"p","p",1013904354),expr__11014)))
{return (new thi.ng.geom.types.Rect2(G__11010,self__.size,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__11013.call(null,new cljs.core.Keyword(null,"size","size",1017434995),expr__11014)))
{return (new thi.ng.geom.types.Rect2(self__.p,G__11010,self__.__meta,self__.__extmap,null));
} else
{return (new thi.ng.geom.types.Rect2(self__.p,self__.size,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5547__auto__,G__11010),null));
}
}
});
thi.ng.geom.types.Rect2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5551__auto__){var self__ = this;
var this__5551__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p","p",1013904354),self__.p],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"size","size",1017434995),self__.size],null))], null),self__.__extmap));
});
thi.ng.geom.types.Rect2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5538__auto__,G__11010){var self__ = this;
var this__5538__auto____$1 = this;return (new thi.ng.geom.types.Rect2(self__.p,self__.size,G__11010,self__.__extmap,self__.__hash));
});
thi.ng.geom.types.Rect2.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5544__auto__,entry__5545__auto__){var self__ = this;
var this__5544__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__5545__auto__))
{return cljs.core._assoc.call(null,this__5544__auto____$1,cljs.core._nth.call(null,entry__5545__auto__,0),cljs.core._nth.call(null,entry__5545__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__5544__auto____$1,entry__5545__auto__);
}
});
thi.ng.geom.types.Rect2.cljs$lang$type = true;
thi.ng.geom.types.Rect2.cljs$lang$ctorPrSeq = (function (this__5573__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Rect2");
});
thi.ng.geom.types.Rect2.cljs$lang$ctorPrWriter = (function (this__5573__auto__,writer__5574__auto__){return cljs.core._write.call(null,writer__5574__auto__,"thi.ng.geom.types/Rect2");
});
thi.ng.geom.types.__GT_Rect2 = (function __GT_Rect2(p,size){return (new thi.ng.geom.types.Rect2(p,size));
});
thi.ng.geom.types.map__GT_Rect2 = (function map__GT_Rect2(G__11012){return (new thi.ng.geom.types.Rect2(new cljs.core.Keyword(null,"p","p",1013904354).cljs$core$IFn$_invoke$arity$1(G__11012),new cljs.core.Keyword(null,"size","size",1017434995).cljs$core$IFn$_invoke$arity$1(G__11012),null,cljs.core.dissoc.call(null,G__11012,new cljs.core.Keyword(null,"p","p",1013904354),new cljs.core.Keyword(null,"size","size",1017434995))));
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
thi.ng.geom.types.Triangle2.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5539__auto__,k__5540__auto__){var self__ = this;
var this__5539__auto____$1 = this;return cljs.core._lookup.call(null,this__5539__auto____$1,k__5540__auto__,null);
});
thi.ng.geom.types.Triangle2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5541__auto__,k11017,else__5542__auto__){var self__ = this;
var this__5541__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k11017,new cljs.core.Keyword(null,"points","points",4326117461)))
{return self__.points;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k11017,else__5542__auto__);
} else
{return null;
}
}
});
thi.ng.geom.types.Triangle2.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5553__auto__,writer__5554__auto__,opts__5555__auto__){var self__ = this;
var this__5553__auto____$1 = this;var pr_pair__5556__auto__ = ((function (this__5553__auto____$1){
return (function (keyval__5557__auto__){return cljs.core.pr_sequential_writer.call(null,writer__5554__auto__,cljs.core.pr_writer,""," ","",opts__5555__auto__,keyval__5557__auto__);
});})(this__5553__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__5554__auto__,pr_pair__5556__auto__,"#thi.ng.geom.types.Triangle2{",", ","}",opts__5555__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",4326117461),self__.points],null))], null),self__.__extmap));
});
thi.ng.geom.types.Triangle2.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5537__auto__){var self__ = this;
var this__5537__auto____$1 = this;return self__.__meta;
});
thi.ng.geom.types.Triangle2.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5533__auto__){var self__ = this;
var this__5533__auto____$1 = this;return (new thi.ng.geom.types.Triangle2(self__.points,self__.__meta,self__.__extmap,self__.__hash));
});
thi.ng.geom.types.Triangle2.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5543__auto__){var self__ = this;
var this__5543__auto____$1 = this;return (1 + cljs.core.count.call(null,self__.__extmap));
});
thi.ng.geom.types.Triangle2.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5534__auto__){var self__ = this;
var this__5534__auto____$1 = this;var h__5364__auto__ = self__.__hash;if(!((h__5364__auto__ == null)))
{return h__5364__auto__;
} else
{var h__5364__auto____$1 = cljs.core.hash_imap.call(null,this__5534__auto____$1);self__.__hash = h__5364__auto____$1;
return h__5364__auto____$1;
}
});
thi.ng.geom.types.Triangle2.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5535__auto__,other__5536__auto__){var self__ = this;
var this__5535__auto____$1 = this;if(cljs.core.truth_((function (){var and__4941__auto__ = other__5536__auto__;if(cljs.core.truth_(and__4941__auto__))
{return ((this__5535__auto____$1.constructor === other__5536__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__5535__auto____$1,other__5536__auto__));
} else
{return and__4941__auto__;
}
})()))
{return true;
} else
{return false;
}
});
thi.ng.geom.types.Triangle2.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5548__auto__,k__5549__auto__){var self__ = this;
var this__5548__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",4326117461),null], null), null),k__5549__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5548__auto____$1),self__.__meta),k__5549__auto__);
} else
{return (new thi.ng.geom.types.Triangle2(self__.points,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5549__auto__)),null));
}
});
thi.ng.geom.types.Triangle2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5546__auto__,k__5547__auto__,G__11016){var self__ = this;
var this__5546__auto____$1 = this;var pred__11019 = cljs.core.keyword_identical_QMARK_;var expr__11020 = k__5547__auto__;if(cljs.core.truth_(pred__11019.call(null,new cljs.core.Keyword(null,"points","points",4326117461),expr__11020)))
{return (new thi.ng.geom.types.Triangle2(G__11016,self__.__meta,self__.__extmap,null));
} else
{return (new thi.ng.geom.types.Triangle2(self__.points,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5547__auto__,G__11016),null));
}
});
thi.ng.geom.types.Triangle2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5551__auto__){var self__ = this;
var this__5551__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",4326117461),self__.points],null))], null),self__.__extmap));
});
thi.ng.geom.types.Triangle2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5538__auto__,G__11016){var self__ = this;
var this__5538__auto____$1 = this;return (new thi.ng.geom.types.Triangle2(self__.points,G__11016,self__.__extmap,self__.__hash));
});
thi.ng.geom.types.Triangle2.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5544__auto__,entry__5545__auto__){var self__ = this;
var this__5544__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__5545__auto__))
{return cljs.core._assoc.call(null,this__5544__auto____$1,cljs.core._nth.call(null,entry__5545__auto__,0),cljs.core._nth.call(null,entry__5545__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__5544__auto____$1,entry__5545__auto__);
}
});
thi.ng.geom.types.Triangle2.cljs$lang$type = true;
thi.ng.geom.types.Triangle2.cljs$lang$ctorPrSeq = (function (this__5573__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Triangle2");
});
thi.ng.geom.types.Triangle2.cljs$lang$ctorPrWriter = (function (this__5573__auto__,writer__5574__auto__){return cljs.core._write.call(null,writer__5574__auto__,"thi.ng.geom.types/Triangle2");
});
thi.ng.geom.types.__GT_Triangle2 = (function __GT_Triangle2(points){return (new thi.ng.geom.types.Triangle2(points));
});
thi.ng.geom.types.map__GT_Triangle2 = (function map__GT_Triangle2(G__11018){return (new thi.ng.geom.types.Triangle2(new cljs.core.Keyword(null,"points","points",4326117461).cljs$core$IFn$_invoke$arity$1(G__11018),null,cljs.core.dissoc.call(null,G__11018,new cljs.core.Keyword(null,"points","points",4326117461))));
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
thi.ng.geom.types.AABB.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5539__auto__,k__5540__auto__){var self__ = this;
var this__5539__auto____$1 = this;return cljs.core._lookup.call(null,this__5539__auto____$1,k__5540__auto__,null);
});
thi.ng.geom.types.AABB.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5541__auto__,k11023,else__5542__auto__){var self__ = this;
var this__5541__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k11023,new cljs.core.Keyword(null,"p","p",1013904354)))
{return self__.p;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k11023,new cljs.core.Keyword(null,"size","size",1017434995)))
{return self__.size;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k11023,else__5542__auto__);
} else
{return null;
}
}
}
});
thi.ng.geom.types.AABB.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5553__auto__,writer__5554__auto__,opts__5555__auto__){var self__ = this;
var this__5553__auto____$1 = this;var pr_pair__5556__auto__ = ((function (this__5553__auto____$1){
return (function (keyval__5557__auto__){return cljs.core.pr_sequential_writer.call(null,writer__5554__auto__,cljs.core.pr_writer,""," ","",opts__5555__auto__,keyval__5557__auto__);
});})(this__5553__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__5554__auto__,pr_pair__5556__auto__,"#thi.ng.geom.types.AABB{",", ","}",opts__5555__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p","p",1013904354),self__.p],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"size","size",1017434995),self__.size],null))], null),self__.__extmap));
});
thi.ng.geom.types.AABB.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5537__auto__){var self__ = this;
var this__5537__auto____$1 = this;return self__.__meta;
});
thi.ng.geom.types.AABB.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5533__auto__){var self__ = this;
var this__5533__auto____$1 = this;return (new thi.ng.geom.types.AABB(self__.p,self__.size,self__.__meta,self__.__extmap,self__.__hash));
});
thi.ng.geom.types.AABB.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5543__auto__){var self__ = this;
var this__5543__auto____$1 = this;return (2 + cljs.core.count.call(null,self__.__extmap));
});
thi.ng.geom.types.AABB.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5534__auto__){var self__ = this;
var this__5534__auto____$1 = this;var h__5364__auto__ = self__.__hash;if(!((h__5364__auto__ == null)))
{return h__5364__auto__;
} else
{var h__5364__auto____$1 = cljs.core.hash_imap.call(null,this__5534__auto____$1);self__.__hash = h__5364__auto____$1;
return h__5364__auto____$1;
}
});
thi.ng.geom.types.AABB.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5535__auto__,other__5536__auto__){var self__ = this;
var this__5535__auto____$1 = this;if(cljs.core.truth_((function (){var and__4941__auto__ = other__5536__auto__;if(cljs.core.truth_(and__4941__auto__))
{return ((this__5535__auto____$1.constructor === other__5536__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__5535__auto____$1,other__5536__auto__));
} else
{return and__4941__auto__;
}
})()))
{return true;
} else
{return false;
}
});
thi.ng.geom.types.AABB.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5548__auto__,k__5549__auto__){var self__ = this;
var this__5548__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1017434995),null,new cljs.core.Keyword(null,"p","p",1013904354),null], null), null),k__5549__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5548__auto____$1),self__.__meta),k__5549__auto__);
} else
{return (new thi.ng.geom.types.AABB(self__.p,self__.size,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5549__auto__)),null));
}
});
thi.ng.geom.types.AABB.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5546__auto__,k__5547__auto__,G__11022){var self__ = this;
var this__5546__auto____$1 = this;var pred__11025 = cljs.core.keyword_identical_QMARK_;var expr__11026 = k__5547__auto__;if(cljs.core.truth_(pred__11025.call(null,new cljs.core.Keyword(null,"p","p",1013904354),expr__11026)))
{return (new thi.ng.geom.types.AABB(G__11022,self__.size,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__11025.call(null,new cljs.core.Keyword(null,"size","size",1017434995),expr__11026)))
{return (new thi.ng.geom.types.AABB(self__.p,G__11022,self__.__meta,self__.__extmap,null));
} else
{return (new thi.ng.geom.types.AABB(self__.p,self__.size,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5547__auto__,G__11022),null));
}
}
});
thi.ng.geom.types.AABB.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5551__auto__){var self__ = this;
var this__5551__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p","p",1013904354),self__.p],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"size","size",1017434995),self__.size],null))], null),self__.__extmap));
});
thi.ng.geom.types.AABB.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5538__auto__,G__11022){var self__ = this;
var this__5538__auto____$1 = this;return (new thi.ng.geom.types.AABB(self__.p,self__.size,G__11022,self__.__extmap,self__.__hash));
});
thi.ng.geom.types.AABB.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5544__auto__,entry__5545__auto__){var self__ = this;
var this__5544__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__5545__auto__))
{return cljs.core._assoc.call(null,this__5544__auto____$1,cljs.core._nth.call(null,entry__5545__auto__,0),cljs.core._nth.call(null,entry__5545__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__5544__auto____$1,entry__5545__auto__);
}
});
thi.ng.geom.types.AABB.cljs$lang$type = true;
thi.ng.geom.types.AABB.cljs$lang$ctorPrSeq = (function (this__5573__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/AABB");
});
thi.ng.geom.types.AABB.cljs$lang$ctorPrWriter = (function (this__5573__auto__,writer__5574__auto__){return cljs.core._write.call(null,writer__5574__auto__,"thi.ng.geom.types/AABB");
});
thi.ng.geom.types.__GT_AABB = (function __GT_AABB(p,size){return (new thi.ng.geom.types.AABB(p,size));
});
thi.ng.geom.types.map__GT_AABB = (function map__GT_AABB(G__11024){return (new thi.ng.geom.types.AABB(new cljs.core.Keyword(null,"p","p",1013904354).cljs$core$IFn$_invoke$arity$1(G__11024),new cljs.core.Keyword(null,"size","size",1017434995).cljs$core$IFn$_invoke$arity$1(G__11024),null,cljs.core.dissoc.call(null,G__11024,new cljs.core.Keyword(null,"p","p",1013904354),new cljs.core.Keyword(null,"size","size",1017434995))));
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
thi.ng.geom.types.Cuboid.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5539__auto__,k__5540__auto__){var self__ = this;
var this__5539__auto____$1 = this;return cljs.core._lookup.call(null,this__5539__auto____$1,k__5540__auto__,null);
});
thi.ng.geom.types.Cuboid.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5541__auto__,k11029,else__5542__auto__){var self__ = this;
var this__5541__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k11029,new cljs.core.Keyword(null,"points","points",4326117461)))
{return self__.points;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k11029,else__5542__auto__);
} else
{return null;
}
}
});
thi.ng.geom.types.Cuboid.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5553__auto__,writer__5554__auto__,opts__5555__auto__){var self__ = this;
var this__5553__auto____$1 = this;var pr_pair__5556__auto__ = ((function (this__5553__auto____$1){
return (function (keyval__5557__auto__){return cljs.core.pr_sequential_writer.call(null,writer__5554__auto__,cljs.core.pr_writer,""," ","",opts__5555__auto__,keyval__5557__auto__);
});})(this__5553__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__5554__auto__,pr_pair__5556__auto__,"#thi.ng.geom.types.Cuboid{",", ","}",opts__5555__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",4326117461),self__.points],null))], null),self__.__extmap));
});
thi.ng.geom.types.Cuboid.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5537__auto__){var self__ = this;
var this__5537__auto____$1 = this;return self__.__meta;
});
thi.ng.geom.types.Cuboid.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5533__auto__){var self__ = this;
var this__5533__auto____$1 = this;return (new thi.ng.geom.types.Cuboid(self__.points,self__.__meta,self__.__extmap,self__.__hash));
});
thi.ng.geom.types.Cuboid.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5543__auto__){var self__ = this;
var this__5543__auto____$1 = this;return (1 + cljs.core.count.call(null,self__.__extmap));
});
thi.ng.geom.types.Cuboid.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5534__auto__){var self__ = this;
var this__5534__auto____$1 = this;var h__5364__auto__ = self__.__hash;if(!((h__5364__auto__ == null)))
{return h__5364__auto__;
} else
{var h__5364__auto____$1 = cljs.core.hash_imap.call(null,this__5534__auto____$1);self__.__hash = h__5364__auto____$1;
return h__5364__auto____$1;
}
});
thi.ng.geom.types.Cuboid.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5535__auto__,other__5536__auto__){var self__ = this;
var this__5535__auto____$1 = this;if(cljs.core.truth_((function (){var and__4941__auto__ = other__5536__auto__;if(cljs.core.truth_(and__4941__auto__))
{return ((this__5535__auto____$1.constructor === other__5536__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__5535__auto____$1,other__5536__auto__));
} else
{return and__4941__auto__;
}
})()))
{return true;
} else
{return false;
}
});
thi.ng.geom.types.Cuboid.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5548__auto__,k__5549__auto__){var self__ = this;
var this__5548__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",4326117461),null], null), null),k__5549__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5548__auto____$1),self__.__meta),k__5549__auto__);
} else
{return (new thi.ng.geom.types.Cuboid(self__.points,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5549__auto__)),null));
}
});
thi.ng.geom.types.Cuboid.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5546__auto__,k__5547__auto__,G__11028){var self__ = this;
var this__5546__auto____$1 = this;var pred__11031 = cljs.core.keyword_identical_QMARK_;var expr__11032 = k__5547__auto__;if(cljs.core.truth_(pred__11031.call(null,new cljs.core.Keyword(null,"points","points",4326117461),expr__11032)))
{return (new thi.ng.geom.types.Cuboid(G__11028,self__.__meta,self__.__extmap,null));
} else
{return (new thi.ng.geom.types.Cuboid(self__.points,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5547__auto__,G__11028),null));
}
});
thi.ng.geom.types.Cuboid.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5551__auto__){var self__ = this;
var this__5551__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",4326117461),self__.points],null))], null),self__.__extmap));
});
thi.ng.geom.types.Cuboid.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5538__auto__,G__11028){var self__ = this;
var this__5538__auto____$1 = this;return (new thi.ng.geom.types.Cuboid(self__.points,G__11028,self__.__extmap,self__.__hash));
});
thi.ng.geom.types.Cuboid.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5544__auto__,entry__5545__auto__){var self__ = this;
var this__5544__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__5545__auto__))
{return cljs.core._assoc.call(null,this__5544__auto____$1,cljs.core._nth.call(null,entry__5545__auto__,0),cljs.core._nth.call(null,entry__5545__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__5544__auto____$1,entry__5545__auto__);
}
});
thi.ng.geom.types.Cuboid.cljs$lang$type = true;
thi.ng.geom.types.Cuboid.cljs$lang$ctorPrSeq = (function (this__5573__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Cuboid");
});
thi.ng.geom.types.Cuboid.cljs$lang$ctorPrWriter = (function (this__5573__auto__,writer__5574__auto__){return cljs.core._write.call(null,writer__5574__auto__,"thi.ng.geom.types/Cuboid");
});
thi.ng.geom.types.__GT_Cuboid = (function __GT_Cuboid(points){return (new thi.ng.geom.types.Cuboid(points));
});
thi.ng.geom.types.map__GT_Cuboid = (function map__GT_Cuboid(G__11030){return (new thi.ng.geom.types.Cuboid(new cljs.core.Keyword(null,"points","points",4326117461).cljs$core$IFn$_invoke$arity$1(G__11030),null,cljs.core.dissoc.call(null,G__11030,new cljs.core.Keyword(null,"points","points",4326117461))));
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
thi.ng.geom.types.Bezier3.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5539__auto__,k__5540__auto__){var self__ = this;
var this__5539__auto____$1 = this;return cljs.core._lookup.call(null,this__5539__auto____$1,k__5540__auto__,null);
});
thi.ng.geom.types.Bezier3.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5541__auto__,k11035,else__5542__auto__){var self__ = this;
var this__5541__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k11035,new cljs.core.Keyword(null,"points","points",4326117461)))
{return self__.points;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k11035,else__5542__auto__);
} else
{return null;
}
}
});
thi.ng.geom.types.Bezier3.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5553__auto__,writer__5554__auto__,opts__5555__auto__){var self__ = this;
var this__5553__auto____$1 = this;var pr_pair__5556__auto__ = ((function (this__5553__auto____$1){
return (function (keyval__5557__auto__){return cljs.core.pr_sequential_writer.call(null,writer__5554__auto__,cljs.core.pr_writer,""," ","",opts__5555__auto__,keyval__5557__auto__);
});})(this__5553__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__5554__auto__,pr_pair__5556__auto__,"#thi.ng.geom.types.Bezier3{",", ","}",opts__5555__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",4326117461),self__.points],null))], null),self__.__extmap));
});
thi.ng.geom.types.Bezier3.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5537__auto__){var self__ = this;
var this__5537__auto____$1 = this;return self__.__meta;
});
thi.ng.geom.types.Bezier3.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5533__auto__){var self__ = this;
var this__5533__auto____$1 = this;return (new thi.ng.geom.types.Bezier3(self__.points,self__.__meta,self__.__extmap,self__.__hash));
});
thi.ng.geom.types.Bezier3.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5543__auto__){var self__ = this;
var this__5543__auto____$1 = this;return (1 + cljs.core.count.call(null,self__.__extmap));
});
thi.ng.geom.types.Bezier3.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5534__auto__){var self__ = this;
var this__5534__auto____$1 = this;var h__5364__auto__ = self__.__hash;if(!((h__5364__auto__ == null)))
{return h__5364__auto__;
} else
{var h__5364__auto____$1 = cljs.core.hash_imap.call(null,this__5534__auto____$1);self__.__hash = h__5364__auto____$1;
return h__5364__auto____$1;
}
});
thi.ng.geom.types.Bezier3.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5535__auto__,other__5536__auto__){var self__ = this;
var this__5535__auto____$1 = this;if(cljs.core.truth_((function (){var and__4941__auto__ = other__5536__auto__;if(cljs.core.truth_(and__4941__auto__))
{return ((this__5535__auto____$1.constructor === other__5536__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__5535__auto____$1,other__5536__auto__));
} else
{return and__4941__auto__;
}
})()))
{return true;
} else
{return false;
}
});
thi.ng.geom.types.Bezier3.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5548__auto__,k__5549__auto__){var self__ = this;
var this__5548__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",4326117461),null], null), null),k__5549__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5548__auto____$1),self__.__meta),k__5549__auto__);
} else
{return (new thi.ng.geom.types.Bezier3(self__.points,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5549__auto__)),null));
}
});
thi.ng.geom.types.Bezier3.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5546__auto__,k__5547__auto__,G__11034){var self__ = this;
var this__5546__auto____$1 = this;var pred__11037 = cljs.core.keyword_identical_QMARK_;var expr__11038 = k__5547__auto__;if(cljs.core.truth_(pred__11037.call(null,new cljs.core.Keyword(null,"points","points",4326117461),expr__11038)))
{return (new thi.ng.geom.types.Bezier3(G__11034,self__.__meta,self__.__extmap,null));
} else
{return (new thi.ng.geom.types.Bezier3(self__.points,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5547__auto__,G__11034),null));
}
});
thi.ng.geom.types.Bezier3.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5551__auto__){var self__ = this;
var this__5551__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",4326117461),self__.points],null))], null),self__.__extmap));
});
thi.ng.geom.types.Bezier3.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5538__auto__,G__11034){var self__ = this;
var this__5538__auto____$1 = this;return (new thi.ng.geom.types.Bezier3(self__.points,G__11034,self__.__extmap,self__.__hash));
});
thi.ng.geom.types.Bezier3.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5544__auto__,entry__5545__auto__){var self__ = this;
var this__5544__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__5545__auto__))
{return cljs.core._assoc.call(null,this__5544__auto____$1,cljs.core._nth.call(null,entry__5545__auto__,0),cljs.core._nth.call(null,entry__5545__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__5544__auto____$1,entry__5545__auto__);
}
});
thi.ng.geom.types.Bezier3.cljs$lang$type = true;
thi.ng.geom.types.Bezier3.cljs$lang$ctorPrSeq = (function (this__5573__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Bezier3");
});
thi.ng.geom.types.Bezier3.cljs$lang$ctorPrWriter = (function (this__5573__auto__,writer__5574__auto__){return cljs.core._write.call(null,writer__5574__auto__,"thi.ng.geom.types/Bezier3");
});
thi.ng.geom.types.__GT_Bezier3 = (function __GT_Bezier3(points){return (new thi.ng.geom.types.Bezier3(points));
});
thi.ng.geom.types.map__GT_Bezier3 = (function map__GT_Bezier3(G__11036){return (new thi.ng.geom.types.Bezier3(new cljs.core.Keyword(null,"points","points",4326117461).cljs$core$IFn$_invoke$arity$1(G__11036),null,cljs.core.dissoc.call(null,G__11036,new cljs.core.Keyword(null,"points","points",4326117461))));
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
thi.ng.geom.types.GMesh.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5539__auto__,k__5540__auto__){var self__ = this;
var this__5539__auto____$1 = this;return cljs.core._lookup.call(null,this__5539__auto____$1,k__5540__auto__,null);
});
thi.ng.geom.types.GMesh.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5541__auto__,k11041,else__5542__auto__){var self__ = this;
var this__5541__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k11041,new cljs.core.Keyword(null,"vertices","vertices",3324730219)))
{return self__.vertices;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k11041,new cljs.core.Keyword(null,"normals","normals",3141522398)))
{return self__.normals;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k11041,new cljs.core.Keyword(null,"fnormals","fnormals",519550136)))
{return self__.fnormals;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k11041,new cljs.core.Keyword(null,"vnormals","vnormals",2634711720)))
{return self__.vnormals;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k11041,new cljs.core.Keyword(null,"edges","edges",1110261192)))
{return self__.edges;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k11041,new cljs.core.Keyword(null,"faces","faces",1111091496)))
{return self__.faces;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k11041,new cljs.core.Keyword(null,"attribs","attribs",4634025563)))
{return self__.attribs;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k11041,else__5542__auto__);
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
thi.ng.geom.types.GMesh.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5553__auto__,writer__5554__auto__,opts__5555__auto__){var self__ = this;
var this__5553__auto____$1 = this;var pr_pair__5556__auto__ = ((function (this__5553__auto____$1){
return (function (keyval__5557__auto__){return cljs.core.pr_sequential_writer.call(null,writer__5554__auto__,cljs.core.pr_writer,""," ","",opts__5555__auto__,keyval__5557__auto__);
});})(this__5553__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__5554__auto__,pr_pair__5556__auto__,"#thi.ng.geom.types.GMesh{",", ","}",opts__5555__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vertices","vertices",3324730219),self__.vertices],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"normals","normals",3141522398),self__.normals],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fnormals","fnormals",519550136),self__.fnormals],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vnormals","vnormals",2634711720),self__.vnormals],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"edges","edges",1110261192),self__.edges],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"faces","faces",1111091496),self__.faces],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attribs","attribs",4634025563),self__.attribs],null))], null),self__.__extmap));
});
thi.ng.geom.types.GMesh.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5537__auto__){var self__ = this;
var this__5537__auto____$1 = this;return self__.__meta;
});
thi.ng.geom.types.GMesh.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5533__auto__){var self__ = this;
var this__5533__auto____$1 = this;return (new thi.ng.geom.types.GMesh(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,self__.__extmap,self__.__hash));
});
thi.ng.geom.types.GMesh.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5543__auto__){var self__ = this;
var this__5543__auto____$1 = this;return (7 + cljs.core.count.call(null,self__.__extmap));
});
thi.ng.geom.types.GMesh.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5534__auto__){var self__ = this;
var this__5534__auto____$1 = this;var h__5364__auto__ = self__.__hash;if(!((h__5364__auto__ == null)))
{return h__5364__auto__;
} else
{var h__5364__auto____$1 = cljs.core.hash_imap.call(null,this__5534__auto____$1);self__.__hash = h__5364__auto____$1;
return h__5364__auto____$1;
}
});
thi.ng.geom.types.GMesh.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5535__auto__,other__5536__auto__){var self__ = this;
var this__5535__auto____$1 = this;if(cljs.core.truth_((function (){var and__4941__auto__ = other__5536__auto__;if(cljs.core.truth_(and__4941__auto__))
{return ((this__5535__auto____$1.constructor === other__5536__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__5535__auto____$1,other__5536__auto__));
} else
{return and__4941__auto__;
}
})()))
{return true;
} else
{return false;
}
});
thi.ng.geom.types.GMesh.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5548__auto__,k__5549__auto__){var self__ = this;
var this__5548__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"vertices","vertices",3324730219),null,new cljs.core.Keyword(null,"vnormals","vnormals",2634711720),null,new cljs.core.Keyword(null,"attribs","attribs",4634025563),null,new cljs.core.Keyword(null,"normals","normals",3141522398),null,new cljs.core.Keyword(null,"faces","faces",1111091496),null,new cljs.core.Keyword(null,"edges","edges",1110261192),null,new cljs.core.Keyword(null,"fnormals","fnormals",519550136),null], null), null),k__5549__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5548__auto____$1),self__.__meta),k__5549__auto__);
} else
{return (new thi.ng.geom.types.GMesh(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5549__auto__)),null));
}
});
thi.ng.geom.types.GMesh.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5546__auto__,k__5547__auto__,G__11040){var self__ = this;
var this__5546__auto____$1 = this;var pred__11043 = cljs.core.keyword_identical_QMARK_;var expr__11044 = k__5547__auto__;if(cljs.core.truth_(pred__11043.call(null,new cljs.core.Keyword(null,"vertices","vertices",3324730219),expr__11044)))
{return (new thi.ng.geom.types.GMesh(G__11040,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__11043.call(null,new cljs.core.Keyword(null,"normals","normals",3141522398),expr__11044)))
{return (new thi.ng.geom.types.GMesh(self__.vertices,G__11040,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__11043.call(null,new cljs.core.Keyword(null,"fnormals","fnormals",519550136),expr__11044)))
{return (new thi.ng.geom.types.GMesh(self__.vertices,self__.normals,G__11040,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__11043.call(null,new cljs.core.Keyword(null,"vnormals","vnormals",2634711720),expr__11044)))
{return (new thi.ng.geom.types.GMesh(self__.vertices,self__.normals,self__.fnormals,G__11040,self__.edges,self__.faces,self__.attribs,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__11043.call(null,new cljs.core.Keyword(null,"edges","edges",1110261192),expr__11044)))
{return (new thi.ng.geom.types.GMesh(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,G__11040,self__.faces,self__.attribs,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__11043.call(null,new cljs.core.Keyword(null,"faces","faces",1111091496),expr__11044)))
{return (new thi.ng.geom.types.GMesh(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,G__11040,self__.attribs,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__11043.call(null,new cljs.core.Keyword(null,"attribs","attribs",4634025563),expr__11044)))
{return (new thi.ng.geom.types.GMesh(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,G__11040,self__.__meta,self__.__extmap,null));
} else
{return (new thi.ng.geom.types.GMesh(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5547__auto__,G__11040),null));
}
}
}
}
}
}
}
});
thi.ng.geom.types.GMesh.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5551__auto__){var self__ = this;
var this__5551__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vertices","vertices",3324730219),self__.vertices],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"normals","normals",3141522398),self__.normals],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fnormals","fnormals",519550136),self__.fnormals],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vnormals","vnormals",2634711720),self__.vnormals],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"edges","edges",1110261192),self__.edges],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"faces","faces",1111091496),self__.faces],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attribs","attribs",4634025563),self__.attribs],null))], null),self__.__extmap));
});
thi.ng.geom.types.GMesh.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5538__auto__,G__11040){var self__ = this;
var this__5538__auto____$1 = this;return (new thi.ng.geom.types.GMesh(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,G__11040,self__.__extmap,self__.__hash));
});
thi.ng.geom.types.GMesh.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5544__auto__,entry__5545__auto__){var self__ = this;
var this__5544__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__5545__auto__))
{return cljs.core._assoc.call(null,this__5544__auto____$1,cljs.core._nth.call(null,entry__5545__auto__,0),cljs.core._nth.call(null,entry__5545__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__5544__auto____$1,entry__5545__auto__);
}
});
thi.ng.geom.types.GMesh.cljs$lang$type = true;
thi.ng.geom.types.GMesh.cljs$lang$ctorPrSeq = (function (this__5573__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/GMesh");
});
thi.ng.geom.types.GMesh.cljs$lang$ctorPrWriter = (function (this__5573__auto__,writer__5574__auto__){return cljs.core._write.call(null,writer__5574__auto__,"thi.ng.geom.types/GMesh");
});
thi.ng.geom.types.__GT_GMesh = (function __GT_GMesh(vertices,normals,fnormals,vnormals,edges,faces,attribs){return (new thi.ng.geom.types.GMesh(vertices,normals,fnormals,vnormals,edges,faces,attribs));
});
thi.ng.geom.types.map__GT_GMesh = (function map__GT_GMesh(G__11042){return (new thi.ng.geom.types.GMesh(new cljs.core.Keyword(null,"vertices","vertices",3324730219).cljs$core$IFn$_invoke$arity$1(G__11042),new cljs.core.Keyword(null,"normals","normals",3141522398).cljs$core$IFn$_invoke$arity$1(G__11042),new cljs.core.Keyword(null,"fnormals","fnormals",519550136).cljs$core$IFn$_invoke$arity$1(G__11042),new cljs.core.Keyword(null,"vnormals","vnormals",2634711720).cljs$core$IFn$_invoke$arity$1(G__11042),new cljs.core.Keyword(null,"edges","edges",1110261192).cljs$core$IFn$_invoke$arity$1(G__11042),new cljs.core.Keyword(null,"faces","faces",1111091496).cljs$core$IFn$_invoke$arity$1(G__11042),new cljs.core.Keyword(null,"attribs","attribs",4634025563).cljs$core$IFn$_invoke$arity$1(G__11042),null,cljs.core.dissoc.call(null,G__11042,new cljs.core.Keyword(null,"vertices","vertices",3324730219),new cljs.core.Keyword(null,"normals","normals",3141522398),new cljs.core.Keyword(null,"fnormals","fnormals",519550136),new cljs.core.Keyword(null,"vnormals","vnormals",2634711720),new cljs.core.Keyword(null,"edges","edges",1110261192),new cljs.core.Keyword(null,"faces","faces",1111091496),new cljs.core.Keyword(null,"attribs","attribs",4634025563))));
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
thi.ng.geom.types.Line3.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5539__auto__,k__5540__auto__){var self__ = this;
var this__5539__auto____$1 = this;return cljs.core._lookup.call(null,this__5539__auto____$1,k__5540__auto__,null);
});
thi.ng.geom.types.Line3.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5541__auto__,k11047,else__5542__auto__){var self__ = this;
var this__5541__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k11047,new cljs.core.Keyword(null,"points","points",4326117461)))
{return self__.points;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k11047,else__5542__auto__);
} else
{return null;
}
}
});
thi.ng.geom.types.Line3.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5553__auto__,writer__5554__auto__,opts__5555__auto__){var self__ = this;
var this__5553__auto____$1 = this;var pr_pair__5556__auto__ = ((function (this__5553__auto____$1){
return (function (keyval__5557__auto__){return cljs.core.pr_sequential_writer.call(null,writer__5554__auto__,cljs.core.pr_writer,""," ","",opts__5555__auto__,keyval__5557__auto__);
});})(this__5553__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__5554__auto__,pr_pair__5556__auto__,"#thi.ng.geom.types.Line3{",", ","}",opts__5555__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",4326117461),self__.points],null))], null),self__.__extmap));
});
thi.ng.geom.types.Line3.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5537__auto__){var self__ = this;
var this__5537__auto____$1 = this;return self__.__meta;
});
thi.ng.geom.types.Line3.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5533__auto__){var self__ = this;
var this__5533__auto____$1 = this;return (new thi.ng.geom.types.Line3(self__.points,self__.__meta,self__.__extmap,self__.__hash));
});
thi.ng.geom.types.Line3.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5543__auto__){var self__ = this;
var this__5543__auto____$1 = this;return (1 + cljs.core.count.call(null,self__.__extmap));
});
thi.ng.geom.types.Line3.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5534__auto__){var self__ = this;
var this__5534__auto____$1 = this;var h__5364__auto__ = self__.__hash;if(!((h__5364__auto__ == null)))
{return h__5364__auto__;
} else
{var h__5364__auto____$1 = cljs.core.hash_imap.call(null,this__5534__auto____$1);self__.__hash = h__5364__auto____$1;
return h__5364__auto____$1;
}
});
thi.ng.geom.types.Line3.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5535__auto__,other__5536__auto__){var self__ = this;
var this__5535__auto____$1 = this;if(cljs.core.truth_((function (){var and__4941__auto__ = other__5536__auto__;if(cljs.core.truth_(and__4941__auto__))
{return ((this__5535__auto____$1.constructor === other__5536__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__5535__auto____$1,other__5536__auto__));
} else
{return and__4941__auto__;
}
})()))
{return true;
} else
{return false;
}
});
thi.ng.geom.types.Line3.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5548__auto__,k__5549__auto__){var self__ = this;
var this__5548__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",4326117461),null], null), null),k__5549__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5548__auto____$1),self__.__meta),k__5549__auto__);
} else
{return (new thi.ng.geom.types.Line3(self__.points,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5549__auto__)),null));
}
});
thi.ng.geom.types.Line3.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5546__auto__,k__5547__auto__,G__11046){var self__ = this;
var this__5546__auto____$1 = this;var pred__11049 = cljs.core.keyword_identical_QMARK_;var expr__11050 = k__5547__auto__;if(cljs.core.truth_(pred__11049.call(null,new cljs.core.Keyword(null,"points","points",4326117461),expr__11050)))
{return (new thi.ng.geom.types.Line3(G__11046,self__.__meta,self__.__extmap,null));
} else
{return (new thi.ng.geom.types.Line3(self__.points,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5547__auto__,G__11046),null));
}
});
thi.ng.geom.types.Line3.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5551__auto__){var self__ = this;
var this__5551__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",4326117461),self__.points],null))], null),self__.__extmap));
});
thi.ng.geom.types.Line3.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5538__auto__,G__11046){var self__ = this;
var this__5538__auto____$1 = this;return (new thi.ng.geom.types.Line3(self__.points,G__11046,self__.__extmap,self__.__hash));
});
thi.ng.geom.types.Line3.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5544__auto__,entry__5545__auto__){var self__ = this;
var this__5544__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__5545__auto__))
{return cljs.core._assoc.call(null,this__5544__auto____$1,cljs.core._nth.call(null,entry__5545__auto__,0),cljs.core._nth.call(null,entry__5545__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__5544__auto____$1,entry__5545__auto__);
}
});
thi.ng.geom.types.Line3.cljs$lang$type = true;
thi.ng.geom.types.Line3.cljs$lang$ctorPrSeq = (function (this__5573__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Line3");
});
thi.ng.geom.types.Line3.cljs$lang$ctorPrWriter = (function (this__5573__auto__,writer__5574__auto__){return cljs.core._write.call(null,writer__5574__auto__,"thi.ng.geom.types/Line3");
});
thi.ng.geom.types.__GT_Line3 = (function __GT_Line3(points){return (new thi.ng.geom.types.Line3(points));
});
thi.ng.geom.types.map__GT_Line3 = (function map__GT_Line3(G__11048){return (new thi.ng.geom.types.Line3(new cljs.core.Keyword(null,"points","points",4326117461).cljs$core$IFn$_invoke$arity$1(G__11048),null,cljs.core.dissoc.call(null,G__11048,new cljs.core.Keyword(null,"points","points",4326117461))));
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
thi.ng.geom.types.LineStrip3.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5539__auto__,k__5540__auto__){var self__ = this;
var this__5539__auto____$1 = this;return cljs.core._lookup.call(null,this__5539__auto____$1,k__5540__auto__,null);
});
thi.ng.geom.types.LineStrip3.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5541__auto__,k11053,else__5542__auto__){var self__ = this;
var this__5541__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k11053,new cljs.core.Keyword(null,"points","points",4326117461)))
{return self__.points;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k11053,else__5542__auto__);
} else
{return null;
}
}
});
thi.ng.geom.types.LineStrip3.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5553__auto__,writer__5554__auto__,opts__5555__auto__){var self__ = this;
var this__5553__auto____$1 = this;var pr_pair__5556__auto__ = ((function (this__5553__auto____$1){
return (function (keyval__5557__auto__){return cljs.core.pr_sequential_writer.call(null,writer__5554__auto__,cljs.core.pr_writer,""," ","",opts__5555__auto__,keyval__5557__auto__);
});})(this__5553__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__5554__auto__,pr_pair__5556__auto__,"#thi.ng.geom.types.LineStrip3{",", ","}",opts__5555__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",4326117461),self__.points],null))], null),self__.__extmap));
});
thi.ng.geom.types.LineStrip3.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5537__auto__){var self__ = this;
var this__5537__auto____$1 = this;return self__.__meta;
});
thi.ng.geom.types.LineStrip3.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5533__auto__){var self__ = this;
var this__5533__auto____$1 = this;return (new thi.ng.geom.types.LineStrip3(self__.points,self__.__meta,self__.__extmap,self__.__hash));
});
thi.ng.geom.types.LineStrip3.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5543__auto__){var self__ = this;
var this__5543__auto____$1 = this;return (1 + cljs.core.count.call(null,self__.__extmap));
});
thi.ng.geom.types.LineStrip3.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5534__auto__){var self__ = this;
var this__5534__auto____$1 = this;var h__5364__auto__ = self__.__hash;if(!((h__5364__auto__ == null)))
{return h__5364__auto__;
} else
{var h__5364__auto____$1 = cljs.core.hash_imap.call(null,this__5534__auto____$1);self__.__hash = h__5364__auto____$1;
return h__5364__auto____$1;
}
});
thi.ng.geom.types.LineStrip3.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5535__auto__,other__5536__auto__){var self__ = this;
var this__5535__auto____$1 = this;if(cljs.core.truth_((function (){var and__4941__auto__ = other__5536__auto__;if(cljs.core.truth_(and__4941__auto__))
{return ((this__5535__auto____$1.constructor === other__5536__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__5535__auto____$1,other__5536__auto__));
} else
{return and__4941__auto__;
}
})()))
{return true;
} else
{return false;
}
});
thi.ng.geom.types.LineStrip3.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5548__auto__,k__5549__auto__){var self__ = this;
var this__5548__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",4326117461),null], null), null),k__5549__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5548__auto____$1),self__.__meta),k__5549__auto__);
} else
{return (new thi.ng.geom.types.LineStrip3(self__.points,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5549__auto__)),null));
}
});
thi.ng.geom.types.LineStrip3.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5546__auto__,k__5547__auto__,G__11052){var self__ = this;
var this__5546__auto____$1 = this;var pred__11055 = cljs.core.keyword_identical_QMARK_;var expr__11056 = k__5547__auto__;if(cljs.core.truth_(pred__11055.call(null,new cljs.core.Keyword(null,"points","points",4326117461),expr__11056)))
{return (new thi.ng.geom.types.LineStrip3(G__11052,self__.__meta,self__.__extmap,null));
} else
{return (new thi.ng.geom.types.LineStrip3(self__.points,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5547__auto__,G__11052),null));
}
});
thi.ng.geom.types.LineStrip3.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5551__auto__){var self__ = this;
var this__5551__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",4326117461),self__.points],null))], null),self__.__extmap));
});
thi.ng.geom.types.LineStrip3.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5538__auto__,G__11052){var self__ = this;
var this__5538__auto____$1 = this;return (new thi.ng.geom.types.LineStrip3(self__.points,G__11052,self__.__extmap,self__.__hash));
});
thi.ng.geom.types.LineStrip3.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5544__auto__,entry__5545__auto__){var self__ = this;
var this__5544__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__5545__auto__))
{return cljs.core._assoc.call(null,this__5544__auto____$1,cljs.core._nth.call(null,entry__5545__auto__,0),cljs.core._nth.call(null,entry__5545__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__5544__auto____$1,entry__5545__auto__);
}
});
thi.ng.geom.types.LineStrip3.cljs$lang$type = true;
thi.ng.geom.types.LineStrip3.cljs$lang$ctorPrSeq = (function (this__5573__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/LineStrip3");
});
thi.ng.geom.types.LineStrip3.cljs$lang$ctorPrWriter = (function (this__5573__auto__,writer__5574__auto__){return cljs.core._write.call(null,writer__5574__auto__,"thi.ng.geom.types/LineStrip3");
});
thi.ng.geom.types.__GT_LineStrip3 = (function __GT_LineStrip3(points){return (new thi.ng.geom.types.LineStrip3(points));
});
thi.ng.geom.types.map__GT_LineStrip3 = (function map__GT_LineStrip3(G__11054){return (new thi.ng.geom.types.LineStrip3(new cljs.core.Keyword(null,"points","points",4326117461).cljs$core$IFn$_invoke$arity$1(G__11054),null,cljs.core.dissoc.call(null,G__11054,new cljs.core.Keyword(null,"points","points",4326117461))));
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
thi.ng.geom.types.Mesh3.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5539__auto__,k__5540__auto__){var self__ = this;
var this__5539__auto____$1 = this;return cljs.core._lookup.call(null,this__5539__auto____$1,k__5540__auto__,null);
});
thi.ng.geom.types.Mesh3.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5541__auto__,k11059,else__5542__auto__){var self__ = this;
var this__5541__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k11059,new cljs.core.Keyword(null,"vertices","vertices",3324730219)))
{return self__.vertices;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k11059,new cljs.core.Keyword(null,"normals","normals",3141522398)))
{return self__.normals;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k11059,new cljs.core.Keyword(null,"fnormals","fnormals",519550136)))
{return self__.fnormals;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k11059,new cljs.core.Keyword(null,"vnormals","vnormals",2634711720)))
{return self__.vnormals;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k11059,new cljs.core.Keyword(null,"edges","edges",1110261192)))
{return self__.edges;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k11059,new cljs.core.Keyword(null,"faces","faces",1111091496)))
{return self__.faces;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k11059,new cljs.core.Keyword(null,"attribs","attribs",4634025563)))
{return self__.attribs;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k11059,else__5542__auto__);
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
thi.ng.geom.types.Mesh3.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5553__auto__,writer__5554__auto__,opts__5555__auto__){var self__ = this;
var this__5553__auto____$1 = this;var pr_pair__5556__auto__ = ((function (this__5553__auto____$1){
return (function (keyval__5557__auto__){return cljs.core.pr_sequential_writer.call(null,writer__5554__auto__,cljs.core.pr_writer,""," ","",opts__5555__auto__,keyval__5557__auto__);
});})(this__5553__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__5554__auto__,pr_pair__5556__auto__,"#thi.ng.geom.types.Mesh3{",", ","}",opts__5555__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vertices","vertices",3324730219),self__.vertices],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"normals","normals",3141522398),self__.normals],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fnormals","fnormals",519550136),self__.fnormals],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vnormals","vnormals",2634711720),self__.vnormals],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"edges","edges",1110261192),self__.edges],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"faces","faces",1111091496),self__.faces],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attribs","attribs",4634025563),self__.attribs],null))], null),self__.__extmap));
});
thi.ng.geom.types.Mesh3.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5537__auto__){var self__ = this;
var this__5537__auto____$1 = this;return self__.__meta;
});
thi.ng.geom.types.Mesh3.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5533__auto__){var self__ = this;
var this__5533__auto____$1 = this;return (new thi.ng.geom.types.Mesh3(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,self__.__extmap,self__.__hash));
});
thi.ng.geom.types.Mesh3.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5543__auto__){var self__ = this;
var this__5543__auto____$1 = this;return (7 + cljs.core.count.call(null,self__.__extmap));
});
thi.ng.geom.types.Mesh3.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5534__auto__){var self__ = this;
var this__5534__auto____$1 = this;var h__5364__auto__ = self__.__hash;if(!((h__5364__auto__ == null)))
{return h__5364__auto__;
} else
{var h__5364__auto____$1 = cljs.core.hash_imap.call(null,this__5534__auto____$1);self__.__hash = h__5364__auto____$1;
return h__5364__auto____$1;
}
});
thi.ng.geom.types.Mesh3.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5535__auto__,other__5536__auto__){var self__ = this;
var this__5535__auto____$1 = this;if(cljs.core.truth_((function (){var and__4941__auto__ = other__5536__auto__;if(cljs.core.truth_(and__4941__auto__))
{return ((this__5535__auto____$1.constructor === other__5536__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__5535__auto____$1,other__5536__auto__));
} else
{return and__4941__auto__;
}
})()))
{return true;
} else
{return false;
}
});
thi.ng.geom.types.Mesh3.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5548__auto__,k__5549__auto__){var self__ = this;
var this__5548__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"vertices","vertices",3324730219),null,new cljs.core.Keyword(null,"vnormals","vnormals",2634711720),null,new cljs.core.Keyword(null,"attribs","attribs",4634025563),null,new cljs.core.Keyword(null,"normals","normals",3141522398),null,new cljs.core.Keyword(null,"faces","faces",1111091496),null,new cljs.core.Keyword(null,"edges","edges",1110261192),null,new cljs.core.Keyword(null,"fnormals","fnormals",519550136),null], null), null),k__5549__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5548__auto____$1),self__.__meta),k__5549__auto__);
} else
{return (new thi.ng.geom.types.Mesh3(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5549__auto__)),null));
}
});
thi.ng.geom.types.Mesh3.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5546__auto__,k__5547__auto__,G__11058){var self__ = this;
var this__5546__auto____$1 = this;var pred__11061 = cljs.core.keyword_identical_QMARK_;var expr__11062 = k__5547__auto__;if(cljs.core.truth_(pred__11061.call(null,new cljs.core.Keyword(null,"vertices","vertices",3324730219),expr__11062)))
{return (new thi.ng.geom.types.Mesh3(G__11058,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__11061.call(null,new cljs.core.Keyword(null,"normals","normals",3141522398),expr__11062)))
{return (new thi.ng.geom.types.Mesh3(self__.vertices,G__11058,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__11061.call(null,new cljs.core.Keyword(null,"fnormals","fnormals",519550136),expr__11062)))
{return (new thi.ng.geom.types.Mesh3(self__.vertices,self__.normals,G__11058,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__11061.call(null,new cljs.core.Keyword(null,"vnormals","vnormals",2634711720),expr__11062)))
{return (new thi.ng.geom.types.Mesh3(self__.vertices,self__.normals,self__.fnormals,G__11058,self__.edges,self__.faces,self__.attribs,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__11061.call(null,new cljs.core.Keyword(null,"edges","edges",1110261192),expr__11062)))
{return (new thi.ng.geom.types.Mesh3(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,G__11058,self__.faces,self__.attribs,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__11061.call(null,new cljs.core.Keyword(null,"faces","faces",1111091496),expr__11062)))
{return (new thi.ng.geom.types.Mesh3(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,G__11058,self__.attribs,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__11061.call(null,new cljs.core.Keyword(null,"attribs","attribs",4634025563),expr__11062)))
{return (new thi.ng.geom.types.Mesh3(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,G__11058,self__.__meta,self__.__extmap,null));
} else
{return (new thi.ng.geom.types.Mesh3(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5547__auto__,G__11058),null));
}
}
}
}
}
}
}
});
thi.ng.geom.types.Mesh3.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5551__auto__){var self__ = this;
var this__5551__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vertices","vertices",3324730219),self__.vertices],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"normals","normals",3141522398),self__.normals],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fnormals","fnormals",519550136),self__.fnormals],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vnormals","vnormals",2634711720),self__.vnormals],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"edges","edges",1110261192),self__.edges],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"faces","faces",1111091496),self__.faces],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attribs","attribs",4634025563),self__.attribs],null))], null),self__.__extmap));
});
thi.ng.geom.types.Mesh3.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5538__auto__,G__11058){var self__ = this;
var this__5538__auto____$1 = this;return (new thi.ng.geom.types.Mesh3(self__.vertices,self__.normals,self__.fnormals,self__.vnormals,self__.edges,self__.faces,self__.attribs,G__11058,self__.__extmap,self__.__hash));
});
thi.ng.geom.types.Mesh3.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5544__auto__,entry__5545__auto__){var self__ = this;
var this__5544__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__5545__auto__))
{return cljs.core._assoc.call(null,this__5544__auto____$1,cljs.core._nth.call(null,entry__5545__auto__,0),cljs.core._nth.call(null,entry__5545__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__5544__auto____$1,entry__5545__auto__);
}
});
thi.ng.geom.types.Mesh3.cljs$lang$type = true;
thi.ng.geom.types.Mesh3.cljs$lang$ctorPrSeq = (function (this__5573__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Mesh3");
});
thi.ng.geom.types.Mesh3.cljs$lang$ctorPrWriter = (function (this__5573__auto__,writer__5574__auto__){return cljs.core._write.call(null,writer__5574__auto__,"thi.ng.geom.types/Mesh3");
});
thi.ng.geom.types.__GT_Mesh3 = (function __GT_Mesh3(vertices,normals,fnormals,vnormals,edges,faces,attribs){return (new thi.ng.geom.types.Mesh3(vertices,normals,fnormals,vnormals,edges,faces,attribs));
});
thi.ng.geom.types.map__GT_Mesh3 = (function map__GT_Mesh3(G__11060){return (new thi.ng.geom.types.Mesh3(new cljs.core.Keyword(null,"vertices","vertices",3324730219).cljs$core$IFn$_invoke$arity$1(G__11060),new cljs.core.Keyword(null,"normals","normals",3141522398).cljs$core$IFn$_invoke$arity$1(G__11060),new cljs.core.Keyword(null,"fnormals","fnormals",519550136).cljs$core$IFn$_invoke$arity$1(G__11060),new cljs.core.Keyword(null,"vnormals","vnormals",2634711720).cljs$core$IFn$_invoke$arity$1(G__11060),new cljs.core.Keyword(null,"edges","edges",1110261192).cljs$core$IFn$_invoke$arity$1(G__11060),new cljs.core.Keyword(null,"faces","faces",1111091496).cljs$core$IFn$_invoke$arity$1(G__11060),new cljs.core.Keyword(null,"attribs","attribs",4634025563).cljs$core$IFn$_invoke$arity$1(G__11060),null,cljs.core.dissoc.call(null,G__11060,new cljs.core.Keyword(null,"vertices","vertices",3324730219),new cljs.core.Keyword(null,"normals","normals",3141522398),new cljs.core.Keyword(null,"fnormals","fnormals",519550136),new cljs.core.Keyword(null,"vnormals","vnormals",2634711720),new cljs.core.Keyword(null,"edges","edges",1110261192),new cljs.core.Keyword(null,"faces","faces",1111091496),new cljs.core.Keyword(null,"attribs","attribs",4634025563))));
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
thi.ng.geom.types.Plane.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5539__auto__,k__5540__auto__){var self__ = this;
var this__5539__auto____$1 = this;return cljs.core._lookup.call(null,this__5539__auto____$1,k__5540__auto__,null);
});
thi.ng.geom.types.Plane.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5541__auto__,k11065,else__5542__auto__){var self__ = this;
var this__5541__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k11065,new cljs.core.Keyword(null,"n","n",1013904352)))
{return self__.n;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k11065,new cljs.core.Keyword(null,"w","w",1013904361)))
{return self__.w;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k11065,else__5542__auto__);
} else
{return null;
}
}
}
});
thi.ng.geom.types.Plane.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5553__auto__,writer__5554__auto__,opts__5555__auto__){var self__ = this;
var this__5553__auto____$1 = this;var pr_pair__5556__auto__ = ((function (this__5553__auto____$1){
return (function (keyval__5557__auto__){return cljs.core.pr_sequential_writer.call(null,writer__5554__auto__,cljs.core.pr_writer,""," ","",opts__5555__auto__,keyval__5557__auto__);
});})(this__5553__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__5554__auto__,pr_pair__5556__auto__,"#thi.ng.geom.types.Plane{",", ","}",opts__5555__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"n","n",1013904352),self__.n],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",1013904361),self__.w],null))], null),self__.__extmap));
});
thi.ng.geom.types.Plane.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5537__auto__){var self__ = this;
var this__5537__auto____$1 = this;return self__.__meta;
});
thi.ng.geom.types.Plane.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5533__auto__){var self__ = this;
var this__5533__auto____$1 = this;return (new thi.ng.geom.types.Plane(self__.n,self__.w,self__.__meta,self__.__extmap,self__.__hash));
});
thi.ng.geom.types.Plane.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5543__auto__){var self__ = this;
var this__5543__auto____$1 = this;return (2 + cljs.core.count.call(null,self__.__extmap));
});
thi.ng.geom.types.Plane.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5534__auto__){var self__ = this;
var this__5534__auto____$1 = this;var h__5364__auto__ = self__.__hash;if(!((h__5364__auto__ == null)))
{return h__5364__auto__;
} else
{var h__5364__auto____$1 = cljs.core.hash_imap.call(null,this__5534__auto____$1);self__.__hash = h__5364__auto____$1;
return h__5364__auto____$1;
}
});
thi.ng.geom.types.Plane.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5535__auto__,other__5536__auto__){var self__ = this;
var this__5535__auto____$1 = this;if(cljs.core.truth_((function (){var and__4941__auto__ = other__5536__auto__;if(cljs.core.truth_(and__4941__auto__))
{return ((this__5535__auto____$1.constructor === other__5536__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__5535__auto____$1,other__5536__auto__));
} else
{return and__4941__auto__;
}
})()))
{return true;
} else
{return false;
}
});
thi.ng.geom.types.Plane.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5548__auto__,k__5549__auto__){var self__ = this;
var this__5548__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"n","n",1013904352),null,new cljs.core.Keyword(null,"w","w",1013904361),null], null), null),k__5549__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5548__auto____$1),self__.__meta),k__5549__auto__);
} else
{return (new thi.ng.geom.types.Plane(self__.n,self__.w,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5549__auto__)),null));
}
});
thi.ng.geom.types.Plane.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5546__auto__,k__5547__auto__,G__11064){var self__ = this;
var this__5546__auto____$1 = this;var pred__11067 = cljs.core.keyword_identical_QMARK_;var expr__11068 = k__5547__auto__;if(cljs.core.truth_(pred__11067.call(null,new cljs.core.Keyword(null,"n","n",1013904352),expr__11068)))
{return (new thi.ng.geom.types.Plane(G__11064,self__.w,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__11067.call(null,new cljs.core.Keyword(null,"w","w",1013904361),expr__11068)))
{return (new thi.ng.geom.types.Plane(self__.n,G__11064,self__.__meta,self__.__extmap,null));
} else
{return (new thi.ng.geom.types.Plane(self__.n,self__.w,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5547__auto__,G__11064),null));
}
}
});
thi.ng.geom.types.Plane.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5551__auto__){var self__ = this;
var this__5551__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"n","n",1013904352),self__.n],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",1013904361),self__.w],null))], null),self__.__extmap));
});
thi.ng.geom.types.Plane.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5538__auto__,G__11064){var self__ = this;
var this__5538__auto____$1 = this;return (new thi.ng.geom.types.Plane(self__.n,self__.w,G__11064,self__.__extmap,self__.__hash));
});
thi.ng.geom.types.Plane.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5544__auto__,entry__5545__auto__){var self__ = this;
var this__5544__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__5545__auto__))
{return cljs.core._assoc.call(null,this__5544__auto____$1,cljs.core._nth.call(null,entry__5545__auto__,0),cljs.core._nth.call(null,entry__5545__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__5544__auto____$1,entry__5545__auto__);
}
});
thi.ng.geom.types.Plane.cljs$lang$type = true;
thi.ng.geom.types.Plane.cljs$lang$ctorPrSeq = (function (this__5573__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Plane");
});
thi.ng.geom.types.Plane.cljs$lang$ctorPrWriter = (function (this__5573__auto__,writer__5574__auto__){return cljs.core._write.call(null,writer__5574__auto__,"thi.ng.geom.types/Plane");
});
thi.ng.geom.types.__GT_Plane = (function __GT_Plane(n,w){return (new thi.ng.geom.types.Plane(n,w));
});
thi.ng.geom.types.map__GT_Plane = (function map__GT_Plane(G__11066){return (new thi.ng.geom.types.Plane(new cljs.core.Keyword(null,"n","n",1013904352).cljs$core$IFn$_invoke$arity$1(G__11066),new cljs.core.Keyword(null,"w","w",1013904361).cljs$core$IFn$_invoke$arity$1(G__11066),null,cljs.core.dissoc.call(null,G__11066,new cljs.core.Keyword(null,"n","n",1013904352),new cljs.core.Keyword(null,"w","w",1013904361))));
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
thi.ng.geom.types.Quad3.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5539__auto__,k__5540__auto__){var self__ = this;
var this__5539__auto____$1 = this;return cljs.core._lookup.call(null,this__5539__auto____$1,k__5540__auto__,null);
});
thi.ng.geom.types.Quad3.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5541__auto__,k11071,else__5542__auto__){var self__ = this;
var this__5541__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k11071,new cljs.core.Keyword(null,"points","points",4326117461)))
{return self__.points;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k11071,else__5542__auto__);
} else
{return null;
}
}
});
thi.ng.geom.types.Quad3.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5553__auto__,writer__5554__auto__,opts__5555__auto__){var self__ = this;
var this__5553__auto____$1 = this;var pr_pair__5556__auto__ = ((function (this__5553__auto____$1){
return (function (keyval__5557__auto__){return cljs.core.pr_sequential_writer.call(null,writer__5554__auto__,cljs.core.pr_writer,""," ","",opts__5555__auto__,keyval__5557__auto__);
});})(this__5553__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__5554__auto__,pr_pair__5556__auto__,"#thi.ng.geom.types.Quad3{",", ","}",opts__5555__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",4326117461),self__.points],null))], null),self__.__extmap));
});
thi.ng.geom.types.Quad3.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5537__auto__){var self__ = this;
var this__5537__auto____$1 = this;return self__.__meta;
});
thi.ng.geom.types.Quad3.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5533__auto__){var self__ = this;
var this__5533__auto____$1 = this;return (new thi.ng.geom.types.Quad3(self__.points,self__.__meta,self__.__extmap,self__.__hash));
});
thi.ng.geom.types.Quad3.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5543__auto__){var self__ = this;
var this__5543__auto____$1 = this;return (1 + cljs.core.count.call(null,self__.__extmap));
});
thi.ng.geom.types.Quad3.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5534__auto__){var self__ = this;
var this__5534__auto____$1 = this;var h__5364__auto__ = self__.__hash;if(!((h__5364__auto__ == null)))
{return h__5364__auto__;
} else
{var h__5364__auto____$1 = cljs.core.hash_imap.call(null,this__5534__auto____$1);self__.__hash = h__5364__auto____$1;
return h__5364__auto____$1;
}
});
thi.ng.geom.types.Quad3.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5535__auto__,other__5536__auto__){var self__ = this;
var this__5535__auto____$1 = this;if(cljs.core.truth_((function (){var and__4941__auto__ = other__5536__auto__;if(cljs.core.truth_(and__4941__auto__))
{return ((this__5535__auto____$1.constructor === other__5536__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__5535__auto____$1,other__5536__auto__));
} else
{return and__4941__auto__;
}
})()))
{return true;
} else
{return false;
}
});
thi.ng.geom.types.Quad3.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5548__auto__,k__5549__auto__){var self__ = this;
var this__5548__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",4326117461),null], null), null),k__5549__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5548__auto____$1),self__.__meta),k__5549__auto__);
} else
{return (new thi.ng.geom.types.Quad3(self__.points,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5549__auto__)),null));
}
});
thi.ng.geom.types.Quad3.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5546__auto__,k__5547__auto__,G__11070){var self__ = this;
var this__5546__auto____$1 = this;var pred__11073 = cljs.core.keyword_identical_QMARK_;var expr__11074 = k__5547__auto__;if(cljs.core.truth_(pred__11073.call(null,new cljs.core.Keyword(null,"points","points",4326117461),expr__11074)))
{return (new thi.ng.geom.types.Quad3(G__11070,self__.__meta,self__.__extmap,null));
} else
{return (new thi.ng.geom.types.Quad3(self__.points,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5547__auto__,G__11070),null));
}
});
thi.ng.geom.types.Quad3.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5551__auto__){var self__ = this;
var this__5551__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",4326117461),self__.points],null))], null),self__.__extmap));
});
thi.ng.geom.types.Quad3.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5538__auto__,G__11070){var self__ = this;
var this__5538__auto____$1 = this;return (new thi.ng.geom.types.Quad3(self__.points,G__11070,self__.__extmap,self__.__hash));
});
thi.ng.geom.types.Quad3.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5544__auto__,entry__5545__auto__){var self__ = this;
var this__5544__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__5545__auto__))
{return cljs.core._assoc.call(null,this__5544__auto____$1,cljs.core._nth.call(null,entry__5545__auto__,0),cljs.core._nth.call(null,entry__5545__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__5544__auto____$1,entry__5545__auto__);
}
});
thi.ng.geom.types.Quad3.cljs$lang$type = true;
thi.ng.geom.types.Quad3.cljs$lang$ctorPrSeq = (function (this__5573__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Quad3");
});
thi.ng.geom.types.Quad3.cljs$lang$ctorPrWriter = (function (this__5573__auto__,writer__5574__auto__){return cljs.core._write.call(null,writer__5574__auto__,"thi.ng.geom.types/Quad3");
});
thi.ng.geom.types.__GT_Quad3 = (function __GT_Quad3(points){return (new thi.ng.geom.types.Quad3(points));
});
thi.ng.geom.types.map__GT_Quad3 = (function map__GT_Quad3(G__11072){return (new thi.ng.geom.types.Quad3(new cljs.core.Keyword(null,"points","points",4326117461).cljs$core$IFn$_invoke$arity$1(G__11072),null,cljs.core.dissoc.call(null,G__11072,new cljs.core.Keyword(null,"points","points",4326117461))));
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
thi.ng.geom.types.Sphere.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5539__auto__,k__5540__auto__){var self__ = this;
var this__5539__auto____$1 = this;return cljs.core._lookup.call(null,this__5539__auto____$1,k__5540__auto__,null);
});
thi.ng.geom.types.Sphere.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5541__auto__,k11077,else__5542__auto__){var self__ = this;
var this__5541__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k11077,new cljs.core.Keyword(null,"p","p",1013904354)))
{return self__.p;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k11077,new cljs.core.Keyword(null,"r","r",1013904356)))
{return self__.r;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k11077,else__5542__auto__);
} else
{return null;
}
}
}
});
thi.ng.geom.types.Sphere.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5553__auto__,writer__5554__auto__,opts__5555__auto__){var self__ = this;
var this__5553__auto____$1 = this;var pr_pair__5556__auto__ = ((function (this__5553__auto____$1){
return (function (keyval__5557__auto__){return cljs.core.pr_sequential_writer.call(null,writer__5554__auto__,cljs.core.pr_writer,""," ","",opts__5555__auto__,keyval__5557__auto__);
});})(this__5553__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__5554__auto__,pr_pair__5556__auto__,"#thi.ng.geom.types.Sphere{",", ","}",opts__5555__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p","p",1013904354),self__.p],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"r","r",1013904356),self__.r],null))], null),self__.__extmap));
});
thi.ng.geom.types.Sphere.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5537__auto__){var self__ = this;
var this__5537__auto____$1 = this;return self__.__meta;
});
thi.ng.geom.types.Sphere.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5533__auto__){var self__ = this;
var this__5533__auto____$1 = this;return (new thi.ng.geom.types.Sphere(self__.p,self__.r,self__.__meta,self__.__extmap,self__.__hash));
});
thi.ng.geom.types.Sphere.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5543__auto__){var self__ = this;
var this__5543__auto____$1 = this;return (2 + cljs.core.count.call(null,self__.__extmap));
});
thi.ng.geom.types.Sphere.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5534__auto__){var self__ = this;
var this__5534__auto____$1 = this;var h__5364__auto__ = self__.__hash;if(!((h__5364__auto__ == null)))
{return h__5364__auto__;
} else
{var h__5364__auto____$1 = cljs.core.hash_imap.call(null,this__5534__auto____$1);self__.__hash = h__5364__auto____$1;
return h__5364__auto____$1;
}
});
thi.ng.geom.types.Sphere.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5535__auto__,other__5536__auto__){var self__ = this;
var this__5535__auto____$1 = this;if(cljs.core.truth_((function (){var and__4941__auto__ = other__5536__auto__;if(cljs.core.truth_(and__4941__auto__))
{return ((this__5535__auto____$1.constructor === other__5536__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__5535__auto____$1,other__5536__auto__));
} else
{return and__4941__auto__;
}
})()))
{return true;
} else
{return false;
}
});
thi.ng.geom.types.Sphere.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5548__auto__,k__5549__auto__){var self__ = this;
var this__5548__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"r","r",1013904356),null,new cljs.core.Keyword(null,"p","p",1013904354),null], null), null),k__5549__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5548__auto____$1),self__.__meta),k__5549__auto__);
} else
{return (new thi.ng.geom.types.Sphere(self__.p,self__.r,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5549__auto__)),null));
}
});
thi.ng.geom.types.Sphere.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5546__auto__,k__5547__auto__,G__11076){var self__ = this;
var this__5546__auto____$1 = this;var pred__11079 = cljs.core.keyword_identical_QMARK_;var expr__11080 = k__5547__auto__;if(cljs.core.truth_(pred__11079.call(null,new cljs.core.Keyword(null,"p","p",1013904354),expr__11080)))
{return (new thi.ng.geom.types.Sphere(G__11076,self__.r,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__11079.call(null,new cljs.core.Keyword(null,"r","r",1013904356),expr__11080)))
{return (new thi.ng.geom.types.Sphere(self__.p,G__11076,self__.__meta,self__.__extmap,null));
} else
{return (new thi.ng.geom.types.Sphere(self__.p,self__.r,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5547__auto__,G__11076),null));
}
}
});
thi.ng.geom.types.Sphere.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5551__auto__){var self__ = this;
var this__5551__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p","p",1013904354),self__.p],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"r","r",1013904356),self__.r],null))], null),self__.__extmap));
});
thi.ng.geom.types.Sphere.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5538__auto__,G__11076){var self__ = this;
var this__5538__auto____$1 = this;return (new thi.ng.geom.types.Sphere(self__.p,self__.r,G__11076,self__.__extmap,self__.__hash));
});
thi.ng.geom.types.Sphere.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5544__auto__,entry__5545__auto__){var self__ = this;
var this__5544__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__5545__auto__))
{return cljs.core._assoc.call(null,this__5544__auto____$1,cljs.core._nth.call(null,entry__5545__auto__,0),cljs.core._nth.call(null,entry__5545__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__5544__auto____$1,entry__5545__auto__);
}
});
thi.ng.geom.types.Sphere.cljs$lang$type = true;
thi.ng.geom.types.Sphere.cljs$lang$ctorPrSeq = (function (this__5573__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Sphere");
});
thi.ng.geom.types.Sphere.cljs$lang$ctorPrWriter = (function (this__5573__auto__,writer__5574__auto__){return cljs.core._write.call(null,writer__5574__auto__,"thi.ng.geom.types/Sphere");
});
thi.ng.geom.types.__GT_Sphere = (function __GT_Sphere(p,r){return (new thi.ng.geom.types.Sphere(p,r));
});
thi.ng.geom.types.map__GT_Sphere = (function map__GT_Sphere(G__11078){return (new thi.ng.geom.types.Sphere(new cljs.core.Keyword(null,"p","p",1013904354).cljs$core$IFn$_invoke$arity$1(G__11078),new cljs.core.Keyword(null,"r","r",1013904356).cljs$core$IFn$_invoke$arity$1(G__11078),null,cljs.core.dissoc.call(null,G__11078,new cljs.core.Keyword(null,"p","p",1013904354),new cljs.core.Keyword(null,"r","r",1013904356))));
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
thi.ng.geom.types.Tetrahedron.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5539__auto__,k__5540__auto__){var self__ = this;
var this__5539__auto____$1 = this;return cljs.core._lookup.call(null,this__5539__auto____$1,k__5540__auto__,null);
});
thi.ng.geom.types.Tetrahedron.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5541__auto__,k11083,else__5542__auto__){var self__ = this;
var this__5541__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k11083,new cljs.core.Keyword(null,"points","points",4326117461)))
{return self__.points;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k11083,else__5542__auto__);
} else
{return null;
}
}
});
thi.ng.geom.types.Tetrahedron.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5553__auto__,writer__5554__auto__,opts__5555__auto__){var self__ = this;
var this__5553__auto____$1 = this;var pr_pair__5556__auto__ = ((function (this__5553__auto____$1){
return (function (keyval__5557__auto__){return cljs.core.pr_sequential_writer.call(null,writer__5554__auto__,cljs.core.pr_writer,""," ","",opts__5555__auto__,keyval__5557__auto__);
});})(this__5553__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__5554__auto__,pr_pair__5556__auto__,"#thi.ng.geom.types.Tetrahedron{",", ","}",opts__5555__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",4326117461),self__.points],null))], null),self__.__extmap));
});
thi.ng.geom.types.Tetrahedron.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5537__auto__){var self__ = this;
var this__5537__auto____$1 = this;return self__.__meta;
});
thi.ng.geom.types.Tetrahedron.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5533__auto__){var self__ = this;
var this__5533__auto____$1 = this;return (new thi.ng.geom.types.Tetrahedron(self__.points,self__.__meta,self__.__extmap,self__.__hash));
});
thi.ng.geom.types.Tetrahedron.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5543__auto__){var self__ = this;
var this__5543__auto____$1 = this;return (1 + cljs.core.count.call(null,self__.__extmap));
});
thi.ng.geom.types.Tetrahedron.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5534__auto__){var self__ = this;
var this__5534__auto____$1 = this;var h__5364__auto__ = self__.__hash;if(!((h__5364__auto__ == null)))
{return h__5364__auto__;
} else
{var h__5364__auto____$1 = cljs.core.hash_imap.call(null,this__5534__auto____$1);self__.__hash = h__5364__auto____$1;
return h__5364__auto____$1;
}
});
thi.ng.geom.types.Tetrahedron.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5535__auto__,other__5536__auto__){var self__ = this;
var this__5535__auto____$1 = this;if(cljs.core.truth_((function (){var and__4941__auto__ = other__5536__auto__;if(cljs.core.truth_(and__4941__auto__))
{return ((this__5535__auto____$1.constructor === other__5536__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__5535__auto____$1,other__5536__auto__));
} else
{return and__4941__auto__;
}
})()))
{return true;
} else
{return false;
}
});
thi.ng.geom.types.Tetrahedron.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5548__auto__,k__5549__auto__){var self__ = this;
var this__5548__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",4326117461),null], null), null),k__5549__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5548__auto____$1),self__.__meta),k__5549__auto__);
} else
{return (new thi.ng.geom.types.Tetrahedron(self__.points,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5549__auto__)),null));
}
});
thi.ng.geom.types.Tetrahedron.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5546__auto__,k__5547__auto__,G__11082){var self__ = this;
var this__5546__auto____$1 = this;var pred__11085 = cljs.core.keyword_identical_QMARK_;var expr__11086 = k__5547__auto__;if(cljs.core.truth_(pred__11085.call(null,new cljs.core.Keyword(null,"points","points",4326117461),expr__11086)))
{return (new thi.ng.geom.types.Tetrahedron(G__11082,self__.__meta,self__.__extmap,null));
} else
{return (new thi.ng.geom.types.Tetrahedron(self__.points,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5547__auto__,G__11082),null));
}
});
thi.ng.geom.types.Tetrahedron.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5551__auto__){var self__ = this;
var this__5551__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",4326117461),self__.points],null))], null),self__.__extmap));
});
thi.ng.geom.types.Tetrahedron.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5538__auto__,G__11082){var self__ = this;
var this__5538__auto____$1 = this;return (new thi.ng.geom.types.Tetrahedron(self__.points,G__11082,self__.__extmap,self__.__hash));
});
thi.ng.geom.types.Tetrahedron.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5544__auto__,entry__5545__auto__){var self__ = this;
var this__5544__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__5545__auto__))
{return cljs.core._assoc.call(null,this__5544__auto____$1,cljs.core._nth.call(null,entry__5545__auto__,0),cljs.core._nth.call(null,entry__5545__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__5544__auto____$1,entry__5545__auto__);
}
});
thi.ng.geom.types.Tetrahedron.cljs$lang$type = true;
thi.ng.geom.types.Tetrahedron.cljs$lang$ctorPrSeq = (function (this__5573__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Tetrahedron");
});
thi.ng.geom.types.Tetrahedron.cljs$lang$ctorPrWriter = (function (this__5573__auto__,writer__5574__auto__){return cljs.core._write.call(null,writer__5574__auto__,"thi.ng.geom.types/Tetrahedron");
});
thi.ng.geom.types.__GT_Tetrahedron = (function __GT_Tetrahedron(points){return (new thi.ng.geom.types.Tetrahedron(points));
});
thi.ng.geom.types.map__GT_Tetrahedron = (function map__GT_Tetrahedron(G__11084){return (new thi.ng.geom.types.Tetrahedron(new cljs.core.Keyword(null,"points","points",4326117461).cljs$core$IFn$_invoke$arity$1(G__11084),null,cljs.core.dissoc.call(null,G__11084,new cljs.core.Keyword(null,"points","points",4326117461))));
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
thi.ng.geom.types.Triangle3.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5539__auto__,k__5540__auto__){var self__ = this;
var this__5539__auto____$1 = this;return cljs.core._lookup.call(null,this__5539__auto____$1,k__5540__auto__,null);
});
thi.ng.geom.types.Triangle3.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5541__auto__,k11089,else__5542__auto__){var self__ = this;
var this__5541__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k11089,new cljs.core.Keyword(null,"points","points",4326117461)))
{return self__.points;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k11089,else__5542__auto__);
} else
{return null;
}
}
});
thi.ng.geom.types.Triangle3.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5553__auto__,writer__5554__auto__,opts__5555__auto__){var self__ = this;
var this__5553__auto____$1 = this;var pr_pair__5556__auto__ = ((function (this__5553__auto____$1){
return (function (keyval__5557__auto__){return cljs.core.pr_sequential_writer.call(null,writer__5554__auto__,cljs.core.pr_writer,""," ","",opts__5555__auto__,keyval__5557__auto__);
});})(this__5553__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__5554__auto__,pr_pair__5556__auto__,"#thi.ng.geom.types.Triangle3{",", ","}",opts__5555__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",4326117461),self__.points],null))], null),self__.__extmap));
});
thi.ng.geom.types.Triangle3.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5537__auto__){var self__ = this;
var this__5537__auto____$1 = this;return self__.__meta;
});
thi.ng.geom.types.Triangle3.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5533__auto__){var self__ = this;
var this__5533__auto____$1 = this;return (new thi.ng.geom.types.Triangle3(self__.points,self__.__meta,self__.__extmap,self__.__hash));
});
thi.ng.geom.types.Triangle3.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5543__auto__){var self__ = this;
var this__5543__auto____$1 = this;return (1 + cljs.core.count.call(null,self__.__extmap));
});
thi.ng.geom.types.Triangle3.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5534__auto__){var self__ = this;
var this__5534__auto____$1 = this;var h__5364__auto__ = self__.__hash;if(!((h__5364__auto__ == null)))
{return h__5364__auto__;
} else
{var h__5364__auto____$1 = cljs.core.hash_imap.call(null,this__5534__auto____$1);self__.__hash = h__5364__auto____$1;
return h__5364__auto____$1;
}
});
thi.ng.geom.types.Triangle3.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5535__auto__,other__5536__auto__){var self__ = this;
var this__5535__auto____$1 = this;if(cljs.core.truth_((function (){var and__4941__auto__ = other__5536__auto__;if(cljs.core.truth_(and__4941__auto__))
{return ((this__5535__auto____$1.constructor === other__5536__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__5535__auto____$1,other__5536__auto__));
} else
{return and__4941__auto__;
}
})()))
{return true;
} else
{return false;
}
});
thi.ng.geom.types.Triangle3.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5548__auto__,k__5549__auto__){var self__ = this;
var this__5548__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",4326117461),null], null), null),k__5549__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5548__auto____$1),self__.__meta),k__5549__auto__);
} else
{return (new thi.ng.geom.types.Triangle3(self__.points,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5549__auto__)),null));
}
});
thi.ng.geom.types.Triangle3.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5546__auto__,k__5547__auto__,G__11088){var self__ = this;
var this__5546__auto____$1 = this;var pred__11091 = cljs.core.keyword_identical_QMARK_;var expr__11092 = k__5547__auto__;if(cljs.core.truth_(pred__11091.call(null,new cljs.core.Keyword(null,"points","points",4326117461),expr__11092)))
{return (new thi.ng.geom.types.Triangle3(G__11088,self__.__meta,self__.__extmap,null));
} else
{return (new thi.ng.geom.types.Triangle3(self__.points,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5547__auto__,G__11088),null));
}
});
thi.ng.geom.types.Triangle3.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5551__auto__){var self__ = this;
var this__5551__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"points","points",4326117461),self__.points],null))], null),self__.__extmap));
});
thi.ng.geom.types.Triangle3.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5538__auto__,G__11088){var self__ = this;
var this__5538__auto____$1 = this;return (new thi.ng.geom.types.Triangle3(self__.points,G__11088,self__.__extmap,self__.__hash));
});
thi.ng.geom.types.Triangle3.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5544__auto__,entry__5545__auto__){var self__ = this;
var this__5544__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__5545__auto__))
{return cljs.core._assoc.call(null,this__5544__auto____$1,cljs.core._nth.call(null,entry__5545__auto__,0),cljs.core._nth.call(null,entry__5545__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__5544__auto____$1,entry__5545__auto__);
}
});
thi.ng.geom.types.Triangle3.cljs$lang$type = true;
thi.ng.geom.types.Triangle3.cljs$lang$ctorPrSeq = (function (this__5573__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.types/Triangle3");
});
thi.ng.geom.types.Triangle3.cljs$lang$ctorPrWriter = (function (this__5573__auto__,writer__5574__auto__){return cljs.core._write.call(null,writer__5574__auto__,"thi.ng.geom.types/Triangle3");
});
thi.ng.geom.types.__GT_Triangle3 = (function __GT_Triangle3(points){return (new thi.ng.geom.types.Triangle3(points));
});
thi.ng.geom.types.map__GT_Triangle3 = (function map__GT_Triangle3(G__11090){return (new thi.ng.geom.types.Triangle3(new cljs.core.Keyword(null,"points","points",4326117461).cljs$core$IFn$_invoke$arity$1(G__11090),null,cljs.core.dissoc.call(null,G__11090,new cljs.core.Keyword(null,"points","points",4326117461))));
});
