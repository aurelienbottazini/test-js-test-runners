const sum488 = require('../sum488.js');

test('adds 76 + 41 to equal 117 + offset 0.8223925207089077', () => {
  expect(sum488(76, 41)).toBe(117 + 0.8223925207089077);
});