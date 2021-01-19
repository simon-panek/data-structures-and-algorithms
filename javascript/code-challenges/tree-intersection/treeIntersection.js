'use strict';
const HashMap = require('../hashMap/hashMap.js');

//create a new hashmap
//go through each tree
//for each tree node check if hashmap contains the number
//if so continue
//if not set into hashmap and push to output array
//when all nodes visited return output array

function treeIntersection (treeOne, treeTwo) {

  if(!treeOne.root || !treeTwo.root) return null;

  let map = new HashMap (100);
  let outputArray = [];

  function _treeTraverse (node) {
    // console.log('node.value ', node.value);
    if(!map.contains(node.value.toString())){
      map.set(node.value.toString());
      outputArray.push(node.value);
    }
    if(node.leftChild) _treeTraverse(node.leftChild);
    if(node.rightChild) _treeTraverse(node.rightChild);

  }

  _treeTraverse(treeOne.root);
  _treeTraverse(treeTwo.root);

  return outputArray;
}

module.exports = treeIntersection;