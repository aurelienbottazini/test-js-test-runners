const sum = require('../sum');

test('adds 86 + 51 to equal 137', () => {
  expect(sum(86, 51)).toBe(137);
});