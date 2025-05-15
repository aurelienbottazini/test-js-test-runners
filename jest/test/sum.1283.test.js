const sum1283 = require('../sum1283.js');

test('adds 83 + 66 to equal 149 + offset 0.425872334564681', () => {
  expect(sum1283(83, 66)).toBe(149 + 0.425872334564681);
});