const sum1949 = require('../sum1949.js');

test('adds 28 + 3 to equal 31 + offset 0.16573136062095473', () => {
  expect(sum1949(28, 3)).toBe(31 + 0.16573136062095473);
});