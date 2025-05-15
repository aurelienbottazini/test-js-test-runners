const sum1279 = require('../sum1279.js');

test('adds 15 + 19 to equal 34 + 0.04255021371640688', () => {
  expect(sum1279(15, 19)).toBe(34 + 0.04255021371640688);
});