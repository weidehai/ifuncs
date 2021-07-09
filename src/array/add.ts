export function arrayInsert(index:number,value:any,arr:any[]){
  let right = arr.splice(index)
  right.unshift(value)
  return arr.concat(right)
}
