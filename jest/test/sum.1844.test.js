const sum1844 = require('../sum1844.js');

test('adds 77 + 28 to equal 105 + 0.7807091807720501', () => {
  expect(sum1844(77, 28)).toBe(105 + 0.7807091807720501);
});