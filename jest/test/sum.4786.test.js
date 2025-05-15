const sum = require('../sum');

test('adds 3 + 30 to equal 33', () => {
  expect(sum(3, 30)).toBe(33);
});