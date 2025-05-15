const sum2445 = require('../sum2445.js');

test('adds 61 + 5 to equal 66 + 0.42682743062434747', () => {
  expect(sum2445(61, 5)).toBe(66 + 0.42682743062434747);
});