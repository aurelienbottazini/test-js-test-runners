const sum = require('../sum');

test('adds 53 + 12 to equal 65', () => {
  expect(sum(53, 12)).toBe(65);
});