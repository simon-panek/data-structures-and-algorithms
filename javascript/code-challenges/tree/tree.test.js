'use strict';

const tree = require ('./tree.js')

describe ('Tree Tests', () => {

  it ('1.Can successfully instantiate an empty tree.', () => {
    let tree = new BinaryTree ();
    expect(tree.root.value).toEqual(null);
  })
  it ('2.Can successfully instantiate a tree with a single root node.', () => {
    let tree = new BinaryTree (5);
    expect(tree.root.value).toEqual(5);
  })
  it ('3.Can successfully add a left child and right child to a single root node.', () => {
    let tree = new BinaryTree (2);
    tree.add(1);
    tree.add(3);
    expect(tree.root.value).toEqual(null);
  })
  it ('4.Can successfully return a collection from a preorder traversal.', () => {
    let tree = new BinaryTree (4);
    tree.add(1);
    tree.add(2);
    tree.add(3);
    tree.add(5);
    tree.add(6);
    tree.add(7);
    expect(tree.preOrder()).toEqual([4,2,1,3,6,5,7]);
  })
  it ('5.Can successfully return a collection from an inorder traversal.', () => {
    let tree = new BinaryTree (4);
    tree.add(1);
    tree.add(2);
    tree.add(3);
    tree.add(5);
    tree.add(6);
    tree.add(7);
    expect(tree.preOrder()).toEqual([1,2,3,4,5,6,7]);
  })
  it ('6.Can successfully return a collection from a postorder traversal.', () => {
    let tree = new BinaryTree (4);
    tree.add(1);
    tree.add(2);
    tree.add(3);
    tree.add(5);
    tree.add(6);
    tree.add(7);
    expect(tree.preOrder()).toEqual([1,3,2,5,7,6,4]);
  })
})






