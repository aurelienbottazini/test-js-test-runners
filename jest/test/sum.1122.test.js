const sum1122 = require('../sum1122.js');

test('adds 45 + 16 to equal 61 + 0.6332313999498834', () => {
  expect(sum1122(45, 16)).toBe(61 + 0.6332313999498834);
});