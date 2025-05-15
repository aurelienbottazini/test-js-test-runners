const sum1036 = require('../sum1036.js');

test('adds 81 + 62 to equal 143 + offset 0.7954916635413123', () => {
  expect(sum1036(81, 62)).toBe(143 + 0.7954916635413123);
});