const sum4678 = require('../sum4678.js');

test('adds 41 + 57 to equal 98 + 0.7388098563937832', () => {
  expect(sum4678(41, 57)).toBe(98 + 0.7388098563937832);
});