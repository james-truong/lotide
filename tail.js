// FUNCTION IMPLEMENTATION
const assertEqual = require('./assertEqual')

const tail = function(array) {
  let tails = array.slice(1);
  return tails;
};

module.exports = tail;