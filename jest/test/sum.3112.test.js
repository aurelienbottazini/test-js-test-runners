const sum3112 = require('../sum3112.js');

test('adds 2 + 41 to equal 43 + offset 0.2960894280421039', () => {
  expect(sum3112(2, 41)).toBe(43 + 0.2960894280421039);
});