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

assertArraysEqual(middle([1,2,3,4]), [2,3]);

