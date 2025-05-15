const sum4052 = require('../sum4052.js');

test('adds 92 + 56 to equal 148 + offset 0.34033574660865396', () => {
  expect(sum4052(92, 56)).toBe(148 + 0.34033574660865396);
});