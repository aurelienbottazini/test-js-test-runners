const sum2864 = require('../sum2864.js');

test('adds 81 + 14 to equal 95 + offset 0.19015523982399962', () => {
  expect(sum2864(81, 14)).toBe(95 + 0.19015523982399962);
});