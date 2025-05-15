const sum3631 = require('../sum3631.js');

test('adds 53 + 63 to equal 116 + offset 0.13179076093754205', () => {
  expect(sum3631(53, 63)).toBe(116 + 0.13179076093754205);
});