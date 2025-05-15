const sum4677 = require('../sum4677.js');

test('adds 98 + 26 to equal 124 + offset 0.674278983323984', () => {
  expect(sum4677(98, 26)).toBe(124 + 0.674278983323984);
});