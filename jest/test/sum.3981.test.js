const sum3981 = require('../sum3981.js');

test('adds 22 + 99 to equal 121 + offset 0.38683457999318194', () => {
  expect(sum3981(22, 99)).toBe(121 + 0.38683457999318194);
});