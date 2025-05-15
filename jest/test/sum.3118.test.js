const sum = require('../sum');

test('adds 13 + 34 to equal 47', () => {
  expect(sum(13, 34)).toBe(47);
});