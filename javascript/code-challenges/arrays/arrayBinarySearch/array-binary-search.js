'use strict';


function binarySearch (inputArray, searchValue) {

  let loopIndex = 0;
  let foundIndex = -2;
  let splitIndex = 0;
  let initialArrayLength = inputArray.length;
  let arrayLength = inputArray.length;
  
  if (!inputArray) {
    let foundIndex = -1
  };
  
  function findNewSplitIndex (inputArrayLength, oldSplitIndex) {
    if (inputArrayLength % 2 === 1) { 
      splitIndex = (inputArrayLength / 2 ) + 0.5;
    } else { 
      splitIndex = inputArray / 2;
    }
    splitIndex += oldSplitIndex;
    loopSplitFunction(oldSplitIndex, splitIndex);
  }

  function loopSplitFunction (loopIndex, splitIndex) {
    for ( let i = loopIndex; i < splitIndex; i ++) {
      if ( inputArray[i] === searchValue ) {
        foundIndex = i;
      } else {
        arrayLength = initialArrayLength - splitIndex;
        if ( arrayLength = 1 ) {
          return foundIndex = initialArrayLength;
        }
        loopIndex = splitIndex;
      }
    }
  }

  if ( foundIndex > -1 ) {
    return foundIndex;
  }  else if ( initialArrayLength = loopIndex ) {
    return foundIndex = -1;
  } else {
    findNewSplitIndex(arrayLength, loopIndex);
  }

}

binarySearch ([1,2,3,4,5,6,7,8,9,10], 7);