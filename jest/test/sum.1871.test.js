const sum1871 = require('../sum1871.js');

test('adds 91 + 40 to equal 131 + offset 0.841820399220275', () => {
  expect(sum1871(91, 40)).toBe(131 + 0.841820399220275);
});