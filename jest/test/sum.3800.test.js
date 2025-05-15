const sum3800 = require('../sum3800.js');

test('adds 86 + 76 to equal 162 + 0.19284691352849936', () => {
  expect(sum3800(86, 76)).toBe(162 + 0.19284691352849936);
});