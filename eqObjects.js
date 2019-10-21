// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !==  ${expected}`);
  }
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function (object1, object2) {
  if ((Object.keys(object1)).length !== (Object.keys(object2)).length) {
    return false;
  }
  for (key of Object.keys(object1)) {
    if (!object2[key]) {
      return false;
    }
    if (Array.isArray(object1[key])) {
      if (!(eqArrays(object1[key], object2[key]))) {
        return false;
      }
    }
    else if (isObject(object1[key])) {
      if (!eqObjects(object1[key], object2[key])){
        return false;
      }
    }
    else {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }

  }
  return true;
};

function isObject(val) {
  if (val === null) { return false; }
  return ((typeof val === 'function') || (typeof val === 'object'));
}


function eqArrays(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
}

module.exports = eqObjects;