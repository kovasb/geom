// Compiled by ClojureScript 0.0-2202
goog.provide('thi.ng.common.error');
goog.require('cljs.core');
thi.ng.common.error.throw_BANG_ = (function throw_BANG_(msg){throw (new Error(msg));
});
thi.ng.common.error.key_error_BANG_ = (function key_error_BANG_(k){return thi.ng.common.error.throw_BANG_.call(null,[cljs.core.str("Illegal lookup key: "),cljs.core.str(k)].join(''));
});
thi.ng.common.error.type_error_BANG_ = (function type_error_BANG_(t,x){return thi.ng.common.error.throw_BANG_.call(null,[cljs.core.str("Can't create "),cljs.core.str(t),cljs.core.str(" from "),cljs.core.str(cljs.core.pr_str.call(null,x))].join(''));
});
thi.ng.common.error.arity_error_BANG_ = (function arity_error_BANG_(n){return thi.ng.common.error.throw_BANG_.call(null,[cljs.core.str("Wrong number of args: "),cljs.core.str(n)].join(''));
});
thi.ng.common.error.illegal_arg_BANG_ = (function() {
var illegal_arg_BANG_ = null;
var illegal_arg_BANG___1 = (function (x){return illegal_arg_BANG_.call(null,"Illegal argument",x);
});
var illegal_arg_BANG___2 = (function (msg,x){return thi.ng.common.error.throw_BANG_.call(null,[cljs.core.str(msg),cljs.core.str(": "),cljs.core.str(x)].join(''));
});
illegal_arg_BANG_ = function(msg,x){
switch(arguments.length){
case 1:
return illegal_arg_BANG___1.call(this,msg);
case 2:
return illegal_arg_BANG___2.call(this,msg,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
illegal_arg_BANG_.cljs$core$IFn$_invoke$arity$1 = illegal_arg_BANG___1;
illegal_arg_BANG_.cljs$core$IFn$_invoke$arity$2 = illegal_arg_BANG___2;
return illegal_arg_BANG_;
})()
;
thi.ng.common.error.unsupported_BANG_ = (function() {
var unsupported_BANG_ = null;
var unsupported_BANG___0 = (function (){return unsupported_BANG_.call(null,"Unsupported operation");
});
var unsupported_BANG___1 = (function (msg){throw (new Error(msg));
});
unsupported_BANG_ = function(msg){
switch(arguments.length){
case 0:
return unsupported_BANG___0.call(this);
case 1:
return unsupported_BANG___1.call(this,msg);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsupported_BANG_.cljs$core$IFn$_invoke$arity$0 = unsupported_BANG___0;
unsupported_BANG_.cljs$core$IFn$_invoke$arity$1 = unsupported_BANG___1;
return unsupported_BANG_;
})()
;
