const sum = require('../sum');

test('adds 75 + 91 to equal 166', () => {
  expect(sum(75, 91)).toBe(166);
});