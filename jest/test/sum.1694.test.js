const sum1694 = require('../sum1694.js');

test('adds 43 + 92 to equal 135 + 0.005177916255885151', () => {
  expect(sum1694(43, 92)).toBe(135 + 0.005177916255885151);
});