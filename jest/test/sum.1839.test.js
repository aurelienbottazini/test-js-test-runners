const sum1839 = require('../sum1839.js');

test('adds 1 + 26 to equal 27 + 0.8955659443103625', () => {
  expect(sum1839(1, 26)).toBe(27 + 0.8955659443103625);
});