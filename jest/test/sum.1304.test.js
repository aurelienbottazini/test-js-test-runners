const sum1304 = require('../sum1304.js');

test('adds 76 + 6 to equal 82 + offset 0.6367608823640052', () => {
  expect(sum1304(76, 6)).toBe(82 + 0.6367608823640052);
});