const sum2549 = require('../sum2549.js');

test('adds 12 + 1 to equal 13 + 0.5025903705517027', () => {
  expect(sum2549(12, 1)).toBe(13 + 0.5025903705517027);
});