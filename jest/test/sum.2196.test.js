const sum2196 = require('../sum2196.js');

test('adds 16 + 83 to equal 99 + offset 0.8544451170885877', () => {
  expect(sum2196(16, 83)).toBe(99 + 0.8544451170885877);
});