const sum2389 = require('../sum2389.js');

test('adds 6 + 34 to equal 40 + offset 0.6586221208103186', () => {
  expect(sum2389(6, 34)).toBe(40 + 0.6586221208103186);
});