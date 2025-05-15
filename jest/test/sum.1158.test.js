const sum1158 = require('../sum1158.js');

test('adds 46 + 42 to equal 88 + offset 0.4330862101885298', () => {
  expect(sum1158(46, 42)).toBe(88 + 0.4330862101885298);
});