const sum = require('../sum');

test('adds 52 + 30 to equal 82', () => {
  expect(sum(52, 30)).toBe(82);
});