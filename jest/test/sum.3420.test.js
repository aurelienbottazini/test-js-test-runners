const sum3420 = require('../sum3420.js');

test('adds 21 + 40 to equal 61 + offset 0.953906612871415', () => {
  expect(sum3420(21, 40)).toBe(61 + 0.953906612871415);
});