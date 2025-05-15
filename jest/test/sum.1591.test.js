const sum1591 = require('../sum1591.js');

test('adds 66 + 40 to equal 106 + 0.2583971628279821', () => {
  expect(sum1591(66, 40)).toBe(106 + 0.2583971628279821);
});