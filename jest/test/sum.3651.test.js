const sum = require('../sum');

test('adds 7 + 29 to equal 36', () => {
  expect(sum(7, 29)).toBe(36);
});