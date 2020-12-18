'use strict';

// Require our linked list implementation
const LinkedList = require('../index');

describe('Linked List', () => {
  it('Can successfully instantiate an empty linked list', () => {
    const list = new LinkedList();
    expect(list.head).toEqual(null);
  });

  it('Should properly insert into the linked list', () => {
    const list = new LinkedList();
    list.insert('test');
    expect(list.head.value).toEqual('test');
  })

  it('Should properly point the head to the first node in the list', () => {
    const list = new LinkedList();
    list.insert('one');
    list.insert('two');
    list.insert('three');
    expect(list.head.value).toEqual('three');
  })

  it('Should properly insert multiple nodes into the list', () => {
    const list = new LinkedList();
    list.insert('one');
    list.insert('two');
    list.insert('three');
    expect(list.head.value).toEqual('three');
    let nextNode = list.head.next;
    expect(nextNode.value).toEqual('two');
    nextNode = nextNode.next;
    expect(nextNode.value).toEqual('one');
  })

  it('Should return true when a given value in the list exists', () => {
    const list = new LinkedList();
    list.insert('one');
    list.insert('two');
    list.insert('three');
    list.insert('easterEgg');
    list.insert('five');
    expect(list.includes('easterEgg')).toBeTruthy();
  })

  it('Should return true when a given value in the list exists', () => {
    const list = new LinkedList();
    list.insert('one');
    list.insert('two');
    list.insert('three');
    list.insert('easterEgg');
    list.insert('five');
    expect(list.includes('lostDog')).toBe(false);
  }) 

  it('Should return a string of all of the node values', () => {
      const list = new LinkedList();
      list.insert('one');
      list.insert('two');
      list.insert('three');
      list.insert('easterEgg');
      list.insert('five');
      let test = list.toString();
      expect(test).toEqual('{ five } -> { easterEgg } -> { three } -> { two } -> { one } -> NULL');
    })   

  //Code Challenge Day 06 Below//////////////////////////

  it('Should add a node at the end of the list', () => {
    const list = new LinkedList();
      list.insert('one');
      list.insert('two');
      list.insert('three');
      list.append('test')
      list.insert('four');
      list.insert('five');
      expect(list.toString()).toEqual('{ five } -> { four } -> { three } -> { two } -> { one } -> { test } -> NULL');
  })

  it('Should add a node to the list before the given value', () => {
    const list = new LinkedList();
      list.insert('one');
      list.insert('two');
      list.insert('three');
      list.insert('four');
      list.insert('five');
      list.insertBefore('four', 'newValue')
      expect(list.head.next.value).toEqual('newValue');
  })

  it('Should add a node to the list after the given value', () => {
    const list = new LinkedList();
      list.insert('one');
      list.insert('two');
      list.insert('three');
      list.insert('four');
      list.insert('five');
      list.insertAfter('four', 'newValue')
      expect(list.head.next.next.value).toEqual('newValue');
  })

  //Code Challenge Day 7 kthFromEnd Below/////////////////////////

  it('Should return false where the given value is greater than the length of the list', () => {
    const list = new LinkedList();
      list.insert('one');
      list.insert('two');
      list.insert('three');
      list.insert('four');
      list.insert('five');
      expect(list.kthFromEnd(7)).toEqual(false);
  })

  it('Should return the head.value if the given position is equal to the length of the list', () => {
    const list = new LinkedList();
      list.insert('one');
      list.insert('two');
      list.insert('three');
      list.insert('four');
      list.insert('five');
      expect(list.kthFromEnd(4)).toEqual('five');
  })

  it('Should return false if given value is negative', () => {
    const list = new LinkedList();
      list.insert('one');
      list.insert('two');
      list.insert('three');
      list.insert('four');
      list.insert('five');
      expect(list.kthFromEnd(-3)).toEqual(false);
  })

  it('Should return the value of the head node if the list is only one node long and k = 0', () => {
    const list = new LinkedList();
      list.insert('one');
      expect(list.kthFromEnd(0)).toEqual('one');
  })

  it('Should return the value of the node at a given position', () => {
    const list = new LinkedList();
      list.insert('one');
      list.insert('two');
      list.insert('three');
      list.insert('four');
      list.insert('five');
      expect(list.kthFromEnd(3)).toEqual('four');
  })

  //Code Challenge Day 8 llZip Below/////////////////////////

  // it('Should return a list that is a zipped composite of two given lists', () => {
  //   const listOne = new LinkedList();
  //     listOne.insert('one');
  //     listOne.insert('two');
  //     listOne.insert('three');
  //   const listTwo = new LinkedList();
  //     listTwo.insert('1');
  //     listTwo.insert('2');
  //     listTwo.insert('3');
  //     expect(listOne.toString(llZip(listOne, listTwo))).toEqual('{ three } -> { 3 } -> { two } -> { 2 } -> { one } -> { 1 } -> NULL');
  // })

  // it('Should return false if both lists are empty', () => {
  //   const listOne = new LinkedList();
  //   const listTwo = new LinkedList();
  //     expect(listOne.toString(llZip(listOne, listTwo))).toEqual(false);
  // })

  // it('Should return a list that is a zipped composite of two given lists even if they differ in length', () => {
  //   const listOne = new LinkedList();
  //     listOne.insert('one');
  //     listOne.insert('two');
  //     listOne.insert('three');
  //   const listTwo = new LinkedList();
  //     listTwo.insert('1');
  //     expect(listOne.toString(llZip(listOne, listTwo))).toEqual('{ three } -> { 1 } -> { two } -> { one } -> NULL');
  // })

});
