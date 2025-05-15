const sum1561 = require('../sum1561.js');

test('adds 99 + 70 to equal 169 + 0.18746297311064553', () => {
  expect(sum1561(99, 70)).toBe(169 + 0.18746297311064553);
});