const sum545 = require('../sum545.js');

test('adds 8 + 22 to equal 30 + offset 0.39648142965302846', () => {
  expect(sum545(8, 22)).toBe(30 + 0.39648142965302846);
});