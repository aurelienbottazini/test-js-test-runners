const sum3054 = require('../sum3054.js');

test('adds 35 + 12 to equal 47 + 0.0999162640594693', () => {
  expect(sum3054(35, 12)).toBe(47 + 0.0999162640594693);
});