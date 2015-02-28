// Copyright (c) 2014 Quildreen Motta
//
// Permission is hereby granted, free of charge, to any person
// obtaining a copy of this software and associated documentation files
// (the "Software"), to deal in the Software without restriction,
// including without limitation the rights to use, copy, modify, merge,
// publish, distribute, sublicense, and/or sell copies of the Software,
// and to permit persons to whom the Software is furnished to do so,
// subject to the following conditions:
//
// The above copyright notice and this permission notice shall be
// included in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
// EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
// NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
// LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
// OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

/**
 * Displays a human-readable representation of built-in and custom objects
 *
 * @module core.inspect
 */

// -- Helpers ----------------------------------------------------------

/**
 * True if the value has a .toString method that returns a custom repr.
 *
 * @method
 * @private
 * @summary Any → Boolean
 */
function isCustom(a) {
  return a.toString
  &&     !Array.isArray(a)
  &&     a.toString() !== '[object Object]'
}

/**
 * Returns the [[Class]] of an object.
 *
 * @method
 * @private
 * @summary Any → String
 */
function classOf(a) {
  return Object.prototype.toString.call(a).slice(8, -1)
}

/**
 * True if an object is a String
 * 
 * @method
 * @private
 * @summary Any → Boolean
 */
function isString(a) {
  return classOf(a) === 'String'
}

/**
 * Returns a list of key/value pairs.
 *
 * @method
 * @private
 * @summary { String → * } → [(String, *)]
 */
function pairs(object) {
  return Object.keys(object).map(function(key){
    return { key: key, value: object[key] }
  })
}

/**
 * Displays the representation of a number.
 *
 * @method
 * @private
 * @summary Number → String
 */
function showNumber(a) {
  return Number(a).toString();
}

/**
 * Displays the representation of a boolean.
 *
 * @method
 * @private
 * @summary Boolean → String
 */
function showBoolean(a) {
  return Boolean(a).toString();
}

/**
 * Displays the representation of a string.
 *
 * @method
 * @private
 * @summary String → String
 */
function showString(a) {
  return JSON.stringify(String(a));
}

/**
 * Displays the representation of an array.
 *
 * @method
 * @private
 * @summary Number → [α] → String
 */
function showArray(maxDepth, array) {
  return '['
        + array.map(function(a) {
            return show(maxDepth - 1, a)
          }).join(', ')
        + ']';
}

/**
 * Displays the representation of an object.
 *
 * @method
 * @private
 * @summary Number → { String → * } → String
 */
function showObject(maxDepth, object) {
  return '{'
       + pairs(object).map(function(pair){
           return showString(pair.key) + ': ' + show(maxDepth - 1, pair.value)
         }).join(', ')
       + '}'
}

// -- Public interface -------------------------------------------------

/**
 * Displays the representation of anything.
 *
 * @method
 * @static
 * @summary Number → Any → String
 */
function show(maxDepth, value) {
  return value === undefined?   'undefined'
  :      value === null?        'null'
  :      isString(value)?       showString(value)
  :      isCustom(value)?       value.toString()
  :      maxDepth <= 0?         '(...)'
  :      Array.isArray(value)?  showArray(maxDepth, value)
  :      /* otherwise */        showObject(maxDepth, value)
}


module.exports = exports = function(a){ return show(5, a) };
exports.show = show;
