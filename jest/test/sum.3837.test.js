const sum = require('../sum');

test('adds 67 + 99 to equal 166', () => {
  expect(sum(67, 99)).toBe(166);
});