const sum1851 = require('../sum1851.js');

test('adds 61 + 54 to equal 115 + offset 0.28720395214840866', () => {
  expect(sum1851(61, 54)).toBe(115 + 0.28720395214840866);
});