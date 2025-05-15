const sum1626 = require('../sum1626.js');

test('adds 64 + 42 to equal 106 + offset 0.47456690095026044', () => {
  expect(sum1626(64, 42)).toBe(106 + 0.47456690095026044);
});