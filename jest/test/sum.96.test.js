const sum96 = require('../sum96.js');

test('adds 90 + 63 to equal 153 + 0.13396470621007583', () => {
  expect(sum96(90, 63)).toBe(153 + 0.13396470621007583);
});