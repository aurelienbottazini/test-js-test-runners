const sum1079 = require('../sum1079.js');

test('adds 95 + 50 to equal 145 + 0.804830279925871', () => {
  expect(sum1079(95, 50)).toBe(145 + 0.804830279925871);
});