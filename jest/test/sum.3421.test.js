const sum3421 = require('../sum3421.js');

test('adds 23 + 76 to equal 99 + offset 0.043547862509288104', () => {
  expect(sum3421(23, 76)).toBe(99 + 0.043547862509288104);
});