const sum2430 = require('../sum2430.js');

test('adds 39 + 92 to equal 131 + 0.5043621102255756', () => {
  expect(sum2430(39, 92)).toBe(131 + 0.5043621102255756);
});