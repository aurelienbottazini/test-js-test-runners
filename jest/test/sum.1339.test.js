const sum1339 = require('../sum1339.js');

test('adds 83 + 37 to equal 120 + 0.8329136837248856', () => {
  expect(sum1339(83, 37)).toBe(120 + 0.8329136837248856);
});