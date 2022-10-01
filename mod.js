// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t=/./,r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e,n=Object.defineProperty,o=Object.prototype,u=o.toString,i=o.__defineGetter__,c=o.__defineSetter__,f=o.__lookupGetter__,a=o.__lookupSetter__;e=function(){try{return r({},"x",{}),!0}catch(t){return!1}}()?n:function(t,r,e){var n,l,p,y;if("object"!=typeof t||null===t||"[object Array]"===u.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===u.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((l="value"in e)&&(f.call(t,r)||a.call(t,r)?(n=t.__proto__,t.__proto__=o,delete t[r],t[r]=e.value,t.__proto__=n):t[r]=e.value),p="get"in e,y="set"in e,l&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&i&&i.call(t,r,e.get),y&&c&&c.call(t,r,e.set),t};var l=e;function p(t,r,e){l(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}function y(t){return"boolean"==typeof t}var b="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function s(){return b&&"symbol"==typeof Symbol.toStringTag}var v=Object.prototype.toString;var d=Object.prototype.hasOwnProperty;var j="function"==typeof Symbol?Symbol.toStringTag:"";var m=s()?function(t){var r,e,n,o,u;if(null==t)return v.call(t);e=t[j],u=j,r=null!=(o=t)&&d.call(o,u);try{t[j]=void 0}catch(r){return v.call(t)}return n=v.call(t),r?t[j]=e:delete t[j],n}:function(t){return v.call(t)},_=Boolean.prototype.toString;var w=s();function g(t){return"object"==typeof t&&(t instanceof Boolean||(w?function(t){try{return _.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===m(t)))}function h(t){return y(t)||g(t)}function O(){return new Function("return this;")()}p(h,"isPrimitive",y),p(h,"isObject",g);var S="object"==typeof self?self:null,E="object"==typeof window?window:null,A="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},T="object"==typeof A?A:null;var I=function(t){if(arguments.length){if(!y(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return O()}if(S)return S;if(E)return E;if(T)return T;throw new Error("unexpected error. Unable to resolve global object.")}(),P=I.document&&I.document.childNodes,N=Int8Array;function B(){return/^\s*function\s*([^(]*)/i}var x=/^\s*function\s*([^(]*)/i;p(B,"REGEXP",x);var C=Array.isArray?Array.isArray:function(t){return"[object Array]"===m(t)};function V(t){return null!==t&&"object"==typeof t}function k(t){var r,e,n,o;if(("Object"===(e=m(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=x.exec(n.toString()))return r[1]}return V(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}p(V,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var e,n;if(!C(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(V));var F="function"==typeof t||"object"==typeof N||"function"==typeof P?function(t){return k(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?k(t).toLowerCase():r};function G(t){var r=typeof t;return null!==t&&("object"===r||"function"===r)&&function(t){return"function"===F(t)}(t.next)}function L(t){return"number"==typeof t}var M=Number,R=M.prototype.toString;var U=s();function Y(t){return"object"==typeof t&&(t instanceof M||(U?function(t){try{return R.call(t),!0}catch(t){return!1}}(t):"[object Number]"===m(t)))}function X(t){return L(t)||Y(t)}p(X,"isPrimitive",L),p(X,"isObject",Y);var q=Number.POSITIVE_INFINITY,z=M.NEGATIVE_INFINITY,D=Math.floor;function H(t){return t<q&&t>z&&D(r=t)===r;var r}function J(t){return L(t)&&H(t)}function K(t){return Y(t)&&H(t.valueOf())}function Q(t){return J(t)||K(t)}function W(t){return J(t)&&t>=0}function Z(t){return K(t)&&t.valueOf()>=0}function $(t){return W(t)||Z(t)}function tt(){var t,r=arguments,e=r[0],n="https://stdlib.io/e/"+e+"?";for(t=1;t<r.length;t++)n+="&arg[]="+encodeURIComponent(r[t]);return n}function rt(t,r){var e,n;if(!G(t))throw new TypeError(tt("0CA48",t));if(arguments.length>1){if(!W(r))throw new TypeError(tt("0CA3k",r));e=r}else e=1e308;for(n=0;n<e&&!t.next().done;)n+=1;return t}p(Q,"isPrimitive",J),p(Q,"isObject",K),p($,"isPrimitive",W),p($,"isObject",Z);export{rt as default};
//# sourceMappingURL=mod.js.map
