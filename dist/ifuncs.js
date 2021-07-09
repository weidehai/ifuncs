(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ifuncs = {}));
}(this, (function (exports) { 'use strict';

  function arrayInsert(index, value, arr) {
      var right = arr.splice(index);
      right.unshift(value);
      return arr.concat(right);
  }

  function isFunction(fn) {
      return typeof fn === 'function';
  }
  function isUndefined(v) {
      return typeof v === 'undefined';
  }
  function isNull(v) {
      return v === null;
  }
  function isNumber(v) {
      return typeof v === 'number';
  }
  function isPureObject(v) {
      return Object.prototype.toString.call(v) === "[object Object]";
  }

  function throttler(fn, delay) {
      var previous = Date.now();
      return function () {
          var rest = [];
          for (var _i = 0; _i < arguments.length; _i++) {
              rest[_i] = arguments[_i];
          }
          if (Date.now() - previous > delay)
              fn.apply(void 0, rest), previous = Date.now();
      };
  }

  function trimAllWhiteSpace(string) {
      return string.replace(/\s+/g, "");
  }

  function mergeOption(target, origin) {
      if (!isPureObject(target) || !isPureObject(origin))
          return {};
      return (target = Object.assign(origin, target));
  }

  function arcTodeg(arc) {
      return 180 * arc / Math.PI;
  }
  function degToarc(deg) {
      return Math.PI * deg / 180;
  }

  function reliableFloatAdd() {
      var _agrs = arguments;
      var maxTail = 0;
      function getMaxScale() {
          Array.prototype.map.call(_agrs, function (value) {
              var tail = value.toString().split('.')[1];
              if (tail) {
                  maxTail = Math.max(tail.length, maxTail);
              }
          });
          return maxTail;
      }
      function transform(value) {
          function zeroGenerator(n) {
              var str = '';
              if (n < 0)
                  return;
              while (n) {
                  str += '0';
                  n--;
              }
              return str;
          }
          var fraction = value.toString().split('.')[1];
          var fractionLen = 0;
          if (fraction) {
              fractionLen = fraction.length;
          }
          return +(value.toString().replace('.', '') + zeroGenerator(maxTail - fractionLen));
      }
      var scale = Math.pow(10, getMaxScale());
      return Array.prototype.reduce.call(arguments, function (accumulate, value) {
          return accumulate + transform(value);
      }, 0) / scale;
  }

  function appendHTML(ele, html) {
      var divTemp = document.createElement("div");
      var frag = document.createDocumentFragment();
      var nodes = null;
      divTemp.innerHTML = html;
      nodes = divTemp.childNodes;
      nodes.forEach(function (node) {
          frag.appendChild(node.cloneNode(true));
      });
      ele.appendChild(frag);
  }

  exports.appendHTML = appendHTML;
  exports.arcTodeg = arcTodeg;
  exports.arrayInsert = arrayInsert;
  exports.degToarc = degToarc;
  exports.isFunction = isFunction;
  exports.isNull = isNull;
  exports.isNumber = isNumber;
  exports.isPureObject = isPureObject;
  exports.isUndefined = isUndefined;
  exports.mergeOption = mergeOption;
  exports.reliableFloatAdd = reliableFloatAdd;
  exports.throttler = throttler;
  exports.trimAllWhiteSpace = trimAllWhiteSpace;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
