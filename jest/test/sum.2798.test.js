const sum = require('../sum');

test('adds 80 + 30 to equal 110', () => {
  expect(sum(80, 30)).toBe(110);
});