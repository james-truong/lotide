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
    if(Array.isArray(array1[i])) {
      console.log(array1[i+1]);
      return eqArrays(array1[i+1], array2[i+1]);
    }
    if(array1[i] !== array2[i]){
      return false;
    }
  }
  return true;
}

// TEST CODE
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
eqArrays([[2, 3], [4]], [[2, 3], [4]]) // => true

console.log(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]])); // => false
console.log(eqArrays([[2, 3], [4]], [[2, 3], 4])); // => false
console.log(eqArrays([[2, 3], 4], [[2, 3], 4])); // => false