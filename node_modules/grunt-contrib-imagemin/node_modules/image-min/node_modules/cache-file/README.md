# cache-file [![Build Status](https://secure.travis-ci.org/kevva/cache-file.png?branch=master)](http://travis-ci.org/kevva/cache-file)

Store and get files from cache with Node.js.

## Getting started

Install with [npm](https://npmjs.org/package/cache-file): `npm install cache-file`

## Examples

```js
var cache = require('cache-file');

// store test.jpg inside a test folder in cache
cache.store('test.jpg', { name: 'test' });

// get test.jpg from cache and save it as test-restored.jpg
cache.get('test.jpg', 'test-restored.jpg', { name: 'test' });

// clean all files inside the test folder inside cache
cache.clean('test.jpg', { name: 'test' });
```

## API

### .store(src, dest, opts)

Store a file inside cache. Use the `name` option to specify a specific folder 
inside cache.

### .get(src, dest, opts)

Get a cached file and save it to a desired location. Use the `name` option to 
look in a specific folder.

### .check(src, opts)

Check if a cached file exists.

### .clean(src, opts)

Clean cache. If the `name` option is specified it'll remove the folder completely. 
Else it'll remove the file defined in `src`.

## Options

* `name` — Name of the folder in cache

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License) (c) [Kevin Mårtensson](http://kevinmartensson.com)
