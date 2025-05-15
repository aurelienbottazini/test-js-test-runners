const sum1404 = require('../sum1404.js');

test('adds 68 + 2 to equal 70 + offset 0.11473497341836125', () => {
  expect(sum1404(68, 2)).toBe(70 + 0.11473497341836125);
});