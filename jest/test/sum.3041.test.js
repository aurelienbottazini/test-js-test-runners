const sum3041 = require('../sum3041.js');

test('adds 21 + 56 to equal 77 + offset 0.7480944434634976', () => {
  expect(sum3041(21, 56)).toBe(77 + 0.7480944434634976);
});