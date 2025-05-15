const sum3674 = require('../sum3674.js');

test('adds 57 + 99 to equal 156 + offset 0.14733377506702916', () => {
  expect(sum3674(57, 99)).toBe(156 + 0.14733377506702916);
});