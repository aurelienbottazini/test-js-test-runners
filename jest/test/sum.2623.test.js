const sum2623 = require('../sum2623.js');

test('adds 14 + 18 to equal 32 + 0.22829320190709412', () => {
  expect(sum2623(14, 18)).toBe(32 + 0.22829320190709412);
});