const sum3453 = require('../sum3453.js');

test('adds 63 + 77 to equal 140 + offset 0.6125634887312129', () => {
  expect(sum3453(63, 77)).toBe(140 + 0.6125634887312129);
});