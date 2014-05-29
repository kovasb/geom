// Compiled by ClojureScript 0.0-2202
goog.provide('thi.ng.geom.webgl.utils');
goog.require('cljs.core');
goog.require('thi.ng.common.error');
goog.require('thi.ng.common.error');
goog.require('thi.ng.geom.webgl.arrays');
goog.require('thi.ng.geom.webgl.arrays');
thi.ng.geom.webgl.utils.get_script_text = (function get_script_text(id){var temp__4124__auto__ = document.getElementById(id);if(cljs.core.truth_(temp__4124__auto__))
{var e = temp__4124__auto__;return e.text;
} else
{return thi.ng.common.error.illegal_arg_BANG_.call(null,[cljs.core.str("Unknown DOM element: "),cljs.core.str(id)].join(''));
}
});
/**
* A combination of map & doseq specialized for maps. Takes a function `f` and
* a map, calls `f` with each key & value, discards results.
*/
thi.ng.geom.webgl.utils.loop_kv = (function loop_kv(f,xs){var xs__$1 = xs;while(true){
if(cljs.core.truth_(xs__$1))
{var x = cljs.core.first.call(null,xs__$1);f.call(null,cljs.core.nth.call(null,x,0),cljs.core.nth.call(null,x,1));
{
var G__11094 = cljs.core.next.call(null,xs__$1);
xs__$1 = G__11094;
continue;
}
} else
{return null;
}
break;
}
});
