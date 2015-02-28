core.inspect
============

[![Build status](https://img.shields.io/travis/Folktale/core.inspect/master.svg?style=flat)](https://travis-ci.org/Folktale/core.inspect)
[![NPM version](https://img.shields.io/npm/v/core.inspect.svg?style=flat)](https://npmjs.org/package/core.inspect)
[![Dependencies status](https://img.shields.io/david/Folktale/core.inspect.svg?style=flat)](https://david-dm.org/Folktale/core.inspect)
![Licence](https://img.shields.io/npm/l/core.inspect.svg?style=flat&label=licence)
![Stable API](https://img.shields.io/badge/API_stability-stable-green.svg?style=flat)


Displays a human-readable representation of built-in and custom objects


## Example

```js
var show = require('core.inspect');

show([1, { foo: true }, "qux" ]);
// => '[1, {"foo": true}, "qux"]'

show([1, [2, [3, [4, [5, [6, [7]]]]]]]);
// => '[1, [2, [3, [4, [5, (...)]]]]]'

show({ foo: { toString: function(){ return "Yay" }}});
// => '{"foo": Yay}'
```


## Installing

The easiest way is to grab it from NPM. If you're running in a Browser
environment, you can use [Browserify][]

    $ npm install core.inspect


### Using with CommonJS

If you're not using NPM, [Download the latest release][release], and require
the `core.inspect.umd.js` file:

```js
var Inspect = require('core.inspect')
```


### Using with AMD

[Download the latest release][release], and require the `core.inspect.umd.js`
file:

```js
require(['core.inspect'], function(Inspect) {
  ( ... )
})
```


### Using without modules

[Download the latest release][release], and load the `core.inspect.umd.js`
file. The properties are exposed in the global `Folktale.Core.Inspect` object:

```html
<script src="/path/to/core.inspect.umd.js"></script>
```


### Compiling from source

If you want to compile this library from the source, you'll need [Git][],
[Make][], [Node.js][], and run the following commands:

    $ git clone git://github.com/Folktale/core.inspect.git
    $ cd core.inspect
    $ npm install
    $ make bundle
    
This will generate the `dist/core.inspect.umd.js` file, which you can load in
any JavaScript environment.

    
## Documentation

You can [read the documentation online][docs] or build it yourself:

    $ git clone git://github.com/Folktale/core.inspect.git
    $ cd core.inspect
    $ npm install
    $ make documentation

Then open the file `docs/index.html` in your browser.


## Platform support

This library assumes an ES5 environment, but can be easily supported in ES3
platforms by the use of shims. Just include [es5-shim][] :)


## Licence

Copyright (c) 2014 Quildreen Motta.

Released under the [MIT licence](https://github.com/Folktale/core.inspect/blob/master/LICENCE).

<!-- links -->
[Fantasy Land]: https://github.com/fantasyland/fantasy-land
[Browserify]: http://browserify.org/
[Git]: http://git-scm.com/
[Make]: http://www.gnu.org/software/make/
[Node.js]: http://nodejs.org/
[es5-shim]: https://github.com/kriskowal/es5-shim
[docs]: http://Folktale.github.io/core.inspect
<!-- [release: https://github.com/Folktale/core.inspect/releases/download/v$VERSION/core.inspect-$VERSION.tar.gz] -->
[release]: https://github.com/Folktale/core.inspect/releases/download/v1.0.3/core.inspect-1.0.3.tar.gz
<!-- [/release] -->
