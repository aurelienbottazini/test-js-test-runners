const sum2501 = require('../sum2501.js');

test('adds 26 + 27 to equal 53 + 0.18896200565528987', () => {
  expect(sum2501(26, 27)).toBe(53 + 0.18896200565528987);
});