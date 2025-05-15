const sum1740 = require('../sum1740.js');

test('adds 57 + 37 to equal 94 + 0.3692274789737352', () => {
  expect(sum1740(57, 37)).toBe(94 + 0.3692274789737352);
});