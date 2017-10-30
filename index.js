// Code your solution in this file!
function distanceFromHqInBlocks(location){
  return Math.abs(location - 42)
}


function distanceFromHqInFeet(location){
  blocks = distanceFromHqInBlocks(location)
  return 264 * blocks
}

function distanceTravelledInFeet(start, end) {
  blocks = Math.abs(start - end)
  return 264 * blocks
}


function calculatesFarePrice(start, end){
  feet = distanceTravelledInFeet(start, end)
  if (feet < 400){ return 0 }
  else if (feet > 400 && feet < 2000) {
    return feet * 0.02
  }
  else if (feet > 2000 && feet < 2500) {
    return 25
  }
  else {
    return 'cannot travel that far'
  }
}
