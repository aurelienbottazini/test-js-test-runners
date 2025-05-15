const sum4046 = require('../sum4046.js');

test('adds 99 + 94 to equal 193 + offset 0.8518612188239905', () => {
  expect(sum4046(99, 94)).toBe(193 + 0.8518612188239905);
});