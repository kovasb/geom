// Compiled by ClojureScript 0.0-2202
goog.provide('thi.ng.geom.webgl.shaders');
goog.require('cljs.core');
goog.require('thi.ng.geom.webgl.arrays');
goog.require('thi.ng.geom.webgl.utils');
goog.require('thi.ng.common.error');
goog.require('thi.ng.geom.webgl.utils');
goog.require('thi.ng.geom.webgl.core');
goog.require('clojure.string');
goog.require('thi.ng.geom.webgl.arrays');
goog.require('clojure.string');
goog.require('thi.ng.geom.webgl.core');
goog.require('thi.ng.common.error');
thi.ng.geom.webgl.shaders.uniform_types = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"bvec3","bvec3",1108024819),new cljs.core.Keyword(null,"int","int",1014008673),new cljs.core.Keyword(null,"mat3","mat3",1017248325),new cljs.core.Keyword(null,"vec3","vec3",1017519761),new cljs.core.Keyword(null,"float","float",1111430606),new cljs.core.Keyword(null,"ivec4","ivec4",1114489467),new cljs.core.Keyword(null,"mat2","mat2",1017248324),new cljs.core.Keyword(null,"ivec2","ivec2",1114489465),new cljs.core.Keyword(null,"vec4","vec4",1017519762),new cljs.core.Keyword(null,"vec2","vec2",1017519760),new cljs.core.Keyword(null,"bvec2","bvec2",1108024818),new cljs.core.Keyword(null,"mat4","mat4",1017248326),new cljs.core.Keyword(null,"bvec4","bvec4",1108024820),new cljs.core.Keyword(null,"bool","bool",1016933980),new cljs.core.Keyword(null,"sampler2D","sampler2D",2126927820),new cljs.core.Keyword(null,"ivec3","ivec3",1114489466)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["3iv",thi.ng.geom.webgl.arrays.int32], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["1iv",thi.ng.geom.webgl.arrays.int32], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Matrix3fv",thi.ng.geom.webgl.arrays.float32], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["3fv",thi.ng.geom.webgl.arrays.float32], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["1fv",thi.ng.geom.webgl.arrays.float32], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["4iv",thi.ng.geom.webgl.arrays.int32], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Matrix2fv",thi.ng.geom.webgl.arrays.float32], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["2iv",thi.ng.geom.webgl.arrays.int32], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["4fv",thi.ng.geom.webgl.arrays.float32], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["2fv",thi.ng.geom.webgl.arrays.float32], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["2iv",thi.ng.geom.webgl.arrays.int32], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Matrix4fv",thi.ng.geom.webgl.arrays.float32], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["4iv",thi.ng.geom.webgl.arrays.int32], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["1iv",thi.ng.geom.webgl.arrays.int32], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["1iv",thi.ng.geom.webgl.arrays.int32], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["3iv",thi.ng.geom.webgl.arrays.int32], null)]);
thi.ng.geom.webgl.shaders.init_shader_uniforms = (function init_shader_uniforms(gl,prog,uniforms){return cljs.core.reduce.call(null,(function (umap,p__10402){var vec__10403 = p__10402;var id = cljs.core.nth.call(null,vec__10403,0,null);var type = cljs.core.nth.call(null,vec__10403,1,null);var loc = gl.getUniformLocation(prog,cljs.core.name.call(null,id));var vec__10404 = ((cljs.core.sequential_QMARK_.call(null,type))?type:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [type], null));var type__$1 = cljs.core.nth.call(null,vec__10404,0,null);var transpose_QMARK_ = cljs.core.nth.call(null,vec__10404,1,null);var transpose_QMARK___$1 = cljs.core.boolean$.call(null,transpose_QMARK_);var vec__10405 = thi.ng.geom.webgl.shaders.uniform_types.call(null,type__$1);var u_type = cljs.core.nth.call(null,vec__10405,0,null);var u_cast = cljs.core.nth.call(null,vec__10405,1,null);var setter = (gl[[cljs.core.str("uniform"),cljs.core.str(u_type)].join('')]);return cljs.core.assoc.call(null,umap,id,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),type__$1,new cljs.core.Keyword(null,"setter","setter",4403102705),(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"mat3","mat3",1017248325),null,new cljs.core.Keyword(null,"mat2","mat2",1017248324),null,new cljs.core.Keyword(null,"mat4","mat4",1017248326),null], null), null).call(null,type__$1))?((function (loc,vec__10404,type__$1,transpose_QMARK_,transpose_QMARK___$1,vec__10405,u_type,u_cast,setter,vec__10403,id,type){
return (function (x){return setter.call(gl,loc,transpose_QMARK___$1,((thi.ng.geom.webgl.arrays.typed_array_QMARK_.call(null,x))?x:u_cast.call(null,x)));
});})(loc,vec__10404,type__$1,transpose_QMARK_,transpose_QMARK___$1,vec__10405,u_type,u_cast,setter,vec__10403,id,type))
:((function (loc,vec__10404,type__$1,transpose_QMARK_,transpose_QMARK___$1,vec__10405,u_type,u_cast,setter,vec__10403,id,type){
return (function (x){return setter.call(gl,loc,((thi.ng.geom.webgl.arrays.typed_array_QMARK_.call(null,x))?x:u_cast.call(null,((typeof x === 'number')?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null):x))));
});})(loc,vec__10404,type__$1,transpose_QMARK_,transpose_QMARK___$1,vec__10405,u_type,u_cast,setter,vec__10403,id,type))
),new cljs.core.Keyword(null,"loc","loc",1014011570),loc], null));
}),cljs.core.PersistentArrayMap.EMPTY,uniforms);
});
thi.ng.geom.webgl.shaders.set_uniform = (function set_uniform(shader,id,val){var temp__4124__auto__ = cljs.core.get_in.call(null,shader,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"uniforms","uniforms",709120177),id], null));if(cljs.core.truth_(temp__4124__auto__))
{var u_spec = temp__4124__auto__;return new cljs.core.Keyword(null,"setter","setter",4403102705).cljs$core$IFn$_invoke$arity$1(u_spec).call(null,val);
} else
{return thi.ng.common.error.illegal_arg_BANG_.call(null,[cljs.core.str("Unknown shader uniform: "),cljs.core.str(id)].join(''));
}
});
thi.ng.geom.webgl.shaders.init_shader_attribs = (function init_shader_attribs(gl,prog,attribs){return cljs.core.reduce.call(null,(function (amap,id){return cljs.core.assoc.call(null,amap,id,gl.getAttribLocation(prog,cljs.core.name.call(null,id)));
}),cljs.core.PersistentArrayMap.EMPTY,attribs);
});
thi.ng.geom.webgl.shaders.set_attribute = (function set_attribute(gl,shader,id,p__10406){var map__10409 = p__10406;var map__10409__$1 = ((cljs.core.seq_QMARK_.call(null,map__10409))?cljs.core.apply.call(null,cljs.core.hash_map,map__10409):map__10409);var offset = cljs.core.get.call(null,map__10409__$1,new cljs.core.Keyword(null,"offset","offset",4289091589));var normalized_QMARK_ = cljs.core.get.call(null,map__10409__$1,new cljs.core.Keyword(null,"normalized?","normalized?",762171290));var type = cljs.core.get.call(null,map__10409__$1,new cljs.core.Keyword(null,"type","type",1017479852));var size = cljs.core.get.call(null,map__10409__$1,new cljs.core.Keyword(null,"size","size",1017434995));var stride = cljs.core.get.call(null,map__10409__$1,new cljs.core.Keyword(null,"stride","stride",4416885323));var buffer = cljs.core.get.call(null,map__10409__$1,new cljs.core.Keyword(null,"buffer","buffer",3930752946));var temp__4124__auto__ = cljs.core.get_in.call(null,shader,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attribs","attribs",4634025563),id], null));if(cljs.core.truth_(temp__4124__auto__))
{var loc = temp__4124__auto__;var G__10410 = gl;G__10410.bindBuffer(thi.ng.geom.webgl.core.array_buffer,buffer);
G__10410.enableVertexAttribArray(loc);
G__10410.vertexAttribPointer(loc,size,(function (){var or__4953__auto__ = type;if(cljs.core.truth_(or__4953__auto__))
{return or__4953__auto__;
} else
{return thi.ng.geom.webgl.core.float$;
}
})(),cljs.core.boolean$.call(null,normalized_QMARK_),(function (){var or__4953__auto__ = stride;if(cljs.core.truth_(or__4953__auto__))
{return or__4953__auto__;
} else
{return 0;
}
})(),(function (){var or__4953__auto__ = offset;if(cljs.core.truth_(or__4953__auto__))
{return or__4953__auto__;
} else
{return 0;
}
})());
return G__10410;
} else
{return thi.ng.common.error.illegal_arg_BANG_.call(null,[cljs.core.str("Unknown shader attribute: "),cljs.core.str(id)].join(''));
}
});
thi.ng.geom.webgl.shaders.disable_attribute = (function disable_attribute(gl,shader,id){var temp__4124__auto__ = cljs.core.get_in.call(null,shader,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attribs","attribs",4634025563),id], null));if(cljs.core.truth_(temp__4124__auto__))
{var loc = temp__4124__auto__;gl.disableVertexAttribArray(loc);
return gl;
} else
{return thi.ng.common.error.illegal_arg_BANG_.call(null,[cljs.core.str("Unknown shader attribute: "),cljs.core.str(id)].join(''));
}
});
thi.ng.geom.webgl.shaders.header_prefix = "\n    #ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp int;\n    precision highp float;\n    #else\n    precision mediump int;\n    precision mediump float;\n    #endif\n    #define PI      3.141592653589793\n    #define TWO_PI  6.283185307179586\n    #define HALF_PI 1.570796326794896\n    #define RAD     0.008726646259972\n    ";
thi.ng.geom.webgl.shaders.compile_glsl_vars = (function compile_glsl_vars(qualifier,coll){return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (p__10413){var vec__10414 = p__10413;var id = cljs.core.nth.call(null,vec__10414,0,null);var type = cljs.core.nth.call(null,vec__10414,1,null);return [cljs.core.str(qualifier),cljs.core.str(" "),cljs.core.str(cljs.core.name.call(null,type)),cljs.core.str(" "),cljs.core.str(cljs.core.name.call(null,id)),cljs.core.str(";\n")].join('');
}),coll));
});
thi.ng.geom.webgl.shaders.parse_and_throw_error = (function parse_and_throw_error(gl,shader,src){var src_lines = cljs.core.vec.call(null,clojure.string.split_lines.call(null,src));var errors = clojure.string.join.call(null,"\n",cljs.core.filter.call(null,cljs.core.identity,cljs.core.map.call(null,((function (src_lines){
return (function (line){var vec__10416 = cljs.core.re_find.call(null,/ERROR: \d+:(\d+): (.*)/,line);var _ = cljs.core.nth.call(null,vec__10416,0,null);var ln = cljs.core.nth.call(null,vec__10416,1,null);var msg = cljs.core.nth.call(null,vec__10416,2,null);if(cljs.core.truth_(ln))
{return [cljs.core.str("line "),cljs.core.str(ln),cljs.core.str(": "),cljs.core.str(msg),cljs.core.str("\n"),cljs.core.str(src_lines.call(null,(parseInt(ln,10) - 1)))].join('');
} else
{return null;
}
});})(src_lines))
,clojure.string.split_lines.call(null,gl.getShaderInfoLog(shader)))));gl.deleteShader(shader);
return thi.ng.common.error.throw_BANG_.call(null,[cljs.core.str("Error compiling shader:\n"),cljs.core.str(errors)].join(''));
});
thi.ng.geom.webgl.shaders.compile_shader = (function compile_shader(gl,src,type){var temp__4124__auto__ = gl.createShader(type);if(cljs.core.truth_(temp__4124__auto__))
{var shader = temp__4124__auto__;gl.shaderSource(shader,src);
gl.compileShader(shader);
if(cljs.core.truth_(gl.getShaderParameter(shader,thi.ng.geom.webgl.core.compile_status)))
{return shader;
} else
{return thi.ng.geom.webgl.shaders.parse_and_throw_error.call(null,gl,shader,src);
}
} else
{return thi.ng.common.error.throw_BANG_.call(null,"Can't create shader");
}
});
thi.ng.geom.webgl.shaders.make_shader_from_spec = (function make_shader_from_spec(gl,p__10417){var map__10421 = p__10417;var map__10421__$1 = ((cljs.core.seq_QMARK_.call(null,map__10421))?cljs.core.apply.call(null,cljs.core.hash_map,map__10421):map__10421);var prefix = cljs.core.get.call(null,map__10421__$1,new cljs.core.Keyword(null,"prefix","prefix",4328760836));var varying = cljs.core.get.call(null,map__10421__$1,new cljs.core.Keyword(null,"varying","varying",1251174370));var attribs = cljs.core.get.call(null,map__10421__$1,new cljs.core.Keyword(null,"attribs","attribs",4634025563));var uniforms = cljs.core.get.call(null,map__10421__$1,new cljs.core.Keyword(null,"uniforms","uniforms",709120177));var fs = cljs.core.get.call(null,map__10421__$1,new cljs.core.Keyword(null,"fs","fs",1013907519));var vs = cljs.core.get.call(null,map__10421__$1,new cljs.core.Keyword(null,"vs","vs",1013908015));var u_src = thi.ng.geom.webgl.shaders.compile_glsl_vars.call(null,"uniform",uniforms);var a_src = thi.ng.geom.webgl.shaders.compile_glsl_vars.call(null,"attribute",attribs);var v_src = thi.ng.geom.webgl.shaders.compile_glsl_vars.call(null,"varying",varying);var prefix__$1 = [cljs.core.str((function (){var or__4953__auto__ = prefix;if(cljs.core.truth_(or__4953__auto__))
{return or__4953__auto__;
} else
{return thi.ng.geom.webgl.shaders.header_prefix;
}
})()),cljs.core.str(u_src),cljs.core.str(v_src)].join('');var vs__$1 = thi.ng.geom.webgl.shaders.compile_shader.call(null,gl,[cljs.core.str(prefix__$1),cljs.core.str(a_src),cljs.core.str(vs)].join(''),thi.ng.geom.webgl.core.vertex_shader);var fs__$1 = thi.ng.geom.webgl.shaders.compile_shader.call(null,gl,[cljs.core.str(prefix__$1),cljs.core.str(fs)].join(''),thi.ng.geom.webgl.core.fragment_shader);var prog = gl.createProgram();var G__10422_10424 = gl;G__10422_10424.attachShader(prog,vs__$1);
G__10422_10424.attachShader(prog,fs__$1);
G__10422_10424.linkProgram(prog);
if(cljs.core.truth_(gl.getProgramParameter(prog,thi.ng.geom.webgl.core.link_status)))
{var uniforms__$1 = thi.ng.geom.webgl.shaders.init_shader_uniforms.call(null,gl,prog,uniforms);var attribs__$1 = thi.ng.geom.webgl.shaders.init_shader_attribs.call(null,gl,prog,cljs.core.keys.call(null,attribs));var G__10423_10425 = gl;G__10423_10425.deleteShader(vs__$1);
G__10423_10425.deleteShader(fs__$1);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"program","program",704516598),prog,new cljs.core.Keyword(null,"uniforms","uniforms",709120177),uniforms__$1,new cljs.core.Keyword(null,"attribs","attribs",4634025563),attribs__$1,new cljs.core.Keyword(null,"varying","varying",1251174370),varying], null);
} else
{return thi.ng.common.error.throw_BANG_.call(null,[cljs.core.str("Shader failed to link:"),cljs.core.str(gl.getProgramInfoLog(prog))].join(''));
}
});
thi.ng.geom.webgl.shaders.make_shader_from_dom = (function make_shader_from_dom(gl,p__10426){var map__10428 = p__10426;var map__10428__$1 = ((cljs.core.seq_QMARK_.call(null,map__10428))?cljs.core.apply.call(null,cljs.core.hash_map,map__10428):map__10428);var spec = map__10428__$1;var fs = cljs.core.get.call(null,map__10428__$1,new cljs.core.Keyword(null,"fs","fs",1013907519));var vs = cljs.core.get.call(null,map__10428__$1,new cljs.core.Keyword(null,"vs","vs",1013908015));return thi.ng.geom.webgl.shaders.make_shader_from_spec.call(null,gl,cljs.core.assoc.call(null,spec,new cljs.core.Keyword(null,"vs","vs",1013908015),thi.ng.geom.webgl.utils.get_script_text.call(null,vs),new cljs.core.Keyword(null,"fs","fs",1013907519),thi.ng.geom.webgl.utils.get_script_text.call(null,fs)));
});
