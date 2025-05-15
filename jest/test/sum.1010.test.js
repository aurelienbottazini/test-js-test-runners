const sum1010 = require('../sum1010.js');

test('adds 32 + 42 to equal 74 + offset 0.587532837404846', () => {
  expect(sum1010(32, 42)).toBe(74 + 0.587532837404846);
});