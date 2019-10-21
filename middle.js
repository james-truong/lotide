const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');
const assertEqual = require('./assertEqual');
// FUNCTION IMPLEMENTATION


function middle(array){
  let middle = [];
  if (array.length === 0 || array.length === 1 || array.length === 2){
    return middle;
  }
  else{
    if(array.length % 2 === 1){
      middle.push(array[Math.floor(array.length / 2)]);
    }
    else{
      middle.push(array[Math.floor(((array.length-1)/2))]);
      middle.push(array[Math.ceil(((array.length-1)/2))]);
    }
  }
  return middle;
}

// TEST CODE

module.exports = middle;
