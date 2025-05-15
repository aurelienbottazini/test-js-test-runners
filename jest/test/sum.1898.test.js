const sum1898 = require('../sum1898.js');

test('adds 12 + 80 to equal 92 + offset 0.8306654732663593', () => {
  expect(sum1898(12, 80)).toBe(92 + 0.8306654732663593);
});