'use strict';

const LinkedList = require('./linkedList.js');
const Node = require('./node.js');
const Stack = require('./stacks.js');
const Queue = require('./queues.js');

describe('Stacks and Queues', () => {

  describe('Stacks', () => {
    it('1. can successfully push a value onto a stack', () => {
      let stack = new Stack ();
      stack.push('one');
      expect(stack.top).toEqual('one');
    })

    it('2. can successfully push multiple values onto a stack', () => {
      let stack = new Stack ();
      stack.push('one');
      stack.push('two');
      stack.push('three');
      expect(stack.peek()).toEqual('three');
    })

    it('3. can successfully pop off the stack', () => {
      let stack = new Stack ();
      stack.push('one');
      expect(stack.pop()).toEqual('one');
    })

    it('4. can successfully empty a stack after multiple pops', () => {
      let stack = new Stack ();
      stack.push('one');
      stack.push('two');
      stack.push('three');
      stack.pop();
      stack.pop();
      stack.pop();
      expect(stack.top).toEqual(null);
    })

    it('5. can successfully peek the top value on a stack', () => {
      let stack = new Stack ();
      stack.push('one');
      stack.push('two');
      stack.push('three');
      expect(stack.peek()).toEqual('three');

    })
    it('6. can successfully instantiate a new stack', () => {
      let stack = new Stack();
      expect(stack.peek()).toEqual(false);
    })
    
    it('7. calling pop or peek on an empty stack raises an exception', () => {
      let stack = new Stack();
      expect(stack.peek()).toBe(false);
      expect(stack.pop()).toBe(false);
    })
  })
  
  describe('Queues', () => {
    it('8. can successfully enqueue into a queue', () => {
      let queue = new Queue ();
      queue.enqueue('one');
      expect(queue.front.value).toEqual('one');
    })
    it('9. can successfully enqueue multiple values into a queue', () => {
      let queue = new Queue ();
      queue.enqueue('one');
      queue.enqueue('two');
      queue.enqueue('three');
      expect(queue.front.next.next.value).toEqual('three');
    })
    it('10. can successfully return a dequeued value from the queue', () => {
      let queue = new Queue ();
      queue.enqueue('one');
      // console.log('10', queue.dequeue());
      // let test = queue.dequeue();
      expect(queue.dequeue().value).toEqual('one');
    })
    it('11. can successfully peek into a queue and return the value', () => {
      let queue = new Queue ();
      queue.enqueue('two');
      queue.enqueue('three');
      expect(queue.peek().value).toEqual('two');
    })
    it('12. can successfully empty a queue after multiple dequeues', () => {
      let queue = new Queue ();
      queue.enqueue('one');
      queue.enqueue('two');
      queue.enqueue('three');
      queue.dequeue();
      queue.dequeue();
      queue.dequeue();
      expect(queue.front).toEqual(null);
    })
    it('13. can successfully instantiate an empty queue', () => {
      let queue = new Queue();
      expect(queue.peek()).toEqual(false);
    })
    it('14. calling dequeue or peek on an empty stack raises an exception', () => {
      let queue = new Queue();
      expect(queue.peek()).toBe(false);
      expect(queue.dequeue()).toBe(false);
    })
  })
})