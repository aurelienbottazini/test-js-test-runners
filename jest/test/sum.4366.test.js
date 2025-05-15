const sum4366 = require('../sum4366.js');

test('adds 7 + 92 to equal 99 + 0.6940646534987875', () => {
  expect(sum4366(7, 92)).toBe(99 + 0.6940646534987875);
});