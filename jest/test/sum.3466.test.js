const sum3466 = require('../sum3466.js');

test('adds 10 + 37 to equal 47 + offset 0.14172272419719578', () => {
  expect(sum3466(10, 37)).toBe(47 + 0.14172272419719578);
});