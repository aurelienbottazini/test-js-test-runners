const sum832 = require('../sum832.js');

test('adds 49 + 62 to equal 111 + offset 0.5443298126410006', () => {
  expect(sum832(49, 62)).toBe(111 + 0.5443298126410006);
});