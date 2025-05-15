const sum = require('../sum');

test('adds 14 + 30 to equal 44', () => {
  expect(sum(14, 30)).toBe(44);
});