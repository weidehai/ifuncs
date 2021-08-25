export function  getRandomInt(leftBorder:number,rightBorder:number):number {
  return Math.floor(Math.random()*rightBorder)+leftBorder
}

export function  getRandomFloat(leftBorder:number,rightBorder:number):number {
  return Math.random()*(rightBorder-1)+leftBorder
}
