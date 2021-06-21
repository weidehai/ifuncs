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

  function isUndefined(v){
    return typeof v === 'undefined'
  }

  function isNull(v){
    return v === null
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

  function mergeOption(target,origin){
    for(let key of Object.keys(origin)){
      if((isUndefined(target[key]) || isNull(target[key])) && (!isUndefined(origin[key]) && !isNull(origin[key]))){
        target[key] = origin[key];
      }
    }
    return target
  }

  function arcTodeg(arc){
    return 180*arc/Math.PI
  }


  function degToarc(deg){
    return Math.PI*deg/180
  }

  function reliableFloatAdd(){
    let _agrs = arguments;
    let maxTail = 0;
    function getMaxScale(){
      Array.prototype.map.call(_agrs,(value)=>{
        let tail =  value.toString().split('.')[1];
        if(tail){
          maxTail = Math.max(tail.length,maxTail);
        }
      });
      return maxTail
    }
    function transform(value){
      function zeroGenerator(n){
        let str = '';
        if(n<0) return
        while(n){
          str += '0';
          n--;
        }
        return str
      }
      let fraction = value.toString().split('.')[1];
      let fractionLen = 0;
      if(fraction){
        fractionLen = fraction.length;
      }
      return +(value.toString().replace('.','')+zeroGenerator(maxTail-fractionLen))
    }
    let scale = Math.pow(10,getMaxScale());
    return Array.prototype.reduce.call(arguments,(accumulate,value)=>{
      return accumulate + transform(value)
    },0)/scale
  }

  exports.arcTodeg = arcTodeg;
  exports.arrayInsert = arrayInsert;
  exports.degToarc = degToarc;
  exports.isFunction = isFunction;
  exports.isNull = isNull;
  exports.isUndefined = isUndefined;
  exports.mergeOption = mergeOption;
  exports.reliableFloatAdd = reliableFloatAdd;
  exports.throttler = throttler;
  exports.trimAllWhiteSpace = trimAllWhiteSpace;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
