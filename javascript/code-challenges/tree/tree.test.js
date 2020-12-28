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
    //console.log('2. treeInstance: ', treeInstance);
    expect(treeInstance.root.value).toEqual(5);
  })
  it ('3.Can successfully add a left child and right child to a single root node.', () => {
    let node = new Node(2)
    let treeInstance = new BinarySearchTree (node);
    console.log('3. treeInstance', treeInstance);
    treeInstance.add(1);
    treeInstance.add(3);
   console.log('3.2. treeInstance', treeInstance);
    expect(treeInstance.root.value.value).toEqual(2);
    console.log('4.treeInstance.root.leftChild', treeInstance.root.leftChild);
    expect(treeInstance.root.leftChild.value.value).toEqual(1);
    console.log('5.treeInstance.root.rightChild', treeInstance.root.rightChild);
    expect(treeInstance.root.rightChild.value.value).toEqual(3);
  })
  it ('4.Can successfully return a collection from a preorder traversal.', () => {
    let treeInstance = new BinarySearchTree (4);
    treeInstance.add(1);
    treeInstance.add(2);
    treeInstance.add(3);
    treeInstance.add(5);
    treeInstance.add(6);
    treeInstance.add(7);
    console.log('6.treeInstance ', treeInstance);
    expect(treeInstance.preOrder()).toEqual([4,2,1,3,6,5,7]);
  })
  it ('5.Can successfully return a collection from an inorder traversal.', () => {
    let treeInstance = new BinaryTree (4);
    treeInstance.add(1);
    treeInstance.add(2);
    treeInstance.add(3);
    treeInstance.add(5);
    treeInstance.add(6);
    treeInstance.add(7);
    expect(treeInstance.inOrder()).toEqual([1,2,3,4,5,6,7]);
  })
  it ('6.Can successfully return a collection from a postorder traversal.', () => {
    let treeInstance = new BinaryTree (4);
    treeInstance.add(1);
    treeInstance.add(2);
    treeInstance.add(3);
    treeInstance.add(5);
    treeInstance.add(6);
    treeInstance.add(7);
    expect(treeInstance.postOrder()).toEqual([1,3,2,5,7,6,4]);
  })

  it('7. Can successfully pick the highest value from a binary tree.', () => {
    let node = new Node()
      let tree = new BinarySearchTree(node);
      // let binary = new BinaryTree();
      tree.add(5);
      tree.add(4);
      tree.add(4);
      tree.add(99);
      tree.add(85);
      tree.add(12);
      console.log('this is the tree:', tree);
      expect(tree.findMaxValue()).toEqual(99);
  })

  it('8. Returns null if findMaxValue is run on an empty tree.', ()=> {

  })

  it('9. Can successfully pick the highest value from a binary tree with duplicate max values.', () => {

  })

})






