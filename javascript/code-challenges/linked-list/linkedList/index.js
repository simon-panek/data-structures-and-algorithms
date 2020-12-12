'use strict';

const Node = require ('./node');  //brings in node class

class LinkedList { //creates LinkedList class
  constructor () {
    this.head = null; //initializes this.head to null for each new instance 
  }

  insert(value) { //creates a method for inserting a new node at the beginning of the list
    const node = new Node(value); //instantiates a new Node class instance
    this.head = node; //reassigns head to the new node
  }

  includes(searchValue) { //creates a method for searching the linked list for a particular node value
    let currentNode = this.head; //initialize a variable set to the current head
    let result;  //declares variable to hold the output
    while(currentNode.value !== searchValue){ //loops through linked list until node value equals search value or the next points to null
      currentNode = currentNode.next;
      if(currentNode.next === null){ //if next points to null and search value has not been found then return false
      return result = false;
      } else {
        return;
      }
    }
    if (currentNode.value === searchValue) { //if node value equals search value then return true
      return result = true;
    }
    return result; //return output
  }

  toString() {
    let currentNode = this.head; //initialize a variable set to the current head
    let outPutString =''; //initialize empty string variable to hold the output
    while(currentNode.next !== null){ //loop through linked list until next points to null
      outPutString = `${outPutString} -> { ${currentNode.value} }`; //concatenate string output
    }
    outPutString = `${outPutString} -> NULL`; //concatenate null to the end of the output string
    return outPutString; //return output
  }

}

module.exports = LinkedList;
