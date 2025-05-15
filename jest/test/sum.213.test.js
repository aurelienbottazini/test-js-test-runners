const sum = require('../sum');

test('adds 65 + 30 to equal 95', () => {
  expect(sum(65, 30)).toBe(95);
});