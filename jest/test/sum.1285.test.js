const sum1285 = require('../sum1285.js');

test('adds 78 + 24 to equal 102 + offset 0.45152002765466226', () => {
  expect(sum1285(78, 24)).toBe(102 + 0.45152002765466226);
});