const sum1267 = require('../sum1267.js');

test('adds 36 + 16 to equal 52 + 0.5967775494484753', () => {
  expect(sum1267(36, 16)).toBe(52 + 0.5967775494484753);
});