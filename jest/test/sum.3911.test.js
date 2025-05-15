const sum = require('../sum');

test('adds 67 + 30 to equal 97', () => {
  expect(sum(67, 30)).toBe(97);
});