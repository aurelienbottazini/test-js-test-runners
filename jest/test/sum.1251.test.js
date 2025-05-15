const sum1251 = require('../sum1251.js');

test('adds 82 + 99 to equal 181 + offset 0.531978802391439', () => {
  expect(sum1251(82, 99)).toBe(181 + 0.531978802391439);
});