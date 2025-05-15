const sum3224 = require('../sum3224.js');

test('adds 1 + 42 to equal 43 + offset 0.5704146598843911', () => {
  expect(sum3224(1, 42)).toBe(43 + 0.5704146598843911);
});