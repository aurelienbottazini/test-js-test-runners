const sum832 = require('../sum832.js');

test('adds 67 + 26 to equal 93 + 0.12266313567634002', () => {
  expect(sum832(67, 26)).toBe(93 + 0.12266313567634002);
});