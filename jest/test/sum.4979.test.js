const sum4979 = require('../sum4979.js');

test('adds 34 + 69 to equal 103 + offset 0.8789342696989676', () => {
  expect(sum4979(34, 69)).toBe(103 + 0.8789342696989676);
});