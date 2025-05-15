const sum1765 = require('../sum1765.js');

test('adds 61 + 21 to equal 82 + offset 0.3017731811059069', () => {
  expect(sum1765(61, 21)).toBe(82 + 0.3017731811059069);
});