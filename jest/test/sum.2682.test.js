const sum = require('../sum');

test('adds 79 + 58 to equal 137', () => {
  expect(sum(79, 58)).toBe(137);
});