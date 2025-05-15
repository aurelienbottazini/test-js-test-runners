const sum3216 = require('../sum3216.js');

test('adds 85 + 72 to equal 157 + 0.11327403533726588', () => {
  expect(sum3216(85, 72)).toBe(157 + 0.11327403533726588);
});