const sum1826 = require('../sum1826.js');

test('adds 7 + 27 to equal 34 + 0.19196586312596065', () => {
  expect(sum1826(7, 27)).toBe(34 + 0.19196586312596065);
});