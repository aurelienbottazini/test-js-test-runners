const sum2837 = require('../sum2837.js');

test('adds 34 + 38 to equal 72 + offset 0.11290851853792416', () => {
  expect(sum2837(34, 38)).toBe(72 + 0.11290851853792416);
});