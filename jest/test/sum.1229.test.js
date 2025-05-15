const sum1229 = require('../sum1229.js');

test('adds 33 + 6 to equal 39 + offset 0.5550026695441532', () => {
  expect(sum1229(33, 6)).toBe(39 + 0.5550026695441532);
});