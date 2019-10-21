const assert = require('chai').assert;
const middle = require('../middle');

describe("return the middle values in an index", () => {
  it('returns [] for [1]', () => {
    assert.deepEqual(middle([1]), []);
  });
  it('returns [] for [1, 2]', () => {
    assert.deepEqual(middle([1, 2]), []);
  });
  it('returns [2] for odd array length [1, 2, 3]', () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it('returns [3] for odd array length [1, 2, 3, 4, 5]', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });
  it('returns [2, 3] for even array length [1, 2, 3, 4]', () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
  it('should not return undefined for [1]', () => {
    assert.notDeepEqual(middle([1]), undefined);
  });
  it('should not return undefined for [1, 2]', () => {
    assert.notDeepEqual(middle([1, 2]), undefined);
  });
  it('should not return undefined for []', () => {
    assert.notDeepEqual(middle([]), undefined);
  });

});