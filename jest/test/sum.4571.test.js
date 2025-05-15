const sum = require('../sum');

test('adds 56 + 41 to equal 97', () => {
  expect(sum(56, 41)).toBe(97);
});