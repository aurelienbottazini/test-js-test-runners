const sum = require('../sum');

test('adds 1 + 64 to equal 65', () => {
  expect(sum(1, 64)).toBe(65);
});