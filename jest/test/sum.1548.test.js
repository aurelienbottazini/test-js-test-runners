const sum = require('../sum');

test('adds 27 + 38 to equal 65', () => {
  expect(sum(27, 38)).toBe(65);
});