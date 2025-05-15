const sum4093 = require('../sum4093.js');

test('adds 57 + 82 to equal 139 + 0.5023027362917064', () => {
  expect(sum4093(57, 82)).toBe(139 + 0.5023027362917064);
});