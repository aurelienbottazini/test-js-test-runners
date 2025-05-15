const sum3744 = require('../sum3744.js');

test('adds 42 + 78 to equal 120 + 0.12187883046298342', () => {
  expect(sum3744(42, 78)).toBe(120 + 0.12187883046298342);
});