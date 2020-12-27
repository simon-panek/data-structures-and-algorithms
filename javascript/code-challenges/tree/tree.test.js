'use strict';

const tree = require ('./tree.js')

describe ('Tree Tests', () => {

  it ('1.Can successfully instantiate an empty tree.', () => {
    let treeInstance = new tree.BinaryTree ();
    expect(treeInstance.root.value).toEqual(null);
  })
  it ('2.Can successfully instantiate a tree with a single root node.', () => {
    let treeInstance = new tree.BinaryTree (5);
    //console.log('2. treeInstance: ', treeInstance);
    expect(treeInstance.root.value).toEqual(5);
  })
  it ('3.Can successfully add a left child and right child to a single root node.', () => {
    let treeInstance = new tree.BinarySearchTree (2);
    //console.log('3. treeInstance', treeInstance);
    treeInstance.add(1);
    treeInstance.add(3);
   // console.log('3.2. treeInstance', treeInstance);
    expect(treeInstance.root.value).toEqual(2);
    expect(treeInstance.root.leftChild.value).toEqual(1);
    expect(treeInstance.root.rightChild.value).toEqual(3);
  })
  it ('4.Can successfully return a collection from a preorder traversal.', () => {
    let treeInstance = new tree.BinarySearchTree (4);
    treeInstance.add(1);
    treeInstance.add(2);
    treeInstance.add(3);
    treeInstance.add(5);
    treeInstance.add(6);
    treeInstance.add(7);
    console.log('4.treeInstance ', treeInstance);
    expect(treeInstance.preOrder()).toEqual([4,2,1,3,6,5,7]);
  })
  it ('5.Can successfully return a collection from an inorder traversal.', () => {
    let treeInstance = new tree.BinaryTree (4);
    treeInstance.add(1);
    treeInstance.add(2);
    treeInstance.add(3);
    treeInstance.add(5);
    treeInstance.add(6);
    treeInstance.add(7);
    expect(treeInstance.inOrder()).toEqual([1,2,3,4,5,6,7]);
  })
  it ('6.Can successfully return a collection from a postorder traversal.', () => {
    let treeInstance = new tree.BinaryTree (4);
    treeInstance.add(1);
    treeInstance.add(2);
    treeInstance.add(3);
    treeInstance.add(5);
    treeInstance.add(6);
    treeInstance.add(7);
    expect(treeInstance.postOrder()).toEqual([1,3,2,5,7,6,4]);
  })
})






