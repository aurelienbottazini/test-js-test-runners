const sum1925 = require('../sum1925.js');

test('adds 10 + 69 to equal 79 + offset 0.6691055299937999', () => {
  expect(sum1925(10, 69)).toBe(79 + 0.6691055299937999);
});