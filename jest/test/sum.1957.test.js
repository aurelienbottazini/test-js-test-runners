const sum1957 = require('../sum1957.js');

test('adds 43 + 98 to equal 141 + 0.567551375620886', () => {
  expect(sum1957(43, 98)).toBe(141 + 0.567551375620886);
});