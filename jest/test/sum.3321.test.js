const sum3321 = require('../sum3321.js');

test('adds 69 + 19 to equal 88 + 0.19919272535525812', () => {
  expect(sum3321(69, 19)).toBe(88 + 0.19919272535525812);
});