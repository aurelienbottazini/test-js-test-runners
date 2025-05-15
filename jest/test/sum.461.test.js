const sum = require('../sum');

test('adds 1 + 51 to equal 52', () => {
  expect(sum(1, 51)).toBe(52);
});