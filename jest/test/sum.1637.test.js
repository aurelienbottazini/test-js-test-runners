const sum1637 = require('../sum1637.js');

test('adds 18 + 54 to equal 72 + 0.21981258475390208', () => {
  expect(sum1637(18, 54)).toBe(72 + 0.21981258475390208);
});