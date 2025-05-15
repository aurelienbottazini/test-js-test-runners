const sum1135 = require('../sum1135.js');

test('adds 51 + 85 to equal 136 + offset 0.046739735768183355', () => {
  expect(sum1135(51, 85)).toBe(136 + 0.046739735768183355);
});