function reliableFloatAdd(){
  let _agrs = arguments
  let maxTail = 0
  let maxLen = 0
  function getMaxScale(){
    Array.prototype.map.call(_agrs,(value)=>{
      maxLen = Math.max(maxLen,value.toString().replace('.','').length)
      let tail =  value.toString().split('.')[1]
      if(tail){
        maxTail = Math.max(tail.length,maxTail)
      }
    })
    return maxTail
  }
  function transform(value){
    return +value.toString().replace('.','').padEnd(maxLen,0)
  }
  let scale = Math.pow(10,getMaxScale())
  return Array.prototype.reduce.call(arguments,(accumulate,value)=>{
    return accumulate + transform(value)
  },0)/scale
}
