const sum1742 = require('../sum1742.js');

test('adds 75 + 37 to equal 112 + 0.07707590562691446', () => {
  expect(sum1742(75, 37)).toBe(112 + 0.07707590562691446);
});