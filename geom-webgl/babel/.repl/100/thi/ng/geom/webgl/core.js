// Compiled by ClojureScript 0.0-2202
goog.provide('thi.ng.geom.webgl.core');
goog.require('cljs.core');
goog.require('thi.ng.geom.core.vector');
goog.require('thi.ng.geom.core.matrix');
goog.require('thi.ng.geom.core.utils');
goog.require('thi.ng.geom.core');
goog.require('thi.ng.geom.core.utils');
goog.require('thi.ng.geom.rect');
goog.require('thi.ng.geom.webgl.arrays');
goog.require('thi.ng.geom.core.vector');
goog.require('thi.ng.geom.gmesh');
goog.require('thi.ng.geom.core.vector');
goog.require('thi.ng.geom.webgl.utils');
goog.require('thi.ng.geom.types');
goog.require('thi.ng.geom.gmesh');
goog.require('thi.ng.common.error');
goog.require('thi.ng.geom.rect');
goog.require('thi.ng.geom.webgl.utils');
goog.require('thi.ng.geom.core');
goog.require('thi.ng.geom.webgl.arrays');
goog.require('thi.ng.geom.core.matrix');
goog.require('thi.ng.common.error');
thi.ng.geom.webgl.core.active_attributes = 35721;
thi.ng.geom.webgl.core.active_texture = 34016;
thi.ng.geom.webgl.core.active_uniforms = 35718;
thi.ng.geom.webgl.core.aliased_line_width_range = 33902;
thi.ng.geom.webgl.core.aliased_point_size_range = 33901;
thi.ng.geom.webgl.core.alpha = 6406;
thi.ng.geom.webgl.core.alpha_bits = 3413;
thi.ng.geom.webgl.core.always = 519;
thi.ng.geom.webgl.core.array_buffer = 34962;
thi.ng.geom.webgl.core.array_buffer_binding = 34964;
thi.ng.geom.webgl.core.attached_shaders = 35717;
thi.ng.geom.webgl.core.back = 1029;
thi.ng.geom.webgl.core.blend = 3042;
thi.ng.geom.webgl.core.blend_color = 32773;
thi.ng.geom.webgl.core.blend_dst_alpha = 32970;
thi.ng.geom.webgl.core.blend_dst_rgb = 32968;
thi.ng.geom.webgl.core.blend_equation = 32777;
thi.ng.geom.webgl.core.blend_equation_alpha = 34877;
thi.ng.geom.webgl.core.blend_equation_rgb = 32777;
thi.ng.geom.webgl.core.blend_src_alpha = 32971;
thi.ng.geom.webgl.core.blend_src_rgb = 32969;
thi.ng.geom.webgl.core.blue_bits = 3412;
thi.ng.geom.webgl.core.bool = 35670;
thi.ng.geom.webgl.core.bool_vec2 = 35671;
thi.ng.geom.webgl.core.bool_vec3 = 35672;
thi.ng.geom.webgl.core.bool_vec4 = 35673;
thi.ng.geom.webgl.core.browser_default_webgl = 37444;
thi.ng.geom.webgl.core.buffer_size = 34660;
thi.ng.geom.webgl.core.buffer_usage = 34661;
thi.ng.geom.webgl.core.byte$ = 5120;
thi.ng.geom.webgl.core.ccw = 2305;
thi.ng.geom.webgl.core.clamp_to_edge = 33071;
thi.ng.geom.webgl.core.color_attachment0 = 36064;
thi.ng.geom.webgl.core.color_buffer_bit = 16384;
thi.ng.geom.webgl.core.color_clear_value = 3106;
thi.ng.geom.webgl.core.color_writemask = 3107;
thi.ng.geom.webgl.core.compile_status = 35713;
thi.ng.geom.webgl.core.compressed_texture_formats = 34467;
thi.ng.geom.webgl.core.constant_alpha = 32771;
thi.ng.geom.webgl.core.constant_color = 32769;
thi.ng.geom.webgl.core.context_lost_webgl = 37442;
thi.ng.geom.webgl.core.cull_face = 2884;
thi.ng.geom.webgl.core.cull_face_mode = 2885;
thi.ng.geom.webgl.core.current_program = 35725;
thi.ng.geom.webgl.core.current_vertex_attrib = 34342;
thi.ng.geom.webgl.core.cw = 2304;
thi.ng.geom.webgl.core.decr = 7683;
thi.ng.geom.webgl.core.decr_wrap = 34056;
thi.ng.geom.webgl.core.delete_status = 35712;
thi.ng.geom.webgl.core.depth_attachment = 36096;
thi.ng.geom.webgl.core.depth_bits = 3414;
thi.ng.geom.webgl.core.depth_buffer_bit = 256;
thi.ng.geom.webgl.core.depth_clear_value = 2931;
thi.ng.geom.webgl.core.depth_component = 6402;
thi.ng.geom.webgl.core.depth_component16 = 33189;
thi.ng.geom.webgl.core.depth_func = 2932;
thi.ng.geom.webgl.core.depth_range = 2928;
thi.ng.geom.webgl.core.depth_stencil = 34041;
thi.ng.geom.webgl.core.depth_stencil_attachment = 33306;
thi.ng.geom.webgl.core.depth_test = 2929;
thi.ng.geom.webgl.core.depth_writemask = 2930;
thi.ng.geom.webgl.core.dither = 3024;
thi.ng.geom.webgl.core.dont_care = 4352;
thi.ng.geom.webgl.core.drawing_buffer_height = 480;
thi.ng.geom.webgl.core.drawing_buffer_width = 640;
thi.ng.geom.webgl.core.dst_alpha = 772;
thi.ng.geom.webgl.core.dst_color = 774;
thi.ng.geom.webgl.core.dynamic_draw = 35048;
thi.ng.geom.webgl.core.element_array_buffer = 34963;
thi.ng.geom.webgl.core.element_array_buffer_binding = 34965;
thi.ng.geom.webgl.core.equal = 514;
thi.ng.geom.webgl.core.fastest = 4353;
thi.ng.geom.webgl.core.float$ = 5126;
thi.ng.geom.webgl.core.float_mat2 = 35674;
thi.ng.geom.webgl.core.float_mat3 = 35675;
thi.ng.geom.webgl.core.float_mat4 = 35676;
thi.ng.geom.webgl.core.float_vec2 = 35664;
thi.ng.geom.webgl.core.float_vec3 = 35665;
thi.ng.geom.webgl.core.float_vec4 = 35666;
thi.ng.geom.webgl.core.fragment_shader = 35632;
thi.ng.geom.webgl.core.framebuffer = 36160;
thi.ng.geom.webgl.core.framebuffer_attachment_object_name = 36049;
thi.ng.geom.webgl.core.framebuffer_attachment_object_type = 36048;
thi.ng.geom.webgl.core.framebuffer_attachment_texture_cube_map_face = 36051;
thi.ng.geom.webgl.core.framebuffer_attachment_texture_level = 36050;
thi.ng.geom.webgl.core.framebuffer_binding = 36006;
thi.ng.geom.webgl.core.framebuffer_complete = 36053;
thi.ng.geom.webgl.core.framebuffer_incomplete_attachment = 36054;
thi.ng.geom.webgl.core.framebuffer_incomplete_dimensions = 36057;
thi.ng.geom.webgl.core.framebuffer_incomplete_missing_attachment = 36055;
thi.ng.geom.webgl.core.framebuffer_unsupported = 36061;
thi.ng.geom.webgl.core.front = 1028;
thi.ng.geom.webgl.core.front_and_back = 1032;
thi.ng.geom.webgl.core.front_face = 2886;
thi.ng.geom.webgl.core.func_add = 32774;
thi.ng.geom.webgl.core.func_reverse_subtract = 32779;
thi.ng.geom.webgl.core.func_subtract = 32778;
thi.ng.geom.webgl.core.generate_mipmap_hint = 33170;
thi.ng.geom.webgl.core.gequal = 518;
thi.ng.geom.webgl.core.greater = 516;
thi.ng.geom.webgl.core.green_bits = 3411;
thi.ng.geom.webgl.core.high_float = 36338;
thi.ng.geom.webgl.core.high_int = 36341;
thi.ng.geom.webgl.core.incr = 7682;
thi.ng.geom.webgl.core.incr_wrap = 34055;
thi.ng.geom.webgl.core.int$ = 5124;
thi.ng.geom.webgl.core.int_vec2 = 35667;
thi.ng.geom.webgl.core.int_vec3 = 35668;
thi.ng.geom.webgl.core.int_vec4 = 35669;
thi.ng.geom.webgl.core.invalid_enum = 1280;
thi.ng.geom.webgl.core.invalid_framebuffer_operation = 1286;
thi.ng.geom.webgl.core.invalid_operation = 1282;
thi.ng.geom.webgl.core.invalid_value = 1281;
thi.ng.geom.webgl.core.invert = 5386;
thi.ng.geom.webgl.core.keep = 7680;
thi.ng.geom.webgl.core.lequal = 515;
thi.ng.geom.webgl.core.less = 513;
thi.ng.geom.webgl.core.line_loop = 2;
thi.ng.geom.webgl.core.line_strip = 3;
thi.ng.geom.webgl.core.line_width = 2849;
thi.ng.geom.webgl.core.linear = 9729;
thi.ng.geom.webgl.core.linear_mipmap_linear = 9987;
thi.ng.geom.webgl.core.linear_mipmap_nearest = 9985;
thi.ng.geom.webgl.core.lines = 1;
thi.ng.geom.webgl.core.link_status = 35714;
thi.ng.geom.webgl.core.low_float = 36336;
thi.ng.geom.webgl.core.low_int = 36339;
thi.ng.geom.webgl.core.luminance = 6409;
thi.ng.geom.webgl.core.luminance_alpha = 6410;
thi.ng.geom.webgl.core.max_combined_texture_image_units = 35661;
thi.ng.geom.webgl.core.max_cube_map_texture_size = 34076;
thi.ng.geom.webgl.core.max_fragment_uniform_vectors = 36349;
thi.ng.geom.webgl.core.max_renderbuffer_size = 34024;
thi.ng.geom.webgl.core.max_texture_image_units = 34930;
thi.ng.geom.webgl.core.max_texture_size = 3379;
thi.ng.geom.webgl.core.max_varying_vectors = 36348;
thi.ng.geom.webgl.core.max_vertex_attribs = 34921;
thi.ng.geom.webgl.core.max_vertex_texture_image_units = 35660;
thi.ng.geom.webgl.core.max_vertex_uniform_vectors = 36347;
thi.ng.geom.webgl.core.max_viewport_dims = 3386;
thi.ng.geom.webgl.core.medium_float = 36337;
thi.ng.geom.webgl.core.medium_int = 36340;
thi.ng.geom.webgl.core.mirrored_repeat = 33648;
thi.ng.geom.webgl.core.nearest = 9728;
thi.ng.geom.webgl.core.nearest_mipmap_linear = 9986;
thi.ng.geom.webgl.core.nearest_mipmap_nearest = 9984;
thi.ng.geom.webgl.core.never = 512;
thi.ng.geom.webgl.core.nicest = 4354;
thi.ng.geom.webgl.core.no_error = 0;
thi.ng.geom.webgl.core.none = 0;
thi.ng.geom.webgl.core.notequal = 517;
thi.ng.geom.webgl.core.one = 1;
thi.ng.geom.webgl.core.one_minus_constant_alpha = 32772;
thi.ng.geom.webgl.core.one_minus_constant_color = 32770;
thi.ng.geom.webgl.core.one_minus_dst_alpha = 773;
thi.ng.geom.webgl.core.one_minus_dst_color = 775;
thi.ng.geom.webgl.core.one_minus_src_alpha = 771;
thi.ng.geom.webgl.core.one_minus_src_color = 769;
thi.ng.geom.webgl.core.out_of_memory = 1285;
thi.ng.geom.webgl.core.pack_alignment = 3333;
thi.ng.geom.webgl.core.points = 0;
thi.ng.geom.webgl.core.polygon_offset_factor = 32824;
thi.ng.geom.webgl.core.polygon_offset_fill = 32823;
thi.ng.geom.webgl.core.polygon_offset_units = 10752;
thi.ng.geom.webgl.core.red_bits = 3410;
thi.ng.geom.webgl.core.renderbuffer = 36161;
thi.ng.geom.webgl.core.renderbuffer_alpha_size = 36179;
thi.ng.geom.webgl.core.renderbuffer_binding = 36007;
thi.ng.geom.webgl.core.renderbuffer_blue_size = 36178;
thi.ng.geom.webgl.core.renderbuffer_depth_size = 36180;
thi.ng.geom.webgl.core.renderbuffer_green_size = 36177;
thi.ng.geom.webgl.core.renderbuffer_height = 36163;
thi.ng.geom.webgl.core.renderbuffer_internal_format = 36164;
thi.ng.geom.webgl.core.renderbuffer_red_size = 36176;
thi.ng.geom.webgl.core.renderbuffer_stencil_size = 36181;
thi.ng.geom.webgl.core.renderbuffer_width = 36162;
thi.ng.geom.webgl.core.renderer = 7937;
thi.ng.geom.webgl.core.repeat = 10497;
thi.ng.geom.webgl.core.replace = 7681;
thi.ng.geom.webgl.core.rgb = 6407;
thi.ng.geom.webgl.core.rgb5_a1 = 32855;
thi.ng.geom.webgl.core.rgb565 = 36194;
thi.ng.geom.webgl.core.rgba = 6408;
thi.ng.geom.webgl.core.rgba4 = 32854;
thi.ng.geom.webgl.core.sample_alpha_to_coverage = 32926;
thi.ng.geom.webgl.core.sample_buffers = 32936;
thi.ng.geom.webgl.core.sample_coverage = 32928;
thi.ng.geom.webgl.core.sample_coverage_invert = 32939;
thi.ng.geom.webgl.core.sample_coverage_value = 32938;
thi.ng.geom.webgl.core.sampler_2d = 35678;
thi.ng.geom.webgl.core.sampler_cube = 35680;
thi.ng.geom.webgl.core.samples = 32937;
thi.ng.geom.webgl.core.scissor_box = 3088;
thi.ng.geom.webgl.core.scissor_test = 3089;
thi.ng.geom.webgl.core.shader_type = 35663;
thi.ng.geom.webgl.core.shading_language_version = 35724;
thi.ng.geom.webgl.core.short$ = 5122;
thi.ng.geom.webgl.core.src_alpha = 770;
thi.ng.geom.webgl.core.src_alpha_saturate = 776;
thi.ng.geom.webgl.core.src_color = 768;
thi.ng.geom.webgl.core.static_draw = 35044;
thi.ng.geom.webgl.core.stencil_attachment = 36128;
thi.ng.geom.webgl.core.stencil_back_fail = 34817;
thi.ng.geom.webgl.core.stencil_back_func = 34816;
thi.ng.geom.webgl.core.stencil_back_pass_depth_fail = 34818;
thi.ng.geom.webgl.core.stencil_back_pass_depth_pass = 34819;
thi.ng.geom.webgl.core.stencil_back_ref = 36003;
thi.ng.geom.webgl.core.stencil_back_value_mask = 36004;
thi.ng.geom.webgl.core.stencil_back_writemask = 36005;
thi.ng.geom.webgl.core.stencil_bits = 3415;
thi.ng.geom.webgl.core.stencil_buffer_bit = 1024;
thi.ng.geom.webgl.core.stencil_clear_value = 2961;
thi.ng.geom.webgl.core.stencil_fail = 2964;
thi.ng.geom.webgl.core.stencil_func = 2962;
thi.ng.geom.webgl.core.stencil_index = 6401;
thi.ng.geom.webgl.core.stencil_index8 = 36168;
thi.ng.geom.webgl.core.stencil_pass_depth_fail = 2965;
thi.ng.geom.webgl.core.stencil_pass_depth_pass = 2966;
thi.ng.geom.webgl.core.stencil_ref = 2967;
thi.ng.geom.webgl.core.stencil_test = 2960;
thi.ng.geom.webgl.core.stencil_value_mask = 2963;
thi.ng.geom.webgl.core.stencil_writemask = 2968;
thi.ng.geom.webgl.core.stream_draw = 35040;
thi.ng.geom.webgl.core.subpixel_bits = 3408;
thi.ng.geom.webgl.core.texture = 5890;
thi.ng.geom.webgl.core.texture_2d = 3553;
thi.ng.geom.webgl.core.texture_binding_2d = 32873;
thi.ng.geom.webgl.core.texture_binding_cube_map = 34068;
thi.ng.geom.webgl.core.texture_cube_map = 34067;
thi.ng.geom.webgl.core.texture_cube_map_negative_x = 34070;
thi.ng.geom.webgl.core.texture_cube_map_negative_y = 34072;
thi.ng.geom.webgl.core.texture_cube_map_negative_z = 34074;
thi.ng.geom.webgl.core.texture_cube_map_positive_x = 34069;
thi.ng.geom.webgl.core.texture_cube_map_positive_y = 34071;
thi.ng.geom.webgl.core.texture_cube_map_positive_z = 34073;
thi.ng.geom.webgl.core.texture_mag_filter = 10240;
thi.ng.geom.webgl.core.texture_min_filter = 10241;
thi.ng.geom.webgl.core.texture_wrap_s = 10242;
thi.ng.geom.webgl.core.texture_wrap_t = 10243;
thi.ng.geom.webgl.core.texture0 = 33984;
thi.ng.geom.webgl.core.texture1 = 33985;
thi.ng.geom.webgl.core.texture10 = 33994;
thi.ng.geom.webgl.core.texture11 = 33995;
thi.ng.geom.webgl.core.texture12 = 33996;
thi.ng.geom.webgl.core.texture13 = 33997;
thi.ng.geom.webgl.core.texture14 = 33998;
thi.ng.geom.webgl.core.texture15 = 33999;
thi.ng.geom.webgl.core.texture16 = 34000;
thi.ng.geom.webgl.core.texture17 = 34001;
thi.ng.geom.webgl.core.texture18 = 34002;
thi.ng.geom.webgl.core.texture19 = 34003;
thi.ng.geom.webgl.core.texture2 = 33986;
thi.ng.geom.webgl.core.texture20 = 34004;
thi.ng.geom.webgl.core.texture21 = 34005;
thi.ng.geom.webgl.core.texture22 = 34006;
thi.ng.geom.webgl.core.texture23 = 34007;
thi.ng.geom.webgl.core.texture24 = 34008;
thi.ng.geom.webgl.core.texture25 = 34009;
thi.ng.geom.webgl.core.texture26 = 34010;
thi.ng.geom.webgl.core.texture27 = 34011;
thi.ng.geom.webgl.core.texture28 = 34012;
thi.ng.geom.webgl.core.texture29 = 34013;
thi.ng.geom.webgl.core.texture3 = 33987;
thi.ng.geom.webgl.core.texture30 = 34014;
thi.ng.geom.webgl.core.texture31 = 34015;
thi.ng.geom.webgl.core.texture4 = 33988;
thi.ng.geom.webgl.core.texture5 = 33989;
thi.ng.geom.webgl.core.texture6 = 33990;
thi.ng.geom.webgl.core.texture7 = 33991;
thi.ng.geom.webgl.core.texture8 = 33992;
thi.ng.geom.webgl.core.texture9 = 33993;
thi.ng.geom.webgl.core.triangle_fan = 6;
thi.ng.geom.webgl.core.triangle_strip = 5;
thi.ng.geom.webgl.core.triangles = 4;
thi.ng.geom.webgl.core.unpack_alignment = 3317;
thi.ng.geom.webgl.core.unpack_colorspace_conversion_webgl = 37443;
thi.ng.geom.webgl.core.unpack_flip_y_webgl = 37440;
thi.ng.geom.webgl.core.unpack_premultiply_alpha_webgl = 37441;
thi.ng.geom.webgl.core.unsigned_byte = 5121;
thi.ng.geom.webgl.core.unsigned_int = 5125;
thi.ng.geom.webgl.core.unsigned_short = 5123;
thi.ng.geom.webgl.core.unsigned_short_4_4_4_4 = 32819;
thi.ng.geom.webgl.core.unsigned_short_5_5_5_1 = 32820;
thi.ng.geom.webgl.core.unsigned_short_5_6_5 = 33635;
thi.ng.geom.webgl.core.validate_status = 35715;
thi.ng.geom.webgl.core.vendor = 7936;
thi.ng.geom.webgl.core.version = 7938;
thi.ng.geom.webgl.core.vertex_attrib_array_buffer_binding = 34975;
thi.ng.geom.webgl.core.vertex_attrib_array_enabled = 34338;
thi.ng.geom.webgl.core.vertex_attrib_array_normalized = 34922;
thi.ng.geom.webgl.core.vertex_attrib_array_pointer = 34373;
thi.ng.geom.webgl.core.vertex_attrib_array_size = 34339;
thi.ng.geom.webgl.core.vertex_attrib_array_stride = 34340;
thi.ng.geom.webgl.core.vertex_attrib_array_type = 34341;
thi.ng.geom.webgl.core.vertex_shader = 35633;
thi.ng.geom.webgl.core.viewport = 2978;
thi.ng.geom.webgl.core.zero = 0;
thi.ng.geom.webgl.core.PWebGLConvert = (function (){var obj10444 = {};return obj10444;
})();
thi.ng.geom.webgl.core.as_webgl_buffer_spec = (function as_webgl_buffer_spec(_,opts){if((function (){var and__4941__auto__ = _;if(and__4941__auto__)
{return _.thi$ng$geom$webgl$core$PWebGLConvert$as_webgl_buffer_spec$arity$2;
} else
{return and__4941__auto__;
}
})())
{return _.thi$ng$geom$webgl$core$PWebGLConvert$as_webgl_buffer_spec$arity$2(_,opts);
} else
{var x__5580__auto__ = (((_ == null))?null:_);return (function (){var or__4953__auto__ = (thi.ng.geom.webgl.core.as_webgl_buffer_spec[goog.typeOf(x__5580__auto__)]);if(or__4953__auto__)
{return or__4953__auto__;
} else
{var or__4953__auto____$1 = (thi.ng.geom.webgl.core.as_webgl_buffer_spec["_"]);if(or__4953__auto____$1)
{return or__4953__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"PWebGLConvert.as-webgl-buffer-spec",_);
}
}
})().call(null,_,opts);
}
});
thi.ng.geom.webgl.core.into_buffer = (function into_buffer(_,buf,idx){if((function (){var and__4941__auto__ = _;if(and__4941__auto__)
{return _.thi$ng$geom$webgl$core$PWebGLConvert$into_buffer$arity$3;
} else
{return and__4941__auto__;
}
})())
{return _.thi$ng$geom$webgl$core$PWebGLConvert$into_buffer$arity$3(_,buf,idx);
} else
{var x__5580__auto__ = (((_ == null))?null:_);return (function (){var or__4953__auto__ = (thi.ng.geom.webgl.core.into_buffer[goog.typeOf(x__5580__auto__)]);if(or__4953__auto__)
{return or__4953__auto__;
} else
{var or__4953__auto____$1 = (thi.ng.geom.webgl.core.into_buffer["_"]);if(or__4953__auto____$1)
{return or__4953__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"PWebGLConvert.into-buffer",_);
}
}
})().call(null,_,buf,idx);
}
});
thi.ng.geom.webgl.core.PRelease = (function (){var obj10446 = {};return obj10446;
})();
thi.ng.geom.webgl.core.release = (function release(_){if((function (){var and__4941__auto__ = _;if(and__4941__auto__)
{return _.thi$ng$geom$webgl$core$PRelease$release$arity$1;
} else
{return and__4941__auto__;
}
})())
{return _.thi$ng$geom$webgl$core$PRelease$release$arity$1(_);
} else
{var x__5580__auto__ = (((_ == null))?null:_);return (function (){var or__4953__auto__ = (thi.ng.geom.webgl.core.release[goog.typeOf(x__5580__auto__)]);if(or__4953__auto__)
{return or__4953__auto__;
} else
{var or__4953__auto____$1 = (thi.ng.geom.webgl.core.release["_"]);if(or__4953__auto____$1)
{return or__4953__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"PRelease.release",_);
}
}
})().call(null,_);
}
});
thi.ng.geom.webgl.core.PBind = (function (){var obj10448 = {};return obj10448;
})();
thi.ng.geom.webgl.core.bind = (function() {
var bind = null;
var bind__1 = (function (_){if((function (){var and__4941__auto__ = _;if(and__4941__auto__)
{return _.thi$ng$geom$webgl$core$PBind$bind$arity$1;
} else
{return and__4941__auto__;
}
})())
{return _.thi$ng$geom$webgl$core$PBind$bind$arity$1(_);
} else
{var x__5580__auto__ = (((_ == null))?null:_);return (function (){var or__4953__auto__ = (thi.ng.geom.webgl.core.bind[goog.typeOf(x__5580__auto__)]);if(or__4953__auto__)
{return or__4953__auto__;
} else
{var or__4953__auto____$1 = (thi.ng.geom.webgl.core.bind["_"]);if(or__4953__auto____$1)
{return or__4953__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"PBind.bind",_);
}
}
})().call(null,_);
}
});
var bind__2 = (function (_,opts){if((function (){var and__4941__auto__ = _;if(and__4941__auto__)
{return _.thi$ng$geom$webgl$core$PBind$bind$arity$2;
} else
{return and__4941__auto__;
}
})())
{return _.thi$ng$geom$webgl$core$PBind$bind$arity$2(_,opts);
} else
{var x__5580__auto__ = (((_ == null))?null:_);return (function (){var or__4953__auto__ = (thi.ng.geom.webgl.core.bind[goog.typeOf(x__5580__auto__)]);if(or__4953__auto__)
{return or__4953__auto__;
} else
{var or__4953__auto____$1 = (thi.ng.geom.webgl.core.bind["_"]);if(or__4953__auto____$1)
{return or__4953__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"PBind.bind",_);
}
}
})().call(null,_,opts);
}
});
bind = function(_,opts){
switch(arguments.length){
case 1:
return bind__1.call(this,_);
case 2:
return bind__2.call(this,_,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bind.cljs$core$IFn$_invoke$arity$1 = bind__1;
bind.cljs$core$IFn$_invoke$arity$2 = bind__2;
return bind;
})()
;
thi.ng.geom.webgl.core.unbind = (function unbind(_){if((function (){var and__4941__auto__ = _;if(and__4941__auto__)
{return _.thi$ng$geom$webgl$core$PBind$unbind$arity$1;
} else
{return and__4941__auto__;
}
})())
{return _.thi$ng$geom$webgl$core$PBind$unbind$arity$1(_);
} else
{var x__5580__auto__ = (((_ == null))?null:_);return (function (){var or__4953__auto__ = (thi.ng.geom.webgl.core.unbind[goog.typeOf(x__5580__auto__)]);if(or__4953__auto__)
{return or__4953__auto__;
} else
{var or__4953__auto____$1 = (thi.ng.geom.webgl.core.unbind["_"]);if(or__4953__auto____$1)
{return or__4953__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"PBind.unbind",_);
}
}
})().call(null,_);
}
});
thi.ng.geom.webgl.core.PConfigure = (function (){var obj10450 = {};return obj10450;
})();
thi.ng.geom.webgl.core.configure = (function configure(_,opts){if((function (){var and__4941__auto__ = _;if(and__4941__auto__)
{return _.thi$ng$geom$webgl$core$PConfigure$configure$arity$2;
} else
{return and__4941__auto__;
}
})())
{return _.thi$ng$geom$webgl$core$PConfigure$configure$arity$2(_,opts);
} else
{var x__5580__auto__ = (((_ == null))?null:_);return (function (){var or__4953__auto__ = (thi.ng.geom.webgl.core.configure[goog.typeOf(x__5580__auto__)]);if(or__4953__auto__)
{return or__4953__auto__;
} else
{var or__4953__auto____$1 = (thi.ng.geom.webgl.core.configure["_"]);if(or__4953__auto____$1)
{return or__4953__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"PConfigure.configure",_);
}
}
})().call(null,_,opts);
}
});
thi.ng.geom.webgl.core.PTexture = (function (){var obj10452 = {};return obj10452;
})();
thi.ng.geom.webgl.core.set_texture_filter = (function set_texture_filter(_,type){if((function (){var and__4941__auto__ = _;if(and__4941__auto__)
{return _.thi$ng$geom$webgl$core$PTexture$set_texture_filter$arity$2;
} else
{return and__4941__auto__;
}
})())
{return _.thi$ng$geom$webgl$core$PTexture$set_texture_filter$arity$2(_,type);
} else
{var x__5580__auto__ = (((_ == null))?null:_);return (function (){var or__4953__auto__ = (thi.ng.geom.webgl.core.set_texture_filter[goog.typeOf(x__5580__auto__)]);if(or__4953__auto__)
{return or__4953__auto__;
} else
{var or__4953__auto____$1 = (thi.ng.geom.webgl.core.set_texture_filter["_"]);if(or__4953__auto____$1)
{return or__4953__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"PTexture.set-texture-filter",_);
}
}
})().call(null,_,type);
}
});
thi.ng.geom.webgl.core.set_texture_wrap = (function set_texture_wrap(_,type){if((function (){var and__4941__auto__ = _;if(and__4941__auto__)
{return _.thi$ng$geom$webgl$core$PTexture$set_texture_wrap$arity$2;
} else
{return and__4941__auto__;
}
})())
{return _.thi$ng$geom$webgl$core$PTexture$set_texture_wrap$arity$2(_,type);
} else
{var x__5580__auto__ = (((_ == null))?null:_);return (function (){var or__4953__auto__ = (thi.ng.geom.webgl.core.set_texture_wrap[goog.typeOf(x__5580__auto__)]);if(or__4953__auto__)
{return or__4953__auto__;
} else
{var or__4953__auto____$1 = (thi.ng.geom.webgl.core.set_texture_wrap["_"]);if(or__4953__auto____$1)
{return or__4953__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"PTexture.set-texture-wrap",_);
}
}
})().call(null,_,type);
}
});
thi.ng.geom.webgl.core.PFramebuffer = (function (){var obj10454 = {};return obj10454;
})();
thi.ng.geom.webgl.core.set_fbo_color_texture = (function set_fbo_color_texture(_,tex){if((function (){var and__4941__auto__ = _;if(and__4941__auto__)
{return _.thi$ng$geom$webgl$core$PFramebuffer$set_fbo_color_texture$arity$2;
} else
{return and__4941__auto__;
}
})())
{return _.thi$ng$geom$webgl$core$PFramebuffer$set_fbo_color_texture$arity$2(_,tex);
} else
{var x__5580__auto__ = (((_ == null))?null:_);return (function (){var or__4953__auto__ = (thi.ng.geom.webgl.core.set_fbo_color_texture[goog.typeOf(x__5580__auto__)]);if(or__4953__auto__)
{return or__4953__auto__;
} else
{var or__4953__auto____$1 = (thi.ng.geom.webgl.core.set_fbo_color_texture["_"]);if(or__4953__auto____$1)
{return or__4953__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"PFramebuffer.set-fbo-color-texture",_);
}
}
})().call(null,_,tex);
}
});
thi.ng.geom.webgl.core.set_fbo_depth_buffer = (function set_fbo_depth_buffer(_,depth_buffer){if((function (){var and__4941__auto__ = _;if(and__4941__auto__)
{return _.thi$ng$geom$webgl$core$PFramebuffer$set_fbo_depth_buffer$arity$2;
} else
{return and__4941__auto__;
}
})())
{return _.thi$ng$geom$webgl$core$PFramebuffer$set_fbo_depth_buffer$arity$2(_,depth_buffer);
} else
{var x__5580__auto__ = (((_ == null))?null:_);return (function (){var or__4953__auto__ = (thi.ng.geom.webgl.core.set_fbo_depth_buffer[goog.typeOf(x__5580__auto__)]);if(or__4953__auto__)
{return or__4953__auto__;
} else
{var or__4953__auto____$1 = (thi.ng.geom.webgl.core.set_fbo_depth_buffer["_"]);if(or__4953__auto____$1)
{return or__4953__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"PFramebuffer.set-fbo-depth-buffer",_);
}
}
})().call(null,_,depth_buffer);
}
});
thi.ng.geom.webgl.core.face_normals = (function face_normals(m){var fnorms = thi.ng.geom.core.face_normals.call(null,m);var faces = thi.ng.geom.core.faces.call(null,m);var buf = thi.ng.geom.webgl.arrays.float32.call(null,((cljs.core.count.call(null,faces) * 3) * 3));var idx = 0;var faces__$1 = faces;while(true){
if(cljs.core.truth_(faces__$1))
{var vec__10457 = fnorms.call(null,cljs.core.first.call(null,faces__$1));var nx = cljs.core.nth.call(null,vec__10457,0,null);var ny = cljs.core.nth.call(null,vec__10457,1,null);var nz = cljs.core.nth.call(null,vec__10457,2,null);var G__10458_10459 = buf;(G__10458_10459[idx] = nx);
(G__10458_10459[(idx + 1)] = ny);
(G__10458_10459[(idx + 2)] = nz);
(G__10458_10459[(idx + 3)] = nx);
(G__10458_10459[(idx + 4)] = ny);
(G__10458_10459[(idx + 5)] = nz);
(G__10458_10459[(idx + 6)] = nx);
(G__10458_10459[(idx + 7)] = ny);
(G__10458_10459[(idx + 8)] = nz);
{
var G__10460 = (idx + 9);
var G__10461 = cljs.core.next.call(null,faces__$1);
idx = G__10460;
faces__$1 = G__10461;
continue;
}
} else
{return buf;
}
break;
}
});
thi.ng.geom.webgl.core.vertex_normals = (function vertex_normals(m){var vnorms = thi.ng.geom.core.vertex_normals.call(null,m);var faces = thi.ng.geom.core.faces.call(null,m);var buf = thi.ng.geom.webgl.arrays.float32.call(null,((cljs.core.count.call(null,faces) * 3) * 3));var i = 0;var faces__$1 = faces;while(true){
if(cljs.core.truth_(faces__$1))
{var f = cljs.core.first.call(null,faces__$1);{
var G__10462 = thi.ng.geom.webgl.core.into_buffer.call(null,vnorms.call(null,f.call(null,2)),buf,thi.ng.geom.webgl.core.into_buffer.call(null,vnorms.call(null,f.call(null,1)),buf,thi.ng.geom.webgl.core.into_buffer.call(null,vnorms.call(null,f.call(null,0)),buf,i)));
var G__10463 = cljs.core.next.call(null,faces__$1);
i = G__10462;
faces__$1 = G__10463;
continue;
}
} else
{return buf;
}
break;
}
});
thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$webgl$core$PWebGLConvert$ = true;
thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$webgl$core$PWebGLConvert$into_buffer$arity$3 = (function (_,buf,idx){var ___$1 = this;var G__10464_10465 = buf;(G__10464_10465[idx] = ___$1.x);
(G__10464_10465[(idx + 1)] = ___$1.y);
(G__10464_10465[(idx + 2)] = ___$1.z);
return (idx + 3);
});
cljs.core.PersistentVector.prototype.thi$ng$geom$webgl$core$PWebGLConvert$ = true;
cljs.core.PersistentVector.prototype.thi$ng$geom$webgl$core$PWebGLConvert$into_buffer$arity$3 = (function (_,buf,idx){var ___$1 = this;var idx__$1 = idx;var ___$2 = ___$1;while(true){
if(cljs.core.truth_(___$2))
{{
var G__10466 = thi.ng.geom.webgl.core.into_buffer.call(null,cljs.core.first.call(null,___$2),buf,idx__$1);
var G__10467 = cljs.core.next.call(null,___$2);
idx__$1 = G__10466;
___$2 = G__10467;
continue;
}
} else
{return idx__$1;
}
break;
}
});
thi.ng.geom.types.GMesh.prototype.thi$ng$geom$webgl$core$PWebGLConvert$ = true;
thi.ng.geom.types.GMesh.prototype.thi$ng$geom$webgl$core$PWebGLConvert$as_webgl_buffer_spec$arity$2 = (function (_,opts){var ___$1 = this;var m = (cljs.core.truth_(new cljs.core.Keyword(null,"tessellate","tessellate",2361899792).cljs$core$IFn$_invoke$arity$1(opts))?thi.ng.geom.core.tessellate.call(null,___$1):___$1);var faces = new cljs.core.Keyword(null,"faces","faces",1111091496).cljs$core$IFn$_invoke$arity$1(m);var num_faces = cljs.core.count.call(null,faces);var verts = thi.ng.geom.webgl.arrays.float32.call(null,((num_faces * 3) * 3));var norms = (cljs.core.truth_(new cljs.core.Keyword(null,"vnormals","vnormals",2634711720).cljs$core$IFn$_invoke$arity$1(opts))?thi.ng.geom.webgl.core.vertex_normals.call(null,m):(cljs.core.truth_(new cljs.core.Keyword(null,"fnormals","fnormals",519550136).cljs$core$IFn$_invoke$arity$1(opts))?thi.ng.geom.webgl.core.face_normals.call(null,m):((new cljs.core.Keyword(null,"default","default",2558708147))?null:null)));var i_10468 = 0;var faces_10469__$1 = faces;while(true){
if(cljs.core.truth_(faces_10469__$1))
{{
var G__10470 = thi.ng.geom.webgl.core.into_buffer.call(null,cljs.core.first.call(null,faces_10469__$1),verts,i_10468);
var G__10471 = cljs.core.next.call(null,faces_10469__$1);
i_10468 = G__10470;
faces_10469__$1 = G__10471;
continue;
}
} else
{}
break;
}
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vertices","vertices",3324730219),verts,new cljs.core.Keyword(null,"normals","normals",3141522398),norms,new cljs.core.Keyword(null,"num-vertices","num-vertices",877840850),(num_faces * 3),new cljs.core.Keyword(null,"num-faces","num-faces",1146907681),num_faces], null);
});
thi.ng.geom.webgl.core.context_default_attribs = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"alpha","alpha",1106814160),true,new cljs.core.Keyword(null,"antialias","antialias",3190264736),true,new cljs.core.Keyword(null,"depth","depth",1109376565),true,new cljs.core.Keyword(null,"fail-if-major-performance-caveat","fail-if-major-performance-caveat",4286235972),false,new cljs.core.Keyword(null,"prefer-low-power-to-high-performance","prefer-low-power-to-high-performance",4237643787),false,new cljs.core.Keyword(null,"premultiplied-alpha","premultiplied-alpha",794423513),true,new cljs.core.Keyword(null,"preserve-drawing-buffer","preserve-drawing-buffer",2221120994),false,new cljs.core.Keyword(null,"stencil","stencil",3415245102),false], null);
thi.ng.geom.webgl.core.gl_context = (function() {
var gl_context = null;
var gl_context__1 = (function (canvas){return gl_context.call(null,canvas,cljs.core.PersistentArrayMap.EMPTY);
});
var gl_context__2 = (function (canvas,attribs){var canvas__$1 = ((typeof canvas === 'string')?document.getElementById(canvas):canvas);var attribs__$1 = cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,thi.ng.geom.webgl.core.context_default_attribs,attribs));var ctx = (function (){var G__10478 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["webgl","experimental-webgl","webkit-3d","moz-webgl"], null);var vec__10479 = G__10478;var id = cljs.core.nth.call(null,vec__10479,0,null);var more = cljs.core.nthnext.call(null,vec__10479,1);var G__10478__$1 = G__10478;while(true){
var vec__10480 = G__10478__$1;var id__$1 = cljs.core.nth.call(null,vec__10480,0,null);var more__$1 = cljs.core.nthnext.call(null,vec__10480,1);if(cljs.core.truth_(id__$1))
{try{var ctx = canvas__$1.getContext(id__$1,attribs__$1);canvas__$1.onselectstart = cljs.core.constantly.call(null,false);
if(cljs.core.truth_(ctx))
{return ctx;
} else
{{
var G__10482 = more__$1;
G__10478__$1 = G__10482;
continue;
}
}
}catch (e10481){if((e10481 instanceof Error))
{var e = e10481;{
var G__10483 = more__$1;
G__10478__$1 = G__10483;
continue;
}
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10481;
} else
{return null;
}
}
}} else
{return null;
}
break;
}
})();var or__4953__auto__ = ctx;if(cljs.core.truth_(or__4953__auto__))
{return or__4953__auto__;
} else
{return thi.ng.common.error.unsupported_BANG_.call(null,"WebGL not available");
}
});
gl_context = function(canvas,attribs){
switch(arguments.length){
case 1:
return gl_context__1.call(this,canvas);
case 2:
return gl_context__2.call(this,canvas,attribs);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gl_context.cljs$core$IFn$_invoke$arity$1 = gl_context__1;
gl_context.cljs$core$IFn$_invoke$arity$2 = gl_context__2;
return gl_context;
})()
;
thi.ng.geom.webgl.core.clear_color_buffer = (function clear_color_buffer(gl,r,g,b,a){gl.clearColor(r,g,b,a);
return gl.clear(thi.ng.geom.webgl.core.color_buffer_bit);
});
thi.ng.geom.webgl.core.clear_depth_buffer = (function clear_depth_buffer(gl,d){gl.clearDepth(d);
return gl.clear(thi.ng.geom.webgl.core.depth_buffer_bit);
});
thi.ng.geom.webgl.core.disable = (function disable(gl,flag){gl.disable(flag);
return gl;
});
thi.ng.geom.webgl.core.enable = (function enable(gl,flag){gl.enable(flag);
return gl;
});
thi.ng.geom.webgl.core.cull_faces = (function cull_faces(gl,side){gl.enable(thi.ng.geom.webgl.core.cull_face);
gl.cullFace(side);
return gl;
});
thi.ng.geom.webgl.core.set_viewport = (function() {
var set_viewport = null;
var set_viewport__2 = (function (gl,p__10484){var map__10488 = p__10484;var map__10488__$1 = ((cljs.core.seq_QMARK_.call(null,map__10488))?cljs.core.apply.call(null,cljs.core.hash_map,map__10488):map__10488);var vec__10489 = cljs.core.get.call(null,map__10488__$1,new cljs.core.Keyword(null,"p","p",1013904354));var x = cljs.core.nth.call(null,vec__10489,0,null);var y = cljs.core.nth.call(null,vec__10489,1,null);var vec__10490 = cljs.core.get.call(null,map__10488__$1,new cljs.core.Keyword(null,"size","size",1017434995));var w = cljs.core.nth.call(null,vec__10490,0,null);var h = cljs.core.nth.call(null,vec__10490,1,null);gl.viewport(x,y,w,h);
return gl;
});
var set_viewport__5 = (function (gl,x,y,w,h){gl.viewport(x,y,w,h);
return gl;
});
set_viewport = function(gl,x,y,w,h){
switch(arguments.length){
case 2:
return set_viewport__2.call(this,gl,x);
case 5:
return set_viewport__5.call(this,gl,x,y,w,h);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
set_viewport.cljs$core$IFn$_invoke$arity$2 = set_viewport__2;
set_viewport.cljs$core$IFn$_invoke$arity$5 = set_viewport__5;
return set_viewport;
})()
;
thi.ng.geom.webgl.core.get_viewport_rect = (function get_viewport_rect(gl){var b = gl.getParameter(thi.ng.geom.webgl.core.viewport);return thi.ng.geom.rect.rect.call(null,(b[0]),(b[1]),(b[2]),(b[3]));
});
thi.ng.geom.webgl.core.perspective = (function perspective(fovy,aspect,near,far){var aspect__$1 = ((typeof aspect === 'number')?aspect:((cljs.core.map_QMARK_.call(null,aspect))?(function (){var map__10493 = aspect;var map__10493__$1 = ((cljs.core.seq_QMARK_.call(null,map__10493))?cljs.core.apply.call(null,cljs.core.hash_map,map__10493):map__10493);var vec__10494 = cljs.core.get.call(null,map__10493__$1,new cljs.core.Keyword(null,"size","size",1017434995));var w = cljs.core.nth.call(null,vec__10494,0,null);var h = cljs.core.nth.call(null,vec__10494,1,null);return (w / h);
})():((new cljs.core.Keyword(null,"default","default",2558708147))?(cljs.core.nth.call(null,aspect,0) / cljs.core.nth.call(null,aspect,1)):null)));return thi.ng.geom.core.matrix.perspective.call(null,fovy,aspect__$1,near,far);
});
thi.ng.geom.webgl.core.float_ext_ids = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["OES_texture_float","OES_texture_half_float","OES_texture_float_linear","OES_texture_half_float_linear","WEBGL_color_buffer_float","EXT_color_buffer_half_float"], null);
thi.ng.geom.webgl.core.get_extension = (function get_extension(gl,ext){return gl.getExtension(ext);
});
thi.ng.geom.webgl.core.get_float_extension = (function get_float_extension(gl,spec){var vec__10497 = cljs.core.map.call(null,(function (p1__10495_SHARP_){return gl.getExtension(p1__10495_SHARP_);
}),thi.ng.geom.webgl.core.float_ext_ids);var s_tex = cljs.core.nth.call(null,vec__10497,0,null);var h_tex = cljs.core.nth.call(null,vec__10497,1,null);var s_lin = cljs.core.nth.call(null,vec__10497,2,null);var h_lin = cljs.core.nth.call(null,vec__10497,3,null);var s_fbo = cljs.core.nth.call(null,vec__10497,4,null);var h_fbo = cljs.core.nth.call(null,vec__10497,5,null);var ext = vec__10497;return cljs.core.last.call(null,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"score","score",1123168772),cljs.core.map.call(null,((function (vec__10497,s_tex,h_tex,s_lin,h_lin,s_fbo,h_fbo,ext){
return (function (c){return cljs.core.assoc.call(null,c,new cljs.core.Keyword(null,"score","score",1123168772),cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (vec__10497,s_tex,h_tex,s_lin,h_lin,s_fbo,h_fbo,ext){
return (function (pref,score){if(cljs.core.truth_(c.call(null,pref)))
{return score;
} else
{return 0;
}
});})(vec__10497,s_tex,h_tex,s_lin,h_lin,s_fbo,h_fbo,ext))
,new cljs.core.Keyword(null,"prefer","prefer",4328760706).cljs$core$IFn$_invoke$arity$1(spec),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [128,64,32,16,8,4,2,1], null))));
});})(vec__10497,s_tex,h_tex,s_lin,h_lin,s_fbo,h_fbo,ext))
,cljs.core.reduce.call(null,((function (vec__10497,s_tex,h_tex,s_lin,h_lin,s_fbo,h_fbo,ext){
return (function (acc,c){if(cljs.core.truth_((function (){var and__4941__auto__ = new cljs.core.Keyword(null,"texture","texture",3891054733).cljs$core$IFn$_invoke$arity$1(c);if(cljs.core.truth_(and__4941__auto__))
{return cljs.core.every_QMARK_.call(null,c,new cljs.core.Keyword(null,"require","require",2109600983).cljs$core$IFn$_invoke$arity$1(spec));
} else
{return and__4941__auto__;
}
})()))
{return cljs.core.conj.call(null,acc,c);
} else
{return acc;
}
});})(vec__10497,s_tex,h_tex,s_lin,h_lin,s_fbo,h_fbo,ext))
,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"texture","texture",3891054733),s_tex,new cljs.core.Keyword(null,"filterable","filterable",3756185668),s_lin,new cljs.core.Keyword(null,"renderable","renderable",2208370530),s_fbo,new cljs.core.Keyword(null,"type","type",1017479852),thi.ng.geom.webgl.core.float$,new cljs.core.Keyword(null,"precision","precision",3932694512),new cljs.core.Keyword(null,"single","single",4406605754),new cljs.core.Keyword(null,"single","single",4406605754),true], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"texture","texture",3891054733),h_tex,new cljs.core.Keyword(null,"filterable","filterable",3756185668),h_lin,new cljs.core.Keyword(null,"renderable","renderable",2208370530),h_fbo,new cljs.core.Keyword(null,"type","type",1017479852),(cljs.core.truth_(h_tex)?h_tex.HALF_FLOAT_OES:null),new cljs.core.Keyword(null,"precision","precision",3932694512),new cljs.core.Keyword(null,"half","half",1017099173),new cljs.core.Keyword(null,"half","half",1017099173),true], null)], null)))));
});
thi.ng.geom.webgl.core.get_supported_extensions = (function get_supported_extensions(gl){return gl.getSupportedExtensions();
});
