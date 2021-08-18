export function arrayInsertBefore(index:number,value:any,arr:any[]){
  arr.splice(index,0,value)
  return arr
}
