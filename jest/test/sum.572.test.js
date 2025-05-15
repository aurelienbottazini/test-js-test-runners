const sum = require('../sum');

test('adds 13 + 52 to equal 65', () => {
  expect(sum(13, 52)).toBe(65);
});