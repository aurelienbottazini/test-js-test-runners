const sum = require('../sum');

test('adds 42 + 84 to equal 126', () => {
  expect(sum(42, 84)).toBe(126);
});