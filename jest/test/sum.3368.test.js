const sum3368 = require('../sum3368.js');

test('adds 31 + 9 to equal 40 + offset 0.7543570437706829', () => {
  expect(sum3368(31, 9)).toBe(40 + 0.7543570437706829);
});