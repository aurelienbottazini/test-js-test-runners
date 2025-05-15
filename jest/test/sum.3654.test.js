const sum3654 = require('../sum3654.js');

test('adds 19 + 34 to equal 53 + offset 0.44329703997942316', () => {
  expect(sum3654(19, 34)).toBe(53 + 0.44329703997942316);
});