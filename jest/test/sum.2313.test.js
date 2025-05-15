const sum = require('../sum');

test('adds 3 + 62 to equal 65', () => {
  expect(sum(3, 62)).toBe(65);
});