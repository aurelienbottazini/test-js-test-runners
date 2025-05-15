const sum1903 = require('../sum1903.js');

test('adds 91 + 70 to equal 161 + 0.9012771512407864', () => {
  expect(sum1903(91, 70)).toBe(161 + 0.9012771512407864);
});