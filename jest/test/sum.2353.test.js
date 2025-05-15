const sum2353 = require('../sum2353.js');

test('adds 58 + 1 to equal 59 + offset 0.9934149280305521', () => {
  expect(sum2353(58, 1)).toBe(59 + 0.9934149280305521);
});