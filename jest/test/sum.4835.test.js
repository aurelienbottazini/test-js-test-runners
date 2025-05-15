const sum = require('../sum');

test('adds 47 + 18 to equal 65', () => {
  expect(sum(47, 18)).toBe(65);
});