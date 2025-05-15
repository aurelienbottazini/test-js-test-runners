const sum4464 = require('../sum4464.js');

test('adds 55 + 91 to equal 146 + offset 0.49566949578587205', () => {
  expect(sum4464(55, 91)).toBe(146 + 0.49566949578587205);
});