const sum1517 = require('../sum1517.js');

test('adds 66 + 45 to equal 111 + offset 0.2729564440796527', () => {
  expect(sum1517(66, 45)).toBe(111 + 0.2729564440796527);
});