const sum1005 = require('../sum1005.js');

test('adds 61 + 31 to equal 92 + offset 0.5189735034621213', () => {
  expect(sum1005(61, 31)).toBe(92 + 0.5189735034621213);
});