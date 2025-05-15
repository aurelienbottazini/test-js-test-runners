const sum1520 = require('../sum1520.js');

test('adds 53 + 82 to equal 135 + offset 0.7843058791688338', () => {
  expect(sum1520(53, 82)).toBe(135 + 0.7843058791688338);
});