const sum1128 = require('../sum1128.js');

test('adds 63 + 79 to equal 142 + offset 0.20474486048268947', () => {
  expect(sum1128(63, 79)).toBe(142 + 0.20474486048268947);
});