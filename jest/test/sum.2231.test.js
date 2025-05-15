const sum2231 = require('../sum2231.js');

test('adds 53 + 3 to equal 56 + offset 0.5046018427757665', () => {
  expect(sum2231(53, 3)).toBe(56 + 0.5046018427757665);
});