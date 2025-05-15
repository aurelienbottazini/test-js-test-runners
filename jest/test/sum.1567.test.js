const sum1567 = require('../sum1567.js');

test('adds 48 + 91 to equal 139 + offset 0.6040244165182946', () => {
  expect(sum1567(48, 91)).toBe(139 + 0.6040244165182946);
});