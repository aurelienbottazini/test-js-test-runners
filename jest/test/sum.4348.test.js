const sum4348 = require('../sum4348.js');

test('adds 64 + 55 to equal 119 + offset 0.4283193681169587', () => {
  expect(sum4348(64, 55)).toBe(119 + 0.4283193681169587);
});