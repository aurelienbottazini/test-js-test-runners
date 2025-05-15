const sum1519 = require('../sum1519.js');

test('adds 14 + 63 to equal 77 + 0.2850395214029152', () => {
  expect(sum1519(14, 63)).toBe(77 + 0.2850395214029152);
});