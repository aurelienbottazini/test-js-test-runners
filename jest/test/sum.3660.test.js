const sum3660 = require('../sum3660.js');

test('adds 96 + 2 to equal 98 + offset 0.7407603619400802', () => {
  expect(sum3660(96, 2)).toBe(98 + 0.7407603619400802);
});