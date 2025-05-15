const sum2710 = require('../sum2710.js');

test('adds 4 + 28 to equal 32 + offset 0.7138734997178139', () => {
  expect(sum2710(4, 28)).toBe(32 + 0.7138734997178139);
});