const sum = require('../sum');

test('adds 35 + 30 to equal 65', () => {
  expect(sum(35, 30)).toBe(65);
});