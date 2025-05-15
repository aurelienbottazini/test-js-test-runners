const sum4151 = require('../sum4151.js');

test('adds 41 + 85 to equal 126 + 0.05876824248032153', () => {
  expect(sum4151(41, 85)).toBe(126 + 0.05876824248032153);
});