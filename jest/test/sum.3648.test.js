const sum3648 = require('../sum3648.js');

test('adds 54 + 98 to equal 152 + offset 0.29206278651045625', () => {
  expect(sum3648(54, 98)).toBe(152 + 0.29206278651045625);
});