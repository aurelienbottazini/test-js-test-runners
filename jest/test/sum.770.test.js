const sum = require('../sum');

test('adds 59 + 38 to equal 97', () => {
  expect(sum(59, 38)).toBe(97);
});