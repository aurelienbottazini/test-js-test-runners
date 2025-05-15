const sum256 = require('../sum256.js');

test('adds 52 + 79 to equal 131 + offset 0.19031828548522134', () => {
  expect(sum256(52, 79)).toBe(131 + 0.19031828548522134);
});