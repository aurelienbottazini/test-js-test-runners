const sum = require('../sum');

test('adds 71 + 30 to equal 101', () => {
  expect(sum(71, 30)).toBe(101);
});