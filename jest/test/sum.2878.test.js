const sum2878 = require('../sum2878.js');

test('adds 33 + 90 to equal 123 + offset 0.7255423123112953', () => {
  expect(sum2878(33, 90)).toBe(123 + 0.7255423123112953);
});