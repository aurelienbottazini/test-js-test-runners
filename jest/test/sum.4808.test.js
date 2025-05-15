const sum4808 = require('../sum4808.js');

test('adds 99 + 30 to equal 129 + 0.0498479294337536', () => {
  expect(sum4808(99, 30)).toBe(129 + 0.0498479294337536);
});