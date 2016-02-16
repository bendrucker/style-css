'use strict'

var test = require('tape')
var styleToCss = require('./')

test(function (t) {
  t.equal(styleToCss({body: {fontSize: '12px'}}), 'body{font-size:12px;}')
  t.end()
})
