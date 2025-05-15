const sum1273 = require('../sum1273.js');

test('adds 18 + 21 to equal 39 + 0.19298793833928451', () => {
  expect(sum1273(18, 21)).toBe(39 + 0.19298793833928451);
});