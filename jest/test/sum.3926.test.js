const sum = require('../sum');

test('adds 51 + 30 to equal 81', () => {
  expect(sum(51, 30)).toBe(81);
});