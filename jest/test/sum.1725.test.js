const sum1725 = require('../sum1725.js');

test('adds 39 + 53 to equal 92 + 0.8725215429854632', () => {
  expect(sum1725(39, 53)).toBe(92 + 0.8725215429854632);
});