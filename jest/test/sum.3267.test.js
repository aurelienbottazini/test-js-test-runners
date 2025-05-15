const sum3267 = require('../sum3267.js');

test('adds 56 + 45 to equal 101 + offset 0.28798063985665545', () => {
  expect(sum3267(56, 45)).toBe(101 + 0.28798063985665545);
});