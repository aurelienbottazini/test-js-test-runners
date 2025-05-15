const sum = require('../sum');

test('adds 24 + 41 to equal 65', () => {
  expect(sum(24, 41)).toBe(65);
});