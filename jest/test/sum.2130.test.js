const sum2130 = require('../sum2130.js');

test('adds 34 + 85 to equal 119 + 0.030369582084092017', () => {
  expect(sum2130(34, 85)).toBe(119 + 0.030369582084092017);
});