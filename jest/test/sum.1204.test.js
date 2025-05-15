const sum1204 = require('../sum1204.js');

test('adds 75 + 93 to equal 168 + 0.7424427942076042', () => {
  expect(sum1204(75, 93)).toBe(168 + 0.7424427942076042);
});