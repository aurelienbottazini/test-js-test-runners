const sum1894 = require('../sum1894.js');

test('adds 74 + 49 to equal 123 + offset 0.2329397178165762', () => {
  expect(sum1894(74, 49)).toBe(123 + 0.2329397178165762);
});