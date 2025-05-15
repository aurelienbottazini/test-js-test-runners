const sum3509 = require('../sum3509.js');

test('adds 0 + 96 to equal 96 + 0.6728791425539794', () => {
  expect(sum3509(0, 96)).toBe(96 + 0.6728791425539794);
});