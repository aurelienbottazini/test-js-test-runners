const sum3216 = require('../sum3216.js');

test('adds 9 + 22 to equal 31 + offset 0.9313452019638172', () => {
  expect(sum3216(9, 22)).toBe(31 + 0.9313452019638172);
});