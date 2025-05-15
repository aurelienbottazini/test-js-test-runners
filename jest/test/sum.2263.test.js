const sum2263 = require('../sum2263.js');

test('adds 35 + 14 to equal 49 + offset 0.7896147620869206', () => {
  expect(sum2263(35, 14)).toBe(49 + 0.7896147620869206);
});