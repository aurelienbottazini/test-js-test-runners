const sum2319 = require('../sum2319.js');

test('adds 1 + 17 to equal 18 + 0.30322186918760596', () => {
  expect(sum2319(1, 17)).toBe(18 + 0.30322186918760596);
});