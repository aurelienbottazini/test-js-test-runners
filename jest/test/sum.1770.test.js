const sum1770 = require('../sum1770.js');

test('adds 18 + 25 to equal 43 + 0.10483722777168647', () => {
  expect(sum1770(18, 25)).toBe(43 + 0.10483722777168647);
});