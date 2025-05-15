const sum848 = require('../sum848.js');

test('adds 98 + 52 to equal 150 + 0.23093298338911972', () => {
  expect(sum848(98, 52)).toBe(150 + 0.23093298338911972);
});