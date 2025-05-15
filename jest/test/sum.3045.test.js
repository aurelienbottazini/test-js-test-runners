const sum3045 = require('../sum3045.js');

test('adds 10 + 70 to equal 80 + offset 0.5538698602223625', () => {
  expect(sum3045(10, 70)).toBe(80 + 0.5538698602223625);
});