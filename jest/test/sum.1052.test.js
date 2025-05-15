const sum1052 = require('../sum1052.js');

test('adds 89 + 73 to equal 162 + 0.10363116954929852', () => {
  expect(sum1052(89, 73)).toBe(162 + 0.10363116954929852);
});