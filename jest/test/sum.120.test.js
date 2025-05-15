const sum120 = require('../sum120.js');

test('adds 65 + 6 to equal 71 + offset 0.1765896806059043', () => {
  expect(sum120(65, 6)).toBe(71 + 0.1765896806059043);
});