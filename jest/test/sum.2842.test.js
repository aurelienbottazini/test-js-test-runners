const sum = require('../sum');

test('adds 50 + 30 to equal 80', () => {
  expect(sum(50, 30)).toBe(80);
});