const sum1323 = require('../sum1323.js');

test('adds 16 + 50 to equal 66 + 0.7369948735780132', () => {
  expect(sum1323(16, 50)).toBe(66 + 0.7369948735780132);
});