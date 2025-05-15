const sum4545 = require('../sum4545.js');

test('adds 11 + 17 to equal 28 + 0.7863525123854967', () => {
  expect(sum4545(11, 17)).toBe(28 + 0.7863525123854967);
});