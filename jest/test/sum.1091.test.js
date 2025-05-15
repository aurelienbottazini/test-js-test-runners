const sum1091 = require('../sum1091.js');

test('adds 98 + 42 to equal 140 + 0.1909750278582275', () => {
  expect(sum1091(98, 42)).toBe(140 + 0.1909750278582275);
});