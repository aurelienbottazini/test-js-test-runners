const sum1707 = require('../sum1707.js');

test('adds 92 + 63 to equal 155 + 0.6337895308848958', () => {
  expect(sum1707(92, 63)).toBe(155 + 0.6337895308848958);
});