const sum4291 = require('../sum4291.js');

test('adds 60 + 64 to equal 124 + 0.28817372946965314', () => {
  expect(sum4291(60, 64)).toBe(124 + 0.28817372946965314);
});