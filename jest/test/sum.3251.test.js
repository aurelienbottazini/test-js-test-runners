const sum3251 = require('../sum3251.js');

test('adds 53 + 39 to equal 92 + 0.6666318509009554', () => {
  expect(sum3251(53, 39)).toBe(92 + 0.6666318509009554);
});