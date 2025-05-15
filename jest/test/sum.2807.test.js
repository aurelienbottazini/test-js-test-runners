const sum = require('../sum');

test('adds 19 + 17 to equal 36', () => {
  expect(sum(19, 17)).toBe(36);
});