const sum1663 = require('../sum1663.js');

test('adds 20 + 36 to equal 56 + offset 0.8713304645238316', () => {
  expect(sum1663(20, 36)).toBe(56 + 0.8713304645238316);
});