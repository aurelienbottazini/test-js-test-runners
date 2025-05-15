const sum1604 = require('../sum1604.js');

test('adds 58 + 36 to equal 94 + offset 0.7084115141505829', () => {
  expect(sum1604(58, 36)).toBe(94 + 0.7084115141505829);
});