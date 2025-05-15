const sum915 = require('../sum915.js');

test('adds 77 + 10 to equal 87 + 0.8741480122526158', () => {
  expect(sum915(77, 10)).toBe(87 + 0.8741480122526158);
});