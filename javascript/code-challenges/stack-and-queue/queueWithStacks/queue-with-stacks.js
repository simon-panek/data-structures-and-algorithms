'use strict';
const Stack = require ('../stacks.js');


class PseudoQueue {
  constructor() {
    // this.stackA = new Stack();
    // this.stackB = new Stack();
    this.stackA = [];
    this.stackB = [];
   // this.front
    //this.end
  }

    enqueue(value) {
      this.stackA.push(value);
    }

    dequeue(){
      while(this.stackA){
        let item = stackA.pop();
        this.stackB.push(item)
      }
      return this.stackB.pop();
    }
  // enqueue(value) {

  //   if (this.stackB.length > 0){
  //     let stackBLength = this.stackB.length;

  //     for(let i = 0; i < stackBLength; i++) {
  //       let item = this.stackA.pop();
  //       this.stackA.push(item);
  //     }
  //   }
  //   console.log('this.stackA', this.stackA);
  //     this.stackA.push(value);
  // }

  // dequeue() {
  //   if (this.stackB.length > 0) {
  //     return this.stackB.pop();
  //   } else if (this.stackB.length === 0) {
  //       if(this.stackA.length === 0){
  //         return "Que is empty";
  //       } else if (this.stackA.length === 1){
  //         return this.stackA.pop();
  //       } else if (this.stackA.length > 0){
  //         let stackALength = this.stackA.length;
  //         for(let j = 0; j < stackALength; j++) {
  //           let item2 = this.stackA.pop();
  //           this.stackB.push(item2);
  //         }
  //         return this.stackB.pop();
  //       }
  //   }
  // }
}

module.exports = PseudoQueue;