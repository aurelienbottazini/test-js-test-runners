const sum4113 = require('../sum4113.js');

test('adds 82 + 15 to equal 97 + 0.9993196774118562', () => {
  expect(sum4113(82, 15)).toBe(97 + 0.9993196774118562);
});