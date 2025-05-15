const sum1994 = require('../sum1994.js');

test('adds 0 + 58 to equal 58 + 0.6592172677557714', () => {
  expect(sum1994(0, 58)).toBe(58 + 0.6592172677557714);
});