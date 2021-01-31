'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  add(value) {
    let node = new Node(value)
    if(!this.head){
      this.head = node;
      return;
    }
    let current = this.head;
    while(current.next){
      current = current.next;
      // current.next = node;
    }
    current.next=node;
    node.next = null;
  }
}

class HashMap {
  constructor(size) {  //when instantiating a new HashMap pass in the size ex: new HashMap(24)
    this.map = new Array(size);
    this.size = size;
  }

  hash(key) {
    return key.split('').reduce((acc, value) => {
      return acc + value.charCodeAt(0);
    }, 0) * 199 % this.size;
  }

  set(key, value) {
    const hash = this.hash(key);
    const entry = {[key]: value};
    if(! this.map[hash] ){
      this.map[hash] = new LinkedList();
    }
    this.map[hash].add(entry);
  }

  get(key) {
    if(!this.contains(key)) return null;

    let index = this.hash(key);
    let current = this.map[index].head;

    while(current){
      let keyOfObject = Object.keys(current.value);
      let valueOfObject = Object.values(current.value);
      if(keyOfObject[0] === key){
        return valueOfObject[0];
      }
      current = current.next;
    }
  }

  contains (key) {
    if(!this.map) return false;
    let index = this.hash(key);
    if(!this.map[index]) return false;
    let answer;
    let current = this.map[index].head;
    while(current){
      let keyOfObject = Object.keys(current.value);
      if(keyOfObject[0] === key){
        return answer = true;
      } 
      if(!current.next) {
        return answer = false;
      }
      current = current.next;
    }
    // console.log({answer});
    return answer;
  }
}

module.exports = HashMap;