'use strict';

function insertShiftArray (givenArray, givenValue) {

  let array = givenArray;
  let value = givenValue;
  let outputArray = [];
  let midpoint;
  if(!(array.length % 2)){
    midPoint = array.length / 2;
  } else {
    midPoint = (array.length / 2) + 0.5;
  }
  for (i = 0; i <= array.length; i++){
    if (i < midPoint) { outputArray[ i ] = array [ i ];};
    if (i === midPoint) { outputArray[ i ] = value;};
    if (i > midPoint) { outputArray[ i ] = array [ i - 1 ];};
  }
 return outputArray;
}

insertShiftArray([1,'dog',3,'',5,6,7,8], 'airplane');