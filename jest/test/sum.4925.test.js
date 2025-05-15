const sum4925 = require('../sum4925.js');

test('adds 43 + 27 to equal 70 + 0.49317769284132773', () => {
  expect(sum4925(43, 27)).toBe(70 + 0.49317769284132773);
});