"use strict";var v=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var s=v(function(c,u){
var o=require('@stdlib/assert-is-iterator-like/dist'),g=require('@stdlib/assert-is-nonnegative-integer/dist').isPrimitive,n=require('@stdlib/error-tools-fmtprodmsg/dist');function m(r,e){var i,a,t;if(!o(r))throw new TypeError(n('0OV3v',r));if(arguments.length>1){if(!g(e))throw new TypeError(n('0OV3X',e));i=e}else i=1e308;for(t=0;t<i&&(a=r.next(),!a.done);)t+=1;return r}u.exports=m
});var l=s();module.exports=l;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
