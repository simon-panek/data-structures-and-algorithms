'use strict';

function multiFunctionValidate (string) {

  // let stringArray = Array.from(string);

  // let parenCount = 0;
  // let squareCount = 0;
  // let curlyCount = 0;

  // for (let i=0; i<stringArray.length; i++);
  //   if(stringArray[i] === '(') {parenCount ++};
  //   if(stringArray[i] === ')') {parenCount --};
  //   if(stringArray[i] === '[') {squareCount ++};
  //   if(stringArray[i] === ']') {squareCount --};
  //   if(stringArray[i] === '{') {curlyCount ++};
  //   if(stringArray[i] === '}') {curlyCount --};
  // }

  // if(parenCount === 0 && squareCount === 0 && curlyCount === 0){
  //   return true;
  // } else {
  //   return false;
  // }

  let stringArray = Array.from(string);

  if(!string) return false;

  let testArrayOne = [];

  for (let i = 0; i<stringArray.length; i++) {
    if(stringArray[i] === '(' || stringArray[i] === '{' || stringArray[i] === '('){
      testArrayOne.push(stringArray[i]);
    }
    if(stringArray[i] === ')' || stringArray[i] === '}' || stringArray[i] === '('){
      if(stringArray[i] === ')' && testArrayOne[testArrayOne.length - 1] !== '(') {
        return false;
      } else {
        testArrayOne.pop();
      };
      if(stringArray[i] === '}' && testArrayOne[testArrayOne.length - 1] !== '{') {
        return false;
      } else {
        testArrayOne.pop();
      };
      if(stringArray[i] === ']' && testArrayOne[testArrayOne.length - 1] !== '[') {
        return false;
      } else {
        testArrayOne.pop();
      };
    }
    return (testArrayOne === []) ? true : false;
  }

}

module.exports = multiFunctionValidate;