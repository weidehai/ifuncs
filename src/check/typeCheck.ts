export function isFunction<T>(fn: T): boolean {
  return typeof fn === "function";
}

export function isUndefined<T>(v: T): boolean {
  return typeof v === "undefined";
}

export function isNumber<T>(v: T): boolean {
  return typeof v === "number";
}

export function isString<T>(v: T): boolean {
  return typeof v === "string";
}

export function isNull<T>(v: T): boolean {
  return v === null;
}

export function isPureObject<T>(v: T): boolean {
  return Object.prototype.toString.call(v) === "[object Object]";
}

export function isArray<T>(v: T): boolean {
  return Object.prototype.toString.call(v) === "[object Array]";
}
