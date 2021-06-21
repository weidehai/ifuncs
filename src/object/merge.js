import { isNull, isUndefined } from "../check/typeCheck"

export function mergeOption(target,origin){
  for(let key of Object.keys(origin)){
    if((isUndefined(target[key]) || isNull(target[key])) && (!isUndefined(origin[key]) && !isNull(origin[key]))){
      target[key] = origin[key]
    }
  }
  return target
}
