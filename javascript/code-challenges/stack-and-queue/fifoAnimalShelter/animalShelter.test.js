'use strict';

const AnimalQueue = require('./fifo-animal-shelter.js');

describe('Find preference', () => {
  it('Adds a dog or cat to the list', () => {
    const animalQ = new AnimalQueue ();
    animalQ.enqueue('cat');
    animalQ.enqueue('cat');
    animalQ.enqueue('dog');
    animalQ.enqueue('dog');
    animalQ.enqueue('cat');
    expect(animalQ.front.value).toEqual('cat');

  })

  it('Returns first dog from the que', () => {
    const animalQ = new AnimalQueue ();
    animalQ.enqueue('dog');
    animalQ.enqueue('cat');
    animalQ.enqueue('dog');
    animalQ.enqueue('dog');
    animalQ.enqueue('cat');
    expect(animalQ.dequeue('dog')).toEqual('dog');

  })

  it('Returns first dog from the que', () => {
    const animalQ = new AnimalQueue ();
    animalQ.enqueue('cat');
    animalQ.enqueue('cat');
    animalQ.enqueue('dog');
    animalQ.enqueue('rabbit');
    animalQ.enqueue('cat');
    expect(animalQ.dequeue('rabbit')).toEqual('rabbit');

  })
})