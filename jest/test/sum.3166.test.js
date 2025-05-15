const sum3166 = require('../sum3166.js');

test('adds 92 + 89 to equal 181 + offset 0.4366947896646848', () => {
  expect(sum3166(92, 89)).toBe(181 + 0.4366947896646848);
});