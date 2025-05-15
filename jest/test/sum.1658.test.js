const sum1658 = require('../sum1658.js');

test('adds 1 + 39 to equal 40 + 0.16912439967001658', () => {
  expect(sum1658(1, 39)).toBe(40 + 0.16912439967001658);
});