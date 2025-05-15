const sum1447 = require('../sum1447.js');

test('adds 92 + 32 to equal 124 + offset 0.01088234628523943', () => {
  expect(sum1447(92, 32)).toBe(124 + 0.01088234628523943);
});