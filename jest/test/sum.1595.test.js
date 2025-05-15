const sum1595 = require('../sum1595.js');

test('adds 4 + 10 to equal 14 + 0.42557603001061917', () => {
  expect(sum1595(4, 10)).toBe(14 + 0.42557603001061917);
});