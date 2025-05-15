const sum2394 = require('../sum2394.js');

test('adds 36 + 33 to equal 69 + offset 0.9866239973741621', () => {
  expect(sum2394(36, 33)).toBe(69 + 0.9866239973741621);
});