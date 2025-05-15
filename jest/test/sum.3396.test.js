const sum3396 = require('../sum3396.js');

test('adds 23 + 52 to equal 75 + 0.258994817479964', () => {
  expect(sum3396(23, 52)).toBe(75 + 0.258994817479964);
});