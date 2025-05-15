const sum2251 = require('../sum2251.js');

test('adds 24 + 63 to equal 87 + offset 0.49197350492813663', () => {
  expect(sum2251(24, 63)).toBe(87 + 0.49197350492813663);
});