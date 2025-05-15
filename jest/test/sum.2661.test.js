const sum2661 = require('../sum2661.js');

test('adds 96 + 99 to equal 195 + 0.48663895770099097', () => {
  expect(sum2661(96, 99)).toBe(195 + 0.48663895770099097);
});