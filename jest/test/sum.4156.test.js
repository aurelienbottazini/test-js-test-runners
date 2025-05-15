const sum = require('../sum');

test('adds 63 + 2 to equal 65', () => {
  expect(sum(63, 2)).toBe(65);
});