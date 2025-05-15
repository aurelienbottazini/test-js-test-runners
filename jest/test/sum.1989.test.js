const sum1989 = require('../sum1989.js');

test('adds 95 + 27 to equal 122 + offset 0.07392461666992822', () => {
  expect(sum1989(95, 27)).toBe(122 + 0.07392461666992822);
});