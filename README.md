<!--

@license Apache-2.0

Copyright (c) 2025 The Stdlib Authors.

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

# crot

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Apply a plane rotation with real cosine and complex sine to a pair of single-precision complex floating-point vectors.



<section class="usage">

## Usage

To use in Observable,

```javascript
crot = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/lapack-base-crot@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var crot = require( 'path/to/vendor/umd/lapack-base-crot/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/lapack-base-crot@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.crot;
})();
</script>
```

#### crot( N, cx, strideCX, cy, strideCY, c, s )

Applies a plane rotation with real cosine and complex sine.

```javascript
var Complex64Array = require( '@stdlib/array-complex64' );
var Complex64 = require( '@stdlib/complex-float32-ctor' );
var realf = require( '@stdlib/complex-float32-real' );
var imagf = require( '@stdlib/complex-float32-imag' );

var cx = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
var cy = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
var s = new Complex64( 0.0, 0.75 );

crot( cx.length, cx, 1, cy, 1, 1.25, s );

var z = cy.get( 0 );
// returns <Complex64>

var re = realf( z );
// returns ~-1.5

var im = imagf( z );
// returns ~0.75

z = cx.get( 0 );
// returns <Complex64>

re = realf( z );
// returns ~1.25

im = imagf( z );
// returns ~2.5
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **cx**: first input [`Complex64Array`][@stdlib/array/complex64].
-   **strideCX**: stride length for `cx`.
-   **cy**: second input [`Complex64Array`][@stdlib/array/complex64].
-   **strideCY**: stride length for `cy`.

The `N` and stride parameters determine how values from `cx` and `cy` are accessed at runtime. For example, to apply a plane rotation to every other element,

```javascript
var Complex64Array = require( '@stdlib/array-complex64' );
var Complex64 = require( '@stdlib/complex-float32-ctor' );
var realf = require( '@stdlib/complex-float32-real' );
var imagf = require( '@stdlib/complex-float32-imag' );

var cx = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
var cy = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
var s = new Complex64( 0.0, 0.75 );

crot( 2, cx, 2, cy, 2, 1.25, s );

var z = cy.get( 0 );
// returns <Complex64>

var re = realf( z );
// returns ~-1.5

var im = imagf( z );
// returns ~0.75

z = cx.get( 0 );
// returns <Complex64>

re = realf( z );
// returns ~1.25

im = imagf( z );
// returns ~2.5
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
var Complex64Array = require( '@stdlib/array-complex64' );
var Complex64 = require( '@stdlib/complex-float32-ctor' );
var realf = require( '@stdlib/complex-float32-real' );
var imagf = require( '@stdlib/complex-float32-imag' );

// Initial arrays...
var cx0 = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
var cy0 = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

// Create offset views...
var cx1 = new Complex64Array( cx0.buffer, cx0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var cy1 = new Complex64Array( cy0.buffer, cy0.BYTES_PER_ELEMENT*2 ); // start at 3rd element

var s = new Complex64( 0.0, 0.75 );

crot( 2, cx1, -2, cy1, 1, 1.25, s );

var z = cy0.get( 2 );
// returns <Complex64>

var re = realf( z );
// returns ~-6

var im = imagf( z );
// returns ~5.25

z = cx0.get( 3 );
// returns <Complex64>

re = realf( z );
// returns ~8.75

im = imagf( z );
// returns ~10
```

#### crot.ndarray( N, cx, strideCX, offsetCX, cy, strideCY, offsetCY, c, s )

Applies a plane rotation with real cosine and complex sine using alternative indexing semantics.

```javascript
var Complex64Array = require( '@stdlib/array-complex64' );
var Complex64 = require( '@stdlib/complex-float32-ctor' );
var realf = require( '@stdlib/complex-float32-real' );
var imagf = require( '@stdlib/complex-float32-imag' );

var cx = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var cy = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
var s = new Complex64( 0.0, 0.75 );

crot.ndarray( cx.length, cx, 1, 0, cy, 1, 0, 1.25, s );

var z = cy.get( 0 );
// returns <Complex64>

var re = realf( z );
// returns ~-1.5

var im = imagf( z );
// returns ~0.75

z = cx.get( 0 );
// returns <Complex64>

re = realf( z );
// returns ~1.25

im = imagf( z );
// returns ~2.5
```

The function has the following additional parameters:

-   **offsetCX**: starting index for `cx`.
-   **offsetCY**: starting index for `cy`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameters support indexing semantics based on starting indices. For example, to apply a plane rotation to every other element starting from the second element,

```javascript
var Complex64Array = require( '@stdlib/array-complex64' );
var Complex64 = require( '@stdlib/complex-float32-ctor' );
var realf = require( '@stdlib/complex-float32-real' );
var imagf = require( '@stdlib/complex-float32-imag' );

var cx = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
var cy = new Complex64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );
var s = new Complex64( 0.0, 0.75 );

crot.ndarray( 2, cx, 2, 1, cy, 2, 1, 1.25, s );

var z = cy.get( 3 );
// returns <Complex64>

var re = realf( z );
// returns ~-6.0

var im = imagf( z );
// returns ~5.25

z = cx.get( 1 );
// returns <Complex64>

re = realf( z );
// returns ~3.75

im = imagf( z );
// returns ~5.0
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions leave `cx` and `cy` unchanged.
-   `crot()` corresponds to the [LAPACK][lapack] routine [`crot`][crot].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/random-base-discrete-uniform@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/array-filled-by@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/complex-float32-ctor@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/blas-base-ccopy@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/array-zeros@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/console-log-each@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/lapack-base-crot@umd/browser.js"></script>
<script type="text/javascript">
(function () {

function rand() {
    return new Complex64( discreteUniform( 0, 10 ), discreteUniform( -5, 5 ) );
}

// Generate random input arrays:
var cx = filledarrayBy( 10, 'complex64', rand );
var cxc = ccopy( cx.length, cx, 1, zeros( cx.length, 'complex64' ), 1 );

var cy = filledarrayBy( 10, 'complex64', rand );
var cyc = ccopy( cy.length, cy, 1, zeros( cy.length, 'complex64' ), 1 );

var s = new Complex64( 0.0, 0.75 );

// Apply a plane rotation:
crot( cx.length, cx, 1, cy, 1, 1.25, s );

// Print the results:
logEach( '(%s,%s) => (%s,%s)', cxc, cyc, cx, cy );

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/lapack-base-crot.svg
[npm-url]: https://npmjs.org/package/@stdlib/lapack-base-crot

[test-image]: https://github.com/stdlib-js/lapack-base-crot/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/lapack-base-crot/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/lapack-base-crot/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/lapack-base-crot?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/lapack-base-crot.svg
[dependencies-url]: https://david-dm.org/stdlib-js/lapack-base-crot/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/lapack-base-crot/tree/deno
[deno-readme]: https://github.com/stdlib-js/lapack-base-crot/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/lapack-base-crot/tree/umd
[umd-readme]: https://github.com/stdlib-js/lapack-base-crot/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/lapack-base-crot/tree/esm
[esm-readme]: https://github.com/stdlib-js/lapack-base-crot/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/lapack-base-crot/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/lapack-base-crot/main/LICENSE

[lapack]: http://www.netlib.org/lapack

[crot]: https://netlib.org/lapack/explore-html/d1/d45/group__rot_ga25544801d45dcabdec7b24d863ebea9c.html#ga25544801d45dcabdec7b24d863ebea9c

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[@stdlib/array/complex64]: https://github.com/stdlib-js/array-complex64/tree/umd

</section>

<!-- /.links -->
