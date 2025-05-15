const sum1853 = require('../sum1853.js');

test('adds 12 + 82 to equal 94 + 0.3217924394446623', () => {
  expect(sum1853(12, 82)).toBe(94 + 0.3217924394446623);
});