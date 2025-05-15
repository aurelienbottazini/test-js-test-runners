const sum2846 = require('../sum2846.js');

test('adds 96 + 44 to equal 140 + offset 0.10098797988636765', () => {
  expect(sum2846(96, 44)).toBe(140 + 0.10098797988636765);
});