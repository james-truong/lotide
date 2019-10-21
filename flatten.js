function eqArrays(array1, array2){
  if(array1.length !== array2.length){
    return false;
  }
  for (let i = 0; i<array1.length; i++){
    if(array1[i] !== array2[i]){
      return false;
    }
  }
  return true;
}

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅ Assertion Passed: [${array1}] === [${array2}]`);
  } else {
    console.log(`❌❌❌ Assertion Failed: [${array1}] !==  [${array2}]`);
  }
};

// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !==  ${expected}`);
  }
};

function eqArrays(array1, array2){
  if(array1.length !== array2.length){
    return false;
  }
  for (let i = 0; i<array1.length; i++){
    if(array1[i] !== array2[i]){
      return false;
    }
  }
  return true;
}

function flatten(array){
  let flattenArray = [];
  for(let i = 0 ;i<array.length; i++){
    if(Array.isArray(array[i])){
      for(let j = 0; j<array[i].length; j++){
        flattenArray.push(array[i][j]);
        console.log(flattenArray);
      }
    }
    else{
      flattenArray.push(array[i])}
  }
  return flattenArray;
}
module.exports = flatten;
