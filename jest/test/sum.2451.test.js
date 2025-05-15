const sum2451 = require('../sum2451.js');

test('adds 65 + 38 to equal 103 + offset 0.9567153747907571', () => {
  expect(sum2451(65, 38)).toBe(103 + 0.9567153747907571);
});