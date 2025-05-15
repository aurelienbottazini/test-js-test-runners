const sum1720 = require('../sum1720.js');

test('adds 99 + 80 to equal 179 + offset 0.41826645702364507', () => {
  expect(sum1720(99, 80)).toBe(179 + 0.41826645702364507);
});