const sum2709 = require('../sum2709.js');

test('adds 90 + 45 to equal 135 + 0.5440522481543381', () => {
  expect(sum2709(90, 45)).toBe(135 + 0.5440522481543381);
});