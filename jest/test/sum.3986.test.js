const sum3986 = require('../sum3986.js');

test('adds 21 + 40 to equal 61 + 0.7962659106195782', () => {
  expect(sum3986(21, 40)).toBe(61 + 0.7962659106195782);
});