
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

const assert = require('chai').assert;
const head   = require('../head');

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5'); 
  });

  it("should not return -7 for [5,6,7] which is the tail", () => {
    assert.notStrictEqual(head([5,6,7]), 7); 
  });
  it("should not return undefined for an empty list []", () => {
    assert.strictEqual(head([]), undefined); 
  });
  it("should return 'Hello' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); 
  });
});