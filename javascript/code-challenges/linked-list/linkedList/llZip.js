'use strict';

function llZip(givenListOne, givenListTwo) {

  if(givenListOne.head === null && givenListTwo.head !== null) { return givenListTwo };
  if(givenListOne.head !== null && givenListTwo.head === null) { return givenListOne };
  if(givenListOne.head === null && givenListTwo.head === null) { return false };

  let before = givenListOne.head;
  let current = givenListTwo.head;
  let after = before.next;

  while (current !== null) {
    before.next = current;
    before = current;
    current = after;
    after = before.next;
  }

  givenListTwo.head = null;
  
  return givenListOne;
}

module.exports = llZip;