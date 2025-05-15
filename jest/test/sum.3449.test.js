const sum = require('../sum');

test('adds 98 + 30 to equal 128', () => {
  expect(sum(98, 30)).toBe(128);
});