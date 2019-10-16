// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !==  ${expected}`);
  }
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  if((Object.keys(object1)).length !== (Object.keys(object2)).length){
    return false;
  }
  for(key of Object.keys(object1)){
    if(!object2[key]){
      return false;
    }
    if(Array.isArray(object1[key])){
      if(!(eqArrays(object1[key], object2[key]))){
        return false;
        }
    }
    else{
      if(object1[key] !== object2[key]){
        return false;
    }
      }

    }
    return true;
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

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  // ...
  if (eqObjects(actual, expected)) {
    console.log(`✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !==  ${expected}`);
  }

};

console.log(assertObjectsEqual({a : 'b'}, {a : 'b'}), true);