const sum3550 = require('../sum3550.js');

test('adds 71 + 48 to equal 119 + 0.925516508128095', () => {
  expect(sum3550(71, 48)).toBe(119 + 0.925516508128095);
});