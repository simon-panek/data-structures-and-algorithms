'use strict';

class Node { //create node class

  constructor (value=null, leftChild=null, rightChild=null) { //define default values
    this.value = value; 
    this.leftChild = leftChild;
    this.rightChild = rightChild;
  }
}

class BinaryTree { //create binary tree class

  constructor (rootValue=null) { //define default values
    //this.root = new Node(rootValue);
    this.root = rootValue;
  }

  // add(value){
  //   if(typeof value !== 'number'){
  //     return null;
  //   }
  //   if(!this.root){
  //     this.root = new Node(value);
  //     return;
  //   }

  //   let _insert = (node) => {
  //     if (value < node.value){
  //       if(node.leftChild === null){
  //         node.leftChild = new Node(value);
  //       } else if (node.leftChild !== null){
  //         return _insert(node.leftChild);
  //       }
  //     } else if(value >= node.value){
  //       if(node.rightChild === null){
  //         node.rightChild = new Node(value);
  //         return;
  //       } else if (node.rightChild !== null) {
  //           return _insert(node.rightChild);
  //       }
  //     }
  //   }
  //   _insert(this.root);
  // }

  //depth first search
  preOrder (rootNode) { //create preOrder method
    let orderedArray = []; //declare empty array for output
    function _recursionPre(node) { //create recursive function to traverse tree
      // if(!node) { //check if root exists, if not return
      //   return;
      // }
      orderedArray.push[node.value]; //push the current root value into the output array
      if(node.leftChild) {
        _recursionPre(node.leftChild); //re call the function for the left child
      }
      if(node.rightChild){
        _recursionPre(node.rightChild); //re call the function for the right child
      }
    }
    _recursionPre(rootNode); //invoke the recursive function to start
    return orderedArray; //return the output array
  }

  inOrder(rootNode) { //create an inOrder method
      let orderedArray = []; //declare empty array for output
      function _recursionPre(node) { //create recursive function to traverse tree
        if(node.leftChild) {
          _recursionPre(node.leftChild); //re call the function for the left child
        }
        orderedArray.push[node.value]; //push the current root value into the output array
        if(node.rightChild){
          _recursionPre(node.rightChild); //re call the function for the right child
        }
      }
    _recursionPre(rootNode); //invoke the recursive function to start
    return orderedArray; //return the output array
  }

  postOrder(rootNode) { //create the postOrder method
    let orderedArray = []; //declare empty array for output
    function _recursionPre(node) { //create recursive function to traverse tree
      if(node.leftChild) {
        _recursionPre(node.leftChild); //re call the function for the left child
      }
      if(node.rightChild){
        _recursionPre(node.rightChild); //re call the function for the right child
      }
      orderedArray.push[node.value]; //push the current root value into the output array
    }
  _recursionPre(rootNode); //invoke the recursive function to start
  return orderedArray; //return the output array
  }

  findMaxValue(root){
    let highValue = root.value; //declare empty array for output
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
    this.root = new Node (root);
  }

  // add(newNodeValue){ //create add method

  //   let newNode = new Node(newNodeValue);

  //   if(!this.root) { //check if this.root exists, if not assign the newNode to this.root
  //     this.root = newNode;
  //   } else {
  //     _recursionAdd(this.root, newNode); //if this.root does exist, then invoke recursive function passing this.root and newNode
  //   }

  //   function _recursionAdd(node, newNode) { //create recursive function to traverse
  //     if(newNode.value < node.value) { //if newNode value is less than root value and root.left doesn't exist make the newNode root.left
  //       if(!node.left) {
  //         node.leftChild = newNode;
  //       } else {
  //         _recursionAdd(node.left, newNode); //otherwise re call the function with root.left and newNode
  //       }
  //     } else if(!node.right) { //if root. right doesn't exist make root.right equal to the newNode
  //       node.rightChild = newNode;
  //     } else {
  //       _recursionAdd(node.right, newNode); //otherwise re call the function with root.right and newNode
  //     }
  //   }

  // }

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