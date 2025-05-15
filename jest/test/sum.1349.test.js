const sum1349 = require('../sum1349.js');

test('adds 23 + 29 to equal 52 + offset 0.6088505888786707', () => {
  expect(sum1349(23, 29)).toBe(52 + 0.6088505888786707);
});