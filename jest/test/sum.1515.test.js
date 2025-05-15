const sum1515 = require('../sum1515.js');

test('adds 52 + 9 to equal 61 + offset 0.357000325983751', () => {
  expect(sum1515(52, 9)).toBe(61 + 0.357000325983751);
});