// Compiled by ClojureScript 0.0-2202
goog.provide('weasel.repl');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.browser.event');
goog.require('weasel.impls.websocket');
goog.require('weasel.impls.websocket');
goog.require('cljs.reader');
goog.require('cljs.reader');
goog.require('clojure.browser.net');
goog.require('clojure.browser.net');
goog.require('clojure.browser.event');
goog.require('clojure.browser.event');
weasel.repl.ws_connection = cljs.core.atom.call(null,null);
weasel.repl.alive_QMARK_ = (function alive_QMARK_(){return !((cljs.core.deref.call(null,weasel.repl.ws_connection) == null));
});
weasel.repl.process_message = (function (){var method_table__6058__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__6059__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__6060__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__6061__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__6062__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("process-message",new cljs.core.Keyword(null,"op","op",1013907795),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__6062__auto__,method_table__6058__auto__,prefer_table__6059__auto__,method_cache__6060__auto__,cached_hierarchy__6061__auto__));
})();
cljs.core._add_method.call(null,weasel.repl.process_message,new cljs.core.Keyword(null,"error","error",1110689146),(function (message){return console.error([cljs.core.str("Websocket REPL error "),cljs.core.str(new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(message))].join(''));
}));
cljs.core._add_method.call(null,weasel.repl.process_message,new cljs.core.Keyword(null,"eval-js","eval-js",3928548236),(function (message){var code = new cljs.core.Keyword(null,"code","code",1016963423).cljs$core$IFn$_invoke$arity$1(message);return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",1013907795),new cljs.core.Keyword(null,"result","result",4374444943),new cljs.core.Keyword(null,"value","value",1125876963),(function (){try{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",4416389988),new cljs.core.Keyword(null,"success","success",3441701749),new cljs.core.Keyword(null,"value","value",1125876963),[cljs.core.str(eval(code))].join('')], null);
}catch (e6633){if((e6633 instanceof Error))
{var e = e6633;return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",4416389988),new cljs.core.Keyword(null,"exception","exception",2495529921),new cljs.core.Keyword(null,"value","value",1125876963),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",3069736751),(cljs.core.truth_(e.hasOwnProperty("stack"))?e.stack:"No stacktrace available.".call(null))], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e6633;
} else
{return null;
}
}
}})()], null);
}));
weasel.repl.repl_print = (function repl_print(x){var temp__4124__auto__ = cljs.core.deref.call(null,weasel.repl.ws_connection);if(cljs.core.truth_(temp__4124__auto__))
{var conn = temp__4124__auto__;return clojure.browser.net.transmit.call(null,cljs.core.deref.call(null,weasel.repl.ws_connection),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",1013907795),new cljs.core.Keyword(null,"print","print",1120839199),new cljs.core.Keyword(null,"value","value",1125876963),cljs.core.pr_str.call(null,x)], null));
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
weasel.repl.connect = (function() { 
var connect__delegate = function (repl_server_url,p__6634){var map__6637 = p__6634;var map__6637__$1 = ((cljs.core.seq_QMARK_.call(null,map__6637))?cljs.core.apply.call(null,cljs.core.hash_map,map__6637):map__6637);var on_close = cljs.core.get.call(null,map__6637__$1,new cljs.core.Keyword(null,"on-close","on-close",1416548348));var on_error = cljs.core.get.call(null,map__6637__$1,new cljs.core.Keyword(null,"on-error","on-error",1418576908));var on_open = cljs.core.get.call(null,map__6637__$1,new cljs.core.Keyword(null,"on-open","on-open",3936747754));var verbose = cljs.core.get.call(null,map__6637__$1,new cljs.core.Keyword(null,"verbose","verbose",1365011700));var repl_connection = weasel.impls.websocket.websocket_connection.call(null);cljs.core.swap_BANG_.call(null,weasel.repl.ws_connection,cljs.core.constantly.call(null,repl_connection));
clojure.browser.event.listen.call(null,repl_connection,new cljs.core.Keyword(null,"opened","opened",4298292187),((function (repl_connection,map__6637,map__6637__$1,on_close,on_error,on_open,verbose){
return (function (evt){clojure.browser.net.transmit.call(null,repl_connection,cljs.core.pr_str.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",1013907795),new cljs.core.Keyword(null,"ready","ready",1122290965)], null)));
if(cljs.core.truth_(verbose))
{console.info("Opened Websocket REPL connection");
} else
{}
if(cljs.core.fn_QMARK_.call(null,on_open))
{return on_open.call(null);
} else
{return null;
}
});})(repl_connection,map__6637,map__6637__$1,on_close,on_error,on_open,verbose))
);
clojure.browser.event.listen.call(null,repl_connection,new cljs.core.Keyword(null,"message","message",1968829305),((function (repl_connection,map__6637,map__6637__$1,on_close,on_error,on_open,verbose){
return (function (evt){var map__6638 = cljs.reader.read_string.call(null,evt.message);var map__6638__$1 = ((cljs.core.seq_QMARK_.call(null,map__6638))?cljs.core.apply.call(null,cljs.core.hash_map,map__6638):map__6638);var message = map__6638__$1;var op = cljs.core.get.call(null,map__6638__$1,new cljs.core.Keyword(null,"op","op",1013907795));var response = cljs.core.pr_str.call(null,weasel.repl.process_message.call(null,message));return clojure.browser.net.transmit.call(null,repl_connection,response);
});})(repl_connection,map__6637,map__6637__$1,on_close,on_error,on_open,verbose))
);
clojure.browser.event.listen.call(null,repl_connection,new cljs.core.Keyword(null,"closed","closed",3951351006),((function (repl_connection,map__6637,map__6637__$1,on_close,on_error,on_open,verbose){
return (function (evt){cljs.core.reset_BANG_.call(null,weasel.repl.ws_connection,null);
if(cljs.core.truth_(verbose))
{console.info("Closed Websocket REPL connection");
} else
{}
if(cljs.core.fn_QMARK_.call(null,on_close))
{return on_close.call(null);
} else
{return null;
}
});})(repl_connection,map__6637,map__6637__$1,on_close,on_error,on_open,verbose))
);
clojure.browser.event.listen.call(null,repl_connection,new cljs.core.Keyword(null,"error","error",1110689146),((function (repl_connection,map__6637,map__6637__$1,on_close,on_error,on_open,verbose){
return (function (evt){console.error("WebSocket error",evt);
if(cljs.core.fn_QMARK_.call(null,on_error))
{return on_error.call(null,evt);
} else
{return null;
}
});})(repl_connection,map__6637,map__6637__$1,on_close,on_error,on_open,verbose))
);
return clojure.browser.net.connect.call(null,repl_connection,repl_server_url);
};
var connect = function (repl_server_url,var_args){
var p__6634 = null;if (arguments.length > 1) {
  p__6634 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return connect__delegate.call(this,repl_server_url,p__6634);};
connect.cljs$lang$maxFixedArity = 1;
connect.cljs$lang$applyTo = (function (arglist__6639){
var repl_server_url = cljs.core.first(arglist__6639);
var p__6634 = cljs.core.rest(arglist__6639);
return connect__delegate(repl_server_url,p__6634);
});
connect.cljs$core$IFn$_invoke$arity$variadic = connect__delegate;
return connect;
})()
;
