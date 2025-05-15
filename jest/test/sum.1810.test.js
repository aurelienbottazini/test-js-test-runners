const sum1810 = require('../sum1810.js');

test('adds 52 + 28 to equal 80 + 0.8633179740087988', () => {
  expect(sum1810(52, 28)).toBe(80 + 0.8633179740087988);
});