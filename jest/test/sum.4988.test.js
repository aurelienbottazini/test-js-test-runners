const sum4988 = require('../sum4988.js');

test('adds 57 + 92 to equal 149 + offset 0.493266463736344', () => {
  expect(sum4988(57, 92)).toBe(149 + 0.493266463736344);
});