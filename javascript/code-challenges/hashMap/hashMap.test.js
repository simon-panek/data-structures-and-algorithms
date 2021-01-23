'use strict';

const HashMap = require("./hashMap");

describe('------------HashMap-------------', () => {
  it('Should instantiate a new HashMap', ()=> {
    let newMap = new HashMap(2);
    expect(newMap[0]).toEqual(undefined);
  })

  it('Should return the value given a key ', () => {
    let newMap = new HashMap(20);
    newMap.set('cat', 'sandwich');
    newMap.set('dog', 'soup');
    newMap.set('turkey', 'strawberry');
    newMap.set('cow', 'bagel');
    expect(newMap.get('dog')).toEqual('soup');
  })

  it('Should return the value given a key in a map with collisions ', () => {
    let newMap = new HashMap(3);
    newMap.set('cat', 'sandwich');
    newMap.set('dog', 'soup');
    newMap.set('turkey', 'strawberry');
    newMap.set('cow', 'bagel');
    expect(newMap.get('dog')).toEqual('soup');
  })
  it('Should return null for a key that does not exist in the hash table', () => {
    let newMap = new HashMap(20);
    newMap.set('cat', 'sandwich');
    newMap.set('dog', 'soup');
    newMap.set('turkey', 'strawberry');
    newMap.set('cow', 'bagel');
    expect(newMap.get('bird')).toEqual(null);
  })

  it('Should return null when given a key not in a map with collisions ', () => {
    let newMap = new HashMap(3);
    newMap.set('cat', 'sandwich');
    newMap.set('dog', 'soup');
    newMap.set('turkey', 'strawberry');
    newMap.set('cow', 'bagel');
    expect(newMap.contains('bird')).toEqual(false);
  })

  it('Should hash a key to an in range value', () => {
    let newMap = new HashMap(100);
    expect(newMap.hash('test')).toBeLessThan(100);
  })
})