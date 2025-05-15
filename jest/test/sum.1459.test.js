const sum1459 = require('../sum1459.js');

test('adds 49 + 23 to equal 72 + offset 0.46773519586084533', () => {
  expect(sum1459(49, 23)).toBe(72 + 0.46773519586084533);
});