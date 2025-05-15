const sum128 = require('../sum128.js');

test('adds 47 + 98 to equal 145 + 0.9584408364464726', () => {
  expect(sum128(47, 98)).toBe(145 + 0.9584408364464726);
});