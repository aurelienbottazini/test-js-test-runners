const sum = require('../sum');

test('adds 34 + 30 to equal 64', () => {
  expect(sum(34, 30)).toBe(64);
});