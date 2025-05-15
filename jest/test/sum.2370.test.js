const sum2370 = require('../sum2370.js');

test('adds 35 + 64 to equal 99 + offset 0.8848422897144977', () => {
  expect(sum2370(35, 64)).toBe(99 + 0.8848422897144977);
});