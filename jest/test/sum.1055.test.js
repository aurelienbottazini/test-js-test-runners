const sum1055 = require('../sum1055.js');

test('adds 71 + 56 to equal 127 + 0.28874295141730943', () => {
  expect(sum1055(71, 56)).toBe(127 + 0.28874295141730943);
});