// Compiled by ClojureScript 0.0-2202
goog.provide('thi.ng.common.math.core');
goog.require('cljs.core');
thi.ng.common.math.core.PI = Math.PI;
thi.ng.common.math.core.TWO_PI = (thi.ng.common.math.core.PI * 2.0);
thi.ng.common.math.core.HALF_PI = (thi.ng.common.math.core.PI / 2.0);
thi.ng.common.math.core.THIRD_PI = (thi.ng.common.math.core.PI / 3.0);
thi.ng.common.math.core.QUARTER_PI = (thi.ng.common.math.core.PI / 4.0);
thi.ng.common.math.core.SIXTH_PI = (thi.ng.common.math.core.PI / 6.0);
thi.ng.common.math.core.THREE_HALVES_PI = (thi.ng.common.math.core.PI * 1.5);
thi.ng.common.math.core.MAX = 1.7976931348623157E308;
thi.ng.common.math.core.MIN = 4.9E-324;
thi.ng.common.math.core.SQRT2 = Math.sqrt.call(null,2);
thi.ng.common.math.core.SQRT3 = Math.sqrt.call(null,3);
thi.ng.common.math.core.PHI = ((Math.sqrt.call(null,5.0) + 1) / 2);
thi.ng.common.math.core.THIRD = (1.0 / 3.0);
thi.ng.common.math.core.LOG2 = Math.log.call(null,2.0);
thi.ng.common.math.core.INF_ = Number.POSITIVE_INFINITY;
thi.ng.common.math.core.INF_PLUS_ = Number.NEGATIVE_INFINITY;
thi.ng.common.math.core.DEG = (180.0 / thi.ng.common.math.core.PI);
thi.ng.common.math.core.RAD = (thi.ng.common.math.core.PI / 180.0);
thi.ng.common.math.core._STAR_eps_STAR_ = 1.0E-6;
thi.ng.common.math.core._STAR_rnd_STAR_ = Math.random;
/**
* Returns x if even or `x+1` if `x` is odd.
*/
thi.ng.common.math.core.ensure_even = (function ensure_even(x){if(cljs.core.even_QMARK_.call(null,x))
{return x;
} else
{return (x + 1);
}
});
/**
* Returns x if odd or `x+1` if `x` is even.
*/
thi.ng.common.math.core.ensure_odd = (function ensure_odd(x){if(cljs.core.even_QMARK_.call(null,x))
{return (x + 1);
} else
{return x;
}
});
thi.ng.common.math.core.abs = Math.abs;
thi.ng.common.math.core.abs_diff = (function abs_diff(x,y){return thi.ng.common.math.core.abs.call(null,(x - y));
});
/**
* Takes two numbers or seqs of numbers and returns true if their
* absolute difference is less than `delta` (`*eps` used by default).
* If either `a` or `b` are nil, returns only true if the other is nil
* as well.
*/
thi.ng.common.math.core.delta_EQ_ = (function() {
var delta_EQ_ = null;
var delta_EQ___2 = (function (a,b){return delta_EQ_.call(null,a,b,thi.ng.common.math.core._STAR_eps_STAR_);
});
var delta_EQ___3 = (function (a,b,delta){if(cljs.core.truth_((function (){var and__4941__auto__ = a;if(cljs.core.truth_(and__4941__auto__))
{return b;
} else
{return and__4941__auto__;
}
})()))
{if(typeof a === 'number')
{if(typeof b === 'number')
{return (thi.ng.common.math.core.abs.call(null,(b - a)) <= delta);
} else
{return false;
}
} else
{return (cljs.core._EQ_.call(null,cljs.core.count.call(null,a),cljs.core.count.call(null,b))) && (cljs.core.every_QMARK_.call(null,cljs.core.true_QMARK_,cljs.core.map.call(null,(function (p1__10112_SHARP_,p2__10113_SHARP_){return (thi.ng.common.math.core.abs.call(null,(p1__10112_SHARP_ - p2__10113_SHARP_)) <= delta);
}),a,b)));
}
} else
{return cljs.core._EQ_.call(null,a,b);
}
});
delta_EQ_ = function(a,b,delta){
switch(arguments.length){
case 2:
return delta_EQ___2.call(this,a,b);
case 3:
return delta_EQ___3.call(this,a,b,delta);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
delta_EQ_.cljs$core$IFn$_invoke$arity$2 = delta_EQ___2;
delta_EQ_.cljs$core$IFn$_invoke$arity$3 = delta_EQ___3;
return delta_EQ_;
})()
;
thi.ng.common.math.core.signum = (function() {
var signum = null;
var signum__1 = (function (x){if((x < 0))
{return -1;
} else
{if((x === 0))
{return 0;
} else
{return 1;
}
}
});
var signum__2 = (function (x,delta){if(thi.ng.common.math.core.delta_EQ_.call(null,0.0,x,delta))
{return 0;
} else
{if((x < 0))
{return -1;
} else
{return 1;
}
}
});
signum = function(x,delta){
switch(arguments.length){
case 1:
return signum__1.call(this,x);
case 2:
return signum__2.call(this,x,delta);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
signum.cljs$core$IFn$_invoke$arity$1 = signum__1;
signum.cljs$core$IFn$_invoke$arity$2 = signum__2;
return signum;
})()
;
/**
* Maps x from one interval into another. Intervals can be defined as vectors.
*/
thi.ng.common.math.core.map_interval = (function() {
var map_interval = null;
var map_interval__3 = (function (x,p__10114,p__10115){var vec__10118 = p__10114;var minIn = cljs.core.nth.call(null,vec__10118,0,null);var maxIn = cljs.core.nth.call(null,vec__10118,1,null);var vec__10119 = p__10115;var minOut = cljs.core.nth.call(null,vec__10119,0,null);var maxOut = cljs.core.nth.call(null,vec__10119,1,null);return (((maxOut - minOut) * ((x - minIn) / (maxIn - minIn))) + minOut);
});
var map_interval__5 = (function (x,minIn,maxIn,minOut,maxOut){return (((maxOut - minOut) * ((x - minIn) / (maxIn - minIn))) + minOut);
});
map_interval = function(x,minIn,maxIn,minOut,maxOut){
switch(arguments.length){
case 3:
return map_interval__3.call(this,x,minIn,maxIn);
case 5:
return map_interval__5.call(this,x,minIn,maxIn,minOut,maxOut);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map_interval.cljs$core$IFn$_invoke$arity$3 = map_interval__3;
map_interval.cljs$core$IFn$_invoke$arity$5 = map_interval__5;
return map_interval;
})()
;
/**
* Returns true if x >= min and x <= max.
*/
thi.ng.common.math.core.in_range_QMARK_ = (function() {
var in_range_QMARK_ = null;
var in_range_QMARK___2 = (function (p__10120,x){var vec__10122 = p__10120;var min = cljs.core.nth.call(null,vec__10122,0,null);var max = cljs.core.nth.call(null,vec__10122,1,null);return ((x >= min)) && ((x <= max));
});
var in_range_QMARK___3 = (function (min,max,x){return ((x >= min)) && ((x <= max));
});
in_range_QMARK_ = function(min,max,x){
switch(arguments.length){
case 2:
return in_range_QMARK___2.call(this,min,max);
case 3:
return in_range_QMARK___3.call(this,min,max,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
in_range_QMARK_.cljs$core$IFn$_invoke$arity$2 = in_range_QMARK___2;
in_range_QMARK_.cljs$core$IFn$_invoke$arity$3 = in_range_QMARK___3;
return in_range_QMARK_;
})()
;
thi.ng.common.math.core.wrap_range = (function wrap_range(x,y){var x__$1 = cljs.core.rem.call(null,x,y);if((x__$1 < 0))
{return (x__$1 + y);
} else
{return x__$1;
}
});
thi.ng.common.math.core.clamp = (function clamp(x,min,max){if((x < min))
{return min;
} else
{if((x > max))
{return max;
} else
{return x;
}
}
});
thi.ng.common.math.core.clamp_normalized = (function clamp_normalized(x){if((x < -1.0))
{return -1.0;
} else
{if((x > 1.0))
{return 1.0;
} else
{return x;
}
}
});
/**
* Returns lazy-seq of values in the closed interval [0.0, 1.0] at
* resolution 1/x.
*/
thi.ng.common.math.core.norm_range = (function norm_range(x){return cljs.core.map.call(null,(function (p1__10123_SHARP_){return (p1__10123_SHARP_ / x);
}),cljs.core.range.call(null,(x + 1)));
});
thi.ng.common.math.core.mix = (function mix(a,b,t){return (((b - a) * t) + a);
});
thi.ng.common.math.core.step = (function step(edge,x){if((x < edge))
{return 0.0;
} else
{return 1.0;
}
});
thi.ng.common.math.core.smoothstep = (function smoothstep(e0,e1,x){var t = thi.ng.common.math.core.clamp.call(null,((x - e0) / (e1 - e0)),0.0,1.0);return (t * (t * ((t * -2.0) + 3.0)));
});
thi.ng.common.math.core.floor = (function floor(x){return Math.floor.call(null,x);
});
thi.ng.common.math.core.ceil = (function ceil(x){return Math.ceil.call(null,x);
});
thi.ng.common.math.core.roundto = (function roundto(x,prec){return (thi.ng.common.math.core.floor.call(null,((x / prec) + 0.5)) * prec);
});
thi.ng.common.math.core.ceil_pow2 = (function ceil_pow2(x){var pow2 = 1;while(true){
if((pow2 >= x))
{return pow2;
} else
{{
var G__10124 = (pow2 * 2);
pow2 = G__10124;
continue;
}
}
break;
}
});
thi.ng.common.math.core.floor_pow2 = (function floor_pow2(x){return Math.pow.call(null,2,((Math.log.call(null,x) / thi.ng.common.math.core.LOG2) | 0));
});
thi.ng.common.math.core.trunc = (function trunc(x){if((x < 0))
{return thi.ng.common.math.core.ceil.call(null,x);
} else
{return thi.ng.common.math.core.floor.call(null,x);
}
});
thi.ng.common.math.core.fract = (function fract(x){return (x - Math.floor.call(null,x));
});
thi.ng.common.math.core.fdim = (function fdim(x,y){if((x > y))
{return (x - y);
} else
{return 0;
}
});
thi.ng.common.math.core.radians = (function radians(x){return (x * thi.ng.common.math.core.RAD);
});
thi.ng.common.math.core.degrees = (function degrees(x){return (x * thi.ng.common.math.core.DEG);
});
thi.ng.common.math.core.maxmag = (function maxmag(x,y){var ax = Math.abs.call(null,x);var ay = Math.abs.call(null,y);if((ax > ay))
{return x;
} else
{if((ay > ax))
{return y;
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return x;
} else
{return null;
}
}
}
});
thi.ng.common.math.core.minmag = (function minmag(x,y){var ax = Math.abs.call(null,x);var ay = Math.abs.call(null,y);if((ax < ay))
{return x;
} else
{if((ay < ax))
{return y;
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return x;
} else
{return null;
}
}
}
});
thi.ng.common.math.core.ldexp = (function ldexp(x,k){return (x * Math.pow.call(null,2,(k | 0)));
});
thi.ng.common.math.core.remquo = (function remquo(x,y){var k = (x / y);var f = thi.ng.common.math.core.fract.call(null,k);var k__$1 = ((cljs.core._EQ_.call(null,f,0.5))?((cljs.core.even_QMARK_.call(null,(k | 0)))?(k | 0):thi.ng.common.math.core.ceil.call(null,k)):(((f < 0.5))?thi.ng.common.math.core.floor.call(null,k):((new cljs.core.Keyword(null,"default","default",2558708147))?thi.ng.common.math.core.ceil.call(null,k):null)));return (x - (k__$1 * y));
});
thi.ng.common.math.core.hypot = (function hypot(x,y){return Math.sqrt.call(null,((x * x) + (y * y)));
});
thi.ng.common.math.core.rootn = (function rootn(x,y){return Math.pow.call(null,x,(1.0 / y));
});
thi.ng.common.math.core.rsqrt = (function rsqrt(x){return (1.0 / Math.sqrt.call(null,x));
});
thi.ng.common.math.core.impulse = (function impulse(k,t){var h = (k * t);return (h * Math.exp.call(null,(1.0 - h)));
});
thi.ng.common.math.core.random = (function() {
var random = null;
var random__0 = (function (){return thi.ng.common.math.core._STAR_rnd_STAR_.call(null);
});
var random__1 = (function (max){return (thi.ng.common.math.core._STAR_rnd_STAR_.call(null) * max);
});
var random__2 = (function (min,max){return (((max - min) * thi.ng.common.math.core._STAR_rnd_STAR_.call(null)) + min);
});
random = function(min,max){
switch(arguments.length){
case 0:
return random__0.call(this);
case 1:
return random__1.call(this,min);
case 2:
return random__2.call(this,min,max);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
random.cljs$core$IFn$_invoke$arity$0 = random__0;
random.cljs$core$IFn$_invoke$arity$1 = random__1;
random.cljs$core$IFn$_invoke$arity$2 = random__2;
return random;
})()
;
thi.ng.common.math.core.randnorm = (function randnorm(){return ((thi.ng.common.math.core._STAR_rnd_STAR_.call(null) * 2.0) - 1);
});
thi.ng.common.math.core.percentile_index = (function percentile_index(n,num){return ((((n < 100))?(Math.round.call(null,(((n / 100.0) * num) + 0.5)) | 0):num) - 1);
});
thi.ng.common.math.core.percentile = (function percentile(n,sorted){return cljs.core.nth.call(null,sorted,thi.ng.common.math.core.percentile_index.call(null,n,cljs.core.count.call(null,sorted)));
});
thi.ng.common.math.core.quartile_index = (function quartile_index(n,num){return thi.ng.common.math.core.percentile_index.call(null,(n * 25),num);
});
thi.ng.common.math.core.quartile_range = (function quartile_range(n,num){var a = thi.ng.common.math.core.quartile_index.call(null,(n - 1),num);var b = thi.ng.common.math.core.quartile_index.call(null,n,num);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,((cljs.core._EQ_.call(null,n,4))?(b + 1):b)], null);
});
/**
* Takes a quartile index (1..4) and sorted seq of samples, returns set of items in quartile.
*/
thi.ng.common.math.core.quartile = (function quartile(n,sorted){var vec__10126 = thi.ng.common.math.core.quartile_range.call(null,n,cljs.core.count.call(null,sorted));var a = cljs.core.nth.call(null,vec__10126,0,null);var b = cljs.core.nth.call(null,vec__10126,1,null);return cljs.core.take.call(null,(b - a),cljs.core.drop.call(null,a,sorted));
});
thi.ng.common.math.core.normdist_weights = (function() {
var normdist_weights = null;
var normdist_weights__1 = (function (n){return normdist_weights.call(null,n,1.0);
});
var normdist_weights__2 = (function (n,scale){var ws = cljs.core.repeatedly.call(null,n,thi.ng.common.math.core.random);var s = (scale / cljs.core.reduce.call(null,cljs.core._PLUS_,ws));return cljs.core.map.call(null,((function (ws,s){
return (function (p1__10127_SHARP_){return (s * p1__10127_SHARP_);
});})(ws,s))
,ws);
});
normdist_weights = function(n,scale){
switch(arguments.length){
case 1:
return normdist_weights__1.call(this,n);
case 2:
return normdist_weights__2.call(this,n,scale);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
normdist_weights.cljs$core$IFn$_invoke$arity$1 = normdist_weights__1;
normdist_weights.cljs$core$IFn$_invoke$arity$2 = normdist_weights__2;
return normdist_weights;
})()
;
