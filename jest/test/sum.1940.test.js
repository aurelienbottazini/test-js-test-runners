const sum1940 = require('../sum1940.js');

test('adds 96 + 98 to equal 194 + 0.21714427839759898', () => {
  expect(sum1940(96, 98)).toBe(194 + 0.21714427839759898);
});