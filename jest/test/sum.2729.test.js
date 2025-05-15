const sum2729 = require('../sum2729.js');

test('adds 11 + 92 to equal 103 + 0.2084037991005101', () => {
  expect(sum2729(11, 92)).toBe(103 + 0.2084037991005101);
});