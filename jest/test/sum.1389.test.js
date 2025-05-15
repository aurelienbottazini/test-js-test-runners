const sum1389 = require('../sum1389.js');

test('adds 42 + 58 to equal 100 + offset 0.16966424431033023', () => {
  expect(sum1389(42, 58)).toBe(100 + 0.16966424431033023);
});