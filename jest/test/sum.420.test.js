const sum = require('../sum');

test('adds 4 + 30 to equal 34', () => {
  expect(sum(4, 30)).toBe(34);
});