'use strict';

const Node = require('../node.js');

class AnimalQueue {
  constructor() {
    this.storage = null;
    this.front = null;
   
  }
  enqueue(value){
    let newNode = new Node (value);
    let currentNode = this.front;
    if(!currentNode) {
      this.front = newNode;
    } else {
      while (currentNode.next){
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
     }
  }

  dequeue(pref){
    if(!this.front) return null;
    let current = this.front;
    if(current.value === pref) {
      // const value = this.front;
      this.front =  current.next;
      return current.value;
    }
console.log('current', current, 'current.next',  current.next);
    let tempPref;
    while (current.next.value !== pref) {
      console.log('current in loop', current);
      current = current.next;
    }
    tempPref = current.next;
    current.next = tempPref.next; 
                 
    return tempPref.value;
  }
}

module.exports = AnimalQueue;