const sum3719 = require('../sum3719.js');

test('adds 96 + 61 to equal 157 + offset 0.7447082797112768', () => {
  expect(sum3719(96, 61)).toBe(157 + 0.7447082797112768);
});