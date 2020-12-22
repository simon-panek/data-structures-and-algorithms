'use strict';

const PseudoQueue = require ('./queue-with-stacks.js');

describe ('PseudoQueue', () => {

  describe ('Enqueue', () => {
    it ('1. should add one value to stackA to the que', () => {
      const queue = new PseudoQueue ();
      queue.enqueue('one');
      queue.enqueue('two');
      queue.enqueue('three');
      expect(queue.stackA.storage.head.value).toEqual('three');
    })
  })

  describe ('Dequeue', () => {

    describe ('Enqueue', () => {
      it ('2. should remove one stack from the que', () => {
      const queue = new PseudoQueue ();
      queue.enqueue('one');
      queue.enqueue('two');
      queue.enqueue('three');
      queue.dequeue();
      expect(queue.stackA.storage.head.value).toEqual('three');
      })
  
      it('3. should return error message when no stacks are in the que', () => {
        const queue = new PseudoQueue ();
        expect(queue.dequeue()).toEqual('Queue is empty');
      })
  
    })

  })
})