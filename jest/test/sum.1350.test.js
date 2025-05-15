const sum1350 = require('../sum1350.js');

test('adds 37 + 55 to equal 92 + offset 0.1781794727565038', () => {
  expect(sum1350(37, 55)).toBe(92 + 0.1781794727565038);
});