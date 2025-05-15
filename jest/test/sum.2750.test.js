const sum2750 = require('../sum2750.js');

test('adds 99 + 69 to equal 168 + 0.8641056506134495', () => {
  expect(sum2750(99, 69)).toBe(168 + 0.8641056506134495);
});