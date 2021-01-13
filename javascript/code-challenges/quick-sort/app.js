// 'use strict';

// function _quickSort (array, left, right){
//   let position = partition (array, left, right);
//   _quickSort(array, left, position -1);
//   _quickSort(array, position +1, right);
// }

// function partition(array, left, right){
//   let pivot = array[right];
//   let low = left -1;

//   for (i) { // What is this portion

//     low++;
//     swap(array, i, low);
//   }

//   swap(array, right, low +1);
//   return low + 1;
// }

// function swap (array, i, low) {
//   let temp = array[i];
//   array[i] = array[low];
//   array[low] = temp;
// }

// Attempted to write functional code above from the provided pseudo code, did not work
// Working code below based on example from Guru99: https://www.guru99.com/quicksort-in-javascript.html

'use strict';

function _quickSort (array, left = 0, right = array.length-1){
  let index;
  if(array.length > 1){
    index = partition(array, left, right);
    if(left < index -1) _quickSort(array, left, index-1);
    if(index < right) _quickSort(array, index, right);
  }
  return array;
}

function partition (array, left, right) {
  let pivot = array[Math.floor((right + left)/2)];
  let i = left;
  let j = right;
  while (i <= j){
    while (array[i] < pivot){
      i++;
    }
    while (array[j] > pivot){
      j--;
    }
    if(i <= j) {
      swap(array, i, j);
      i++;
      j--;
    }
  }
  return i;
}

function swap (array, leftIndex, rightIndex) {
  let temp = array[leftIndex];
  array[leftIndex] = array[rightIndex];
  array[rightIndex] = temp;
}

module.exports = _quickSort;

