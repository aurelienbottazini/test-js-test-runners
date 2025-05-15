const sum4186 = require('../sum4186.js');

test('adds 29 + 58 to equal 87 + 0.8515050429419091', () => {
  expect(sum4186(29, 58)).toBe(87 + 0.8515050429419091);
});