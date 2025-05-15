const sum3581 = require('../sum3581.js');

test('adds 10 + 41 to equal 51 + offset 0.5663438886415482', () => {
  expect(sum3581(10, 41)).toBe(51 + 0.5663438886415482);
});