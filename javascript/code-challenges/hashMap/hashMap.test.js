'use strict';

const HashMap = require("./hashMap");

describe('------------HashMap-------------', () => {
  it('Should return the value given a key ', () => {
    let newMap = new HashMap(20);
    newMap.set('cat', 'sandwich');
    newMap.set('dog', 'soup');
    newMap.set('turkey', 'strawberry');
    newMap.set('cow', 'bagel');
    expect(newMap.get('dog')).toEqual('soup');
  })
})