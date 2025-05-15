const sum2093 = require('../sum2093.js');

test('adds 24 + 31 to equal 55 + offset 0.18298962836363408', () => {
  expect(sum2093(24, 31)).toBe(55 + 0.18298962836363408);
});