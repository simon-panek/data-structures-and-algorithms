'use strict';

const Node = require ('./node');  //brings in node class

class LinkedList { //creates LinkedList class
  constructor () {
    this.head = null; //initializes this.head to null for each new instance 
  }

  insert(value) { //creates a method for inserting a new node at the beginning of the list
    const node = new Node(value); //instantiates a new Node class instance
    node.next = this.head; //assign current head to new node next value
    this.head = node; //reassigns head to the new node
  }

  includes(searchValue) { //creates a method for searching the linked list for a particular node value
    let currentNode = this.head; //initialize a variable set to the current head
    let result;  //declares variable to hold the output
    while(currentNode.value !== searchValue){ //loops through linked list until node value equals search value or the next points to null
      currentNode = currentNode.next;
      if(currentNode.next === null){ //if next points to null and search value has not been found then return false
      return result = false;
      } 
    }
    if (currentNode.value === searchValue) { //if node value equals search value then return true
      return result = true;
    }
    return result; //return output
  }

  toString() {
    let currentNode = this.head; //initialize a variable set to the current head
    let outPutString = [];
    while(currentNode !== null){ //loop through linked list until next points to null
      outPutString.push(`{ ${currentNode.value} }`); //push current value into output array
      currentNode = currentNode.next; //increment currentNode
    }
    outPutString.push('NULL'); //push in Null at the tail of the output array
    
    return outPutString.join(' -> '); //join the array using the -> delimiter and return output
  }

  //Code Challenge Day 06 Below

  append(newValue) {
    const newNode = new Node(newValue);
    let currentNode = this.head;

    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }
    currentNode.next = newNode;
    newNode.next = null;
  }

  insertBefore(givenValue, newValue) {
    if(this.head === null) return false;

    const newNode = new Node(newValue);
    let currentNode = this.head;

    if(currentNode.value === givenValue) {
      newNode.next = currentNode;
      newNode = this.head;
    }

    let nextNode = currentNode.next;
    while (nextNode.value !== givenValue) {
      currentNode = currentNode.next;
      nextNode = nextNode.next;
    }
    currentNode.next = newNode;
    newNode.next = nextNode;
  }

  insertAfter(givenValue, newValue) {
    if(this.head === null) return false;
    const newNode = new Node(newValue);
    let currentNode = this.head;
    let nextNode = currentNode.next;
    while(currentNode.value !== givenValue) {
      currentNode = currentNode.next;
      nextNode = nextNode.next;
    }
    currentNode.next = newNode;
    newNode.next = nextNode;
  }

  kthFromEnd(k) {
    let nodeValue = [];
    let currentNode = this.head;

    if (k < 0) return false;

    while(currentNode.next !== null){
      nodeValue.unshift(currentNode.value);
      currentNode = currentNode.next;
    }
    nodeValue.unshift(currentNode.value);

    if(k>nodeValue.length - 1) return false;

    return nodeValue[k];
  }

}

module.exports = LinkedList;
