'use strict';

// Require our linked list implementation
const LinkedLilst = require('../index');

describe('Linked List', () => {
  it('Can successfully instantiate an empty linked list', () => {
    const list = new LinkedList();
    expect(this.head).toEqual(null);
  });
});
