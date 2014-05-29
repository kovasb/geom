// Compiled by ClojureScript 0.0-2202
goog.provide('thi.ng.geom.webgl.buffers');
goog.require('cljs.core');
goog.require('thi.ng.geom.webgl.utils');
goog.require('thi.ng.common.error');
goog.require('thi.ng.common.error');
goog.require('thi.ng.geom.webgl.utils');
goog.require('thi.ng.geom.webgl.shaders');
goog.require('thi.ng.geom.webgl.shaders');
goog.require('thi.ng.geom.webgl.arrays');
goog.require('thi.ng.geom.webgl.arrays');
goog.require('thi.ng.geom.webgl.core');
goog.require('thi.ng.geom.webgl.core');
thi.ng.geom.webgl.buffers.make_attribute_buffer = (function make_attribute_buffer(gl,target,draw_type,data){var buffer = gl.createBuffer();gl.bindBuffer(target,buffer);
gl.bufferData(target,data,draw_type);
return buffer;
});
thi.ng.geom.webgl.buffers.make_attribute_buffers = (function make_attribute_buffers(gl,mode,spec){return cljs.core.reduce_kv.call(null,(function (spec__$1,id,p__6020){var map__6021 = p__6020;var map__6021__$1 = ((cljs.core.seq_QMARK_.call(null,map__6021))?cljs.core.apply.call(null,cljs.core.hash_map,map__6021):map__6021);var target = cljs.core.get.call(null,map__6021__$1,new cljs.core.Keyword(null,"target","target",4427965699));var data = cljs.core.get.call(null,map__6021__$1,new cljs.core.Keyword(null,"data","data",1016980252));return cljs.core.assoc_in.call(null,spec__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"buffer","buffer",3930752946)], null),thi.ng.geom.webgl.buffers.make_attribute_buffer.call(null,gl,(function (){var or__3481__auto__ = target;if(cljs.core.truth_(or__3481__auto__))
{return or__3481__auto__;
} else
{return thi.ng.geom.webgl.core.array_buffer;
}
})(),mode,data));
}),spec,spec);
});
thi.ng.geom.webgl.buffers.draw_arrays = (function draw_arrays(gl,p__6026){var map__6028 = p__6026;var map__6028__$1 = ((cljs.core.seq_QMARK_.call(null,map__6028))?cljs.core.apply.call(null,cljs.core.hash_map,map__6028):map__6028);var count = cljs.core.get.call(null,map__6028__$1,new cljs.core.Keyword(null,"count","count",1108755585));var mode = cljs.core.get.call(null,map__6028__$1,new cljs.core.Keyword(null,"mode","mode",1017261333));var uniforms = cljs.core.get.call(null,map__6028__$1,new cljs.core.Keyword(null,"uniforms","uniforms",709120177));var attribs = cljs.core.get.call(null,map__6028__$1,new cljs.core.Keyword(null,"attribs","attribs",4634025563));var shader = cljs.core.get.call(null,map__6028__$1,new cljs.core.Keyword(null,"shader","shader",4405291863));gl.useProgram(new cljs.core.Keyword(null,"program","program",704516598).cljs$core$IFn$_invoke$arity$1(shader));
thi.ng.geom.webgl.utils.loop_kv.call(null,((function (map__6028,map__6028__$1,count,mode,uniforms,attribs,shader){
return (function (p1__6022_SHARP_,p2__6023_SHARP_){return thi.ng.geom.webgl.shaders.set_uniform.call(null,shader,p1__6022_SHARP_,p2__6023_SHARP_);
});})(map__6028,map__6028__$1,count,mode,uniforms,attribs,shader))
,uniforms);
thi.ng.geom.webgl.utils.loop_kv.call(null,((function (map__6028,map__6028__$1,count,mode,uniforms,attribs,shader){
return (function (p1__6024_SHARP_,p2__6025_SHARP_){return thi.ng.geom.webgl.shaders.set_attribute.call(null,gl,shader,p1__6024_SHARP_,p2__6025_SHARP_);
});})(map__6028,map__6028__$1,count,mode,uniforms,attribs,shader))
,attribs);
gl.drawArrays(mode,0,count);
thi.ng.geom.webgl.utils.loop_kv.call(null,((function (map__6028,map__6028__$1,count,mode,uniforms,attribs,shader){
return (function (id,_){return thi.ng.geom.webgl.shaders.disable_attribute.call(null,gl,shader,id);
});})(map__6028,map__6028__$1,count,mode,uniforms,attribs,shader))
,attribs);
return gl;
});

