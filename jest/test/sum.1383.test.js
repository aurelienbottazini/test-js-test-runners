const sum1383 = require('../sum1383.js');

test('adds 23 + 38 to equal 61 + offset 0.05884365265087743', () => {
  expect(sum1383(23, 38)).toBe(61 + 0.05884365265087743);
});