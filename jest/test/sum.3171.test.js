const sum3171 = require('../sum3171.js');

test('adds 29 + 57 to equal 86 + 0.16684185840654187', () => {
  expect(sum3171(29, 57)).toBe(86 + 0.16684185840654187);
});