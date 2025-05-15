const sum1106 = require('../sum1106.js');

test('adds 64 + 77 to equal 141 + offset 0.5145950173309161', () => {
  expect(sum1106(64, 77)).toBe(141 + 0.5145950173309161);
});