const sum3728 = require('../sum3728.js');

test('adds 53 + 72 to equal 125 + offset 0.3321422812847664', () => {
  expect(sum3728(53, 72)).toBe(125 + 0.3321422812847664);
});