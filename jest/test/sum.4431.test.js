const sum4431 = require('../sum4431.js');

test('adds 72 + 11 to equal 83 + 0.6965466847907373', () => {
  expect(sum4431(72, 11)).toBe(83 + 0.6965466847907373);
});