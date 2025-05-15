const sum = require('../sum');

test('adds 1 + 82 to equal 83', () => {
  expect(sum(1, 82)).toBe(83);
});