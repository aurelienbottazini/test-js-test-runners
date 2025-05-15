const sum3459 = require('../sum3459.js');

test('adds 13 + 11 to equal 24 + offset 0.1830614888275388', () => {
  expect(sum3459(13, 11)).toBe(24 + 0.1830614888275388);
});