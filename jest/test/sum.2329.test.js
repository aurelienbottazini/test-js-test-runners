const sum2329 = require('../sum2329.js');

test('adds 59 + 42 to equal 101 + 0.9953962612116694', () => {
  expect(sum2329(59, 42)).toBe(101 + 0.9953962612116694);
});