const assert = require('chai').assert;
const tail = require('../tail');

describe("return the tail(last) value in an index", () => {
  it('returns ["Lighthouse", "Labs"] for ["Hello", "Lighthouse", "Labs"]', () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
  it('returns [] for ["Yo Yo"]', () => {
    assert.deepEqual(tail(["Yo Yo"]), []);
  });
  it('returns [] for []', () => {
    assert.deepEqual(tail([]), []);
  });
  it('should not return ["Hello"] for ["Hello", "Lighthouse", "Labs"]', () => {
    assert.notDeepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Hello"]);
  });
  it('should not return undefined for ["Yo Yo"]', () => {
    assert.notDeepEqual(tail(["Yo Yo"]), undefined);
  });
  it('should not return undefined for []', () => {
    assert.notDeepEqual(tail([]), undefined);
  });
});