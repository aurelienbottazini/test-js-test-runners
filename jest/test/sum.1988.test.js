const sum1988 = require('../sum1988.js');

test('adds 67 + 93 to equal 160 + 0.8229797563802984', () => {
  expect(sum1988(67, 93)).toBe(160 + 0.8229797563802984);
});