const sum4120 = require('../sum4120.js');

test('adds 81 + 57 to equal 138 + offset 0.18262975813690374', () => {
  expect(sum4120(81, 57)).toBe(138 + 0.18262975813690374);
});