// Compiled by ClojureScript 0.0-2202
goog.provide('thi.ng.geom.webgl.animator');
goog.require('cljs.core');
thi.ng.geom.webgl.animator.animframe_provider = (function (){var or__4953__auto__ = window.requestAnimationFrame;if(cljs.core.truth_(or__4953__auto__))
{return or__4953__auto__;
} else
{var or__4953__auto____$1 = window.webkitRequestAnimationFrame;if(cljs.core.truth_(or__4953__auto____$1))
{return or__4953__auto____$1;
} else
{var or__4953__auto____$2 = window.mozRequestAnimationFrame;if(cljs.core.truth_(or__4953__auto____$2))
{return or__4953__auto____$2;
} else
{var or__4953__auto____$3 = window.msRequestAnimationFrame;if(cljs.core.truth_(or__4953__auto____$3))
{return or__4953__auto____$3;
} else
{return window.oRequestAnimationFrame;
}
}
}
}
})();
thi.ng.geom.webgl.animator.now = (function now(){var or__4953__auto__ = performance.now();if(cljs.core.truth_(or__4953__auto__))
{return or__4953__auto__;
} else
{var or__4953__auto____$1 = performance.webkitNow();if(cljs.core.truth_(or__4953__auto____$1))
{return or__4953__auto____$1;
} else
{var or__4953__auto____$2 = performance.mozNow();if(cljs.core.truth_(or__4953__auto____$2))
{return or__4953__auto____$2;
} else
{var or__4953__auto____$3 = performance.msNow();if(cljs.core.truth_(or__4953__auto____$3))
{return or__4953__auto____$3;
} else
{return performance.oNow();
}
}
}
}
});
/**
* @param {...*} var_args
*/
thi.ng.geom.webgl.animator.animate = (function() { 
var animate__delegate = function (f,p__11236){var vec__11238 = p__11236;var element = cljs.core.nth.call(null,vec__11238,0,null);var t0 = thi.ng.geom.webgl.animator.now.call(null);var t = cljs.core.atom.call(null,0);var f_SINGLEQUOTE_ = ((function (t0,t,vec__11238,element){
return (function animate_STAR_(){if(cljs.core.truth_(f.call(null,cljs.core.reset_BANG_.call(null,t,((thi.ng.geom.webgl.animator.now.call(null) - t0) * 0.001)))))
{if(cljs.core.truth_(element))
{return thi.ng.geom.webgl.animator.animframe_provider.call(null,animate_STAR_,element);
} else
{return thi.ng.geom.webgl.animator.animframe_provider.call(null,animate_STAR_);
}
} else
{return null;
}
});})(t0,t,vec__11238,element))
;return f_SINGLEQUOTE_.call(null);
};
var animate = function (f,var_args){
var p__11236 = null;if (arguments.length > 1) {
  p__11236 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return animate__delegate.call(this,f,p__11236);};
animate.cljs$lang$maxFixedArity = 1;
animate.cljs$lang$applyTo = (function (arglist__11239){
var f = cljs.core.first(arglist__11239);
var p__11236 = cljs.core.rest(arglist__11239);
return animate__delegate(f,p__11236);
});
animate.cljs$core$IFn$_invoke$arity$variadic = animate__delegate;
return animate;
})()
;
