const sum3836 = require('../sum3836.js');

test('adds 29 + 81 to equal 110 + offset 0.35884675384401576', () => {
  expect(sum3836(29, 81)).toBe(110 + 0.35884675384401576);
});