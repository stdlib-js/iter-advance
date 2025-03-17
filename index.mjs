// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-iterator-like@v0.2.2-esm/index.mjs";import{isPrimitive as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@v0.2.2-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.2-esm/index.mjs";function s(s,i){var n,o;if(!e(s))throw new TypeError(t("0OV3v",s));if(arguments.length>1){if(!r(i))throw new TypeError(t("0OV3X",i));n=i}else n=1e308;for(o=0;o<n&&!s.next().done;)o+=1;return s}export{s as default};
//# sourceMappingURL=index.mjs.map
