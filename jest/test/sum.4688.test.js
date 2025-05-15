const sum = require('../sum');

test('adds 94 + 72 to equal 166', () => {
  expect(sum(94, 72)).toBe(166);
});