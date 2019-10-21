const assertArraysEqual = require('./assertArraysEqual');
const assertEqual = require('./assertEqual');
const head   = require('./head');
const assertObjectsEqual = require('./assertObjectsEqual');
const countOnly = require('./countOnly');
const tail   = require('./tail');
const middle = require('./middle');
const countLetters = require('./countLetters');
const eqArrays = require('./eqArrays');
const eqObjects = require("./eqObjects");
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const flatten = require('./flatten');
const letterPositions = require('./letterPositions');
const map = require('./map');
const takeUntil = require('./takeUntil');
const without = require('./without');

module.exports = {
  head,
  tail,
  middle,
  countLetters,
  assertArraysEqual,
  assertEqual,
  assertObjectsEqual,
  countOnly,
  eqArrays,
  eqObjects,
  findKey,
  findKeyByValue,
  flatten,
  letterPositions,
  map,
  takeUntil,
  without
};