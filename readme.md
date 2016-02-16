# style-to-css [![Build Status](https://travis-ci.org/bendrucker/style-to-css.svg?branch=master)](https://travis-ci.org/bendrucker/style-to-css)

> Convert DOM style objects into a CSS string


## Install

```
$ npm install --save style-to-css
```


## Usage

```js
var toCss = require('style-to-css')

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
