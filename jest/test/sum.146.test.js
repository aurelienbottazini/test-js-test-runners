const sum146 = require('../sum146.js');

test('adds 77 + 26 to equal 103 + offset 0.4092545417715422', () => {
  expect(sum146(77, 26)).toBe(103 + 0.4092545417715422);
});