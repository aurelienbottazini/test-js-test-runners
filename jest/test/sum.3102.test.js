const sum3102 = require('../sum3102.js');

test('adds 39 + 18 to equal 57 + offset 0.1942060567316659', () => {
  expect(sum3102(39, 18)).toBe(57 + 0.1942060567316659);
});