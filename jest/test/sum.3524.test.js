const sum3524 = require('../sum3524.js');

test('adds 15 + 42 to equal 57 + offset 0.7660045095531549', () => {
  expect(sum3524(15, 42)).toBe(57 + 0.7660045095531549);
});