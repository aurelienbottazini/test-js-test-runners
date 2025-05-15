const sum4903 = require('../sum4903.js');

test('adds 56 + 38 to equal 94 + 0.37364729353349113', () => {
  expect(sum4903(56, 38)).toBe(94 + 0.37364729353349113);
});