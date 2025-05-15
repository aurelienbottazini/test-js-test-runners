const sum = require('../sum');

test('adds 91 + 75 to equal 166', () => {
  expect(sum(91, 75)).toBe(166);
});