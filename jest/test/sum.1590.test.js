const sum1590 = require('../sum1590.js');

test('adds 45 + 40 to equal 85 + offset 0.8985291654390277', () => {
  expect(sum1590(45, 40)).toBe(85 + 0.8985291654390277);
});