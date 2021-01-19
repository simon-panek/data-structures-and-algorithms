'use strict';

const treeIntersection = require ('./treeIntersection.js');
const {Node, BinaryTree} = require ('../tree/tree.js');
// const Node = require ('../tree/tree.js');

describe ('Tree Intersection ', () => {
  it('should return a list of unique tree values when provided two trees', ()=> {
    let nodeOne = new Node (4);
    let treeOne = new BinaryTree (nodeOne);
    treeOne.add(2);
    treeOne.add(1);
    treeOne.add(3);
    treeOne.add(6);
    treeOne.add(5);
    treeOne.add(7);
    // console.log({treeOne});
    let nodeTwo = new Node (5);
    let treeTwo = new BinaryTree (nodeTwo);
    treeTwo.add(7);
    treeTwo.add(18);
    treeTwo.add(32);
    treeTwo.add(6);
    treeTwo.add(54);
    treeTwo.add(17);
    // console.log({treeTwo});
    expect(treeIntersection(treeOne, treeTwo)).toEqual([4,2,1,3,6,5,7,18,17,32,54]);

  })
  it('should return null if either tree does not exist', ()=> {

  })
  it('should return the first tree values if passed two identical trees', () => {

  })
})