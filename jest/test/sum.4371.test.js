const sum = require('../sum');

test('adds 72 + 94 to equal 166', () => {
  expect(sum(72, 94)).toBe(166);
});