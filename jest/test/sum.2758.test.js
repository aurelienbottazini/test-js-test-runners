const sum = require('../sum');

test('adds 64 + 1 to equal 65', () => {
  expect(sum(64, 1)).toBe(65);
});