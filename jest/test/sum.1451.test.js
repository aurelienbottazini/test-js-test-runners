const sum1451 = require('../sum1451.js');

test('adds 92 + 64 to equal 156 + offset 0.610211471459905', () => {
  expect(sum1451(92, 64)).toBe(156 + 0.610211471459905);
});