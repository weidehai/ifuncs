import * as ifuncs from '../src/main'


test("arrayinsert",()=>{
  expect(ifuncs.arrayInsert(2,'w',[1,2,3,4])).toStrictEqual([1,2,'w',3,4])
})
