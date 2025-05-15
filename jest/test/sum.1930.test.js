const sum1930 = require('../sum1930.js');

test('adds 11 + 89 to equal 100 + offset 0.0037058583077170804', () => {
  expect(sum1930(11, 89)).toBe(100 + 0.0037058583077170804);
});