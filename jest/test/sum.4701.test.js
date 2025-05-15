const sum4701 = require('../sum4701.js');

test('adds 91 + 32 to equal 123 + offset 0.22448188120979629', () => {
  expect(sum4701(91, 32)).toBe(123 + 0.22448188120979629);
});