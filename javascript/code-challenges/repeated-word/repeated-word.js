'use strict';

const HashMap = require('javascript/code-challenges/hashMap/hashMap.js');

//split on space
//put each word into an array compare index zero against all others, then 1st position to all others ...until match, then return match, if no match return 

//split string into single words
//hash each word and store in hash table
//then hash each word and attempt to get

function repeatedWord (string) {
  //split the string into an array of words
  //TODO: remove punctuation
  let cleanString = string.replace(/[^\s]/gi, '');
  console.log({cleanString});

  let wordArray=cleanString.split('');
  console.log({wordArray});

  // place each word into a hash table
    //create a new map
  let map = new HashMap(100);
    //hash and store each word in the wordArray
  for (i=0; i<wordArray.length; i++){
    //check if word already exists in map, if so return the word
    if(map.contains(wordArray[i])){
      return wordArray[i];
    } else { //store the word in the map and move on to the next word
    map.set(wordArray[i], wordArray[i]);
    }
    i++;
  }

  return null;

}

module.exports = repeatedWord;