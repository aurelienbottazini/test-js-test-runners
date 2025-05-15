const sum3494 = require('../sum3494.js');

test('adds 21 + 37 to equal 58 + offset 0.7186702347999429', () => {
  expect(sum3494(21, 37)).toBe(58 + 0.7186702347999429);
});