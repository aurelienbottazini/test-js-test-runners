const sum3070 = require('../sum3070.js');

test('adds 10 + 58 to equal 68 + offset 0.867801823035132', () => {
  expect(sum3070(10, 58)).toBe(68 + 0.867801823035132);
});