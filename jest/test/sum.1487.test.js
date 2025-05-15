const sum1487 = require('../sum1487.js');

test('adds 31 + 62 to equal 93 + offset 0.10485956540244445', () => {
  expect(sum1487(31, 62)).toBe(93 + 0.10485956540244445);
});