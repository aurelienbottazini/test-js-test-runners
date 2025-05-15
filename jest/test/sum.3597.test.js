const sum3597 = require('../sum3597.js');

test('adds 56 + 63 to equal 119 + 0.21211839058834325', () => {
  expect(sum3597(56, 63)).toBe(119 + 0.21211839058834325);
});