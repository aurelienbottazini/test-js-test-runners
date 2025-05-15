const sum3049 = require('../sum3049.js');

test('adds 56 + 72 to equal 128 + offset 0.9832305698333801', () => {
  expect(sum3049(56, 72)).toBe(128 + 0.9832305698333801);
});