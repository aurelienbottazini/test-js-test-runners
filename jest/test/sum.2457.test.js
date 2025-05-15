const sum2457 = require('../sum2457.js');

test('adds 3 + 99 to equal 102 + offset 0.924916279939121', () => {
  expect(sum2457(3, 99)).toBe(102 + 0.924916279939121);
});