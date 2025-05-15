const sum3050 = require('../sum3050.js');

test('adds 4 + 25 to equal 29 + 0.8963038417412676', () => {
  expect(sum3050(4, 25)).toBe(29 + 0.8963038417412676);
});