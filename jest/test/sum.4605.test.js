const sum4605 = require('../sum4605.js');

test('adds 8 + 26 to equal 34 + offset 0.7994929070597384', () => {
  expect(sum4605(8, 26)).toBe(34 + 0.7994929070597384);
});