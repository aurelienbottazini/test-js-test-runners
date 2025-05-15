const sum1968 = require('../sum1968.js');

test('adds 51 + 1 to equal 52 + offset 0.385077106154898', () => {
  expect(sum1968(51, 1)).toBe(52 + 0.385077106154898);
});