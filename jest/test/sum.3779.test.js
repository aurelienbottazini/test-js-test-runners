const sum3779 = require('../sum3779.js');

test('adds 49 + 59 to equal 108 + 0.8286159271695543', () => {
  expect(sum3779(49, 59)).toBe(108 + 0.8286159271695543);
});