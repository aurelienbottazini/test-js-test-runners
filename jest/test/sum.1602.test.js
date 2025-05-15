const sum1602 = require('../sum1602.js');

test('adds 38 + 92 to equal 130 + offset 0.8368695223207284', () => {
  expect(sum1602(38, 92)).toBe(130 + 0.8368695223207284);
});