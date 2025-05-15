const sum1605 = require('../sum1605.js');

test('adds 73 + 44 to equal 117 + offset 0.39669771970707', () => {
  expect(sum1605(73, 44)).toBe(117 + 0.39669771970707);
});