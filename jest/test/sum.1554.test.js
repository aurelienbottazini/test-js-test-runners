const sum1554 = require('../sum1554.js');

test('adds 33 + 42 to equal 75 + offset 0.1133878411127186', () => {
  expect(sum1554(33, 42)).toBe(75 + 0.1133878411127186);
});