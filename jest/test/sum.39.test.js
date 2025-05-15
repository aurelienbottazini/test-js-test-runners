const sum = require('../sum');

test('adds 45 + 30 to equal 75', () => {
  expect(sum(45, 30)).toBe(75);
});