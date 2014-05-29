// Compiled by ClojureScript 0.0-2202
goog.provide('thi.ng.geom.webgl.animator');
goog.require('cljs.core');
thi.ng.geom.webgl.animator.animframe_provider = (function (){var or__3481__auto__ = window.requestAnimationFrame;if(cljs.core.truth_(or__3481__auto__))
{return or__3481__auto__;
} else
{var or__3481__auto____$1 = window.webkitRequestAnimationFrame;if(cljs.core.truth_(or__3481__auto____$1))
{return or__3481__auto____$1;
} else
{var or__3481__auto____$2 = window.mozRequestAnimationFrame;if(cljs.core.truth_(or__3481__auto____$2))
{return or__3481__auto____$2;
} else
{var or__3481__auto____$3 = window.msRequestAnimationFrame;if(cljs.core.truth_(or__3481__auto____$3))
{return or__3481__auto____$3;
} else
{return window.oRequestAnimationFrame;
}
}
}
}
})();
thi.ng.geom.webgl.animator.now = (function now(){var or__3481__auto__ = performance.now();if(cljs.core.truth_(or__3481__auto__))
{return or__3481__auto__;
} else
{var or__3481__auto____$1 = performance.webkitNow();if(cljs.core.truth_(or__3481__auto____$1))
{return or__3481__auto____$1;
} else
{var or__3481__auto____$2 = performance.mozNow();if(cljs.core.truth_(or__3481__auto____$2))
{return or__3481__auto____$2;
} else
{var or__3481__auto____$3 = performance.msNow();if(cljs.core.truth_(or__3481__auto____$3))
{return or__3481__auto____$3;
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
var animate__delegate = function (f,p__4852){var vec__4854 = p__4852;var element = cljs.core.nth.call(null,vec__4854,0,null);var t0 = thi.ng.geom.webgl.animator.now.call(null);var t = cljs.core.atom.call(null,0);var f_SINGLEQUOTE_ = ((function (t0,t,vec__4854,element){
return (function animate_STAR_(){if(cljs.core.truth_(f.call(null,cljs.core.reset_BANG_.call(null,t,((thi.ng.geom.webgl.animator.now.call(null) - t0) * 0.001)))))
{if(cljs.core.truth_(element))
{return thi.ng.geom.webgl.animator.animframe_provider.call(null,animate_STAR_,element);
} else
{return thi.ng.geom.webgl.animator.animframe_provider.call(null,animate_STAR_);
}
} else
{return null;
}
});})(t0,t,vec__4854,element))
;return f_SINGLEQUOTE_.call(null);
};
var animate = function (f,var_args){
var p__4852 = null;if (arguments.length > 1) {
  p__4852 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return animate__delegate.call(this,f,p__4852);};
animate.cljs$lang$maxFixedArity = 1;
animate.cljs$lang$applyTo = (function (arglist__4855){
var f = cljs.core.first(arglist__4855);
var p__4852 = cljs.core.rest(arglist__4855);
return animate__delegate(f,p__4852);
});
animate.cljs$core$IFn$_invoke$arity$variadic = animate__delegate;
return animate;
})()
;
