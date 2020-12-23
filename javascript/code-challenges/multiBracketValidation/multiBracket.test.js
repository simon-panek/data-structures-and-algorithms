'use strict';

const multiValidate = require('./multi-bracket-validation.js');

let balancedString = '(one[two{three}two]one)';
let unbalancedString = '(one[two{threetwo]one)';
let reallyUnbalancedString = '(one[two{threetwoone';
let edgeCase1 = 'onetwothreetwoone';
let edgeCase2 = '';
let edgeCase3 = '()(){}[]()';
let edgeCase4 = ')(}{][';

describe ('Multi-bracket Validator', () => {

  it ('1. Should return true when a string with balanced brackets is provided.', ()=>{
    expect(multiValidate(balancedString)).toBe(true);
  })

  it ('2. Should return false when a string with unbalanced brackets is provided.', ()=>{
    expect(multiValidate(unbalancedString)).toBe(false);
  })

  it ('3. Should return true when a string with balanced brackets is provided.', ()=>{
    expect(multiValidate(reallyUnbalancedString)).toBe(false);
  })

  it ('4. Should return true when a string with balanced brackets is provided.', ()=>{
    expect(multiValidate(edgeCase1)).toBe(false);
  })

  it ('5. Should return true when a string with balanced brackets is provided.', ()=>{
    expect(multiValidate(edgeCase2)).toBe(false);
  })

  it ('6. Should return true when a string with balanced brackets is provided.', ()=>{
    expect(multiValidate(edgeCase3)).toBe(false);
  })

  it ('7. Should return true when a string with balanced brackets is provided.', ()=>{
    expect(multiValidate(edgeCase4)).toBe(true);
  })
})