const sum = require('../sum');

test('adds 2 + 34 to equal 36', () => {
  expect(sum(2, 34)).toBe(36);
});