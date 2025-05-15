const sum894 = require('../sum894.js');

test('adds 36 + 96 to equal 132 + 0.5968311064533984', () => {
  expect(sum894(36, 96)).toBe(132 + 0.5968311064533984);
});