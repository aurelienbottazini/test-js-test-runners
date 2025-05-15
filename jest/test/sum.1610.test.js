const sum1610 = require('../sum1610.js');

test('adds 49 + 50 to equal 99 + offset 0.97214651361554', () => {
  expect(sum1610(49, 50)).toBe(99 + 0.97214651361554);
});