'use strict';

// function multiFunctionValidate (string) {

//   // let stringArray = Array.from(string);

//   // let parenCount = 0;
//   // let squareCount = 0;
//   // let curlyCount = 0;

//   // for (let i=0; i<stringArray.length; i++);
//   //   if(stringArray[i] === '(') {parenCount ++};
//   //   if(stringArray[i] === ')') {parenCount --};
//   //   if(stringArray[i] === '[') {squareCount ++};
//   //   if(stringArray[i] === ']') {squareCount --};
//   //   if(stringArray[i] === '{') {curlyCount ++};
//   //   if(stringArray[i] === '}') {curlyCount --};
//   // }

//   // if(parenCount === 0 && squareCount === 0 && curlyCount === 0){
//   //   return true;
//   // } else {
//   //   return false;
//   // }

//   let stringArray = Array.from(string);

//   if(!string) return false;

//   let testArrayOne = [];
// // console.log('1) string: ', string);
//   for (let i = 0; i<stringArray.length; i++) {
//     if(stringArray[i] === '(' || stringArray[i] === '{' || stringArray[i] === '('){
//       testArrayOne.push(stringArray[i]);
// // console.log('2) testArrayOne', testArrayOne);
//       }
//     if(stringArray[i] === ')' || stringArray[i] === '}' || stringArray[i] === '('){
//     if(stringArray[i] === ')' && testArrayOne[testArrayOne.length - 1] !== '(') {
// // console.log('3) testArrayOne', testArrayOne);
//     return false;
//     } else {
// // console.log('4) testArrayOne', testArrayOne);
// testArrayOne.pop();
// // console.log('4.5) testArrayOne', testArrayOne);
//     };
//       if(stringArray[i] === '}' && testArrayOne[testArrayOne.length - 1] !== '{') {
// // console.log('5) testArrayOne', testArrayOne);
//       return false;
//       } else {
// // console.log('6) testArrayOne', testArrayOne);
// testArrayOne.pop();
// // console.log('6.5) testArrayOne', testArrayOne);
//       };
//       if(stringArray[i] === ']' && testArrayOne[testArrayOne.length - 1] !== '[') {
// // console.log('7) testArrayOne', testArrayOne);
//         return false;
//       } else {
// // console.log('8) testArrayOne', testArrayOne);
//         testArrayOne.pop();
//       };
//     }
// // console.log('9) testArrayOne', testArrayOne);
//     return (testArrayOne === []) ? true : false;
//   }

// }

function multiFunctionValidate (string) {

  let stringArray = Array.from(string);
  if(!string) return false;

  let testArrayOne = [];
  for (let i = 0; i < stringArray.length; i++) {
    if(stringArray[i] === '(' || stringArray[i] === '{' || stringArray[i] === '['){
      testArrayOne.push(stringArray[i]);
      continue;
      }
    if(stringArray[i] === ')' || stringArray[i] === '}' || stringArray[i] === ']'){
      if((stringArray[i] === ')') && (testArrayOne[testArrayOne.length - 1] !== '(')) {
        return false;
      } else if (stringArray[i] === '}' && testArrayOne[testArrayOne.length - 1] !== '{') {
      return false;
      } else if (stringArray[i] === ']' && testArrayOne[testArrayOne.length - 1] !== '[') {
        return false;
      } else {
        testArrayOne.pop();
      };
    }
  }
  if(testArrayOne.length === 0) {
    return true;
  } else {
    return false;
  }

}

module.exports = multiFunctionValidate;