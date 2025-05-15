const sum3334 = require('../sum3334.js');

test('adds 52 + 0 to equal 52 + offset 0.9647099308796325', () => {
  expect(sum3334(52, 0)).toBe(52 + 0.9647099308796325);
});