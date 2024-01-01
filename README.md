<!--

@license Apache-2.0

Copyright (c) 2019 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# iterAdvance

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Advance an [iterator][mdn-iterator-protocol].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import iterAdvance from 'https://cdn.jsdelivr.net/gh/stdlib-js/iter-advance@deno/mod.js';
```

#### iterAdvance( iterator\[, n] )

Eagerly advances and returns a provided [`iterator`][mdn-iterator-protocol].

```javascript
import array2iterator from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-to-iterator@deno/mod.js';

var arr = array2iterator( [ 0, 0, 0, 0, 1 ] );
var it = iterAdvance( arr );

var bool = ( it === arr );
// returns true

var v = it.next().done;
// returns true
```

By default, the function **eagerly** consumes an entire [`iterator`][mdn-iterator-protocol] (i.e., `n == 1e308`). To limit the number of iterations, provide a second argument.

```javascript
import array2iterator from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-to-iterator@deno/mod.js';

var arr = array2iterator( [ 0, 0, 0, 0, 1 ] );
var it = iterAdvance( arr, 4 );

var bool = ( it === arr );
// returns true

var v = it.next().value;
// returns 1

bool = it.next().done;
// returns true
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The function **eagerly** advances an input [iterator][mdn-iterator-protocol] `n` iterations or until the input [`iterator`][mdn-iterator-protocol] finishes, whichever comes first.

-   This function is equivalent to performing manual iteration using a `while` loop.

    ```javascript
    import array2iterator from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-to-iterator@deno/mod.js';

    var arr = array2iterator( [ 0, 0, 0, 0, 1 ] );

    var i = 0;
    var v;
    while ( i < 4 ) {
        v = arr.next();
        if ( v.done ) {
            break;
        }
        i += 1;
    }

    v = arr.next().value;
    // returns 1

    var bool = arr.next().done;
    // returns true
    ```

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import randu from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-iter-randu@deno/mod.js';
import iterLength from 'https://cdn.jsdelivr.net/gh/stdlib-js/iter-length@deno/mod.js';
import iterAdvance from 'https://cdn.jsdelivr.net/gh/stdlib-js/iter-advance@deno/mod.js';

// Create an iterator which generates uniformly distributed pseudorandom numbers:
var opts = {
    'iter': 100
};
var it1 = randu( opts );

// Discard the first 10 values:
var it2 = iterAdvance( it1, 10 );

// Determine the iterator length:
var len = iterLength( it2 );
// returns 90
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/iter-head`][@stdlib/iter/head]</span><span class="delimiter">: </span><span class="description">create an iterator which returns the first `n` values of a provided iterator.</span>
-   <span class="package-name">[`@stdlib/iter-slice`][@stdlib/iter/slice]</span><span class="delimiter">: </span><span class="description">create an iterator which returns a subsequence of iterated values from a provided iterator.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/iter-advance.svg
[npm-url]: https://npmjs.org/package/@stdlib/iter-advance

[test-image]: https://github.com/stdlib-js/iter-advance/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/iter-advance/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/iter-advance/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/iter-advance?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/iter-advance.svg
[dependencies-url]: https://david-dm.org/stdlib-js/iter-advance/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/iter-advance/tree/deno
[umd-url]: https://github.com/stdlib-js/iter-advance/tree/umd
[esm-url]: https://github.com/stdlib-js/iter-advance/tree/esm
[branches-url]: https://github.com/stdlib-js/iter-advance/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/iter-advance/main/LICENSE

[mdn-iterator-protocol]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterator_protocol

<!-- <related-links> -->

[@stdlib/iter/head]: https://github.com/stdlib-js/iter-head/tree/deno

[@stdlib/iter/slice]: https://github.com/stdlib-js/iter-slice/tree/deno

<!-- </related-links> -->

</section>

<!-- /.links -->
