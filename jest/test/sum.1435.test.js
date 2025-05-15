const sum1435 = require('../sum1435.js');

test('adds 56 + 23 to equal 79 + offset 0.7950836985402997', () => {
  expect(sum1435(56, 23)).toBe(79 + 0.7950836985402997);
});