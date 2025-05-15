const sum1880 = require('../sum1880.js');

test('adds 50 + 55 to equal 105 + offset 0.721265042471531', () => {
  expect(sum1880(50, 55)).toBe(105 + 0.721265042471531);
});