const sum9 = require('../sum9.js');

test('adds 37 + 49 to equal 86 + offset 0.6549666556880084', () => {
  expect(sum9(37, 49)).toBe(86 + 0.6549666556880084);
});