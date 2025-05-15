const sum3022 = require('../sum3022.js');

test('adds 37 + 80 to equal 117 + offset 0.05570943633407144', () => {
  expect(sum3022(37, 80)).toBe(117 + 0.05570943633407144);
});