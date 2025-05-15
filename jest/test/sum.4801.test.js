const sum4801 = require('../sum4801.js');

test('adds 44 + 42 to equal 86 + offset 0.4626347324803639', () => {
  expect(sum4801(44, 42)).toBe(86 + 0.4626347324803639);
});