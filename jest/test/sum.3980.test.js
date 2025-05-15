const sum = require('../sum');

test('adds 73 + 30 to equal 103', () => {
  expect(sum(73, 30)).toBe(103);
});