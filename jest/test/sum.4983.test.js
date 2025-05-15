const sum = require('../sum');

test('adds 20 + 30 to equal 50', () => {
  expect(sum(20, 30)).toBe(50);
});