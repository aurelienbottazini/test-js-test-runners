const sum2915 = require('../sum2915.js');

test('adds 87 + 8 to equal 95 + 0.46454006438122086', () => {
  expect(sum2915(87, 8)).toBe(95 + 0.46454006438122086);
});