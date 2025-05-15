const sum = require('../sum');

test('adds 86 + 40 to equal 126', () => {
  expect(sum(86, 40)).toBe(126);
});