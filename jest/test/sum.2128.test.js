const sum2128 = require('../sum2128.js');

test('adds 28 + 50 to equal 78 + 0.7509895602613142', () => {
  expect(sum2128(28, 50)).toBe(78 + 0.7509895602613142);
});