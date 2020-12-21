'use strict';

const PseudoQueue = require ('./queue-with-stacks.js');

describe ('PseudoQueue', () => {

  describe ('Enqueue', () => {
    it ('1. should add one value to stackA to the que', () => {
      const queue = new PseudoQueue ();
      queue.enqueue('one');
      queue.enqueue('two');
      queue.enqueue('three');
      expect(this.stack[2]).toEqual('three');
    })

    it('2. should return false when no queue exist', () => {
      

    })

  })

  describe ('Dequeue', () => {

    describe ('Enqueue', () => {
      it ('3. should remove one stack from the que', () => {
  
      })
  
      it('4. should return false when no stacks are in the que', () => {
  
      })

      it('5. should ')
  
    })

  })
})