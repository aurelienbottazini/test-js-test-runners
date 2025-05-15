const sum4565 = require('../sum4565.js');

test('adds 98 + 72 to equal 170 + 0.24368628193802722', () => {
  expect(sum4565(98, 72)).toBe(170 + 0.24368628193802722);
});