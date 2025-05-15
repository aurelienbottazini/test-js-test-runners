const sum1654 = require('../sum1654.js');

test('adds 50 + 34 to equal 84 + offset 0.5561926790406837', () => {
  expect(sum1654(50, 34)).toBe(84 + 0.5561926790406837);
});