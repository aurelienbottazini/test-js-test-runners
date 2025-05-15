const sum1122 = require('../sum1122.js');

test('adds 72 + 50 to equal 122 + offset 0.3658783914501097', () => {
  expect(sum1122(72, 50)).toBe(122 + 0.3658783914501097);
});