/**
* @constructor
* @param {*} gl
* @param {*} id
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
thi.ng.geom.webgl.buffers.FBO = (function (gl,id,__meta,__extmap){
this.gl = gl;
this.id = id;
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
thi.ng.geom.webgl.buffers.FBO.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4067__auto__,k__4068__auto__){var self__ = this;
var this__4067__auto____$1 = this;return cljs.core._lookup.call(null,this__4067__auto____$1,k__4068__auto__,null);
});
thi.ng.geom.webgl.buffers.FBO.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4069__auto__,k6030,else__4070__auto__){var self__ = this;
var this__4069__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k6030,new cljs.core.Keyword(null,"gl","gl",1013907543)))
{return self__.gl;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k6030,new cljs.core.Keyword(null,"id","id",1013907597)))
{return self__.id;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k6030,else__4070__auto__);
} else
{return null;
}
}
}
});
thi.ng.geom.webgl.buffers.FBO.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4081__auto__,writer__4082__auto__,opts__4083__auto__){var self__ = this;
var this__4081__auto____$1 = this;var pr_pair__4084__auto__ = ((function (this__4081__auto____$1){
return (function (keyval__4085__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4082__auto__,cljs.core.pr_writer,""," ","",opts__4083__auto__,keyval__4085__auto__);
});})(this__4081__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4082__auto__,pr_pair__4084__auto__,"#thi.ng.geom.webgl.buffers.FBO{",", ","}",opts__4083__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"gl","gl",1013907543),self__.gl],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",1013907597),self__.id],null))], null),self__.__extmap));
});
thi.ng.geom.webgl.buffers.FBO.prototype.thi$ng$geom$webgl$core$PRelease$ = true;
thi.ng.geom.webgl.buffers.FBO.prototype.thi$ng$geom$webgl$core$PRelease$release$arity$1 = (function (_){var self__ = this;
var ___$1 = this;self__.gl.deleteFramebuffer(self__.id);
return ___$1;
});
thi.ng.geom.webgl.buffers.FBO.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4065__auto__){var self__ = this;
var this__4065__auto____$1 = this;return self__.__meta;
});
thi.ng.geom.webgl.buffers.FBO.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4061__auto__){var self__ = this;
var this__4061__auto____$1 = this;return (new thi.ng.geom.webgl.buffers.FBO(self__.gl,self__.id,self__.__meta,self__.__extmap,self__.__hash));
});
thi.ng.geom.webgl.buffers.FBO.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4071__auto__){var self__ = this;
var this__4071__auto____$1 = this;return (2 + cljs.core.count.call(null,self__.__extmap));
});
thi.ng.geom.webgl.buffers.FBO.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4062__auto__){var self__ = this;
var this__4062__auto____$1 = this;var h__3892__auto__ = self__.__hash;if(!((h__3892__auto__ == null)))
{return h__3892__auto__;
} else
{var h__3892__auto____$1 = cljs.core.hash_imap.call(null,this__4062__auto____$1);self__.__hash = h__3892__auto____$1;
return h__3892__auto____$1;
}
});
thi.ng.geom.webgl.buffers.FBO.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4063__auto__,other__4064__auto__){var self__ = this;
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
thi.ng.geom.webgl.buffers.FBO.prototype.thi$ng$geom$webgl$core$PFramebuffer$ = true;
thi.ng.geom.webgl.buffers.FBO.prototype.thi$ng$geom$webgl$core$PFramebuffer$set_fbo_color_texture$arity$2 = (function (_,p__6032){var self__ = this;
var map__6033 = p__6032;var map__6033__$1 = ((cljs.core.seq_QMARK_.call(null,map__6033))?cljs.core.apply.call(null,cljs.core.hash_map,map__6033):map__6033);var id__$1 = cljs.core.get.call(null,map__6033__$1,new cljs.core.Keyword(null,"id","id",1013907597));var target = cljs.core.get.call(null,map__6033__$1,new cljs.core.Keyword(null,"target","target",4427965699));var ___$1 = this;self__.gl.framebufferTexture2D(thi.ng.geom.webgl.core.framebuffer,thi.ng.geom.webgl.core.color_attachment0,target,id__$1,0);
thi.ng.geom.webgl.buffers.check_fbo.call(null,self__.gl);
return ___$1;
});
thi.ng.geom.webgl.buffers.FBO.prototype.thi$ng$geom$webgl$core$PFramebuffer$set_fbo_depth_buffer$arity$2 = (function (_,p__6034){var self__ = this;
var map__6035 = p__6034;var map__6035__$1 = ((cljs.core.seq_QMARK_.call(null,map__6035))?cljs.core.apply.call(null,cljs.core.hash_map,map__6035):map__6035);var id__$1 = cljs.core.get.call(null,map__6035__$1,new cljs.core.Keyword(null,"id","id",1013907597));var ___$1 = this;self__.gl.framebufferRenderbuffer(thi.ng.geom.webgl.core.framebuffer,thi.ng.geom.webgl.core.depth_attachment,thi.ng.geom.webgl.core.renderbuffer,id__$1);
thi.ng.geom.webgl.buffers.check_fbo.call(null,self__.gl);
return ___$1;
});
thi.ng.geom.webgl.buffers.FBO.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4076__auto__,k__4077__auto__){var self__ = this;
var this__4076__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),null,new cljs.core.Keyword(null,"gl","gl",1013907543),null], null), null),k__4077__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4076__auto____$1),self__.__meta),k__4077__auto__);
} else
{return (new thi.ng.geom.webgl.buffers.FBO(self__.gl,self__.id,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4077__auto__)),null));
}
});
thi.ng.geom.webgl.buffers.FBO.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4074__auto__,k__4075__auto__,G__6029){var self__ = this;
var this__4074__auto____$1 = this;var pred__6036 = cljs.core.keyword_identical_QMARK_;var expr__6037 = k__4075__auto__;if(cljs.core.truth_(pred__6036.call(null,new cljs.core.Keyword(null,"gl","gl",1013907543),expr__6037)))
{return (new thi.ng.geom.webgl.buffers.FBO(G__6029,self__.id,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__6036.call(null,new cljs.core.Keyword(null,"id","id",1013907597),expr__6037)))
{return (new thi.ng.geom.webgl.buffers.FBO(self__.gl,G__6029,self__.__meta,self__.__extmap,null));
} else
{return (new thi.ng.geom.webgl.buffers.FBO(self__.gl,self__.id,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4075__auto__,G__6029),null));
}
}
});
thi.ng.geom.webgl.buffers.FBO.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4079__auto__){var self__ = this;
var this__4079__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"gl","gl",1013907543),self__.gl],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",1013907597),self__.id],null))], null),self__.__extmap));
});
thi.ng.geom.webgl.buffers.FBO.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4066__auto__,G__6029){var self__ = this;
var this__4066__auto____$1 = this;return (new thi.ng.geom.webgl.buffers.FBO(self__.gl,self__.id,G__6029,self__.__extmap,self__.__hash));
});
thi.ng.geom.webgl.buffers.FBO.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4072__auto__,entry__4073__auto__){var self__ = this;
var this__4072__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4073__auto__))
{return cljs.core._assoc.call(null,this__4072__auto____$1,cljs.core._nth.call(null,entry__4073__auto__,0),cljs.core._nth.call(null,entry__4073__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4072__auto____$1,entry__4073__auto__);
}
});
thi.ng.geom.webgl.buffers.FBO.prototype.thi$ng$geom$webgl$core$PBind$ = true;
thi.ng.geom.webgl.buffers.FBO.prototype.thi$ng$geom$webgl$core$PBind$bind$arity$1 = (function (_){var self__ = this;
var ___$1 = this;self__.gl.bindFramebuffer(thi.ng.geom.webgl.core.framebuffer,self__.id);
return ___$1;
});
thi.ng.geom.webgl.buffers.FBO.prototype.thi$ng$geom$webgl$core$PBind$unbind$arity$1 = (function (_){var self__ = this;
var ___$1 = this;self__.gl.bindFramebuffer(thi.ng.geom.webgl.core.framebuffer,null);
return ___$1;
});
thi.ng.geom.webgl.buffers.FBO.cljs$lang$type = true;
thi.ng.geom.webgl.buffers.FBO.cljs$lang$ctorPrSeq = (function (this__4101__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.webgl.buffers/FBO");
});
thi.ng.geom.webgl.buffers.FBO.cljs$lang$ctorPrWriter = (function (this__4101__auto__,writer__4102__auto__){return cljs.core._write.call(null,writer__4102__auto__,"thi.ng.geom.webgl.buffers/FBO");
});
thi.ng.geom.webgl.buffers.__GT_FBO = (function __GT_FBO(gl,id){return (new thi.ng.geom.webgl.buffers.FBO(gl,id));
});
thi.ng.geom.webgl.buffers.map__GT_FBO = (function map__GT_FBO(G__6031){return (new thi.ng.geom.webgl.buffers.FBO(new cljs.core.Keyword(null,"gl","gl",1013907543).cljs$core$IFn$_invoke$arity$1(G__6031),new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(G__6031),null,cljs.core.dissoc.call(null,G__6031,new cljs.core.Keyword(null,"gl","gl",1013907543),new cljs.core.Keyword(null,"id","id",1013907597))));
});
thi.ng.geom.webgl.buffers.check_fbo = (function check_fbo(gl){var pred__6042 = cljs.core._EQ_;var expr__6043 = gl.checkFramebufferStatus(thi.ng.geom.webgl.core.framebuffer);if(cljs.core.truth_(pred__6042.call(null,thi.ng.geom.webgl.core.framebuffer_unsupported,expr__6043)))
{return thi.ng.common.error.throw_BANG_.call(null,"FBO unsupported");
} else
{if(cljs.core.truth_(pred__6042.call(null,thi.ng.geom.webgl.core.framebuffer_incomplete_attachment,expr__6043)))
{return thi.ng.common.error.throw_BANG_.call(null,"FBO incomplete attachment");
} else
{if(cljs.core.truth_(pred__6042.call(null,thi.ng.geom.webgl.core.framebuffer_incomplete_dimensions,expr__6043)))
{return thi.ng.common.error.throw_BANG_.call(null,"FBO incomplete dimensions");
} else
{if(cljs.core.truth_(pred__6042.call(null,thi.ng.geom.webgl.core.framebuffer_incomplete_missing_attachment,expr__6043)))
{return thi.ng.common.error.throw_BANG_.call(null,"FBO incomplete missing attachment");
} else
{return gl;
}
}
}
}
});
thi.ng.geom.webgl.buffers.make_fbo = (function make_fbo(gl){return (new thi.ng.geom.webgl.buffers.FBO(gl,gl.createFramebuffer()));
});

/**
* @constructor
* @param {*} gl
* @param {*} id
* @param {*} format
* @param {*} width
* @param {*} height
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
thi.ng.geom.webgl.buffers.RenderBuffer = (function (gl,id,format,width,height,__meta,__extmap){
this.gl = gl;
this.id = id;
this.format = format;
this.width = width;
this.height = height;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>5){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
thi.ng.geom.webgl.buffers.RenderBuffer.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4067__auto__,k__4068__auto__){var self__ = this;
var this__4067__auto____$1 = this;return cljs.core._lookup.call(null,this__4067__auto____$1,k__4068__auto__,null);
});
thi.ng.geom.webgl.buffers.RenderBuffer.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4069__auto__,k6046,else__4070__auto__){var self__ = this;
var this__4069__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k6046,new cljs.core.Keyword(null,"gl","gl",1013907543)))
{return self__.gl;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k6046,new cljs.core.Keyword(null,"id","id",1013907597)))
{return self__.id;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k6046,new cljs.core.Keyword(null,"format","format",4040092521)))
{return self__.format;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k6046,new cljs.core.Keyword(null,"width","width",1127031096)))
{return self__.width;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k6046,new cljs.core.Keyword(null,"height","height",4087841945)))
{return self__.height;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k6046,else__4070__auto__);
} else
{return null;
}
}
}
}
}
}
});
thi.ng.geom.webgl.buffers.RenderBuffer.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4081__auto__,writer__4082__auto__,opts__4083__auto__){var self__ = this;
var this__4081__auto____$1 = this;var pr_pair__4084__auto__ = ((function (this__4081__auto____$1){
return (function (keyval__4085__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4082__auto__,cljs.core.pr_writer,""," ","",opts__4083__auto__,keyval__4085__auto__);
});})(this__4081__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4082__auto__,pr_pair__4084__auto__,"#thi.ng.geom.webgl.buffers.RenderBuffer{",", ","}",opts__4083__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"gl","gl",1013907543),self__.gl],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",1013907597),self__.id],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"format","format",4040092521),self__.format],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"width","width",1127031096),self__.width],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"height","height",4087841945),self__.height],null))], null),self__.__extmap));
});
thi.ng.geom.webgl.buffers.RenderBuffer.prototype.thi$ng$geom$webgl$core$PRelease$ = true;
thi.ng.geom.webgl.buffers.RenderBuffer.prototype.thi$ng$geom$webgl$core$PRelease$release$arity$1 = (function (_){var self__ = this;
var ___$1 = this;self__.gl.deleteRenderbuffer(self__.id);
return ___$1;
});
thi.ng.geom.webgl.buffers.RenderBuffer.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4065__auto__){var self__ = this;
var this__4065__auto____$1 = this;return self__.__meta;
});
thi.ng.geom.webgl.buffers.RenderBuffer.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4061__auto__){var self__ = this;
var this__4061__auto____$1 = this;return (new thi.ng.geom.webgl.buffers.RenderBuffer(self__.gl,self__.id,self__.format,self__.width,self__.height,self__.__meta,self__.__extmap,self__.__hash));
});
thi.ng.geom.webgl.buffers.RenderBuffer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4071__auto__){var self__ = this;
var this__4071__auto____$1 = this;return (5 + cljs.core.count.call(null,self__.__extmap));
});
thi.ng.geom.webgl.buffers.RenderBuffer.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4062__auto__){var self__ = this;
var this__4062__auto____$1 = this;var h__3892__auto__ = self__.__hash;if(!((h__3892__auto__ == null)))
{return h__3892__auto__;
} else
{var h__3892__auto____$1 = cljs.core.hash_imap.call(null,this__4062__auto____$1);self__.__hash = h__3892__auto____$1;
return h__3892__auto____$1;
}
});
thi.ng.geom.webgl.buffers.RenderBuffer.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4063__auto__,other__4064__auto__){var self__ = this;
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
thi.ng.geom.webgl.buffers.RenderBuffer.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4076__auto__,k__4077__auto__){var self__ = this;
var this__4076__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"format","format",4040092521),null,new cljs.core.Keyword(null,"width","width",1127031096),null,new cljs.core.Keyword(null,"id","id",1013907597),null,new cljs.core.Keyword(null,"gl","gl",1013907543),null,new cljs.core.Keyword(null,"height","height",4087841945),null], null), null),k__4077__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4076__auto____$1),self__.__meta),k__4077__auto__);
} else
{return (new thi.ng.geom.webgl.buffers.RenderBuffer(self__.gl,self__.id,self__.format,self__.width,self__.height,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4077__auto__)),null));
}
});
thi.ng.geom.webgl.buffers.RenderBuffer.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4074__auto__,k__4075__auto__,G__6045){var self__ = this;
var this__4074__auto____$1 = this;var pred__6048 = cljs.core.keyword_identical_QMARK_;var expr__6049 = k__4075__auto__;if(cljs.core.truth_(pred__6048.call(null,new cljs.core.Keyword(null,"gl","gl",1013907543),expr__6049)))
{return (new thi.ng.geom.webgl.buffers.RenderBuffer(G__6045,self__.id,self__.format,self__.width,self__.height,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__6048.call(null,new cljs.core.Keyword(null,"id","id",1013907597),expr__6049)))
{return (new thi.ng.geom.webgl.buffers.RenderBuffer(self__.gl,G__6045,self__.format,self__.width,self__.height,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__6048.call(null,new cljs.core.Keyword(null,"format","format",4040092521),expr__6049)))
{return (new thi.ng.geom.webgl.buffers.RenderBuffer(self__.gl,self__.id,G__6045,self__.width,self__.height,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__6048.call(null,new cljs.core.Keyword(null,"width","width",1127031096),expr__6049)))
{return (new thi.ng.geom.webgl.buffers.RenderBuffer(self__.gl,self__.id,self__.format,G__6045,self__.height,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__6048.call(null,new cljs.core.Keyword(null,"height","height",4087841945),expr__6049)))
{return (new thi.ng.geom.webgl.buffers.RenderBuffer(self__.gl,self__.id,self__.format,self__.width,G__6045,self__.__meta,self__.__extmap,null));
} else
{return (new thi.ng.geom.webgl.buffers.RenderBuffer(self__.gl,self__.id,self__.format,self__.width,self__.height,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4075__auto__,G__6045),null));
}
}
}
}
}
});
thi.ng.geom.webgl.buffers.RenderBuffer.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4079__auto__){var self__ = this;
var this__4079__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"gl","gl",1013907543),self__.gl],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",1013907597),self__.id],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"format","format",4040092521),self__.format],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"width","width",1127031096),self__.width],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"height","height",4087841945),self__.height],null))], null),self__.__extmap));
});
thi.ng.geom.webgl.buffers.RenderBuffer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4066__auto__,G__6045){var self__ = this;
var this__4066__auto____$1 = this;return (new thi.ng.geom.webgl.buffers.RenderBuffer(self__.gl,self__.id,self__.format,self__.width,self__.height,G__6045,self__.__extmap,self__.__hash));
});
thi.ng.geom.webgl.buffers.RenderBuffer.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4072__auto__,entry__4073__auto__){var self__ = this;
var this__4072__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4073__auto__))
{return cljs.core._assoc.call(null,this__4072__auto____$1,cljs.core._nth.call(null,entry__4073__auto__,0),cljs.core._nth.call(null,entry__4073__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4072__auto____$1,entry__4073__auto__);
}
});
thi.ng.geom.webgl.buffers.RenderBuffer.prototype.thi$ng$geom$webgl$core$PBind$ = true;
thi.ng.geom.webgl.buffers.RenderBuffer.prototype.thi$ng$geom$webgl$core$PBind$bind$arity$1 = (function (_){var self__ = this;
var ___$1 = this;self__.gl.bindRenderbuffer(thi.ng.geom.webgl.core.renderbuffer,self__.id);
return ___$1;
});
thi.ng.geom.webgl.buffers.RenderBuffer.prototype.thi$ng$geom$webgl$core$PBind$unbind$arity$1 = (function (_){var self__ = this;
var ___$1 = this;self__.gl.bindRenderbuffer(thi.ng.geom.webgl.core.renderbuffer,null);
return ___$1;
});
thi.ng.geom.webgl.buffers.RenderBuffer.prototype.thi$ng$geom$webgl$core$PConfigure$ = true;
thi.ng.geom.webgl.buffers.RenderBuffer.prototype.thi$ng$geom$webgl$core$PConfigure$configure$arity$2 = (function (_,p__6051){var self__ = this;
var map__6052 = p__6051;var map__6052__$1 = ((cljs.core.seq_QMARK_.call(null,map__6052))?cljs.core.apply.call(null,cljs.core.hash_map,map__6052):map__6052);var height__$1 = cljs.core.get.call(null,map__6052__$1,new cljs.core.Keyword(null,"height","height",4087841945));var width__$1 = cljs.core.get.call(null,map__6052__$1,new cljs.core.Keyword(null,"width","width",1127031096));var format__$1 = cljs.core.get.call(null,map__6052__$1,new cljs.core.Keyword(null,"format","format",4040092521));var ___$1 = this;thi.ng.geom.webgl.core.bind.call(null,___$1);
self__.gl.renderbufferStorage(thi.ng.geom.webgl.core.renderbuffer,format__$1,width__$1,height__$1);
thi.ng.geom.webgl.core.unbind.call(null,___$1);
return (new thi.ng.geom.webgl.buffers.RenderBuffer(self__.gl,self__.id,format__$1,width__$1,height__$1));
});
thi.ng.geom.webgl.buffers.RenderBuffer.cljs$lang$type = true;
thi.ng.geom.webgl.buffers.RenderBuffer.cljs$lang$ctorPrSeq = (function (this__4101__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.webgl.buffers/RenderBuffer");
});
thi.ng.geom.webgl.buffers.RenderBuffer.cljs$lang$ctorPrWriter = (function (this__4101__auto__,writer__4102__auto__){return cljs.core._write.call(null,writer__4102__auto__,"thi.ng.geom.webgl.buffers/RenderBuffer");
});
thi.ng.geom.webgl.buffers.__GT_RenderBuffer = (function __GT_RenderBuffer(gl,id,format,width,height){return (new thi.ng.geom.webgl.buffers.RenderBuffer(gl,id,format,width,height));
});
thi.ng.geom.webgl.buffers.map__GT_RenderBuffer = (function map__GT_RenderBuffer(G__6047){return (new thi.ng.geom.webgl.buffers.RenderBuffer(new cljs.core.Keyword(null,"gl","gl",1013907543).cljs$core$IFn$_invoke$arity$1(G__6047),new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(G__6047),new cljs.core.Keyword(null,"format","format",4040092521).cljs$core$IFn$_invoke$arity$1(G__6047),new cljs.core.Keyword(null,"width","width",1127031096).cljs$core$IFn$_invoke$arity$1(G__6047),new cljs.core.Keyword(null,"height","height",4087841945).cljs$core$IFn$_invoke$arity$1(G__6047),null,cljs.core.dissoc.call(null,G__6047,new cljs.core.Keyword(null,"gl","gl",1013907543),new cljs.core.Keyword(null,"id","id",1013907597),new cljs.core.Keyword(null,"format","format",4040092521),new cljs.core.Keyword(null,"width","width",1127031096),new cljs.core.Keyword(null,"height","height",4087841945))));
});
/**
* @param {...*} var_args
*/
thi.ng.geom.webgl.buffers.make_render_buffer = (function() { 
var make_render_buffer__delegate = function (gl,p__6053){var vec__6055 = p__6053;var opts = cljs.core.nth.call(null,vec__6055,0,null);var buf = (new thi.ng.geom.webgl.buffers.RenderBuffer(gl,gl.createRenderbuffer(),null,null,null));if(cljs.core.truth_(opts))
{return thi.ng.geom.webgl.core.configure.call(null,buf,opts);
} else
{return buf;
}
};
var make_render_buffer = function (gl,var_args){
var p__6053 = null;if (arguments.length > 1) {
  p__6053 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return make_render_buffer__delegate.call(this,gl,p__6053);};
make_render_buffer.cljs$lang$maxFixedArity = 1;
make_render_buffer.cljs$lang$applyTo = (function (arglist__6056){
var gl = cljs.core.first(arglist__6056);
var p__6053 = cljs.core.rest(arglist__6056);
return make_render_buffer__delegate(gl,p__6053);
});
make_render_buffer.cljs$core$IFn$_invoke$arity$variadic = make_render_buffer__delegate;
return make_render_buffer;
})()
;
thi.ng.geom.webgl.buffers.make_depth_buffer = (function make_depth_buffer(gl,width,height){return thi.ng.geom.webgl.buffers.make_render_buffer.call(null,gl,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"format","format",4040092521),thi.ng.geom.webgl.core.depth_component16,new cljs.core.Keyword(null,"width","width",1127031096),width,new cljs.core.Keyword(null,"height","height",4087841945),height], null));
});

