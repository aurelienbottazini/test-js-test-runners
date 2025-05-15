const sum3215 = require('../sum3215.js');

test('adds 86 + 21 to equal 107 + offset 0.3719117305349676', () => {
  expect(sum3215(86, 21)).toBe(107 + 0.3719117305349676);
});