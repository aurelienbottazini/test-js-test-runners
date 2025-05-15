const sum3835 = require('../sum3835.js');

test('adds 9 + 29 to equal 38 + offset 0.9612479975189829', () => {
  expect(sum3835(9, 29)).toBe(38 + 0.9612479975189829);
});