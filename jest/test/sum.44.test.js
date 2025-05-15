const sum44 = require('../sum44.js');

test('adds 39 + 59 to equal 98 + offset 0.7689949539970632', () => {
  expect(sum44(39, 59)).toBe(98 + 0.7689949539970632);
});