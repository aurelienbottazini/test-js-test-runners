const sum2521 = require('../sum2521.js');

test('adds 42 + 17 to equal 59 + 0.38022412402891903', () => {
  expect(sum2521(42, 17)).toBe(59 + 0.38022412402891903);
});