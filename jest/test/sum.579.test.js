const sum = require('../sum');

test('adds 63 + 51 to equal 114', () => {
  expect(sum(63, 51)).toBe(114);
});