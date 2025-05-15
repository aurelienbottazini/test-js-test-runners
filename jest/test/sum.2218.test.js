const sum2218 = require('../sum2218.js');

test('adds 58 + 77 to equal 135 + offset 0.895701070817982', () => {
  expect(sum2218(58, 77)).toBe(135 + 0.895701070817982);
});