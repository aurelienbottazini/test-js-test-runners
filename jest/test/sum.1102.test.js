const sum1102 = require('../sum1102.js');

test('adds 5 + 86 to equal 91 + 0.083479972941366', () => {
  expect(sum1102(5, 86)).toBe(91 + 0.083479972941366);
});