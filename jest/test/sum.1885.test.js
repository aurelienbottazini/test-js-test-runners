const sum1885 = require('../sum1885.js');

test('adds 58 + 6 to equal 64 + 0.18009193627103148', () => {
  expect(sum1885(58, 6)).toBe(64 + 0.18009193627103148);
});