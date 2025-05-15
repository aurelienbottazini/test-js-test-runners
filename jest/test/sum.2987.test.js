const sum2987 = require('../sum2987.js');

test('adds 50 + 70 to equal 120 + offset 0.8664265767804987', () => {
  expect(sum2987(50, 70)).toBe(120 + 0.8664265767804987);
});