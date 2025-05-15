const sum = require('../sum');

test('adds 28 + 30 to equal 58', () => {
  expect(sum(28, 30)).toBe(58);
});