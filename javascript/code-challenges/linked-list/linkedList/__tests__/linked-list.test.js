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
      // list.insert('two');
      // list.insert('three');
      // list.insert('easterEgg');
      // list.insert('five');
      let test = list.toString();
      expect(test).toEqual('{ one } -> NULL');
    })   

});
