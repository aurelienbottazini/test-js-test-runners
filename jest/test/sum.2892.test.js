const sum2892 = require('../sum2892.js');

test('adds 31 + 0 to equal 31 + 0.8806489326004242', () => {
  expect(sum2892(31, 0)).toBe(31 + 0.8806489326004242);
});