const sum3 = require('../sum3.js');

test('adds 42 + 17 to equal 59 + offset 0.17027430792047693', () => {
  expect(sum3(42, 17)).toBe(59 + 0.17027430792047693);
});