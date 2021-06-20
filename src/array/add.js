export function arrayInsert(index,value,arr){
  let right = arr.splice(index)
  right.unshift(value)
  return arr.concat(right)
}
