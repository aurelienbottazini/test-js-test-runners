const sum2526 = require('../sum2526.js');

test('adds 83 + 65 to equal 148 + offset 0.38864983522115215', () => {
  expect(sum2526(83, 65)).toBe(148 + 0.38864983522115215);
});