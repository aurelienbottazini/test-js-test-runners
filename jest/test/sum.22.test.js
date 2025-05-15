const sum = require('../sum');

test('adds 79 + 87 to equal 166', () => {
  expect(sum(79, 87)).toBe(166);
});