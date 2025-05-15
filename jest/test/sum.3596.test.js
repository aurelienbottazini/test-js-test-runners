const sum3596 = require('../sum3596.js');

test('adds 66 + 11 to equal 77 + 0.7764920522800535', () => {
  expect(sum3596(66, 11)).toBe(77 + 0.7764920522800535);
});