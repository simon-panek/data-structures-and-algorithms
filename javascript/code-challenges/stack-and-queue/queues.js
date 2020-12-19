'use strict';

class Queue {
  constructor() {
    this.storage = new Array();
    this.top = null;
  }

  isEmpty(){
    return (this.top === null)? true : false;
  }

  peek(){
    if(!this.top) return false;

    return this.top;
  }

  enqueue(){
    this.storage.insert(value);
    this.top = value;
  }

  dequeue(){
    if(!this.top) return false;

    const value = this.storage.shift();
    this.top =  value.next;

    return value.value;
  }
}

module.exports = Queue;
