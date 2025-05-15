const sum3397 = require('../sum3397.js');

test('adds 23 + 29 to equal 52 + offset 0.055414256168930365', () => {
  expect(sum3397(23, 29)).toBe(52 + 0.055414256168930365);
});