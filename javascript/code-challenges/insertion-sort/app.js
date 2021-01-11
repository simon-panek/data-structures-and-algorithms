'use strict';

function insertionSort(givenArray){

  for (let i=1; i< givenArray.length; i++){

    let j = i-1;
    let temp = givenArray[i];
    //console.log('1) givenArray for loop: ', givenArray);
    
    while (j>=0 && temp<givenArray[j]){
      //console.log('2) givenArray while loop: ', givenArray);
      givenArray[j+1] = givenArray[j];
      j = j-1;
      //console.log('3) givenArray while loop2: ', givenArray);
    }

    givenArray[j+1] = temp;
  }
  return givenArray;
}

module.exports = insertionSort;

//given [8,5,7]

// i=1
// j=0
// temp=5
// givenArray[1]=8
// j=-1
// givenArray[0]=5

// i=2
// j=1
// temp=7
// givenArray[2]=8
// j=0
// givenArray[1]=7

// i=3
// j=2
// temp=7
// givenArray[2]=8
// j=0
// givenArray[1]=7

