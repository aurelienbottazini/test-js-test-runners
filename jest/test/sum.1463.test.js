const sum1463 = require('../sum1463.js');

test('adds 9 + 92 to equal 101 + offset 0.0943931202443612', () => {
  expect(sum1463(9, 92)).toBe(101 + 0.0943931202443612);
});