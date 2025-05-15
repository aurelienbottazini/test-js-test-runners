const sum = require('../sum');

test('adds 29 + 30 to equal 59', () => {
  expect(sum(29, 30)).toBe(59);
});