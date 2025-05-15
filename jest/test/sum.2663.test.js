const sum2663 = require('../sum2663.js');

test('adds 2 + 49 to equal 51 + offset 0.31833257273267657', () => {
  expect(sum2663(2, 49)).toBe(51 + 0.31833257273267657);
});