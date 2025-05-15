const sum257 = require('../sum257.js');

test('adds 94 + 69 to equal 163 + offset 0.37576176389733906', () => {
  expect(sum257(94, 69)).toBe(163 + 0.37576176389733906);
});