const middle = function(array) {
  let mid = [];
  let mid1 = (array.length / 2) - 1;
  let mid2 = array.length / 2;
  if (array.length < 3) {
    return mid = [];
  } else if (array.length % 2 === 0) {
    mid.push(array[mid1]);
    mid.push(array[mid2]);
  } else {
    mid.push((array[Math.ceil(mid1)]));
  } 
  return mid;
};

module.exports = middle;