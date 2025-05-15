const sum = require('../sum');

test('adds 8 + 89 to equal 97', () => {
  expect(sum(8, 89)).toBe(97);
});