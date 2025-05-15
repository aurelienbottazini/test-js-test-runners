const sum1381 = require('../sum1381.js');

test('adds 24 + 53 to equal 77 + 0.5552237298039499', () => {
  expect(sum1381(24, 53)).toBe(77 + 0.5552237298039499);
});