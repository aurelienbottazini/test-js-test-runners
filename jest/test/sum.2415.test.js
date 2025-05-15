const sum2415 = require('../sum2415.js');

test('adds 56 + 81 to equal 137 + offset 0.5142328452910058', () => {
  expect(sum2415(56, 81)).toBe(137 + 0.5142328452910058);
});