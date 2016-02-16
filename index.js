'use strict'

var toCss = require('to-css')
var dash = require('camel-2-dash')
var extend = require('xtend')

module.exports = function styleToCss (style, options) {
  return toCss(style, extend({property: dash}, options || {}))
}
