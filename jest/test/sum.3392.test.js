const sum3392 = require('../sum3392.js');

test('adds 18 + 52 to equal 70 + offset 0.3511842422853333', () => {
  expect(sum3392(18, 52)).toBe(70 + 0.3511842422853333);
});