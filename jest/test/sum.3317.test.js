const sum3317 = require('../sum3317.js');

test('adds 10 + 12 to equal 22 + 0.0021893060561659627', () => {
  expect(sum3317(10, 12)).toBe(22 + 0.0021893060561659627);
});