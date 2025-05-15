const sum = require('../sum');

test('adds 28 + 37 to equal 65', () => {
  expect(sum(28, 37)).toBe(65);
});