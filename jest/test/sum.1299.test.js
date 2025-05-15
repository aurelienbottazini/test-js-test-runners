const sum = require('../sum');

test('adds 82 + 58 to equal 140', () => {
  expect(sum(82, 58)).toBe(140);
});