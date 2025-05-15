const sum2190 = require('../sum2190.js');

test('adds 89 + 49 to equal 138 + offset 0.8518839210957543', () => {
  expect(sum2190(89, 49)).toBe(138 + 0.8518839210957543);
});