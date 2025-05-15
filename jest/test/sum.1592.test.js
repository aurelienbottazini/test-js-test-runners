const sum1592 = require('../sum1592.js');

test('adds 59 + 78 to equal 137 + offset 0.8610021482718857', () => {
  expect(sum1592(59, 78)).toBe(137 + 0.8610021482718857);
});