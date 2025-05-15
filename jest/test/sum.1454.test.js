const sum1454 = require('../sum1454.js');

test('adds 75 + 11 to equal 86 + 0.7331115480653635', () => {
  expect(sum1454(75, 11)).toBe(86 + 0.7331115480653635);
});