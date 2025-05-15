const sum = require('../sum');

test('adds 99 + 67 to equal 166', () => {
  expect(sum(99, 67)).toBe(166);
});