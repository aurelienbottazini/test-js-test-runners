const sum4639 = require('../sum4639.js');

test('adds 57 + 38 to equal 95 + 0.19227108431760265', () => {
  expect(sum4639(57, 38)).toBe(95 + 0.19227108431760265);
});