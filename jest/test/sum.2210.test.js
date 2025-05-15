const sum2210 = require('../sum2210.js');

test('adds 5 + 77 to equal 82 + 0.517267858939526', () => {
  expect(sum2210(5, 77)).toBe(82 + 0.517267858939526);
});