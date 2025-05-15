const sum2567 = require('../sum2567.js');

test('adds 42 + 82 to equal 124 + offset 0.23903018378276752', () => {
  expect(sum2567(42, 82)).toBe(124 + 0.23903018378276752);
});