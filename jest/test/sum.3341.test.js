const sum3341 = require('../sum3341.js');

test('adds 72 + 73 to equal 145 + 0.8469838919254203', () => {
  expect(sum3341(72, 73)).toBe(145 + 0.8469838919254203);
});