import { isPureObject } from "../check/typeCheck";

export function mergeOption(target:Object, origin:Object):Object {
  if (!isPureObject(target) || !isPureObject(origin)) return {};
  return (target = Object.assign(origin, target));
}
