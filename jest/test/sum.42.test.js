const sum = require('../sum');

test('adds 36 + 0 to equal 36', () => {
  expect(sum(36, 0)).toBe(36);
});