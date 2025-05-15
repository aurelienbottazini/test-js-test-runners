const sum1133 = require('../sum1133.js');

test('adds 82 + 58 to equal 140 + offset 0.5122427664961429', () => {
  expect(sum1133(82, 58)).toBe(140 + 0.5122427664961429);
});