export function throttler(fn,delay){
  let previous = Date.now();
  return function(...rest){
    if(Date.now()-previous>delay)
      fn(...rest),previous = Date.now()
  }
}
