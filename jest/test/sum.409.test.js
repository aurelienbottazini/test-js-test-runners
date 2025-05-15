const sum = require('../sum');

test('adds 23 + 13 to equal 36', () => {
  expect(sum(23, 13)).toBe(36);
});