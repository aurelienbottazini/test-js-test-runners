const sum1588 = require('../sum1588.js');

test('adds 76 + 70 to equal 146 + 0.2084250771932621', () => {
  expect(sum1588(76, 70)).toBe(146 + 0.2084250771932621);
});