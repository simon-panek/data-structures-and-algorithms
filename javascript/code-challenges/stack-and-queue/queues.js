'use strict';

//const LinkedList = require ('./linkedList.js');
const Node = require('./node.js');

class Queue {
  constructor() {
    this.storage = null;
    // this.end = null;
    this.front = null;
   
  }

  isEmpty(){
    return (this.front)? false : true;
  }

  peek(){
    if(!this.front) return false;

    return this.front;
  }

  enqueue(value){
  //  this.storage.append(value);
    // this.top = 
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

  dequeue(){
    if(!this.front) return false;

    const value = this.front.value;
    this.front =  value.next;

    return value;
  }
}

module.exports = Queue;
