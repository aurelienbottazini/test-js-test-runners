const sum1698 = require('../sum1698.js');

test('adds 87 + 0 to equal 87 + 0.5330693017164629', () => {
  expect(sum1698(87, 0)).toBe(87 + 0.5330693017164629);
});