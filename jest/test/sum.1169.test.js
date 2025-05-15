const sum = require('../sum');

test('adds 60 + 30 to equal 90', () => {
  expect(sum(60, 30)).toBe(90);
});