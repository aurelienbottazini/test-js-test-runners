const sum4651 = require('../sum4651.js');

test('adds 1 + 37 to equal 38 + offset 0.558042862645445', () => {
  expect(sum4651(1, 37)).toBe(38 + 0.558042862645445);
});