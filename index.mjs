// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-iterator-like@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@esm/index.mjs";var s=e,i=r.isPrimitive,n=t;var o=function(e,r){var t,o;if(!s(e))throw new TypeError(n("0CA48",e));if(arguments.length>1){if(!i(r))throw new TypeError(n("0CA3k",r));t=r}else t=1e308;for(o=0;o<t&&!e.next().done;)o+=1;return e};export{o as default};
//# sourceMappingURL=index.mjs.map
