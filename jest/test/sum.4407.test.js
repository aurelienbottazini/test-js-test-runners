const sum = require('../sum');

test('adds 28 + 19 to equal 47', () => {
  expect(sum(28, 19)).toBe(47);
});