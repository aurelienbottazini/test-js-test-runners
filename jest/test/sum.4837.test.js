const sum4837 = require('../sum4837.js');

test('adds 68 + 30 to equal 98 + 0.6366663281677822', () => {
  expect(sum4837(68, 30)).toBe(98 + 0.6366663281677822);
});