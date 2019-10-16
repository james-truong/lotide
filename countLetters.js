// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !==  ${expected}`);
  }
};

function countLetters(string){
  let result = {};
  for(let i = 0; i<string.length; i++){
    if(string[i] === ' '){
      continue
    }
    if(!result[string[i]]){
      result[string[i]] = 0
    }

    result[string[i]] ++;
  }
  return result;
}

console.log(countLetters("lighthouse in the house"));