const sum4489 = require('../sum4489.js');

test('adds 56 + 2 to equal 58 + 0.13864835600832115', () => {
  expect(sum4489(56, 2)).toBe(58 + 0.13864835600832115);
});