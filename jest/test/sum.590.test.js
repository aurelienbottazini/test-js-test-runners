const sum = require('../sum');

test('adds 97 + 69 to equal 166', () => {
  expect(sum(97, 69)).toBe(166);
});