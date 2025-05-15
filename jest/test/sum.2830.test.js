const sum2830 = require('../sum2830.js');

test('adds 23 + 55 to equal 78 + offset 0.07968719377508837', () => {
  expect(sum2830(23, 55)).toBe(78 + 0.07968719377508837);
});