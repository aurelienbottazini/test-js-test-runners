const sum4992 = require('../sum4992.js');

test('adds 2 + 22 to equal 24 + 0.2514211517603333', () => {
  expect(sum4992(2, 22)).toBe(24 + 0.2514211517603333);
});