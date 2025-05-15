const sum1983 = require('../sum1983.js');

test('adds 23 + 71 to equal 94 + 0.7552267660729369', () => {
  expect(sum1983(23, 71)).toBe(94 + 0.7552267660729369);
});