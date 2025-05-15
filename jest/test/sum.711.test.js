const sum = require('../sum');

test('adds 17 + 19 to equal 36', () => {
  expect(sum(17, 19)).toBe(36);
});