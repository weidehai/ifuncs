(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ifuncs = {}));
}(this, (function (exports) { 'use strict';

  function arrayInsert(index,value,arr){
    let right = arr.splice(index);
    right.unshift(value);
    return arr.concat(right)
  }

  function isFunction(fn){
    return typeof fn === 'function'
  }

  function throttler(fn,delay){
    let previous = Date.now();
    return function(...rest){
      if(Date.now()-previous>delay)
        fn(...rest),previous = Date.now();
    }
  }

  function trimAllWhiteSpace(string){
    return string.replace(/\s+/g,"")
  }

  exports.arrayInsert = arrayInsert;
  exports.isFunction = isFunction;
  exports.throttler = throttler;
  exports.trimAllWhiteSpace = trimAllWhiteSpace;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
