const sum4605 = require('../sum4605.js');

test('adds 30 + 55 to equal 85 + 0.04958019404623715', () => {
  expect(sum4605(30, 55)).toBe(85 + 0.04958019404623715);
});