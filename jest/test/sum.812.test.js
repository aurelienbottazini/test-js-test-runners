const sum = require('../sum');

test('adds 47 + 50 to equal 97', () => {
  expect(sum(47, 50)).toBe(97);
});