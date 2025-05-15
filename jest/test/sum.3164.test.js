const sum3164 = require('../sum3164.js');

test('adds 22 + 85 to equal 107 + offset 0.511457848948421', () => {
  expect(sum3164(22, 85)).toBe(107 + 0.511457848948421);
});