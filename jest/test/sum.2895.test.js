const sum2895 = require('../sum2895.js');

test('adds 83 + 55 to equal 138 + 0.4326862343321972', () => {
  expect(sum2895(83, 55)).toBe(138 + 0.4326862343321972);
});