const sum123 = require('../sum123.js');

test('adds 92 + 41 to equal 133 + offset 0.18785664007601643', () => {
  expect(sum123(92, 41)).toBe(133 + 0.18785664007601643);
});