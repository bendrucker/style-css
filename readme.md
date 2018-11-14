# style-css [![Build Status](https://travis-ci.org/bendrucker/style-css.svg?branch=master)](https://travis-ci.org/bendrucker/style-css) [![Greenkeeper badge](https://badges.greenkeeper.io/bendrucker/style-css.svg)](https://greenkeeper.io/)

> Convert selectors with DOM style objects into valid CSS strings


## Install

```
$ npm install --save style-css
```


## Usage

```js
var toCss = require('style-css')

toCss({body: {fontSize: '14px'}})
//=> body{font-size:14px;}
```

## API

#### `toCss(styles)` -> `string`

##### styles

*Required*  
Type: `object`

A [DOM style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) object.


## License

MIT © [Ben Drucker](http://bendrucker.me)
