const sum = require('../sum');

test('adds 12 + 30 to equal 42', () => {
  expect(sum(12, 30)).toBe(42);
});