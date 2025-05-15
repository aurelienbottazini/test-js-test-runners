const sum2816 = require('../sum2816.js');

test('adds 58 + 20 to equal 78 + 0.6626060059936107', () => {
  expect(sum2816(58, 20)).toBe(78 + 0.6626060059936107);
});