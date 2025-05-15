const sum3624 = require('../sum3624.js');

test('adds 24 + 32 to equal 56 + offset 0.08410352116873643', () => {
  expect(sum3624(24, 32)).toBe(56 + 0.08410352116873643);
});