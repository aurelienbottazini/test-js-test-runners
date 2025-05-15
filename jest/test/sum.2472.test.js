const sum2472 = require('../sum2472.js');

test('adds 24 + 63 to equal 87 + 0.5006799837237991', () => {
  expect(sum2472(24, 63)).toBe(87 + 0.5006799837237991);
});