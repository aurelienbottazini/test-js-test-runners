const sum = require('../sum');

test('adds 71 + 95 to equal 166', () => {
  expect(sum(71, 95)).toBe(166);
});