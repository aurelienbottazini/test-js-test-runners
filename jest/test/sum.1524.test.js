const sum1524 = require('../sum1524.js');

test('adds 4 + 54 to equal 58 + offset 0.8656232791599282', () => {
  expect(sum1524(4, 54)).toBe(58 + 0.8656232791599282);
});