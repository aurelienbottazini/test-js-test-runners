const sum1527 = require('../sum1527.js');

test('adds 13 + 10 to equal 23 + 0.5525911706552581', () => {
  expect(sum1527(13, 10)).toBe(23 + 0.5525911706552581);
});