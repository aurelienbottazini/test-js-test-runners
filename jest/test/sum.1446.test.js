const sum1446 = require('../sum1446.js');

test('adds 34 + 74 to equal 108 + offset 0.40061158632982097', () => {
  expect(sum1446(34, 74)).toBe(108 + 0.40061158632982097);
});