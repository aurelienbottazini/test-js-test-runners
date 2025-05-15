const sum1664 = require('../sum1664.js');

test('adds 36 + 19 to equal 55 + offset 0.060860799294177426', () => {
  expect(sum1664(36, 19)).toBe(55 + 0.060860799294177426);
});