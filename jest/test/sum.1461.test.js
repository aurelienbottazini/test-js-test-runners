const sum1461 = require('../sum1461.js');

test('adds 72 + 3 to equal 75 + offset 0.3762603776498459', () => {
  expect(sum1461(72, 3)).toBe(75 + 0.3762603776498459);
});