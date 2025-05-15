const sum1834 = require('../sum1834.js');

test('adds 3 + 55 to equal 58 + 0.34516060578223773', () => {
  expect(sum1834(3, 55)).toBe(58 + 0.34516060578223773);
});