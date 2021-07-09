export function reliableFloatAdd(){
  let _agrs = arguments
  let maxTail = 0
  function getMaxScale():number{
    Array.prototype.map.call(_agrs,(value:number):void=>{
      let tail =  value.toString().split('.')[1]
      if(tail){
        maxTail = Math.max(tail.length,maxTail)
      }
    })
    return maxTail
  }
  function transform(value:number):number{
    function zeroGenerator(n:number):string{
      let str = ''
      if(n<0) return
      while(n){
        str += '0'
        n--
      }
      return str
    }
    let fraction = value.toString().split('.')[1]
    let fractionLen = 0
    if(fraction){
      fractionLen = fraction.length
    }
    return +(value.toString().replace('.','')+zeroGenerator(maxTail-fractionLen))
  }
  let scale = Math.pow(10,getMaxScale())
  return Array.prototype.reduce.call(arguments,(accumulate:number,value:number):number=>{
    return accumulate + transform(value)
  },0)/scale
}
