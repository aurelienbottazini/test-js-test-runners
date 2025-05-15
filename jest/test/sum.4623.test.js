const sum4623 = require('../sum4623.js');

test('adds 81 + 34 to equal 115 + offset 0.24584731070595978', () => {
  expect(sum4623(81, 34)).toBe(115 + 0.24584731070595978);
});