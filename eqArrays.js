// FUNCTION IMPLEMENTATION
const assertEqual = require('./assertEqual');

function eqArrays(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (Array.isArray(array1[i])) {
      console.log(array1[i + 1]);
      return eqArrays(array1[i + 1], array2[i + 1]);
    }
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
}

// TEST CODE
module.exports = eqArrays;

