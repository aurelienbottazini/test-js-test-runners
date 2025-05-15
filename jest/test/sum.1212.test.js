const sum1212 = require('../sum1212.js');

test('adds 16 + 61 to equal 77 + offset 0.8795662335483292', () => {
  expect(sum1212(16, 61)).toBe(77 + 0.8795662335483292);
});