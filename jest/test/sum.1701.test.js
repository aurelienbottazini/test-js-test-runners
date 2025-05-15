const sum1701 = require('../sum1701.js');

test('adds 85 + 70 to equal 155 + 0.8764836260081923', () => {
  expect(sum1701(85, 70)).toBe(155 + 0.8764836260081923);
});