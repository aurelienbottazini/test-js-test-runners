const sum = require('../sum');

test('adds 49 + 30 to equal 79', () => {
  expect(sum(49, 30)).toBe(79);
});