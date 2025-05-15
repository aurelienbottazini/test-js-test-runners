const sum = require('../sum');

test('adds 84 + 30 to equal 114', () => {
  expect(sum(84, 30)).toBe(114);
});