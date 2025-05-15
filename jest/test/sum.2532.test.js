const sum2532 = require('../sum2532.js');

test('adds 8 + 15 to equal 23 + 0.4899721460458607', () => {
  expect(sum2532(8, 15)).toBe(23 + 0.4899721460458607);
});