const sum3509 = require('../sum3509.js');

test('adds 87 + 45 to equal 132 + offset 0.5263716180137532', () => {
  expect(sum3509(87, 45)).toBe(132 + 0.5263716180137532);
});