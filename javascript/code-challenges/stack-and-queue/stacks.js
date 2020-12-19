'use strict';

const LinkedList = require ('./linkedList.js');

class Stack {
  constructor() {
    this.storage = new LinkedList ();
    this.top = null;
  }

  isEmpty(){
    return (this.top === null)? true : false;
  }

  peek(){
    if(!this.top) return false;

    return this.top;
  }

  push(value){
    this.storage.insert(value);
    this.top = value;
  }

  pop(){
    if(!this.top) return false;

    const value = this.storage.shift();
    this.top =  value.next;

    return value.value;

  }
}

module.exports = Stack;
