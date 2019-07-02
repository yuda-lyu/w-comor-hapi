/*!
 * ht-client v1.0.0
 * (c) 2018-2019 yuda-lyu(semisphere)
 * Released under the MIT License.
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('axios')) :
  typeof define === 'function' && define.amd ? define(['axios'], factory) :
  (global = global || self, global['ht-client'] = factory(global.axios));
}(this, function (axios) { 'use strict';

  axios = axios && axios.hasOwnProperty('default') ? axios['default'] : axios;

  /**
   * Checks if `value` is classified as an `Array` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an array, else `false`.
   * @example
   *
   * _.isArray([1, 2, 3]);
   * // => true
   *
   * _.isArray(document.body.children);
   * // => false
   *
   * _.isArray('abc');
   * // => false
   *
   * _.isArray(_.noop);
   * // => false
   */
  var isArray = Array.isArray;
  var isArray_1 = isArray;

  function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  /** Detect free variable `global` from Node.js. */

  var freeGlobal = _typeof(commonjsGlobal) == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
  var _freeGlobal = freeGlobal;

  /** Detect free variable `self`. */

  var freeSelf = (typeof self === "undefined" ? "undefined" : _typeof(self)) == 'object' && self && self.Object === Object && self;
  /** Used as a reference to the global object. */

  var root = _freeGlobal || freeSelf || Function('return this')();
  var _root = root;

  /** Built-in value references. */

  var _Symbol2 = _root.Symbol;
  var _Symbol = _Symbol2;

  /** Used for built-in method references. */

  var objectProto = Object.prototype;
  /** Used to check objects for own properties. */

  var hasOwnProperty = objectProto.hasOwnProperty;
  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */

  var nativeObjectToString = objectProto.toString;
  /** Built-in value references. */

  var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;
  /**
   * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the raw `toStringTag`.
   */

  function getRawTag(value) {
    var isOwn = hasOwnProperty.call(value, symToStringTag),
        tag = value[symToStringTag];

    try {
      value[symToStringTag] = undefined;
      var unmasked = true;
    } catch (e) {}

    var result = nativeObjectToString.call(value);

    if (unmasked) {
      if (isOwn) {
        value[symToStringTag] = tag;
      } else {
        delete value[symToStringTag];
      }
    }

    return result;
  }

  var _getRawTag = getRawTag;

  /** Used for built-in method references. */
  var objectProto$1 = Object.prototype;
  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */

  var nativeObjectToString$1 = objectProto$1.toString;
  /**
   * Converts `value` to a string using `Object.prototype.toString`.
   *
   * @private
   * @param {*} value The value to convert.
   * @returns {string} Returns the converted string.
   */

  function objectToString(value) {
    return nativeObjectToString$1.call(value);
  }

  var _objectToString = objectToString;

  /** `Object#toString` result references. */

  var nullTag = '[object Null]',
      undefinedTag = '[object Undefined]';
  /** Built-in value references. */

  var symToStringTag$1 = _Symbol ? _Symbol.toStringTag : undefined;
  /**
   * The base implementation of `getTag` without fallbacks for buggy environments.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the `toStringTag`.
   */

  function baseGetTag(value) {
    if (value == null) {
      return value === undefined ? undefinedTag : nullTag;
    }

    return symToStringTag$1 && symToStringTag$1 in Object(value) ? _getRawTag(value) : _objectToString(value);
  }

  var _baseGetTag = baseGetTag;

  /**
   * Checks if `value` is object-like. A value is object-like if it's not `null`
   * and has a `typeof` result of "object".
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
   * @example
   *
   * _.isObjectLike({});
   * // => true
   *
   * _.isObjectLike([1, 2, 3]);
   * // => true
   *
   * _.isObjectLike(_.noop);
   * // => false
   *
   * _.isObjectLike(null);
   * // => false
   */
  function isObjectLike(value) {
    return value != null && _typeof(value) == 'object';
  }

  var isObjectLike_1 = isObjectLike;

  /** `Object#toString` result references. */

  var symbolTag = '[object Symbol]';
  /**
   * Checks if `value` is classified as a `Symbol` primitive or object.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
   * @example
   *
   * _.isSymbol(Symbol.iterator);
   * // => true
   *
   * _.isSymbol('abc');
   * // => false
   */

  function isSymbol(value) {
    return _typeof(value) == 'symbol' || isObjectLike_1(value) && _baseGetTag(value) == symbolTag;
  }

  var isSymbol_1 = isSymbol;

  /** Used to match property names within property paths. */

  var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      reIsPlainProp = /^\w*$/;
  /**
   * Checks if `value` is a property name and not a property path.
   *
   * @private
   * @param {*} value The value to check.
   * @param {Object} [object] The object to query keys on.
   * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
   */

  function isKey(value, object) {
    if (isArray_1(value)) {
      return false;
    }

    var type = _typeof(value);

    if (type == 'number' || type == 'symbol' || type == 'boolean' || value == null || isSymbol_1(value)) {
      return true;
    }

    return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
  }

  var _isKey = isKey;

  /**
   * Checks if `value` is the
   * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
   * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an object, else `false`.
   * @example
   *
   * _.isObject({});
   * // => true
   *
   * _.isObject([1, 2, 3]);
   * // => true
   *
   * _.isObject(_.noop);
   * // => true
   *
   * _.isObject(null);
   * // => false
   */
  function isObject(value) {
    var type = _typeof(value);

    return value != null && (type == 'object' || type == 'function');
  }

  var isObject_1 = isObject;

  /** `Object#toString` result references. */

  var asyncTag = '[object AsyncFunction]',
      funcTag = '[object Function]',
      genTag = '[object GeneratorFunction]',
      proxyTag = '[object Proxy]';
  /**
   * Checks if `value` is classified as a `Function` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a function, else `false`.
   * @example
   *
   * _.isFunction(_);
   * // => true
   *
   * _.isFunction(/abc/);
   * // => false
   */

  function isFunction(value) {
    if (!isObject_1(value)) {
      return false;
    } // The use of `Object#toString` avoids issues with the `typeof` operator
    // in Safari 9 which returns 'object' for typed arrays and other constructors.


    var tag = _baseGetTag(value);
    return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
  }

  var isFunction_1 = isFunction;

  /** Used to detect overreaching core-js shims. */

  var coreJsData = _root['__core-js_shared__'];
  var _coreJsData = coreJsData;

  /** Used to detect methods masquerading as native. */

  var maskSrcKey = function () {
    var uid = /[^.]+$/.exec(_coreJsData && _coreJsData.keys && _coreJsData.keys.IE_PROTO || '');
    return uid ? 'Symbol(src)_1.' + uid : '';
  }();
  /**
   * Checks if `func` has its source masked.
   *
   * @private
   * @param {Function} func The function to check.
   * @returns {boolean} Returns `true` if `func` is masked, else `false`.
   */


  function isMasked(func) {
    return !!maskSrcKey && maskSrcKey in func;
  }

  var _isMasked = isMasked;

  /** Used for built-in method references. */
  var funcProto = Function.prototype;
  /** Used to resolve the decompiled source of functions. */

  var funcToString = funcProto.toString;
  /**
   * Converts `func` to its source code.
   *
   * @private
   * @param {Function} func The function to convert.
   * @returns {string} Returns the source code.
   */

  function toSource(func) {
    if (func != null) {
      try {
        return funcToString.call(func);
      } catch (e) {}

      try {
        return func + '';
      } catch (e) {}
    }

    return '';
  }

  var _toSource = toSource;

  /**
   * Used to match `RegExp`
   * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
   */

  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
  /** Used to detect host constructors (Safari). */

  var reIsHostCtor = /^\[object .+?Constructor\]$/;
  /** Used for built-in method references. */

  var funcProto$1 = Function.prototype,
      objectProto$2 = Object.prototype;
  /** Used to resolve the decompiled source of functions. */

  var funcToString$1 = funcProto$1.toString;
  /** Used to check objects for own properties. */

  var hasOwnProperty$1 = objectProto$2.hasOwnProperty;
  /** Used to detect if a method is native. */

  var reIsNative = RegExp('^' + funcToString$1.call(hasOwnProperty$1).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
  /**
   * The base implementation of `_.isNative` without bad shim checks.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a native function,
   *  else `false`.
   */

  function baseIsNative(value) {
    if (!isObject_1(value) || _isMasked(value)) {
      return false;
    }

    var pattern = isFunction_1(value) ? reIsNative : reIsHostCtor;
    return pattern.test(_toSource(value));
  }

  var _baseIsNative = baseIsNative;

  /**
   * Gets the value at `key` of `object`.
   *
   * @private
   * @param {Object} [object] The object to query.
   * @param {string} key The key of the property to get.
   * @returns {*} Returns the property value.
   */
  function getValue(object, key) {
    return object == null ? undefined : object[key];
  }

  var _getValue = getValue;

  /**
   * Gets the native function at `key` of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {string} key The key of the method to get.
   * @returns {*} Returns the function if it's native, else `undefined`.
   */

  function getNative(object, key) {
    var value = _getValue(object, key);
    return _baseIsNative(value) ? value : undefined;
  }

  var _getNative = getNative;

  /* Built-in method references that are verified to be native. */

  var nativeCreate = _getNative(Object, 'create');
  var _nativeCreate = nativeCreate;

  /**
   * Removes all key-value entries from the hash.
   *
   * @private
   * @name clear
   * @memberOf Hash
   */

  function hashClear() {
    this.__data__ = _nativeCreate ? _nativeCreate(null) : {};
    this.size = 0;
  }

  var _hashClear = hashClear;

  /**
   * Removes `key` and its value from the hash.
   *
   * @private
   * @name delete
   * @memberOf Hash
   * @param {Object} hash The hash to modify.
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function hashDelete(key) {
    var result = this.has(key) && delete this.__data__[key];
    this.size -= result ? 1 : 0;
    return result;
  }

  var _hashDelete = hashDelete;

  /** Used to stand-in for `undefined` hash values. */

  var HASH_UNDEFINED = '__lodash_hash_undefined__';
  /** Used for built-in method references. */

  var objectProto$3 = Object.prototype;
  /** Used to check objects for own properties. */

  var hasOwnProperty$2 = objectProto$3.hasOwnProperty;
  /**
   * Gets the hash value for `key`.
   *
   * @private
   * @name get
   * @memberOf Hash
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */

  function hashGet(key) {
    var data = this.__data__;

    if (_nativeCreate) {
      var result = data[key];
      return result === HASH_UNDEFINED ? undefined : result;
    }

    return hasOwnProperty$2.call(data, key) ? data[key] : undefined;
  }

  var _hashGet = hashGet;

  /** Used for built-in method references. */

  var objectProto$4 = Object.prototype;
  /** Used to check objects for own properties. */

  var hasOwnProperty$3 = objectProto$4.hasOwnProperty;
  /**
   * Checks if a hash value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf Hash
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */

  function hashHas(key) {
    var data = this.__data__;
    return _nativeCreate ? data[key] !== undefined : hasOwnProperty$3.call(data, key);
  }

  var _hashHas = hashHas;

  /** Used to stand-in for `undefined` hash values. */

  var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';
  /**
   * Sets the hash `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf Hash
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the hash instance.
   */

  function hashSet(key, value) {
    var data = this.__data__;
    this.size += this.has(key) ? 0 : 1;
    data[key] = _nativeCreate && value === undefined ? HASH_UNDEFINED$1 : value;
    return this;
  }

  var _hashSet = hashSet;

  /**
   * Creates a hash object.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */

  function Hash(entries) {
    var index = -1,
        length = entries == null ? 0 : entries.length;
    this.clear();

    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  } // Add methods to `Hash`.


  Hash.prototype.clear = _hashClear;
  Hash.prototype['delete'] = _hashDelete;
  Hash.prototype.get = _hashGet;
  Hash.prototype.has = _hashHas;
  Hash.prototype.set = _hashSet;
  var _Hash = Hash;

  /**
   * Removes all key-value entries from the list cache.
   *
   * @private
   * @name clear
   * @memberOf ListCache
   */
  function listCacheClear() {
    this.__data__ = [];
    this.size = 0;
  }

  var _listCacheClear = listCacheClear;

  /**
   * Performs a
   * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
   * comparison between two values to determine if they are equivalent.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to compare.
   * @param {*} other The other value to compare.
   * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
   * @example
   *
   * var object = { 'a': 1 };
   * var other = { 'a': 1 };
   *
   * _.eq(object, object);
   * // => true
   *
   * _.eq(object, other);
   * // => false
   *
   * _.eq('a', 'a');
   * // => true
   *
   * _.eq('a', Object('a'));
   * // => false
   *
   * _.eq(NaN, NaN);
   * // => true
   */
  function eq(value, other) {
    return value === other || value !== value && other !== other;
  }

  var eq_1 = eq;

  /**
   * Gets the index at which the `key` is found in `array` of key-value pairs.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} key The key to search for.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */

  function assocIndexOf(array, key) {
    var length = array.length;

    while (length--) {
      if (eq_1(array[length][0], key)) {
        return length;
      }
    }

    return -1;
  }

  var _assocIndexOf = assocIndexOf;

  /** Used for built-in method references. */

  var arrayProto = Array.prototype;
  /** Built-in value references. */

  var splice = arrayProto.splice;
  /**
   * Removes `key` and its value from the list cache.
   *
   * @private
   * @name delete
   * @memberOf ListCache
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */

  function listCacheDelete(key) {
    var data = this.__data__,
        index = _assocIndexOf(data, key);

    if (index < 0) {
      return false;
    }

    var lastIndex = data.length - 1;

    if (index == lastIndex) {
      data.pop();
    } else {
      splice.call(data, index, 1);
    }

    --this.size;
    return true;
  }

  var _listCacheDelete = listCacheDelete;

  /**
   * Gets the list cache value for `key`.
   *
   * @private
   * @name get
   * @memberOf ListCache
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */

  function listCacheGet(key) {
    var data = this.__data__,
        index = _assocIndexOf(data, key);
    return index < 0 ? undefined : data[index][1];
  }

  var _listCacheGet = listCacheGet;

  /**
   * Checks if a list cache value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf ListCache
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */

  function listCacheHas(key) {
    return _assocIndexOf(this.__data__, key) > -1;
  }

  var _listCacheHas = listCacheHas;

  /**
   * Sets the list cache `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf ListCache
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the list cache instance.
   */

  function listCacheSet(key, value) {
    var data = this.__data__,
        index = _assocIndexOf(data, key);

    if (index < 0) {
      ++this.size;
      data.push([key, value]);
    } else {
      data[index][1] = value;
    }

    return this;
  }

  var _listCacheSet = listCacheSet;

  /**
   * Creates an list cache object.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */

  function ListCache(entries) {
    var index = -1,
        length = entries == null ? 0 : entries.length;
    this.clear();

    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  } // Add methods to `ListCache`.


  ListCache.prototype.clear = _listCacheClear;
  ListCache.prototype['delete'] = _listCacheDelete;
  ListCache.prototype.get = _listCacheGet;
  ListCache.prototype.has = _listCacheHas;
  ListCache.prototype.set = _listCacheSet;
  var _ListCache = ListCache;

  /* Built-in method references that are verified to be native. */

  var Map = _getNative(_root, 'Map');
  var _Map = Map;

  /**
   * Removes all key-value entries from the map.
   *
   * @private
   * @name clear
   * @memberOf MapCache
   */

  function mapCacheClear() {
    this.size = 0;
    this.__data__ = {
      'hash': new _Hash(),
      'map': new (_Map || _ListCache)(),
      'string': new _Hash()
    };
  }

  var _mapCacheClear = mapCacheClear;

  /**
   * Checks if `value` is suitable for use as unique object key.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
   */
  function isKeyable(value) {
    var type = _typeof(value);

    return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
  }

  var _isKeyable = isKeyable;

  /**
   * Gets the data for `map`.
   *
   * @private
   * @param {Object} map The map to query.
   * @param {string} key The reference key.
   * @returns {*} Returns the map data.
   */

  function getMapData(map, key) {
    var data = map.__data__;
    return _isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
  }

  var _getMapData = getMapData;

  /**
   * Removes `key` and its value from the map.
   *
   * @private
   * @name delete
   * @memberOf MapCache
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */

  function mapCacheDelete(key) {
    var result = _getMapData(this, key)['delete'](key);
    this.size -= result ? 1 : 0;
    return result;
  }

  var _mapCacheDelete = mapCacheDelete;

  /**
   * Gets the map value for `key`.
   *
   * @private
   * @name get
   * @memberOf MapCache
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */

  function mapCacheGet(key) {
    return _getMapData(this, key).get(key);
  }

  var _mapCacheGet = mapCacheGet;

  /**
   * Checks if a map value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf MapCache
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */

  function mapCacheHas(key) {
    return _getMapData(this, key).has(key);
  }

  var _mapCacheHas = mapCacheHas;

  /**
   * Sets the map `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf MapCache
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the map cache instance.
   */

  function mapCacheSet(key, value) {
    var data = _getMapData(this, key),
        size = data.size;
    data.set(key, value);
    this.size += data.size == size ? 0 : 1;
    return this;
  }

  var _mapCacheSet = mapCacheSet;

  /**
   * Creates a map cache object to store key-value pairs.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */

  function MapCache(entries) {
    var index = -1,
        length = entries == null ? 0 : entries.length;
    this.clear();

    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  } // Add methods to `MapCache`.


  MapCache.prototype.clear = _mapCacheClear;
  MapCache.prototype['delete'] = _mapCacheDelete;
  MapCache.prototype.get = _mapCacheGet;
  MapCache.prototype.has = _mapCacheHas;
  MapCache.prototype.set = _mapCacheSet;
  var _MapCache = MapCache;

  /** Error message constants. */

  var FUNC_ERROR_TEXT = 'Expected a function';
  /**
   * Creates a function that memoizes the result of `func`. If `resolver` is
   * provided, it determines the cache key for storing the result based on the
   * arguments provided to the memoized function. By default, the first argument
   * provided to the memoized function is used as the map cache key. The `func`
   * is invoked with the `this` binding of the memoized function.
   *
   * **Note:** The cache is exposed as the `cache` property on the memoized
   * function. Its creation may be customized by replacing the `_.memoize.Cache`
   * constructor with one whose instances implement the
   * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
   * method interface of `clear`, `delete`, `get`, `has`, and `set`.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Function
   * @param {Function} func The function to have its output memoized.
   * @param {Function} [resolver] The function to resolve the cache key.
   * @returns {Function} Returns the new memoized function.
   * @example
   *
   * var object = { 'a': 1, 'b': 2 };
   * var other = { 'c': 3, 'd': 4 };
   *
   * var values = _.memoize(_.values);
   * values(object);
   * // => [1, 2]
   *
   * values(other);
   * // => [3, 4]
   *
   * object.a = 2;
   * values(object);
   * // => [1, 2]
   *
   * // Modify the result cache.
   * values.cache.set(object, ['a', 'b']);
   * values(object);
   * // => ['a', 'b']
   *
   * // Replace `_.memoize.Cache`.
   * _.memoize.Cache = WeakMap;
   */

  function memoize(func, resolver) {
    if (typeof func != 'function' || resolver != null && typeof resolver != 'function') {
      throw new TypeError(FUNC_ERROR_TEXT);
    }

    var memoized = function memoized() {
      var args = arguments,
          key = resolver ? resolver.apply(this, args) : args[0],
          cache = memoized.cache;

      if (cache.has(key)) {
        return cache.get(key);
      }

      var result = func.apply(this, args);
      memoized.cache = cache.set(key, result) || cache;
      return result;
    };

    memoized.cache = new (memoize.Cache || _MapCache)();
    return memoized;
  } // Expose `MapCache`.


  memoize.Cache = _MapCache;
  var memoize_1 = memoize;

  /** Used as the maximum memoize cache size. */

  var MAX_MEMOIZE_SIZE = 500;
  /**
   * A specialized version of `_.memoize` which clears the memoized function's
   * cache when it exceeds `MAX_MEMOIZE_SIZE`.
   *
   * @private
   * @param {Function} func The function to have its output memoized.
   * @returns {Function} Returns the new memoized function.
   */

  function memoizeCapped(func) {
    var result = memoize_1(func, function (key) {
      if (cache.size === MAX_MEMOIZE_SIZE) {
        cache.clear();
      }

      return key;
    });
    var cache = result.cache;
    return result;
  }

  var _memoizeCapped = memoizeCapped;

  /** Used to match property names within property paths. */

  var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
  /** Used to match backslashes in property paths. */

  var reEscapeChar = /\\(\\)?/g;
  /**
   * Converts `string` to a property path array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the property path array.
   */

  var stringToPath = _memoizeCapped(function (string) {
    var result = [];

    if (string.charCodeAt(0) === 46
    /* . */
    ) {
        result.push('');
      }

    string.replace(rePropName, function (match, number, quote, subString) {
      result.push(quote ? subString.replace(reEscapeChar, '$1') : number || match);
    });
    return result;
  });
  var _stringToPath = stringToPath;

  /**
   * A specialized version of `_.map` for arrays without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the new mapped array.
   */
  function arrayMap(array, iteratee) {
    var index = -1,
        length = array == null ? 0 : array.length,
        result = Array(length);

    while (++index < length) {
      result[index] = iteratee(array[index], index, array);
    }

    return result;
  }

  var _arrayMap = arrayMap;

  /** Used as references for various `Number` constants. */

  var INFINITY = 1 / 0;
  /** Used to convert symbols to primitives and strings. */

  var symbolProto = _Symbol ? _Symbol.prototype : undefined,
      symbolToString = symbolProto ? symbolProto.toString : undefined;
  /**
   * The base implementation of `_.toString` which doesn't convert nullish
   * values to empty strings.
   *
   * @private
   * @param {*} value The value to process.
   * @returns {string} Returns the string.
   */

  function baseToString(value) {
    // Exit early for strings to avoid a performance hit in some environments.
    if (typeof value == 'string') {
      return value;
    }

    if (isArray_1(value)) {
      // Recursively convert values (susceptible to call stack limits).
      return _arrayMap(value, baseToString) + '';
    }

    if (isSymbol_1(value)) {
      return symbolToString ? symbolToString.call(value) : '';
    }

    var result = value + '';
    return result == '0' && 1 / value == -INFINITY ? '-0' : result;
  }

  var _baseToString = baseToString;

  /**
   * Converts `value` to a string. An empty string is returned for `null`
   * and `undefined` values. The sign of `-0` is preserved.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to convert.
   * @returns {string} Returns the converted string.
   * @example
   *
   * _.toString(null);
   * // => ''
   *
   * _.toString(-0);
   * // => '-0'
   *
   * _.toString([1, 2, 3]);
   * // => '1,2,3'
   */

  function toString(value) {
    return value == null ? '' : _baseToString(value);
  }

  var toString_1 = toString;

  /**
   * Casts `value` to a path array if it's not one.
   *
   * @private
   * @param {*} value The value to inspect.
   * @param {Object} [object] The object to query keys on.
   * @returns {Array} Returns the cast property path array.
   */

  function castPath(value, object) {
    if (isArray_1(value)) {
      return value;
    }

    return _isKey(value, object) ? [value] : _stringToPath(toString_1(value));
  }

  var _castPath = castPath;

  /** Used as references for various `Number` constants. */

  var INFINITY$1 = 1 / 0;
  /**
   * Converts `value` to a string key if it's not a string or symbol.
   *
   * @private
   * @param {*} value The value to inspect.
   * @returns {string|symbol} Returns the key.
   */

  function toKey(value) {
    if (typeof value == 'string' || isSymbol_1(value)) {
      return value;
    }

    var result = value + '';
    return result == '0' && 1 / value == -INFINITY$1 ? '-0' : result;
  }

  var _toKey = toKey;

  /**
   * The base implementation of `_.get` without support for default values.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array|string} path The path of the property to get.
   * @returns {*} Returns the resolved value.
   */

  function baseGet(object, path) {
    path = _castPath(path, object);
    var index = 0,
        length = path.length;

    while (object != null && index < length) {
      object = object[_toKey(path[index++])];
    }

    return index && index == length ? object : undefined;
  }

  var _baseGet = baseGet;

  /**
   * Gets the value at `path` of `object`. If the resolved value is
   * `undefined`, the `defaultValue` is returned in its place.
   *
   * @static
   * @memberOf _
   * @since 3.7.0
   * @category Object
   * @param {Object} object The object to query.
   * @param {Array|string} path The path of the property to get.
   * @param {*} [defaultValue] The value returned for `undefined` resolved values.
   * @returns {*} Returns the resolved value.
   * @example
   *
   * var object = { 'a': [{ 'b': { 'c': 3 } }] };
   *
   * _.get(object, 'a[0].b.c');
   * // => 3
   *
   * _.get(object, ['a', '0', 'b', 'c']);
   * // => 3
   *
   * _.get(object, 'a.b.c', 'default');
   * // => 'default'
   */

  function get(object, path, defaultValue) {
    var result = object == null ? undefined : _baseGet(object, path);
    return result === undefined ? defaultValue : result;
  }

  var get_1 = get;

  /**
   * 產生Promise物件，具備鏈式resolve與reject
   * 主要受jQuery Deferred概念啟發
   *
   * Unit Test: {@link https://github.com/yuda-lyu/wsemi/blob/master/test/genPm.test.js Github}
   * @memberOf wsemi
   * @returns {Object} 回傳Promise物件
   * @example
   * let fn = function() {
   *   let df = genPm()
   *   setTimeout(function() {
   *     df.resolve()
   *   }, 1)
   *   return df
   * }
   * fn()
   *   .then(function(){
   *     //add code
   *   })
   */
  function genPm() {
    var resolve;
    var reject;
    var p = new Promise(function () {
      resolve = arguments[0];
      reject = arguments[1];
    });
    p.resolve = resolve;
    p.reject = reject;
    return p;
  }

  /**
   * 判斷是否為函數
   *
   * Unit Test: {@link https://github.com/yuda-lyu/wsemi/blob/master/test/isfun.test.js Github}
   * @memberOf wsemi
   * @param {*} v 輸入任意資料
   * @returns {Boolean} 回傳判斷布林值
   * @example
   * isfun('1.25')
   * // => false
   *
   * isfun(function() {})
   * // => true
   */
  function isfun(v) {
    var c = Object.prototype.toString.call(v);
    return c === '[object Function]' || c === '[object AsyncFunction]';
  }

  /**
   * 判斷是否為物件
   *
   * Unit Test: {@link https://github.com/yuda-lyu/wsemi/blob/master/test/isobj.test.js Github}
   * @memberOf wsemi
   * @param {*} v 輸入任意資料
   * @returns {Boolean} 回傳判斷布林值
   * @example
   * isobj({})
   * // => true
   *
   * isobj({ a: 123 })
   * // => true
   */
  function isobj(v) {
    var c = Object.prototype.toString.call(v);
    return c === '[object Object]';
  }

  /**
   * 判斷是否為字串
   *
   * Unit Test: {@link https://github.com/yuda-lyu/wsemi/blob/master/test/isstr.test.js Github}
   * @memberOf wsemi
   * @param {*} v 輸入任意資料
   * @returns {Boolean} 回傳判斷布林值
   * @example
   * isstr(0)
   * // => false
   *
   * isstr('0')
   * // => true
   *
   * isstr('')
   * // => true
   */
  function isstr(v) {
    var c = Object.prototype.toString.call(v);
    return c === '[object String]';
  }

  /**
   * 判斷是否為有效字串
   *
   * Unit Test: {@link https://github.com/yuda-lyu/wsemi/blob/master/test/isestr.test.js Github}
   * @memberOf wsemi
   * @param {*} v 輸入任意資料
   * @returns {Boolean} 回傳判斷布林值
   * @example
   * isestr('1.25')
   * // => true
   *
   * isestr(125)
   * // => false
   *
   * isestr('')
   * // => false
   */

  function isestr(v) {
    //check
    if (isstr(v)) {
      if (v !== '') {
        return true;
      }
    }

    return false;
  }

  /**
   * 判斷物件是否有key屬性
   *
   * Unit Test: {@link https://github.com/yuda-lyu/wsemi/blob/master/test/haskey.test.js Github}
   * @memberOf wsemi
   * @param {Object} obj 輸入物件
   * @param {String} key 輸入要查找的key字串
   * @returns {Boolean} 回傳判斷布林值
   * @example
   * haskey({ a: 123, b: 'xyz', c: '45op', d: null }, 'a')
   * // => true
   */

  function haskey(obj, key) {
    //check
    if (!isobj(obj)) {
      return false;
    }

    if (!isestr(key)) {
      return false;
    }

    return key in obj;
  }

  /**
   * A specialized version of `_.forEach` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns `array`.
   */
  function arrayEach(array, iteratee) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (iteratee(array[index], index, array) === false) {
        break;
      }
    }

    return array;
  }

  var _arrayEach = arrayEach;

  /**
   * Creates a base function for methods like `_.forIn` and `_.forOwn`.
   *
   * @private
   * @param {boolean} [fromRight] Specify iterating from right to left.
   * @returns {Function} Returns the new base function.
   */
  function createBaseFor(fromRight) {
    return function (object, iteratee, keysFunc) {
      var index = -1,
          iterable = Object(object),
          props = keysFunc(object),
          length = props.length;

      while (length--) {
        var key = props[fromRight ? length : ++index];

        if (iteratee(iterable[key], key, iterable) === false) {
          break;
        }
      }

      return object;
    };
  }

  var _createBaseFor = createBaseFor;

  /**
   * The base implementation of `baseForOwn` which iterates over `object`
   * properties returned by `keysFunc` and invokes `iteratee` for each property.
   * Iteratee functions may exit iteration early by explicitly returning `false`.
   *
   * @private
   * @param {Object} object The object to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {Function} keysFunc The function to get the keys of `object`.
   * @returns {Object} Returns `object`.
   */

  var baseFor = _createBaseFor();
  var _baseFor = baseFor;

  /**
   * The base implementation of `_.times` without support for iteratee shorthands
   * or max array length checks.
   *
   * @private
   * @param {number} n The number of times to invoke `iteratee`.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the array of results.
   */
  function baseTimes(n, iteratee) {
    var index = -1,
        result = Array(n);

    while (++index < n) {
      result[index] = iteratee(index);
    }

    return result;
  }

  var _baseTimes = baseTimes;

  /** `Object#toString` result references. */

  var argsTag = '[object Arguments]';
  /**
   * The base implementation of `_.isArguments`.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an `arguments` object,
   */

  function baseIsArguments(value) {
    return isObjectLike_1(value) && _baseGetTag(value) == argsTag;
  }

  var _baseIsArguments = baseIsArguments;

  /** Used for built-in method references. */

  var objectProto$5 = Object.prototype;
  /** Used to check objects for own properties. */

  var hasOwnProperty$4 = objectProto$5.hasOwnProperty;
  /** Built-in value references. */

  var propertyIsEnumerable = objectProto$5.propertyIsEnumerable;
  /**
   * Checks if `value` is likely an `arguments` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an `arguments` object,
   *  else `false`.
   * @example
   *
   * _.isArguments(function() { return arguments; }());
   * // => true
   *
   * _.isArguments([1, 2, 3]);
   * // => false
   */

  var isArguments = _baseIsArguments(function () {
    return arguments;
  }()) ? _baseIsArguments : function (value) {
    return isObjectLike_1(value) && hasOwnProperty$4.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
  };
  var isArguments_1 = isArguments;

  /**
   * This method returns `false`.
   *
   * @static
   * @memberOf _
   * @since 4.13.0
   * @category Util
   * @returns {boolean} Returns `false`.
   * @example
   *
   * _.times(2, _.stubFalse);
   * // => [false, false]
   */
  function stubFalse() {
    return false;
  }

  var stubFalse_1 = stubFalse;

  var isBuffer_1 = createCommonjsModule(function (module, exports) {
    /** Detect free variable `exports`. */
    var freeExports = exports && !exports.nodeType && exports;
    /** Detect free variable `module`. */

    var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;
    /** Detect the popular CommonJS extension `module.exports`. */

    var moduleExports = freeModule && freeModule.exports === freeExports;
    /** Built-in value references. */

    var Buffer = moduleExports ? _root.Buffer : undefined;
    /* Built-in method references for those with the same name as other `lodash` methods. */

    var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;
    /**
     * Checks if `value` is a buffer.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
     * @example
     *
     * _.isBuffer(new Buffer(2));
     * // => true
     *
     * _.isBuffer(new Uint8Array(2));
     * // => false
     */

    var isBuffer = nativeIsBuffer || stubFalse_1;
    module.exports = isBuffer;
  });

  /** Used as references for various `Number` constants. */
  var MAX_SAFE_INTEGER = 9007199254740991;
  /** Used to detect unsigned integer values. */

  var reIsUint = /^(?:0|[1-9]\d*)$/;
  /**
   * Checks if `value` is a valid array-like index.
   *
   * @private
   * @param {*} value The value to check.
   * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
   * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
   */

  function isIndex(value, length) {
    var type = _typeof(value);

    length = length == null ? MAX_SAFE_INTEGER : length;
    return !!length && (type == 'number' || type != 'symbol' && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
  }

  var _isIndex = isIndex;

  /** Used as references for various `Number` constants. */
  var MAX_SAFE_INTEGER$1 = 9007199254740991;
  /**
   * Checks if `value` is a valid array-like length.
   *
   * **Note:** This method is loosely based on
   * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
   * @example
   *
   * _.isLength(3);
   * // => true
   *
   * _.isLength(Number.MIN_VALUE);
   * // => false
   *
   * _.isLength(Infinity);
   * // => false
   *
   * _.isLength('3');
   * // => false
   */

  function isLength(value) {
    return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER$1;
  }

  var isLength_1 = isLength;

  /** `Object#toString` result references. */

  var argsTag$1 = '[object Arguments]',
      arrayTag = '[object Array]',
      boolTag = '[object Boolean]',
      dateTag = '[object Date]',
      errorTag = '[object Error]',
      funcTag$1 = '[object Function]',
      mapTag = '[object Map]',
      numberTag = '[object Number]',
      objectTag = '[object Object]',
      regexpTag = '[object RegExp]',
      setTag = '[object Set]',
      stringTag = '[object String]',
      weakMapTag = '[object WeakMap]';
  var arrayBufferTag = '[object ArrayBuffer]',
      dataViewTag = '[object DataView]',
      float32Tag = '[object Float32Array]',
      float64Tag = '[object Float64Array]',
      int8Tag = '[object Int8Array]',
      int16Tag = '[object Int16Array]',
      int32Tag = '[object Int32Array]',
      uint8Tag = '[object Uint8Array]',
      uint8ClampedTag = '[object Uint8ClampedArray]',
      uint16Tag = '[object Uint16Array]',
      uint32Tag = '[object Uint32Array]';
  /** Used to identify `toStringTag` values of typed arrays. */

  var typedArrayTags = {};
  typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
  typedArrayTags[argsTag$1] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag$1] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
  /**
   * The base implementation of `_.isTypedArray` without Node.js optimizations.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
   */

  function baseIsTypedArray(value) {
    return isObjectLike_1(value) && isLength_1(value.length) && !!typedArrayTags[_baseGetTag(value)];
  }

  var _baseIsTypedArray = baseIsTypedArray;

  /**
   * The base implementation of `_.unary` without support for storing metadata.
   *
   * @private
   * @param {Function} func The function to cap arguments for.
   * @returns {Function} Returns the new capped function.
   */
  function baseUnary(func) {
    return function (value) {
      return func(value);
    };
  }

  var _baseUnary = baseUnary;

  var _nodeUtil = createCommonjsModule(function (module, exports) {
    /** Detect free variable `exports`. */
    var freeExports = exports && !exports.nodeType && exports;
    /** Detect free variable `module`. */

    var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;
    /** Detect the popular CommonJS extension `module.exports`. */

    var moduleExports = freeModule && freeModule.exports === freeExports;
    /** Detect free variable `process` from Node.js. */

    var freeProcess = moduleExports && _freeGlobal.process;
    /** Used to access faster Node.js helpers. */

    var nodeUtil = function () {
      try {
        // Use `util.types` for Node.js 10+.
        var types = freeModule && freeModule.require && freeModule.require('util').types;

        if (types) {
          return types;
        } // Legacy `process.binding('util')` for Node.js < 10.


        return freeProcess && freeProcess.binding && freeProcess.binding('util');
      } catch (e) {}
    }();

    module.exports = nodeUtil;
  });

  /* Node.js helper references. */

  var nodeIsTypedArray = _nodeUtil && _nodeUtil.isTypedArray;
  /**
   * Checks if `value` is classified as a typed array.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
   * @example
   *
   * _.isTypedArray(new Uint8Array);
   * // => true
   *
   * _.isTypedArray([]);
   * // => false
   */

  var isTypedArray = nodeIsTypedArray ? _baseUnary(nodeIsTypedArray) : _baseIsTypedArray;
  var isTypedArray_1 = isTypedArray;

  /** Used for built-in method references. */

  var objectProto$6 = Object.prototype;
  /** Used to check objects for own properties. */

  var hasOwnProperty$5 = objectProto$6.hasOwnProperty;
  /**
   * Creates an array of the enumerable property names of the array-like `value`.
   *
   * @private
   * @param {*} value The value to query.
   * @param {boolean} inherited Specify returning inherited property names.
   * @returns {Array} Returns the array of property names.
   */

  function arrayLikeKeys(value, inherited) {
    var isArr = isArray_1(value),
        isArg = !isArr && isArguments_1(value),
        isBuff = !isArr && !isArg && isBuffer_1(value),
        isType = !isArr && !isArg && !isBuff && isTypedArray_1(value),
        skipIndexes = isArr || isArg || isBuff || isType,
        result = skipIndexes ? _baseTimes(value.length, String) : [],
        length = result.length;

    for (var key in value) {
      if ((inherited || hasOwnProperty$5.call(value, key)) && !(skipIndexes && ( // Safari 9 has enumerable `arguments.length` in strict mode.
      key == 'length' || // Node.js 0.10 has enumerable non-index properties on buffers.
      isBuff && (key == 'offset' || key == 'parent') || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset') || // Skip index properties.
      _isIndex(key, length)))) {
        result.push(key);
      }
    }

    return result;
  }

  var _arrayLikeKeys = arrayLikeKeys;

  /** Used for built-in method references. */
  var objectProto$7 = Object.prototype;
  /**
   * Checks if `value` is likely a prototype object.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
   */

  function isPrototype(value) {
    var Ctor = value && value.constructor,
        proto = typeof Ctor == 'function' && Ctor.prototype || objectProto$7;
    return value === proto;
  }

  var _isPrototype = isPrototype;

  /**
   * Creates a unary function that invokes `func` with its argument transformed.
   *
   * @private
   * @param {Function} func The function to wrap.
   * @param {Function} transform The argument transform.
   * @returns {Function} Returns the new function.
   */
  function overArg(func, transform) {
    return function (arg) {
      return func(transform(arg));
    };
  }

  var _overArg = overArg;

  /* Built-in method references for those with the same name as other `lodash` methods. */

  var nativeKeys = _overArg(Object.keys, Object);
  var _nativeKeys = nativeKeys;

  /** Used for built-in method references. */

  var objectProto$8 = Object.prototype;
  /** Used to check objects for own properties. */

  var hasOwnProperty$6 = objectProto$8.hasOwnProperty;
  /**
   * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   */

  function baseKeys(object) {
    if (!_isPrototype(object)) {
      return _nativeKeys(object);
    }

    var result = [];

    for (var key in Object(object)) {
      if (hasOwnProperty$6.call(object, key) && key != 'constructor') {
        result.push(key);
      }
    }

    return result;
  }

  var _baseKeys = baseKeys;

  /**
   * Checks if `value` is array-like. A value is considered array-like if it's
   * not a function and has a `value.length` that's an integer greater than or
   * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
   * @example
   *
   * _.isArrayLike([1, 2, 3]);
   * // => true
   *
   * _.isArrayLike(document.body.children);
   * // => true
   *
   * _.isArrayLike('abc');
   * // => true
   *
   * _.isArrayLike(_.noop);
   * // => false
   */

  function isArrayLike(value) {
    return value != null && isLength_1(value.length) && !isFunction_1(value);
  }

  var isArrayLike_1 = isArrayLike;

  /**
   * Creates an array of the own enumerable property names of `object`.
   *
   * **Note:** Non-object values are coerced to objects. See the
   * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
   * for more details.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Object
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   *   this.b = 2;
   * }
   *
   * Foo.prototype.c = 3;
   *
   * _.keys(new Foo);
   * // => ['a', 'b'] (iteration order is not guaranteed)
   *
   * _.keys('hi');
   * // => ['0', '1']
   */

  function keys(object) {
    return isArrayLike_1(object) ? _arrayLikeKeys(object) : _baseKeys(object);
  }

  var keys_1 = keys;

  /**
   * The base implementation of `_.forOwn` without support for iteratee shorthands.
   *
   * @private
   * @param {Object} object The object to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Object} Returns `object`.
   */

  function baseForOwn(object, iteratee) {
    return object && _baseFor(object, iteratee, keys_1);
  }

  var _baseForOwn = baseForOwn;

  /**
   * Creates a `baseEach` or `baseEachRight` function.
   *
   * @private
   * @param {Function} eachFunc The function to iterate over a collection.
   * @param {boolean} [fromRight] Specify iterating from right to left.
   * @returns {Function} Returns the new base function.
   */

  function createBaseEach(eachFunc, fromRight) {
    return function (collection, iteratee) {
      if (collection == null) {
        return collection;
      }

      if (!isArrayLike_1(collection)) {
        return eachFunc(collection, iteratee);
      }

      var length = collection.length,
          index = fromRight ? length : -1,
          iterable = Object(collection);

      while (fromRight ? index-- : ++index < length) {
        if (iteratee(iterable[index], index, iterable) === false) {
          break;
        }
      }

      return collection;
    };
  }

  var _createBaseEach = createBaseEach;

  /**
   * The base implementation of `_.forEach` without support for iteratee shorthands.
   *
   * @private
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array|Object} Returns `collection`.
   */

  var baseEach = _createBaseEach(_baseForOwn);
  var _baseEach = baseEach;

  /**
   * This method returns the first argument it receives.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Util
   * @param {*} value Any value.
   * @returns {*} Returns `value`.
   * @example
   *
   * var object = { 'a': 1 };
   *
   * console.log(_.identity(object) === object);
   * // => true
   */
  function identity(value) {
    return value;
  }

  var identity_1 = identity;

  /**
   * Casts `value` to `identity` if it's not a function.
   *
   * @private
   * @param {*} value The value to inspect.
   * @returns {Function} Returns cast function.
   */

  function castFunction(value) {
    return typeof value == 'function' ? value : identity_1;
  }

  var _castFunction = castFunction;

  /**
   * Iterates over elements of `collection` and invokes `iteratee` for each element.
   * The iteratee is invoked with three arguments: (value, index|key, collection).
   * Iteratee functions may exit iteration early by explicitly returning `false`.
   *
   * **Note:** As with other "Collections" methods, objects with a "length"
   * property are iterated like arrays. To avoid this behavior use `_.forIn`
   * or `_.forOwn` for object iteration.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @alias each
   * @category Collection
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} [iteratee=_.identity] The function invoked per iteration.
   * @returns {Array|Object} Returns `collection`.
   * @see _.forEachRight
   * @example
   *
   * _.forEach([1, 2], function(value) {
   *   console.log(value);
   * });
   * // => Logs `1` then `2`.
   *
   * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
   *   console.log(key);
   * });
   * // => Logs 'a' then 'b' (iteration order is not guaranteed).
   */

  function forEach(collection, iteratee) {
    var func = isArray_1(collection) ? _arrayEach : _baseEach;
    return func(collection, _castFunction(iteratee));
  }

  var forEach_1 = forEach;

  var each = forEach_1;

  /**
   * Removes all key-value entries from the stack.
   *
   * @private
   * @name clear
   * @memberOf Stack
   */

  function stackClear() {
    this.__data__ = new _ListCache();
    this.size = 0;
  }

  var _stackClear = stackClear;

  /**
   * Removes `key` and its value from the stack.
   *
   * @private
   * @name delete
   * @memberOf Stack
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function stackDelete(key) {
    var data = this.__data__,
        result = data['delete'](key);
    this.size = data.size;
    return result;
  }

  var _stackDelete = stackDelete;

  /**
   * Gets the stack value for `key`.
   *
   * @private
   * @name get
   * @memberOf Stack
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function stackGet(key) {
    return this.__data__.get(key);
  }

  var _stackGet = stackGet;

  /**
   * Checks if a stack value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf Stack
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function stackHas(key) {
    return this.__data__.has(key);
  }

  var _stackHas = stackHas;

  /** Used as the size to enable large array optimizations. */

  var LARGE_ARRAY_SIZE = 200;
  /**
   * Sets the stack `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf Stack
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the stack cache instance.
   */

  function stackSet(key, value) {
    var data = this.__data__;

    if (data instanceof _ListCache) {
      var pairs = data.__data__;

      if (!_Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
        pairs.push([key, value]);
        this.size = ++data.size;
        return this;
      }

      data = this.__data__ = new _MapCache(pairs);
    }

    data.set(key, value);
    this.size = data.size;
    return this;
  }

  var _stackSet = stackSet;

  /**
   * Creates a stack cache object to store key-value pairs.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */

  function Stack(entries) {
    var data = this.__data__ = new _ListCache(entries);
    this.size = data.size;
  } // Add methods to `Stack`.


  Stack.prototype.clear = _stackClear;
  Stack.prototype['delete'] = _stackDelete;
  Stack.prototype.get = _stackGet;
  Stack.prototype.has = _stackHas;
  Stack.prototype.set = _stackSet;
  var _Stack = Stack;

  var defineProperty = function () {
    try {
      var func = _getNative(Object, 'defineProperty');
      func({}, '', {});
      return func;
    } catch (e) {}
  }();

  var _defineProperty = defineProperty;

  /**
   * The base implementation of `assignValue` and `assignMergeValue` without
   * value checks.
   *
   * @private
   * @param {Object} object The object to modify.
   * @param {string} key The key of the property to assign.
   * @param {*} value The value to assign.
   */

  function baseAssignValue(object, key, value) {
    if (key == '__proto__' && _defineProperty) {
      _defineProperty(object, key, {
        'configurable': true,
        'enumerable': true,
        'value': value,
        'writable': true
      });
    } else {
      object[key] = value;
    }
  }

  var _baseAssignValue = baseAssignValue;

  /** Used for built-in method references. */

  var objectProto$9 = Object.prototype;
  /** Used to check objects for own properties. */

  var hasOwnProperty$7 = objectProto$9.hasOwnProperty;
  /**
   * Assigns `value` to `key` of `object` if the existing value is not equivalent
   * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
   * for equality comparisons.
   *
   * @private
   * @param {Object} object The object to modify.
   * @param {string} key The key of the property to assign.
   * @param {*} value The value to assign.
   */

  function assignValue(object, key, value) {
    var objValue = object[key];

    if (!(hasOwnProperty$7.call(object, key) && eq_1(objValue, value)) || value === undefined && !(key in object)) {
      _baseAssignValue(object, key, value);
    }
  }

  var _assignValue = assignValue;

  /**
   * Copies properties of `source` to `object`.
   *
   * @private
   * @param {Object} source The object to copy properties from.
   * @param {Array} props The property identifiers to copy.
   * @param {Object} [object={}] The object to copy properties to.
   * @param {Function} [customizer] The function to customize copied values.
   * @returns {Object} Returns `object`.
   */

  function copyObject(source, props, object, customizer) {
    var isNew = !object;
    object || (object = {});
    var index = -1,
        length = props.length;

    while (++index < length) {
      var key = props[index];
      var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined;

      if (newValue === undefined) {
        newValue = source[key];
      }

      if (isNew) {
        _baseAssignValue(object, key, newValue);
      } else {
        _assignValue(object, key, newValue);
      }
    }

    return object;
  }

  var _copyObject = copyObject;

  /**
   * The base implementation of `_.assign` without support for multiple sources
   * or `customizer` functions.
   *
   * @private
   * @param {Object} object The destination object.
   * @param {Object} source The source object.
   * @returns {Object} Returns `object`.
   */

  function baseAssign(object, source) {
    return object && _copyObject(source, keys_1(source), object);
  }

  var _baseAssign = baseAssign;

  /**
   * This function is like
   * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
   * except that it includes inherited enumerable properties.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   */
  function nativeKeysIn(object) {
    var result = [];

    if (object != null) {
      for (var key in Object(object)) {
        result.push(key);
      }
    }

    return result;
  }

  var _nativeKeysIn = nativeKeysIn;

  /** Used for built-in method references. */

  var objectProto$a = Object.prototype;
  /** Used to check objects for own properties. */

  var hasOwnProperty$8 = objectProto$a.hasOwnProperty;
  /**
   * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   */

  function baseKeysIn(object) {
    if (!isObject_1(object)) {
      return _nativeKeysIn(object);
    }

    var isProto = _isPrototype(object),
        result = [];

    for (var key in object) {
      if (!(key == 'constructor' && (isProto || !hasOwnProperty$8.call(object, key)))) {
        result.push(key);
      }
    }

    return result;
  }

  var _baseKeysIn = baseKeysIn;

  /**
   * Creates an array of the own and inherited enumerable property names of `object`.
   *
   * **Note:** Non-object values are coerced to objects.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Object
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   *   this.b = 2;
   * }
   *
   * Foo.prototype.c = 3;
   *
   * _.keysIn(new Foo);
   * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
   */

  function keysIn$1(object) {
    return isArrayLike_1(object) ? _arrayLikeKeys(object, true) : _baseKeysIn(object);
  }

  var keysIn_1 = keysIn$1;

  /**
   * The base implementation of `_.assignIn` without support for multiple sources
   * or `customizer` functions.
   *
   * @private
   * @param {Object} object The destination object.
   * @param {Object} source The source object.
   * @returns {Object} Returns `object`.
   */

  function baseAssignIn(object, source) {
    return object && _copyObject(source, keysIn_1(source), object);
  }

  var _baseAssignIn = baseAssignIn;

  var _cloneBuffer = createCommonjsModule(function (module, exports) {
    /** Detect free variable `exports`. */
    var freeExports = exports && !exports.nodeType && exports;
    /** Detect free variable `module`. */

    var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;
    /** Detect the popular CommonJS extension `module.exports`. */

    var moduleExports = freeModule && freeModule.exports === freeExports;
    /** Built-in value references. */

    var Buffer = moduleExports ? _root.Buffer : undefined,
        allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;
    /**
     * Creates a clone of  `buffer`.
     *
     * @private
     * @param {Buffer} buffer The buffer to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Buffer} Returns the cloned buffer.
     */

    function cloneBuffer(buffer, isDeep) {
      if (isDeep) {
        return buffer.slice();
      }

      var length = buffer.length,
          result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
      buffer.copy(result);
      return result;
    }

    module.exports = cloneBuffer;
  });

  /**
   * Copies the values of `source` to `array`.
   *
   * @private
   * @param {Array} source The array to copy values from.
   * @param {Array} [array=[]] The array to copy values to.
   * @returns {Array} Returns `array`.
   */
  function copyArray(source, array) {
    var index = -1,
        length = source.length;
    array || (array = Array(length));

    while (++index < length) {
      array[index] = source[index];
    }

    return array;
  }

  var _copyArray = copyArray;

  /**
   * A specialized version of `_.filter` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {Array} Returns the new filtered array.
   */
  function arrayFilter(array, predicate) {
    var index = -1,
        length = array == null ? 0 : array.length,
        resIndex = 0,
        result = [];

    while (++index < length) {
      var value = array[index];

      if (predicate(value, index, array)) {
        result[resIndex++] = value;
      }
    }

    return result;
  }

  var _arrayFilter = arrayFilter;

  /**
   * This method returns a new empty array.
   *
   * @static
   * @memberOf _
   * @since 4.13.0
   * @category Util
   * @returns {Array} Returns the new empty array.
   * @example
   *
   * var arrays = _.times(2, _.stubArray);
   *
   * console.log(arrays);
   * // => [[], []]
   *
   * console.log(arrays[0] === arrays[1]);
   * // => false
   */
  function stubArray() {
    return [];
  }

  var stubArray_1 = stubArray;

  /** Used for built-in method references. */

  var objectProto$b = Object.prototype;
  /** Built-in value references. */

  var propertyIsEnumerable$1 = objectProto$b.propertyIsEnumerable;
  /* Built-in method references for those with the same name as other `lodash` methods. */

  var nativeGetSymbols = Object.getOwnPropertySymbols;
  /**
   * Creates an array of the own enumerable symbols of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of symbols.
   */

  var getSymbols = !nativeGetSymbols ? stubArray_1 : function (object) {
    if (object == null) {
      return [];
    }

    object = Object(object);
    return _arrayFilter(nativeGetSymbols(object), function (symbol) {
      return propertyIsEnumerable$1.call(object, symbol);
    });
  };
  var _getSymbols = getSymbols;

  /**
   * Copies own symbols of `source` to `object`.
   *
   * @private
   * @param {Object} source The object to copy symbols from.
   * @param {Object} [object={}] The object to copy symbols to.
   * @returns {Object} Returns `object`.
   */

  function copySymbols(source, object) {
    return _copyObject(source, _getSymbols(source), object);
  }

  var _copySymbols = copySymbols;

  /**
   * Appends the elements of `values` to `array`.
   *
   * @private
   * @param {Array} array The array to modify.
   * @param {Array} values The values to append.
   * @returns {Array} Returns `array`.
   */
  function arrayPush(array, values) {
    var index = -1,
        length = values.length,
        offset = array.length;

    while (++index < length) {
      array[offset + index] = values[index];
    }

    return array;
  }

  var _arrayPush = arrayPush;

  /** Built-in value references. */

  var getPrototype = _overArg(Object.getPrototypeOf, Object);
  var _getPrototype = getPrototype;

  /* Built-in method references for those with the same name as other `lodash` methods. */

  var nativeGetSymbols$1 = Object.getOwnPropertySymbols;
  /**
   * Creates an array of the own and inherited enumerable symbols of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of symbols.
   */

  var getSymbolsIn = !nativeGetSymbols$1 ? stubArray_1 : function (object) {
    var result = [];

    while (object) {
      _arrayPush(result, _getSymbols(object));
      object = _getPrototype(object);
    }

    return result;
  };
  var _getSymbolsIn = getSymbolsIn;

  /**
   * Copies own and inherited symbols of `source` to `object`.
   *
   * @private
   * @param {Object} source The object to copy symbols from.
   * @param {Object} [object={}] The object to copy symbols to.
   * @returns {Object} Returns `object`.
   */

  function copySymbolsIn(source, object) {
    return _copyObject(source, _getSymbolsIn(source), object);
  }

  var _copySymbolsIn = copySymbolsIn;

  /**
   * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
   * `keysFunc` and `symbolsFunc` to get the enumerable property names and
   * symbols of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Function} keysFunc The function to get the keys of `object`.
   * @param {Function} symbolsFunc The function to get the symbols of `object`.
   * @returns {Array} Returns the array of property names and symbols.
   */

  function baseGetAllKeys(object, keysFunc, symbolsFunc) {
    var result = keysFunc(object);
    return isArray_1(object) ? result : _arrayPush(result, symbolsFunc(object));
  }

  var _baseGetAllKeys = baseGetAllKeys;

  /**
   * Creates an array of own enumerable property names and symbols of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names and symbols.
   */

  function getAllKeys(object) {
    return _baseGetAllKeys(object, keys_1, _getSymbols);
  }

  var _getAllKeys = getAllKeys;

  /**
   * Creates an array of own and inherited enumerable property names and
   * symbols of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names and symbols.
   */

  function getAllKeysIn(object) {
    return _baseGetAllKeys(object, keysIn_1, _getSymbolsIn);
  }

  var _getAllKeysIn = getAllKeysIn;

  /* Built-in method references that are verified to be native. */

  var DataView = _getNative(_root, 'DataView');
  var _DataView = DataView;

  /* Built-in method references that are verified to be native. */

  var Promise$1 = _getNative(_root, 'Promise');
  var _Promise = Promise$1;

  /* Built-in method references that are verified to be native. */

  var Set = _getNative(_root, 'Set');
  var _Set = Set;

  /* Built-in method references that are verified to be native. */

  var WeakMap = _getNative(_root, 'WeakMap');
  var _WeakMap = WeakMap;

  /** `Object#toString` result references. */

  var mapTag$1 = '[object Map]',
      objectTag$1 = '[object Object]',
      promiseTag = '[object Promise]',
      setTag$1 = '[object Set]',
      weakMapTag$1 = '[object WeakMap]';
  var dataViewTag$1 = '[object DataView]';
  /** Used to detect maps, sets, and weakmaps. */

  var dataViewCtorString = _toSource(_DataView),
      mapCtorString = _toSource(_Map),
      promiseCtorString = _toSource(_Promise),
      setCtorString = _toSource(_Set),
      weakMapCtorString = _toSource(_WeakMap);
  /**
   * Gets the `toStringTag` of `value`.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the `toStringTag`.
   */

  var getTag = _baseGetTag; // Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.

  if (_DataView && getTag(new _DataView(new ArrayBuffer(1))) != dataViewTag$1 || _Map && getTag(new _Map()) != mapTag$1 || _Promise && getTag(_Promise.resolve()) != promiseTag || _Set && getTag(new _Set()) != setTag$1 || _WeakMap && getTag(new _WeakMap()) != weakMapTag$1) {
    getTag = function getTag(value) {
      var result = _baseGetTag(value),
          Ctor = result == objectTag$1 ? value.constructor : undefined,
          ctorString = Ctor ? _toSource(Ctor) : '';

      if (ctorString) {
        switch (ctorString) {
          case dataViewCtorString:
            return dataViewTag$1;

          case mapCtorString:
            return mapTag$1;

          case promiseCtorString:
            return promiseTag;

          case setCtorString:
            return setTag$1;

          case weakMapCtorString:
            return weakMapTag$1;
        }
      }

      return result;
    };
  }

  var _getTag = getTag;

  /** Used for built-in method references. */
  var objectProto$c = Object.prototype;
  /** Used to check objects for own properties. */

  var hasOwnProperty$9 = objectProto$c.hasOwnProperty;
  /**
   * Initializes an array clone.
   *
   * @private
   * @param {Array} array The array to clone.
   * @returns {Array} Returns the initialized clone.
   */

  function initCloneArray(array) {
    var length = array.length,
        result = new array.constructor(length); // Add properties assigned by `RegExp#exec`.

    if (length && typeof array[0] == 'string' && hasOwnProperty$9.call(array, 'index')) {
      result.index = array.index;
      result.input = array.input;
    }

    return result;
  }

  var _initCloneArray = initCloneArray;

  /** Built-in value references. */

  var Uint8Array = _root.Uint8Array;
  var _Uint8Array = Uint8Array;

  /**
   * Creates a clone of `arrayBuffer`.
   *
   * @private
   * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
   * @returns {ArrayBuffer} Returns the cloned array buffer.
   */

  function cloneArrayBuffer(arrayBuffer) {
    var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
    new _Uint8Array(result).set(new _Uint8Array(arrayBuffer));
    return result;
  }

  var _cloneArrayBuffer = cloneArrayBuffer;

  /**
   * Creates a clone of `dataView`.
   *
   * @private
   * @param {Object} dataView The data view to clone.
   * @param {boolean} [isDeep] Specify a deep clone.
   * @returns {Object} Returns the cloned data view.
   */

  function cloneDataView(dataView, isDeep) {
    var buffer = isDeep ? _cloneArrayBuffer(dataView.buffer) : dataView.buffer;
    return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
  }

  var _cloneDataView = cloneDataView;

  /** Used to match `RegExp` flags from their coerced string values. */
  var reFlags = /\w*$/;
  /**
   * Creates a clone of `regexp`.
   *
   * @private
   * @param {Object} regexp The regexp to clone.
   * @returns {Object} Returns the cloned regexp.
   */

  function cloneRegExp(regexp) {
    var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
    result.lastIndex = regexp.lastIndex;
    return result;
  }

  var _cloneRegExp = cloneRegExp;

  /** Used to convert symbols to primitives and strings. */

  var symbolProto$1 = _Symbol ? _Symbol.prototype : undefined,
      symbolValueOf = symbolProto$1 ? symbolProto$1.valueOf : undefined;
  /**
   * Creates a clone of the `symbol` object.
   *
   * @private
   * @param {Object} symbol The symbol object to clone.
   * @returns {Object} Returns the cloned symbol object.
   */

  function cloneSymbol(symbol) {
    return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
  }

  var _cloneSymbol = cloneSymbol;

  /**
   * Creates a clone of `typedArray`.
   *
   * @private
   * @param {Object} typedArray The typed array to clone.
   * @param {boolean} [isDeep] Specify a deep clone.
   * @returns {Object} Returns the cloned typed array.
   */

  function cloneTypedArray(typedArray, isDeep) {
    var buffer = isDeep ? _cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
    return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
  }

  var _cloneTypedArray = cloneTypedArray;

  /** `Object#toString` result references. */

  var boolTag$1 = '[object Boolean]',
      dateTag$1 = '[object Date]',
      mapTag$2 = '[object Map]',
      numberTag$1 = '[object Number]',
      regexpTag$1 = '[object RegExp]',
      setTag$2 = '[object Set]',
      stringTag$1 = '[object String]',
      symbolTag$1 = '[object Symbol]';
  var arrayBufferTag$1 = '[object ArrayBuffer]',
      dataViewTag$2 = '[object DataView]',
      float32Tag$1 = '[object Float32Array]',
      float64Tag$1 = '[object Float64Array]',
      int8Tag$1 = '[object Int8Array]',
      int16Tag$1 = '[object Int16Array]',
      int32Tag$1 = '[object Int32Array]',
      uint8Tag$1 = '[object Uint8Array]',
      uint8ClampedTag$1 = '[object Uint8ClampedArray]',
      uint16Tag$1 = '[object Uint16Array]',
      uint32Tag$1 = '[object Uint32Array]';
  /**
   * Initializes an object clone based on its `toStringTag`.
   *
   * **Note:** This function only supports cloning values with tags of
   * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
   *
   * @private
   * @param {Object} object The object to clone.
   * @param {string} tag The `toStringTag` of the object to clone.
   * @param {boolean} [isDeep] Specify a deep clone.
   * @returns {Object} Returns the initialized clone.
   */

  function initCloneByTag(object, tag, isDeep) {
    var Ctor = object.constructor;

    switch (tag) {
      case arrayBufferTag$1:
        return _cloneArrayBuffer(object);

      case boolTag$1:
      case dateTag$1:
        return new Ctor(+object);

      case dataViewTag$2:
        return _cloneDataView(object, isDeep);

      case float32Tag$1:
      case float64Tag$1:
      case int8Tag$1:
      case int16Tag$1:
      case int32Tag$1:
      case uint8Tag$1:
      case uint8ClampedTag$1:
      case uint16Tag$1:
      case uint32Tag$1:
        return _cloneTypedArray(object, isDeep);

      case mapTag$2:
        return new Ctor();

      case numberTag$1:
      case stringTag$1:
        return new Ctor(object);

      case regexpTag$1:
        return _cloneRegExp(object);

      case setTag$2:
        return new Ctor();

      case symbolTag$1:
        return _cloneSymbol(object);
    }
  }

  var _initCloneByTag = initCloneByTag;

  /** Built-in value references. */

  var objectCreate = Object.create;
  /**
   * The base implementation of `_.create` without support for assigning
   * properties to the created object.
   *
   * @private
   * @param {Object} proto The object to inherit from.
   * @returns {Object} Returns the new object.
   */

  var baseCreate = function () {
    function object() {}

    return function (proto) {
      if (!isObject_1(proto)) {
        return {};
      }

      if (objectCreate) {
        return objectCreate(proto);
      }

      object.prototype = proto;
      var result = new object();
      object.prototype = undefined;
      return result;
    };
  }();

  var _baseCreate = baseCreate;

  /**
   * Initializes an object clone.
   *
   * @private
   * @param {Object} object The object to clone.
   * @returns {Object} Returns the initialized clone.
   */

  function initCloneObject(object) {
    return typeof object.constructor == 'function' && !_isPrototype(object) ? _baseCreate(_getPrototype(object)) : {};
  }

  var _initCloneObject = initCloneObject;

  /** `Object#toString` result references. */

  var mapTag$3 = '[object Map]';
  /**
   * The base implementation of `_.isMap` without Node.js optimizations.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a map, else `false`.
   */

  function baseIsMap(value) {
    return isObjectLike_1(value) && _getTag(value) == mapTag$3;
  }

  var _baseIsMap = baseIsMap;

  /* Node.js helper references. */

  var nodeIsMap = _nodeUtil && _nodeUtil.isMap;
  /**
   * Checks if `value` is classified as a `Map` object.
   *
   * @static
   * @memberOf _
   * @since 4.3.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a map, else `false`.
   * @example
   *
   * _.isMap(new Map);
   * // => true
   *
   * _.isMap(new WeakMap);
   * // => false
   */

  var isMap = nodeIsMap ? _baseUnary(nodeIsMap) : _baseIsMap;
  var isMap_1 = isMap;

  /** `Object#toString` result references. */

  var setTag$3 = '[object Set]';
  /**
   * The base implementation of `_.isSet` without Node.js optimizations.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a set, else `false`.
   */

  function baseIsSet(value) {
    return isObjectLike_1(value) && _getTag(value) == setTag$3;
  }

  var _baseIsSet = baseIsSet;

  /* Node.js helper references. */

  var nodeIsSet = _nodeUtil && _nodeUtil.isSet;
  /**
   * Checks if `value` is classified as a `Set` object.
   *
   * @static
   * @memberOf _
   * @since 4.3.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a set, else `false`.
   * @example
   *
   * _.isSet(new Set);
   * // => true
   *
   * _.isSet(new WeakSet);
   * // => false
   */

  var isSet = nodeIsSet ? _baseUnary(nodeIsSet) : _baseIsSet;
  var isSet_1 = isSet;

  /** Used to compose bitmasks for cloning. */

  var CLONE_DEEP_FLAG = 1,
      CLONE_FLAT_FLAG = 2,
      CLONE_SYMBOLS_FLAG = 4;
  /** `Object#toString` result references. */

  var argsTag$2 = '[object Arguments]',
      arrayTag$1 = '[object Array]',
      boolTag$2 = '[object Boolean]',
      dateTag$2 = '[object Date]',
      errorTag$1 = '[object Error]',
      funcTag$2 = '[object Function]',
      genTag$1 = '[object GeneratorFunction]',
      mapTag$4 = '[object Map]',
      numberTag$2 = '[object Number]',
      objectTag$2 = '[object Object]',
      regexpTag$2 = '[object RegExp]',
      setTag$4 = '[object Set]',
      stringTag$2 = '[object String]',
      symbolTag$2 = '[object Symbol]',
      weakMapTag$2 = '[object WeakMap]';
  var arrayBufferTag$2 = '[object ArrayBuffer]',
      dataViewTag$3 = '[object DataView]',
      float32Tag$2 = '[object Float32Array]',
      float64Tag$2 = '[object Float64Array]',
      int8Tag$2 = '[object Int8Array]',
      int16Tag$2 = '[object Int16Array]',
      int32Tag$2 = '[object Int32Array]',
      uint8Tag$2 = '[object Uint8Array]',
      uint8ClampedTag$2 = '[object Uint8ClampedArray]',
      uint16Tag$2 = '[object Uint16Array]',
      uint32Tag$2 = '[object Uint32Array]';
  /** Used to identify `toStringTag` values supported by `_.clone`. */

  var cloneableTags = {};
  cloneableTags[argsTag$2] = cloneableTags[arrayTag$1] = cloneableTags[arrayBufferTag$2] = cloneableTags[dataViewTag$3] = cloneableTags[boolTag$2] = cloneableTags[dateTag$2] = cloneableTags[float32Tag$2] = cloneableTags[float64Tag$2] = cloneableTags[int8Tag$2] = cloneableTags[int16Tag$2] = cloneableTags[int32Tag$2] = cloneableTags[mapTag$4] = cloneableTags[numberTag$2] = cloneableTags[objectTag$2] = cloneableTags[regexpTag$2] = cloneableTags[setTag$4] = cloneableTags[stringTag$2] = cloneableTags[symbolTag$2] = cloneableTags[uint8Tag$2] = cloneableTags[uint8ClampedTag$2] = cloneableTags[uint16Tag$2] = cloneableTags[uint32Tag$2] = true;
  cloneableTags[errorTag$1] = cloneableTags[funcTag$2] = cloneableTags[weakMapTag$2] = false;
  /**
   * The base implementation of `_.clone` and `_.cloneDeep` which tracks
   * traversed objects.
   *
   * @private
   * @param {*} value The value to clone.
   * @param {boolean} bitmask The bitmask flags.
   *  1 - Deep clone
   *  2 - Flatten inherited properties
   *  4 - Clone symbols
   * @param {Function} [customizer] The function to customize cloning.
   * @param {string} [key] The key of `value`.
   * @param {Object} [object] The parent object of `value`.
   * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
   * @returns {*} Returns the cloned value.
   */

  function baseClone(value, bitmask, customizer, key, object, stack) {
    var result,
        isDeep = bitmask & CLONE_DEEP_FLAG,
        isFlat = bitmask & CLONE_FLAT_FLAG,
        isFull = bitmask & CLONE_SYMBOLS_FLAG;

    if (customizer) {
      result = object ? customizer(value, key, object, stack) : customizer(value);
    }

    if (result !== undefined) {
      return result;
    }

    if (!isObject_1(value)) {
      return value;
    }

    var isArr = isArray_1(value);

    if (isArr) {
      result = _initCloneArray(value);

      if (!isDeep) {
        return _copyArray(value, result);
      }
    } else {
      var tag = _getTag(value),
          isFunc = tag == funcTag$2 || tag == genTag$1;

      if (isBuffer_1(value)) {
        return _cloneBuffer(value, isDeep);
      }

      if (tag == objectTag$2 || tag == argsTag$2 || isFunc && !object) {
        result = isFlat || isFunc ? {} : _initCloneObject(value);

        if (!isDeep) {
          return isFlat ? _copySymbolsIn(value, _baseAssignIn(result, value)) : _copySymbols(value, _baseAssign(result, value));
        }
      } else {
        if (!cloneableTags[tag]) {
          return object ? value : {};
        }

        result = _initCloneByTag(value, tag, isDeep);
      }
    } // Check for circular references and return its corresponding clone.


    stack || (stack = new _Stack());
    var stacked = stack.get(value);

    if (stacked) {
      return stacked;
    }

    stack.set(value, result);

    if (isSet_1(value)) {
      value.forEach(function (subValue) {
        result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
      });
      return result;
    }

    if (isMap_1(value)) {
      value.forEach(function (subValue, key) {
        result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
      });
      return result;
    }

    var keysFunc = isFull ? isFlat ? _getAllKeysIn : _getAllKeys : isFlat ? keysIn : keys_1;
    var props = isArr ? undefined : keysFunc(value);
    _arrayEach(props || value, function (subValue, key) {
      if (props) {
        key = subValue;
        subValue = value[key];
      } // Recursively populate clone (susceptible to call stack limits).


      _assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
    });
    return result;
  }

  var _baseClone = baseClone;

  /** Used to compose bitmasks for cloning. */

  var CLONE_DEEP_FLAG$1 = 1,
      CLONE_SYMBOLS_FLAG$1 = 4;
  /**
   * This method is like `_.clone` except that it recursively clones `value`.
   *
   * @static
   * @memberOf _
   * @since 1.0.0
   * @category Lang
   * @param {*} value The value to recursively clone.
   * @returns {*} Returns the deep cloned value.
   * @see _.clone
   * @example
   *
   * var objects = [{ 'a': 1 }, { 'b': 2 }];
   *
   * var deep = _.cloneDeep(objects);
   * console.log(deep[0] === objects[0]);
   * // => false
   */

  function cloneDeep(value) {
    return _baseClone(value, CLONE_DEEP_FLAG$1 | CLONE_SYMBOLS_FLAG$1);
  }

  var cloneDeep_1 = cloneDeep;

  /**
   * cssfilter
   *
   * @author 老雷<leizongmin@gmail.com>
   */
  function getDefaultWhiteList() {
    // 白名单值说明：
    // true: 允许该属性
    // Function: function (val) { } 返回true表示允许该属性，其他值均表示不允许
    // RegExp: regexp.test(val) 返回true表示允许该属性，其他值均表示不允许
    // 除上面列出的值外均表示不允许
    var whiteList = {};
    whiteList['align-content'] = false; // default: auto

    whiteList['align-items'] = false; // default: auto

    whiteList['align-self'] = false; // default: auto

    whiteList['alignment-adjust'] = false; // default: auto

    whiteList['alignment-baseline'] = false; // default: baseline

    whiteList['all'] = false; // default: depending on individual properties

    whiteList['anchor-point'] = false; // default: none

    whiteList['animation'] = false; // default: depending on individual properties

    whiteList['animation-delay'] = false; // default: 0

    whiteList['animation-direction'] = false; // default: normal

    whiteList['animation-duration'] = false; // default: 0

    whiteList['animation-fill-mode'] = false; // default: none

    whiteList['animation-iteration-count'] = false; // default: 1

    whiteList['animation-name'] = false; // default: none

    whiteList['animation-play-state'] = false; // default: running

    whiteList['animation-timing-function'] = false; // default: ease

    whiteList['azimuth'] = false; // default: center

    whiteList['backface-visibility'] = false; // default: visible

    whiteList['background'] = true; // default: depending on individual properties

    whiteList['background-attachment'] = true; // default: scroll

    whiteList['background-clip'] = true; // default: border-box

    whiteList['background-color'] = true; // default: transparent

    whiteList['background-image'] = true; // default: none

    whiteList['background-origin'] = true; // default: padding-box

    whiteList['background-position'] = true; // default: 0% 0%

    whiteList['background-repeat'] = true; // default: repeat

    whiteList['background-size'] = true; // default: auto

    whiteList['baseline-shift'] = false; // default: baseline

    whiteList['binding'] = false; // default: none

    whiteList['bleed'] = false; // default: 6pt

    whiteList['bookmark-label'] = false; // default: content()

    whiteList['bookmark-level'] = false; // default: none

    whiteList['bookmark-state'] = false; // default: open

    whiteList['border'] = true; // default: depending on individual properties

    whiteList['border-bottom'] = true; // default: depending on individual properties

    whiteList['border-bottom-color'] = true; // default: current color

    whiteList['border-bottom-left-radius'] = true; // default: 0

    whiteList['border-bottom-right-radius'] = true; // default: 0

    whiteList['border-bottom-style'] = true; // default: none

    whiteList['border-bottom-width'] = true; // default: medium

    whiteList['border-collapse'] = true; // default: separate

    whiteList['border-color'] = true; // default: depending on individual properties

    whiteList['border-image'] = true; // default: none

    whiteList['border-image-outset'] = true; // default: 0

    whiteList['border-image-repeat'] = true; // default: stretch

    whiteList['border-image-slice'] = true; // default: 100%

    whiteList['border-image-source'] = true; // default: none

    whiteList['border-image-width'] = true; // default: 1

    whiteList['border-left'] = true; // default: depending on individual properties

    whiteList['border-left-color'] = true; // default: current color

    whiteList['border-left-style'] = true; // default: none

    whiteList['border-left-width'] = true; // default: medium

    whiteList['border-radius'] = true; // default: 0

    whiteList['border-right'] = true; // default: depending on individual properties

    whiteList['border-right-color'] = true; // default: current color

    whiteList['border-right-style'] = true; // default: none

    whiteList['border-right-width'] = true; // default: medium

    whiteList['border-spacing'] = true; // default: 0

    whiteList['border-style'] = true; // default: depending on individual properties

    whiteList['border-top'] = true; // default: depending on individual properties

    whiteList['border-top-color'] = true; // default: current color

    whiteList['border-top-left-radius'] = true; // default: 0

    whiteList['border-top-right-radius'] = true; // default: 0

    whiteList['border-top-style'] = true; // default: none

    whiteList['border-top-width'] = true; // default: medium

    whiteList['border-width'] = true; // default: depending on individual properties

    whiteList['bottom'] = false; // default: auto

    whiteList['box-decoration-break'] = true; // default: slice

    whiteList['box-shadow'] = true; // default: none

    whiteList['box-sizing'] = true; // default: content-box

    whiteList['box-snap'] = true; // default: none

    whiteList['box-suppress'] = true; // default: show

    whiteList['break-after'] = true; // default: auto

    whiteList['break-before'] = true; // default: auto

    whiteList['break-inside'] = true; // default: auto

    whiteList['caption-side'] = false; // default: top

    whiteList['chains'] = false; // default: none

    whiteList['clear'] = true; // default: none

    whiteList['clip'] = false; // default: auto

    whiteList['clip-path'] = false; // default: none

    whiteList['clip-rule'] = false; // default: nonzero

    whiteList['color'] = true; // default: implementation dependent

    whiteList['color-interpolation-filters'] = true; // default: auto

    whiteList['column-count'] = false; // default: auto

    whiteList['column-fill'] = false; // default: balance

    whiteList['column-gap'] = false; // default: normal

    whiteList['column-rule'] = false; // default: depending on individual properties

    whiteList['column-rule-color'] = false; // default: current color

    whiteList['column-rule-style'] = false; // default: medium

    whiteList['column-rule-width'] = false; // default: medium

    whiteList['column-span'] = false; // default: none

    whiteList['column-width'] = false; // default: auto

    whiteList['columns'] = false; // default: depending on individual properties

    whiteList['contain'] = false; // default: none

    whiteList['content'] = false; // default: normal

    whiteList['counter-increment'] = false; // default: none

    whiteList['counter-reset'] = false; // default: none

    whiteList['counter-set'] = false; // default: none

    whiteList['crop'] = false; // default: auto

    whiteList['cue'] = false; // default: depending on individual properties

    whiteList['cue-after'] = false; // default: none

    whiteList['cue-before'] = false; // default: none

    whiteList['cursor'] = false; // default: auto

    whiteList['direction'] = false; // default: ltr

    whiteList['display'] = true; // default: depending on individual properties

    whiteList['display-inside'] = true; // default: auto

    whiteList['display-list'] = true; // default: none

    whiteList['display-outside'] = true; // default: inline-level

    whiteList['dominant-baseline'] = false; // default: auto

    whiteList['elevation'] = false; // default: level

    whiteList['empty-cells'] = false; // default: show

    whiteList['filter'] = false; // default: none

    whiteList['flex'] = false; // default: depending on individual properties

    whiteList['flex-basis'] = false; // default: auto

    whiteList['flex-direction'] = false; // default: row

    whiteList['flex-flow'] = false; // default: depending on individual properties

    whiteList['flex-grow'] = false; // default: 0

    whiteList['flex-shrink'] = false; // default: 1

    whiteList['flex-wrap'] = false; // default: nowrap

    whiteList['float'] = false; // default: none

    whiteList['float-offset'] = false; // default: 0 0

    whiteList['flood-color'] = false; // default: black

    whiteList['flood-opacity'] = false; // default: 1

    whiteList['flow-from'] = false; // default: none

    whiteList['flow-into'] = false; // default: none

    whiteList['font'] = true; // default: depending on individual properties

    whiteList['font-family'] = true; // default: implementation dependent

    whiteList['font-feature-settings'] = true; // default: normal

    whiteList['font-kerning'] = true; // default: auto

    whiteList['font-language-override'] = true; // default: normal

    whiteList['font-size'] = true; // default: medium

    whiteList['font-size-adjust'] = true; // default: none

    whiteList['font-stretch'] = true; // default: normal

    whiteList['font-style'] = true; // default: normal

    whiteList['font-synthesis'] = true; // default: weight style

    whiteList['font-variant'] = true; // default: normal

    whiteList['font-variant-alternates'] = true; // default: normal

    whiteList['font-variant-caps'] = true; // default: normal

    whiteList['font-variant-east-asian'] = true; // default: normal

    whiteList['font-variant-ligatures'] = true; // default: normal

    whiteList['font-variant-numeric'] = true; // default: normal

    whiteList['font-variant-position'] = true; // default: normal

    whiteList['font-weight'] = true; // default: normal

    whiteList['grid'] = false; // default: depending on individual properties

    whiteList['grid-area'] = false; // default: depending on individual properties

    whiteList['grid-auto-columns'] = false; // default: auto

    whiteList['grid-auto-flow'] = false; // default: none

    whiteList['grid-auto-rows'] = false; // default: auto

    whiteList['grid-column'] = false; // default: depending on individual properties

    whiteList['grid-column-end'] = false; // default: auto

    whiteList['grid-column-start'] = false; // default: auto

    whiteList['grid-row'] = false; // default: depending on individual properties

    whiteList['grid-row-end'] = false; // default: auto

    whiteList['grid-row-start'] = false; // default: auto

    whiteList['grid-template'] = false; // default: depending on individual properties

    whiteList['grid-template-areas'] = false; // default: none

    whiteList['grid-template-columns'] = false; // default: none

    whiteList['grid-template-rows'] = false; // default: none

    whiteList['hanging-punctuation'] = false; // default: none

    whiteList['height'] = true; // default: auto

    whiteList['hyphens'] = false; // default: manual

    whiteList['icon'] = false; // default: auto

    whiteList['image-orientation'] = false; // default: auto

    whiteList['image-resolution'] = false; // default: normal

    whiteList['ime-mode'] = false; // default: auto

    whiteList['initial-letters'] = false; // default: normal

    whiteList['inline-box-align'] = false; // default: last

    whiteList['justify-content'] = false; // default: auto

    whiteList['justify-items'] = false; // default: auto

    whiteList['justify-self'] = false; // default: auto

    whiteList['left'] = false; // default: auto

    whiteList['letter-spacing'] = true; // default: normal

    whiteList['lighting-color'] = true; // default: white

    whiteList['line-box-contain'] = false; // default: block inline replaced

    whiteList['line-break'] = false; // default: auto

    whiteList['line-grid'] = false; // default: match-parent

    whiteList['line-height'] = false; // default: normal

    whiteList['line-snap'] = false; // default: none

    whiteList['line-stacking'] = false; // default: depending on individual properties

    whiteList['line-stacking-ruby'] = false; // default: exclude-ruby

    whiteList['line-stacking-shift'] = false; // default: consider-shifts

    whiteList['line-stacking-strategy'] = false; // default: inline-line-height

    whiteList['list-style'] = true; // default: depending on individual properties

    whiteList['list-style-image'] = true; // default: none

    whiteList['list-style-position'] = true; // default: outside

    whiteList['list-style-type'] = true; // default: disc

    whiteList['margin'] = true; // default: depending on individual properties

    whiteList['margin-bottom'] = true; // default: 0

    whiteList['margin-left'] = true; // default: 0

    whiteList['margin-right'] = true; // default: 0

    whiteList['margin-top'] = true; // default: 0

    whiteList['marker-offset'] = false; // default: auto

    whiteList['marker-side'] = false; // default: list-item

    whiteList['marks'] = false; // default: none

    whiteList['mask'] = false; // default: border-box

    whiteList['mask-box'] = false; // default: see individual properties

    whiteList['mask-box-outset'] = false; // default: 0

    whiteList['mask-box-repeat'] = false; // default: stretch

    whiteList['mask-box-slice'] = false; // default: 0 fill

    whiteList['mask-box-source'] = false; // default: none

    whiteList['mask-box-width'] = false; // default: auto

    whiteList['mask-clip'] = false; // default: border-box

    whiteList['mask-image'] = false; // default: none

    whiteList['mask-origin'] = false; // default: border-box

    whiteList['mask-position'] = false; // default: center

    whiteList['mask-repeat'] = false; // default: no-repeat

    whiteList['mask-size'] = false; // default: border-box

    whiteList['mask-source-type'] = false; // default: auto

    whiteList['mask-type'] = false; // default: luminance

    whiteList['max-height'] = true; // default: none

    whiteList['max-lines'] = false; // default: none

    whiteList['max-width'] = true; // default: none

    whiteList['min-height'] = true; // default: 0

    whiteList['min-width'] = true; // default: 0

    whiteList['move-to'] = false; // default: normal

    whiteList['nav-down'] = false; // default: auto

    whiteList['nav-index'] = false; // default: auto

    whiteList['nav-left'] = false; // default: auto

    whiteList['nav-right'] = false; // default: auto

    whiteList['nav-up'] = false; // default: auto

    whiteList['object-fit'] = false; // default: fill

    whiteList['object-position'] = false; // default: 50% 50%

    whiteList['opacity'] = false; // default: 1

    whiteList['order'] = false; // default: 0

    whiteList['orphans'] = false; // default: 2

    whiteList['outline'] = false; // default: depending on individual properties

    whiteList['outline-color'] = false; // default: invert

    whiteList['outline-offset'] = false; // default: 0

    whiteList['outline-style'] = false; // default: none

    whiteList['outline-width'] = false; // default: medium

    whiteList['overflow'] = false; // default: depending on individual properties

    whiteList['overflow-wrap'] = false; // default: normal

    whiteList['overflow-x'] = false; // default: visible

    whiteList['overflow-y'] = false; // default: visible

    whiteList['padding'] = true; // default: depending on individual properties

    whiteList['padding-bottom'] = true; // default: 0

    whiteList['padding-left'] = true; // default: 0

    whiteList['padding-right'] = true; // default: 0

    whiteList['padding-top'] = true; // default: 0

    whiteList['page'] = false; // default: auto

    whiteList['page-break-after'] = false; // default: auto

    whiteList['page-break-before'] = false; // default: auto

    whiteList['page-break-inside'] = false; // default: auto

    whiteList['page-policy'] = false; // default: start

    whiteList['pause'] = false; // default: implementation dependent

    whiteList['pause-after'] = false; // default: implementation dependent

    whiteList['pause-before'] = false; // default: implementation dependent

    whiteList['perspective'] = false; // default: none

    whiteList['perspective-origin'] = false; // default: 50% 50%

    whiteList['pitch'] = false; // default: medium

    whiteList['pitch-range'] = false; // default: 50

    whiteList['play-during'] = false; // default: auto

    whiteList['position'] = false; // default: static

    whiteList['presentation-level'] = false; // default: 0

    whiteList['quotes'] = false; // default: text

    whiteList['region-fragment'] = false; // default: auto

    whiteList['resize'] = false; // default: none

    whiteList['rest'] = false; // default: depending on individual properties

    whiteList['rest-after'] = false; // default: none

    whiteList['rest-before'] = false; // default: none

    whiteList['richness'] = false; // default: 50

    whiteList['right'] = false; // default: auto

    whiteList['rotation'] = false; // default: 0

    whiteList['rotation-point'] = false; // default: 50% 50%

    whiteList['ruby-align'] = false; // default: auto

    whiteList['ruby-merge'] = false; // default: separate

    whiteList['ruby-position'] = false; // default: before

    whiteList['shape-image-threshold'] = false; // default: 0.0

    whiteList['shape-outside'] = false; // default: none

    whiteList['shape-margin'] = false; // default: 0

    whiteList['size'] = false; // default: auto

    whiteList['speak'] = false; // default: auto

    whiteList['speak-as'] = false; // default: normal

    whiteList['speak-header'] = false; // default: once

    whiteList['speak-numeral'] = false; // default: continuous

    whiteList['speak-punctuation'] = false; // default: none

    whiteList['speech-rate'] = false; // default: medium

    whiteList['stress'] = false; // default: 50

    whiteList['string-set'] = false; // default: none

    whiteList['tab-size'] = false; // default: 8

    whiteList['table-layout'] = false; // default: auto

    whiteList['text-align'] = true; // default: start

    whiteList['text-align-last'] = true; // default: auto

    whiteList['text-combine-upright'] = true; // default: none

    whiteList['text-decoration'] = true; // default: none

    whiteList['text-decoration-color'] = true; // default: currentColor

    whiteList['text-decoration-line'] = true; // default: none

    whiteList['text-decoration-skip'] = true; // default: objects

    whiteList['text-decoration-style'] = true; // default: solid

    whiteList['text-emphasis'] = true; // default: depending on individual properties

    whiteList['text-emphasis-color'] = true; // default: currentColor

    whiteList['text-emphasis-position'] = true; // default: over right

    whiteList['text-emphasis-style'] = true; // default: none

    whiteList['text-height'] = true; // default: auto

    whiteList['text-indent'] = true; // default: 0

    whiteList['text-justify'] = true; // default: auto

    whiteList['text-orientation'] = true; // default: mixed

    whiteList['text-overflow'] = true; // default: clip

    whiteList['text-shadow'] = true; // default: none

    whiteList['text-space-collapse'] = true; // default: collapse

    whiteList['text-transform'] = true; // default: none

    whiteList['text-underline-position'] = true; // default: auto

    whiteList['text-wrap'] = true; // default: normal

    whiteList['top'] = false; // default: auto

    whiteList['transform'] = false; // default: none

    whiteList['transform-origin'] = false; // default: 50% 50% 0

    whiteList['transform-style'] = false; // default: flat

    whiteList['transition'] = false; // default: depending on individual properties

    whiteList['transition-delay'] = false; // default: 0s

    whiteList['transition-duration'] = false; // default: 0s

    whiteList['transition-property'] = false; // default: all

    whiteList['transition-timing-function'] = false; // default: ease

    whiteList['unicode-bidi'] = false; // default: normal

    whiteList['vertical-align'] = false; // default: baseline

    whiteList['visibility'] = false; // default: visible

    whiteList['voice-balance'] = false; // default: center

    whiteList['voice-duration'] = false; // default: auto

    whiteList['voice-family'] = false; // default: implementation dependent

    whiteList['voice-pitch'] = false; // default: medium

    whiteList['voice-range'] = false; // default: medium

    whiteList['voice-rate'] = false; // default: normal

    whiteList['voice-stress'] = false; // default: normal

    whiteList['voice-volume'] = false; // default: medium

    whiteList['volume'] = false; // default: medium

    whiteList['white-space'] = false; // default: normal

    whiteList['widows'] = false; // default: 2

    whiteList['width'] = true; // default: auto

    whiteList['will-change'] = false; // default: auto

    whiteList['word-break'] = true; // default: normal

    whiteList['word-spacing'] = true; // default: normal

    whiteList['word-wrap'] = true; // default: normal

    whiteList['wrap-flow'] = false; // default: auto

    whiteList['wrap-through'] = false; // default: wrap

    whiteList['writing-mode'] = false; // default: horizontal-tb

    whiteList['z-index'] = false; // default: auto

    return whiteList;
  }
  /**
   * 匹配到白名单上的一个属性时
   *
   * @param {String} name
   * @param {String} value
   * @param {Object} options
   * @return {String}
   */


  function onAttr(name, value, options) {} // do nothing

  /**
   * 匹配到不在白名单上的一个属性时
   *
   * @param {String} name
   * @param {String} value
   * @param {Object} options
   * @return {String}
   */


  function onIgnoreAttr(name, value, options) {// do nothing
  }

  var REGEXP_URL_JAVASCRIPT = /javascript\s*\:/img;
  /**
   * 过滤属性值
   *
   * @param {String} name
   * @param {String} value
   * @return {String}
   */

  function safeAttrValue(name, value) {
    if (REGEXP_URL_JAVASCRIPT.test(value)) return '';
    return value;
  }

  var whiteList = getDefaultWhiteList();
  var getDefaultWhiteList_1 = getDefaultWhiteList;
  var onAttr_1 = onAttr;
  var onIgnoreAttr_1 = onIgnoreAttr;
  var safeAttrValue_1 = safeAttrValue;
  var _default = {
    whiteList: whiteList,
    getDefaultWhiteList: getDefaultWhiteList_1,
    onAttr: onAttr_1,
    onIgnoreAttr: onIgnoreAttr_1,
    safeAttrValue: safeAttrValue_1
  };

  var util = {
    indexOf: function indexOf(arr, item) {
      var i, j;

      if (Array.prototype.indexOf) {
        return arr.indexOf(item);
      }

      for (i = 0, j = arr.length; i < j; i++) {
        if (arr[i] === item) {
          return i;
        }
      }

      return -1;
    },
    forEach: function forEach(arr, fn, scope) {
      var i, j;

      if (Array.prototype.forEach) {
        return arr.forEach(fn, scope);
      }

      for (i = 0, j = arr.length; i < j; i++) {
        fn.call(scope, arr[i], i, arr);
      }
    },
    trim: function trim(str) {
      if (String.prototype.trim) {
        return str.trim();
      }

      return str.replace(/(^\s*)|(\s*$)/g, '');
    },
    trimRight: function trimRight(str) {
      if (String.prototype.trimRight) {
        return str.trimRight();
      }

      return str.replace(/(\s*$)/g, '');
    }
  };

  /**
   * cssfilter
   *
   * @author 老雷<leizongmin@gmail.com>
   */

  /**
   * 解析style
   *
   * @param {String} css
   * @param {Function} onAttr 处理属性的函数
   *   参数格式： function (sourcePosition, position, name, value, source)
   * @return {String}
   */

  function parseStyle(css, onAttr) {
    css = util.trimRight(css);
    if (css[css.length - 1] !== ';') css += ';';
    var cssLength = css.length;
    var isParenthesisOpen = false;
    var lastPos = 0;
    var i = 0;
    var retCSS = '';

    function addNewAttr() {
      // 如果没有正常的闭合圆括号，则直接忽略当前属性
      if (!isParenthesisOpen) {
        var source = util.trim(css.slice(lastPos, i));

        var j = source.indexOf(':');

        if (j !== -1) {
          var name = util.trim(source.slice(0, j));

          var value = util.trim(source.slice(j + 1)); // 必须有属性名称


          if (name) {
            var ret = onAttr(lastPos, retCSS.length, name, value, source);
            if (ret) retCSS += ret + '; ';
          }
        }
      }

      lastPos = i + 1;
    }

    for (; i < cssLength; i++) {
      var c = css[i];

      if (c === '/' && css[i + 1] === '*') {
        // 备注开始
        var j = css.indexOf('*/', i + 2); // 如果没有正常的备注结束，则后面的部分全部跳过

        if (j === -1) break; // 直接将当前位置调到备注结尾，并且初始化状态

        i = j + 1;
        lastPos = i + 1;
        isParenthesisOpen = false;
      } else if (c === '(') {
        isParenthesisOpen = true;
      } else if (c === ')') {
        isParenthesisOpen = false;
      } else if (c === ';') {
        if (isParenthesisOpen) ; else {
          addNewAttr();
        }
      } else if (c === '\n') {
        addNewAttr();
      }
    }

    return util.trim(retCSS);
  }

  var parser = parseStyle;

  /**
   * cssfilter
   *
   * @author 老雷<leizongmin@gmail.com>
   */

  /**
   * 返回值是否为空
   *
   * @param {Object} obj
   * @return {Boolean}
   */

  function isNull(obj) {
    return obj === undefined || obj === null;
  }
  /**
   * 浅拷贝对象
   *
   * @param {Object} obj
   * @return {Object}
   */


  function shallowCopyObject(obj) {
    var ret = {};

    for (var i in obj) {
      ret[i] = obj[i];
    }

    return ret;
  }
  /**
   * 创建CSS过滤器
   *
   * @param {Object} options
   *   - {Object} whiteList
   *   - {Function} onAttr
   *   - {Function} onIgnoreAttr
   *   - {Function} safeAttrValue
   */


  function FilterCSS(options) {
    options = shallowCopyObject(options || {});
    options.whiteList = options.whiteList || _default.whiteList;
    options.onAttr = options.onAttr || _default.onAttr;
    options.onIgnoreAttr = options.onIgnoreAttr || _default.onIgnoreAttr;
    options.safeAttrValue = options.safeAttrValue || _default.safeAttrValue;
    this.options = options;
  }

  FilterCSS.prototype.process = function (css) {
    // 兼容各种奇葩输入
    css = css || '';
    css = css.toString();
    if (!css) return '';
    var me = this;
    var options = me.options;
    var whiteList = options.whiteList;
    var onAttr = options.onAttr;
    var onIgnoreAttr = options.onIgnoreAttr;
    var safeAttrValue = options.safeAttrValue;
    var retCSS = parser(css, function (sourcePosition, position, name, value, source) {
      var check = whiteList[name];
      var isWhite = false;
      if (check === true) isWhite = check;else if (typeof check === 'function') isWhite = check(value);else if (check instanceof RegExp) isWhite = check.test(value);
      if (isWhite !== true) isWhite = false; // 如果过滤后 value 为空则直接忽略

      value = safeAttrValue(name, value);
      if (!value) return;
      var opts = {
        position: position,
        sourcePosition: sourcePosition,
        source: source,
        isWhite: isWhite
      };

      if (isWhite) {
        var ret = onAttr(name, value, opts);

        if (isNull(ret)) {
          return name + ':' + value;
        } else {
          return ret;
        }
      } else {
        var ret = onIgnoreAttr(name, value, opts);

        if (!isNull(ret)) {
          return ret;
        }
      }
    });
    return retCSS;
  };

  var css = FilterCSS;

  var lib = createCommonjsModule(function (module, exports) {
    /**
     * cssfilter
     *
     * @author 老雷<leizongmin@gmail.com>
     */

    /**
     * XSS过滤
     *
     * @param {String} css 要过滤的CSS代码
     * @param {Object} options 选项：whiteList, onAttr, onIgnoreAttr
     * @return {String}
     */
    function filterCSS(html, options) {
      var xss = new css(options);
      return xss.process(html);
    } // 输出


    exports = module.exports = filterCSS;
    exports.FilterCSS = css;

    for (var i in _default) {
      exports[i] = _default[i];
    } // 在浏览器端使用


    if (typeof window !== 'undefined') {
      window.filterCSS = module.exports;
    }
  });
  var lib_1 = lib.FilterCSS;

  var util$1 = {
    indexOf: function indexOf(arr, item) {
      var i, j;

      if (Array.prototype.indexOf) {
        return arr.indexOf(item);
      }

      for (i = 0, j = arr.length; i < j; i++) {
        if (arr[i] === item) {
          return i;
        }
      }

      return -1;
    },
    forEach: function forEach(arr, fn, scope) {
      var i, j;

      if (Array.prototype.forEach) {
        return arr.forEach(fn, scope);
      }

      for (i = 0, j = arr.length; i < j; i++) {
        fn.call(scope, arr[i], i, arr);
      }
    },
    trim: function trim(str) {
      if (String.prototype.trim) {
        return str.trim();
      }

      return str.replace(/(^\s*)|(\s*$)/g, "");
    },
    spaceIndex: function spaceIndex(str) {
      var reg = /\s|\n|\t/;
      var match = reg.exec(str);
      return match ? match.index : -1;
    }
  };

  /**
   * default settings
   *
   * @author Zongmin Lei<leizongmin@gmail.com>
   */

  var FilterCSS$1 = lib.FilterCSS;
  var getDefaultCSSWhiteList = lib.getDefaultWhiteList;

  function getDefaultWhiteList$1() {
    return {
      a: ["target", "href", "title"],
      abbr: ["title"],
      address: [],
      area: ["shape", "coords", "href", "alt"],
      article: [],
      aside: [],
      audio: ["autoplay", "controls", "loop", "preload", "src"],
      b: [],
      bdi: ["dir"],
      bdo: ["dir"],
      big: [],
      blockquote: ["cite"],
      br: [],
      caption: [],
      center: [],
      cite: [],
      code: [],
      col: ["align", "valign", "span", "width"],
      colgroup: ["align", "valign", "span", "width"],
      dd: [],
      del: ["datetime"],
      details: ["open"],
      div: [],
      dl: [],
      dt: [],
      em: [],
      font: ["color", "size", "face"],
      footer: [],
      h1: [],
      h2: [],
      h3: [],
      h4: [],
      h5: [],
      h6: [],
      header: [],
      hr: [],
      i: [],
      img: ["src", "alt", "title", "width", "height"],
      ins: ["datetime"],
      li: [],
      mark: [],
      nav: [],
      ol: [],
      p: [],
      pre: [],
      s: [],
      section: [],
      small: [],
      span: [],
      sub: [],
      sup: [],
      strong: [],
      table: ["width", "border", "align", "valign"],
      tbody: ["align", "valign"],
      td: ["width", "rowspan", "colspan", "align", "valign"],
      tfoot: ["align", "valign"],
      th: ["width", "rowspan", "colspan", "align", "valign"],
      thead: ["align", "valign"],
      tr: ["rowspan", "align", "valign"],
      tt: [],
      u: [],
      ul: [],
      video: ["autoplay", "controls", "loop", "preload", "src", "height", "width"]
    };
  }

  var defaultCSSFilter = new FilterCSS$1();
  /**
   * default onTag function
   *
   * @param {String} tag
   * @param {String} html
   * @param {Object} options
   * @return {String}
   */

  function onTag(tag, html, options) {} // do nothing

  /**
   * default onIgnoreTag function
   *
   * @param {String} tag
   * @param {String} html
   * @param {Object} options
   * @return {String}
   */


  function onIgnoreTag(tag, html, options) {} // do nothing

  /**
   * default onTagAttr function
   *
   * @param {String} tag
   * @param {String} name
   * @param {String} value
   * @return {String}
   */


  function onTagAttr(tag, name, value) {} // do nothing

  /**
   * default onIgnoreTagAttr function
   *
   * @param {String} tag
   * @param {String} name
   * @param {String} value
   * @return {String}
   */


  function onIgnoreTagAttr(tag, name, value) {} // do nothing

  /**
   * default escapeHtml function
   *
   * @param {String} html
   */


  function escapeHtml(html) {
    return html.replace(REGEXP_LT, "&lt;").replace(REGEXP_GT, "&gt;");
  }
  /**
   * default safeAttrValue function
   *
   * @param {String} tag
   * @param {String} name
   * @param {String} value
   * @param {Object} cssFilter
   * @return {String}
   */


  function safeAttrValue$1(tag, name, value, cssFilter) {
    // unescape attribute value firstly
    value = friendlyAttrValue(value);

    if (name === "href" || name === "src") {
      // filter `href` and `src` attribute
      // only allow the value that starts with `http://` | `https://` | `mailto:` | `/` | `#`
      value = util$1.trim(value);
      if (value === "#") return "#";

      if (!(value.substr(0, 7) === "http://" || value.substr(0, 8) === "https://" || value.substr(0, 7) === "mailto:" || value.substr(0, 4) === "tel:" || value[0] === "#" || value[0] === "/")) {
        return "";
      }
    } else if (name === "background") {
      // filter `background` attribute (maybe no use)
      // `javascript:`
      REGEXP_DEFAULT_ON_TAG_ATTR_4.lastIndex = 0;

      if (REGEXP_DEFAULT_ON_TAG_ATTR_4.test(value)) {
        return "";
      }
    } else if (name === "style") {
      // `expression()`
      REGEXP_DEFAULT_ON_TAG_ATTR_7.lastIndex = 0;

      if (REGEXP_DEFAULT_ON_TAG_ATTR_7.test(value)) {
        return "";
      } // `url()`


      REGEXP_DEFAULT_ON_TAG_ATTR_8.lastIndex = 0;

      if (REGEXP_DEFAULT_ON_TAG_ATTR_8.test(value)) {
        REGEXP_DEFAULT_ON_TAG_ATTR_4.lastIndex = 0;

        if (REGEXP_DEFAULT_ON_TAG_ATTR_4.test(value)) {
          return "";
        }
      }

      if (cssFilter !== false) {
        cssFilter = cssFilter || defaultCSSFilter;
        value = cssFilter.process(value);
      }
    } // escape `<>"` before returns


    value = escapeAttrValue(value);
    return value;
  } // RegExp list


  var REGEXP_LT = /</g;
  var REGEXP_GT = />/g;
  var REGEXP_QUOTE = /"/g;
  var REGEXP_QUOTE_2 = /&quot;/g;
  var REGEXP_ATTR_VALUE_1 = /&#([a-zA-Z0-9]*);?/gim;
  var REGEXP_ATTR_VALUE_COLON = /&colon;?/gim;
  var REGEXP_ATTR_VALUE_NEWLINE = /&newline;?/gim;
  var REGEXP_DEFAULT_ON_TAG_ATTR_4 = /((j\s*a\s*v\s*a|v\s*b|l\s*i\s*v\s*e)\s*s\s*c\s*r\s*i\s*p\s*t\s*|m\s*o\s*c\s*h\s*a)\:/gi;
  var REGEXP_DEFAULT_ON_TAG_ATTR_7 = /e\s*x\s*p\s*r\s*e\s*s\s*s\s*i\s*o\s*n\s*\(.*/gi;
  var REGEXP_DEFAULT_ON_TAG_ATTR_8 = /u\s*r\s*l\s*\(.*/gi;
  /**
   * escape doube quote
   *
   * @param {String} str
   * @return {String} str
   */

  function escapeQuote(str) {
    return str.replace(REGEXP_QUOTE, "&quot;");
  }
  /**
   * unescape double quote
   *
   * @param {String} str
   * @return {String} str
   */


  function unescapeQuote(str) {
    return str.replace(REGEXP_QUOTE_2, '"');
  }
  /**
   * escape html entities
   *
   * @param {String} str
   * @return {String}
   */


  function escapeHtmlEntities(str) {
    return str.replace(REGEXP_ATTR_VALUE_1, function replaceUnicode(str, code) {
      return code[0] === "x" || code[0] === "X" ? String.fromCharCode(parseInt(code.substr(1), 16)) : String.fromCharCode(parseInt(code, 10));
    });
  }
  /**
   * escape html5 new danger entities
   *
   * @param {String} str
   * @return {String}
   */


  function escapeDangerHtml5Entities(str) {
    return str.replace(REGEXP_ATTR_VALUE_COLON, ":").replace(REGEXP_ATTR_VALUE_NEWLINE, " ");
  }
  /**
   * clear nonprintable characters
   *
   * @param {String} str
   * @return {String}
   */


  function clearNonPrintableCharacter(str) {
    var str2 = "";

    for (var i = 0, len = str.length; i < len; i++) {
      str2 += str.charCodeAt(i) < 32 ? " " : str.charAt(i);
    }

    return util$1.trim(str2);
  }
  /**
   * get friendly attribute value
   *
   * @param {String} str
   * @return {String}
   */


  function friendlyAttrValue(str) {
    str = unescapeQuote(str);
    str = escapeHtmlEntities(str);
    str = escapeDangerHtml5Entities(str);
    str = clearNonPrintableCharacter(str);
    return str;
  }
  /**
   * unescape attribute value
   *
   * @param {String} str
   * @return {String}
   */


  function escapeAttrValue(str) {
    str = escapeQuote(str);
    str = escapeHtml(str);
    return str;
  }
  /**
   * `onIgnoreTag` function for removing all the tags that are not in whitelist
   */


  function onIgnoreTagStripAll() {
    return "";
  }
  /**
   * remove tag body
   * specify a `tags` list, if the tag is not in the `tags` list then process by the specify function (optional)
   *
   * @param {array} tags
   * @param {function} next
   */


  function StripTagBody(tags, next) {
    if (typeof next !== "function") {
      next = function next() {};
    }

    var isRemoveAllTag = !Array.isArray(tags);

    function isRemoveTag(tag) {
      if (isRemoveAllTag) return true;
      return util$1.indexOf(tags, tag) !== -1;
    }

    var removeList = [];
    var posStart = false;
    return {
      onIgnoreTag: function onIgnoreTag(tag, html, options) {
        if (isRemoveTag(tag)) {
          if (options.isClosing) {
            var ret = "[/removed]";
            var end = options.position + ret.length;
            removeList.push([posStart !== false ? posStart : options.position, end]);
            posStart = false;
            return ret;
          } else {
            if (!posStart) {
              posStart = options.position;
            }

            return "[removed]";
          }
        } else {
          return next(tag, html, options);
        }
      },
      remove: function remove(html) {
        var rethtml = "";
        var lastPos = 0;

        util$1.forEach(removeList, function (pos) {
          rethtml += html.slice(lastPos, pos[0]);
          lastPos = pos[1];
        });

        rethtml += html.slice(lastPos);
        return rethtml;
      }
    };
  }
  /**
   * remove html comments
   *
   * @param {String} html
   * @return {String}
   */


  function stripCommentTag(html) {
    return html.replace(STRIP_COMMENT_TAG_REGEXP, "");
  }

  var STRIP_COMMENT_TAG_REGEXP = /<!--[\s\S]*?-->/g;
  /**
   * remove invisible characters
   *
   * @param {String} html
   * @return {String}
   */

  function stripBlankChar(html) {
    var chars = html.split("");
    chars = chars.filter(function (_char) {
      var c = _char.charCodeAt(0);

      if (c === 127) return false;

      if (c <= 31) {
        if (c === 10 || c === 13) return true;
        return false;
      }

      return true;
    });
    return chars.join("");
  }

  var whiteList$1 = getDefaultWhiteList$1();
  var getDefaultWhiteList_1$1 = getDefaultWhiteList$1;
  var onTag_1 = onTag;
  var onIgnoreTag_1 = onIgnoreTag;
  var onTagAttr_1 = onTagAttr;
  var onIgnoreTagAttr_1 = onIgnoreTagAttr;
  var safeAttrValue_1$1 = safeAttrValue$1;
  var escapeHtml_1 = escapeHtml;
  var escapeQuote_1 = escapeQuote;
  var unescapeQuote_1 = unescapeQuote;
  var escapeHtmlEntities_1 = escapeHtmlEntities;
  var escapeDangerHtml5Entities_1 = escapeDangerHtml5Entities;
  var clearNonPrintableCharacter_1 = clearNonPrintableCharacter;
  var friendlyAttrValue_1 = friendlyAttrValue;
  var escapeAttrValue_1 = escapeAttrValue;
  var onIgnoreTagStripAll_1 = onIgnoreTagStripAll;
  var StripTagBody_1 = StripTagBody;
  var stripCommentTag_1 = stripCommentTag;
  var stripBlankChar_1 = stripBlankChar;
  var cssFilter = defaultCSSFilter;
  var getDefaultCSSWhiteList_1 = getDefaultCSSWhiteList;
  var _default$1 = {
    whiteList: whiteList$1,
    getDefaultWhiteList: getDefaultWhiteList_1$1,
    onTag: onTag_1,
    onIgnoreTag: onIgnoreTag_1,
    onTagAttr: onTagAttr_1,
    onIgnoreTagAttr: onIgnoreTagAttr_1,
    safeAttrValue: safeAttrValue_1$1,
    escapeHtml: escapeHtml_1,
    escapeQuote: escapeQuote_1,
    unescapeQuote: unescapeQuote_1,
    escapeHtmlEntities: escapeHtmlEntities_1,
    escapeDangerHtml5Entities: escapeDangerHtml5Entities_1,
    clearNonPrintableCharacter: clearNonPrintableCharacter_1,
    friendlyAttrValue: friendlyAttrValue_1,
    escapeAttrValue: escapeAttrValue_1,
    onIgnoreTagStripAll: onIgnoreTagStripAll_1,
    StripTagBody: StripTagBody_1,
    stripCommentTag: stripCommentTag_1,
    stripBlankChar: stripBlankChar_1,
    cssFilter: cssFilter,
    getDefaultCSSWhiteList: getDefaultCSSWhiteList_1
  };

  /**
   * Simple HTML Parser
   *
   * @author Zongmin Lei<leizongmin@gmail.com>
   */

  /**
   * get tag name
   *
   * @param {String} html e.g. '<a hef="#">'
   * @return {String}
   */

  function getTagName(html) {
    var i = util$1.spaceIndex(html);

    if (i === -1) {
      var tagName = html.slice(1, -1);
    } else {
      var tagName = html.slice(1, i + 1);
    }

    tagName = util$1.trim(tagName).toLowerCase();
    if (tagName.slice(0, 1) === "/") tagName = tagName.slice(1);
    if (tagName.slice(-1) === "/") tagName = tagName.slice(0, -1);
    return tagName;
  }
  /**
   * is close tag?
   *
   * @param {String} html 如：'<a hef="#">'
   * @return {Boolean}
   */


  function isClosing(html) {
    return html.slice(0, 2) === "</";
  }
  /**
   * parse input html and returns processed html
   *
   * @param {String} html
   * @param {Function} onTag e.g. function (sourcePosition, position, tag, html, isClosing)
   * @param {Function} escapeHtml
   * @return {String}
   */


  function parseTag(html, onTag, escapeHtml) {
    "user strict";

    var rethtml = "";
    var lastPos = 0;
    var tagStart = false;
    var quoteStart = false;
    var currentPos = 0;
    var len = html.length;
    var currentTagName = "";
    var currentHtml = "";

    for (currentPos = 0; currentPos < len; currentPos++) {
      var c = html.charAt(currentPos);

      if (tagStart === false) {
        if (c === "<") {
          tagStart = currentPos;
          continue;
        }
      } else {
        if (quoteStart === false) {
          if (c === "<") {
            rethtml += escapeHtml(html.slice(lastPos, currentPos));
            tagStart = currentPos;
            lastPos = currentPos;
            continue;
          }

          if (c === ">") {
            rethtml += escapeHtml(html.slice(lastPos, tagStart));
            currentHtml = html.slice(tagStart, currentPos + 1);
            currentTagName = getTagName(currentHtml);
            rethtml += onTag(tagStart, rethtml.length, currentTagName, currentHtml, isClosing(currentHtml));
            lastPos = currentPos + 1;
            tagStart = false;
            continue;
          }

          if ((c === '"' || c === "'") && html.charAt(currentPos - 1) === "=") {
            quoteStart = c;
            continue;
          }
        } else {
          if (c === quoteStart) {
            quoteStart = false;
            continue;
          }
        }
      }
    }

    if (lastPos < html.length) {
      rethtml += escapeHtml(html.substr(lastPos));
    }

    return rethtml;
  }

  var REGEXP_ILLEGAL_ATTR_NAME = /[^a-zA-Z0-9_:\.\-]/gim;
  /**
   * parse input attributes and returns processed attributes
   *
   * @param {String} html e.g. `href="#" target="_blank"`
   * @param {Function} onAttr e.g. `function (name, value)`
   * @return {String}
   */

  function parseAttr(html, onAttr) {
    "user strict";

    var lastPos = 0;
    var retAttrs = [];
    var tmpName = false;
    var len = html.length;

    function addAttr(name, value) {
      name = util$1.trim(name);
      name = name.replace(REGEXP_ILLEGAL_ATTR_NAME, "").toLowerCase();
      if (name.length < 1) return;
      var ret = onAttr(name, value || "");
      if (ret) retAttrs.push(ret);
    } // 逐个分析字符


    for (var i = 0; i < len; i++) {
      var c = html.charAt(i);
      var v, j;

      if (tmpName === false && c === "=") {
        tmpName = html.slice(lastPos, i);
        lastPos = i + 1;
        continue;
      }

      if (tmpName !== false) {
        if (i === lastPos && (c === '"' || c === "'") && html.charAt(i - 1) === "=") {
          j = html.indexOf(c, i + 1);

          if (j === -1) {
            break;
          } else {
            v = util$1.trim(html.slice(lastPos + 1, j));
            addAttr(tmpName, v);
            tmpName = false;
            i = j;
            lastPos = i + 1;
            continue;
          }
        }
      }

      if (/\s|\n|\t/.test(c)) {
        html = html.replace(/\s|\n|\t/g, " ");

        if (tmpName === false) {
          j = findNextEqual(html, i);

          if (j === -1) {
            v = util$1.trim(html.slice(lastPos, i));
            addAttr(v);
            tmpName = false;
            lastPos = i + 1;
            continue;
          } else {
            i = j - 1;
            continue;
          }
        } else {
          j = findBeforeEqual(html, i - 1);

          if (j === -1) {
            v = util$1.trim(html.slice(lastPos, i));
            v = stripQuoteWrap(v);
            addAttr(tmpName, v);
            tmpName = false;
            lastPos = i + 1;
            continue;
          } else {
            continue;
          }
        }
      }
    }

    if (lastPos < html.length) {
      if (tmpName === false) {
        addAttr(html.slice(lastPos));
      } else {
        addAttr(tmpName, stripQuoteWrap(util$1.trim(html.slice(lastPos))));
      }
    }

    return util$1.trim(retAttrs.join(" "));
  }

  function findNextEqual(str, i) {
    for (; i < str.length; i++) {
      var c = str[i];
      if (c === " ") continue;
      if (c === "=") return i;
      return -1;
    }
  }

  function findBeforeEqual(str, i) {
    for (; i > 0; i--) {
      var c = str[i];
      if (c === " ") continue;
      if (c === "=") return i;
      return -1;
    }
  }

  function isQuoteWrapString(text) {
    if (text[0] === '"' && text[text.length - 1] === '"' || text[0] === "'" && text[text.length - 1] === "'") {
      return true;
    } else {
      return false;
    }
  }

  function stripQuoteWrap(text) {
    if (isQuoteWrapString(text)) {
      return text.substr(1, text.length - 2);
    } else {
      return text;
    }
  }

  var parseTag_1 = parseTag;
  var parseAttr_1 = parseAttr;
  var parser$1 = {
    parseTag: parseTag_1,
    parseAttr: parseAttr_1
  };

  /**
   * filter xss
   *
   * @author Zongmin Lei<leizongmin@gmail.com>
   */

  var FilterCSS$2 = lib.FilterCSS;
  var parseTag$1 = parser$1.parseTag;
  var parseAttr$1 = parser$1.parseAttr;
  /**
   * returns `true` if the input value is `undefined` or `null`
   *
   * @param {Object} obj
   * @return {Boolean}
   */

  function isNull$1(obj) {
    return obj === undefined || obj === null;
  }
  /**
   * get attributes for a tag
   *
   * @param {String} html
   * @return {Object}
   *   - {String} html
   *   - {Boolean} closing
   */


  function getAttrs(html) {
    var i = util$1.spaceIndex(html);

    if (i === -1) {
      return {
        html: "",
        closing: html[html.length - 2] === "/"
      };
    }

    html = util$1.trim(html.slice(i + 1, -1));
    var isClosing = html[html.length - 1] === "/";
    if (isClosing) html = util$1.trim(html.slice(0, -1));
    return {
      html: html,
      closing: isClosing
    };
  }
  /**
   * shallow copy
   *
   * @param {Object} obj
   * @return {Object}
   */


  function shallowCopyObject$1(obj) {
    var ret = {};

    for (var i in obj) {
      ret[i] = obj[i];
    }

    return ret;
  }
  /**
   * FilterXSS class
   *
   * @param {Object} options
   *        whiteList, onTag, onTagAttr, onIgnoreTag,
   *        onIgnoreTagAttr, safeAttrValue, escapeHtml
   *        stripIgnoreTagBody, allowCommentTag, stripBlankChar
   *        css{whiteList, onAttr, onIgnoreAttr} `css=false` means don't use `cssfilter`
   */


  function FilterXSS(options) {
    options = shallowCopyObject$1(options || {});

    if (options.stripIgnoreTag) {
      if (options.onIgnoreTag) {
        console.error('Notes: cannot use these two options "stripIgnoreTag" and "onIgnoreTag" at the same time');
      }

      options.onIgnoreTag = _default$1.onIgnoreTagStripAll;
    }

    options.whiteList = options.whiteList || _default$1.whiteList;
    options.onTag = options.onTag || _default$1.onTag;
    options.onTagAttr = options.onTagAttr || _default$1.onTagAttr;
    options.onIgnoreTag = options.onIgnoreTag || _default$1.onIgnoreTag;
    options.onIgnoreTagAttr = options.onIgnoreTagAttr || _default$1.onIgnoreTagAttr;
    options.safeAttrValue = options.safeAttrValue || _default$1.safeAttrValue;
    options.escapeHtml = options.escapeHtml || _default$1.escapeHtml;
    this.options = options;

    if (options.css === false) {
      this.cssFilter = false;
    } else {
      options.css = options.css || {};
      this.cssFilter = new FilterCSS$2(options.css);
    }
  }
  /**
   * start process and returns result
   *
   * @param {String} html
   * @return {String}
   */


  FilterXSS.prototype.process = function (html) {
    // compatible with the input
    html = html || "";
    html = html.toString();
    if (!html) return "";
    var me = this;
    var options = me.options;
    var whiteList = options.whiteList;
    var onTag = options.onTag;
    var onIgnoreTag = options.onIgnoreTag;
    var onTagAttr = options.onTagAttr;
    var onIgnoreTagAttr = options.onIgnoreTagAttr;
    var safeAttrValue = options.safeAttrValue;
    var escapeHtml = options.escapeHtml;
    var cssFilter = me.cssFilter; // remove invisible characters

    if (options.stripBlankChar) {
      html = _default$1.stripBlankChar(html);
    } // remove html comments


    if (!options.allowCommentTag) {
      html = _default$1.stripCommentTag(html);
    } // if enable stripIgnoreTagBody


    var stripIgnoreTagBody = false;

    if (options.stripIgnoreTagBody) {
      var stripIgnoreTagBody = _default$1.StripTagBody(options.stripIgnoreTagBody, onIgnoreTag);
      onIgnoreTag = stripIgnoreTagBody.onIgnoreTag;
    }

    var retHtml = parseTag$1(html, function (sourcePosition, position, tag, html, isClosing) {
      var info = {
        sourcePosition: sourcePosition,
        position: position,
        isClosing: isClosing,
        isWhite: whiteList.hasOwnProperty(tag)
      }; // call `onTag()`

      var ret = onTag(tag, html, info);
      if (!isNull$1(ret)) return ret;

      if (info.isWhite) {
        if (info.isClosing) {
          return "</" + tag + ">";
        }

        var attrs = getAttrs(html);
        var whiteAttrList = whiteList[tag];
        var attrsHtml = parseAttr$1(attrs.html, function (name, value) {
          // call `onTagAttr()`
          var isWhiteAttr = util$1.indexOf(whiteAttrList, name) !== -1;
          var ret = onTagAttr(tag, name, value, isWhiteAttr);
          if (!isNull$1(ret)) return ret;

          if (isWhiteAttr) {
            // call `safeAttrValue()`
            value = safeAttrValue(tag, name, value, cssFilter);

            if (value) {
              return name + '="' + value + '"';
            } else {
              return name;
            }
          } else {
            // call `onIgnoreTagAttr()`
            var ret = onIgnoreTagAttr(tag, name, value, isWhiteAttr);
            if (!isNull$1(ret)) return ret;
            return;
          }
        }); // build new tag html

        var html = "<" + tag;
        if (attrsHtml) html += " " + attrsHtml;
        if (attrs.closing) html += " /";
        html += ">";
        return html;
      } else {
        // call `onIgnoreTag()`
        var ret = onIgnoreTag(tag, html, info);
        if (!isNull$1(ret)) return ret;
        return escapeHtml(html);
      }
    }, escapeHtml); // if enable stripIgnoreTagBody

    if (stripIgnoreTagBody) {
      retHtml = stripIgnoreTagBody.remove(retHtml);
    }

    return retHtml;
  };

  var xss = FilterXSS;

  var lib$1 = createCommonjsModule(function (module, exports) {
    /**
     * xss
     *
     * @author Zongmin Lei<leizongmin@gmail.com>
     */

    /**
     * filter xss function
     *
     * @param {String} html
     * @param {Object} options { whiteList, onTag, onTagAttr, onIgnoreTag, onIgnoreTagAttr, safeAttrValue, escapeHtml }
     * @return {String}
     */
    function filterXSS(html, options) {
      var xss$1 = new xss(options);
      return xss$1.process(html);
    }

    exports = module.exports = filterXSS;
    exports.filterXSS = filterXSS;
    exports.FilterXSS = xss;

    for (var i in _default$1) {
      exports[i] = _default$1[i];
    }

    for (var i in parser$1) {
      exports[i] = parser$1[i];
    } // using `xss` on the browser, output `filterXSS` to the globals


    if (typeof window !== "undefined") {
      window.filterXSS = module.exports;
    } // using `xss` on the WebWorker, output `filterXSS` to the globals


    function isWorkerEnv() {
      return typeof self !== 'undefined' && typeof DedicatedWorkerGlobalScope !== 'undefined' && self instanceof DedicatedWorkerGlobalScope;
    }

    if (isWorkerEnv()) {
      self.filterXSS = module.exports;
    }
  });
  var lib_1$1 = lib$1.filterXSS;
  var lib_2 = lib$1.FilterXSS;

  /**
   * 判斷是否為陣列
   *
   * Unit Test: {@link https://github.com/yuda-lyu/wsemi/blob/master/test/isarr.test.js Github}
   * @memberOf wsemi
   * @param {*} v 輸入任意資料
   * @returns {Boolean} 回傳判斷布林值
   * @example
   * isarr([])
   * // => true
   *
   * isarr([{}])
   * // => true
   */
  function isarr(v) {
    var c = Object.prototype.toString.call(v);
    return c === '[object Array]';
  }

  /**
   * 清除xss攻擊語法
   *
   * Depend on: {@link https://jsxss.com/zh/index.html https://jsxss.com/zh/index.html}
   *
   * Unit Test: {@link https://github.com/yuda-lyu/wsemi/blob/master/test/clearXSS.test.js Github}
   * @memberOf wsemi
   * @param {Object|Array|String} obj 輸入資料
   * @returns {Object|Array|String} 輸出資料
   * @example
   * clearXSS(`><script>alert('XSS')</script>`)
   * // => `&gt;&lt;script&gt;alert('XSS')&lt;/script&gt;`
   *
   * clearXSS(`<img src="javascript:alert('XSS')">`)
   * // => `<img src>`
   */

  function clearXSS(obj) {
    //ftxss
    function ftxss(c) {
      return lib$1(c, {
        onIgnoreTagAttr: function onIgnoreTagAttr(tag, name, value, isWhiteAttr) {
          if (name === 'style') {
            return name + '="' + lib$1.escapeAttrValue(value) + '"';
          }
        }
      });
    } //scxss


    function scxss(o) {
      if (isarr(o) || isobj(o)) {
        each(o, function (v, k) {
          o[k] = scxss(v);
        });
        return o;
      } else if (isstr(o)) {
        return ftxss(o);
      } else {
        return o;
      }
    } //遍例所有屬性filterXSS


    var t = scxss(cloneDeep_1(obj));
    return t;
  }

  /**
   * 建立http API伺服器使用者(Node.js與Browser)端物件
   *
   * @param {Object} opt 輸入設定參數物件
   * @param {String} [opt.url='http://localhost:8080/api'] 輸入http API伺服器網址，預設為'http://localhost:8080/api'
   * @param {String} [opt.token='*'] 輸入使用者認證用token，預設為'*'
   * @param {Function} opt.error 輸入監聽error函數
   * @param {Function} opt.reconn 輸入監聽reconn函數
   * @returns {Promise} 回傳Promise，resolve為映射伺服器端可用函數之物件，各函數輸入皆為單一物件，各函數回傳皆為Promise，用resolve與reject處理回傳結果
   * @example
   *
   * import HtClient from 'w-comor-hapi/dist/ws-client-node.umd.js'
   *
   * //opt
   * let opt = {
   *     url: 'http://localhost:8080/api',
   *     token: '*',
   *         error: function(err) {
   *             consoloe.log('client nodejs: error:', err)
   *         },
   *         reconn: function() {
   *             consoloe.log('client nodejs: reconn')
   *         },
   * }
   *
   * //HtClient
   * new HtClient(opt)
   *     .then(function(wo) {
   *         console.log('client nodejs: funcs: ', wo)
   *
   *         function core(ps) {
   *             wo.add(ps)
   *                 .then(function(r) {
   *                     consoloe.log(`client nodejs: add(${JSON.stringify(ps)})=${r}`)
   *                 })
   *             wo.minu(ps)
   *                 .then(function(r) {
   *                     consoloe.log(`client nodejs: minu(${JSON.stringify(ps)})=${r}`)
   *                 })
   *         }
   *
   *         let i = 100
   *         setInterval(function() {
   *             i += 1
   *             core({
   *                 p1: i,
   *                 p2: 10,
   *             })
   *         }, 1000)
   *
   *     })
   *
   */

  function HtClient(opt) {
    var pm = genPm();
    var wo = {}; //回傳操作物件

    function core() {
      //default
      if (!opt.url) {
        opt.url = 'http://localhost:8080/api';
      }

      if (!opt.token) {
        opt.token = '*';
      } //aj


      function aj(data, mode) {
        var pmm = genPm(); //data to json string
        // if (mode !== 'upload file') {
        //     data = JSON.stringify(data)
        // }
        //clearXSS

        data = clearXSS(data); //s

        var s = {
          method: 'POST',
          url: opt.url,
          data: data // onUploadProgress: function(ev) {
          //     let p = ev.loaded
          //     let r = 0
          //     if (ev.lengthComputable) {
          //         r = (ev.loaded * 100) / ev.total
          //     }
          //     if (isfun(opt.onUploadProgress)) {
          //         opt.onUploadProgress(Math.floor(r), r, p, 'upload')
          //     }
          // },
          // onDownloadProgress: function (ev) {
          //     let p = ev.loaded
          //     let r = 0
          //     if (ispint(opt.downloadFileSize)) {
          //         r = (ev.loaded * 100) / (opt.downloadFileSize * 1024)
          //     }
          //     if (isfun(opt.onDownloadProgress)) {
          //         opt.onDownloadProgress(Math.floor(r), r, p, 'download')
          //     }
          // },
          //add Content-Type

        };

        if (mode === 'upload file') {
          s['headers'] = {
            'Content-Type': 'multipart/form-data'
          };
        } //add responseType


        if (mode === 'download file') {
          s['responseType'] = 'blob';
        } //axios


        axios(s).then(function (res) {
          //console.log('aj then', res, res.data.output)
          pmm.resolve(res.data.output);
        })["catch"](function (res) {
          //console.log('aj catch', res)
          var err = get_1(res, 'response.data');

          if (err) {
            res = err;
          } else {
            res = 'can not connection';
          }

          pmm.reject(res);
        });
        return pmm;
      } //execFunction


      function execFunction(func) {
        var input = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        //data
        var data = {
          token: opt.token,
          func: func,
          input: input //mode

        };
        var mode = '';

        if (get_1(input, 'mode')) {
          mode = input.mode;
        } //aj


        return aj(data, mode);
      } //getFuncs


      execFunction('getFuncs').then(function (data) {
        //get sys funcs
        if (get_1(data, 'sys') === 'sys' && haskey(data, 'funcs')) {
          //funcs
          var funcs = data['funcs']; //clear wo

          wo = {}; //bind funcs

          var _loop = function _loop(i) {
            //func
            var func = funcs[i]; //add func

            wo[func] = function (input) {
              return execFunction(func, input);
            };
          };

          for (var i = 0; i < funcs.length; i++) {
            _loop(i);
          } //resolve


          pm.resolve(wo);
        } else {
          var err = 'no funcs';

          if (isfun(opt.error)) {
            opt.error(err);
          }

          reconn(); //pm.reject(err) //不能reject否則無法reconn
        }
      })["catch"](function (err) {
        if (isfun(opt.error)) {
          opt.error(err);
        }

        reconn(); //pm.reject(err) //不能reject否則無法reconn
      });
    }

    function reconn() {
      setTimeout(function () {
        if (isfun(opt.reconn)) {
          opt.reconn();
        }

        core();
      }, 1000);
    } //core


    core();
    return pm;
  }

  return HtClient;

}));
//# sourceMappingURL=ht-client.umd.js.map
