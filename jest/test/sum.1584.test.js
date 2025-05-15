const sum1584 = require('../sum1584.js');

test('adds 24 + 70 to equal 94 + 0.04756146716504839', () => {
  expect(sum1584(24, 70)).toBe(94 + 0.04756146716504839);
});