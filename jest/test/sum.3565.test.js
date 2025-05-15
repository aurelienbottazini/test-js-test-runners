const sum3565 = require('../sum3565.js');

test('adds 5 + 35 to equal 40 + offset 0.6577054253997308', () => {
  expect(sum3565(5, 35)).toBe(40 + 0.6577054253997308);
});