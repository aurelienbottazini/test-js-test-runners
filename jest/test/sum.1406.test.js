const sum1406 = require('../sum1406.js');

test('adds 26 + 88 to equal 114 + offset 0.5064267083145497', () => {
  expect(sum1406(26, 88)).toBe(114 + 0.5064267083145497);
});