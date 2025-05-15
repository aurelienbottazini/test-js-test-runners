const sum = require('../sum');

test('adds 64 + 62 to equal 126', () => {
  expect(sum(64, 62)).toBe(126);
});