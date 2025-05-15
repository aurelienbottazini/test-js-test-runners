const sum3922 = require('../sum3922.js');

test('adds 52 + 70 to equal 122 + 0.9742953551677043', () => {
  expect(sum3922(52, 70)).toBe(122 + 0.9742953551677043);
});