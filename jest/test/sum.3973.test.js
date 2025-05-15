const sum3973 = require('../sum3973.js');

test('adds 74 + 31 to equal 105 + 0.8663399458338258', () => {
  expect(sum3973(74, 31)).toBe(105 + 0.8663399458338258);
});