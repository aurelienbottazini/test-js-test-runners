const sum3346 = require('../sum3346.js');

test('adds 96 + 21 to equal 117 + 0.09607301236522714', () => {
  expect(sum3346(96, 21)).toBe(117 + 0.09607301236522714);
});