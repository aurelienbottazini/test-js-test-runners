const sum1937 = require('../sum1937.js');

test('adds 35 + 2 to equal 37 + 0.9749373977759607', () => {
  expect(sum1937(35, 2)).toBe(37 + 0.9749373977759607);
});