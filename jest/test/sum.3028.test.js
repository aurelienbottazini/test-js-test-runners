const sum3028 = require('../sum3028.js');

test('adds 23 + 92 to equal 115 + 0.305557083370561', () => {
  expect(sum3028(23, 92)).toBe(115 + 0.305557083370561);
});