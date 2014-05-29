// Compiled by ClojureScript 0.0-2202
goog.provide('thi.ng.common.data.core');
goog.require('cljs.core');
thi.ng.common.data.core.index = (function index(i,t){var temp__4124__auto__ = cljs.core.get.call(null,i,t);if(cljs.core.truth_(temp__4124__auto__))
{var tt = temp__4124__auto__;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,tt], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,i,t),t], null);
}
});
thi.ng.common.data.core.index_BANG_ = (function index_BANG_(i,t){var temp__4124__auto__ = cljs.core.get.call(null,i,t);if(cljs.core.truth_(temp__4124__auto__))
{var tt = temp__4124__auto__;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,tt], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.call(null,i,t),t], null);
}
});
thi.ng.common.data.core.index_kv = (function index_kv(m,k,v){var temp__4124__auto__ = cljs.core.find.call(null,m,k);if(cljs.core.truth_(temp__4124__auto__))
{var vec__7390 = temp__4124__auto__;var k__$1 = cljs.core.nth.call(null,vec__7390,0,null);var vv = cljs.core.nth.call(null,vec__7390,1,null);return cljs.core.assoc.call(null,m,k__$1,cljs.core.conj.call(null,vv,v));
} else
{return cljs.core.assoc.call(null,m,k,cljs.core.PersistentHashSet.fromArray([v], true));
}
});
thi.ng.common.data.core.index_kv_BANG_ = (function index_kv_BANG_(m,k,v){var temp__4124__auto__ = cljs.core.get.call(null,m,k);if(cljs.core.truth_(temp__4124__auto__))
{var vv = temp__4124__auto__;return cljs.core.assoc_BANG_.call(null,m,k,cljs.core.conj.call(null,vv,v));
} else
{return cljs.core.assoc_BANG_.call(null,m,k,cljs.core.PersistentHashSet.fromArray([v], true));
}
});
thi.ng.common.data.core.value_set = (function() {
var value_set = null;
var value_set__2 = (function (idx,v){return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.get.call(null,idx,v));
});
var value_set__3 = (function (f,idx,v){return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (p1__7391_SHARP_,p2__7392_SHARP_){return cljs.core.conj_BANG_.call(null,p1__7391_SHARP_,f.call(null,p2__7392_SHARP_));
}),cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY),cljs.core.get.call(null,idx,v)));
});
value_set = function(f,idx,v){
switch(arguments.length){
case 2:
return value_set__2.call(this,f,idx);
case 3:
return value_set__3.call(this,f,idx,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
value_set.cljs$core$IFn$_invoke$arity$2 = value_set__2;
value_set.cljs$core$IFn$_invoke$arity$3 = value_set__3;
return value_set;
})()
;
thi.ng.common.data.core.set_conj = cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY);
thi.ng.common.data.core.vec_conj = cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY);
thi.ng.common.data.core.set_conj2_STAR_ = (function set_conj2_STAR_(p1__7393_SHARP_,p2__7394_SHARP_){if((p1__7393_SHARP_ == null))
{return p2__7394_SHARP_;
} else
{if(cljs.core.set_QMARK_.call(null,p1__7393_SHARP_))
{return cljs.core.conj.call(null,p1__7393_SHARP_,p2__7394_SHARP_);
} else
{return cljs.core.PersistentHashSet.fromArray([p1__7393_SHARP_,p2__7394_SHARP_], true);
}
}
});
thi.ng.common.data.core.vec_conj2_STAR_ = (function vec_conj2_STAR_(p1__7395_SHARP_,p2__7396_SHARP_){if((p1__7395_SHARP_ == null))
{return p2__7396_SHARP_;
} else
{if(cljs.core.vector_QMARK_.call(null,p1__7395_SHARP_))
{return cljs.core.conj.call(null,p1__7395_SHARP_,p2__7396_SHARP_);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__7395_SHARP_,p2__7396_SHARP_], null);
}
}
});
thi.ng.common.data.core.collect_set = (function collect_set(f,coll){return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,f,coll));
});
thi.ng.common.data.core.collect_indexed = (function collect_indexed(f,f2,coll){var keys = thi.ng.common.data.core.collect_set.call(null,f,coll);return cljs.core.zipmap.call(null,keys,((cljs.core._EQ_.call(null,f2,cljs.core.identity))?keys:cljs.core.map.call(null,f2,keys)));
});
/**
* @param {...*} var_args
*/
thi.ng.common.data.core.interval_set = (function() { 
var interval_set__delegate = function (ivals){return cljs.core.into.call(null,cljs.core.sorted_set.call(null),cljs.core.mapcat.call(null,(function (v){if(cljs.core.sequential_QMARK_.call(null,v))
{return cljs.core.range.call(null,v.call(null,0),(v.call(null,1) + 1));
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null);
}
}),ivals));
};
var interval_set = function (var_args){
var ivals = null;if (arguments.length > 0) {
  ivals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return interval_set__delegate.call(this,ivals);};
interval_set.cljs$lang$maxFixedArity = 0;
interval_set.cljs$lang$applyTo = (function (arglist__7397){
var ivals = cljs.core.seq(arglist__7397);
return interval_set__delegate(ivals);
});
interval_set.cljs$core$IFn$_invoke$arity$variadic = interval_set__delegate;
return interval_set;
})()
;
/**
* @param {...*} var_args
*/
thi.ng.common.data.core.check_intervals = (function() { 
var check_intervals__delegate = function (ivals){var vec__7403 = cljs.core.reduce.call(null,(function (p__7404,v){var vec__7405 = p__7404;var i = cljs.core.nth.call(null,vec__7405,0,null);var c = cljs.core.nth.call(null,vec__7405,1,null);if(cljs.core.sequential_QMARK_.call(null,v))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,i,v),c], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,cljs.core.conj.call(null,c,v)], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY], null),ivals);var ivals__$1 = cljs.core.nth.call(null,vec__7403,0,null);var const$ = cljs.core.nth.call(null,vec__7403,1,null);return ((function (vec__7403,ivals__$1,const$){
return (function (x){if(cljs.core.truth_(const$.call(null,x)))
{return x;
} else
{return cljs.core.some.call(null,((function (vec__7403,ivals__$1,const$){
return (function (p__7406){var vec__7407 = p__7406;var a = cljs.core.nth.call(null,vec__7407,0,null);var b = cljs.core.nth.call(null,vec__7407,1,null);return ((a <= x)) && ((x <= b));
});})(vec__7403,ivals__$1,const$))
,ivals__$1);
}
});
;})(vec__7403,ivals__$1,const$))
};
var check_intervals = function (var_args){
var ivals = null;if (arguments.length > 0) {
  ivals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return check_intervals__delegate.call(this,ivals);};
check_intervals.cljs$lang$maxFixedArity = 0;
check_intervals.cljs$lang$applyTo = (function (arglist__7408){
var ivals = cljs.core.seq(arglist__7408);
return check_intervals__delegate(ivals);
});
check_intervals.cljs$core$IFn$_invoke$arity$variadic = check_intervals__delegate;
return check_intervals;
})()
;
/**
* All the ways to take one item from each sequence
* (taken from clojure.contrib.combinatorics)
* @param {...*} var_args
*/
thi.ng.common.data.core.cartesian_product = (function() { 
var cartesian_product__delegate = function (seqs){var v_original_seqs = cljs.core.vec.call(null,seqs);var step = ((function (v_original_seqs){
return (function step(v_seqs){var increment = ((function (v_original_seqs){
return (function (v_seqs__$1){var i = (cljs.core.count.call(null,v_seqs__$1) - 1);var v_seqs__$2 = v_seqs__$1;while(true){
if((i < 0))
{return null;
} else
{var temp__4124__auto__ = cljs.core.next.call(null,v_seqs__$2.call(null,i));if(temp__4124__auto__)
{var rst = temp__4124__auto__;return cljs.core.assoc.call(null,v_seqs__$2,i,rst);
} else
{{
var G__7409 = (i - 1);
var G__7410 = cljs.core.assoc.call(null,v_seqs__$2,i,v_original_seqs.call(null,i));
i = G__7409;
v_seqs__$2 = G__7410;
continue;
}
}
}
break;
}
});})(v_original_seqs))
;if(cljs.core.truth_(v_seqs))
{return cljs.core.cons.call(null,cljs.core.map.call(null,cljs.core.first,v_seqs),(new cljs.core.LazySeq(null,((function (increment,v_original_seqs){
return (function (){return step.call(null,increment.call(null,v_seqs));
});})(increment,v_original_seqs))
,null,null)));
} else
{return null;
}
});})(v_original_seqs))
;if(cljs.core.every_QMARK_.call(null,cljs.core.first,seqs))
{return (new cljs.core.LazySeq(null,((function (v_original_seqs,step){
return (function (){return step.call(null,v_original_seqs);
});})(v_original_seqs,step))
,null,null));
} else
{return null;
}
};
var cartesian_product = function (var_args){
var seqs = null;if (arguments.length > 0) {
  seqs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return cartesian_product__delegate.call(this,seqs);};
cartesian_product.cljs$lang$maxFixedArity = 0;
cartesian_product.cljs$lang$applyTo = (function (arglist__7411){
var seqs = cljs.core.seq(arglist__7411);
return cartesian_product__delegate(seqs);
});
cartesian_product.cljs$core$IFn$_invoke$arity$variadic = cartesian_product__delegate;
return cartesian_product;
})()
;
/**
* Applies `f` to root coll and every of its (nested) elements. Returns
* a vector of items for which `f` returned a truthy value.
*/
thi.ng.common.data.core.filter_tree = (function filter_tree(f,root){var walk = (function walk(acc,node){if(cljs.core.truth_(f.call(null,node)))
{return cljs.core.conj.call(null,acc,node);
} else
{if(cljs.core.coll_QMARK_.call(null,node))
{return cljs.core.reduce.call(null,walk,acc,node);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return acc;
} else
{return null;
}
}
}
});return cljs.core.reduce.call(null,walk,cljs.core.PersistentVector.EMPTY,root);
});
thi.ng.common.data.core.bisect = (function() {
var bisect = null;
var bisect__2 = (function (f,coll){var vec__7416 = cljs.core.reduce.call(null,(function (p__7417,v){var vec__7418 = p__7417;var m = cljs.core.nth.call(null,vec__7418,0,null);var n = cljs.core.nth.call(null,vec__7418,1,null);if(cljs.core.truth_(f.call(null,v)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.call(null,m,v),n], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,cljs.core.conj_BANG_.call(null,n,v)], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY)], null),coll);var m = cljs.core.nth.call(null,vec__7416,0,null);var n = cljs.core.nth.call(null,vec__7416,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.persistent_BANG_.call(null,m),cljs.core.persistent_BANG_.call(null,n)], null);
});
var bisect__3 = (function (f,f2,coll){var vec__7419 = bisect.call(null,f,coll);var m = cljs.core.nth.call(null,vec__7419,0,null);var n = cljs.core.nth.call(null,vec__7419,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f2.call(null,m),f2.call(null,n)], null);
});
bisect = function(f,f2,coll){
switch(arguments.length){
case 2:
return bisect__2.call(this,f,f2);
case 3:
return bisect__3.call(this,f,f2,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bisect.cljs$core$IFn$_invoke$arity$2 = bisect__2;
bisect.cljs$core$IFn$_invoke$arity$3 = bisect__3;
return bisect;
})()
;
thi.ng.common.data.core.neighbors = (function neighbors(x,coll){var n = (cljs.core.count.call(null,coll) - 1);var i = n;while(true){
if((i >= 0))
{if(cljs.core._EQ_.call(null,x,coll.call(null,i)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [coll.call(null,(((i > 0))?(i - 1):n)),coll.call(null,(((i < n))?(i + 1):0))], null);
} else
{{
var G__7420 = (i - 1);
i = G__7420;
continue;
}
}
} else
{return null;
}
break;
}
});
/**
* Returns a lazyseq of `n`-element vectors, each one containing
* a successive elements of the original collection.
* 
* (successive-nth 3 [1 2 3 4])
* => ([1 2 3] [2 3 4] [3 4 5])
*/
thi.ng.common.data.core.successive_nth = (function() {
var successive_nth = null;
var successive_nth__2 = (function (n,coll){return (new cljs.core.LazySeq(null,(function (){var s = cljs.core.take.call(null,n,coll);if(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,s)))
{return cljs.core.cons.call(null,cljs.core.vec.call(null,s),successive_nth.call(null,n,cljs.core.rest.call(null,coll)));
} else
{return null;
}
}),null,null));
});
var successive_nth__3 = (function (n,step,coll){return (new cljs.core.LazySeq(null,(function (){var s = cljs.core.take.call(null,n,coll);if(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,s)))
{return cljs.core.cons.call(null,cljs.core.vec.call(null,s),successive_nth.call(null,n,step,cljs.core.drop.call(null,step,coll)));
} else
{return null;
}
}),null,null));
});
successive_nth = function(n,step,coll){
switch(arguments.length){
case 2:
return successive_nth__2.call(this,n,step);
case 3:
return successive_nth__3.call(this,n,step,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
successive_nth.cljs$core$IFn$_invoke$arity$2 = successive_nth__2;
successive_nth.cljs$core$IFn$_invoke$arity$3 = successive_nth__3;
return successive_nth;
})()
;
/**
* Returns a lazyseq of nested 2-element vectors, each one containing
* a vector of `n` successive elements of the original collection and
* an sequence index.
* 
* (successive-nth-indexed 2 [10 20 30 40])
* => ([[10 20] 0] [[20 30] 1] [[30 40] 2])
*/
thi.ng.common.data.core.successive_nth_indexed = (function() {
var successive_nth_indexed = null;
var successive_nth_indexed__2 = (function (n,coll){return successive_nth_indexed.call(null,n,0,coll);
});
var successive_nth_indexed__3 = (function (n,idx,coll){return (new cljs.core.LazySeq(null,(function (){var s = cljs.core.take.call(null,n,coll);if(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,s)))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec.call(null,s),idx], null),successive_nth_indexed.call(null,n,(idx + 1),cljs.core.rest.call(null,coll)));
} else
{return null;
}
}),null,null));
});
successive_nth_indexed = function(n,idx,coll){
switch(arguments.length){
case 2:
return successive_nth_indexed__2.call(this,n,idx);
case 3:
return successive_nth_indexed__3.call(this,n,idx,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
successive_nth_indexed.cljs$core$IFn$_invoke$arity$2 = successive_nth_indexed__2;
successive_nth_indexed.cljs$core$IFn$_invoke$arity$3 = successive_nth_indexed__3;
return successive_nth_indexed;
})()
;
/**
* Applies `f` with `args` to all given `keys` in `type`.
* @param {...*} var_args
*/
thi.ng.common.data.core.apply_to_keys = (function() { 
var apply_to_keys__delegate = function (type,keys,f,args){return cljs.core.reduce.call(null,(function (acc,k){return cljs.core.assoc.call(null,acc,k,cljs.core.apply.call(null,f,cljs.core.get.call(null,type,k),args));
}),type,keys);
};
var apply_to_keys = function (type,keys,f,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return apply_to_keys__delegate.call(this,type,keys,f,args);};
apply_to_keys.cljs$lang$maxFixedArity = 3;
apply_to_keys.cljs$lang$applyTo = (function (arglist__7421){
var type = cljs.core.first(arglist__7421);
arglist__7421 = cljs.core.next(arglist__7421);
var keys = cljs.core.first(arglist__7421);
arglist__7421 = cljs.core.next(arglist__7421);
var f = cljs.core.first(arglist__7421);
var args = cljs.core.rest(arglist__7421);
return apply_to_keys__delegate(type,keys,f,args);
});
apply_to_keys.cljs$core$IFn$_invoke$arity$variadic = apply_to_keys__delegate;
return apply_to_keys;
})()
;
thi.ng.common.data.core.reduce_pairs = (function() {
var reduce_pairs = null;
var reduce_pairs__3 = (function (f1,f2,coll){return reduce_pairs.call(null,f1,f2,null,coll);
});
var reduce_pairs__4 = (function (f1,f2,acc,coll){if((cljs.core.count.call(null,coll) > 1))
{var pairs = cljs.core.map.call(null,(function (p__7424){var vec__7425 = p__7424;var a = cljs.core.nth.call(null,vec__7425,0,null);var b = cljs.core.nth.call(null,vec__7425,1,null);return f2.call(null,a,b);
}),thi.ng.common.data.core.successive_nth.call(null,2,coll));if(cljs.core.truth_(acc))
{return cljs.core.reduce.call(null,f1,acc,pairs);
} else
{return cljs.core.reduce.call(null,f1,pairs);
}
} else
{return null;
}
});
reduce_pairs = function(f1,f2,acc,coll){
switch(arguments.length){
case 3:
return reduce_pairs__3.call(this,f1,f2,acc);
case 4:
return reduce_pairs__4.call(this,f1,f2,acc,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reduce_pairs.cljs$core$IFn$_invoke$arity$3 = reduce_pairs__3;
reduce_pairs.cljs$core$IFn$_invoke$arity$4 = reduce_pairs__4;
return reduce_pairs;
})()
;
thi.ng.common.data.core.wrap_seq = (function wrap_seq(s,head,tail){return cljs.core.concat.call(null,((cljs.core.sequential_QMARK_.call(null,head))?cljs.core.concat.call(null,head,s):cljs.core.cons.call(null,head,s)),((cljs.core.sequential_QMARK_.call(null,tail))?tail:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tail], null)));
});
thi.ng.common.data.core.append_first = (function append_first(xs){return cljs.core.concat.call(null,xs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,xs)], null));
});
thi.ng.common.data.core.rotate_left = (function rotate_left(n,xs){return cljs.core.concat.call(null,cljs.core.drop.call(null,n,xs),cljs.core.take.call(null,n,xs));
});
/**
* Returns a new collection of all items after `item` in original `coll`.
* If `coll` is a vector, the new collection is created with `subvec`.
* Returns original coll if item isn't found.
*/
thi.ng.common.data.core.all_after = (function all_after(item,coll){var idx = (coll.indexOf(item) + 1);if((idx > 0))
{if(cljs.core.vector_QMARK_.call(null,coll))
{return cljs.core.subvec.call(null,coll,idx);
} else
{return cljs.core.drop.call(null,idx,coll);
}
} else
{return coll;
}
});
thi.ng.common.data.core.iterate_while = (function iterate_while(pred,f,x){return (new cljs.core.LazySeq(null,(function (){if(cljs.core.truth_(pred.call(null,x)))
{return cljs.core.cons.call(null,x,iterate_while.call(null,pred,f,f.call(null,x)));
} else
{return null;
}
}),null,null));
});
thi.ng.common.data.core.unwrap_string = (function unwrap_string(s,n){return cljs.core.subs.call(null,s,n,(cljs.core.count.call(null,s) - n));
});
thi.ng.common.data.core.wrap = (function wrap(a,b,s){return [cljs.core.str(a),cljs.core.str(s),cljs.core.str(b)].join('');
});
thi.ng.common.data.core.stringify_keys = (function stringify_keys(m){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__7428){var vec__7429 = p__7428;var k = cljs.core.nth.call(null,vec__7429,0,null);var v = cljs.core.nth.call(null,vec__7429,1,null);var e = vec__7429;if((k instanceof cljs.core.Keyword))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,k),v], null);
} else
{return e;
}
}),m));
});
/**
* Takes a keyword or string and string/seq of items, returns map with
* items as keys and boolean values indicating if an item has been
* found in the string representation of the kw. If `kw` is nil, return
* nil.
* 
* (demunge-flags :cad "abcd")
* #_=> {:a true :b false :c true :d true}
*/
thi.ng.common.data.core.demunge_flags = (function demunge_flags(kw,xs){if(cljs.core.truth_(kw))
{var flags = cljs.core.name.call(null,kw);return cljs.core.reduce.call(null,((function (flags){
return (function (acc,x){var x__$1 = [cljs.core.str(x)].join('');return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,x__$1),(0 <= flags.indexOf(x__$1)));
});})(flags))
,cljs.core.PersistentArrayMap.EMPTY,xs);
} else
{return null;
}
});
/**
* Like `demunge-flags` but returns lazyseq of booleans in same order as xs.
* 
* (demunge-flags-seq :cad "abcd")
* #_=> [true false true true]
*/
thi.ng.common.data.core.demunge_flags_seq = (function demunge_flags_seq(kw,xs){if(cljs.core.truth_(kw))
{var flags = cljs.core.name.call(null,kw);return cljs.core.map.call(null,((function (flags){
return (function (p1__7430_SHARP_){return (0 <= flags.indexOf([cljs.core.str(p1__7430_SHARP_)].join('')));
});})(flags))
,xs);
} else
{return null;
}
});
