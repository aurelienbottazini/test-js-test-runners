const sum1612 = require('../sum1612.js');

test('adds 68 + 2 to equal 70 + 0.6557167831197607', () => {
  expect(sum1612(68, 2)).toBe(70 + 0.6557167831197607);
});