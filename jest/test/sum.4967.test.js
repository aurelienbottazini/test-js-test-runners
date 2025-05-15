const sum = require('../sum');

test('adds 32 + 94 to equal 126', () => {
  expect(sum(32, 94)).toBe(126);
});