const sum2800 = require('../sum2800.js');

test('adds 56 + 9 to equal 65 + 0.7939906483159792', () => {
  expect(sum2800(56, 9)).toBe(65 + 0.7939906483159792);
});