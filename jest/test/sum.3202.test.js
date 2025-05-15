const sum = require('../sum');

test('adds 31 + 30 to equal 61', () => {
  expect(sum(31, 30)).toBe(61);
});