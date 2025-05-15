const sum2301 = require('../sum2301.js');

test('adds 51 + 88 to equal 139 + 0.7073355722296183', () => {
  expect(sum2301(51, 88)).toBe(139 + 0.7073355722296183);
});