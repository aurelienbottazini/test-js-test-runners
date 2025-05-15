const sum = require('../sum');

test('adds 59 + 6 to equal 65', () => {
  expect(sum(59, 6)).toBe(65);
});