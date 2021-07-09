export function isFunction(fn:any):boolean{
  return typeof fn === 'function'
}

export function isUndefined(v:any):boolean{
  return typeof v === 'undefined'
}

export function isNull(v:any):boolean{
  return v === null
}

export function isNumber(v:any):boolean{
  return typeof v === 'number'
}

export function isPureObject(v:any):boolean{
  return Object.prototype.toString.call(v) === "[object Object]"
}
