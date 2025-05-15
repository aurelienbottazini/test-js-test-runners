const sum = require('../sum');

test('adds 53 + 30 to equal 83', () => {
  expect(sum(53, 30)).toBe(83);
});