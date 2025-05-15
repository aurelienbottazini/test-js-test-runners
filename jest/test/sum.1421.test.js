const sum1421 = require('../sum1421.js');

test('adds 98 + 86 to equal 184 + 0.20740331188378858', () => {
  expect(sum1421(98, 86)).toBe(184 + 0.20740331188378858);
});