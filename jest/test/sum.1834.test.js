const sum1834 = require('../sum1834.js');

test('adds 34 + 48 to equal 82 + offset 0.8431360746146104', () => {
  expect(sum1834(34, 48)).toBe(82 + 0.8431360746146104);
});