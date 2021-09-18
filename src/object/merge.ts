import { isPureObject } from "../check/typeCheck";


export function mergeOption(target: Option, origin: Option): Object {
  if (!isPureObject(target) || !isPureObject(origin)) return {};
  Object.keys(origin).forEach((key) => {
    //只有target上没有的属性才从origin上复制过去，如果有的话，无论是undefine，null都保留原值
    if (target.hasOwnProperty(key)) return;
    target[key] = origin[key];
  });
  return target;
}
