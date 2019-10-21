# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by @james-truong as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @james-truong/lotide`

**Require it:**

`const _ = require('@james-truong/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(arr1, arr2)`: Logs a message to show whether 2 arrays match.
* `assertEqual(x,y)`: Logs a message to show whether 2 primary objects match.
* `assertObjectsEqual(Obj1, Obj2)`: Logs a message to show whether 2 objects match.
* `countLetters(string)`: returns the count of each letter of the string with an Object format.
* `countOnly(array, itemstoLookfor)`: searches through the array and looks for itemsToLookFor. Returns an object with the new counts.
* `eqObjects(obj1, obj2)`: compares 2 objects and returns true if they're equal.
* `eqArrays(arr1,arr2)`: compare 2 arrays and return true if they're equal.
* `findKey(obj1, callback)`: returns the first key which matches the value which is given by the callback.
* `findKeyByValue(object, value)`: returns the first key which matches the value. (This is with no callback function).
* `flatten(array)`: Takes in a potentially nested array and spreads it to a single-nested array.
* `head(array)`: returns the front of the array.
* `letterPositions(sentence)`: returns an object that contains the letters (key) and index positions (value) of the sentence
* `map(array, callback)`: takes in two arguments 1) array to map and 2) callback function (when predicate is met) should return the altered array
* `middle(array)`: returns a new array with the middle index value/s of the original array
* `tail(array)`: returns a new array without the first index value of the original array
* `takeUntil(array, callback)`: takes a slice of an array with index values taken from the beginning until callback/predicate returns a truthy value
* `without(source, itemsToRemove)`: returns an array without the specified items
