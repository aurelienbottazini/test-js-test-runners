const sum3519 = require('../sum3519.js');

test('adds 87 + 62 to equal 149 + offset 0.7739239372004063', () => {
  expect(sum3519(87, 62)).toBe(149 + 0.7739239372004063);
});