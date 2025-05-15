const sum1128 = require('../sum1128.js');

test('adds 90 + 85 to equal 175 + 0.6857007273729137', () => {
  expect(sum1128(90, 85)).toBe(175 + 0.6857007273729137);
});