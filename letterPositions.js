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


const letterPositions = function(string) {
  const results = {};
  // logic to update results here
  for(let i = 0; i<string.length; i++){
    if(string[i] === ' '){
      continue
    }
    if(!results[string[i]]){
      results[string[i]] = [];
    }

    results[string[i]].push(i);
  }
  return results;
};
// assertArraysEqual(letterPositions("hello").e, [1]);
// assertArraysEqual(letterPositions("hello").l, [2,3]);

module.exports = letterPositions;
