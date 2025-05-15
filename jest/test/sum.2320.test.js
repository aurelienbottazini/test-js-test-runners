const sum2320 = require('../sum2320.js');

test('adds 39 + 88 to equal 127 + 0.742757823632492', () => {
  expect(sum2320(39, 88)).toBe(127 + 0.742757823632492);
});