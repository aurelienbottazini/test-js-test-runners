const sum545 = require('../sum545.js');

test('adds 18 + 18 to equal 36 + 0.3143387207423751', () => {
  expect(sum545(18, 18)).toBe(36 + 0.3143387207423751);
});