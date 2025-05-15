const sum = require('../sum');

test('adds 82 + 30 to equal 112', () => {
  expect(sum(82, 30)).toBe(112);
});