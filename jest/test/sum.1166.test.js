const sum1166 = require('../sum1166.js');

test('adds 37 + 10 to equal 47 + 0.8601680513719703', () => {
  expect(sum1166(37, 10)).toBe(47 + 0.8601680513719703);
});