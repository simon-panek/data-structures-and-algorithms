'use strict';

function _mergeSort (array){

  console.log('starting array ', array);

  if(array.length <=1) return;

  let n = array.length;

  if (n>1){
    let mid = Math.ceil(n/2);
    let left = array.slice(0,mid);
    let right = array.slice(mid, n);
    console.log({left});
    console.log({right});

    _mergeSort(left);
    _mergeSort(right);
    merge(left, right, array)
    // merge(left, right)
  }

  return array;
}

function merge (left, right, array) {
// function merge (left, right) {
  let i = 0;
  let j = 0;
  let k = 0;
  // let k = [];
  // let array = [];

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]){
      array[k] = left[i];
      i++;
    } else {
      array[k] = right[j];
      j++;
    }
    k++;
  }

  if (i === left.length){
    array.concat(left.slice[i])
  } else {
    array.concat(right.slice[j])
  }

  console.log({array});

  return array;

}

module.exports = _mergeSort;