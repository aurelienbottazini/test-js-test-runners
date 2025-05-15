const sum1909 = require('../sum1909.js');

test('adds 96 + 74 to equal 170 + 0.6370872148800534', () => {
  expect(sum1909(96, 74)).toBe(170 + 0.6370872148800534);
});