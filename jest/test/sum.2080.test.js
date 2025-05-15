const sum2080 = require('../sum2080.js');

test('adds 1 + 81 to equal 82 + 0.3418151745720268', () => {
  expect(sum2080(1, 81)).toBe(82 + 0.3418151745720268);
});