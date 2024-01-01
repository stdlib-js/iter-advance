// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-iterator-like@v0.1.1-esm/index.mjs";import{isPrimitive as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@v0.1.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";function n(n,s){var i,a;if(!e(n))throw new TypeError(r("invalid argument. First argument must be an iterator. Value: `%s`.",n));if(arguments.length>1){if(!t(s))throw new TypeError(r("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",s));i=s}else i=1e308;for(a=0;a<i&&!n.next().done;)a+=1;return n}export{n as default};
//# sourceMappingURL=index.mjs.map