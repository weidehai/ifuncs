import { isPureObject, isArray } from "../main";

export function dc(obj: unknown): unknown {
  let parent: Array<unknown> = [];
  function work(obj: unknown): unknown {
    let target: unknown;
    if (isPureObject(obj)) {
      target = {};
    } else if (isArray(obj)) {
      target = [];
    } else {
      return obj;
    }
    if (~parent.indexOf(obj)) {
      return obj;
    }
    parent.push(obj);
    for (let [key, value] of Object.entries(obj)) {
      (<Record<string | number | symbol, any>>target)[key] = work(value);
    }
    return target;
  }
  return work(obj)
}
