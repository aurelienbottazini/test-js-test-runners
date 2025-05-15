const sum3908 = require('../sum3908.js');

test('adds 92 + 37 to equal 129 + offset 0.7970353670966327', () => {
  expect(sum3908(92, 37)).toBe(129 + 0.7970353670966327);
});