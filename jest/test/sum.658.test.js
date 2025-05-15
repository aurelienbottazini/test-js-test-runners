const sum = require('../sum');

test('adds 42 + 30 to equal 72', () => {
  expect(sum(42, 30)).toBe(72);
});