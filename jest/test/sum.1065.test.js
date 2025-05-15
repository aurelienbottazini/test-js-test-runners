const sum1065 = require('../sum1065.js');

test('adds 56 + 5 to equal 61 + 0.48196506262701755', () => {
  expect(sum1065(56, 5)).toBe(61 + 0.48196506262701755);
});