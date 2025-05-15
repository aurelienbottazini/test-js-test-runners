const sum1682 = require('../sum1682.js');

test('adds 17 + 12 to equal 29 + 0.4363754224101817', () => {
  expect(sum1682(17, 12)).toBe(29 + 0.4363754224101817);
});