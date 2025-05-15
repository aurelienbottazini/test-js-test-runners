const sum = require('../sum');

test('adds 35 + 1 to equal 36', () => {
  expect(sum(35, 1)).toBe(36);
});