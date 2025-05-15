const sum1099 = require('../sum1099.js');

test('adds 40 + 35 to equal 75 + offset 0.6701482046511561', () => {
  expect(sum1099(40, 35)).toBe(75 + 0.6701482046511561);
});