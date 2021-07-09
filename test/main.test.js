const ifuncs = require('../src/main')

test("arrayinsert",()=>{
  expect(ifuncs.arrayInsert(2,'w',[1,2,3,4])).toStrictEqual([1,2,'w',3,4])
})


test("mergeOption",()=>{
  expect(ifuncs.mergeOption({name:"123",age:"456"},{name:undefined,age:'789'})).toEqual({name:'123',age:'456'})
})
test("mergeOption",()=>{
  expect(ifuncs.mergeOption({name:"123",age:undefined},{name:undefined,age:'789'})).toStrictEqual({name:'123',age:undefined})
})
test("mergeOption",()=>{
  expect(ifuncs.mergeOption({name:"123",age:undefined},{name:undefined,age:null})).toStrictEqual({name:'123',age:undefined})
})



test("isNull",()=>{
  expect(ifuncs.isNull(null)).toBe(true)
})
test("isUndefined",()=>{
  expect(ifuncs.isUndefined(undefined)).toBe(true)
})
test("isFunction",()=>{
  expect(ifuncs.isFunction(function(){})).toBe(true)
})


//1 弧度=57.29578 度
test("arcTodeg",()=>{
  expect(Math.floor(ifuncs.arcTodeg(3))).toBe(57*3)
})

//1 度=0.017453293 弧度
test("degToarc",()=>{
  expect(ifuncs.degToarc(1).toFixed(9)).toBe("0.017453293")
})



test("reliableFloatAdd",()=>{
  expect(ifuncs.reliableFloatAdd(1,1)).toBe(2)
})



test("trimAllWhiteSpace",()=>{
  expect(ifuncs.trimAllWhiteSpace("   123  ")).toBe('123')
})




