export function throttler(fn:Function,delay:number):Function{
  let previous = Date.now();
  return function(...rest:any[]){
    if(Date.now()-previous>delay)
      fn(...rest),previous = Date.now()
  }
}
