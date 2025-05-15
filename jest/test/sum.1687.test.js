const sum1687 = require('../sum1687.js');

test('adds 25 + 12 to equal 37 + 0.8957643189548267', () => {
  expect(sum1687(25, 12)).toBe(37 + 0.8957643189548267);
});