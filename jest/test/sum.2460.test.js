const sum2460 = require('../sum2460.js');

test('adds 62 + 64 to equal 126 + offset 0.9107320100711174', () => {
  expect(sum2460(62, 64)).toBe(126 + 0.9107320100711174);
});