/**
* @constructor
* @param {*} gl
* @param {*} id
* @param {*} channels
* @param {*} type
* @param {*} target
* @param {*} width
* @param {*} height
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
thi.ng.geom.webgl.buffers.Texture2D = (function (gl,id,channels,type,target,width,height,__meta,__extmap){
this.gl = gl;
this.id = id;
this.channels = channels;
this.type = type;
this.target = target;
this.width = width;
this.height = height;
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
thi.ng.geom.webgl.buffers.Texture2D.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4067__auto__,k__4068__auto__){var self__ = this;
var this__4067__auto____$1 = this;return cljs.core._lookup.call(null,this__4067__auto____$1,k__4068__auto__,null);
});
thi.ng.geom.webgl.buffers.Texture2D.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4069__auto__,k6058,else__4070__auto__){var self__ = this;
var this__4069__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k6058,new cljs.core.Keyword(null,"gl","gl",1013907543)))
{return self__.gl;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k6058,new cljs.core.Keyword(null,"id","id",1013907597)))
{return self__.id;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k6058,new cljs.core.Keyword(null,"channels","channels",2446530370)))
{return self__.channels;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k6058,new cljs.core.Keyword(null,"type","type",1017479852)))
{return self__.type;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k6058,new cljs.core.Keyword(null,"target","target",4427965699)))
{return self__.target;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k6058,new cljs.core.Keyword(null,"width","width",1127031096)))
{return self__.width;
} else
{if(cljs.core.keyword_identical_QMARK_.call(null,k6058,new cljs.core.Keyword(null,"height","height",4087841945)))
{return self__.height;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k6058,else__4070__auto__);
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
thi.ng.geom.webgl.buffers.Texture2D.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4081__auto__,writer__4082__auto__,opts__4083__auto__){var self__ = this;
var this__4081__auto____$1 = this;var pr_pair__4084__auto__ = ((function (this__4081__auto____$1){
return (function (keyval__4085__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4082__auto__,cljs.core.pr_writer,""," ","",opts__4083__auto__,keyval__4085__auto__);
});})(this__4081__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4082__auto__,pr_pair__4084__auto__,"#thi.ng.geom.webgl.buffers.Texture2D{",", ","}",opts__4083__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"gl","gl",1013907543),self__.gl],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",1013907597),self__.id],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"channels","channels",2446530370),self__.channels],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type","type",1017479852),self__.type],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"target","target",4427965699),self__.target],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"width","width",1127031096),self__.width],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"height","height",4087841945),self__.height],null))], null),self__.__extmap));
});
thi.ng.geom.webgl.buffers.Texture2D.prototype.thi$ng$geom$webgl$core$PRelease$ = true;
thi.ng.geom.webgl.buffers.Texture2D.prototype.thi$ng$geom$webgl$core$PRelease$release$arity$1 = (function (_){var self__ = this;
var ___$1 = this;self__.gl.deleteTexture(self__.id);
return ___$1;
});
thi.ng.geom.webgl.buffers.Texture2D.prototype.thi$ng$geom$webgl$core$PTexture$ = true;
thi.ng.geom.webgl.buffers.Texture2D.prototype.thi$ng$geom$webgl$core$PTexture$set_texture_filter$arity$2 = (function (_,type__$1){var self__ = this;
var ___$1 = this;self__.gl.texParameteri(self__.target,thi.ng.geom.webgl.core.texture_min_filter,type__$1);
self__.gl.texParameteri(self__.target,thi.ng.geom.webgl.core.texture_mag_filter,type__$1);
return ___$1;
});
thi.ng.geom.webgl.buffers.Texture2D.prototype.thi$ng$geom$webgl$core$PTexture$set_texture_wrap$arity$2 = (function (_,type__$1){var self__ = this;
var ___$1 = this;self__.gl.texParameteri(self__.target,thi.ng.geom.webgl.core.texture_wrap_s,type__$1);
self__.gl.texParameteri(self__.target,thi.ng.geom.webgl.core.texture_wrap_t,type__$1);
return ___$1;
});
thi.ng.geom.webgl.buffers.Texture2D.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4065__auto__){var self__ = this;
var this__4065__auto____$1 = this;return self__.__meta;
});
thi.ng.geom.webgl.buffers.Texture2D.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4061__auto__){var self__ = this;
var this__4061__auto____$1 = this;return (new thi.ng.geom.webgl.buffers.Texture2D(self__.gl,self__.id,self__.channels,self__.type,self__.target,self__.width,self__.height,self__.__meta,self__.__extmap,self__.__hash));
});
thi.ng.geom.webgl.buffers.Texture2D.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4071__auto__){var self__ = this;
var this__4071__auto____$1 = this;return (7 + cljs.core.count.call(null,self__.__extmap));
});
thi.ng.geom.webgl.buffers.Texture2D.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4062__auto__){var self__ = this;
var this__4062__auto____$1 = this;var h__3892__auto__ = self__.__hash;if(!((h__3892__auto__ == null)))
{return h__3892__auto__;
} else
{var h__3892__auto____$1 = cljs.core.hash_imap.call(null,this__4062__auto____$1);self__.__hash = h__3892__auto____$1;
return h__3892__auto____$1;
}
});
thi.ng.geom.webgl.buffers.Texture2D.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4063__auto__,other__4064__auto__){var self__ = this;
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
thi.ng.geom.webgl.buffers.Texture2D.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4076__auto__,k__4077__auto__){var self__ = this;
var this__4076__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"channels","channels",2446530370),null,new cljs.core.Keyword(null,"width","width",1127031096),null,new cljs.core.Keyword(null,"type","type",1017479852),null,new cljs.core.Keyword(null,"id","id",1013907597),null,new cljs.core.Keyword(null,"gl","gl",1013907543),null,new cljs.core.Keyword(null,"target","target",4427965699),null,new cljs.core.Keyword(null,"height","height",4087841945),null], null), null),k__4077__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4076__auto____$1),self__.__meta),k__4077__auto__);
} else
{return (new thi.ng.geom.webgl.buffers.Texture2D(self__.gl,self__.id,self__.channels,self__.type,self__.target,self__.width,self__.height,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4077__auto__)),null));
}
});
thi.ng.geom.webgl.buffers.Texture2D.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4074__auto__,k__4075__auto__,G__6057){var self__ = this;
var this__4074__auto____$1 = this;var pred__6060 = cljs.core.keyword_identical_QMARK_;var expr__6061 = k__4075__auto__;if(cljs.core.truth_(pred__6060.call(null,new cljs.core.Keyword(null,"gl","gl",1013907543),expr__6061)))
{return (new thi.ng.geom.webgl.buffers.Texture2D(G__6057,self__.id,self__.channels,self__.type,self__.target,self__.width,self__.height,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__6060.call(null,new cljs.core.Keyword(null,"id","id",1013907597),expr__6061)))
{return (new thi.ng.geom.webgl.buffers.Texture2D(self__.gl,G__6057,self__.channels,self__.type,self__.target,self__.width,self__.height,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__6060.call(null,new cljs.core.Keyword(null,"channels","channels",2446530370),expr__6061)))
{return (new thi.ng.geom.webgl.buffers.Texture2D(self__.gl,self__.id,G__6057,self__.type,self__.target,self__.width,self__.height,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__6060.call(null,new cljs.core.Keyword(null,"type","type",1017479852),expr__6061)))
{return (new thi.ng.geom.webgl.buffers.Texture2D(self__.gl,self__.id,self__.channels,G__6057,self__.target,self__.width,self__.height,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__6060.call(null,new cljs.core.Keyword(null,"target","target",4427965699),expr__6061)))
{return (new thi.ng.geom.webgl.buffers.Texture2D(self__.gl,self__.id,self__.channels,self__.type,G__6057,self__.width,self__.height,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__6060.call(null,new cljs.core.Keyword(null,"width","width",1127031096),expr__6061)))
{return (new thi.ng.geom.webgl.buffers.Texture2D(self__.gl,self__.id,self__.channels,self__.type,self__.target,G__6057,self__.height,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__6060.call(null,new cljs.core.Keyword(null,"height","height",4087841945),expr__6061)))
{return (new thi.ng.geom.webgl.buffers.Texture2D(self__.gl,self__.id,self__.channels,self__.type,self__.target,self__.width,G__6057,self__.__meta,self__.__extmap,null));
} else
{return (new thi.ng.geom.webgl.buffers.Texture2D(self__.gl,self__.id,self__.channels,self__.type,self__.target,self__.width,self__.height,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4075__auto__,G__6057),null));
}
}
}
}
}
}
}
});
thi.ng.geom.webgl.buffers.Texture2D.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4079__auto__){var self__ = this;
var this__4079__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"gl","gl",1013907543),self__.gl],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",1013907597),self__.id],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"channels","channels",2446530370),self__.channels],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type","type",1017479852),self__.type],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"target","target",4427965699),self__.target],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"width","width",1127031096),self__.width],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"height","height",4087841945),self__.height],null))], null),self__.__extmap));
});
thi.ng.geom.webgl.buffers.Texture2D.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4066__auto__,G__6057){var self__ = this;
var this__4066__auto____$1 = this;return (new thi.ng.geom.webgl.buffers.Texture2D(self__.gl,self__.id,self__.channels,self__.type,self__.target,self__.width,self__.height,G__6057,self__.__extmap,self__.__hash));
});
thi.ng.geom.webgl.buffers.Texture2D.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4072__auto__,entry__4073__auto__){var self__ = this;
var this__4072__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4073__auto__))
{return cljs.core._assoc.call(null,this__4072__auto____$1,cljs.core._nth.call(null,entry__4073__auto__,0),cljs.core._nth.call(null,entry__4073__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4072__auto____$1,entry__4073__auto__);
}
});
thi.ng.geom.webgl.buffers.Texture2D.prototype.thi$ng$geom$webgl$core$PBind$ = true;
thi.ng.geom.webgl.buffers.Texture2D.prototype.thi$ng$geom$webgl$core$PBind$bind$arity$2 = (function (_,unit){var self__ = this;
var ___$1 = this;self__.gl.activeTexture((thi.ng.geom.webgl.core.texture0 + unit));
self__.gl.bindTexture(self__.target,self__.id);
return ___$1;
});
thi.ng.geom.webgl.buffers.Texture2D.prototype.thi$ng$geom$webgl$core$PBind$unbind$arity$2 = (function (_,unit){var self__ = this;
var ___$1 = this;self__.gl.activeTexture((thi.ng.geom.webgl.core.texture0 + unit));
self__.gl.bindTexture(self__.target,-1);
return ___$1;
});
thi.ng.geom.webgl.buffers.Texture2D.prototype.thi$ng$geom$webgl$core$PConfigure$ = true;
thi.ng.geom.webgl.buffers.Texture2D.prototype.thi$ng$geom$webgl$core$PConfigure$configure$arity$2 = (function (_,p__6063){var self__ = this;
var map__6064 = p__6063;var map__6064__$1 = ((cljs.core.seq_QMARK_.call(null,map__6064))?cljs.core.apply.call(null,cljs.core.hash_map,map__6064):map__6064);var wrap = cljs.core.get.call(null,map__6064__$1,new cljs.core.Keyword(null,"wrap","wrap",1017562044));var filter = cljs.core.get.call(null,map__6064__$1,new cljs.core.Keyword(null,"filter","filter",4034379498));var height__$1 = cljs.core.get.call(null,map__6064__$1,new cljs.core.Keyword(null,"height","height",4087841945));var width__$1 = cljs.core.get.call(null,map__6064__$1,new cljs.core.Keyword(null,"width","width",1127031096));var ___$1 = this;self__.gl.texImage2D(self__.target,0,self__.channels,width__$1,height__$1,0,self__.channels,self__.type,null);
if(cljs.core.truth_(filter))
{thi.ng.geom.webgl.core.set_texture_filter.call(null,___$1,filter);
} else
{}
if(cljs.core.truth_(wrap))
{thi.ng.geom.webgl.core.set_texture_wrap.call(null,___$1,wrap);
} else
{}
return (new thi.ng.geom.webgl.buffers.Texture2D(self__.gl,self__.id,self__.channels,self__.type,self__.target,width__$1,height__$1));
});
thi.ng.geom.webgl.buffers.Texture2D.cljs$lang$type = true;
thi.ng.geom.webgl.buffers.Texture2D.cljs$lang$ctorPrSeq = (function (this__4101__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"thi.ng.geom.webgl.buffers/Texture2D");
});
thi.ng.geom.webgl.buffers.Texture2D.cljs$lang$ctorPrWriter = (function (this__4101__auto__,writer__4102__auto__){return cljs.core._write.call(null,writer__4102__auto__,"thi.ng.geom.webgl.buffers/Texture2D");
});
thi.ng.geom.webgl.buffers.__GT_Texture2D = (function __GT_Texture2D(gl,id,channels,type,target,width,height){return (new thi.ng.geom.webgl.buffers.Texture2D(gl,id,channels,type,target,width,height));
});
thi.ng.geom.webgl.buffers.map__GT_Texture2D = (function map__GT_Texture2D(G__6059){return (new thi.ng.geom.webgl.buffers.Texture2D(new cljs.core.Keyword(null,"gl","gl",1013907543).cljs$core$IFn$_invoke$arity$1(G__6059),new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(G__6059),new cljs.core.Keyword(null,"channels","channels",2446530370).cljs$core$IFn$_invoke$arity$1(G__6059),new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(G__6059),new cljs.core.Keyword(null,"target","target",4427965699).cljs$core$IFn$_invoke$arity$1(G__6059),new cljs.core.Keyword(null,"width","width",1127031096).cljs$core$IFn$_invoke$arity$1(G__6059),new cljs.core.Keyword(null,"height","height",4087841945).cljs$core$IFn$_invoke$arity$1(G__6059),null,cljs.core.dissoc.call(null,G__6059,new cljs.core.Keyword(null,"gl","gl",1013907543),new cljs.core.Keyword(null,"id","id",1013907597),new cljs.core.Keyword(null,"channels","channels",2446530370),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"target","target",4427965699),new cljs.core.Keyword(null,"width","width",1127031096),new cljs.core.Keyword(null,"height","height",4087841945))));
});
thi.ng.geom.webgl.buffers.make_texture2d = (function make_texture2d(gl,p__6065){var map__6067 = p__6065;var map__6067__$1 = ((cljs.core.seq_QMARK_.call(null,map__6067))?cljs.core.apply.call(null,cljs.core.hash_map,map__6067):map__6067);var opts = map__6067__$1;var height = cljs.core.get.call(null,map__6067__$1,new cljs.core.Keyword(null,"height","height",4087841945));var width = cljs.core.get.call(null,map__6067__$1,new cljs.core.Keyword(null,"width","width",1127031096));var target = cljs.core.get.call(null,map__6067__$1,new cljs.core.Keyword(null,"target","target",4427965699));var type = cljs.core.get.call(null,map__6067__$1,new cljs.core.Keyword(null,"type","type",1017479852));var channels = cljs.core.get.call(null,map__6067__$1,new cljs.core.Keyword(null,"channels","channels",2446530370));var tex = (new thi.ng.geom.webgl.buffers.Texture2D(gl,gl.createTexture(),(function (){var or__3481__auto__ = channels;if(cljs.core.truth_(or__3481__auto__))
{return or__3481__auto__;
} else
{return thi.ng.geom.webgl.core.rgb;
}
})(),(function (){var or__3481__auto__ = type;if(cljs.core.truth_(or__3481__auto__))
{return or__3481__auto__;
} else
{return thi.ng.geom.webgl.core.unsigned_byte;
}
})(),(function (){var or__3481__auto__ = target;if(cljs.core.truth_(or__3481__auto__))
{return or__3481__auto__;
} else
{return thi.ng.geom.webgl.core.texture_2d;
}
})(),null,null));if(cljs.core.truth_((function (){var and__3469__auto__ = width;if(cljs.core.truth_(and__3469__auto__))
{return height;
} else
{return and__3469__auto__;
}
})()))
{thi.ng.geom.webgl.core.bind.call(null,tex,0);
return thi.ng.geom.webgl.core.configure.call(null,tex,opts);
} else
{return tex;
}
});