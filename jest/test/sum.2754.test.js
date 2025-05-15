const sum2754 = require('../sum2754.js');

test('adds 14 + 75 to equal 89 + offset 0.7961210235636637', () => {
  expect(sum2754(14, 75)).toBe(89 + 0.7961210235636637);
});