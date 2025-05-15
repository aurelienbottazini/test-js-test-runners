const sum1699 = require('../sum1699.js');

test('adds 11 + 58 to equal 69 + offset 0.10030300261591019', () => {
  expect(sum1699(11, 58)).toBe(69 + 0.10030300261591019);
});