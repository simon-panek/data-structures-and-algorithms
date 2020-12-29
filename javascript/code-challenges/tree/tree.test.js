const util = require ('util');
'use strict';

const {Node, BinaryTree, BinarySearchTree} = require ('./tree.js')

describe ('Tree Tests', () => {

  it ('1.Can successfully instantiate an empty tree.', () => {
    let treeInstance = new BinaryTree ();
    expect(treeInstance.root).toEqual(null);
  })
  it ('2.Can successfully instantiate a tree with a single root node.', () => {
    let node = new Node(5);
    let treeInstance = new BinaryTree (node);
    expect(treeInstance.root.value).toEqual(5);
  })
  it ('3.Can successfully add a left child and right child to a single root node.', () => {
    let node = new Node(2)
    let treeInstance = new BinarySearchTree (node);
    treeInstance.add(1);
    treeInstance.add(3);
    expect(treeInstance.root.value).toEqual(2);
    expect(treeInstance.root.leftChild.value).toEqual(1);
    expect(treeInstance.root.rightChild.value).toEqual(3);
  })
  it ('4.Can successfully return a collection from a preorder traversal.', () => {
    let node = new Node (4);
    let treeInstance = new BinarySearchTree (node);
    treeInstance.add(2);
    treeInstance.add(1);
    treeInstance.add(3);
    treeInstance.add(6);
    treeInstance.add(5);
    treeInstance.add(7);
    expect(treeInstance.preOrder()).toEqual([4,2,1,3,6,5,7]);
  })
  it ('5.Can successfully return a collection from an inorder traversal.', () => {
    let node = new Node (4);
    let treeInstance = new BinarySearchTree (node);
    treeInstance.add(2);
    treeInstance.add(1);
    treeInstance.add(3);
    treeInstance.add(6);
    treeInstance.add(5);
    treeInstance.add(7);
    expect(treeInstance.inOrder()).toEqual([1,2,3,4,5,6,7]);
  })
  it ('6.Can successfully return a collection from a postorder traversal.', () => {
    let node = new Node (4);
    let treeInstance = new BinarySearchTree (node);
    treeInstance.add(2);
    treeInstance.add(1);
    treeInstance.add(3);
    treeInstance.add(6);
    treeInstance.add(5);
    treeInstance.add(7);
    expect(treeInstance.postOrder()).toEqual([1,3,2,5,7,6,4]);
  })

  it('7. Can successfully pick the highest value from a binary tree.', () => {
    let node = new Node(7)
      let treeInstance = new BinarySearchTree(node);
      treeInstance.add(5);
      treeInstance.add(4);
      treeInstance.add(4);
      treeInstance.add(99);
      treeInstance.add(85);
      treeInstance.add(12);
      expect(treeInstance.findMaxValue()).toEqual(99);
  })

  it('8. Returns null if findMaxValue is run on an empty tree.', ()=> {
    let treeInstance = new BinarySearchTree();
    expect(treeInstance.findMaxValue()).toEqual(null);
  })

  it('9. Can successfully pick the highest value from a binary tree with duplicate max values.', () => {
    let node = new Node(7)
    let treeInstance = new BinarySearchTree(node);
    treeInstance.add(5);
    treeInstance.add(99);
    treeInstance.add(4);
    treeInstance.add(99);
    treeInstance.add(85);
    treeInstance.add(12);
    expect(treeInstance.findMaxValue()).toEqual(99);
  })

  it('10. Can return an array of values in the Breadth First order.', () => {
    let node = new Node(7)
    let treeInstance = new BinarySearchTree(node);
    treeInstance.add(5);
    treeInstance.add(99);
    treeInstance.add(4);
    treeInstance.add(9);
    treeInstance.add(85);
    treeInstance.add(12);
    // console.log(util.inspect(treeInstance, false, null, true));
    expect(treeInstance.breadthFirst()).toEqual([7,5,99,4,9,85,12]);
  })

})






