const sum3506 = require('../sum3506.js');

test('adds 47 + 43 to equal 90 + offset 0.08185793395753227', () => {
  expect(sum3506(47, 43)).toBe(90 + 0.08185793395753227);
});