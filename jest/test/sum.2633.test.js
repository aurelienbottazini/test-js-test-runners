const sum2633 = require('../sum2633.js');

test('adds 58 + 29 to equal 87 + 0.8312326723269661', () => {
  expect(sum2633(58, 29)).toBe(87 + 0.8312326723269661);
});