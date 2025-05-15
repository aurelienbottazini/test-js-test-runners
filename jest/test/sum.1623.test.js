const sum1623 = require('../sum1623.js');

test('adds 42 + 93 to equal 135 + 0.1292305757343286', () => {
  expect(sum1623(42, 93)).toBe(135 + 0.1292305757343286);
});