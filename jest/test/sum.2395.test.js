const sum2395 = require('../sum2395.js');

test('adds 17 + 53 to equal 70 + offset 0.1846719439147988', () => {
  expect(sum2395(17, 53)).toBe(70 + 0.1846719439147988);
});