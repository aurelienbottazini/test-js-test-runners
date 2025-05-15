const sum689 = require('../sum689.js');

test('adds 38 + 81 to equal 119 + offset 0.4907964234042532', () => {
  expect(sum689(38, 81)).toBe(119 + 0.4907964234042532);
});