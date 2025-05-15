const sum1694 = require('../sum1694.js');

test('adds 37 + 43 to equal 80 + offset 0.6576053685766079', () => {
  expect(sum1694(37, 43)).toBe(80 + 0.6576053685766079);
});