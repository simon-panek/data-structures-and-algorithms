'use strict';

class Node { //create node class

  constructor (value=null, leftChild=null, rightChild=null) { //define default values
    this.value = value; 
    this.leftChild = leftChild;
    this.rightChild = rightChild;
  }
}

class BinaryTree { //create binary tree class

  constructor (value=null) { //define default values
    this.root = value;
  }

  add(value){
    if(typeof value !== 'number'){
      return null;
    }
    if(!this.root){
      this.root = new Node(value);
      return;
    }

    let _insert = (node) => {
      if (value < node.value){
        if(node.leftChild === null){
          node.leftChild = new Node(value);
          return;
        } else if (node.leftChild !== null){
          return _insert(node.leftChild);
        }
      } else if(value >= node.value){
        if(node.rightChild === null){
          node.rightChild = new Node(value);
          return;
        } else if (node.rightChild !== null) {
            return _insert(node.rightChild);
        }
      }
    }
    _insert(this.root);
  }

  //depth first search
  preOrder () { //create preOrder method
    let orderedArray = []; //declare empty array for output
    function _recursionPre(node) { //create recursive function to traverse tree
      orderedArray.push(node.value); //push the current root value into the output array
      if(node.leftChild) {
        _recursionPre(node.leftChild); //re call the function for the left child
      }
      if(node.rightChild){
        _recursionPre(node.rightChild); //re call the function for the right child
      }
    }
    _recursionPre(this.root); //invoke the recursive function to start
    return orderedArray; //return the output array
  }

  inOrder () { //create preOrder method
    let orderedArray = []; //declare empty array for output
    function _recursionPre(node) { //create recursive function to traverse tree
      if(node.leftChild) {
        _recursionPre(node.leftChild); //re call the function for the left child
      }
          orderedArray.push(node.value); //push the current root value into the output array
      if(node.rightChild){
        _recursionPre(node.rightChild); //re call the function for the right child
      }
    }
    _recursionPre(this.root); //invoke the recursive function to start
    return orderedArray; //return the output array
  }

  postOrder () { //create preOrder method
    let orderedArray = []; //declare empty array for output
    function _recursionPre(node) { //create recursive function to traverse tree
      if(node.leftChild) {
        _recursionPre(node.leftChild); //re call the function for the left child
      }
      if(node.rightChild){
        _recursionPre(node.rightChild); //re call the function for the right child
      }
          orderedArray.push(node.value); //push the current root value into the output array
    }
    _recursionPre(this.root); //invoke the recursive function to start
    return orderedArray; //return the output array
  }

  findMaxValue(){
    if(!this.root) return null;
    let highValue = this.root.value; //declare empty array for output
    function _recursionPre(node) { //create recursive function to traverse tree
      if(highValue < node.value){ //check if node is greater than previous node
        highValue = node.value; //if true then assign current node.value to highValue
      }
      if(node.leftChild) {
        _recursionPre(node.leftChild); //re call the function for the left child
      }
      if(node.rightChild){
        _recursionPre(node.rightChild); //re call the function for the right child
      }
    }
    _recursionPre(this.root); //invoke the recursive function to start
    return highValue; //return the output array
  }

}

class BinarySearchTree extends BinaryTree{ //create a binary search tree function

  constructor (root=null) { //define the default values
    super();
    this.root = root;
  }

  contains(rootNode, searchValue) { //create a method that searches for a value and returns a boolean if it exists
    let booleanResult = false; //declare a boolean output variable
    function _recursionSearch (rootNode, searchValue) { //create a recursive function to traverse the tree
      if(!rootNode) { //if root node does not exist, return false
        return;
      } else if (rootNode.value === searchValue) { //if rootNode value is the search value, return true
        return booleanResult = true;
      } else if(rootNode.value < searchValue) { //if rootNode value is less than the searchValue then re call function with rootNode.right and searchValue
        return _recursionSearch(rootNode.right, searchValue);
      }
      return _recursionSearch(rootNode.left, searchValue); //else re call function with rootNode.left and searchValue
    }
    _recursionSearch(rootNode, searchValue); //invoke the recursive function to start
    return booleanResult; //return the boolean
  }
}

module.exports = {Node, BinaryTree, BinarySearchTree};