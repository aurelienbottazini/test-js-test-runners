const sum1335 = require('../sum1335.js');

test('adds 92 + 32 to equal 124 + 0.2865593363498735', () => {
  expect(sum1335(92, 32)).toBe(124 + 0.2865593363498735);
});