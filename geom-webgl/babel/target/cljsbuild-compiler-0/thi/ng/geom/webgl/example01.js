// Compiled by ClojureScript 0.0-2202
goog.provide('thi.ng.geom.webgl.example01');
goog.require('cljs.core');
goog.require('thi.ng.geom.core.vector');
goog.require('thi.ng.geom.core.matrix');
goog.require('thi.ng.geom.core.matrix');
goog.require('thi.ng.geom.webgl.shaders');
goog.require('thi.ng.geom.webgl.shaders.shadow');
goog.require('thi.ng.geom.mesh.csg');
goog.require('thi.ng.geom.aabb');
goog.require('weasel.repl');
goog.require('thi.ng.geom.webgl.utils');
goog.require('thi.ng.geom.webgl.buffers');
goog.require('thi.ng.geom.webgl.animator');
goog.require('thi.ng.geom.webgl.shaders.spotlight');
goog.require('thi.ng.geom.core');
goog.require('thi.ng.geom.webgl.arrays');
goog.require('thi.ng.geom.core.vector');
goog.require('thi.ng.geom.webgl.buffers');
goog.require('thi.ng.geom.webgl.shaders.spotlight');
goog.require('thi.ng.geom.core.vector');
goog.require('thi.ng.geom.mesh.csg');
goog.require('thi.ng.geom.webgl.shaders.phong');
goog.require('thi.ng.common.math.core');
goog.require('thi.ng.geom.types');
goog.require('thi.ng.geom.gmesh');
goog.require('thi.ng.common.error');
goog.require('thi.ng.geom.webgl.shaders.shadow');
goog.require('thi.ng.geom.sphere');
goog.require('thi.ng.geom.sphere');
goog.require('thi.ng.geom.webgl.shaders');
goog.require('thi.ng.geom.webgl.shaders.phong');
goog.require('thi.ng.geom.webgl.utils');
goog.require('thi.ng.geom.core');
goog.require('thi.ng.geom.webgl.core');
goog.require('thi.ng.geom.webgl.animator');
goog.require('thi.ng.common.math.core');
goog.require('thi.ng.geom.webgl.arrays');
goog.require('thi.ng.geom.aabb');
goog.require('thi.ng.geom.core.matrix');
goog.require('thi.ng.geom.webgl.core');
goog.require('weasel.repl');
goog.require('thi.ng.common.error');
thi.ng.geom.webgl.example01.ilios = (function ilios(){var p = thi.ng.geom.core.as_mesh.call(null,thi.ng.geom.core.center.call(null,thi.ng.geom.aabb.aabb.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.6,0.6,1.2], null)),thi.ng.geom.core.vector.vec3.call(null,0,0,0.6)));var p1 = thi.ng.geom.core.as_mesh.call(null,thi.ng.geom.core.center.call(null,thi.ng.geom.aabb.aabb.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.5,0.5,1.2], null)),thi.ng.geom.core.vector.vec3.call(null,0,0,0.55)));var p2 = thi.ng.geom.core.as_mesh.call(null,thi.ng.geom.core.center.call(null,thi.ng.geom.aabb.aabb.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.5,0.7,0.5], null)),thi.ng.geom.core.vector.vec3.call(null,0,0,0.3)));var p2_STAR_ = thi.ng.geom.core.transform.call(null,p2,thi.ng.geom.core.rotate_z.call(null,thi.ng.geom.core.matrix.M44,thi.ng.common.math.core.HALF_PI));var p3 = thi.ng.geom.core.as_mesh.call(null,thi.ng.geom.core.center.call(null,thi.ng.geom.aabb.aabb.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.7,0.5,0.7], null)),thi.ng.geom.core.vector.vec3.call(null,0,0.3,0.95)));var p3_STAR_ = thi.ng.geom.core.transform.call(null,p3,thi.ng.geom.core.translate.call(null,thi.ng.geom.core.matrix.M44,0,-0.6,0));return thi.ng.geom.core.transform.call(null,thi.ng.geom.mesh.csg.csg__GT_mesh.call(null,cljs.core.reduce.call(null,thi.ng.geom.mesh.csg.subtract,cljs.core.map.call(null,thi.ng.geom.mesh.csg.mesh__GT_csg,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,p1,p2,p2_STAR_,p3,p3_STAR_], null)))),thi.ng.geom.core.rotate_x.call(null,thi.ng.geom.core.matrix.M44,(- thi.ng.common.math.core.HALF_PI)));
});
thi.ng.geom.webgl.example01.csg_mesh1 = (function csg_mesh1(){var ma = thi.ng.geom.core.as_mesh.call(null,thi.ng.geom.aabb.aabb.call(null,1));var mb = thi.ng.geom.core.as_mesh.call(null,thi.ng.geom.sphere.sphere.call(null,1),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"res","res",1014017042),10], null));var mc = thi.ng.geom.core.as_mesh.call(null,thi.ng.geom.sphere.sphere.call(null,0.9),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"res","res",1014017042),10], null));var mesh = thi.ng.geom.core.transform.call(null,thi.ng.geom.core.center.call(null,thi.ng.geom.mesh.csg.csg__GT_mesh.call(null,thi.ng.geom.mesh.csg.subtract.call(null,thi.ng.geom.mesh.csg.intersect.call(null,thi.ng.geom.mesh.csg.mesh__GT_csg.call(null,ma),thi.ng.geom.mesh.csg.mesh__GT_csg.call(null,mb)),thi.ng.geom.mesh.csg.mesh__GT_csg.call(null,mc)))),thi.ng.geom.core.scale.call(null,thi.ng.geom.core.matrix.M44,0.75));return null;
});
thi.ng.geom.webgl.example01.demo = (function demo(){cljs.core.enable_console_print_BANG_.call(null);
var gl = thi.ng.geom.webgl.core.gl_context.call(null,"main");var light_shader = thi.ng.geom.webgl.shaders.make_shader_from_spec.call(null,gl,thi.ng.geom.webgl.shaders.shadow.light_pass_spec);var cam_shader = thi.ng.geom.webgl.shaders.make_shader_from_spec.call(null,gl,thi.ng.geom.webgl.shaders.shadow.cam_pass_spec);var mesh = thi.ng.geom.webgl.example01.ilios.call(null);var room = thi.ng.geom.core.flip.call(null,thi.ng.geom.core.as_mesh.call(null,thi.ng.geom.core.center.call(null,thi.ng.geom.aabb.aabb.call(null,5),thi.ng.geom.core.vector.vec3.call(null,0,2.4,0))));var mesh__$1 = thi.ng.geom.core.into.call(null,mesh,room);var spec = thi.ng.geom.webgl.core.as_webgl_buffer_spec.call(null,mesh__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tessellate","tessellate",2361899792),true,new cljs.core.Keyword(null,"fnormals","fnormals",519550136),true], null));var model = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"attribs","attribs",4634025563),thi.ng.geom.webgl.buffers.make_attribute_buffers.call(null,gl,thi.ng.geom.webgl.core.static_draw,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",1761709211),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",1016980252),new cljs.core.Keyword(null,"vertices","vertices",3324730219).cljs$core$IFn$_invoke$arity$1(spec),new cljs.core.Keyword(null,"size","size",1017434995),3], null),new cljs.core.Keyword(null,"normal","normal",4269125721),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",1016980252),new cljs.core.Keyword(null,"normals","normals",3141522398).cljs$core$IFn$_invoke$arity$1(spec),new cljs.core.Keyword(null,"size","size",1017434995),3], null)], null)),new cljs.core.Keyword(null,"mode","mode",1017261333),thi.ng.geom.webgl.core.triangles,new cljs.core.Keyword(null,"count","count",1108755585),new cljs.core.Keyword(null,"num-vertices","num-vertices",877840850).cljs$core$IFn$_invoke$arity$1(spec)], null);var view_rect = thi.ng.geom.webgl.core.get_viewport_rect.call(null,gl);var cam_proj = thi.ng.geom.webgl.core.perspective.call(null,45,view_rect,0.1,100.0);var light_proj = thi.ng.geom.webgl.core.perspective.call(null,45,1,0.01,100);var light_fbo = thi.ng.geom.webgl.shaders.shadow.init_light_fbo.call(null,gl,256);var timer = cljs.core.atom.call(null,0);var fps = document.getElementById("fps");thi.ng.geom.webgl.animator.animate.call(null,((function (gl,light_shader,cam_shader,mesh,room,mesh__$1,spec,model,view_rect,cam_proj,light_proj,light_fbo,timer,fps){
return (function (t){var y = thi.ng.common.math.core.map_interval.call(null,Math.sin.call(null,(t * 0.5)),-1,1,0,3);var cam_view = thi.ng.geom.core.matrix.look_at.call(null,thi.ng.geom.core.rotate_y.call(null,thi.ng.geom.core.vector.vec3.call(null,0,y,2),(t * 0.4)),thi.ng.geom.core.vector.vec3.call(null,0,0.6,0),thi.ng.geom.core.vector.vec3.call(null,0,1,0));var model_tx = thi.ng.geom.core.rotate_x.call(null,thi.ng.geom.core.translate.call(null,thi.ng.geom.core.matrix.M44,0,0,0),(0 * 0.15));var cone_angle = thi.ng.common.math.core.map_interval.call(null,Math.cos.call(null,(t * 0.3)),-1,1,20,150);var l_rotx = (thi.ng.common.math.core.map_interval.call(null,Math.cos.call(null,(t * 0.7)),-1,1,0.15,0.85) * thi.ng.common.math.core.PI);var light_view = thi.ng.geom.core.rotate_y.call(null,thi.ng.geom.core.rotate_x.call(null,thi.ng.geom.core.translate.call(null,thi.ng.geom.core.matrix.M44,0,0,-2.5),l_rotx),-0.6);var light_rot = thi.ng.geom.core.matrix.matrix44__GT_matrix33_rot.call(null,light_view);thi.ng.geom.webgl.shaders.shadow.draw_light_pass.call(null,gl,light_fbo,((function (y,cam_view,model_tx,cone_angle,l_rotx,light_view,light_rot,gl,light_shader,cam_shader,mesh,room,mesh__$1,spec,model,view_rect,cam_proj,light_proj,light_fbo,timer,fps){
return (function (){return thi.ng.geom.webgl.buffers.draw_arrays.call(null,gl,cljs.core.assoc.call(null,model,new cljs.core.Keyword(null,"shader","shader",4405291863),light_shader,new cljs.core.Keyword(null,"attribs","attribs",4634025563),cljs.core.select_keys.call(null,new cljs.core.Keyword(null,"attribs","attribs",4634025563).cljs$core$IFn$_invoke$arity$1(model),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",1761709211)], null)),new cljs.core.Keyword(null,"uniforms","uniforms",709120177),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"model","model",1117974171),model_tx,new cljs.core.Keyword(null,"view","view",1017523735),light_view,new cljs.core.Keyword(null,"proj","proj",1017353935),light_proj], null)));
});})(y,cam_view,model_tx,cone_angle,l_rotx,light_view,light_rot,gl,light_shader,cam_shader,mesh,room,mesh__$1,spec,model,view_rect,cam_proj,light_proj,light_fbo,timer,fps))
);
thi.ng.geom.webgl.core.set_viewport.call(null,gl,view_rect);
thi.ng.geom.webgl.core.clear_color_buffer.call(null,gl,0.08,0.1,0.12,1.0);
thi.ng.geom.webgl.shaders.shadow.draw_cam_pass.call(null,gl,new cljs.core.Keyword(null,"tex","tex",1014018969).cljs$core$IFn$_invoke$arity$1(light_fbo),((function (y,cam_view,model_tx,cone_angle,l_rotx,light_view,light_rot,gl,light_shader,cam_shader,mesh,room,mesh__$1,spec,model,view_rect,cam_proj,light_proj,light_fbo,timer,fps){
return (function (uniforms){return thi.ng.geom.webgl.buffers.draw_arrays.call(null,gl,cljs.core.assoc.call(null,model,new cljs.core.Keyword(null,"shader","shader",4405291863),cam_shader,new cljs.core.Keyword(null,"uniforms","uniforms",709120177),cljs.core.assoc.call(null,uniforms,new cljs.core.Keyword(null,"model","model",1117974171),model_tx,new cljs.core.Keyword(null,"view","view",1017523735),cam_view,new cljs.core.Keyword(null,"proj","proj",1017353935),cam_proj,new cljs.core.Keyword(null,"lightView","lightView",1699634253),light_view,new cljs.core.Keyword(null,"lightProj","lightProj",1699464453),light_proj,new cljs.core.Keyword(null,"lightRot","lightRot",2005852243),light_rot,new cljs.core.Keyword(null,"coneAngle","coneAngle",4439067362),cone_angle)));
});})(y,cam_view,model_tx,cone_angle,l_rotx,light_view,light_rot,gl,light_shader,cam_shader,mesh,room,mesh__$1,spec,model,view_rect,cam_proj,light_proj,light_fbo,timer,fps))
);
fps.textContent = [cljs.core.str((new Number((1 / (t - cljs.core.deref.call(null,timer))))).toFixed(2)),cljs.core.str("fps")].join('');
cljs.core.reset_BANG_.call(null,timer,t);
return true;
});})(gl,light_shader,cam_shader,mesh,room,mesh__$1,spec,model,view_rect,cam_proj,light_proj,light_fbo,timer,fps))
);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ctx","ctx",1014003097),gl], null);
});
goog.exportSymbol('thi.ng.geom.webgl.example01.demo', thi.ng.geom.webgl.example01.demo);
weasel.repl.connect.call(null,"ws://localhost:9001",new cljs.core.Keyword(null,"verbose","verbose",1365011700),true);
