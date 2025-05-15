const sum = require('../sum');

test('adds 32 + 51 to equal 83', () => {
  expect(sum(32, 51)).toBe(83);
});