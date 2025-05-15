const sum1770 = require('../sum1770.js');

test('adds 78 + 79 to equal 157 + offset 0.7101989642395733', () => {
  expect(sum1770(78, 79)).toBe(157 + 0.7101989642395733);
});