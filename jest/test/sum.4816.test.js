const sum4816 = require('../sum4816.js');

test('adds 39 + 56 to equal 95 + offset 0.6899068672400639', () => {
  expect(sum4816(39, 56)).toBe(95 + 0.6899068672400639);
});