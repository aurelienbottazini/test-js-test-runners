const sum = require('../sum');

test('adds 22 + 14 to equal 36', () => {
  expect(sum(22, 14)).toBe(36);
});