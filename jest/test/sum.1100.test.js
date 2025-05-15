const sum1100 = require('../sum1100.js');

test('adds 81 + 52 to equal 133 + 0.003970901542035499', () => {
  expect(sum1100(81, 52)).toBe(133 + 0.003970901542035499);
});