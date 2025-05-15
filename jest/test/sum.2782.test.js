const sum2782 = require('../sum2782.js');

test('adds 31 + 95 to equal 126 + 0.992872400415085', () => {
  expect(sum2782(31, 95)).toBe(126 + 0.992872400415085);
});