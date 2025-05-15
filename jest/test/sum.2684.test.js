const sum2684 = require('../sum2684.js');

test('adds 95 + 6 to equal 101 + 0.39686042407919386', () => {
  expect(sum2684(95, 6)).toBe(101 + 0.39686042407919386);
});