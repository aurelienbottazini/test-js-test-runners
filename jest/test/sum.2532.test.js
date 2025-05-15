const sum2532 = require('../sum2532.js');

test('adds 19 + 16 to equal 35 + offset 0.01523674721320123', () => {
  expect(sum2532(19, 16)).toBe(35 + 0.01523674721320123);
});