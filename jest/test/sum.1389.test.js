const sum1389 = require('../sum1389.js');

test('adds 75 + 94 to equal 169 + 0.6026981670405839', () => {
  expect(sum1389(75, 94)).toBe(169 + 0.6026981670405839);
});