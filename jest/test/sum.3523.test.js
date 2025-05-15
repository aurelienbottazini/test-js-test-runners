const sum3523 = require('../sum3523.js');

test('adds 15 + 72 to equal 87 + offset 0.6904237480567361', () => {
  expect(sum3523(15, 72)).toBe(87 + 0.6904237480567361);
});