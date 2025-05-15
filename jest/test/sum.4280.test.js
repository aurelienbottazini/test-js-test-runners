const sum4280 = require('../sum4280.js');

test('adds 4 + 53 to equal 57 + offset 0.424264058983265', () => {
  expect(sum4280(4, 53)).toBe(57 + 0.424264058983265);
});