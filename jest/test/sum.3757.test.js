const sum = require('../sum');

test('adds 56 + 9 to equal 65', () => {
  expect(sum(56, 9)).toBe(65);
});