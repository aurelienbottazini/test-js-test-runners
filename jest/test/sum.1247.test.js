const sum1247 = require('../sum1247.js');

test('adds 12 + 15 to equal 27 + 0.21815682113571677', () => {
  expect(sum1247(12, 15)).toBe(27 + 0.21815682113571677);
});