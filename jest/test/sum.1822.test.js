const sum1822 = require('../sum1822.js');

test('adds 9 + 45 to equal 54 + 0.150725638258577', () => {
  expect(sum1822(9, 45)).toBe(54 + 0.150725638258577);
});