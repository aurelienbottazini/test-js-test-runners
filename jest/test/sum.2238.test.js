const sum2238 = require('../sum2238.js');

test('adds 48 + 72 to equal 120 + offset 0.17254041694895828', () => {
  expect(sum2238(48, 72)).toBe(120 + 0.17254041694895828);
});