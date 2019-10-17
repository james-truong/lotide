const words = ["ground", "control", "to", "major", "tom"];
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

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

const results1 = map(words, word => word[0]);
assertArraysEqual(results1, ['g','c','t','m','t']);

const results2 = map(['hi', 'whatsup', 'yo'], word => word[0]);
assertArraysEqual(results2, ['h','w','y']);

const results3 = map(words, word => word+word);
assertArraysEqual(results3, ['groundground','controlcontrol','toto', 'majormajor', 'tomtom']);