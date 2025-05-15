const sum3995 = require('../sum3995.js');

test('adds 90 + 10 to equal 100 + 0.34786315802294343', () => {
  expect(sum3995(90, 10)).toBe(100 + 0.34786315802294343);
});