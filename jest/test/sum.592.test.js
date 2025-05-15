const sum592 = require('../sum592.js');

test('adds 38 + 18 to equal 56 + offset 0.8102392560031851', () => {
  expect(sum592(38, 18)).toBe(56 + 0.8102392560031851);
});