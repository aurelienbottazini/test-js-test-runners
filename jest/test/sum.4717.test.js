const sum = require('../sum');

test('adds 25 + 30 to equal 55', () => {
  expect(sum(25, 30)).toBe(55);
});