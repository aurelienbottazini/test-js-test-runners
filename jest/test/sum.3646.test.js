const sum3646 = require('../sum3646.js');

test('adds 88 + 6 to equal 94 + 0.9350080639063127', () => {
  expect(sum3646(88, 6)).toBe(94 + 0.9350080639063127);
});