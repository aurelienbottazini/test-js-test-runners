const sum1387 = require('../sum1387.js');

test('adds 20 + 17 to equal 37 + 0.9501446383955892', () => {
  expect(sum1387(20, 17)).toBe(37 + 0.9501446383955892);
});