'use strict';

class Node { //create node class

  constructor (value=null, leftChild=null, rightChild=null) { //define default values
    this.value = value; 
    this.leftChild = leftChild;
    this.rightChild = rightChild;
  }
}

class BinaryTree { //create binary tree class

  constructor (rootValue=null, rootLeftChild=null, rootRightChild=null) { //define default values
    this.root = root;
  }

  preOrder (rootNode) { //create preOrder method

    let orderedArray = []; //declare empty array for output

    function _recursionPre(rootNode) { //create recursive function to traverse tree

      if(!rootNode) { //check if root exists, if not return
        return;
      }

      orderedArray.push[rootNode.value]; //push the current root value into the output array

      _recursionPre(rootNode.left); //re call the function for the left child
      _recursionPre(rootNode.right); //re call the function for the right child
    }
    _recursionPre(rootNode); //invoke the recursive function to start
    
    return orderedArray; //return the output array
  }

  inOrder(rootNode) { //create an inOrder method

    let orderedArray = []; //declare an empty array to hold the output

    function _recursionIn(rootNode) { //create a recursive function to traverse the array

      if(!rootNode) { //if root doesn't exist return
        return;
      }

      _recursionIn(rootNode.left); //re call the function using the left child
      
      orderedArray.push[rootNode.value]; //push the current root value into the output array

      _recursionIn(rootNode.right); //re call the function using the right child
    }
    _recursionIn(rootNode); //invoke the function to begin recursion
    
    return orderedArray; //return the output array
    
  }

  postOrder(rootNode) { //create the postOrder method

    let orderedArray = []; //declare an empty array to hold the output

    function _recursionPost(rootNode) { //create a recursive function to traverse the tree

      if(!rootNode) { //if root does not exist return
        return;
      }

      _recursionPost(rootNode.left); //re call the function using the left node
      _recursionPost(rootNode.right); //re call the function using the right node
      
      orderedArray.push[rootNode.value]; //push the value of the current node into the output array
    }
    _recursionPost(rootNode); //invoke the recursive function to begin
    
    return orderedArray; //return the output array
    
  }
}

class BinarySearchTree { //create a binary search tree function

  constructor (root=null) { //define the default values
    this.root = root;
  }

  add(newNode){ //create add method

    if(!this.root) { //check if this.root exists, if not assign the newNode to this.root
      this.root = newNode;
    } else {
      _recursionAdd(this.root, newNode); //if this.root does exist, then invoke recursive function passing this.root and newNode
    }

    function _recursionAdd(root, newNode) { //create recursive function to traverse
      if(newNode.value < root.value) { //if newNode value is less than root value and root.left doesn't exist make the newNode root.left
        if(!root.left) {
          root.left = newNode;
        } else {
          _recursionAdd(root.left, newNode); //otherwise re call the function with root.left and newNode
        }
      } else if(!root.right) { //if root. right doesn't exist make root.right equal to the newNode
        root.right = newNode;
      } else {
        _recursionAdd(root.right, newNode); //otherwise re call the function with root.right and newNode
      }
    }

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