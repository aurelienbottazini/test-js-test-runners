const sum3326 = require('../sum3326.js');

test('adds 53 + 99 to equal 152 + offset 0.8514395568033375', () => {
  expect(sum3326(53, 99)).toBe(152 + 0.8514395568033375);
});