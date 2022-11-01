// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).iterAdvance=e()}(this,(function(){"use strict";var t=/./,e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r,n=Object.defineProperty,o=Object.prototype,i=o.toString,u=o.__defineGetter__,f=o.__defineSetter__,c=o.__lookupGetter__,l=o.__lookupSetter__;r=function(){try{return e({},"x",{}),!0}catch(t){return!1}}()?n:function(t,e,r){var n,a,p,y;if("object"!=typeof t||null===t||"[object Array]"===i.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===i.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((a="value"in r)&&(c.call(t,e)||l.call(t,e)?(n=t.__proto__,t.__proto__=o,delete t[e],t[e]=r.value,t.__proto__=n):t[e]=r.value),p="get"in r,y="set"in r,a&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&u&&u.call(t,e,r.get),y&&f&&f.call(t,e,r.set),t};var a=r;function p(t,e,r){a(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function y(t){return"boolean"==typeof t}var s="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return s&&"symbol"==typeof Symbol.toStringTag}var v=Object.prototype.toString;var d=Object.prototype.hasOwnProperty;var m="function"==typeof Symbol?Symbol.toStringTag:"";var j=b()?function(t){var e,r,n,o,i;if(null==t)return v.call(t);r=t[m],i=m,e=null!=(o=t)&&d.call(o,i);try{t[m]=void 0}catch(e){return v.call(t)}return n=v.call(t),e?t[m]=r:delete t[m],n}:function(t){return v.call(t)},_=Boolean.prototype.toString;var w=b();function g(t){return"object"==typeof t&&(t instanceof Boolean||(w?function(t){try{return _.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===j(t)))}function h(t){return y(t)||g(t)}function O(){return new Function("return this;")()}p(h,"isPrimitive",y),p(h,"isObject",g);var S="object"==typeof self?self:null,E="object"==typeof window?window:null,T="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},A="object"==typeof T?T:null;var I=function(t){if(arguments.length){if(!y(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return O()}if(S)return S;if(E)return E;if(A)return A;throw new Error("unexpected error. Unable to resolve global object.")}(),P=I.document&&I.document.childNodes,N=Int8Array;function x(){return/^\s*function\s*([^(]*)/i}var B=/^\s*function\s*([^(]*)/i;p(x,"REGEXP",B);var C=Array.isArray?Array.isArray:function(t){return"[object Array]"===j(t)};function V(t){return null!==t&&"object"==typeof t}function k(t){var e,r,n,o;if(("Object"===(r=j(t).slice(8,-1))||"Error"===r)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(e=B.exec(n.toString()))return e[1]}return V(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":r}p(V,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(e){var r,n;if(!C(e))return!1;if(0===(r=e.length))return!1;for(n=0;n<r;n++)if(!1===t(e[n]))return!1;return!0}}(V));var F="function"==typeof t||"object"==typeof N||"function"==typeof P?function(t){return k(t).toLowerCase()}:function(t){var e;return null===t?"null":"object"===(e=typeof t)?k(t).toLowerCase():e};function G(t){var e=typeof t;return null!==t&&("object"===e||"function"===e)&&function(t){return"function"===F(t)}(t.next)}function L(t){return"number"==typeof t}var M=Number,R=M.prototype.toString;var U=b();function Y(t){return"object"==typeof t&&(t instanceof M||(U?function(t){try{return R.call(t),!0}catch(t){return!1}}(t):"[object Number]"===j(t)))}function X(t){return L(t)||Y(t)}p(X,"isPrimitive",L),p(X,"isObject",Y);var q=Number.POSITIVE_INFINITY,z=M.NEGATIVE_INFINITY,D=Math.floor;function H(t){return t<q&&t>z&&D(e=t)===e;var e}function J(t){return L(t)&&H(t)}function K(t){return Y(t)&&H(t.valueOf())}function Q(t){return J(t)||K(t)}function W(t){return J(t)&&t>=0}function Z(t){return K(t)&&t.valueOf()>=0}function $(t){return W(t)||Z(t)}function tt(){var t,e=arguments,r=e[0],n="https://stdlib.io/e/"+r+"?";for(t=1;t<e.length;t++)n+="&arg[]="+encodeURIComponent(e[t]);return n}return p(Q,"isPrimitive",J),p(Q,"isObject",K),p($,"isPrimitive",W),p($,"isObject",Z),function(t,e){var r,n;if(!G(t))throw new TypeError(tt("0CA48",t));if(arguments.length>1){if(!W(e))throw new TypeError(tt("0CA3k",e));r=e}else r=1e308;for(n=0;n<r&&!t.next().done;)n+=1;return t}}));
//# sourceMappingURL=index.js.map
