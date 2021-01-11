'use strict';

const insertionSort = require('./app.js');

describe ('Insertion Sort', () => {
  it('The insertion sort function should sort an array lowest to highest', ()=> {
    let array = [5,8,2,89,45,17];
    expect(insertionSort(array)).toEqual([2,5,8,17,45,89]);
  })

  it('The insertion sort function should not change an array that is already in order from lowest to highest', ()=> {
    let array = [2,5,8,17,45,89];
    expect(insertionSort(array)).toEqual([2,5,8,17,45,89]);
  })

  it('The insertion sort function should finish sorting an array lowest to highest that is already partially sorted', ()=> {
    let array = [2,5,8,45,17,89];
    expect(insertionSort(array)).toEqual([2,5,8,17,45,89]);
  })

  it('The insertion sort function should sort an array lowest to highest that contains duplicate values', ()=> {
    let array = [5,8,45,2,89,45,17];
    expect(insertionSort(array)).toEqual([2,5,8,17,45,45,89]);
  })
})